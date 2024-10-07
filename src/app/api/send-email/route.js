// app/api/send-email/route.js

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Parse the request body to get the email details
    const { to, cc, subject, text, html } = await request.json();

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Your SMTP server (e.g., 'smtp.gmail.com' for Gmail)
      port: 587, // Use 465 for SSL, or 587 for TLS
      secure: false, // Set to true if using SSL
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or an app-specific password if using Gmail
      },
    });

    // Set up email data
    let mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to, // List of receivers
      cc, // User's email as CC
      subject, // Subject line
      text, // Plain text body
      html, // HTML body
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent", info }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
