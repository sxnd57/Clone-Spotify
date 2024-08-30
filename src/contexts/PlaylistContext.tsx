"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IPlaylistContext, PlaylistContextState } from "@/types";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";

const defaultPlaylistContextState: PlaylistContextState = {
  playlists: [],
};

export const PlaylistContext = createContext<IPlaylistContext>({
  playlistContextState: defaultPlaylistContextState,
});

export const usePlaylistContext = () => useContext(PlaylistContext);

const PlaylistContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [playlistContextState, setPlaylistContextState] = useState(
    defaultPlaylistContextState,
  );
  useEffect(() => {
    const getUserPlaylists = async () => {
      const userPlaylistResponse = await spotifyApi.getUserPlaylists();
      setPlaylistContextState({
        playlists: userPlaylistResponse.body.items,
      });
    };

    if (spotifyApi.getAccessToken()) {
      getUserPlaylists();
    }
  }, [session, spotifyApi]);
  const playlistContextProviderData = {
    playlistContextState,
  };
  return (
    <PlaylistContext.Provider value={playlistContextProviderData}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContextProvider;
