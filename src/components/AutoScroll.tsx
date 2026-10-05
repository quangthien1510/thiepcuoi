"use client";

import { useEffect } from "react";

const IDLE_DELAY_MS = 5000;
const SCROLL_SPEED_PX_PER_SECOND = 24;

export default function AutoScroll() {
  useEffect(() => {
    let idleTimer: number | undefined;
    let animationFrame: number | undefined;
    let previousFrameTime: number | undefined;
    let previousScrollBehavior: string | undefined;

    const hasOpenDialog = () =>
      document.querySelector('[role="dialog"][aria-modal="true"]') !== null;

    const stopScrolling = () => {
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = undefined;
        if (previousScrollBehavior !== undefined) {
          document.documentElement.style.scrollBehavior = previousScrollBehavior;
          previousScrollBehavior = undefined;
        }
      }
      previousFrameTime = undefined;
    };

    const scrollFrame = (time: number) => {
      if (hasOpenDialog()) {
        stopScrolling();
        return;
      }

      if (previousFrameTime === undefined) previousFrameTime = time;
      const elapsed = Math.min(time - previousFrameTime, 100);
      previousFrameTime = time;

      const maxScrollTop = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const nextScrollTop = Math.min(
        window.scrollY + (elapsed * SCROLL_SPEED_PX_PER_SECOND) / 1000,
        maxScrollTop
      );

      document.documentElement.scrollTop = nextScrollTop;

      if (nextScrollTop >= maxScrollTop) {
        stopScrolling();
        return;
      }

      animationFrame = window.requestAnimationFrame(scrollFrame);
    };

    const resumeScrolling = () => {
      idleTimer = undefined;
      if (hasOpenDialog()) return;
      if (document.documentElement.scrollHeight <= window.innerHeight) return;

      previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      previousFrameTime = undefined;
      animationFrame = window.requestAnimationFrame(scrollFrame);
    };

    const pauseAndWait = () => {
      stopScrolling();
      if (idleTimer !== undefined) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(resumeScrolling, IDLE_DELAY_MS);
    };

    const listenerOptions = { capture: true, passive: true };
    window.addEventListener("pointerdown", pauseAndWait, listenerOptions);
    window.addEventListener("touchstart", pauseAndWait, listenerOptions);
    window.addEventListener("touchmove", pauseAndWait, listenerOptions);
    window.addEventListener("wheel", pauseAndWait, listenerOptions);
    window.addEventListener("keydown", pauseAndWait, true);

    pauseAndWait();

    return () => {
      stopScrolling();
      if (idleTimer !== undefined) window.clearTimeout(idleTimer);
      window.removeEventListener("pointerdown", pauseAndWait, true);
      window.removeEventListener("touchstart", pauseAndWait, true);
      window.removeEventListener("touchmove", pauseAndWait, true);
      window.removeEventListener("wheel", pauseAndWait, true);
      window.removeEventListener("keydown", pauseAndWait, true);
    };
  }, []);

  return null;
}
