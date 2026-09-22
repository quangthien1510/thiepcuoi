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
  objectPosition?: string;
  plain?: boolean;
};

export default function PhotoPlaceholder({
  label = "Ảnh cưới",
  className = "",
  icon = "📷",
  src,
  fit = "cover",
  objectPosition = "center",
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
            : "border border-dashed border-[var(--color-gold)]/50 bg-gradient-to-br from-[#eef6ef] via-white to-[#dcebdd]"
        } ${className}`}
      >
        {src ? (
          <Image
            src={src}
            alt={label || "Ảnh cưới"}
            fill
            sizes="(max-width: 640px) 100vw, 800px"
            quality={82}
            className={`${fit === "contain" ? "object-contain" : "object-cover"} rounded-2xl`}
            style={{ objectPosition }}
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
                sizes="(max-width: 640px) 92vw, 900px"
                quality={82}
                priority
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
