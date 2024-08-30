"use client";
import React from "react";
import PlaylistCard from "@/app/components/PlaylistCard";
import { usePlaylistContext } from "@/contexts/PlaylistContext";

const Sidebar = () => {
  const {
    playlistContextState: { playlists },
  } = usePlaylistContext();
  return (
    <div className="py-4">
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
        Playlists
      </h2>
      <div className="flex flex-col">
        {playlists.map(({ id, name, images, owner, ...item }) => {
          return (
            <PlaylistCard
              key={id}
              imageUrl={images[0].url}
              title={name}
              subtitle={owner.display_name}
              width={images[0].width}
              height={images[0].height}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
