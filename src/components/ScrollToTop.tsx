"use client";

import { useLayoutEffect } from "react";

export default function ScrollToTop() {
  useLayoutEffect(() => {
    // Prevent the browser from restoring an old scroll position before
    // IntersectionObserver can detect the initial sections and animate them.
    const historyApi = window.history;
    const previousRestoration = historyApi.scrollRestoration;
    historyApi.scrollRestoration = "manual";

    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();

    // Mobile browsers can restore the scroll position after the first paint.
    const frame1 = window.requestAnimationFrame(resetScroll);
    const frame2 = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resetScroll);
    });
    window.addEventListener("pageshow", resetScroll);

    return () => {
      window.cancelAnimationFrame(frame1);
      window.cancelAnimationFrame(frame2);
      window.removeEventListener("pageshow", resetScroll);
      historyApi.scrollRestoration = previousRestoration;
    };
  }, []);

  return null;
}
