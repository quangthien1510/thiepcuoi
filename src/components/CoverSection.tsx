import { weddingData } from "@/data/wedding";
import PhotoPlaceholder from "./PhotoPlaceholder";
import Countdown from "./Countdown";

export default function CoverSection() {
  const { couple, cover, weddingDateISO, weddingDateDisplay, photos } = weddingData;
  const coupleNameStyle = {
    textShadow: "none",
    fontSize: "30.96px",
    fontWeight: 500,
    textAlign: "center" as const,
    lineHeight: 1.43,
    letterSpacing: "0px",
    textTransform: "none" as const,
    textDecoration: "none",
    fontStyle: "normal" as const,
    wordBreak: "break-word" as const,
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <PhotoPlaceholder
          src={photos.cover}
          label="Ảnh cưới bìa (dọc)"
          icon="👰🤵"
          objectPosition="30% center"
          preload
          className="h-full w-full border-0 "
        />
      </div>

      {/* readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[var(--color-background)]" />

      {/* Nút bật/tắt nhạc thật nằm ở <MusicPlayer />, mount 1 lần ở page.tsx (fixed, còn khi cuộn) */}

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-10  pb-20 text-center">
        <p className="font-script text-4xl rotate-[-15deg] pl-35 text-[var(--color-maroon)] drop-shadow-sm">
          {cover.subheading}
        </p>

        <h1 className="flex flex-col items-center font-display text-3xl font-bold tracking-wide text-[var(--color-maroon-deep)]">
          <div className="pr-35">
            <span style={coupleNameStyle}>{couple.brideName}</span>
          </div>
          <div className="my-2 flex items-center justify-center ">
            <span className="block font-script text-2xl font-normal text-[var(--color-rose)]">
              &amp;
            </span>
          </div>
          <div className="pl-40">
            <span style={coupleNameStyle}>{couple.groomName}</span>
          </div>
        </h1>

        <div>
          <p className="font-display text-lg tracking-[0.2em] text-[var(--color-ink)]">
            {weddingDateDisplay}
          </p>
        </div>

        <div>
          <p className="font-script text-xl tracking-[0.2em] text-[var(--color-rose)]">
            {cover.tagline}
          </p>
        </div>

        <div className="w-[280px] h-[30px]">
          <Countdown targetISO={weddingDateISO} />
        </div>
      </div>
    </section>
  );
}
