import {
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import React from "react";

export default function ControlCenter() {
  return (
    <div className="flex justify-center space-x-5">
      <button className="p-2">
        <Shuffle className="" strokeWidth={1} width={18} />
      </button>

      <button className="p-2">
        <SkipBack className="fill-slate-50" strokeWidth={1} width={18} />
      </button>

      <button className="rounded-full bg-white p-2">
        <Play className="fill-black" strokeWidth={1} />
      </button>

      <button className="rounded-full bg-white p-2">
        <Pause className="fill-black" strokeWidth={1} />
      </button>

      <button className="p-2">
        <SkipForward className="fill-slate-50" strokeWidth={1} width={18} />
      </button>

      <button className="p-2">
        <Repeat className="" strokeWidth={1} width={18} />
      </button>
    </div>
  );
}
