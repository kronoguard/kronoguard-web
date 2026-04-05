import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    // Send the welcome / confirmation email
    const { error } = await resend.emails.send({
      from: "KronoGuard <waitlist@kronoguard.io>",
      to: email,
      subject: "You are on the KronoGuard waitlist",
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0; padding:0; background-color:#0a0f1e; font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0f1e;">
    <tr><td align="center" style="padding:48px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

        <!-- Logo -->
        <tr><td style="padding-bottom:32px;">
          <span style="font-size:20px; font-weight:600; color:#ffffff; letter-spacing:-0.3px;">KronoGuard</span>
        </td></tr>

        <!-- Divider -->
        <tr><td style="border-top:1px solid rgba(255,255,255,0.06); padding-top:32px;">

          <h1 style="margin:0 0 16px; font-size:24px; font-weight:600; color:#ffffff; letter-spacing:-0.3px;">
            You are on the waitlist.
          </h1>

          <p style="margin:0 0 20px; font-size:16px; line-height:1.7; color:#c0c8d8;">
            Thanks for signing up. We are building the policy plane for agent fleets and you will be among the first to know when it is ready.
          </p>

          <p style="margin:0 0 32px; font-size:16px; line-height:1.7; color:#c0c8d8;">
            In the meantime, you can follow progress on
            <a href="https://github.com/kronoguard" style="color:#00aaff; text-decoration:none;">GitHub</a>.
          </p>

        </td></tr>

        <!-- Divider -->
        <tr><td style="border-top:1px solid rgba(255,255,255,0.06); padding-top:24px;">
          <p style="margin:0; font-size:13px; color:#8892a4;">
            KronoGuard &middot;
            <a href="https://kronoguard.io" style="color:#8892a4; text-decoration:none;">kronoguard.io</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
