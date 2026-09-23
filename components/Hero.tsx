import { links } from "@/data/profile";
import PhotoTile from "./PhotoTile";
import Globe from "./Globe";

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero__meta mono rise">
        <span>AI / ML Engineer</span>
        <span>Agentic systems · RAG · LLM evaluation</span>
        <span>Regulated life sciences</span>
      </div>

      <div className="hero__namewrap">
        <h1 className="hero__name serif">
          <span className="hero__line">
            <span className="clip"><span className="word w1">Ajay</span></span>{" "}
            <span className="clip"><span className="word w2">Jeevan</span></span>
          </span>
          <span className="hero__line hero__line--right">
            <span className="clip"><em className="word w3">Jose<span className="accent">.</span></em></span>
          </span>
        </h1>
        <p className="hero__intro rise d2">
          Three years putting LLMs into production for pharma, where every answer has to cite its source and survive an audit.
        </p>
      </div>

      <div className="bento">
        <PhotoTile />

        <div className="card bento__thesis rise d2">
          <span className="eyebrow mono">(01) — Thesis</span>
          <div className="bento__thesis-body">
            <p className="serif bento__thesis-quote">
              I build AI systems that have to <em className="accent">show their work.</em>
            </p>
            <p className="muted">
              Multi-agent pipelines, hybrid RAG and evaluation for pharma, built for FDA 21 CFR Part 11, GxP and auditors who read the logs.
            </p>
          </div>
        </div>

        <Globe />

        <div className="bento__now rise d4">
          <div className="bento__now-top">
            <span className="live" />
            <span className="mono eyebrow eyebrow--inv">Now</span>
          </div>
          <div>
            <div className="serif bento__now-title">AI Engineer</div>
            <div className="bento__now-sub">Rudhra Info Solutions · since Apr 2026</div>
          </div>
        </div>

        <div className="card bento__stat bento__stat--small rise d5">
          <span className="eyebrow mono">Agents</span>
          <div>
            <div className="serif stat-num">400+</div>
            <div className="muted small">pluggable check agents</div>
          </div>
        </div>

        <div className="card bento__stat bento__stat--row rise d5">
          <div className="bento__stat-label">
            <span className="eyebrow mono">In production</span>
            <span className="muted small">years shipping GenAI</span>
          </div>
          <span className="serif stat-num stat-num--xl">3<em className="accent">+</em></span>
        </div>

        <div className="card bento__stat bento__stat--row rise d6">
          <div className="bento__stat-label">
            <span className="eyebrow mono">Rigor</span>
            <span className="muted small">automated tests, one platform</span>
          </div>
          <span className="serif stat-num stat-num--xl">1k<em className="accent">+</em></span>
        </div>

        <div className="bento__links rise d6">
          <div className="bento__links-text">
            <span className="mono eyebrow eyebrow--dim">Elsewhere</span>
            <span className="serif bento__links-title">Let&apos;s compare notes.</span>
          </div>
          <div className="bento__links-btns">
            <a className="btn btn-outline-inv" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="btn btn-outline-inv" href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="btn btn-paper" href={`mailto:${links.email}`}>Email ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
