"use client";
import Image, { StaticImageData } from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Clock, List, Play } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePlaylistContext } from "@/contexts/PlaylistContext";

const dateFormat = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const ms2M = (ms: number | any) => {
  const min = Math.floor((ms / 1000 / 60) << 0);
  const sec = Math.floor((ms / 1000) % 60);
  return min + ":" + sec;
};

const PlaylistDetail = () => {
  const [position, setPosition] = useState("grid");
  const {
    playlistContextState: { selectedPlaylist },
  } = usePlaylistContext();

  if (!selectedPlaylist) {
    return null;
  }

  console.log(selectedPlaylist);

  return (
    <div className={`min-h-screen`}>
      <div className="playlist-detail-header bg-gray-300 p-4 dark:bg-gray-900 md:p-7">
        <div className="grid grid-cols-12 space-x-4">
          <div className="col-span-4 md:col-span-2">
            <Image
              className={`h-full w-full rounded object-cover shadow-xl`}
              src={selectedPlaylist.images[0].url}
              alt={"anh"}
              width={1980}
              height={1080}
            />
          </div>
          <div className="col-span-8 mt-auto md:col-span-10">
            <div className={`text-[14px] font-semibold`}>
              {selectedPlaylist.type.charAt(0).toUpperCase() +
                selectedPlaylist.type.slice(1)}
            </div>
            <div
              className={`truncate text-[24px] font-bold md:text-[32px] xl:text-[42px]`}
            >
              {selectedPlaylist.name}
            </div>
            <div className="flex items-center space-x-2">
              <Avatar className={`h-8 w-8`}>
                <AvatarImage
                  src={selectedPlaylist.images[0].url}
                  alt="@shadcn"
                />
                <AvatarFallback>
                  {selectedPlaylist.owner.display_name}
                </AvatarFallback>
              </Avatar>
              <Link
                href={"#"}
                className={`text-[14px] font-semibold hover:underline`}
              >
                {selectedPlaylist.owner.display_name}
              </Link>
              <p className={`hidden md:block`}>
                &bull; {selectedPlaylist.followers.total} lượt lưu &bull;
              </p>
              <p className={`hidden md:block`}>14 bài hát, 51 phút 39 giây</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-4 dark:bg-gray-800 md:p-7">
        <div className="item-center mb-5 flex justify-between">
          <button className={`rounded-full bg-primary p-3 text-white`}>
            <Play />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className={"dark:text-white"} variant="default">
                <List className={`me-2`} size={18} />
                List type
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="grid">Grid</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="short">
                  Short
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Album</TableHead>
              <TableHead className="text-right">Date release</TableHead>
              <TableHead className="text-right">
                <Clock className={"ms-auto"} size={18} />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedPlaylist.tracks.items.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Image
                        className={
                          "hidden h-[40px] w-[40px] rounded object-cover md:block"
                        }
                        src={item.track?.album.images[0].url as string}
                        alt={"anh"}
                        width={1980}
                        height={1080}
                      />
                      <div className="">
                        <Link
                          href={"#"}
                          className={
                            "truncate text-[16px] font-medium hover:underline"
                          }
                        >
                          {item.track?.name}
                        </Link>
                        <p>{item.track?.artists[0].name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{item.track?.album.name}</TableCell>
                  <TableCell className="text-right">
                    {dateFormat(new Date(item.added_at))}
                  </TableCell>
                  <TableCell className="text-right">
                    {ms2M(item.track?.duration_ms)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PlaylistDetail;
