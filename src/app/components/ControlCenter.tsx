"use client"
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import React, { useEffect } from "react";
import Seekbar from "@/app/components/Seekbar";
import songs from "@/app/songs.json";
import { Button } from "../../components/ui/button";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import Image from "next/image";

function ControlCenter() {
  const {
    playing,
    togglePlayPause,
    skipBack,
    skipForward,
    volume,
    currentTime,
    duration,
    progress,
    updateSeekTime,
    updateVolume,
    currentSongIndex,
    volumeIconState,
    formatTime,
  } = useAudioPlayer(songs);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePlayPause]);

  return (
    <div className="grid grid-cols-8 justify-between px-4 dark:bg-black">
      <div className="col-span-2 mt-auto hidden md:block">
        {/*<div*/}
        {/*  className={*/}
        {/*    "flex rounded-2xl px-4 py-2 dark:bg-background space-x-2"*/}
        {/*  }*/}
        {/*>*/}
        {/*  <Image*/}
        {/*    className={`rounded-2xl`}*/}
        {/*    width={64}*/}
        {/*    height={64}*/}
        {/*    src={songs[currentSongIndex].thumbnail}*/}
        {/*    alt=""*/}
        {/*  />*/}
        {/*  <div className="invisible truncate lg:visible">*/}
        {/*    <div className="font-bold">{songs[currentSongIndex].name}</div>*/}
        {/*    <div className="subtitle">{songs[currentSongIndex].artist}</div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div className="col-span-8 md:col-span-4">
        <div className={`flex flex-col items-center py-2`}>
          <div className="mb-3 mt-2 flex items-center justify-end space-x-5">
            <Button
              className={`border-0 bg-transparent text-black shadow-none hover:bg-transparent`}
              onClick={skipBack}
            >
              <SkipBack
                className={`dark:text-white`}
                strokeWidth={3}
                size={20}
              />
            </Button>
            <Button
              className={`rounded-full border px-2 py-4`}
              onClick={togglePlayPause}
            >
              {playing ? (
                <Pause className={`fill-white`} strokeWidth={3} size={20} />
              ) : (
                <Play className={`fill-white`} strokeWidth={2} size={20} />
              )}
            </Button>
            <Button
              className={`border-0 bg-transparent text-black shadow-none hover:bg-transparent`}
              onClick={skipForward}
            >
              <SkipForward
                className={`dark:text-white`}
                strokeWidth={3}
                size={20}
              />
            </Button>
          </div>
          <div className="flex w-full justify-center space-x-4">
            <span>{formatTime(currentTime)}</span>
            <Seekbar
              onValueChange={(vals) => {
                updateSeekTime(vals);
              }}
              defaultValue={[0]}
              value={[progress]}
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      <div className="md:flex col-span-2 items-center justify-end space-x-4 hidden">
        {volumeIconState()}
        <Seekbar
          defaultValue={[0.5]}
          step={0.01}
          max={1}
          onValueChange={(vals) => updateVolume(vals)}
          value={[volume]}
          className={`w-32`}
        />
      </div>
    </div>
  );
}

export default ControlCenter;
