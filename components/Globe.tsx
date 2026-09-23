"use client";

import { useMemo, useRef, useState } from "react";

const N = 64;
const R = 104;

/** A CSS-3D "retrieval graph": a Fibonacci sphere of nodes that turns toward the pointer. */
export default function Globe() {
  const nodes = useMemo(() => {
    const golden = Math.PI * (3 - Math.sqrt(5));
    return Array.from({ length: N }, (_, i) => {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      const accent = i % 6 === 0;
      const s = accent ? 7 : i % 3 === 0 ? 4 : 3;
      return {
        x: +(Math.cos(th) * r * R).toFixed(1),
        y: +(y * R).toFixed(1),
        z: +(Math.sin(th) * r * R).toFixed(1),
        s,
        accent,
      };
    });
  }, []);

  const [rot, setRot] = useState({ rx: -18, ry: 0, active: false });
  const frame = useRef<number | null>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() =>
      setRot({ rx: -(py - 0.5) * 70, ry: (px - 0.5) * 90, active: true })
    );
  }

  return (
    <div
      className="bento__globe rise d3"
      onPointerMove={onMove}
      onPointerLeave={() => setRot({ rx: -18, ry: 0, active: false })}
    >
      <div className="globe__stage" aria-hidden="true">
        <div className="globe__tilt" style={{ transform: `rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)` }}>
          <div className="globe__spin">
            <div className="globe__ring" style={{ transform: "rotateY(0deg)" }} />
            <div className="globe__ring" style={{ transform: "rotateY(60deg)" }} />
            <div className="globe__ring" style={{ transform: "rotateY(120deg)" }} />
            <div className="globe__ring globe__ring--equator" style={{ transform: "rotateX(90deg)" }} />
            {nodes.map((n, i) => (
              <span
                key={i}
                className={`globe__node${n.accent ? " globe__node--accent" : ""}`}
                style={{
                  width: n.s,
                  height: n.s,
                  margin: `${-n.s / 2}px 0 0 ${-n.s / 2}px`,
                  transform: `translate3d(${n.x}px, ${n.y}px, ${n.z}px)`,
                }}
              />
            ))}
          </div>
          <span className="globe__core" />
        </div>
      </div>
      <div className="globe__top">
        <span className="mono">Fig. 01</span>
        <span className="mono">
          {rot.active ? `rx ${Math.round(rot.rx)}° · ry ${Math.round(rot.ry)}°` : `${N} nodes`}
        </span>
      </div>
      <div className="globe__bottom">
        <span className="serif globe__title">The retrieval graph</span>
        <span className="globe__sub">Chunks, entities, citations. Move your cursor to turn it.</span>
      </div>
    </div>
  );
}
