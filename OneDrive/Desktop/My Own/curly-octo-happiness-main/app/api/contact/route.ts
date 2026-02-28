//app/api/contact/route.ts
export const runtime = 'nodejs';
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    // Initialize Resend INSIDE the function, not at the top
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Math Worksheet <noreply@homeschoolmath.site>",
      to: ["bob@homeschoolmath.site"],
      replyTo: email,
      subject: subject ? `Contact Form: ${subject}` : `Message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
