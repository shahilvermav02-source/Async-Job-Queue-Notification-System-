import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

export const sendMail = async ({ to, subject, text }) => {
  const info = await transporter.sendMail({
    from: "noreply@example.com",
    to,
    subject,
    text,
  });

  return info;
};