import React from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="theme-switcher"
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      aria-label="زر التبديل بين اشكال الموقغ"
    >
      {theme === "light" ? (
        <BiMoon aria-label="dark theme" size={20} />
      ) : (
        <BiSun aria-label="light theme" size={20} />
      )}
    </button>
  );
}
