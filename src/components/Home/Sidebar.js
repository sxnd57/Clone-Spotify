"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Sidebar({children}) {
  const screenWidth = window.innerWidth
  const initWidth = screenWidth / 5;
  const [width, setWidth] = useState(initWidth);
  const isResized = useRef(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }
      setWidth((previousWidth) =>
        previousWidth < initWidth
          ? initWidth
          : previousWidth > screenWidth / 2
            ? screenWidth / 2
            : previousWidth + e.movementX / 2,
      );
    });
    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, []);
  return (
    <div className="flex">
      <div
        style={{ width: `${width}px` }}
        className="transition-width  bg-slate-100 transition-width"
      >
      </div>
      {/* {children}
      <div
        className="w-1 bg-white cursor-col-resize"
        onMouseDown={() => {
          isResized.current = true;
        }}
      /> */}
    </div>
  );
}
