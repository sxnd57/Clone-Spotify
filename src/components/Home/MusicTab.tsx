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
      <ScrollArea>
        <div className="flex space-x-4 py-3">
          {songs.map((song) => {
            return (
              <div className="w-[200px]" key={song.id}>
                <ContextMenu>
                  <ContextMenuTrigger className={`space-y-3`}>
                    <div className="overflow-hidden rounded-md">
                      <Image
                        src={song.thumbnail}
                        alt={song.name}
                        priority={false}
                        width={1920}
                        height={1080}
                        className="aspect-[3/4] w-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1 text-sm">
                      <h3 className="font-medium leading-none">{song.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {song.artist}
                      </p>
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-48">
                    <ContextMenuItem>Profile</ContextMenuItem>
                    <ContextMenuItem>Billing</ContextMenuItem>
                    <ContextMenuItem>Team</ContextMenuItem>
                    <ContextMenuItem>Subscription</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </div>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-4 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Make for you</h2>
        <p className="text-sm text-muted-foreground">
          Your personal playlists. Updated daily.
        </p>
      </div>
      <ScrollArea>
        <div className="flex space-x-4 py-3">
          {songs.map((song) => {
            return (
              <div className="w-[100px] space-y-3" key={song.id}>
                <div className="overflow-hidden rounded-md">
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <Image
                        src={song.thumbnail}
                        alt={song.name}
                        priority={false}
                        width={1920}
                        height={1080}
                        quality={100}
                        className="aspect-square w-full object-cover transition-all hover:scale-105"
                      />
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>Profile</ContextMenuItem>
                      <ContextMenuItem>Billing</ContextMenuItem>
                      <ContextMenuItem>Team</ContextMenuItem>
                      <ContextMenuItem>Subscription</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium leading-none">{song.name}</h3>
                  <p className="text-xs text-muted-foreground">{song.artist}</p>
                </div>
              </div>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </TabsContent>
  );
}

export default MusicTab;
