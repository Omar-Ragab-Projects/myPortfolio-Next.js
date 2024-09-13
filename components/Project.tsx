"use client";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
}: ProjectProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <a
        href={liveUrl}
        target="_blank"
        className=" flex w-[300px] sm:w-[400px] lg:w-[700px] bg-gray-100 hover:bg-gray-200 transition p-6 relative overflow-hidden rounded-lg max-lg:flex-col-reverse max-lg:gap-4 max-lg:text-center max-lg:p-4 lg:group-even:flex-row-reverse dark:bg-white/10 dark:hover:bg-white/15 "
      >
        <div className="w-1/2 max-lg:w-full lg:group-even:pl-8">
          <h3 className="font-medium">{title}</h3>
          <p className="my-4 leading-7">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-8 max-lg:justify-center">
            {tags.map((tag, index) => (
              <li
                key={index}
                className=" px-3 py-1 bg-black/[0.7] text-white rounded-full text-[14px]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:group-hover:translate-y-3 lg:group-hover:-translate-x-3 lg:group-hover:-rotate-2 lg:group-hover:scale-[1.04] lg:group-even:group-hover:translate-x-3 lg:group-even:group-hover:-translate-y-3 lg:group-even:group-hover:rotate-2 transition lg:absolute lg:-right-48 lg:top-11  lg:group-even:right-[initial] lg:group-even:-left-48">
          <Image
            src={imageUrl}
            alt="Project I Made"
            className="w-[500px] lg:shadow-2xl"
            // quality={40}
            priority={true}
          />
        </div>
      </a>
    </motion.div>
  );
}
