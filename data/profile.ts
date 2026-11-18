// Single source of truth for the site's content. Edit here, not in components.

export const links = {
  email: "ajayjeevanjose17@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajay-jeevan-j-360119109/",
  github: "https://github.com/jeev-jo",
  resume: "/Ajay_Jeevan_Jose_Resume.pdf",
};

// ---------- Experience length ----------
// Counted from the first listed role (Qualitest, Mar 2024) — only experience shown on this site.
// Computed at view time, so the number stays correct without any redeploy or CI job.
export const careerStart = { year: 2024, month: 3 }; // month is 1-12

/** Whole half-years of experience at `now`, e.g. 2.5 (floored, never rounded up). */
export function experienceYears(now: Date = new Date()): number {
  const months = (now.getFullYear() - careerStart.year) * 12 + (now.getMonth() + 1 - careerStart.month);
  return Math.max(0, Math.floor(months / 6) / 2);
}

const WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];

/** 2.5 → "Two and a half", 3 → "Three". */
export function experienceWords(years: number): string {
  const whole = Math.floor(years);
  const w = WORDS[whole] ?? String(whole);
  return years % 1 ? `${w} and a half` : w;
}

export type Tone = "light" | "dark" | "blue";

export type Project = {
  id: string;
  code: string;
  kind: string;
  title: string;
  tagline: string;
  metricShort: string;
  metric: string;
  metricLabel: string;
  summary: string;
  flow: string[];
  highlights: string[];
  /** Optional: grouped "What I built" list; replaces `highlights` in the drawer when set. */
  highlightGroups?: { title: string; items: string[] }[];
  tech: string[];
  tone: Tone;
  cols: number; // span in a 6-column bento
  rows: number;
  featured?: boolean;
};

export type Role = {
  company: string;
  role: string;
  place: string;
  period: string;
  eyebrow: string;
  blurb: string;
  projects: Project[];
};

export const qualitest: Role = {
  company: "Qualitest Group of India",
  role: "Engineer, AI/ML",
  place: "Hyderabad",
  period: "Mar 2024 – Mar 2026",
  eyebrow: "First production AI",
  blurb:
    "Azure ML pipelines, knowledge assistants, and the work that shaped how I think: stress-testing LLMs until they break.",
  projects: [
    {
      id: "agp", code: "Q·04", kind: "Agent platform", title: "Agentic AI Platform",
      tone: "light", cols: 4, rows: 1,
      tagline: "A plug-and-play agent framework with gRPC messaging and a public registry so teams could share and reuse agents.",
      metricShort: "gRPC · agent registry", metric: "gRPC",
      metricLabel: "inter-agent communication with a shared registry",
      summary: "Infrastructure that let teams build agents once, register them, and reuse them across the organisation. I worked on it as part of the platform team.",
      flow: ["Agent built on the framework", "gRPC inter-agent messaging", "Public agent registry", "Reuse across teams"],
      highlights: [
        "Worked as part of the team that built a plug-and-play agent framework with gRPC inter-agent communication.",
        "Contributed to the public agent registry that let teams share and reuse agents.",
      ],
      tech: ["gRPC", "Agent Framework", "Agent Registry", "Python"],
    },
    {
      id: "eval", code: "Q·03", kind: "LLM evaluation", title: "LLM Testing & Evaluation",
      tone: "dark", cols: 2, rows: 2,
      tagline: "Adversarial probing, jailbreak detection and model-graded evals: breaking chatbots on purpose, before users do.",
      metricShort: "Red-team + model-graded", metric: "Evals",
      metricLabel: "adversarial, jailbreak and model-graded quality checks",
      summary: "A framework for breaking chatbots on purpose, before users do, and scoring response quality at scale.",
      flow: ["Adversarial probes", "Jailbreak detection", "Model-graded evaluation", "Quality report"],
      highlights: [
        "Built adversarial probing and jailbreak-detection suites to stress-test chatbot safety.",
        "Designed model-graded evaluations to check response quality.",
      ],
      tech: ["Adversarial Probing", "Jailbreak Detection", "Model-Graded Eval", "Python"],
    },
    {
      id: "idx", code: "Q·02", kind: "RAG · Search", title: "Knowledge Assistants",
      tone: "blue", cols: 2, rows: 1,
      tagline: "Dockerized indexing with vector search and agentic retrieval over company documents.",
      metricShort: "Agentic retrieval", metric: "RAG",
      metricLabel: "vector search and agentic retrieval over company documents",
      summary: "Document-indexing services and the prompts behind internal knowledge assistants over company document sets.",
      flow: ["Document sets", "Containerised indexing", "Vector search", "Agentic retrieval", "Knowledge assistant"],
      highlights: [
        "Built Dockerized document-indexing services with vector search and agentic retrieval.",
        "Tuned the prompts powering internal knowledge assistants.",
      ],
      tech: ["Docker", "Vector Search", "Agentic Retrieval", "Prompt Engineering"],
    },
    {
      id: "azml", code: "Q·01", kind: "ML pipelines", title: "Enterprise ML Pipelines",
      tone: "light", cols: 2, rows: 1,
      tagline: "Azure ML Studio and Synapse pipelines for extraction, classification and analytics.",
      metricShort: "Azure ML · Synapse", metric: "Azure",
      metricLabel: "ML Studio, Synapse and DevOps, end to end",
      summary: "Production ML pipelines on Azure that turn unstructured enterprise data into classified, analysable records.",
      flow: ["Unstructured data ingest", "Extraction", "Classification", "Analytics"],
      highlights: [
        "Built ML pipelines on Azure ML Studio and Synapse for extraction, classification and analytics.",
        "Automated Azure DevOps test-data extraction into Excel with Power Query M-code, fixing API pagination and column-conflict bugs.",
      ],
      tech: ["Azure ML Studio", "Azure Synapse", "Azure DevOps", "Power Query", "Python"],
    },
  ],
};

export const rudhra: Role = {
  company: "Rudhra Info Solutions",
  role: "Artificial Intelligence Engineer",
  place: "Chennai",
  period: "Apr 2026 – Present",
  eyebrow: "Now · agents in pharma",
  blurb:
    "A multi-tenant RAG platform, AI assistants for GxP documents and CRM work, multi-agent compliance review and a fully fine-tuned intent classifier, built so every answer can be traced to its source.",
  projects: [
    {
      id: "ikm", code: "R·01", kind: "RAG platform · Multi-tenant", title: "IKM RAG Platform",
      tone: "dark", cols: 4, rows: 2, featured: true,
      tagline: "Rudhra's multi-tenant RAG engine for regulated documents: it ingests, secures, understands and searches SOPs, QC records and submissions, and returns every result with a citation.",
      metricShort: "Multi-tenant index · ONNX reranker", metric: "8",
      metricLabel: "shippable roadmap steps I planned to move IKM onto Postgres, queue workers, tenant isolation and a versioned search index",
      summary:
        "IKM is the document platform and retrieval-augmented generation (RAG) backend behind Rudhra's life-sciences products. It takes regulated documents in, scans and understands them, and makes them searchable with citations while keeping each customer's data separate. I planned its architecture and own much of the retrieval, ingestion reliability, observability and deployment work, and I'm the main reviewer and integrator for the team's pull requests.",
      flow: ["Upload & security scan", "Queue workers: parse, OCR, tables", "Chunk & embed into Weaviate", "Neo4j document graph", "Hybrid search + rerank", "Cited results"],
      highlights: [],
      highlightGroups: [
        {
          title: "Architecture",
          items: [
            "Wrote the IKM foundation roadmap: eight independently shippable steps, each with a measurable gate, that moved the platform to Postgres as the only record store, queue-driven workers, tenant isolation and a versioned search index. Split the steps across the team and owned storage, workers and the re-index.",
            "Built queue-driven processing on RabbitMQ with dead-lettering and parsing in a child process, so a file that crashes its parser fails cleanly while other uploads keep flowing.",
            "Moved search onto a multi-tenant Weaviate index (one shard per repository, behind an alias) without downtime, with safe cutover rules and citation metadata preserved.",
            "Added a storage interface: local disk by default, S3 by configuration.",
          ],
        },
        {
          title: "Retrieval quality",
          items: [
            "Built a retrieval evaluation harness and labelled QC test sets (cross-document, identifier and synonym questions), so every search change is measured with Recall@20 and nDCG@10 instead of guessed.",
            "Tuned hybrid vector + BM25 search. Measured that cross-encoder reranking made searches slower and less accurate on the QC set, so made it opt-in per repository and reranked only the top results, off the event loop.",
            "Added an int8 ONNX Runtime reranker backend for faster CPU reranking where a repository needs it, and trialled a smaller MiniLM cross-encoder.",
          ],
        },
        {
          title: "Reliability and observability",
          items: [
            "Fixed stuck processing: scheduler thread races, recoverable async uploads, follow-on processors queued after chunking, and crash-safe PDF layout parsing.",
            "Added per-search and per-upload logs with step timings (masked, non-blocking), Grafana dashboards and a standalone observability dashboard.",
            "Served the API over HTTPS with Caddy on AWS, and hardened deploys and CI.",
          ],
        },
        {
          title: "Integration and review",
          items: [
            "Main reviewer and integrator for the team's pull requests into dev, checking correctness and tenant scoping, including tenant isolation, template management and reference extraction.",
          ],
        },
      ],
      tech: ["Python", "FastAPI", "PostgreSQL", "Weaviate", "Neo4j", "RabbitMQ", "Redis", "ONNX Runtime", "PaddleOCR", "Docker", "AWS EC2", "Caddy", "Grafana"],
    },
    {
      id: "crm", code: "R·02", kind: "Agent · Fine-tuned NLP", title: "CRM AI Assistant",
      tone: "blue", cols: 2, rows: 1,
      tagline: "A Chrome side-panel agent inside the CRM, with six-layer intent routing that includes a fully fine-tuned ModernBERT classifier.",
      metricShort: "6-layer routing · fine-tuned ModernBERT", metric: "~150M",
      metricLabel: "ModernBERT-base parameters, all fine-tuned, serving the intent classifier through ONNX on CPU",
      summary:
        "A side-panel AI assistant on a Python backend that lives inside the CRM, understands what is on screen, and acts through MCP tools, with a human in the loop for anything destructive. Its six-layer intent pipeline includes a ModernBERT-base classifier that I fully fine-tuned and serve through ONNX on CPU.",
      flow: ["Regex fast-path", "Embedding similarity", "Small language model router", "LangGraph orchestrator", "MCP tool layer", "Human approval gate"],
      highlights: [],
      highlightGroups: [
        {
          title: "The agent",
          items: [
            "Designed a six-layer intent pipeline (regex, then embeddings, then a small language model) to route requests cheaply and accurately.",
            "Wired a LangGraph orchestrator over an MCP tool layer with multi-turn memory and live browser context.",
            "Added human approval gates for destructive actions and real-time token streaming.",
          ],
        },
        {
          title: "Fine-tuned intent classifier",
          items: [
            "Fully fine-tuned ModernBERT-base as the pipeline's intent classifier: all ~150M parameters trained, with no frozen layers or adapters.",
            "Built the training data from synthetic messages generated with the Claude Batch API plus hand-labelled real messages, cleaned with near-duplicate and test-leakage filtering and confident-learning label review.",
            "Calibrated the model's confidence with temperature scaling, so an uncertain message gets a clarification question instead of a wrong action.",
            "Exported the model to ONNX for torch-free, low-latency CPU inference, and integrated it into the FastAPI / LangGraph agent behind a config switch, with a rule-based fallback and Docker deployment.",
          ],
        },
      ],
      tech: ["Python", "LangGraph", "MCP", "PyTorch", "Hugging Face", "ModernBERT", "ONNX Runtime", "FastAPI", "Docker", "Chrome Extension", "Streaming"],
    },
    {
      id: "gxp", code: "R·03", kind: "Agents · Grounded chat", title: "GxP Docs AI",
      tone: "light", cols: 2, rows: 1,
      tagline: "AI assistant for pharma quality teams: drafting, validation, impact analysis and grounded chat over controlled documents, with a citation on every fact.",
      metricShort: "Multi-hop retrieval · RBAC", metric: "2",
      metricLabel: "rounds of follow-up search the chat runs to follow references across batch records, SOP versions and training records before it answers",
      summary:
        "An AI assistant for regulated pharma and life-sciences quality teams, working on controlled documents: SOPs, URSs, batch and analytical records, training records and change controls. A FastAPI backend routes each request to a specialist agent (drafting, validation, impact analysis, harmonisation) and retrieves every chunk from IKM. My work centres on the grounded chat, the retrieval behind it, and the platform around it: security, access control and deployment.",
      flow: ["Question rewritten into search queries", "Search IKM within the user's repositories", "Read results, plan what's missing", "Follow-up searches within a budget", "Verdict only from stated facts", "Answer with citations"],
      highlights: [],
      highlightGroups: [
        {
          title: "Grounded document chat",
          items: [
            "Built multi-hop evidence retrieval: the chat reads what the first search found, asks the model what is missing and searches again within a fixed budget, so it can follow references across batch records, SOP versions and training records.",
            "Added question rewriting into standalone search queries, and answer rules: a verdict only when a source states the deciding fact, no assumed values, the current date in context, and a citation on every fact.",
            "Made GQS drafting source-driven: each section is built from repository documents, with sample documents setting style only.",
            "Added multi-document summaries picked in the chat, with follow-up questions scoped to the chosen documents.",
          ],
        },
        {
          title: "Security and access control",
          items: [
            "Added roles, permissions and per-repository access, enforced on the server, with a permission-driven UI.",
            "Scoped chat and drafting retrieval to the signed-in user's repository access, so it can never return chunks the user may not read.",
            "Added an append-only audit trail and a security policy covering password rules, session limits and export watermarking.",
          ],
        },
        {
          title: "Deployment and speed",
          items: [
            "Set up release deployment to AWS EC2 through GitHub Actions with OIDC and SSM, without stored deploy keys.",
            "Sped up retrieval by turning off IKM query splitting and passing the reranking switch through.",
          ],
        },
      ],
      tech: ["Python", "FastAPI", "React", "PostgreSQL", "IKM / Weaviate", "Prompt engineering", "RBAC", "GitHub Actions", "AWS EC2"],
    },
    {
      id: "mlr", code: "R·04", kind: "Multi-agent · RAG", title: "MLR Review",
      tone: "light", cols: 3, rows: 1,
      tagline: "AI-assisted Medical/Legal/Regulatory review for pharma promotional content, grounding every claim in approved source documents.",
      metricShort: "50+ agents · 400+ checks", metric: "400+",
      metricLabel: "compliance checks run by 50+ pluggable agents across Medical, Legal, Regulatory and Branding",
      summary:
        "An AI-assisted Medical/Legal/Regulatory compliance review system for pharma promotional content. I built the entire backend: a RAG-grounded, multi-agent LLM pipeline that validates every claim against approved source documents. Reviewers see the results in a Veeva Vault custom page that I contributed to.",
      flow: ["PDF extraction", "LLM classification", "50+ check agents, run concurrently", "Quote verification against source", "Report assembly"],
      highlights: [
        "Built the entire backend: a 4-stage async pipeline (PDF extraction → LLM classification → concurrent check-agent execution → report assembly) with 50+ pluggable compliance-check agents running 400+ checks across Medical, Legal, Regulatory and Branding.",
        "Architected an anti-hallucination verification layer that checks every LLM-cited quote against the actual retrieved source text before trusting it, with automatic fail-safes on unverifiable or cross-product evidence.",
        "Diagnosed and fixed a silent RAG retrieval-quality regression and a scheduler networking bug in the self-hosted retrieval service; planned its GCP-to-local-Docker migration.",
        "Prototyped OpenSearch (BM25 + kNN hybrid search, RRF fusion) as a comparative retrieval evaluation against the production Weaviate-based hybrid search.",
        "Contributed to the review UI, a React custom page on the Veeva Vault Web SDK, and to a standalone tool for testing locally outside Vault.",
      ],
      tech: ["Python", "RAG", "Multi-Agent LLM", "Weaviate", "OpenSearch", "Veeva Vault Web SDK", "React", "Docker", "PostgreSQL", "GCP"],
    },
    {
      id: "cms", code: "R·05", kind: "Platform · Compliance", title: "Sciagen CMS",
      tone: "light", cols: 3, rows: 1,
      tagline: "Multi-tenant SaaS for pharma promotional content. I built its server-side web capture end to end, plus e-signature and lifecycle rules, claim matching and a hash-chained audit trail.",
      metricShort: "Web capture · e-signature · audit", metric: "E-sign",
      metricLabel: "signing rules derived from workflow transitions, with intent validation and a tamper-evident audit trail",
      summary:
        "A multi-tenant compliance platform for pharma promotional content: documents move through configurable Medical, Legal and Regulatory review workflows, claims are substantiated against prescribing information, and approval needs an e-signature. I work across the platform (database, auth, storage, CI), compliance correctness (e-signature, locking, audit) and reviewer tooling, and built the server-side web-capture feature end to end.",
      flow: ["Content & asset intake", "Web capture: URL → sandboxed HTML + PDF", "MLR review workflow", "Transition-driven e-signature", "Hash-chained audit trail"],
      highlights: [],
      highlightGroups: [
        {
          title: "Web capture, built end to end",
          items: [
            "Built server-side web capture: a user pastes a URL and the server saves the page as one self-contained HTML asset, because the client could not allow a browser extension.",
            "Ran headless Chrome through an SSRF-safe egress proxy that refuses private, loopback and metadata addresses, and served saved pages in a sandboxed frame.",
            "Replaced a vendored AGPL saver with an in-house capture engine: a snapshot plus a tokenizer-based sanitiser, offline support for pages with real WebGL, and a custom Chrome DevTools Protocol client after Node's built-in one dropped large messages.",
            "Kept reviewer annotations anchored in page coordinates, and generated a PDF rendition with selectable text and hidden tabs opened, used for claim scanning, the approval watermark and export.",
          ],
        },
        {
          title: "Workflow, claims and compliance",
          items: [
            "Built the e-signature authorization model end to end, deriving signing requirements from workflow transition configuration rather than static stage ownership, with strict validation that signing intent matches the transition being performed.",
            "Built the document approval state machine with e-signature and watermarking enforcement, and lifecycle controls for when a document can be withdrawn, version-locked or re-versioned.",
            "Required an asset and a claim before a document can leave Draft, and locked uploads and deletes afterwards.",
            "Built a weighted-LCS claim-matching engine for compliance claim scanning, tolerating minor text insertions instead of requiring exact matches.",
            "Verified the claims work against the code and the live dev server, and fixed access and tenant-isolation defects, such as claim edits without rights and harvested claims stored against another tenant's brand.",
            "Added annotation tools to the asset viewer (line, anchor, permalink, document link, find in document) and role-based promotional and non-promotional content access.",
          ],
        },
        {
          title: "Platform and reporting",
          items: [
            "Moved the database from SQLite to PostgreSQL and split the route handlers into repository and service layers.",
            "Added a Postgres-backed session store for multi-instance deployment, JWT bearer-token authentication, and full OpenAPI documentation with Swagger UI.",
            "Built the audit trail for asset upload, delete and download, and fixed a race in the hash chain.",
            "Delivered adoption and usage analytics with a PDF report and live, period-filtered dashboards, plus an Approvers insights tab.",
            "Added tenant-configurable limits, seat counting, per-tenant feature release and a view-only Stakeholder role.",
          ],
        },
        {
          title: "Infrastructure and delivery",
          items: [
            "Added Azure Blob Storage as a storage provider alongside S3, and containerised the backend, frontend and compose stack.",
            "Moved dev, QA and prod builds into GitHub Actions, ran the backend tests in parallel shards, and set up SonarQube scanning.",
          ],
        },
      ],
      tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "React", "Headless Chrome / CDP", "AWS S3", "Azure Blob", "Docker", "GitHub Actions", "OpenAPI / Swagger", "SonarQube"],
    },
  ],
};

export type Education = {
  n: string;
  eyebrow: string;
  title: string;
  place: string;
  score: string;
  text: string;
};

export const education: Education[] = [
  {
    n: "01", eyebrow: "Foundation · 2020", title: "B.Sc. Physics",
    place: "CKGM Government College, Perambra", score: "66.3%",
    text: "Where the habit started: model the system, then test it against reality. The same instinct now drives how I evaluate LLMs.",
  },
  {
    n: "02", eyebrow: "The pivot · 2023", title: "Master of Computer Applications",
    place: "Government Engineering College, Thrissur", score: "81%",
    text: "From equations to software: algorithms, systems and machine learning, the toolkit for turning models into things people use.",
  },
];

export type StackGroup = { name: string; cols: number; tone: Tone; items: string[] };

export const stack: StackGroup[] = [
  {
    name: "AI / ML", cols: 2, tone: "dark",
    items: ["LangChain", "LangGraph", "LlamaIndex", "MCP", "Anthropic API", "Azure OpenAI", "CrewAI", "Hugging Face", "Ollama", "Sentence Transformers", "Hybrid Retrieval", "Reranking", "Graph RAG", "LLM Evaluation", "TensorFlow", "Keras"],
  },
  {
    name: "Backend", cols: 1, tone: "light",
    items: ["Python", "TypeScript", "FastAPI", "Node.js", "Express", "Pydantic", "SQLAlchemy", "Celery", "Next.js", "React", "RBAC / ABAC", "Microservices"],
  },
  {
    name: "Cloud & Data", cols: 1, tone: "light",
    items: ["Azure AI", "AWS Bedrock", "GCP", "Docker", "Kubernetes", "GitHub Actions", "PostgreSQL", "Redis", "Weaviate", "OpenSearch", "Neo4j", "Qdrant", "Pinecone", "pgvector", "FAISS"],
  },
  {
    name: "ML / NLP", cols: 2, tone: "light",
    items: ["PyTorch", "Hugging Face Transformers", "ONNX Runtime", "scikit-learn", "NumPy", "SciPy", "Fine-tuning", "Text Classification", "Synthetic Data", "Confident Learning", "Calibration", "Error Analysis"],
  },
  {
    name: "Domain", cols: 2, tone: "blue",
    items: ["FDA 21 CFR Part 11", "GxP", "GAMP 5", "EU Annex 11", "EMA", "ICH", "SOP / URS authoring", "Veeva Vault"],
  },
];

export const certifications = [
  { issuer: "Anthropic", title: "Introduction to Model Context Protocol" },
  { issuer: "Anthropic", title: "Claude Code in Action" },
  { issuer: "Udemy", title: "AI Engineer Core Track: LLMs, RAG, QLoRA, Agents" },
  { issuer: "Udemy", title: "Azure DevOps Fundamentals" },
];

// Newest first — matches the order on the page, so "Next →" in the drawer walks it top to bottom.
export const allProjects: Project[] = [...rudhra.projects, ...qualitest.projects];

export function findRole(id: string): Role {
  return rudhra.projects.some((p) => p.id === id) ? rudhra : qualitest;
}
