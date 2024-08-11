"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressBar() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center space-x-5">
      <span className="font-light text-[12px] ">00:00</span>
      <Progress value={progress} className="h-[5px]" />
      <span className="font-light text-[12px] ">00:00</span>
    </div>
  );
}
