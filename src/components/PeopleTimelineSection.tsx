import { weddingData } from "@/data/wedding";
import PhotoPlaceholder from "./PhotoPlaceholder";
import RevealOnScroll from "./RevealOnScroll";
import CarFlowerIcon from "./icons/CarFlowerIcon";
import FlowerArchIcon from "./icons/FlowerArchIcon";
import RingBoxIcon from "./icons/RingBoxIcon";
import HeartHandsIcon from "./icons/HeartHandsIcon";

const TIMELINE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  car: CarFlowerIcon,
  flower: FlowerArchIcon,
  ring: RingBoxIcon,
  "heart-hands": HeartHandsIcon,
};

export default function PeopleTimelineSection() {
  const { people, timeline, photos } = weddingData;
  const timelineGallery = photos.extraPhotos.slice(0, 5);

  return (
    <section className="section-frame flex flex-col gap-10 pt-14 pb-14">
      <div className="flex items-center gap-4 px-6">
        <RevealOnScroll direction="left" className="flex flex-1 flex-col items-center gap-1 text-center">
          <p className="font-script text-2xl text-[var(--color-rose)]">
            {people.groom.role}
          </p>
          <p className="font-display text-xl font-semibold text-[var(--color-maroon-deep)]">
            {people.groom.name}
          </p>
          <p className="font-body text-sm text-[var(--color-ink)]/60">{people.groom.birth}</p>
        </RevealOnScroll>
        <RevealOnScroll direction="right" delayMs={100} className="w-1/2">
          <PhotoPlaceholder
            src={photos.groom}
            label="Ảnh chú rể"
            icon="🤵"
            className="aspect-[3/4] w-full rounded-xl"
          />
        </RevealOnScroll>
      </div>

      <div className="relative overflow-hidden py-10">
        <PhotoPlaceholder
          src={photos.timeline}
          label=""
          icon=""
          className="absolute inset-0 h-full w-full rounded-none border-0 opacity-25"
        />
        <div className="relative flex flex-col items-center gap-8 px-6">
          <h2 className="font-display text-4xl font-bold tracking-[0.15em] text-[var(--color-maroon-deep)]">
            TIMELINE
          </h2>

          <div className="grid w-full grid-cols-4 gap-2">
            {timeline.map((item, idx) => {
              const Icon = TIMELINE_ICONS[item.icon] ?? CarFlowerIcon;
              return (
                <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                  <Icon className="h-10 w-10" />
                  <div className="relative flex h-4 w-full items-center justify-center">
                    <div className="absolute inset-y-0 left-0 right-0 my-auto h-px bg-[var(--color-maroon)]/50" />
                    <span className="relative text-sm text-[var(--color-maroon)]">♥</span>
                  </div>
                  <p className="font-display text-sm font-bold text-[var(--color-maroon-deep)]">
                    {item.time}
                  </p>
                  <p className="text-xs text-[var(--color-ink)]/80">{item.label}</p>
                  {idx < timeline.length - 1 && (
                    <span className="sr-only">tiếp theo</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3 px-6">
        {timelineGallery.map((src, index) => (
          <RevealOnScroll
            key={src}
            direction={index % 2 === 0 ? "left" : "right"}
            delayMs={index * 80}
            className={index < 2 ? "col-span-3" : "col-span-2"}
          >
            <PhotoPlaceholder
              src={src}
              label={`Ảnh sau timeline ${index + 1}`}
              className="aspect-[2/3] w-full rounded-lg"
            />
          </RevealOnScroll>
        ))}
      </div>

    </section>
  );
}
