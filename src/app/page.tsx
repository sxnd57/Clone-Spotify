"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Home/Sidebar";
import HeaderMenu from "@/components/Home/HeaderMenu";
import Avatar from "@/components/Home/Avatar";
const ControlCenter = dynamic(() => import("@/components/Home/ControlCenter"), { ssr: false });
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import MusicTab from "@/components/Home/MusicTab";
import PodcastsTab from "@/components/Home/PodcastsTab";
import dynamic from "next/dynamic";

export default function Home() {
  useEffect(() => {
    const handleBeforeUnload = (e: any) => {
      const confirmationMessage = "Do you really want to reload the page?";
      e.preventDefault();
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <div className={`h-screen`}>
      <div className="flex justify-between border-b">
        <HeaderMenu />
        <Avatar />
      </div>
      <div className="bg-background" style={{ height: `calc(100vh - 41px)` }}>
        <div className="grid h-full lg:grid-cols-6">
          <div className="hidden lg:block">
            <div className="space-y-4 py-4">
              <div className="px-3 py-2">
                <Sidebar />
              </div>
            </div>
          </div>
          <div className="col-span-5 flex h-full flex-col lg:col-span-5 lg:border-l">
            <div className="h-full p-4 lg:px-8">
              <Tabs defaultValue="music">
                <TabsList>
                  <TabsTrigger value="music">Music</TabsTrigger>
                  <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                  <TabsTrigger disabled={true} value="live">
                    Live
                  </TabsTrigger>
                </TabsList>
                <MusicTab />
                <PodcastsTab />
              </Tabs>
            </div>
            <ControlCenter />
          </div>
        </div>
      </div>
    </div>
  );
}
