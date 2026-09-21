"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "left" | "right" | "up" | "zoom";

type Props = {
  children: ReactNode;
  direction?: Direction;
  /** delay tính bằng mili-giây, để so le nhiều phần tử cạnh nhau */
  delayMs?: number;
  className?: string;
  /** khoảng cách trượt vào, đơn vị px */
  distance?: number;
};

const HIDDEN_TRANSFORM: Record<Direction, (distance: number) => string> = {
  left: (d) => `translateX(-${d}px)`,
  right: (d) => `translateX(${d}px)`,
  up: (d) => `translateY(${d}px)`,
  zoom: () => `scale(0.92)`,
};

export default function RevealOnScroll({
  children,
  direction = "up",
  delayMs = 0,
  className = "",
  distance = 56,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : HIDDEN_TRANSFORM[direction](distance),
        transition: `opacity 2.8s cubic-bezier(0.16,0.9,0.3,1) ${delayMs}ms, transform 2.8s cubic-bezier(0.16,0.9,0.3,1) ${delayMs}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
