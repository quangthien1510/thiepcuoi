"use client";

import { useState } from "react";
import { weddingData } from "@/data/wedding";
import PhotoPlaceholder from "./PhotoPlaceholder";
import RevealOnScroll from "./RevealOnScroll";

export default function LocationSection() {
  const { venues, people, photos } = weddingData;
  const [selectedVenue, setSelectedVenue] = useState<"bride" | "groom">("bride");
  const venue = venues[selectedVenue];
  const mapSrc = venue.mapQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(
      venue.mapQuery
    )}&z=16&output=embed`
    : "";
  const mapLink = venue.mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      venue.mapQuery
    )}`
    : "";

  return (
    <section className="section-frame flex flex-col gap-6 px-6 pt-14 pb-14">
      <div className="divider-hairline h-px w-full" />

      <div className="grid grid-cols-2 gap-2 rounded-xl bg-[var(--color-cream-deep)]/55 p-1">
        {(["bride", "groom"] as const).map((venueType) => {
          const isSelected = selectedVenue === venueType;
          return (
            <button
              key={venueType}
              type="button"
              onClick={() => setSelectedVenue(venueType)}
              aria-pressed={isSelected}
              className={`rounded-lg px-3 py-3 font-display text-sm font-semibold transition-colors ${isSelected
                ? "bg-[var(--color-maroon-deep)] text-white shadow-sm"
                : "text-[var(--color-maroon)]"
                }`}
            >
              {venueType === "bride" ? "Nhà gái / Cô dâu" : "Nhà trai / Chú rể"}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 text-center">
        <div className="flex flex-col items-center gap-1">
          <p className="font-display text-lg font-semibold text-[var(--color-maroon)]">
            {venue.label}
          </p>
          <p className="font-body text-base text-[var(--color-ink)]/90">{venue.name}</p>
          <p className="font-body text-sm font-semibold leading-relaxed text-[var(--color-maroon-deep)]">
            {venue.address}
          </p>
        </div>

        {mapSrc ? (
          <>
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Mở ${venue.label} trên Google Maps`}
            >
              <RevealOnScroll
                key={selectedVenue}
                direction="zoom"
                className="h-56 w-full overflow-hidden rounded-xl border border-[var(--color-gold)]/30 shadow-sm"
              >
                <iframe
                  title={`Bản đồ ${venue.label}`}
                  src={mapSrc}
                  className="pointer-events-none h-full w-full select-none"
                  scrolling="no"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </RevealOnScroll>
            </a>
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="self-center font-display text-sm font-semibold text-[var(--color-maroon-deep)] underline underline-offset-4"
            >
              Mở Google Maps
            </a>
          </>
        ) : (
          <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-[var(--color-gold)]/50 bg-[var(--color-cream-deep)]/30 px-4 text-center font-body text-sm text-[var(--color-ink)]/60">
            Chưa có địa chỉ Google Maps cho địa điểm này.
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <RevealOnScroll direction="left" className="w-[58%]">
          <PhotoPlaceholder
            src={photos[selectedVenue]}
            label={selectedVenue === "bride" ? "Ảnh cô dâu" : "Ảnh chú rể"}
            icon={selectedVenue === "bride" ? "👰" : "🤵"}
            className="aspect-[2.5/4] w-full rounded-xl"
          />
        </RevealOnScroll>
        <RevealOnScroll direction="right" delayMs={100} className="flex flex-1 flex-col items-center gap-1 text-center">
          <p className="font-script text-2xl text-[var(--color-rose)]">
            {people[selectedVenue].role}
          </p>
          <p className="font-display text-xl font-semibold text-[var(--color-maroon-deep)]">
            {people[selectedVenue].name}
          </p>
          <p className="font-body text-sm text-[var(--color-ink)]/60">{people[selectedVenue].birth}</p>
        </RevealOnScroll>
      </div>

    </section>
  );
}
