// Schematic diagram for each project tile. Colours come from --art-* variables
// set per tile tone in globals.css, so one drawing works on light, dark and blue.
// Diagrams, not screenshots: no client UI or data ever appears on the site.

import type { ReactElement } from "react";

const mono = { className: "art-t" } as const;

function Check({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M${x - 5} ${y} l3.5 3.5 l6.5 -7`}
      className="s-onhi"
      fill="none"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

const art: Record<string, { label: string; viewBox: string; body: ReactElement }> = {
  // R·01 — claims traced through quote verification to approved sources
  mlr: {
    label: "Claims in a promotional piece are traced through a verification step to approved sources; a claim with no match is flagged.",
    viewBox: "0 0 760 220",
    body: (
      <>
        <rect x="24" y="18" width="190" height="184" rx="8" className="f-card s-faint" />
        <rect x="44" y="36" width="92" height="8" rx="2" className="f-mid" />
        {[60, 96, 110, 144, 178].map((y, i) => (
          <rect key={y} x="44" y={y} width={[150, 146, 128, 150, 138][i]} height="6" rx="2" className="f-faint" />
        ))}
        <rect x="44" y="78" width="140" height="8" rx="2" className="f-hi" />
        <rect x="44" y="126" width="120" height="8" rx="2" className="f-hi" />
        <rect x="44" y="160" width="110" height="8" rx="2" fill="none" className="s-mid" strokeDasharray="3 3" />
        <text x="24" y="214" fontSize="10" {...mono}>PROMO PIECE · CLAIMS</text>
        <rect x="330" y="18" width="100" height="184" rx="12" fill="none" className="s-faint" />
        <text x="380" y="38" textAnchor="middle" fontSize="10" {...mono}>VERIFY QUOTE</text>
        <path d="M188 82 C 260 82 270 50 330 50 L 430 50 C 480 50 490 45 540 45" fill="none" className="s-hi" strokeWidth={1.5} />
        <path d="M168 130 C 250 130 270 112 330 112 L 430 112 C 480 112 490 109 540 109" fill="none" className="s-hi" strokeWidth={1.5} />
        <path d="M158 164 C 250 164 270 176 330 176 L 430 176 C 480 176 490 173 540 173" fill="none" className="s-mid" strokeWidth={1.5} strokeDasharray="4 4" />
        <circle cx="380" cy="50" r="5" className="f-hi" />
        <circle cx="380" cy="112" r="5" className="f-hi" />
        <circle cx="380" cy="176" r="5" fill="none" className="s-mid" />
        {[20, 84].map((y) => (
          <g key={y}>
            <rect x="540" y={y} width="196" height="50" rx="8" className="f-card s-faint" />
            <rect x="584" y={y + 14} width="112" height="6" rx="2" className="f-faint" />
            <text x="584" y={y + 38} fontSize="10" {...mono}>APPROVED SOURCE</text>
            <circle cx="562" cy={y + 25} r="11" className="f-hi" />
            <Check x={562} y={y + 25} />
          </g>
        ))}
        <rect x="540" y="148" width="196" height="50" rx="8" fill="none" className="s-mid" strokeDasharray="4 4" />
        <text x="584" y="177" fontSize="10" {...mono}>NO MATCH · FLAGGED</text>
        <circle cx="562" cy="173" r="11" fill="none" className="s-mid" />
        <path d="M558 169 l8 8 M566 169 l-8 8" fill="none" className="s-mid" strokeWidth={1.6} strokeLinecap="round" />
      </>
    ),
  },

  // R·02 — e-signature gate on a workflow transition, over a hash-chained audit trail
  cms: {
    label: "A document moves from draft to MLR review to approved; the approval transition requires an e-signature, and every action lands in a hash-chained audit trail.",
    viewBox: "0 0 320 150",
    body: (
      <>
        <rect x="14" y="18" width="76" height="26" rx="13" className="f-card s-mid" />
        <text x="52" y="35" textAnchor="middle" fontSize="9" {...mono}>DRAFT</text>
        <path d="M90 31 H116" className="s-ink" strokeWidth={1.4} />
        <rect x="116" y="18" width="92" height="26" rx="13" className="f-card s-ink" />
        <text x="162" y="35" textAnchor="middle" fontSize="9" {...mono}>MLR REVIEW</text>
        <path d="M208 31 H240" className="s-ink" strokeWidth={1.4} />
        <rect x="240" y="18" width="68" height="26" rx="13" className="f-ink" />
        <text x="274" y="35" textAnchor="middle" fontSize="9" className="art-t art-t--inv">APPROVED</text>
        <circle cx="224" cy="31" r="11" className="f-hi" />
        <path d="M218 33 c2 -5 4 3 6 -1 s4 3 6 -1" fill="none" className="s-onhi" strokeWidth={1.4} strokeLinecap="round" />
        <path d="M224 42 V58" className="s-hi" strokeWidth={1.2} strokeDasharray="2 2" />
        <text x="224" y="70" textAnchor="middle" fontSize="8" {...mono}>SIGNATURE REQUIRED BY TRANSITION</text>
        <path d="M54 113 H272" className="s-mid" strokeWidth={1.2} />
        {[20, 78, 136, 194].map((x, i) => (
          <g key={x}>
            <rect x={x} y="100" width="34" height="26" rx="4" className="f-card s-ink" />
            <text x={x + 6} y="117" fontSize="8" {...mono}>{["#a1", "#7c", "#e9", "#3f"][i]}</text>
          </g>
        ))}
        <rect x="252" y="100" width="34" height="26" rx="4" className="f-hi" />
        <Check x={268} y={113} />
        <text x="20" y="142" fontSize="8" {...mono}>AUDIT TRAIL · SERIALIZED HASH CHAIN</text>
      </>
    ),
  },

  // R·03 — six narrowing routing layers into the side-panel assistant
  crm: {
    label: "A browser with a side panel; requests pass through six narrowing routing layers into the assistant.",
    viewBox: "0 0 320 150",
    body: (
      <>
        <rect x="16" y="14" width="288" height="122" rx="8" fill="none" className="s-mid" />
        <path d="M16 32 H304" className="s-faint" />
        {[28, 39, 50].map((cx) => <circle key={cx} cx={cx} cy="23" r="3" className="f-mid" />)}
        <rect x="206" y="32" width="98" height="104" className="f-card" />
        <rect x="216" y="44" width="62" height="14" rx="7" className="f-faint" />
        <rect x="232" y="64" width="62" height="14" rx="7" className="f-ink" />
        <rect x="216" y="84" width="50" height="14" rx="7" className="f-faint" />
        <rect x="232" y="104" width="46" height="14" rx="7" className="f-ink" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={30 + i * 12} y={44 + i * 14} width={156 - i * 24} height="8" rx="4" className="f-ink" opacity={0.25 + i * 0.15} />
        ))}
        <path d="M130 118 C 170 118 180 71 222 71" fill="none" className="s-ink" strokeWidth={1.4} strokeDasharray="3 3" />
      </>
    ),
  },

  // R·04 — SOP page with an intact table, clauses mapped into a reference graph
  doc: {
    label: "An SOP page with an intact table; its clauses are linked into a graph of regulatory references.",
    viewBox: "0 0 300 150",
    body: (
      <>
        <rect x="18" y="16" width="112" height="118" rx="6" className="f-card s-ink" />
        <rect x="30" y="28" width="60" height="6" rx="2" className="f-ink" />
        <rect x="30" y="42" width="86" height="4" rx="2" className="f-faint" />
        <rect x="30" y="52" width="78" height="4" rx="2" className="f-faint" />
        <rect x="30" y="66" width="88" height="44" rx="2" fill="none" className="s-mid" />
        <path d="M30 80 H118 M30 95 H118 M59 66 V110 M89 66 V110" className="s-mid" />
        <rect x="30" y="118" width="70" height="4" rx="2" className="f-faint" />
        <path d="M130 56 L 190 36 M130 88 L 196 88 M196 88 L 250 42 M196 88 L 262 112 M190 36 L 250 42 M196 88 L 200 132" className="s-mid" strokeWidth={1.2} />
        <circle cx="190" cy="36" r="8" className="f-card s-ink" />
        <circle cx="196" cy="88" r="11" className="f-hi" />
        <circle cx="250" cy="42" r="7" className="f-card s-ink" />
        <circle cx="262" cy="112" r="8" className="f-card s-ink" />
        <circle cx="200" cy="132" r="5" className="f-ink" />
        <text x="214" y="92" fontSize="9" {...mono}>PART 11</text>
      </>
    ),
  },

  // Q·04 — agents around a shared registry, talking over gRPC
  agp: {
    label: "Six agents connected to a central registry over two-way gRPC links.",
    viewBox: "0 0 320 150",
    body: (
      <>
        <path d="M160 75 L 70 34 M160 75 L 60 96 M160 75 L 116 128 M160 75 L 250 34 M160 75 L 262 98 M160 75 L 206 128" className="s-mid" strokeWidth={1.4} />
        <path d="M160 75 L 70 34 M160 75 L 262 98" className="s-hi" strokeWidth={1.4} strokeDasharray="4 3" />
        <circle cx="160" cy="75" r="22" className="f-hi" />
        <text x="160" y="78" textAnchor="middle" fontSize="8" className="art-t art-t--onhi">REGISTRY</text>
        {[
          [52, 22], [42, 84], [98, 116], [232, 22], [244, 86], [188, 116],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="36" height="24" rx="6" className="f-card s-ink" />
        ))}
        <text x="18" y="16" fontSize="9" {...mono}>gRPC</text>
      </>
    ),
  },

  // Q·03 — evaluation grid with adversarial cases caught
  eval: {
    label: "A grid of evaluation cases; a few adversarial prompts are caught and marked.",
    viewBox: "0 0 320 150",
    body: (
      <>
        {[22, 48, 74].flatMap((y, r) =>
          Array.from({ length: 11 }, (_, c) => {
            const x = 24 + c * 26;
            const caught = [[5, 10], [2, 7], [1, 6]][r].includes(c);
            return caught ? (
              <g key={`${r}-${c}`}>
                <rect x={x} y={y} width="18" height="18" rx="4" fill="none" className="s-hi" strokeWidth={1.6} />
                <path d={`M${x + 5} ${y + 5} l8 8 M${x + 13} ${y + 5} l-8 8`} className="s-hi" strokeWidth={1.6} strokeLinecap="round" />
              </g>
            ) : (
              <rect key={`${r}-${c}`} x={x} y={y} width="18" height="18" rx="4" className="f-ink" opacity={0.78} />
            );
          })
        )}
        <rect x="24" y="112" width="12" height="12" rx="3" className="f-ink" opacity={0.78} />
        <text x="42" y="122" fontSize="9" {...mono}>HELD</text>
        <rect x="92" y="112" width="12" height="12" rx="3" fill="none" className="s-hi" strokeWidth={1.6} />
        <text x="110" y="122" fontSize="9" {...mono}>JAILBREAK CAUGHT</text>
      </>
    ),
  },

  // Q·02 — documents embedded; a query finds its nearest neighbours
  idx: {
    label: "Documents are embedded into vectors; a query finds its nearest neighbours.",
    viewBox: "0 0 320 150",
    body: (
      <>
        <rect x="34" y="34" width="60" height="78" rx="5" className="f-card s-mid" />
        <rect x="27" y="28" width="60" height="78" rx="5" className="f-card s-mid" />
        <rect x="20" y="22" width="60" height="78" rx="5" className="f-card s-ink" />
        <path d="M30 36 H70 M30 46 H66 M30 56 H70 M30 66 H58 M30 76 H68" className="s-faint" strokeWidth={3} strokeLinecap="round" />
        <path d="M108 68 H146" className="s-ink" strokeWidth={1.4} />
        <path d="M140 63 L 147 68 L 140 73" fill="none" className="s-ink" strokeWidth={1.4} />
        <text x="104" y="60" fontSize="9" {...mono}>EMBED</text>
        {[[172, 36], [196, 52], [180, 98], [206, 118], [290, 30], [282, 120], [300, 78], [170, 128]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" className="f-mid" />
        ))}
        <path d="M238 74 L 222 54 M238 74 L 262 58 M238 74 L 256 98" className="s-hi" strokeWidth={1.2} />
        {[[222, 54], [262, 58], [256, 98]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" className="f-ink" />
        ))}
        <circle cx="238" cy="74" r="7" className="f-hi" />
        <text x="222" y="140" fontSize="9" {...mono}>QUERY · TOP-K</text>
      </>
    ),
  },

  // Q·01 — extract → classify → analyse, feeding a chart
  azml: {
    label: "An extract, classify and analyse pipeline feeding a bar chart.",
    viewBox: "0 0 320 150",
    body: (
      <>
        <rect x="18" y="20" width="80" height="36" rx="6" className="f-card s-ink" />
        <rect x="120" y="20" width="80" height="36" rx="6" className="f-card s-ink" />
        <rect x="222" y="20" width="80" height="36" rx="6" className="f-ink" />
        <text x="58" y="42" textAnchor="middle" fontSize="9" {...mono}>EXTRACT</text>
        <text x="160" y="42" textAnchor="middle" fontSize="9" {...mono}>CLASSIFY</text>
        <text x="262" y="42" textAnchor="middle" fontSize="9" className="art-t art-t--inv">ANALYSE</text>
        <path d="M98 38 H118 M200 38 H220" className="s-ink" strokeWidth={1.4} />
        <path d="M18 132 H302" className="s-mid" />
        {[[26, 28], [60, 38], [94, 22], [128, 44], [162, 34], [196, 48], [230, 40]].map(([x, h]) => (
          <rect key={x} x={x} y={132 - h} width="22" height={h} rx="3" className="f-mid" />
        ))}
        <rect x="264" y="74" width="22" height="58" rx="3" className="f-hi" />
      </>
    ),
  },
};

export default function ProjectArt({ id, className }: { id: string; className?: string }) {
  const a = art[id];
  if (!a) return null;
  return (
    <svg
      className={className}
      viewBox={a.viewBox}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={a.label}
      focusable="false"
    >
      {a.body}
    </svg>
  );
}
