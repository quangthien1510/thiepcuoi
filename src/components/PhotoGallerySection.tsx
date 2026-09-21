import { weddingData } from "@/data/wedding";
import RevealOnScroll from "./RevealOnScroll";

export default function PhotoGallerySection() {
  const { gallery } = weddingData.photos;

  return (
    <section className="section-frame flex flex-col gap-7 px-6 pt-14 pb-14">
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="font-script text-3xl text-[var(--color-rose)]">Our moments</p>
        <h2 className="font-display text-3xl font-bold tracking-[0.12em] text-[var(--color-maroon-deep)]">
          KHOẢNH KHẮC
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {gallery.map((src, index) => (
          <RevealOnScroll
            key={src}
            direction={index % 2 === 0 ? "left" : "right"}
            delayMs={index * 70}
            className="overflow-hidden rounded-2xl border border-[var(--color-gold)]/35 bg-white p-1 shadow-md"
          >
            <img
              src={src}
              alt={`Khoảnh khắc cưới ${index + 1}`}
              className="aspect-[4/5] w-full rounded-xl object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}