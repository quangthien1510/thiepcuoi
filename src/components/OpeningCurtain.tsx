"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const OPEN_DURATION_MS = 2600;

export default function OpeningCurtain() {
  const [isOpening, setIsOpening] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const closeTimer = window.setTimeout(() => setIsGone(true), 0);
      return () => window.clearTimeout(closeTimer);
    }

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const openFrame = window.requestAnimationFrame(() => setIsOpening(true));

    const removeTimer = window.setTimeout(() => {
      setIsGone(true);
      document.documentElement.style.overflow = previousOverflow;
    }, OPEN_DURATION_MS);

    return () => {
      window.cancelAnimationFrame(openFrame);
      window.clearTimeout(removeTimer);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, []);

  if (isGone) return null;

  return (
    <div
      aria-hidden="true"
      className="opening-curtain"
      data-opening={isOpening ? "true" : "false"}
    >
      <div className="opening-curtain__panel opening-curtain__panel--left">
        <div className="opening-curtain__seal">
          <Image
            src="/images/condau.webp"
            alt=""
            fill
            sizes="120px"
            className="object-contain"
          />
        </div>
      </div>
      <div className="opening-curtain__panel opening-curtain__panel--right" />
    </div>
  );
}