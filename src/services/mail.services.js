import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: Number(process.env.MAILTRAP_PORT),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

export const sendMail = async ({to}) => {
  const info = await transporter.sendMail({
    from: "noreply@example.com",
    to,
    subject:"Welcome mail form shahil verma",
    text:"the is the welcome by shahil verma , I am learnign the bull mq for better api response",
  });

  return info;
};
