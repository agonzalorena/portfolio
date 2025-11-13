"use client";
import { useGSAP } from "@gsap/react";
import { MoonIcon, SunIcon } from "../utils/svgs";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const themeContainer = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  //solo cuando mounted es true
  useEffect(() => {
    if (!mounted) return;
    const btn = document.getElementById("btnTheme");
    if (!btn) return;

    gsap.from(btn, {
      y: 20,
      autoAlpha: 0,
      duration: 0.4,
      ease: "power3.out",
      delay: 1.3,
    });
  }, [mounted]);

  if (!mounted) return null; // evita render antes de hidratar

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      ref={themeContainer}
      className="absolute right-6 md:right-20 top-5 select-none p-1 border-foreground rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-xs hover:shadow-foreground active:scale-95"
    >
      <div className="h-5 w-5" id="btnTheme">
        {currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      </div>
    </div>
  );
}
