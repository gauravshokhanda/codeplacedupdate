export interface ServiceCapability {
  title: string;
  desc: string;
  tag?: string;
}

export interface ServiceMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ServiceArchitectureNode {
  title: string;
  subtitle: string;
  desc: string;
  status: string;
}

export interface ServiceDetailItem {
  slug: string;
  num: string;
  title: string;
  shortTitle: string;
  tagline: string;
  positioning: string;
  color: string;
  badge: string;
  heroMetrics: ServiceMetric[];
  capabilities: ServiceCapability[];
  architectureNodes: ServiceArchitectureNode[];
  techStack: { name: string; tag: string; desc: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
  caseStudySlug?: string;
}

export const SERVICES_DATA: ServiceDetailItem[] = [
  {
    slug: "ai-services",
    num: "01",
    title: "AI & Automation",
    shortTitle: "AI & Automation",
    tagline: "Automate Complex Business Workflows",
    positioning:
      "We engineer enterprise-grade private RAG knowledge engines, autonomous multi-agent swarms, and bespoke generative AI applications that securely automate high-friction operational workflows with zero data leaks.",
    color: "#16D3F5",
    badge: "AUTONOMOUS VECTOR INTELLIGENCE",
    heroMetrics: [
      { value: "< 400ms", label: "Vector Retrieval", detail: "Pinecone hybrid semantic search" },
      { value: "0%", label: "Data Leakage", detail: "Private VPC isolation & guardrails" },
      { value: "10x", label: "Execution Velocity", detail: "Autonomous multi-agent swarms" },
    ],
    capabilities: [
      { title: "AI Agents & Autonomous Swarms", desc: "Supervisor orchestrator routing tool-calling agents for research, analysis, and automated execution." },
      { title: "Private VPC Vector RAG Engines", desc: "Sub-50ms hybrid semantic retrieval over enterprise documents, structured databases, and codebases." },
      { title: "Intelligent Workflow Automation", desc: "End-to-end operational automation replacing manual repetitive tasks with deterministic AI pipelines." },
      { title: "Enterprise Knowledge Base Copilots", desc: "Context-aware employee and customer assistants with clickable citation transparency and zero data retention." },
      { title: "Structured Document Intelligence", desc: "Automated OCR, invoice extraction, and legal contract parsing via Claude 3.5 Sonnet and GPT-4o." },
      { title: "Zero-Leak Security Guardrails", desc: "Strict PII redaction, prompt injection defense, and HIPAA/SOC2 compliant model routing." },
    ],
    architectureNodes: [
      { title: "01. Supervisor Agent", subtitle: "Orchestration Layer", desc: "Intent parsing, task planning & dynamic tool routing", status: "GPT-4o / Claude" },
      { title: "02. Hybrid Vector RAG", subtitle: "Pinecone Core", desc: "Semantic embeddings + lexical BM25 hybrid ranking", status: "< 50ms Retrieval" },
      { title: "03. Execution Sandbox", subtitle: "Tool Calling", desc: "Sandboxed SQL queries, API calls & deterministic Python", status: "Sandboxed Safe" },
      { title: "04. Enterprise Guardrails", subtitle: "Zero Data Leak", desc: "Automated PII scrubbing & strict hallucination defense", status: "HIPAA Compliant" },
    ],
    techStack: [
      { name: "OpenAI GPT-4o", tag: "Reasoning", desc: "Autonomous reasoning & task planning" },
      { name: "Claude 3.5 Sonnet", tag: "Document AI", desc: "Complex document analysis & agent code" },
      { name: "LangChain & LangGraph", tag: "Swarm Mesh", desc: "Multi-agent tool-calling state graphs" },
      { name: "Pinecone", tag: "Vector Store", desc: "Sub-50ms hybrid semantic search" },
      { name: "FastAPI", tag: "Backend", desc: "Async streaming WebSocket AI endpoints" },
      { name: "LlamaIndex", tag: "Data Framework", desc: "Advanced document parsing & chunking" },
    ],
    deliverables: [
      "Production-ready private RAG repository with Pinecone integration and LangGraph routing",
      "Interactive conversational React copilot interface with streaming Markdown & citations",
      "Complete PII redaction and prompt security evaluation test suite",
      "Deployment IaC blueprints for private VPC hosting on AWS or Azure",
      "Model accuracy monitoring and continuous embedding fine-tuning scripts",
    ],
    faqs: [
      { q: "Is our internal company data safe from model training?", a: "Yes, 100%. We only deploy enterprise VPC endpoints with zero-data-retention agreements. Your proprietary documents and queries are never logged or used for model training." },
      { q: "How do you prevent hallucinations in production AI?", a: "We utilize strict Retrieval-Augmented Generation (RAG) with relevance reranking and deterministic validation guardrails. The AI is constrained to cite authoritative internal chunks only." },
    ],
    caseStudySlug: "enterprise-rag-customer-intelligence",
  },
  {
    slug: "app-web-development",
    num: "02",
    title: "Software Development",
    shortTitle: "Software Development",
    tagline: "Build Products Designed For Scale",
    positioning:
      "We design, engineer, and deploy high-performance web applications, native mobile apps, and multi-tenant SaaS platforms engineered with sub-second API speeds, strict security, and modern component design systems.",
    color: "#16D3F5",
    badge: "FULL-STACK PRODUCT ENGINEERING",
    heroMetrics: [
      { value: "< 250ms", label: "p99 API Latency", detail: "Global edge CDN & SSR" },
      { value: "60 FPS", label: "Native Performance", detail: "Flutter & React Native" },
      { value: "99.99%", label: "Uptime SLA", detail: "Multi-region autoscaling" },
    ],
    capabilities: [
      { title: "Mobile Apps (iOS & Android)", desc: "Cross-platform Flutter & React Native native performance with offline data synchronization." },
      { title: "Next.js 15 Web Applications", desc: "Sub-25ms server-side rendering, dynamic hydration, and App Router architecture." },
      { title: "Custom SaaS Platforms", desc: "Multi-tenant RBAC, automated subscription billing, team management, and metering." },
      { title: "FastAPI & Node.js Microservices", desc: "High-throughput async backends, OpenAPI contracts, and event-driven architectures." },
      { title: "Admin Portals & Dashboards", desc: "Role-based executive management cockpits with real-time WebSocket telemetry." },
      { title: "Enterprise Maintenance & 24/7 SLA", desc: "Proactive uptime monitoring, automated security patch rollouts, and performance tuning." },
    ],
    architectureNodes: [
      { title: "01. Global Edge CDN", subtitle: "Cloudflare & DNS", desc: "Edge caching, SSL termination & DDoS mitigation", status: "12ms Latency" },
      { title: "02. Frontend Tier", subtitle: "Next.js 15 / Flutter", desc: "React server components & 60fps native client views", status: "SSR Hydrated" },
      { title: "03. Microservices Mesh", subtitle: "FastAPI & Node.js", desc: "Autoscaling container pods with RBAC & GraphQL API", status: "Autoscaling (2-32 pods)" },
      { title: "04. Database & Cache", subtitle: "Postgres + Redis", desc: "Multi-AZ read replicas with sub-1ms in-memory caching", status: "ACID Synced" },
    ],
    techStack: [
      { name: "Next.js 15", tag: "Frontend", desc: "Edge SSR & concurrent rendering" },
      { name: "React 19", tag: "UI Core", desc: "Component design systems" },
      { name: "Flutter", tag: "Mobile", desc: "iOS and Android 60fps native" },
      { name: "FastAPI", tag: "API Core", desc: "Python async microservices" },
      { name: "PostgreSQL", tag: "Database", desc: "Relational persistence & Prisma" },
      { name: "Redis", tag: "Cache", desc: "Sub-1ms session locks & queues" },
    ],
    deliverables: [
      "Production-ready Next.js & Flutter repositories with 100% type safety",
      "Interactive Figma design tokens and component design system",
      "Automated CI/CD staging deploy previews and GitHub Actions workflows",
      "Comprehensive OpenAPI specifications and API documentation",
      "100k concurrency synthetic load testing sign-off reports",
    ],
    faqs: [
      { q: "What tech stack do you recommend for our new product?", a: "We typically build web platforms with Next.js 15, TypeScript, and Tailwind, paired with a FastAPI or Node.js microservice layer and PostgreSQL. For mobile, Flutter delivers identical 60 FPS performance across iOS and Android with a unified codebase." },
      { q: "How do you handle sprints and code delivery?", a: "We operate on strict 2-week agile sprints. Every sprint ends with demonstrable staging deployments, recorded loom walkthroughs, and clear commercial deliverables." },
    ],
    caseStudySlug: "real-time-inventory-sync",
  },
  {
    slug: "data-analytics-engineering",
    num: "03",
    title: "Data Analytics & Engineering",
    shortTitle: "Data & Analytics",
    tagline: "Scalable Pipelines, Warehouses & Decision-Ready BI",
    positioning:
      "We unify complex data pipelines, modern Snowflake/BigQuery lakehouses, sub-second executive BI dashboards, and predictive analytics into one governed source of truth.",
    color: "#0284C7",
    badge: "PIPELINES, LAKEHOUSES & EXECUTIVE BI",
    heroMetrics: [
      { value: "1.4M/s", label: "Stream Throughput", detail: "Kafka & CDC ingestion" },
      { value: "Sub-1s", label: "Dashboard Latency", detail: "Power BI, Looker & marts" },
      { value: "100%", label: "Audit Accuracy", detail: "dbt tests & data lineage" },
    ],
    capabilities: [
      { title: "Data Pipelines & ETL/ELT", desc: "Automated Apache Airflow & Kafka pipelines with real-time CDC and zero data loss." },
      { title: "Data Warehousing & Architecture", desc: "Medallion Bronze/Silver/Gold lakehouses in Snowflake, BigQuery & Databricks." },
      { title: "BI Dashboards & Analytics", desc: "Sub-second Power BI, Tableau & Looker Studio cockpits built around verified KPIs." },
      { title: "Predictive Analytics & Reporting", desc: "Customer LTV modeling, churn prediction, demand forecasting & automated digests." },
      { title: "Automated dbt Transformations", desc: "SQL CI/CD modeling, regression gates, and automated data dictionaries." },
      { title: "Data Governance & FinOps Optimization", desc: "Role-based access controls, HIPAA/SOC2 audit lineage, and warehouse compute tuning." },
    ],
    architectureNodes: [
      { title: "01. Ingestion & CDC", subtitle: "Kafka, Airbyte & Segment", desc: "Lossless real-time streaming & multi-source connectors", status: "1.4M rows/s" },
      { title: "02. Warehouse & dbt Core", subtitle: "Snowflake / BigQuery", desc: "Automated deduplication, medallion schemas & dbt tests", status: "18x Query Speedup" },
      { title: "03. Executive Cockpit", subtitle: "Power BI & Looker Studio", desc: "Sub-second drilldowns, KPI frameworks & predictive trends", status: "Sub-1s Refresh" },
      { title: "04. Governance & Alerts", subtitle: "Row-Level Security", desc: "HIPAA/SOC2 lineage, anomaly detection & automated digests", status: "Audited Safe" },
    ],
    techStack: [
      { name: "Snowflake", tag: "Lakehouse", desc: "Cloud data warehouse & lakehouse" },
      { name: "dbt Core", tag: "SQL CI/CD", desc: "Medallion modeling & automated tests" },
      { name: "Power BI", tag: "Executive BI", desc: "Interactive business intelligence portals" },
      { name: "Looker Studio", tag: "Visual BI", desc: "Unified reporting & KPI tracking" },
      { name: "Apache Kafka", tag: "Streaming", desc: "Real-time CDC event ingestion" },
      { name: "BigQuery", tag: "Warehouse", desc: "Serverless enterprise analytics" },
    ],
    deliverables: [
      "Automated Snowflake/BigQuery/dbt data warehouse repository with full test suites",
      "Interactive Power BI, Tableau, or Looker Studio executive KPI dashboards",
      "Kafka/Airflow ETL & CDC pipelines with monitoring and dead-letter recovery",
      "Verified KPI data dictionary, lineage graph, and governance controls",
      "Warehouse compute cost optimization and latency benchmarking report",
    ],
    faqs: [
      { q: "How quickly can our pipelines and executive dashboards go live?", a: "Most engagements go from schema & KPI discovery to production pipelines and live executive dashboards in 3 to 4 weeks." },
      { q: "Will syncing our production databases cause operational downtime?", a: "No. We utilize zero-impact Change Data Capture (CDC) and read replicas so production applications experience zero added load." },
    ],
    caseStudySlug: "growthpulse",
  },
];

// Canonical destination for each of the four core services.
export const PRIMARY_SERVICE_HREFS: Record<string, string> = {
  "ai-services": "/services/ai-copilots",
  "app-web-development": "/services/app-web-development",
  "data-analytics-engineering": "/services/data-analytics-engineering",
  "digital-social-marketing": "/services/data-analytics-engineering",
  "data-engineering-analytics": "/services/data-analytics-engineering",
  "digital-marketing": "/services/digital-marketing",
};

export function getPrimaryServiceHref(slug: string): string {
  return PRIMARY_SERVICE_HREFS[slug] ?? `/services/${slug}`;
}
