# Connecting the enquiry form to Google Sheets

The "Get Started" enquiry form now posts to `/api/enquiry` in this app, which forwards
the submission to a Google Apps Script "web app" bound to your sheet. That script is
what actually appends the row. I can't deploy it for you since it has to run under your
own Google account, so here's exactly what to do (about 5 minutes):

> **Already deployed once and just fixing the phone number bug (round 2)?** The
> apostrophe trick in the first fix turned out not to be reliable when writing via the
> API (it's really meant for typing directly into the UI). The version below instead
> forces the cell's format to Plain Text, which is the more reliable fix. You don't
> need to redo the whole setup:
> 1. Open the sheet → **Extensions → Apps Script**.
> 2. Select all the code in `Code.gs`, delete it, paste in the updated version from
>    step 2 below, and save (Ctrl+S).
> 3. **Deploy → Manage deployments** → click the pencil/edit icon on your existing
>    deployment → under **Version**, choose **New version** → **Deploy**.
>    (Editing the code alone does *not* update what the live URL serves, you have to
>    push a new version. The URL itself stays the same, so nothing on the Next.js side
>    needs to change.)
> 4. Also worth doing: open the sheet and delete the test rows in row 2+ with "Claude
>    Verification" / "Anthropic QA", those were me verifying the pipeline, both still
>    have `#ERROR!` in the phone column since both predate this fix.

## 1. Open the Apps Script editor

Open your sheet: https://docs.google.com/spreadsheets/d/18ru6yepzdG9PrSltDh1DUoPSUpXFXW8YfVcgGKr6dbs/edit

Then: **Extensions → Apps Script**. It opens a new tab with a blank `Code.gs`.

## 2. Paste this in, replacing everything in the editor

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Full Name", "Company", "Work email", "Phone number", "Date", "Time"]);
      sheet.getRange(1, 1, 1, 6).setNumberFormat("@");
    }

    var now = new Date();
    var tz = Session.getScriptTimeZone();
    var date = Utilities.formatDate(now, tz, "yyyy-MM-dd");
    var time = Utilities.formatDate(now, tz, "HH:mm:ss");

    var row = sheet.getLastRow() + 1;
    var range = sheet.getRange(row, 1, 1, 6);
    // Force every cell in this row to Plain Text first, so Sheets never tries
    // to parse a value starting with +, =, -, or @ as a formula or number.
    range.setNumberFormat("@");
    range.setValues([[
      String(data.name || ""),
      String(data.company || ""),
      String(data.email || ""),
      String(data.phone || ""),
      date,
      time,
    ]]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Save it (the disk icon, or Ctrl+S). Name the project whatever you like when prompted,
e.g. "Enquiry form handler".

## 3. Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me (your account)
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Google will ask you to authorize the script, this is your own script running under
   your own account, so it's safe to approve. Click through **Authorize access → pick
   your account → Advanced → Go to [project name] (unsafe) → Allow**. ("Unsafe" here
   just means Google hasn't manually reviewed your personal script; that's expected
   for anything you deploy yourself.)
6. Copy the **Web app URL** it gives you, it looks like
   `https://script.google.com/macros/s/AKfycb.../exec`.

## 4. Give me that URL

Paste it to me, or drop it into `.env.local` yourself as:

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
```

Then restart the dev server. Once that's set, every enquiry form submission will
append a row to your sheet with columns: **Full Name, Company, Work email, Phone
number, Date, Time**, Date and Time are filled in automatically from when the
script runs.

## If you ever change the form or the sheet

- If you add/remove a form field, update both the `EnquiryForm` component
  (`components/ui/EnquiryModal.tsx`) and the `data.xxx` fields read in step 2 above,
  they have to match.
- If something stops appending, re-open the Apps Script project and check
  **Executions** (left sidebar) for the error log.
