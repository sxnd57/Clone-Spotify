import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const PlaylistCardSkeleton = () => {
  return (
    <div className={`space-y-4`}>
      <div className="flex items-center space-x-4 mx-2">
        <Skeleton className="h-12 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[240px]" />
          <Skeleton className="h-4 w-[180px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4 mx-2">
        <Skeleton className="h-12 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[240px]" />
          <Skeleton className="h-4 w-[180px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4 mx-2">
        <Skeleton className="h-12 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[240px]" />
          <Skeleton className="h-4 w-[180px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4 mx-2">
        <Skeleton className="h-12 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[240px]" />
          <Skeleton className="h-4 w-[180px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4 mx-2">
        <Skeleton className="h-12 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[240px]" />
          <Skeleton className="h-4 w-[180px]" />
        </div>
      </div>
    </div>
  );
};

export default PlaylistCardSkeleton;