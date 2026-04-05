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
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; color: #c0c8d8;">
          <h2 style="color: #ffffff;">Welcome to the KronoGuard waitlist</h2>
          <p>Thanks for signing up. We are building the policy plane for agent fleets and you will be among the first to know when it is ready.</p>
          <p>In the meantime, you can follow progress on <a href="https://github.com/kronoguard" style="color: #00aaff;">GitHub</a>.</p>
          <p style="margin-top: 32px; font-size: 13px; color: #8892a4;">
            KronoGuard &middot; kronoguard.io
          </p>
        </div>
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
