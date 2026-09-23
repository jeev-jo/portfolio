"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { allProjects, education, qualitest, rudhra, type Role } from "@/data/profile";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import ProjectDrawer from "./ProjectDrawer";

function ChapterHead({ n, eyebrow, meta, score, title, text, current }: {
  n: string; eyebrow: string; meta: string; score: string; title: string; text: string; current?: boolean;
}) {
  return (
    <Reveal className="chapter__head">
      <div className={`serif outline chapter__num${current ? " chapter__num--current" : ""}`}>{n}</div>
      <div className="chapter__meta">
        <span className="mono chapter__eyebrow">{eyebrow}</span>
        <span className="muted small">{meta}</span>
        <span className="mono muted xsmall">{score}</span>
      </div>
      <div className="chapter__main">
        <h3 className="serif chapter__title">{title}</h3>
        <p className="chapter__text">{text}</p>
      </div>
    </Reveal>
  );
}

function WorkChapter({ n, role, onOpen, current, id }: {
  n: string; role: Role; onOpen: (id: string) => void; current?: boolean; id?: string;
}) {
  return (
    <div id={id} className="chapter chapter--work">
      <ChapterHead
        n={n}
        eyebrow={role.eyebrow}
        meta={`${role.role} · ${role.place}`}
        score={role.period}
        title={role.company}
        text={role.blurb}
        current={current}
      />
      <div className="projects">
        {role.projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

export default function Journey() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [closing, setClosing] = useState(false);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const open = useCallback((id: string) => {
    lastTrigger.current = document.activeElement as HTMLElement | null;
    setClosing(false);
    setOpenId(id);
  }, []);

  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setOpenId(null);
      setClosing(false);
      lastTrigger.current?.focus({ preventScroll: true });
    }, 280);
  }, []);

  const next = useCallback(() => {
    setOpenId((cur) => {
      const i = allProjects.findIndex((p) => p.id === cur);
      return allProjects[(i + 1) % allProjects.length].id;
    });
  }, []);

  // Deep links: /#project-mlr opens that project directly.
  useEffect(() => {
    const m = window.location.hash.match(/^#project-(.+)$/);
    if (m && allProjects.some((p) => p.id === m[1])) setOpenId(m[1]);
  }, []);

  const selected = allProjects.find((p) => p.id === openId);

  return (
    <section id="journey" className="journey container">
      <Reveal className="section-head">
        <span className="mono eyebrow">(02) — The journey</span>
        <h2 className="serif section-title">The long way <em>to</em> AI.</h2>
        <p className="muted section-note">
          Newest first: the work I&apos;m doing now, then back to physics. Open any project for its architecture and stack.
        </p>
      </Reveal>

      {/* Newest first: current role at the top, then rewind to where it started. */}
      <WorkChapter id="work" n="04" role={rudhra} onOpen={open} current />
      <WorkChapter n="03" role={qualitest} onOpen={open} />

      {[...education].reverse().map((e) => (
        <div key={e.n} className="chapter">
          <ChapterHead n={e.n} eyebrow={e.eyebrow} meta={e.place} score={e.score} title={e.title} text={e.text} />
        </div>
      ))}

      {selected && <ProjectDrawer project={selected} closing={closing} onClose={close} onNext={next} />}
    </section>
  );
}
