// Single source of truth for the site's content. Edit here, not in components.

export const links = {
  email: "ajayjeevanjose17@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajay-jeevan-j-360119109/",
  github: "https://github.com/jeev-jo",
  resume: "/Ajay_Jeevan_Jose_Resume.pdf",
};

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
      metricShort: "400+ pluggable check agents", metric: "400+",
      metricLabel: "pluggable compliance-check agents across Medical, Legal, Regulatory and Branding",
      summary:
        "An AI-assisted Medical/Legal/Regulatory compliance review backend for pharma promotional content, validating claims against approved source documents via a RAG-grounded, multi-agent LLM pipeline, delivered as a Veeva Vault custom page.",
      flow: ["PDF extraction", "LLM classification", "400+ check agents, run concurrently", "Quote verification against source", "Report assembly"],
      highlights: [
        "Built a 4-stage async pipeline (PDF extraction → LLM classification → concurrent check-agent execution → report assembly) with 11 pluggable compliance-check agents across Medical, Legal, Regulatory and Branding.",
        "Architected an anti-hallucination verification layer that checks every LLM-cited quote against the actual retrieved source text before trusting it, with automatic fail-safes on unverifiable or cross-product evidence.",
        "Diagnosed and fixed a silent RAG retrieval-quality regression and a scheduler networking bug in the self-hosted retrieval service; planned its GCP-to-local-Docker migration.",
        "Prototyped OpenSearch (BM25 + kNN hybrid search, RRF fusion) as a comparative retrieval evaluation against the production Weaviate-based hybrid search.",
        "Built the review UI as a Veeva Vault Web SDK custom page (React), plus a lightweight standalone tool for local testing outside Vault.",
      ],
      tech: ["Python", "RAG", "Multi-Agent LLM", "Weaviate", "OpenSearch", "Veeva Vault Web SDK", "React", "Docker", "PostgreSQL", "GCP"],
    },
    {
      id: "cms", code: "R·02", kind: "Platform · MCP", title: "Sciagen CMS",
      tone: "light", cols: 2, rows: 1,
      tagline: "Multi-tenant SaaS for pharma content, MLR review, approvals and digital assets.",
      metricShort: "1,000+ automated tests", metric: "1,000+",
      metricLabel: "automated tests behind GitHub Actions CI/CD",
      summary:
        "A multi-tenant content management and compliance workflow platform for pharmaceutical marketing material, with an MCP server that exposes compliance data to AI agents.",
      flow: ["Content intake & asset storage", "Claims substantiation linking", "Per-country regulatory rulebooks", "Multi-stage e-signature approval", "Hash-chained audit log"],
      highlights: [
        "Migrated the backend from SQLite to PostgreSQL, preserving 70+ sequential schema migrations with zero data loss.",
        "Refactored a 100+ file Express backend into repository and service layers, with a pluggable AWS S3 / Azure Blob storage abstraction.",
        "Built an approval engine with e-signatures, parallel multi-reviewer approval, emergency bypass and tamper-evident audit logging.",
        "Built an MCP server exposing compliance data as agent tools, plus AI claims harvesting and document chat on the Anthropic API.",
      ],
      tech: ["Node.js", "TypeScript", "Express", "PostgreSQL", "MCP", "Anthropic API", "AWS S3", "Azure Blob", "Docker", "GitHub Actions"],
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

export const allProjects: Project[] = [...qualitest.projects, ...rudhra.projects];

export function findRole(id: string): Role {
  return rudhra.projects.some((p) => p.id === id) ? rudhra : qualitest;
}
