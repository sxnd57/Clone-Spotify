import React from "react";
import {
  Album,
  CirclePlay,
  LayoutGrid,
  ListMusic,
  MicVocal,
  Music2,
  Podcast,
  Radio,
  User,
} from "lucide-react";
import Section from "@/components/Home/Section";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
  return (
    <div className="space-y-2">
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
        Discover
      </h2>
      <Section name={"Listen now"}>
        <CirclePlay className={`mr-4`} />
      </Section>
      <Section name={"Browser"}>
        <LayoutGrid className={`mr-4`} />
      </Section>
      <Section name={"Radio"}>
        <Radio className={`mr-4`} />
      </Section>
      <Section name={"Podcast"}>
        <Podcast className={`mr-4`} />
      </Section>

      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
        Library
      </h2>
      <Section name={"Playlist"}>
        <ListMusic className={`mr-4`} />
      </Section>
      <Section name={"Songs"}>
        <Music2 className={`mr-4`} />
      </Section>
      <Section name={"Made for you"}>
        <User className={`mr-4`} />
      </Section>
      <Section name={"Artists"}>
        <MicVocal className={`mr-4`} />
      </Section>
      <Section name={"Albums"}>
        <Album className={`mr-4`} />
      </Section>

      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
        Playlists
      </h2>
      <ScrollArea className="h-[300px]">
        <div className="flex-1 space-y-2">
          <Section name={"Playlist"}>
            <ListMusic className={`mr-4`} />
          </Section>
          <Section name={"Playlist"}>
            <ListMusic className={`mr-4`} />
          </Section>
          <Section name={"Playlist"}>
            <ListMusic className={`mr-4`} />
          </Section>
          <Section name={"Playlist"}>
            <ListMusic className={`mr-4`} />
          </Section>
          <Section name={"Playlist"}>
            <ListMusic className={`mr-4`} />
          </Section>
          <Section name={"Playlist"}>
            <ListMusic className={`mr-4`} />
          </Section>
          <Section name={"Playlist"}>
            <ListMusic className={`mr-4`} />
          </Section>
          <Section name={"Playlist"}>
            <ListMusic className={`mr-4`} />
          </Section>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
