"use client";
import React from "react";
import SectionHeader from "../SectionHeader";
import { projectsData } from "@/lib/data";
import Project from "../Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.4);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeader>My projects</SectionHeader>
      <div>
        <ul className="">
          {projectsData.map((project, index) => (
            <li key={index} className="mb-4 sm:mb-8 last:mb-0 group ">
              <Project {...project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
