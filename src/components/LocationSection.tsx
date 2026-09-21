import { weddingData } from "@/data/wedding";
import PhotoPlaceholder from "./PhotoPlaceholder";
import RevealOnScroll from "./RevealOnScroll";

export default function LocationSection() {
  const { venue, people, photos } = weddingData;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    venue.mapQuery
  )}&z=16&output=embed`;

  return (
    <section className="section-frame flex flex-col gap-6 px-6 pt-14 pb-14">
      <div className="divider-hairline h-px w-full" />

      <div className="flex flex-col items-center gap-1 text-center">
        <p className="font-display text-lg font-semibold text-[var(--color-maroon)]">
          {venue.label} :
        </p>
        <p className="text-base text-[var(--color-ink)]/90">{venue.name}</p>
        <p className="font-display text-lg font-bold text-[var(--color-maroon-deep)]">
          {venue.address}
        </p>
      </div>

      <RevealOnScroll direction="zoom" className="h-56 w-full overflow-hidden rounded-xl border border-[var(--color-gold)]/30 shadow-sm">
        <iframe
          title="Bản đồ địa điểm tổ chức"
          src={mapSrc}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </RevealOnScroll>

      <div className="flex items-center gap-4">
        <RevealOnScroll direction="left" className="w-1/2">
          <PhotoPlaceholder
            src={photos.bride}
            label="Ảnh cô dâu"
            icon="👰"
            className="aspect-[3/4] w-full rounded-xl"
          />
        </RevealOnScroll>
        <RevealOnScroll direction="right" delayMs={100} className="flex flex-1 flex-col items-center gap-1 text-center">
          <p className="font-script text-2xl text-[var(--color-rose)]">
            {people.bride.role}
          </p>
          <p className="font-display text-xl font-semibold text-[var(--color-maroon-deep)]">
            {people.bride.name}
          </p>
          <p className="text-sm text-[var(--color-ink)]/60">{people.bride.birth}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
