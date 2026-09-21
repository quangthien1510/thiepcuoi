import { weddingData } from "@/data/wedding";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function PhotoGallerySection() {
  const { gallery } = weddingData.photos;
  const [heroImage, secondImage, thirdImage, fourthImage, fifthImage] = gallery;

  return (
    <section className="section-frame px-[22px] py-5">
      <div className="bg-white px-3 pb-5 pt-0">
        <div className="grid grid-cols-2 gap-[9px]">
          {[heroImage, secondImage].map((src, index) => (
            <RevealOnScroll
              key={src}
              direction={index === 0 ? "left" : "right"}
              delayMs={index * 70}
              className="relative aspect-[1.12/1] overflow-hidden"
            >
              <Image
                src={src}
                alt={`Khoảnh khắc cưới ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 320px"
                quality={100}
                priority={index === 0}
                className="object-cover"
              />
            </RevealOnScroll>
          ))}

          <RevealOnScroll
            direction="up"
            delayMs={140}
            className="relative col-span-2 aspect-[1.62/1] overflow-hidden"
          >
            <Image
              src={thirdImage}
              alt="Khoảnh khắc cưới 3"
              fill
              sizes="(max-width: 640px) 100vw, 640px"
              quality={100}
              className="object-cover"
            />
          </RevealOnScroll>

          <div className="col-span-2 flex min-h-[128px] flex-col items-end justify-center px-3 py-3 text-right">
            <p className="font-script text-[2.65rem] leading-none text-[var(--color-maroon-deep)]">
              Chapter Three
            </p>
            <p className="mt-5 max-w-[250px] font-display text-xs italic leading-relaxed text-[var(--color-maroon)]">
              &quot;Giữa thế gian rộng lớn, em là điều duy nhất, đáng giá.&quot;
            </p>
          </div>

          {[fourthImage, fifthImage].map((src, index) => (
            <RevealOnScroll
              key={src}
              direction={index === 0 ? "left" : "right"}
              delayMs={(index + 3) * 70}
              className="relative aspect-[0.91/1] overflow-hidden"
            >
              <Image
                src={src}
                alt={`Khoảnh khắc cưới ${index + 4}`}
                fill
                sizes="(max-width: 640px) 50vw, 320px"
                quality={100}
                className="object-cover"
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}