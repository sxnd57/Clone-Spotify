"use client"
import { Volume, Volume1, Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function useAudioPlayer(songs: any) {
  const [playing, setPlaying] = useState(false);
  const volumeStore =  localStorage.getItem("volume");
  const songIndexStore = localStorage.getItem("songIndex")
  const currentTimeStore = localStorage.getItem("currentTime")
  const [volume, setVolume] = useState(
    volumeStore ? Number(volumeStore) : 0.5,
  );
  const [currentSongIndex, setCurrentSongIndex] = useState(
    songIndexStore ? Number(songIndexStore) : 0,
  );
  const audioRef = useRef(new Audio(songs[currentSongIndex].songURL));
  const [currentTime, setCurrentTime] = useState(
    currentTimeStore ? Number(currentTimeStore) : 0,
  );
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [progressTime, setProgressTime] = useState(0);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(songs[currentSongIndex].songURL);

    audioRef.current.onloadedmetadata = () => {
      setDuration(audioRef.current.duration);
      if (
        currentTimeStore &&
        currentSongIndex === Number(songIndexStore)
      ) {
        audioRef.current.currentTime = Number(currentTimeStore);
        setCurrentTime(Number(currentTimeStore));
      } else {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
        setProgress(0);
      }

      if (volumeStore) {
        audioRef.current.volume = Number(volumeStore);
      } else {
        setVolume(50);
      }
    };

    if (playing) {
      audioRef.current.play();
    }

    localStorage.setItem("songIndex", String(currentSongIndex));
  }, [currentSongIndex]);

  useEffect(() => {
    const currentAudio = audioRef.current;

    return () => {
      currentAudio.pause();
      currentAudio.ontimeupdate = null;
      currentAudio.onended = null;
    };
  }, []);

  audioRef.current.ontimeupdate = () => {
    const currentTime = audioRef.current.currentTime;
    setCurrentTime(currentTime);
    localStorage.setItem("currentTime", String(currentTime));
    setProgress((currentTime * 100) / duration);
  };

  audioRef.current.onended = () => {
    skipForward();
  };

  function togglePlayPause() {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying((prevPlaying) => !prevPlaying);
  }

  function skipBack() {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length,
    );
    setPlaying(true);
  }

  function skipForward() {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setPlaying(true);
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function updateSeekTime(vals: number[]) {
    setProgressTime(vals[0]);
    audioRef.current.currentTime = (duration / 100) * vals[0];
  }

  function updateVolume(vals: number[]) {
    setVolume(vals[0]);
    audioRef.current.muted = volume <= 0.05;
    audioRef.current.volume = volume;
    localStorage.setItem("volume", String(volume));
  }

  function volumeIconState() {
    if (volume > 0.8) {
      return <Volume2 />;
    } else if (volume <= 0.8 && volume > 0.3) {
      return <Volume1 />;
    } else if (volume >= 0.01) {
      return <Volume />;
    } else{
      return <VolumeX />;
    }
  }

  return {
    playing,
    togglePlayPause,
    skipBack,
    skipForward,
    volume,
    currentTime,
    duration,
    progress,
    updateSeekTime,
    updateVolume,
    currentSongIndex,
    volumeIconState,
    formatTime,
  };
}

export default useAudioPlayer;
