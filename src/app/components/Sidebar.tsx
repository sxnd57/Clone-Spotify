"use client";
import React, { Suspense } from "react";
import PlaylistCard from "@/app/components/PlaylistCard";
import { usePlaylistContext } from "@/contexts/PlaylistContext";
import PlaylistCardSkeleton from "@/app/components/PlaylistCardSkeleton";
import useSpotify from "@/hooks/useSpotify";

const Sidebar = () => {
  const {
    playlistContextState: { playlists, loading },
    updatePlaylistContextState,
  } = usePlaylistContext();

  const spotifyApi = useSpotify();

  const handleSelectPlaylist = async (playlistId: string) => {
    const responsePlaylist = await spotifyApi.getPlaylist(playlistId);
    updatePlaylistContextState({
      selectedPlaylistId: playlistId,
      selectedPlaylist: responsePlaylist.body,
    });
  };

  return (
    <div className="py-4">
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
        Playlists
      </h2>
      <div className="flex flex-col">
        {loading ? (
          <PlaylistCardSkeleton />
        ) : (
          playlists.map(({ id, name, images, owner }) => (
            <PlaylistCard
              key={id}
              imageUrl={images[0].url}
              title={name}
              subtitle={owner.display_name}
              width={images[0].width}
              height={images[0].height}
              onClick={() => handleSelectPlaylist(id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
