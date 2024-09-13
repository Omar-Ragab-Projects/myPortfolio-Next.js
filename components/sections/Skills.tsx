"use client";
import React from "react";
import SectionHeader from "../SectionHeader";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-28 text-center max-w-[600px] mb-28 sm:mb-40"
    >
      <SectionHeader>Skills</SectionHeader>
      <ul className="flex flex-wrap text-gray-800 gap-2 justify-center text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.05 * index,
            }}
            className="border border-black/[0.1] bg-white px-5 py-3 rounded-xl dark:bg-gray-800 dark:text-white"
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
