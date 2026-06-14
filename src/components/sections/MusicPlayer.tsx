"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Audio play error:", error);
    }
  };

  return (
    <div className="music-float">
      <audio ref={audioRef} src="/music/toi.mp3" loop preload="auto" />

      <button
        type="button"
        onClick={togglePlay}
        className="glass-card relative flex items-center gap-3 rounded-full px-4 py-3 text-left shadow-xl transition hover:scale-[1.02]"
        aria-label={isPlaying ? "Музыканы тоқтату" : "Музыканы қосу"}
      >
        <span className="relative flex h-12 w-12 items-center justify-center">
          {isPlaying ? <span className="fade-ring" /> : null}

          <span
            className={`music-disc flex h-12 w-12 items-center justify-center rounded-full border border-[#c79b51] bg-gradient-to-br from-[#f7e2bb] via-[#ddb56a] to-[#9d6f2a] text-white shadow-md ${
              isPlaying ? "playing" : ""
            }`}
          >
            ♪
          </span>
        </span>

        <span className="hidden pr-1 sm:block">
          <span className="block text-xs uppercase tracking-[0.24em] text-[#9b7b45]">
            Той әуені
          </span>
          <span className="block text-sm font-medium text-[#4f3b2d]">
            {isPlaying ? "Ойнатылып жатыр" : "Қосу үшін басыңыз"}
          </span>
        </span>
      </button>
    </div>
  );
}