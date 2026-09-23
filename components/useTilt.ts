"use client";

import { useCallback, useRef } from "react";

/**
 * Subtle 3D tilt + glare that follows the pointer.
 * Writes styles straight to the element (no React re-render per mousemove).
 * Disabled for touch pointers and reduced-motion users.
 */
export function useTilt<T extends HTMLElement>(strength = 9) {
  const ref = useRef<T>(null);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<T>) => {
      const el = ref.current;
      if (!el || e.pointerType !== "mouse") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(1100px) rotateX(${((0.5 - py) * strength).toFixed(2)}deg) rotateY(${((px - 0.5) * strength).toFixed(2)}deg) scale(1.01)`;
      el.style.setProperty("--gx", `${Math.round(px * 100)}%`);
      el.style.setProperty("--gy", `${Math.round(py * 100)}%`);
      el.style.setProperty("--gop", "1");
    },
    [strength]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.setProperty("--gop", "0");
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
