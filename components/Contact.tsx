import { links } from "@/data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  const rows = [
    { label: "Email", value: links.email, href: `mailto:${links.email}`, external: false },
    { label: "LinkedIn", value: "in/ajay-jeevan-j", href: links.linkedin, external: true },
    { label: "GitHub", value: "github.com/jeev-jo", href: links.github, external: true },
    { label: "Résumé", value: "Download PDF", href: links.resume, external: false, download: true },
  ];
  return (
    <footer id="contact" className="contact">
      <div className="container contact__inner">
        <Reveal className="contact__head">
          <span className="mono eyebrow eyebrow--dim">(04) — Next chapter</span>
          <h2 className="serif contact__title">
            Let&apos;s build AI that <em>passes the audit.</em>
          </h2>
        </Reveal>

        <div className="contact__rows">
          {rows.map((r) => (
            <a
              key={r.label}
              className="row-link"
              href={r.href}
              {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              {...(r.download ? { download: true } : {})}
            >
              <span className="mono row-link__label">{r.label}</span>
              <span className="serif row-link__value">{r.value}</span>
              <span className="row-link__arrow" aria-hidden="true">{r.download ? "↓" : "↗"}</span>
            </a>
          ))}
        </div>

        <div className="colophon">
          <span className="serif colophon__mark">AJJ<span className="accent">.</span></span>
          <div className="mono colophon__text">
            <span>© {new Date().getFullYear()} Ajay Jeevan Jose</span>
            <span>Set in Fraunces &amp; Geist · Kerala &amp; Chennai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
