"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-50 relative pb-[140px] max-sm:pb-[100px]">
      <motion.div
        className=" fixed bg-white  w-[360px] max-sm:w-full h-[44px] max-sm:h-[80px]  sm:top-[20px] left-1/2 sm:rounded-full shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-opacity-80 border border-white border-opacity-40 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <motion.nav
        className="fixed left-1/2 -translate-x-1/2 top-[8px] sm:top-[30px] w-[250px]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex max-sm:flex-wrap justify-center items-center max-sm:gap-0 max-sm:gap-y-1 gap-2 -mt-1">
          {links.map((link) => (
            <li className="relative p-[5px] text-[15px]" key={link.hash}>
              <Link
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(link.name);
                }}
                href={link.hash}
                className={`p-1 text-gray-500 hover:text-gray-950 transition  ${
                  activeSection === link.name &&
                  "text-gray-950 dark:text-gray-200"
                } dark:text-gray-400 dark:hover:text-gray-200`}
              >
                {link.name}
              </Link>
              {activeSection == link.name && (
                <span className="absolute inset-0 -z-10 bg-gray-100 rounded-full dark:bg-gray-800"></span>
              )}
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
