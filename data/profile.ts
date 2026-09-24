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
      summary: "Infrastructure that let teams build agents once, register them, and reuse them across the organisation.",
      flow: ["Agent built on the framework", "gRPC inter-agent messaging", "Public agent registry", "Reuse across teams"],
      highlights: [
        "Built a plug-and-play agent framework with gRPC inter-agent communication.",
        "Created a public agent registry so teams could share and reuse agents.",
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
    "Multi-agent compliance review, hybrid retrieval over regulated corpora, and MCP-connected assistants, built so an auditor can trace every decision.",
  projects: [
    {
      id: "mlr", code: "R·01", kind: "Multi-agent · RAG", title: "MLR Review",
      tone: "dark", cols: 4, rows: 2, featured: true,
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
      id: "cms", code: "R·02", kind: "Platform · Compliance", title: "Sciagen CMS",
      tone: "light", cols: 2, rows: 1,
      tagline: "Multi-tenant SaaS for pharma marketing content. I built its e-signature and document-lifecycle engine, a race-safe hash-chained audit trail and multi-cloud storage.",
      metricShort: "E-signatures · hash-chained audit", metric: "E-sign",
      metricLabel: "signing rules derived from workflow transitions, with intent validation and a tamper-evident audit trail",
      summary:
        "A multi-tenant SaaS platform for pharmaceutical marketing content, managing MLR review workflows, regulatory approval and digital-asset compliance.",
      flow: ["Content & asset intake", "MLR review workflow", "Transition-driven e-signature", "Lifecycle controls: withdraw, lock, re-version", "Hash-chained audit trail"],
      highlights: [],
      highlightGroups: [
        {
          title: "Workflow & compliance engine",
          items: [
            "Built the e-signature authorization model end to end, deriving signing requirements from workflow transition configuration rather than static stage ownership, with strict validation that signing intent matches the transition being performed.",
            "Implemented document lifecycle controls governing when a document can be withdrawn, version-locked or re-versioned based on stage, role and timing, closing gaps that let unauthorized users bypass state rules.",
            "Built role-based content access control restricting promotional vs. non-promotional document creation by role, including a full audit and fix of content-type classification gaps.",
            "Added five annotation types (line, anchor, permalink, document-link, find-in-document) to the document viewer.",
            "Built fuzzy claim matching for the compliance claim-scanning engine, tolerating minor text insertions instead of requiring exact matches.",
          ],
        },
        {
          title: "Platform & admin capabilities",
          items: [
            "Designed and shipped tenant-configurable platform limits (max asset upload size, max users per tenant) and a new view-only stakeholder role.",
            "Built the audit trail for asset upload, delete and download activity, then hardened it against concurrent write races with serialized hash-chain writes.",
            "Delivered tenant adoption and usage analytics from scratch, including a PDF report renderer and live period-filtered dashboards, replacing a costlier cloud-monitoring-based approach.",
            "Migrated session state to a shared Postgres-backed store, enabling multi-instance backend deployment.",
            "Published full OpenAPI documentation and Swagger UI coverage for the platform's public and admin APIs.",
          ],
        },
        {
          title: "Infrastructure & multi-cloud",
          items: [
            "Designed a pluggable storage abstraction adding Azure Blob Storage alongside AWS S3, with tenant-level configuration, connection testing and asset-migration tooling.",
            "Containerized the full stack (backend, frontend and CI environment) with Docker, enabling build-artifact-only deployment for clients hosting on their own infrastructure.",
            "Led a schema-wide data standardization effort and a regression-tested merge of a long-diverged feature branch, resolving conflicts across the scheduler, dependencies and several frontend surfaces without losing functionality from either branch.",
            "Set up SonarQube static analysis in CI and drove down cognitive-complexity and accessibility issues across the codebase.",
          ],
        },
      ],
      tech: ["Node.js", "TypeScript", "Express", "PostgreSQL", "AWS S3", "Azure Blob", "Docker", "OpenAPI / Swagger", "SonarQube", "CI"],
    },
    {
      id: "crm", code: "R·03", kind: "Agent · LangGraph", title: "CRM AI Assistant",
      tone: "blue", cols: 2, rows: 1,
      tagline: "A Chrome side-panel agent inside the CRM, with live browser context.",
      metricShort: "6-layer intent routing", metric: "6",
      metricLabel: "layers of intent detection route every request",
      summary:
        "A side-panel AI assistant on a Python backend that lives inside the CRM, understands what is on screen, and acts through MCP tools, with a human in the loop for anything destructive.",
      flow: ["Regex fast-path", "Embedding similarity", "Small language model router", "LangGraph orchestrator", "MCP tool layer", "Human approval gate"],
      highlights: [
        "Designed a six-layer intent pipeline (regex, then embeddings, then a small language model) to route requests cheaply and accurately.",
        "Wired a LangGraph orchestrator over an MCP tool layer with multi-turn memory and live browser context.",
        "Added human approval gates for destructive actions and real-time token streaming.",
      ],
      tech: ["Python", "LangGraph", "MCP", "Chrome Extension", "Streaming"],
    },
    {
      id: "doc", code: "R·04", kind: "Hybrid retrieval", title: "Compliance & Document Intelligence",
      tone: "light", cols: 6, rows: 1,
      tagline:
        "Multi-agent SOP/URS drafting, regulatory validation and impact analysis over regulated corpora, on BM25 + vector retrieval with cross-encoder reranking.",
      metricShort: "Weaviate · Neo4j · reranking", metric: "GxP",
      metricLabel: "agents aware of FDA 21 CFR Part 11, GAMP 5, EU Annex 11, EMA and ICH",
      summary:
        "Multi-agent systems that draft SOPs and URSs, validate them against regulation, and trace the impact of a change across linked documents.",
      flow: ["DOCX / DOC / PDF extraction", "Hybrid BM25 + vector retrieval", "Cross-encoder reranking", "Neo4j reference mapping", "Drafting & validation agents"],
      highlights: [
        "Built hybrid BM25 and vector retrieval with cross-encoder reranking on Weaviate to lift recall on regulated corpora.",
        "Designed a document reference-mapping pipeline on Neo4j and Weaviate using all-MiniLM-L6-v2 embeddings.",
        "Created a multi-format extraction pipeline that handles in-flow tables correctly for downstream agents.",
      ],
      tech: ["Multi-Agent", "Weaviate", "Neo4j", "BM25", "Cross-Encoder", "Sentence Transformers", "GAMP 5"],
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
    name: "Domain", cols: 4, tone: "blue",
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
