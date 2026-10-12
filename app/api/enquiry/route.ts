import { NextRequest, NextResponse } from "next/server";

interface EnquiryPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
}

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL is not set");
    return NextResponse.json(
      { ok: false, error: "Enquiry collection is not configured yet." },
      { status: 503 }
    );
  }

  let body: EnquiryPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, phone } = body;
  if (!name || !company || !email || !phone) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  try {
    const sheetRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, company, email, phone }),
      redirect: "follow",
    });

    if (!sheetRes.ok) {
      const text = await sheetRes.text().catch(() => "");
      console.error("Google Sheets webhook returned an error:", sheetRes.status, text);
      return NextResponse.json({ ok: false, error: "Could not save enquiry." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to reach Google Sheets webhook:", err);
    return NextResponse.json({ ok: false, error: "Could not save enquiry." }, { status: 502 });
  }
}
