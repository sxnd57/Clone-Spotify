import {
  Layers3,
  Mic2Icon,
  MoveDiagonal,
  Pause,
  PictureInPicture2,
  Play,
  PlusCircle,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Speaker,
  SquarePlay,
  Volume2Icon,
} from "lucide-react";
import React from "react";
import { ProgressBar } from "./ProgressBar";
import SongCardList from "./SongCardList";
import ControlCenter from "./ControlCenter";
import ControlRight from "./ControlRight";

export default function Control() {
  return (
    <div className="mx-2 grid grid-cols-7">
      <div className="col-span-2 my-auto">
        <SongCardList
          className="items-center"
          src="/images/vu.png"
          alt="image"
          rounded="rounded-lg"
          title="Bước qua nhau"
          subtitle="Vũ"
        >
          <PlusCircle className="ms-5 w-[16px] hover:cursor-pointer" />
        </SongCardList>
      </div>
      <div className="col-span-3 my-auto">
        <ControlCenter />
        <ProgressBar />
      </div>
      <div className="col-span-2 my-auto">
        <ControlRight/>
      </div>
    </div>
  );
}
