 import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

(async ()=>{
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: { 
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS 
    }
  });

  try {
    await transporter.verify();
    console.log("SMTP verify: OK");

    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.SMTP_USER,     
      subject: "Test Email",
      text: "Hello — this is a test email"
    });

    console.log("Email Sent! ID:", info.messageId);
  } catch (err) {
    console.error("SMTP error:", err);
  }
})();
