import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/eCommerce.png";
import dashboardImg from "@/public/dashboard.png";
import countriesImg from "@/public/countriesAPI.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "eCommerce",
    description:
      "A shopping platform with Add/Remove from Cart, quantity adjustments, Redux Toolkit for state management, React Router for navigation, dark mode toggle, and AOS animations.",
    tags: ["React", "Tailwind", "Redux Toolkit"],
    imageUrl: ecommerceImg,
    liveUrl: "https://ecommerce-by-react.netlify.app/",
  },
  {
    title: "Countries API",
    description:
      "A country explorer built with React featuring search, filter by region, detailed pages for each country, responsive design, and light/dark mode toggle.",
    tags: ["React", "TypeScript"],
    imageUrl: countriesImg,
    liveUrl: "https://omar-ragab-projects.github.io/react-countries-api/",
  },
  {
    title: "Dashboard",
    description:
      "A responsive, interactive dashboard using Vue.js with Single File Components and Vue Router for smooth navigation.",
    tags: ["Vue.js", "Bootstrap", "Sass"],
    imageUrl: dashboardImg,
    liveUrl: "https://omar-ragab-projects.github.io/vue-dashboard/#/",
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "Vue.js",
  "Redux",
  "Git",
  "JavaScript",
  "HTML",
  "CSS",
  "C++",
] as const;
