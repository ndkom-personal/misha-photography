import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const serviceNames: Record<string, string> = {
      business: "Business Photography ($600)",
      portrait: "Business Photography ($600)",
      family: "Family Session ($899)",
    };

    const serviceName = serviceNames[data.service] || data.service;

    // Only send email if API key is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Misha Bay Photography <onboarding@resend.dev>",
        to: ["mishabayarea@gmail.com"],
        replyTo: data.email,
        subject: `New Booking Request: ${serviceName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a1a;">New Booking Request</h2>
            <p>You have received a new booking request from mishabay.com</p>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${data.email}">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Date</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.date || "Flexible"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Message</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.message || "No message"}</td>
              </tr>
            </table>

            <p style="color: #666; font-size: 14px;">
              Reply directly to this email to respond to the client.
            </p>
          </div>
        `,
      });
    } else {
      console.log("RESEND_API_KEY not configured. Booking request:", data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing booking request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
