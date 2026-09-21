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
    <section className="section-frame flex flex-col gap-10 pb-14">
      <div className="flex items-center gap-4 px-4 sm:px-6">
        <RevealOnScroll direction="left" className="flex flex-1 flex-col items-center gap-1 text-center">
          <p className="font-script text-2xl text-[var(--color-rose)]">
            {people.groom.role}
          </p>
          <p className="font-display text-xl font-semibold text-[var(--color-maroon-deep)]">
            {people.groom.name}
          </p>
          <p className="font-body text-sm text-[var(--color-ink)]/60">{people.groom.birth}</p>
        </RevealOnScroll>
        <RevealOnScroll direction="right" delayMs={100} className="w-[58%]">
          <PhotoPlaceholder
            src={photos.groom}
            label="Ảnh chú rể"
            icon="🤵"
            className="aspect-[2.5/4] h-full w-full rounded-xl"
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
        <div className="relative flex flex-col items-center gap-8 px-4 sm:px-6">
          <h2 className="font-display text-4xl font-bold tracking-[0.15em] text-[var(--color-maroon-deep)]">
            TIMELINE
          </h2>

          <div className="grid w-full grid-cols-4 gap-2">
            {timeline.map((item, idx) => {
              const Icon = TIMELINE_ICONS[item.icon] ?? CarFlowerIcon;
              return (
                <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                  <RevealOnScroll
                    direction={idx === 0 ? "left" : idx === 1 ? "up" : idx === 2 ? "right" : "zoom"}
                    delayMs={idx * 280}
                    distance={48}
                  >
                    <Icon className="h-10 w-10" />
                  </RevealOnScroll>
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

      <div className="grid grid-cols-6 items-stretch gap-2 px-4 sm:px-6">
        <div className="col-span-3 flex min-h-20 items-center justify-center px-2 py-1 text-center">
          <p className="font-script text-3xl leading-none tracking-wide text-[var(--color-maroon-deep)]">
            Mãi bên nhau
          </p>
        </div>

        <RevealOnScroll direction="right" className="col-span-3 row-span-2">
          <PhotoPlaceholder
            src={timelineGallery[0]}
            label="Ảnh sau timeline 1"
            fit="cover"
            plain
            className="aspect-[4/5] h-full w-full rounded-2xl"
          />
        </RevealOnScroll>

        <RevealOnScroll direction="left" delayMs={80} className="col-span-3">
          <PhotoPlaceholder
            src={timelineGallery[1]}
            label="Ảnh sau timeline 2"
            fit="cover"
            plain
            className="aspect-[5/6] w-full rounded-2xl"
          />
        </RevealOnScroll>

        {timelineGallery.slice(2).map((src, index) => (
          <RevealOnScroll
            key={`${src}-${index + 2}`}
            direction={index % 2 === 0 ? "left" : "right"}
            delayMs={(index + 2) * 80}
            className="col-span-2"
          >
            <PhotoPlaceholder
              src={src}
              label={`Ảnh sau timeline ${index + 3}`}
              fit="cover"
              plain
              className="aspect-[5/6] w-full rounded-2xl"
            />
          </RevealOnScroll>
        ))}
      </div>

    </section>
  );
}
