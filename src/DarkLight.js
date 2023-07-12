"use client";

import sun from "./icons/sunny-outline.svg";
import moon from "./icons/moon-outline.svg";
import React, { useState, useEffect } from "react";

function DarkLight() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(userTheme === "dark" || (!userTheme && systemTheme));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const themeIcon = darkMode ? sun : moon;

  return (
    <div>
      <img
        className="w-5 md:w-7 cursor-pointer invert-0.2 hover:invert-0 dark:bg-[#484a48] dark:rounded-full mt-1"
        src={themeIcon}
        alt=""
        onClick={handleThemeToggle}
      />
    </div>
  );
}

export default DarkLight;
