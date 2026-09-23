"use client";

import { useEffect, useRef } from "react";

/** Fades content up when it scrolls into view. */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
