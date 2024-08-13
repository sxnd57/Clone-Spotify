"use client";
import Control from "@/components/Home/Control";
import Library from "@/components/Home/Library";
import Navigate from "@/components/Home/Navigate";
import { Button } from "@/components/ui/button";
import { ArrowRight, LibraryBig, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { zing } from "zingmp3-api-next";

export default function Home() {
  
  return (
    <div className="grid h-screen w-full grid-flow-col grid-rows-12 gap-2 p-2 dark:bg-black md:grid-cols-12">
      <div className="col-span-3 row-span-2">
        <Navigate />
      </div>
      <div className="col-span-3 row-span-9 flex flex-col rounded-xl dark:bg-[#121212]">
        {/* Navigation with lbrary panel */}
        <div className="flex items-center justify-between px-3 py-3">
          <LibraryBig className="text-gray-400" />
          <div className="flex items-center">
            <Plus className="mx-2" />
            <ArrowRight className="mx-2" />
          </div>
        </div>
        <div className="my-2 flex items-center">
          <Button className="me-4 rounded-2xl" variant={"ghost"}>
            Danh sách phát
          </Button>
          <Button className="mx-4 rounded-2xl" variant={"ghost"}>
            Nghệ sĩ
          </Button>
          <Button className="mx-4 rounded-2xl" variant={"ghost"}>
            Album
          </Button>
        </div>
        <div className="scrollbar-thin flex-1 overflow-auto overscroll-auto">
          <Library />
        </div>
      </div>
      {/* ============== */}
      <div className="col-span-12 row-span-1">
        <Control />
      </div>
      <div className="col-span-11 row-span-11 h-full rounded-2xl dark:bg-[#121212]"></div>
    </div>
  );
}
