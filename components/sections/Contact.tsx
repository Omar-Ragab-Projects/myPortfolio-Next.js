"use client";
import React from "react";
import SectionHeader from "../SectionHeader";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../SubmitBtn";
export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-[min(100%,38rem)] mb-28 sm:mb-40 text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeader>Contact me</SectionHeader>
      <p className="text-gray-700 -mt-6 dark:text-gray-400">
        Please contact me directly at{" "}
        <a href="mailto:tryragab@gmail.com" className="underline">
          tryragab@gmail.com
        </a>{" "}
        or throw this form.
      </p>
      <form
        className="flex flex-col  mt-10"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg border border-black/10 px-4 dark:bg-gray-900 dark:border-white/10 dark:outline-none"
          placeholder="Your Email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 border border-black/10  p-4 my-3 rounded-lg dark:bg-gray-900 dark:border-white/10 dark:outline-none"
          name="message"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
