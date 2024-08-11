import { ArrowRight, LibraryBig, List, Plus, Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import PopverRecent from "./PopverRecent";
import SongCardList from "../SongCardList";

export default function Library() {
  const favorite = [
    {
      title: "V-POP",
      subtitle: "Danh sách phát",
      thumnail: "/images/vu.png",
    },
    {
      title: "US-UK",
      subtitle: "Danh sách phát",
      thumnail: "/images/vu.png",
    },
    {
      title: "Việt Mix",
      subtitle: "Danh sách phát",
      thumnail: "/images/vu.png",
    },
    {
      title: "BlackPink",
      subtitle: "Album",
      thumnail: "/images/blackpink.png",
    },
    {
      title: "Vũ",
      subtitle: "Album",
      thumnail: "/images/vu.png",
    },
    {
      title: "Vũ",
      subtitle: "Album",
      thumnail: "/images/vu.png",
    },
    {
      title: "Vũ",
      subtitle: "Album",
      thumnail: "/images/vu.png",
    },
    {
      title: "Vũ",
      subtitle: "Album",
      thumnail: "/images/vu.png",
    },
    {
      title: "Vũ",
      subtitle: "Album",
      thumnail: "/images/vu.png",
    },
    {
      title: "Vũ",
      subtitle: "Album",
      thumnail: "/images/vu.png",
    },
  ];
  return (
    <ScrollArea className="px-3 py-4">
      <div className="flex items-center justify-between">
        <Search width={16} />
        <PopverRecent />
      </div>
      <div className="mt-5">
        {favorite.map((item, index) => {
          return (
            <SongCardList
              key={index}
              src={item.thumnail}
              alt="Image"
              title={item.title}
              subtitle={item.subtitle}
            />
          );
        })}
      </div>
    </ScrollArea>
  );
}
