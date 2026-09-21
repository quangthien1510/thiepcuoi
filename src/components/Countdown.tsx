"use client";

import { useEffect, useState } from "react";

type Props = {
  targetISO: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetISO: string): TimeLeft {
  const diff = new Date(targetISO).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "ngày" },
  { key: "hours", label: "giờ" },
  { key: "minutes", label: "phút" },
  { key: "seconds", label: "giây" },
];

export default function Countdown({ targetISO }: Props) {
  // null on first server render to avoid hydration mismatch, filled in on mount
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Tính ngay lần đầu sau khi mount (tránh lệch giờ server/client khi hydrate),
    // sau đó cập nhật mỗi giây.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: avoids SSR/client clock mismatch
    setTimeLeft(getTimeLeft(targetISO));
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetISO)), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="grid grid-cols-4 gap-2">
      {UNITS.map((unit) => (
        <div
          key={unit.key}
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[var(--color-maroon-deep)]/90 px-2 py-3 text-[var(--color-cream)] shadow-lg backdrop-blur-sm"
        >
          <span className="font-display text-2xl font-bold tabular-nums">
            {String(display[unit.key]).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-wide opacity-80">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
