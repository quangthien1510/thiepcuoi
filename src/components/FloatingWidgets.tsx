"use client";

import { useEffect, useRef, useState } from "react";
import { weddingData } from "@/data/wedding";

type Wish = { id: number; name: string; message: string };
type FloatingIcon = { id: number; left: number; icon: string };

const VISIBLE_COUNT = 4;
const CYCLE_MS = 3600;
const WISH_STEP_MS = 900;
const HIGHLIGHT_MS = 1600;

const THROW_ICONS = ["💗", "💕", "✨", "💐", "🎉"];
const LIKE_ICONS = ["👍", "❤️", "😍", "🥰"];

export default function FloatingWidgets() {
  const avatarSrc = weddingData.photos.avatar || weddingData.photos.cover;
  const idRef = useRef(weddingData.wishes.length);
  const trackRef = useRef<HTMLDivElement>(null);
  const [wishStep, setWishStep] = useState(38);
  const [wishes, setWishes] = useState<Wish[]>(() =>
    weddingData.wishes.map((w, i) => ({ ...w, id: i }))
  );
  const [startIndex, setStartIndex] = useState(0);
  const [isWishMoving, setIsWishMoving] = useState(false);
  const [bubblesOpen, setBubblesOpen] = useState(true);
  const [text, setText] = useState("");
  const [justSentId, setJustSentId] = useState<number | null>(null);

  const [likeCount, setLikeCount] = useState(0);
  const [likeIconIdx, setLikeIconIdx] = useState(0);
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);
  const floatId = useRef(0);

  useEffect(() => {
    if (!bubblesOpen || wishes.length === 0) return;

    let moveTimer: ReturnType<typeof setTimeout> | undefined;

    const id = setInterval(() => {
      if (wishes.length <= 1) return;

      // Đo chiều cao thực tế của bong bóng đầu tiên (kể cả khi xuống dòng
      // nhiều dòng) để cuộn đúng khoảng cách, tránh giật/cắt chữ.
      const track = trackRef.current;
      const firstItem = track?.firstElementChild as HTMLElement | null;
      if (track && firstItem) {
        const gap = parseFloat(getComputedStyle(track).rowGap || "6");
        setWishStep(firstItem.offsetHeight + gap);
      }

      setIsWishMoving(true);
      moveTimer = setTimeout(() => {
        setStartIndex((i) => (i + 1) % wishes.length);
        setIsWishMoving(false);
      }, WISH_STEP_MS);
    }, CYCLE_MS);

    return () => {
      clearInterval(id);
      if (moveTimer) clearTimeout(moveTimer);
    };
  }, [wishes.length, bubblesOpen]);

  function spawnFloatingIcon(icon: string) {
    const id = floatId.current++;
    const left = 10 + Math.random() * 70;

    setFloatingIcons((items) => [...items, { id, left, icon }]);

    setTimeout(() => {
      setFloatingIcons((items) => items.filter((item) => item.id !== id));
    }, 1800);
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    const newWish: Wish = {
      id: idRef.current++,
      name: "Bạn",
      message: trimmed,
    };

    // Thêm vào CUỐI danh sách và dời cửa sổ hiển thị sao cho lời chúc mới
    // nằm ở dòng dưới cùng (sát ô nhập), rồi cả cụm sẽ đẩy lên khi có tin
    // tiếp theo — giống chat, không phải nhảy thẳng lên đầu.
    const nextWishes = [...wishes, newWish];
    const nextCount = Math.min(VISIBLE_COUNT + 1, nextWishes.length);

    setWishes(nextWishes);
    setStartIndex(Math.max(0, nextWishes.length - nextCount));
    setBubblesOpen(true);
    setText("");
    setJustSentId(newWish.id);
    spawnFloatingIcon("💌");

    setTimeout(() => setJustSentId(null), HIGHLIGHT_MS);
  }

  function handleThrowHeart() {
    spawnFloatingIcon(
      THROW_ICONS[Math.floor(Math.random() * THROW_ICONS.length)]
    );
  }

  function handleLike() {
    setLikeCount((c) => c + 1);
    setLikeIconIdx((i) => (i + 1) % LIKE_ICONS.length);
  }

  const count = Math.min(VISIBLE_COUNT + 1, wishes.length);
  const visible =
    count > 0
      ? Array.from(
          { length: count },
          (_, i) => wishes[(startIndex + i) % wishes.length]
        )
      : [];

  return (
    <>
      {/* Cụm lời chúc nổi. Không còn một thanh button riêng ở đáy trang. */}
      <div className="pointer-events-none fixed inset-x-0 bottom-3 z-40 mx-auto w-full max-w-[500px] px-2.5 sm:bottom-4 sm:px-3">
        <div className="pointer-events-auto flex flex-col items-stretch gap-2">
          {bubblesOpen && (
            <div
              className="wish-queue min-w-0 overflow-hidden"
              aria-live="polite"
            >
              <div
                ref={trackRef}
                style={{ "--wish-step": `${wishStep}px` } as React.CSSProperties}
                className={`wish-queue-track flex flex-col items-start gap-1.5 ${
                  isWishMoving ? "is-moving" : ""
                }`}
              >
                {visible.map((wish) => (
                  <div
                    key={wish.id}
                    className={`wish-queue-item w-fit max-w-[82%] rounded-2xl rounded-bl-sm px-3 py-1.5 text-[11px] leading-snug text-white shadow-md backdrop-blur-sm sm:max-w-[24rem] ${
                      wish.id === justSentId
                        ? "bg-[var(--color-pink-deep)] ring-2 ring-white animate-wish-in"
                        : "bg-[var(--color-pink)]/85"
                    }`}
                  >
                    <span className="font-semibold">{wish.name}: </span>
                    <span className="break-words">{wish.message}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {bubblesOpen ? (
            <>
              {/* Avatar nổi song song, đè góc trên-phải thanh input (không chiếm thêm dòng riêng). */}
              <div className="relative">
                <div className="absolute -top-20 right-1 z-10">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setBubblesOpen(false)}
                      aria-label="Đóng khung lời chúc"
                      aria-expanded="true"
                      className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-md active:scale-95"
                    >
                      {avatarSrc ? (
                        <img
                          src={avatarSrc}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#efe2d3] to-[#e7d3c9] text-lg">
                          💌
                        </span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setBubblesOpen(false)}
                      aria-label="Đóng khung lời chúc"
                      className="absolute -bottom-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[var(--color-maroon-deep)] text-[10px] font-bold leading-none text-white shadow-sm active:scale-95"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Ô nhập bên trái, các icon hành động nằm bên phải. */}
                <div className="flex w-full items-center gap-1.5 rounded-[1.35rem] border border-[var(--color-gold)]/30 bg-[var(--color-cream)]/95 p-1.5 shadow-lg backdrop-blur-md">
                  <form
                    onSubmit={handleSend}
                    className="flex min-w-0 flex-1 items-center rounded-full border border-[var(--color-gold)]/30 bg-white/70 p-0.5"
                  >
                    <input
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Gửi lời chúc..."
                      aria-label="Gửi lời chúc"
                      enterKeyHint="send"
                      className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-xs text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink)]/40 sm:px-3"
                    />
                    <button
                      type="submit"
                      disabled={!text.trim()}
                      aria-label="Gửi lời chúc"
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--color-pink-deep)] text-sm text-white shadow-sm transition-opacity disabled:opacity-40 active:scale-95"
                    >
                      ➤
                    </button>
                  </form>

                  <div className="flex flex-none items-center gap-1">
                    <a
                      href="#rsvp"
                      aria-label="Đi tới xác nhận tham dự"
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--color-cream-deep)] text-base shadow-sm active:scale-95"
                    >
                      🎊
                    </a>

                    <button
                      type="button"
                      onClick={handleThrowHeart}
                      aria-label="Bắn tim"
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--color-pink)]/90 text-base text-white shadow-sm active:scale-95"
                    >
                      🎉
                    </button>

                    <a
                      href="#gift"
                      aria-label="Đi tới hộp quà mừng"
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--color-maroon)]/90 text-base text-white shadow-sm active:scale-95"
                    >
                      🎁
                    </a>

                    <button
                      type="button"
                      onClick={handleLike}
                      aria-label="Thích thiệp"
                      className="relative flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--color-pink-deep)] text-base leading-none text-white shadow-sm active:scale-95"
                    >
                      {LIKE_ICONS[likeIconIdx]}
                      <span className="absolute -right-1 -top-1 rounded-full bg-[var(--color-maroon-deep)] px-1 text-[9px] font-semibold leading-4">
                        {likeCount}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Khi ẩn: chỉ giữ lại avatar/nút mở lời chúc, không render input hay icon hành động. */
            <div className="flex w-full justify-end">
              <button
                type="button"
                onClick={() => setBubblesOpen(true)}
                aria-label="Mở khung lời chúc"
                aria-expanded="false"
                className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-lg active:scale-95"
              >
                {avatarSrc ? (
                  <img
                    src={avatarSrc}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#efe2d3] to-[#e7d3c9] text-lg">
                    💌
                  </span>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Icon bay lên khi bắn tim / gửi lời chúc */}
        <div className="pointer-events-none absolute inset-x-0 bottom-14 flex justify-center">
          {floatingIcons.map((item) => (
            <span
              key={item.id}
              className="animate-float-heart absolute bottom-0 text-2xl leading-none"
              style={{ left: `${item.left}%` }}
            >
              {item.icon}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
