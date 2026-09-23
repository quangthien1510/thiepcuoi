import { weddingData } from "@/data/wedding";
import RevealOnScroll from "./RevealOnScroll";

function buildMonthGrid(dateISO: string) {
  const date = new Date(dateISO);
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

export default function CalendarSection() {
  const {
    couple,
    weddingDateISO,
    weddingDateDisplay,
    weddingDayOfWeek,
    weddingTime,
    lunarDate,
    highlightDays,
  } = weddingData;

  const weeks = buildMonthGrid(weddingDateISO);

  return (
    <section className="section-frame flex flex-col items-center gap-10 px-6 text-center">
      <h2 className="flex flex-col items-center font-script text-4xl leading-tight text-[var(--color-ink)]">
        <RevealOnScroll direction="left" distance={70} className="pr-30">
          {couple.brideName}
        </RevealOnScroll>
        <RevealOnScroll direction="up" delayMs={150} className="my-2 text-3xl">
          &amp;
        </RevealOnScroll>
        <RevealOnScroll direction="right" delayMs={100} distance={70} className="pl-30">
          {couple.groomName}
        </RevealOnScroll>
      </h2>

      <RevealOnScroll direction="up" distance={30}>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold tracking-wide text-[var(--color-ink)]">
            Được tổ chức vào lúc
          </p>
          <p className="font-display text-2xl font-bold tracking-wide text-[var(--color-ink)]">
            {weddingTime} - {weddingDayOfWeek}
          </p>
          <p className="font-display text-2xl font-bold tracking-wide text-[var(--color-ink)]">
            {weddingDateDisplay}
          </p>
          <p className="text-sm font-semibold text-[var(--color-ink)]">{lunarDate}</p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll
        direction="zoom"
        className="relative w-full max-w-[380px] pt-5"
      >
        <span className="calendar-paperclip" aria-hidden="true" />
        <div className="calendar-paper">
          <div className="calendar-holes" aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-5 px-7 pb-7 pt-12 text-[13px] sm:gap-y-6 sm:px-9 sm:pb-8 sm:text-sm">
            {weeks.flat().map((day, idx) => (
              <span
                key={idx}
                className="relative flex h-7 items-center justify-center font-normal text-[var(--color-ink)]"
              >
                {day && highlightDays.includes(day) ? (
                  <span className="relative flex h-9 w-9 items-center justify-center">
                    <span
                      className="calendar-heart"
                    >
                      ❤️
                    </span>
                    <span className="relative text-xs font-medium text-white">
                      {day}
                    </span>
                  </span>
                ) : (
                  day
                )}
              </span>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
