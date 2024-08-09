"use client";
import Control from "@/components/Home/Control";
import Library from "@/components/Home/Library";
import Navigate from "@/components/Home/Navigate";
import React from "react";
import { Button } from "react-day-picker";

export default function Home() {
  return (
    <div className="grid h-screen w-full grid-flow-col md:grid-cols-[1fr_10fr]  grid-rows-[2fr_9fr_1fr] gap-2 dark:bg-black">
      <Navigate/>
      <Library />
      <div className="col-span-2">
        <Control/>
      </div>
      <div className="row-span-2 rounded-2xl dark:bg-[#121212]"></div>
    </div>
  );
}
