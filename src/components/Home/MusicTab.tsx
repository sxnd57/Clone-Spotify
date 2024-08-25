import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import songs from "@/components/Home/songs.json";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

function MusicTab() {
  return (
    <TabsContent value="music">
      <div className="mt-4 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Listen Now</h2>
        <p className="text-sm text-muted-foreground">
          Top picks for you. Updated daily.
        </p>
      </div>
      <Separator className={`my-4`} />
      <div className="overflow-hidden flex space-x-4 py-3">

      </div>
      <div className="mt-4 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Make for you</h2>
        <p className="text-sm text-muted-foreground">
          Your personal playlists. Updated daily.
        </p>
      </div>
      <div className="flex space-x-4 py-3">
        {songs.map((song) => {
          return (
            <div className="w-56 space-y-3" key={song.id}>
              <ContextMenu>
                <ContextMenuTrigger>
                  <div className="group relative">
                    <Image
                      src={song.thumbnail}
                      alt={song.name}
                      priority={false}
                      width={1920}
                      height={1080}
                      quality={100}
                      className="aspect-square w-full object-cover rounded-xl"
                    />
                    <button
                      className="absolute bottom-3 right-3 translate-y-full transform rounded-full bg-green-500 p-2 text-white opacity-0 transition-transform duration-500 ease-in-out hover:bg-green-600 group-hover:translate-y-0 group-hover:opacity-100">
                      <Play size={18} />
                    </button>
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Profile</ContextMenuItem>
                  <ContextMenuItem>Billing</ContextMenuItem>
                  <ContextMenuItem>Team</ContextMenuItem>
                  <ContextMenuItem>Subscription</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
              <div className="space-y-1 text-sm">
                <h3 className="truncate font-medium leading-none">
                  {song.name}
                </h3>
                <p className="text-xs text-muted-foreground">{song.artist}</p>
              </div>
            </div>
          );
        })}
      </div>
    </TabsContent>
  );
}

export default MusicTab;
