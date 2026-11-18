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

type Art = { label: string; viewBox: string; body: ReactElement; compact?: { viewBox: string; body: ReactElement } };

const art: Record<string, Art> = {
  // R·01 — IKM: upload → security scan → queue workers → chunk/embed → per-repository shards → cited results
  ikm: {
    label: "IKM pipeline: a document is uploaded, security-scanned, parsed by queue workers, chunked and embedded into per-repository index shards, then found by hybrid search with reranking and returned with a citation.",
    viewBox: "0 0 760 220",
    body: (
      <>
        <rect x="36" y="70" width="56" height="72" rx="5" className="f-card s-mid" />
        <rect x="44" y="62" width="56" height="72" rx="5" className="f-card s-mid" />
        <rect x="52" y="54" width="56" height="72" rx="5" className="f-card s-ink" />
        {[66, 76, 86, 96].map((y, i) => (
          <rect key={y} x="60" y={y} width={[40, 34, 40, 28][i]} height="4" rx="2" className="f-faint" />
        ))}
        <path d="M114 100 H150" className="s-mid" strokeWidth={1.4} />
        <path d="M145 95 L151 100 L145 105" fill="none" className="s-mid" strokeWidth={1.4} />
        <path d="M190 52 L222 64 V104 C222 126 207 140 190 148 C173 140 158 126 158 104 V64 Z" className="f-card s-ink" />
        <path d="M177 99 l9 9 l17 -19" fill="none" className="s-hi" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M228 100 H278" className="s-mid" strokeWidth={1.4} />
        <path d="M273 95 L279 100 L273 105" fill="none" className="s-mid" strokeWidth={1.4} />
        {[["PARSE", 58], ["OCR", 88], ["TABLES", 118]].map(([t, y]) => (
          <g key={t as string}>
            <rect x="284" y={y as number} width="56" height="22" rx="4" className="f-card s-ink" />
            <text x="312" y={(y as number) + 14} textAnchor="middle" fontSize="8" {...mono}>{t}</text>
          </g>
        ))}
        <path d="M346 100 H394" className="s-mid" strokeWidth={1.4} />
        <path d="M389 95 L395 100 L389 105" fill="none" className="s-mid" strokeWidth={1.4} />
        {[0, 1, 2, 3].flatMap((r) =>
          [0, 1, 2, 3].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={400 + c * 16}
              y={66 + r * 16}
              width="11"
              height="11"
              rx="2"
              className={(r === 1 && c === 2) || (r === 2 && c === 0) || (r === 3 && c === 3) ? "f-hi" : "f-mid"}
            />
          ))
        )}
        <path d="M470 100 H498" className="s-mid" strokeWidth={1.4} />
        <path d="M493 95 L499 100 L493 105" fill="none" className="s-mid" strokeWidth={1.4} />
        {[522, 560, 598].map((cx, i) => (
          <g key={cx}>
            <rect x={cx - 16} y="70" width="32" height="60" rx="5" className={i === 1 ? "f-hi" : "f-card s-ink"} />
            <ellipse cx={cx} cy="70" rx="16" ry="6" className={i === 1 ? "f-hi s-onhi" : "f-card s-ink"} />
          </g>
        ))}
        <text x="625" y="40" textAnchor="middle" fontSize="10" {...mono}>HYBRID SEARCH · ONNX RERANK</text>
        <path d="M620 100 H644" className="s-hi" strokeWidth={1.6} />
        <path d="M639 95 L645 100 L639 105" fill="none" className="s-hi" strokeWidth={1.6} />
        <rect x="650" y="54" width="84" height="92" rx="6" className="f-card s-ink" />
        {[68, 78, 88, 98, 108].map((y, i) => (
          <rect key={y} x="662" y={y} width={[60, 52, 60, 44, 56][i]} height="4" rx="2" className="f-faint" />
        ))}
        <rect x="662" y="122" width="40" height="14" rx="7" className="f-hi" />
        <text x="682" y="132" textAnchor="middle" fontSize="8" className="art-t art-t--onhi">p.12</text>
        {[["UPLOAD", 72], ["SECURITY SCAN", 190], ["QUEUE WORKERS", 312], ["CHUNK · EMBED", 430], ["TENANT SHARDS", 560], ["CITED RESULT", 692]].map(([t, x]) => (
          <text key={t as string} x={x as number} y="182" textAnchor="middle" fontSize="10" {...mono}>{t}</text>
        ))}
      </>
    ),
    // Phone-width version: the same pipeline in two rows.
    compact: {
      viewBox: "0 0 320 180",
      body: (
        <>
          <rect x="16" y="24" width="34" height="44" rx="4" className="f-card s-mid" />
          <rect x="22" y="20" width="34" height="44" rx="4" className="f-card s-mid" />
          <rect x="28" y="16" width="34" height="44" rx="4" className="f-card s-ink" />
          {[26, 33, 40].map((y, i) => (
            <rect key={y} x="34" y={y} width={[22, 18, 22][i]} height="3" rx="1.5" className="f-faint" />
          ))}
          <text x="40" y="80" textAnchor="middle" fontSize="8" {...mono}>UPLOAD</text>
          <path d="M70 40 H102" className="s-mid" strokeWidth={1.3} />
          <path d="M97 36 L102 40 L97 44" fill="none" className="s-mid" strokeWidth={1.3} />
          <path d="M130 16 L150 24 V46 C150 58 141 66 130 70 C119 66 110 58 110 46 V24 Z" className="f-card s-ink" />
          <path d="M121 43 l6 6 l11 -12" fill="none" className="s-hi" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
          <text x="130" y="80" textAnchor="middle" fontSize="8" {...mono}>SCAN</text>
          <path d="M160 40 H192" className="s-mid" strokeWidth={1.3} />
          <path d="M187 36 L192 40 L187 44" fill="none" className="s-mid" strokeWidth={1.3} />
          {[["PARSE", 16], ["OCR", 34], ["TABLES", 52]].map(([t, y]) => (
            <g key={t as string}>
              <rect x="200" y={y as number} width="56" height="14" rx="3" className="f-card s-ink" />
              <text x="228" y={(y as number) + 10} textAnchor="middle" fontSize="7" {...mono}>{t}</text>
            </g>
          ))}
          <text x="228" y="80" textAnchor="middle" fontSize="8" {...mono}>WORKERS</text>
          <path d="M228 86 V94 H42 V102" fill="none" className="s-mid" strokeWidth={1.3} />
          <path d="M38 97 L42 102 L46 97" fill="none" className="s-mid" strokeWidth={1.3} />
          {[0, 1, 2].flatMap((r) =>
            [0, 1, 2].map((c) => (
              <rect key={`${r}-${c}`} x={20 + c * 16} y={108 + r * 16} width="12" height="12" rx="2"
                className={(r === 1 && c === 1) || (r === 0 && c === 2) ? "f-hi" : "f-mid"} />
            ))
          )}
          <text x="42" y="172" textAnchor="middle" fontSize="8" {...mono}>CHUNKS</text>
          <path d="M74 130 H104" className="s-mid" strokeWidth={1.3} />
          <path d="M99 126 L104 130 L99 134" fill="none" className="s-mid" strokeWidth={1.3} />
          {[124, 152, 180].map((cx, i) => (
            <g key={cx}>
              <rect x={cx - 11} y="112" width="22" height="38" rx="4" className={i === 1 ? "f-hi" : "f-card s-ink"} />
              <ellipse cx={cx} cy="112" rx="11" ry="4" className={i === 1 ? "f-hi s-onhi" : "f-card s-ink"} />
            </g>
          ))}
          <text x="152" y="172" textAnchor="middle" fontSize="8" {...mono}>SHARDS</text>
          <text x="215" y="122" textAnchor="middle" fontSize="7" {...mono}>ONNX</text>
          <path d="M198 130 H232" className="s-hi" strokeWidth={1.4} />
          <path d="M227 126 L232 130 L227 134" fill="none" className="s-hi" strokeWidth={1.4} />
          <rect x="238" y="106" width="66" height="52" rx="5" className="f-card s-ink" />
          {[116, 123, 130].map((y, i) => (
            <rect key={y} x="246" y={y} width={[48, 40, 46][i]} height="3" rx="1.5" className="f-faint" />
          ))}
          <rect x="246" y="138" width="30" height="12" rx="6" className="f-hi" />
          <text x="261" y="147" textAnchor="middle" fontSize="7" className="art-t art-t--onhi">p.12</text>
          <text x="271" y="172" textAnchor="middle" fontSize="8" {...mono}>CITED</text>
        </>
      ),
    },
  },

  // R·04 — MLR: claims traced through quote verification to approved sources
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
    // Phone-width version: same story, narrower canvas, labels stay readable.
    compact: {
      viewBox: "0 0 320 200",
      body: (
        <>
          <rect x="10" y="14" width="112" height="160" rx="6" className="f-card s-faint" />
          <rect x="22" y="28" width="56" height="6" rx="2" className="f-mid" />
          {[46, 76, 92, 122, 152].map((y) => (
            <rect key={y} x="22" y={y} width="86" height="5" rx="2" className="f-faint" />
          ))}
          <rect x="22" y="60" width="80" height="7" rx="2" className="f-hi" />
          <rect x="22" y="106" width="70" height="7" rx="2" className="f-hi" />
          <rect x="22" y="136" width="64" height="7" rx="2" fill="none" className="s-mid" strokeDasharray="3 3" />
          <text x="10" y="192" fontSize="10" {...mono}>CLAIMS</text>
          <rect x="142" y="14" width="40" height="160" rx="8" fill="none" className="s-faint" />
          <text x="162" y="192" textAnchor="middle" fontSize="10" {...mono}>VERIFY</text>
          <path d="M102 63 C 125 63 135 38 162 38 L 208 38" fill="none" className="s-hi" strokeWidth={1.5} />
          <path d="M92 110 C 125 110 135 100 162 100 L 208 100" fill="none" className="s-hi" strokeWidth={1.5} />
          <path d="M86 140 C 120 140 135 162 162 162 L 208 162" fill="none" className="s-mid" strokeWidth={1.5} strokeDasharray="4 4" />
          <circle cx="162" cy="38" r="4.5" className="f-hi" />
          <circle cx="162" cy="100" r="4.5" className="f-hi" />
          <circle cx="162" cy="162" r="4.5" fill="none" className="s-mid" />
          {[16, 78].map((y) => (
            <g key={y}>
              <rect x="208" y={y} width="102" height="44" rx="7" className="f-card s-faint" />
              <circle cx="226" cy={y + 22} r="9" className="f-hi" />
              <Check x={226} y={y + 22} />
              <rect x="242" y={y + 14} width="52" height="5" rx="2" className="f-faint" />
              <text x="242" y={y + 32} fontSize="9" {...mono}>SOURCE</text>
            </g>
          ))}
          <rect x="208" y="140" width="102" height="44" rx="7" fill="none" className="s-mid" strokeDasharray="4 4" />
          <circle cx="226" cy="162" r="9" fill="none" className="s-mid" />
          <path d="M222.5 158.5 l7 7 M229.5 158.5 l-7 7" fill="none" className="s-mid" strokeWidth={1.5} strokeLinecap="round" />
          <text x="242" y="165" fontSize="9" {...mono}>FLAGGED</text>
        </>
      ),
    },
  },

  // R·05 — Sciagen CMS: e-signature gate on a workflow transition, over a hash-chained audit trail
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

  // R·02 — six narrowing intent layers into the side-panel agent; the fine-tuned model layer is highlighted
  crm: {
    label: "A browser with a side panel; requests pass through six narrowing intent layers, one of them a fine-tuned ModernBERT classifier, into the assistant.",
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
        {[0, 1, 2, 3, 4, 5].map((i) =>
          i === 3 ? (
            <rect key={i} x={30 + i * 12} y={40 + i * 13} width={156 - i * 24} height="8" rx="4" className="f-hi" />
          ) : (
            <rect key={i} x={30 + i * 12} y={40 + i * 13} width={156 - i * 24} height="8" rx="4" className="f-mid" opacity={0.45 + i * 0.1} />
          )
        )}
        <text x="30" y="128" fontSize="8" {...mono}>6 LAYERS · FINE-TUNED MODERNBERT</text>
        <path d="M128 109 C 168 109 180 71 222 71" fill="none" className="s-ink" strokeWidth={1.4} strokeDasharray="3 3" />
      </>
    ),
  },

  // R·03 — GxP Docs AI: multi-hop evidence across linked records, then a cited verdict
  gxp: {
    label: "Multi-hop evidence retrieval: the chat follows references from a batch record to an SOP version to a training record, then gives a cited verdict.",
    viewBox: "0 0 320 150",
    body: (
      <>
        <path d="M54 34 C 54 18, 266 18, 266 34" fill="none" className="s-mid" strokeWidth={1.2} strokeDasharray="3 3" />
        <text x="160" y="12" textAnchor="middle" fontSize="8" {...mono}>FOLLOW-UP SEARCH</text>
        {[["BATCH REC.", 14], ["SOP v3", 120], ["TRAINING", 226]].map(([t, x]) => (
          <g key={t as string}>
            <rect x={x as number} y="36" width="80" height="60" rx="6" className="f-card s-ink" />
            <text x={(x as number) + 8} y="50" fontSize="8" {...mono}>{t}</text>
            {[58, 66, 74].map((y, i) => (
              <rect key={y} x={(x as number) + 8} y={y} width={[56, 48, 52][i]} height="4" rx="2" className="f-faint" />
            ))}
          </g>
        ))}
        <path d="M94 66 H118" className="s-hi" strokeWidth={1.6} />
        <path d="M113 62 L118 66 L113 70" fill="none" className="s-hi" strokeWidth={1.6} />
        <path d="M200 66 H224" className="s-hi" strokeWidth={1.6} />
        <path d="M219 62 L224 66 L219 70" fill="none" className="s-hi" strokeWidth={1.6} />
        <text x="107" y="110" textAnchor="middle" fontSize="7" {...mono}>HOP 1</text>
        <text x="213" y="110" textAnchor="middle" fontSize="7" {...mono}>HOP 2</text>
        <path d="M266 96 V112" className="s-hi" strokeWidth={1.4} />
        <rect x="200" y="112" width="106" height="20" rx="10" className="f-hi" />
        <text x="253" y="125" textAnchor="middle" fontSize="8" className="art-t art-t--onhi">CITED VERDICT</text>
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
  const svg = (viewBox: string, body: ReactElement, variant?: string, hidden?: boolean) => (
    <svg
      className={[className, variant].filter(Boolean).join(" ") || undefined}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      role={hidden ? undefined : "img"}
      aria-label={hidden ? undefined : a.label}
      aria-hidden={hidden || undefined}
      focusable="false"
    >
      {body}
    </svg>
  );
  if (!a.compact) return svg(a.viewBox, a.body);
  // Both variants render; CSS shows one per screen width (display:none also removes the
  // other from the accessibility tree, so the diagram is announced once).
  return (
    <>
      {svg(a.viewBox, a.body, "art-wide")}
      {svg(a.compact.viewBox, a.compact.body, "art-compact")}
    </>
  );
}
