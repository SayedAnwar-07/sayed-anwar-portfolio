import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  number?: string;
  message: string;
};

function validatePayload(data: Partial<ContactPayload>): string[] {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length < 2) errors.push("Name is required (min 2 characters).");
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push("A valid email is required.");
  if (!data.message || data.message.trim().length < 5) errors.push("Message is required (min 5 characters).");
  return errors;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, number, message } = body as ContactPayload;

    const errors = validatePayload({ name, email, message });
    if (errors.length > 0) return NextResponse.json({ ok: false, errors }, { status: 400 });

    const SMTP_USER = process.env.SMTP_GMAIL;
    const SMTP_PASS = process.env.SMTP_PASSWORD;
    const RECEIVER_EMAIL = "sayedanwarofficial@gmail.com";

    if (!SMTP_USER || !SMTP_PASS)
      return NextResponse.json({ ok: false, error: "Mail server not configured." }, { status: 500 });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // 📅 Format readable time
    const time = new Date().toLocaleString("en-BD", {
      dateStyle: "medium",
      timeStyle: "short",
    });


    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Message Received</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body{
      font-family: 'Roboto', Arial, sans-serif;
      font-size:14px; line-height:1.5; color:#202124;
      background:#f8f9fa; padding:20px;
    }
    .email-container{
      max-width:600px; margin:0 auto; background:#fff; border-radius:8px;
      box-shadow:0 1px 3px rgba(60,64,67,.3), 0 4px 8px rgba(60,64,67,.15);
      overflow:hidden;
    }
    .email-header{ color:#000; border-bottom:1px solid #000; padding:20px 24px; }
    .email-header h1{ font-size:18px; font-weight:500; margin-bottom:4px; }
    .email-header p{ opacity:.9; font-size:14px; }
    .message-content{ padding:0; }
    .message-card{ padding:24px; border-bottom:1px solid #e8eaed; }
    .sender-name{ font-size:16px; font-weight:500; margin-bottom:4px; }
    .message-time{ color:#5f6368; font-size:13px; }
    .message-details{ margin-top:16px; }
    .detail-row{
      display:flex; align-items:flex-start; gap:12px;
      padding:8px 0; border-bottom:1px solid #f1f3f4;
    }
    .detail-row:last-child{ border-bottom:none; }
    .detail-label{ width:80px; flex-shrink:0; color:#5f6368; font-weight:500; }
    .detail-value{ color:#202124; flex:1; word-break:break-word; }
    .message-box{
      background:#f8f9fa; padding:16px; border-radius:4px; margin-top:8px;
      white-space:pre-wrap;
    }
    .email-footer{
      padding:20px 24px; text-align:center; color:#5f6368;
      font-size:12px; border-top:1px solid #e8eaed;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>New Message Received</h1>
      <p>A message by <strong>${name}</strong> has been received. Kindly respond at your earliest convenience.</p>
    </div>

    <div class="message-content">
      <div class="message-card">
        <div class="sender-name">${name}</div>
        <div class="message-time">${time}</div>

        <div class="message-details">
          <div class="detail-row">
            <div class="detail-label">Email :</div>
            <div class="detail-value">${email}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Phone:</div>
            <div class="detail-value">${number ?? "N/A"}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Message:</div>
            <div class="detail-value">
              <div class="message-box">${message.replace(/\n/g, "<br/>")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="email-footer">
      This message was sent via the contact form on your website.
    </div>
  </div>
</body>
</html>`;

    // 📧 Send mail
    await transporter.sendMail({
      from: `${name} from Saeed Tamim <${SMTP_USER}>`,
      to: RECEIVER_EMAIL, 
      subject: `New contact form submission from ${name}`,
      html,
    });

    return NextResponse.json({ ok: true, message: "Message sent successfully." });
  } catch (error: unknown) {
    console.error("Error in /api/contact:", error);
    let message = "Internal server error.";
    if (error instanceof Error) message = error.message;
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
