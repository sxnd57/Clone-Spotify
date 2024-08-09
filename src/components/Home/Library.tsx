import { ArrowRight, LibraryBig, List, Plus, Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import PopverRecent from "./PopverRecent";
import Image from "next/image";

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
    <div className="rounded-2xl px-2 py-3 dark:bg-[#121212]">
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
      <ScrollArea className="h-[600px] px-3 py-4">
        <div className="flex items-center justify-between">
          <Search width={16} />
          <PopverRecent/>
        </div>
        <div className="mt-5">
          {favorite.map((item, index) => {
            return (
              <div key={index} className="flex p-2 ps-0">
                <div className="relative flex h-[48px] w-[48px] me-5">
                  <Image
                    className="rounded-full object-cover"
                    src={item.thumnail}
                    alt="image"
                    fill
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-[400px] text-[16px]">{item.title}</p>
                  <p className="font-[400px] text-[14px] text-[#cccc]">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
