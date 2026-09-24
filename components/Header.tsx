import { links } from "@/data/profile";
import { DownloadIcon } from "./Icons";

export default function Header() {
  return (
    <header className="masthead">
      <nav className="masthead__inner container" aria-label="Main">
        <a href="#top" className="brand">
          <span className="brand__badge serif">aj</span>
          <span className="brand__text">
            <span className="serif brand__name">Ajay Jeevan Jose</span>
            <span className="brand__role">AI Engineer · Chennai</span>
          </span>
        </a>

        <div className="navpills">
          <a className="navpill" href="#journey">Work</a>
          <a className="navpill" href="#education">Education</a>
          <a className="navpill" href="#stack">Toolkit</a>
          <a className="navpill" href="#contact">Contact</a>
        </div>

        <div className="masthead__links">
          <a className="hlink" href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <span className="hl-arrow">↗</span>
          </a>
          <a className="hlink" href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub <span className="hl-arrow">↗</span>
          </a>
          <a className="hlink" href={`mailto:${links.email}`}>
            Email <span className="hl-arrow">↗</span>
          </a>
          <a className="btn btn-ink" href={links.resume} download>
            <DownloadIcon /> Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
