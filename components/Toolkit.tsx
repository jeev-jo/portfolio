import { certifications, stack } from "@/data/profile";
import Reveal from "./Reveal";

export default function Toolkit() {
  return (
    <section id="stack" className="toolkit container">
      <Reveal className="section-head section-head--ruled">
        <span className="mono eyebrow">(03) — Toolkit</span>
        <h2 className="serif section-title section-title--wide">What I build <em>with.</em></h2>
      </Reveal>

      <div className="stack">
        {stack.map((g) => (
          <Reveal key={g.name} className={`stack__group tone--${g.tone}`} style={{ ["--cols" as string]: g.cols }}>
            <div className="stack__head">
              <span className="serif stack__name">{g.name}</span>
              <span className="mono xsmall stack__count">{g.items.length} tools</span>
            </div>
            <div className="chips">
              {g.items.map((s) => (
                <span key={s} className="mono chip chip--group">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="certs">
        {certifications.map((c) => (
          <div key={c.title} className="card cert">
            <span className="mono eyebrow eyebrow--accent">Cert · {c.issuer}</span>
            <span className="serif cert__title">{c.title}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
