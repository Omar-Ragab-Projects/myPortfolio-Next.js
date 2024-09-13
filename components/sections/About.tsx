"use client";

import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="text-center max-w-[840px] mb-28 sm:mb-40 max-sm:mt-28 scroll-mt-28"
    >
      <SectionHeader>About me</SectionHeader>
      <p className="mb-3 leading-8">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I started fundamentals with{" "}
        <span className="font-medium">c++</span>, and then enrolled in a coding
        bootcamp and learned{" "}
        <span className="font-medium">Frontend web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core skills
        is <span className="font-medium">React and Next.js</span>. I am also
        familiar with TypeScript and Tailwind. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Frontend
        developer.
      </p>
    </motion.section>
  );
}
