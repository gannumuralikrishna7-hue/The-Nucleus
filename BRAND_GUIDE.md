# The Nucleus — Brand & Design Reference

Use this as the source of truth for colors, type, logo, and voice when generating or reviewing content, UI, or marketing material for The Nucleus.

## Positioning

The Nucleus is an AI-powered CRM that unifies Gmail, WhatsApp, calls, and Google Workspace into one workspace, with automation (auto-workflows, custom baskets and rules) that moves deals through the pipeline on its own. The site's aesthetic is a premium, professional **light-mode** design meant to read as trustworthy and clear, enterprise-grade rather than "startup loud."

## Color Palette

| Role | Hex | RGB | Usage |
|---|---|---|---|
| Brand orange (primary accent) | `#F97316` | 249, 115, 22 | Primary CTA buttons, active states, single-keyword highlights inside headings, icon accents, logo |
| Brand orange, hover/dark | `#EA580C` | 234, 88, 12 | Hover/pressed state of primary buttons and links |
| Brand orange, soft tint | `#FFF1E7` | 255, 241, 231 | Light backgrounds behind orange icon chips, badges, highlighted rows |
| Ink (headings) | `#0F172A` | 15, 23, 42 | All headings, primary body copy that needs full contrast, nav text |
| Body (secondary text) | `#475569` | 71, 85, 105 | Paragraph copy, descriptions |
| Muted (tertiary text) | `#94A3B8` | 148, 163, 184 | Timestamps, captions, placeholder-level text, eyebrow labels' secondary parts |
| Border | `#E2E8F0` | 226, 232, 240 | Card borders, dividers, input borders |
| Background, primary | `#FFFFFF` | 255, 255, 255 | Page background, cards |
| Background, alternate | `#F8FAFC` | 248, 250, 252 | Alternating section backgrounds, subtle surface fills |
| Success / positive | `#16A34A` | 22, 163, 74 | "Won," growth %, positive metrics only |
| Success, soft tint | `#F0FDF4` | 240, 253, 244 | Background behind success badges |

**Rule:** Orange is the only brand accent color. Never tint a full heading orange, only a single keyword or short phrase within it. Never introduce a second accent hue (no blues/purples/teals as brand colors); the small brand-colored icons used for Gmail/WhatsApp/etc. are third-party product colors, not part of The Nucleus's own palette, and stay minimal.

## Typography

- Typeface: **Inter** (`--font-inter`), system-ui fallback.
- Monospace (for code/AI-draft mockups only): **JetBrains Mono**.
- Headings: extrabold/black weight, tight tracking (`letter-spacing: -0.02em` to `-0.03em`).
- Body: regular weight, relaxed line height.

## Logo

A minimal "atom" mark: a solid core circle with three thin orbit ellipses crossing it at 0°, 60°, and 120°, each with a small "electron" dot, all in the brand orange on a transparent/white background. On the web it spins 180° on hover as a small interactive touch. Do not recolor it, add gradients, or use the earlier bright-red apple-emoji or rust/brown color variants tried during design iteration — orange (`#F97316`) is final.

## Voice & Copy Rules

- Clear, direct, human. No marketing fluff, no hype-speak.
- **Never use em dashes (—) or en dashes (–).** Use periods, commas, or "and"/"but" instead.
- Highlight at most one keyword (or a short 2-word phrase) per heading in orange, never the whole line.
- No fabricated stats. Real, specific proof points only (e.g., named customers, concrete percentages you can stand behind), not generic "2,000+ teams" style filler.
- Product language should reflect what The Nucleus actually does: auto-workflows/rules moving pipeline cards between stages, custom baskets for grouping deals, Contacts split into Basic Info (name, company, designation, email, phone, profile link) and Communication (latest email, WhatsApp, call recording) with no lead score shown on the contact card itself (scoring only appears in AI/lead-tracking contexts).

## Layout Conventions

- Generous whitespace, `py-24`/`py-32` section padding.
- Cards: white background, `1px solid #E2E8F0` border, subtle shadow (`0 4px 16px rgba(15,23,42,0.04)` resting, deeper on hover/featured).
- Rounded corners: `rounded-xl` (12px) to `rounded-2xl` (16px).
- Buttons: solid orange primary, white/outlined secondary, `rounded-xl`, medium-to-bold weight text.
