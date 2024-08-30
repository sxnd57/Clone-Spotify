"use client"
import React, { createContext, useContext, useEffect, useState } from "react";
import { IPlaylistContext, PlaylistContextState } from "@/types";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";

const defaultPlaylistContextState: PlaylistContextState = {
  playlists: [],
  selectedPlaylistId: null,
  selectedPlaylist: null,
  loading: true,
};

export const PlaylistContext = createContext<IPlaylistContext>({
  playlistContextState: defaultPlaylistContextState,
  updatePlaylistContextState: () => {},
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
    defaultPlaylistContextState
  );

  const updatePlaylistContextState = (
    updatedObj: Partial<PlaylistContextState>
  ) => {
    setPlaylistContextState((prevState) => ({ ...prevState, ...updatedObj }));
  };

  useEffect(() => {
    const getUserPlaylists = async () => {
      updatePlaylistContextState({ loading: true });
      try {
        const userPlaylistResponse = await spotifyApi.getUserPlaylists();
        updatePlaylistContextState({
          playlists: userPlaylistResponse.body.items,
        });
      } catch (error) {
        console.error("Failed to fetch playlists", error);
      } finally {
        updatePlaylistContextState({ loading: false });
      }
    };

    if (spotifyApi.getAccessToken()) {
      getUserPlaylists();
    }
  }, [session, spotifyApi]);

  const playlistContextProviderData = {
    playlistContextState,
    updatePlaylistContextState,
  };

  return (
    <PlaylistContext.Provider value={playlistContextProviderData}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContextProvider;
