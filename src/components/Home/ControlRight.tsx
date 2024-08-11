import {
  Layers3,
  Mic2Icon,
  MoveDiagonal,
  PictureInPicture2,
  Speaker,
  SquarePlay,
  Volume2Icon,
} from "lucide-react";
import React from "react";
import { Progress } from "../ui/progress";

export default function ControlRight() {
  return (
    <div className="ms-5 flex justify-end items-center mx-5">
      <button className="p-2">
        <SquarePlay strokeWidth={1} size={18}/>
      </button>
      <button className="p-2">
        <Mic2Icon strokeWidth={1} size={18}/>
      </button>
      <button className="p-2">
        <Layers3 strokeWidth={1} size={18}/>
      </button>
      <button className="p-2">
        <Speaker strokeWidth={1} size={18}/>
      </button>
      <button className="flex items-center p-2">
        <Volume2Icon strokeWidth={1} size={18}/>
      </button>
      <Progress value={50} className="mx-5 h-[4px]" />
      <button className="p-2">
        <PictureInPicture2 strokeWidth={1} size={18}/>
      </button>
      <button className="p-2">
        <MoveDiagonal strokeWidth={1} size={18}/>
      </button>
    </div>
  );
}
