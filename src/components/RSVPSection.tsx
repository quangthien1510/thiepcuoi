"use client";

import { useState } from "react";
import { weddingData } from "@/data/wedding";
import RevealOnScroll from "./RevealOnScroll";

type Attendance = "yes" | "no";

export default function RSVPSection() {
  const { rsvp } = weddingData;
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [guestCount, setGuestCount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    // Demo tĩnh: chưa nối API/DB. Nối vào đây khi cần lưu dữ liệu thật.
    setSubmitted(true);
  }

  return (
    <section id="rsvp" className="section-frame flex flex-col gap-6 px-6 pb-14">
      <RevealOnScroll direction="up">
        <p className="text-center font-body text-[15px] leading-relaxed text-[var(--color-maroon)]">
          {rsvp.heading}
        </p>
      </RevealOnScroll>

      <RevealOnScroll direction="zoom" delayMs={150} className="rounded-2xl border border-[var(--color-gold)]/30 bg-white p-5 shadow-md">
        <h3 className="mb-4 text-center font-display text-lg font-semibold text-[var(--color-maroon-deep)]">
          Xác nhận tham dự
        </h3>

        {submitted ? (
          <p className="animate-pop-in rounded-lg bg-[var(--color-cream)] px-4 py-6 text-center text-sm text-[var(--color-maroon-deep)]">
            Cảm ơn <span className="font-semibold">{name}</span> đã xác nhận! Hẹn gặp
            bạn trong ngày trọng đại 💕
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5 text-sm">
              Họ và tên
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên của bạn"
                required
                className="rounded-lg border border-[var(--color-gold)]/40 px-3 py-2.5 text-sm outline-none focus:border-[var(--color-pink)]"
              />
            </label>

            <fieldset className="flex flex-col gap-2 text-sm">
              <legend className="mb-1">Bạn sẽ tham dự chứ?</legend>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attendance"
                  checked={attendance === "yes"}
                  onChange={() => setAttendance("yes")}
                  className="h-4 w-4 accent-[var(--color-pink-deep)]"
                />
                Có, tôi sẽ tham dự
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attendance"
                  checked={attendance === "no"}
                  onChange={() => setAttendance("no")}
                  className="h-4 w-4 accent-[var(--color-pink-deep)]"
                />
                Tôi bận, rất tiếc không thể tham dự
              </label>
            </fieldset>

            {attendance === "yes" && (
              <label className="flex flex-col gap-1.5 text-sm">
                Số lượng người tham dự
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="rounded-lg border border-[var(--color-gold)]/40 px-3 py-2.5 text-sm outline-none focus:border-[var(--color-pink)]"
                >
                  <option value="" disabled>
                    Chọn số người tham dự
                  </option>
                  {rsvp.guestCountOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <button
              type="submit"
              className="mt-1 rounded-lg bg-gradient-to-r from-[var(--color-pink)] to-[var(--color-pink-deep)] py-3 text-sm font-semibold text-white shadow-md active:scale-[0.98]"
            >
              Gửi xác nhận
            </button>
          </form>
        )}
      </RevealOnScroll>
    </section>
  );
}
