import { weddingData } from "@/data/wedding";
import PhotoPlaceholder from "./PhotoPlaceholder";
import Countdown from "./Countdown";
import RevealOnScroll from "./RevealOnScroll";

export default function CoverSection() {
  const { couple, cover, weddingDateISO, weddingDateDisplay, photos } = weddingData;

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <RevealOnScroll direction="zoom" distance={0} className="absolute inset-0 h-full w-full">
        <PhotoPlaceholder
          src={photos.cover}
          label="Ảnh cưới bìa (dọc)"
          icon="👰🤵"
          className="h-full w-full rounded-none border-0"
        />
      </RevealOnScroll>

      {/* readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[var(--color-cream)]" />

      {/* Nút bật/tắt nhạc thật nằm ở <MusicPlayer />, mount 1 lần ở page.tsx (fixed, còn khi cuộn) */}

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 px-6 pb-28 text-center">
        <p className="font-script text-4xl text-[var(--color-maroon)] drop-shadow-sm">
          {cover.subheading}
        </p>

        <h1 className="flex flex-col items-center font-display text-3xl font-bold tracking-wide text-[var(--color-maroon-deep)]">
          <RevealOnScroll direction="left" distance={80}>
            {couple.brideName}
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayMs={150} className="my-1 flex items-center justify-center gap-2">
            <span className="block font-script text-2xl font-normal text-[var(--color-rose)]">
              &amp;
            </span>
            <span className="animate-heartbeat text-lg">💕</span>
          </RevealOnScroll>
          <RevealOnScroll direction="right" delayMs={100} distance={80}>
            {couple.groomName}
          </RevealOnScroll>
        </h1>

        <p className="font-display text-lg tracking-[0.2em] text-[var(--color-ink)]">
          {weddingDateDisplay}
        </p>

        <p className="font-script text-xl text-[var(--color-rose)]">
          {cover.tagline}
        </p>

        <div className="w-full max-w-xs pt-1">
          <Countdown targetISO={weddingDateISO} />
        </div>
      </div>
    </section>
  );
}
