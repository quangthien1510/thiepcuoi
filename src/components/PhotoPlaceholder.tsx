"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PhotoPlaceholderProps = {
  label?: string;
  className?: string;
  icon?: string;
  src?: string;
  fit?: "cover" | "contain";
  plain?: boolean;
};

export default function PhotoPlaceholder({
  label = "Ảnh cưới",
  className = "",
  icon = "📷",
  src,
  fit = "cover",
  plain = false,
}: PhotoPlaceholderProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLightboxOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={`Phóng to ${label || "ảnh cưới"}`}
        onClick={() => src && setIsLightboxOpen(true)}
        className={`relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden text-left text-[var(--color-maroon)]/70 ${
          src ? "cursor-zoom-in" : "cursor-default"
        } ${
          src || plain || fit === "contain"
            ? "border-0 bg-transparent"
            : "border border-dashed border-[var(--color-gold)]/50 bg-gradient-to-br from-[#efe2d3] via-[#f6ede1] to-[#e7d3c9]"
        } ${className}`}
      >
        {src ? (
          <Image
            src={src}
            alt={label || "Ảnh cưới"}
            fill
            sizes="(max-width: 640px) 100vw, 640px"
            quality={100}
            className={`${fit === "contain" ? "object-contain" : "object-cover"} rounded-2xl`}
          />
        ) : (
          <>
            <span className="text-3xl opacity-70">{icon}</span>
            {label && (
              <span className="font-body text-xs tracking-wide opacity-70">{label}</span>
            )}
          </>
        )}
      </button>

      {src &&
        isLightboxOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={label || "Ảnh cưới phóng to"}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative h-[min(88vh,900px)] w-[min(92vw,900px)] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={label || "Ảnh cưới phóng to"}
                fill
                sizes="92vw"
                quality={100}
                className="rounded-2xl object-contain"
              />
              <button
                type="button"
                aria-label="Đóng ảnh phóng to"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white"
              >
                ×
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
