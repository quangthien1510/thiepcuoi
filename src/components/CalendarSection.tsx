import { weddingData } from "@/data/wedding";
import RevealOnScroll from "./RevealOnScroll";

const WEEKDAY_LABELS = ["1", "2", "3", "4", "5", "6", "7"];

function buildMonthGrid(dateISO: string) {
  const date = new Date(dateISO);
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Monday-first index: 0 = Monday ... 6 = Sunday
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;

  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
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
        className="relative w-full max-w-xs rounded-lg border border-[var(--color-gold)]/30 bg-[var(--color-cream)] p-4 pt-8 shadow-sm"
      >
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">
          📎
        </span>
        <div className="grid grid-cols-7 gap-y-3 text-xs">
          {WEEKDAY_LABELS.map((label) => (
            <span key={label} className="font-semibold text-[var(--color-ink)]">
              {label}
            </span>
          ))}
          {weeks.flat().map((day, idx) => (
            <span
              key={idx}
              className="relative flex h-6 items-center justify-center font-semibold text-[var(--color-ink)]"
            >
              {day && highlightDays.includes(day) ? (
                <span className="relative flex h-6 w-6 items-center justify-center">
                  <span
                    className={`absolute text-xl ${
                      day === 17
                        ? "calendar-heart-from-left"
                        : "calendar-heart-from-right"
                    }`}
                    style={{ animationDelay: day === 17 ? "350ms" : "650ms" }}
                  >
                    ❤️
                  </span>
                  <span className="relative text-[11px] font-bold text-white">
                    {day}
                  </span>
                </span>
              ) : (
                day
              )}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
