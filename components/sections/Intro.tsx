"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsDownload } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section ref={ref} id="home" className=" text-center max-w-[700px]">
      <div className="relative w-fit m-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/user.jpg"
            alt="My Photo"
            width={190}
            height={190}
            quality={95}
            className=" rounded-full shadow-xl border-[5px] border-white w-[120px] h-[120px]"
          />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          className="absolute right-[5px] bottom-[5px] text-3xl"
        >
          👋
        </motion.span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 mb-10 font-medium text-2xl sm:text-4xl !leading-[1.5]"
      >
        <b>Hello, I&apos;m Omar.</b> I&apos;m a <b>Frontend Developer </b>
        who creating <b>interactive</b>, <b>user-friendly</b>, and{" "}
        <b>responsive</b> <span className="italic">web applications.</span>
        <br /> My focus is <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex  gap-2 justify-center items-center outline-none text-lg font-medium max-sm:flex-col"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" group flex items-center gap-2 bg-gray-900 text-white py-3 px-7 rounded-full border transition hover:scale-[1.15] active:scale-[1.05] focus:scale-[1.15] hover:bg-gray-950"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <FaArrowRightLong className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group flex items-center gap-2 bg-white py-3 px-7 rounded-full border-black/10 transition hover:scale-[1.15] active:scale-[1.05] focus:scale-[1.15] dark:bg-white/10"
        >
          Download CV{" "}
          <BsDownload className="opacity-80 group-hover:translate-y-[2px] transition" />
        </a>

        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/omarragab/"
            target="_blank"
            className="bg-white p-5 rounded-full border-black/10 transition hover:scale-[1.20] active:scale-[1.05]  text-gray-700 hover:text-gray-950 dark:bg-white/10 dark:text-white"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Omar-Ragab-Projects/"
            target="_blank"
            className="bg-white p-5 rounded-full border-black/10 transition hover:scale-[1.20] active:scale-[1.05]  text-gray-700 hover:text-gray-950 dark:bg-white/10 dark:text-white"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
