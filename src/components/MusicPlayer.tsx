"use client";

import { useEffect, useRef, useState } from "react";
import { weddingData } from "@/data/wedding";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasMusicError, setHasMusicError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !weddingData.music.enabled) return;

    audio.volume = weddingData.music.volume;
    audio.loop = true;

    const startMusic = (event?: Event) => {
      const target = event?.target;
      if (target instanceof Element && target.closest("[data-music-control]")) return;

      void audio
        .play()
        .then(() => {
          setIsPlaying(true);
          removeInteractionListeners();
        })
        .catch(() => {
          // Trình duyệt sẽ cho phép phát lại ở lần chạm/kéo tiếp theo.
        });
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("pointerdown", startMusic, true);
      window.removeEventListener("touchstart", startMusic, true);
      window.removeEventListener("click", startMusic, true);
      window.removeEventListener("keydown", startMusic, true);
    };

    // Thử autoplay ngay khi mở thiệp; nếu bị chặn, các tương tác đầu tiên sẽ bật nhạc.
    startMusic();
    window.addEventListener("pointerdown", startMusic, { capture: true, passive: true });
    window.addEventListener("touchstart", startMusic, { capture: true, passive: true });
    window.addEventListener("click", startMusic, true);
    window.addEventListener("keydown", startMusic, true);

    return () => {
      removeInteractionListeners();
    };
  }, []);

  if (!weddingData.music.enabled) return null;

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setHasMusicError(true);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingData.music.src}
        preload="auto"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setHasMusicError(true)}
        aria-hidden="true"
      />

      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 mx-auto flex w-full max-w-[500px] justify-end px-4">
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
          title={hasMusicError ? "Kiểm tra file nhạc trong public/music" : undefined}
          data-music-control
          className={`pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-maroon)]/30 bg-white/70 text-[var(--color-maroon)] shadow-sm backdrop-blur-sm transition-opacity active:scale-90 ${isPlaying ? "animate-music-spin" : "opacity-80"}`}
        >
          {isPlaying ? (
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
              <line x1="3" y1="3" x2="21" y2="21" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
