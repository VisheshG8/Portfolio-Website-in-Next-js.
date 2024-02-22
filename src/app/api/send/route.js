import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: `<p>Your Message : ${message}<strong>Thanks for contacting.</strong>!</p>`
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({error});
  }
}