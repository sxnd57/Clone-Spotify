"use client";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import React from "react";
import Seekbar from "@/app/components/Seekbar";
import { Button } from "../../components/ui/button";
import { spotifyApi } from "@/config/spotify";
import { useSongContext } from "@/contexts/SongContext";
import { SongReducerActionType } from "@/types";
import Image from "next/image";

function ControlCenter() {
  const {
    dispatchSongAction,
    songContextState: { isPlaying, selectedSong },
  } = useSongContext();

  const handlePlayPause = async () => {
    const response = await spotifyApi.getMyCurrentPlaybackState();

    if (!response.body) return;

    if (response.body.is_playing) {
      await spotifyApi.pause();
      dispatchSongAction({
        type: SongReducerActionType.ToggleIsPlaying,
        payload: false,
      });
    } else {
      await spotifyApi.play();
      dispatchSongAction({
        type: SongReducerActionType.ToggleIsPlaying,
        payload: true,
      });
    }
  };
  return (
    <div className="grid grid-cols-8 justify-between px-4 dark:bg-black">
      <div className="col-span-2 mt-auto hidden md:block">
        {selectedSong && (
          <div
            className={
              "flex space-x-2 rounded-2xl px-4 py-2 dark:bg-background"
            }
          >
            <Image
              className={`rounded-2xl`}
              width={64}
              height={64}
              src={selectedSong.album.images[0].url}
              alt={selectedSong.name}
            />
            <div className="invisible truncate lg:visible">
              <div className="font-bold">{selectedSong.name}</div>
              <div className="subtitle">{selectedSong.name}</div>
            </div>
          </div>
        )}
      </div>
      <div className="col-span-8 md:col-span-4">
        <div className={`flex flex-col items-center py-2`}>
          <div className="mb-3 mt-2 flex items-center justify-end space-x-5">
            <Button
              className={`border-0 bg-transparent text-black shadow-none hover:bg-transparent`}
            >
              <SkipBack
                className={`dark:text-white`}
                strokeWidth={3}
                size={20}
              />
            </Button>
            <Button className={`rounded-full border px-2 py-4`}>
              {isPlaying ? (
                <Pause
                  className={`fill-white`}
                  strokeWidth={3}
                  size={20}
                  onClick={handlePlayPause}
                />
              ) : (
                <Play
                  className={`fill-white`}
                  strokeWidth={2}
                  size={20}
                  onClick={handlePlayPause}
                />
              )}
            </Button>
            <Button
              className={`border-0 bg-transparent text-black shadow-none hover:bg-transparent`}
            >
              <SkipForward
                className={`dark:text-white`}
                strokeWidth={3}
                size={20}
              />
            </Button>
          </div>
          <div className="flex w-full justify-center space-x-4">
            <span>00:00</span>
            <Seekbar defaultValue={[0]} value={[50]} />
            <span>00:00</span>
          </div>
        </div>
      </div>
      <div className="col-span-2 hidden items-center justify-end space-x-4 md:flex">
        <Seekbar defaultValue={[0.5]} step={0.01} max={1} className={`w-32`} />
      </div>
    </div>
  );
}

export default ControlCenter;
