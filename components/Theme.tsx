"use client"
import { useTheme } from "@/store/themeStore";
import React, { useEffect } from "react";

const Theme = () => {
  const { theme, setTheme, toggleTheme } = useTheme();
  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  },[setTheme]);
  return (
    <button onClick={toggleTheme} className="w-[3rem] h-[3rem] fixed z-50 bottom-5 right-5 bg-neutral-100/50 border border-neutral-200/50 hover:bg-neutral-100/60 hover:border-neutral-200/60 transition-all backdrop-blur-[1px] rounded-full flex items-center justify-center ">
      {theme === "light" ? (
        <img src="sun.svg" alt="" />
      ) : (
        <img src="moon.svg" alt="" />
      )}
    </button>
  );
};

export default Theme;
