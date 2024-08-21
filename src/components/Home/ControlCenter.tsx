import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import React, { useEffect } from "react";
import Seekbar from "@/components/Home/Seekbar";
import songs from "@/components/Home/songs.json";
import { Button } from "../ui/button";
import SongCard from "@/components/Home/SongCard";
import useAudioPlayer from "@/hooks/useAudioPlayer";

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
    <div className="grid grid-cols-4 justify-between border-t">
      <div className="song-card hidden lg:block">
        <SongCard
          image={songs[currentSongIndex].thumbnail}
          title={songs[currentSongIndex].name}
          subtitle={songs[currentSongIndex].artist}
        />
      </div>
      <div className="col-span-4 justify-center lg:col-span-2">
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
                <Pause strokeWidth={3} size={20} />
              ) : (
                <Play strokeWidth={2} size={20} />
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
            <div className={`flex items-center space-x-2`}>
              {volumeIconState()}
              <Seekbar
                defaultValue={[0.5]}
                step={0.05}
                max={1}
                onValueChange={(vals) => updateVolume(vals)}
                value={[volume]}
                className={`h-[2px] w-32`}
              />
            </div>
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
    </div>
  );
}

export default ControlCenter;
