"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
      document.documentElement.classList.add(currentTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  function themeHandler() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }
  return (
    <div
      className="fixed right-5 bottom-5 bg-white rounded-full w-12 h-12 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl  flex items-center justify-center hover:scale-[1.15] active:scale-105 cursor-pointer transition-all dark:bg-gray-950"
      onClick={themeHandler}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </div>
  );
}
