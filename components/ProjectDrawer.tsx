"use client";

import { useEffect, useRef } from "react";
import { findRole, type Project } from "@/data/profile";
import { CloseIcon } from "./Icons";
import ProjectArt from "./ProjectArt";

const pad = (i: number) => String(i + 1).padStart(2, "0");

export default function ProjectDrawer({
  project: p,
  closing,
  onClose,
  onNext,
}: {
  project: Project;
  closing: boolean;
  onClose: () => void;
  onNext: () => void;
}) {
  const role = findRole(p.id);
  const closeRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLElement>(null);

  // Escape to close, lock page scroll, move focus into the dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  // Scroll back to top when switching projects with "Next".
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
  }, [p.id]);

  return (
    <>
      <div className={`overlay ${closing ? "overlay--out" : "overlay--in"}`} onClick={onClose} aria-hidden="true" />
      <aside
        ref={bodyRef}
        className={`drawer ${closing ? "drawer--out" : "drawer--in"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="drawer__bar">
          <span className="mono drawer__crumb">{role.company} · {role.period}</span>
          <div className="drawer__actions">
            <button type="button" className="iconbtn mono drawer__next" onClick={onNext}>Next →</button>
            <button type="button" ref={closeRef} className="iconbtn drawer__close" onClick={onClose} aria-label="Close project details">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div key={p.id} className="drawer__body">
          <div className="drawer__head">
            <div className="drawer__codeRow">
              <span className="serif outline drawer__code">{p.code}</span>
              <span className="mono drawer__kind">{p.kind}</span>
            </div>
            <h3 id="drawer-title" className="serif drawer__title">{p.title}</h3>
            <p className="drawer__summary">{p.summary}</p>
            <span className="mono drawer__role">{role.role}</span>
          </div>

          <div className="drawer__art">
            <ProjectArt id={p.id} />
          </div>

          <div className="drawer__metric">
            <div className="drawer__metric-num">
              <span className="mono">Key figure</span>
              <span className="serif">{p.metric}</span>
            </div>
            <div className="drawer__metric-label">
              <span className="serif">{p.metricLabel}</span>
            </div>
          </div>

          <div className="drawer__flow">
            <span className="mono drawer__label drawer__label--inv">How it flows</span>
            <ol className="flow">
              {p.flow.map((f, i) => (
                <li key={f} className="flow__step" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                  <span className="mono flow__n">{pad(i)}</span>
                  <span>{f}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <span className="mono drawer__label">What I built</span>
            {p.highlightGroups ? (
              p.highlightGroups.map((g, gi) => {
                const offset = p.highlightGroups!.slice(0, gi).reduce((n, x) => n + x.items.length, 0);
                return (
                  <div key={g.title} className="highlights__group">
                    <h4 className="serif highlights__title">{g.title}</h4>
                    <ul className="highlights">
                      {g.items.map((h, i) => (
                        <li key={i}>
                          <span className="mono highlights__n">{pad(offset + i)}</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })
            ) : (
              <ul className="highlights">
                {p.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="mono highlights__n">{pad(i)}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <span className="mono drawer__label">Stack</span>
            <div className="chips">
              {p.tech.map((t) => (
                <span key={t} className="mono chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
