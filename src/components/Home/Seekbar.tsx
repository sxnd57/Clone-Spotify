import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import React from "react";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function Seekbar({ className, ...props }: SliderProps) {
  return (
    <Slider
      max={100}
      step={1}
      className={cn("w-[70%]", className)}
      {...props}
    />
  );
}
