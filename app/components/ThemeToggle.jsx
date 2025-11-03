"use client";
import { MoonIcon, SunIcon } from "../utils/svgs";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState("");

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      onClick={toggleTheme}
      className="absolute right-6 md:right-20 top-5 select-none p-1 border-foreground rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-xs hover:shadow-foreground active:scale-95"
    >
      <div className="h-5 w-5">{isDarkMode ? <SunIcon /> : <MoonIcon />}</div>
    </div>
  );
}
