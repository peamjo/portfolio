import nodemailer from "nodemailer"
import { NextApiRequest, NextApiResponse } from "next";

export default async function ContactAPI(req: NextApiRequest, res: NextApiResponse) {
  const { name, number, email, subject, message } = req.body;
  const user = "peam2417@gmail.com";
  const data = {
    name,
    number,
    email,
    subject,
    message,
  };
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "peam2417@gmail.com",
      pass: "ropveebqqmtijpnm",
    },
  });
  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "peamjo.business@gmail.com",
      replyTo: email,
      subject: subject,
      html: `
            <p>Name: ${name}</p>
            <p>Number: ${number}</p>
            <p>E-Mail: ${email}</p>
            <p>Message:</p>
            <p>${message}</p>
            `,
    });

    console.log("Message sent:", mail.messageId);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Could not send the email." });
  }
  return res.status(200).json({ message: "success" });
}