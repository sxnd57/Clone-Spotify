"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Home/Sidebar";
import HeaderMenu from "@/components/Home/HeaderMenu";

const ControlCenter = dynamic(() => import("@/components/Home/ControlCenter"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MusicTab from "@/components/Home/MusicTab";
import PodcastsTab from "@/components/Home/PodcastsTab";

export default function Home() {


  return (
    <div className="flex h-screen flex-col">
      <HeaderMenu />
      <div className="flex-1 dark:bg-black min-h-0">
        <div className="grid h-full grid-cols-7">
          <ScrollArea className="mr-1 rounded-2xl p-2 dark:bg-primary xl:block hidden">
            <Sidebar />
          </ScrollArea>
          <ScrollArea className={`xl:col-span-6 col-span-7 ml-1 mr-0 rounded-2xl p-3 dark:bg-primary`}>
            <div className="m-2">
              <Tabs defaultValue="music">
                <TabsList>
                  <TabsTrigger value="music">Music</TabsTrigger>
                  <TabsTrigger value="podcasts">Podcast</TabsTrigger>
                </TabsList>
                <MusicTab/>
                {/*<PodcastsTab/>*/}
              </Tabs>
            </div>
          </ScrollArea>
        </div>
      </div>
      <ControlCenter />
    </div>
  );
}
