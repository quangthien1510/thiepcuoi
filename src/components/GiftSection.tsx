"use client";

import { useState } from "react";
import { weddingData } from "@/data/wedding";
import RevealOnScroll from "./RevealOnScroll";
import PhotoPlaceholder from "./PhotoPlaceholder";
import GiftBoxIcon from "./GiftBoxIcon";

export default function GiftSection() {
  const { gift, photos } = weddingData;
  const [activeIdx, setActiveIdx] = useState(0);
  const [opened, setOpened] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [boxLeaving, setBoxLeaving] = useState(false);
  const active = gift.accounts[activeIdx];

  function handleTapBox() {
    if (opened || boxLeaving) return;
    setShaking(true);
    window.setTimeout(() => {
      setBoxLeaving(true);
      window.setTimeout(() => setOpened(true), 650);
    }, 900);
  }

  return (
    <section id="gift" className="section-frame flex flex-col items-center gap-6 px-6  text-center">
      <RevealOnScroll direction="zoom" className="w-full max-w-[220px] rounded-md bg-[var(--color-maroon-deep)] py-3 font-display text-lg font-semibold text-white shadow-md">
        {gift.heading}
      </RevealOnScroll>

      {!opened && (
        <button
          type="button"
          onClick={handleTapBox}
          aria-label="Chạm để mở hộp quà"
          className="relative flex h-24 w-24 items-center justify-center"
        >
          <span className="animate-ring-pulse absolute inset-0 rounded-full bg-[var(--color-pink)]/40" />
          <span
            className={`relative block h-24 w-24 ${
              boxLeaving ? "animate-box-open" : shaking ? "animate-box-shake" : "animate-gentle-bob"
            }`}
          >
            <GiftBoxIcon className="h-full w-full drop-shadow-md" />
          </span>
        </button>
      )}

      {!opened && (
        <p className="animate-pulse text-xs tracking-wide text-[var(--color-maroon)]/70">
          Chạm vào hộp quà để mở nhé 👆
        </p>
      )}

      {opened && (
        <>
          <RevealOnScroll direction="up" className="flex gap-2">
            {gift.accounts.map((acc, idx) => (
              <button
                key={acc.owner}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  idx === activeIdx
                    ? "bg-[var(--color-maroon)] text-white"
                    : "bg-[var(--color-cream-deep)] text-[var(--color-maroon)]"
                }`}
              >
                {acc.owner}
              </button>
            ))}
          </RevealOnScroll>

          <div key={activeIdx} className="animate-pop-in flex flex-col items-center gap-3">
            <PhotoPlaceholder
              src={active.qrImage}
              label={`QR chuyển khoản - ${active.owner}`}
              icon="🔳"
              className="h-56 w-56 rounded-2xl border-2 border-[var(--color-gold)]/50 bg-white shadow-md"
            />
            <div className="flex flex-col items-center gap-1">
              <p className="font-script text-2xl text-[var(--color-rose)]">{active.owner}</p>
              <p className="font-display text-lg font-semibold text-[var(--color-maroon-deep)]">
                {active.name}
              </p>
              <p className="text-sm tracking-wide text-[var(--color-ink)]/70">
                {active.bank} - {active.accountNumber}
              </p>
            </div>
          </div>
        </>
      )}

      <RevealOnScroll direction="up" className="flex items-center justify-center gap-4 pt-4">
        <span className="animate-couple-sway inline-block h-24 w-24 overflow-hidden rounded-full border-2 border-[var(--color-gold)]/60 shadow-md">
          <PhotoPlaceholder
            src={photos.groom}
            label=""
            icon="🤵"
            objectPosition="center top"
            className="h-full w-full rounded-full border-0"
          />
        </span>
        <span className="animate-heartbeat text-3xl">💕</span>
        <span className="animate-couple-sway-reverse inline-block h-24 w-24 overflow-hidden rounded-full border-2 border-[var(--color-gold)]/60 shadow-md">
          <PhotoPlaceholder
            src={photos.bride}
            label=""
            icon="👰"
            objectPosition="center top"
            className="h-full w-full rounded-full border-0"
          />
        </span>
      </RevealOnScroll>

      <RevealOnScroll
        direction="up"
        delayMs={100}
        className="flex flex-col items-center gap-1 pt-10"
      >
        <p className="font-script text-3xl text-[var(--color-rose)]">{gift.thankYou}</p>
        <p className="max-w-xs font-body text-sm leading-relaxed text-[var(--color-ink)]/75">
          {gift.thankYouNote}
        </p>
      </RevealOnScroll>
    </section>
  );
}
