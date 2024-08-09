import {
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  SquarePlay,
} from "lucide-react";
import React from "react";
import { ProgressBar } from "./ProgressBar";

export default function Control() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <div className="flex">
          <Shuffle className="w-[16px]" />
          <SkipBack className="w-[16px]" />
          <Pause className="w-[16px]" />
          <Play className="w-[16px]" />
          <SkipForward className="w-[16px]" />
          <Repeat className="w-[16px]" />
        </div>
        <ProgressBar />
      </div>
      <div className="flex">
        <SquarePlay />
      </div>
    </div>
  );
}
