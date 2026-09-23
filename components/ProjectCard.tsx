"use client";

import type { Project } from "@/data/profile";
import { useTilt } from "./useTilt";
import ProjectArt from "./ProjectArt";

export default function ProjectCard({ project: p, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  const tilt = useTilt<HTMLButtonElement>(p.cols >= 4 ? 4.5 : 9);
  return (
    <button
      type="button"
      className={`tile tiltable tile--${p.tone}${p.featured ? " tile--feat" : ""}${p.cols >= 4 ? " tile--wide" : ""}${p.rows >= 2 ? " tile--tall" : ""}`}
      style={{ ["--cols" as string]: p.cols, ["--rows" as string]: p.rows }}
      onClick={() => onOpen(p.id)}
      aria-label={`Open project: ${p.title}`}
      aria-haspopup="dialog"
      {...tilt}
    >
      <span className="glare" aria-hidden="true" />
      <span className="tile__top">
        <span className="mono tile__mut tile__code">{p.code}</span>
        <span className="mono tile__pill">{p.kind}</span>
      </span>
      <span className="tile__art" aria-hidden="true">
        <ProjectArt id={p.id} />
      </span>
      <span className="tile__spacer" />
      {p.featured && (
        <span className="tile__flow">
          {p.flow.map((f, i) => (
            <span key={f} className="mono tile__flow-step">
              {String(i + 1).padStart(2, "0")} {f}
            </span>
          ))}
        </span>
      )}
      <span className="serif tile__title">{p.title}</span>
      <span className="tile__mut tile__tagline">{p.tagline}</span>
      <span className="tile__foot">
        <span className="mono tile__mut">{p.metricShort}</span>
        <span className="mono tile__go">Open →</span>
      </span>
    </button>
  );
}
