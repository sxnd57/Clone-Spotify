"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Computer, Sun, MoonStar } from "lucide-react";

export default function ModeSwitch() {
  const { setTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState("system");

  const handleThemeChange = (theme:any) => {
    setTheme(theme);
    setActiveTheme(theme);
  };

  return (
    <div>
      <div className="rounded-full border">
        <button
          onClick={() => handleThemeChange("system")}
          className={`me-1 p-2 ${activeTheme === "system" ? "mode-active" : ""}`}
        >
          <Computer width={16} height={16} />
        </button>
        <button
          onClick={() => handleThemeChange("light")}
          className={`p-2 ${activeTheme === "light" ? "mode-active" : ""}`}
        >
          <Sun width={16} height={16} />
        </button>
        <button
          onClick={() => handleThemeChange("dark")}
          className={`ms-1 p-2 ${activeTheme === "dark" ? "mode-active" : ""}`}
        >
          <MoonStar width={16} height={16} />
        </button>
      </div>
    </div>
  );
}
