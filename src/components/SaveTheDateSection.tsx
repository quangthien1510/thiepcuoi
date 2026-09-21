import { weddingData } from "@/data/wedding";
import PhotoPlaceholder from "./PhotoPlaceholder";
import RevealOnScroll from "./RevealOnScroll";

export default function SaveTheDateSection() {
  const { families, invitationLine, invitationNote, photos } = weddingData;

  return (
    <section className="section-frame flex flex-col items-center gap-8 px-4 pb-14 text-center sm:px-6">
      <div className="grid w-full grid-cols-5 gap-2">
        <RevealOnScroll direction="left" className="col-span-3">
          <PhotoPlaceholder
            src={photos.saveTheDate1}
            label="Ảnh 1"
            icon="💑"
            className="aspect-[3.5/5] w-full rounded-2xl"
          />
        </RevealOnScroll>
        <RevealOnScroll direction="right" delayMs={100} className="col-span-2 mt-6">
          <PhotoPlaceholder
            src={photos.saveTheDate2}
            label="Ảnh 2"
            icon="🤍"
            className="aspect-[2.5/5] w-full rounded-2xl"
          />
        </RevealOnScroll>
      </div>

      <h2 className="font-display text-5xl font-bold leading-[1.05] text-[var(--color-maroon-deep)]">
        SAVE
        <span className="block text-2xl font-normal italic text-[var(--color-rose)]">
          the
        </span>
        DATE
      </h2>

      <div className="grid w-full grid-cols-[1fr_auto_1fr] gap-4">
        <RevealOnScroll direction="left" className="flex flex-col gap-1">
          <h3 className="font-display text-lg font-semibold text-[var(--color-maroon)]">
            {families.bride.title}
          </h3>
          <p className="font-body text-sm leading-relaxed text-[var(--color-ink)]/80">
            {families.bride.father}
            <br />
            {families.bride.mother}
            <br />
            {families.bride.address}
          </p>
        </RevealOnScroll>

        <div className="divider-hairline w-px self-stretch bg-[var(--color-gold)]/40" />

        <RevealOnScroll direction="right" className="flex flex-col gap-1">
          <h3 className="font-display text-lg font-semibold text-[var(--color-maroon)]">
            {families.groom.title}
          </h3>
          <p className="font-body text-sm leading-relaxed text-[var(--color-ink)]/80">
            {families.groom.father}
            <br />
            {families.groom.mother}
            <br />
            {families.groom.address}
          </p>
        </RevealOnScroll>
      </div>

      <p className="max-w-[32rem] font-display text-sm italic leading-relaxed text-[var(--color-maroon)]/75">
        {invitationNote}
      </p>

      <p className="font-body text-base text-[var(--color-ink)]/90">
        {invitationLine}
      </p>

      <div className="grid w-full grid-cols-6 items-stretch gap-2">
        <RevealOnScroll direction="left" className="col-span-3 row-span-2">
          <PhotoPlaceholder
            src={photos.gallery[0]}
            label="Khoảnh khắc cưới 1"
            fit="cover"
            plain
            className="aspect-[5/6] h-full w-full rounded-lg"
          />
        </RevealOnScroll>

        <RevealOnScroll direction="right" delayMs={80} className="col-span-3">
          <PhotoPlaceholder
            src={photos.gallery[1]}
            label="Khoảnh khắc cưới 2"
            fit="cover"
            plain
            className="aspect-[5/6] w-full rounded-lg"
          />
        </RevealOnScroll>

        <div className="col-span-3 flex min-h-24 flex-col justify-center px-2 py-1 text-right">
          <p className="font-script text-3xl leading-none text-[var(--color-maroon-deep)]">
            Always &amp; forever
          </p>
          <p className="mt-2 font-body text-[11px] italic leading-relaxed text-[var(--color-maroon)]/80">
            Cùng nhau viết tiếp những ngày bình yên.
          </p>
        </div>

        {photos.gallery.slice(2).map((src, index) => (
          <RevealOnScroll
            key={`${src}-${index + 2}`}
            direction="up"
            delayMs={(index + 2) * 80}
            className="col-span-2"
          >
            <PhotoPlaceholder
              src={src}
              label={`Khoảnh khắc cưới ${index + 3}`}
              fit="cover"
              plain
              className="aspect-[4/6] w-full rounded-lg"
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
