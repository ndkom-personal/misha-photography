import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log the submission (in production, you'd send this to an email service)
    console.log("New booking request:", data);

    // Here you would typically:
    // 1. Send an email notification (using Resend, SendGrid, etc.)
    // 2. Save to a database
    // 3. Create a calendar event

    // For now, we'll just simulate a successful submission
    // TODO: Add email service integration (e.g., Resend)

    // Example with Resend (uncomment and configure when ready):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Misha Photography <bookings@mishaphoto.com>',
    //   to: ['your-email@example.com'],
    //   subject: `New Booking Request: ${data.service} session`,
    //   html: `
    //     <h2>New Booking Request</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    //     <p><strong>Service:</strong> ${data.service}</p>
    //     <p><strong>Preferred Date:</strong> ${data.date || 'Flexible'}</p>
    //     <p><strong>Message:</strong> ${data.message || 'No message'}</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing booking request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
