"use server";

import toast from "react-hot-toast";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (
    !message ||
    typeof message !== "string" ||
    typeof senderEmail !== "string"
  ) {
    return {
      error: "Invalid message",
    };
  }

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "tryragab@gmail.com",
    subject: "Message from contact form",
    reply_to: senderEmail,
    text: message,
  });


};
