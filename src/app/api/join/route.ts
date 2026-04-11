import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, company, role, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from:    process.env.MAIL_FROM,
      to:      process.env.MAIL_TO,
      subject: "Join the Movement — New Application",
      text: `
Name:     ${name}
Email:    ${email}
Company:  ${company  || "—"}
Role:     ${role     || "—"}
Message:
${message || "—"}
      `.trim(),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Join application error:", msg);
    return new Response(JSON.stringify({ error: "Email failed" }), {
      status: 500,
    });
  }
}
