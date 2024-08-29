"use client"
import React, { useContext, useEffect, useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import songs from "@/app/songs.json";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Play } from "lucide-react";

function MusicTab() {


  return (
    <TabsContent value="music">
      <div className="mt-4 space-y-1">
        {/*<h2 className="text-2xl font-semibold tracking-tight">{message}</h2>*/}
        <p className="text-sm text-muted-foreground">
          Top picks for you. Updated daily.
        </p>
      </div>
      <Separator className={`my-4`} />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6">
        {/*{playlists.map((item) => {*/}
        {/*  return (*/}
        {/*    <div className="w-full space-y-4" key={item["id"]}>*/}
        {/*      <ContextMenu>*/}
        {/*        <ContextMenuTrigger>*/}
        {/*          <div className="group relative">*/}
        {/*            <Image*/}
        {/*              src={item["images"][0]["url"]}*/}
        {/*              alt={item["name"]}*/}
        {/*              priority={false}*/}
        {/*              width={1920}*/}
        {/*              height={1080}*/}
        {/*              quality={100}*/}
        {/*              className="aspect-square rounded-xl object-cover"*/}
        {/*            />*/}
        {/*            <button className="duration-400 linear absolute bottom-3 right-3 translate-y-full transform rounded-full bg-green-500 p-2 text-white opacity-0 transition-transform hover:bg-green-600 group-hover:translate-y-0 group-hover:opacity-100">*/}
        {/*              <Play size={18} />*/}
        {/*            </button>*/}
        {/*          </div>*/}
        {/*        </ContextMenuTrigger>*/}
        {/*        <ContextMenuContent>*/}
        {/*          <ContextMenuItem>Profile</ContextMenuItem>*/}
        {/*          <ContextMenuItem>Billing</ContextMenuItem>*/}
        {/*          <ContextMenuItem>Team</ContextMenuItem>*/}
        {/*          <ContextMenuItem>Subscription</ContextMenuItem>*/}
        {/*        </ContextMenuContent>*/}
        {/*      </ContextMenu>*/}
        {/*      <div className="space-y-1 text-sm">*/}
        {/*        <h3 className="truncate font-medium leading-none">*/}
        {/*          {item["name"]}*/}
        {/*        </h3>*/}
        {/*        <p className="text-xs text-muted-foreground">*/}
        {/*          {item["description"]}*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  );*/}
        {/*})}*/}
      </div>
      <div className="mt-4 space-y-1">
        {/*<h2 className="text-2xl font-semibold tracking-tight">{message}</h2>*/}
        {/*<p className="text-sm text-muted-foreground">*/}
        {/*  Your personal playlists. Updated daily.*/}
        {/*</p>*/}
      </div>
      <Separator className={`my-4`} />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6">
        {/*{playlists.map((item) => {*/}
        {/*  return (*/}
        {/*    <div className="w-full space-y-4" key={item["id"]}>*/}
        {/*      <ContextMenu>*/}
        {/*        <ContextMenuTrigger>*/}
        {/*          <div className="group relative">*/}
        {/*            <Image*/}
        {/*              src={item["images"][0]["url"]}*/}
        {/*              alt={item["name"]}*/}
        {/*              priority={false}*/}
        {/*              width={1920}*/}
        {/*              height={1080}*/}
        {/*              quality={100}*/}
        {/*              className="aspect-square rounded-xl object-cover"*/}
        {/*            />*/}
        {/*            <button className="duration-400 linear absolute bottom-3 right-3 translate-y-full transform rounded-full bg-green-500 p-2 text-white opacity-0 transition-transform hover:bg-green-600 group-hover:translate-y-0 group-hover:opacity-100">*/}
        {/*              <Play size={18} />*/}
        {/*            </button>*/}
        {/*          </div>*/}
        {/*        </ContextMenuTrigger>*/}
        {/*        <ContextMenuContent>*/}
        {/*          <ContextMenuItem>Profile</ContextMenuItem>*/}
        {/*          <ContextMenuItem>Billing</ContextMenuItem>*/}
        {/*          <ContextMenuItem>Team</ContextMenuItem>*/}
        {/*          <ContextMenuItem>Subscription</ContextMenuItem>*/}
        {/*        </ContextMenuContent>*/}
        {/*      </ContextMenu>*/}
        {/*      <div className="space-y-1 text-sm">*/}
        {/*        <h3 className="truncate font-medium leading-none">*/}
        {/*          {item["name"]}*/}
        {/*        </h3>*/}
        {/*        <p className="text-xs text-muted-foreground">*/}
        {/*          {item["description"]}*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  );*/}
        {/*})}*/}
      </div>
    </TabsContent>
  );
}

export default MusicTab;
