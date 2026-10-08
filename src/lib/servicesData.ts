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
    slug: "app-web-development",
    num: "01",
    title: "App & Web Development",
    shortTitle: "App & Web",
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
    slug: "data-engineering-analytics",
    num: "02",
    title: "Data Engineering & Analytics",
    shortTitle: "Data & BI",
    tagline: "Turn Complex Data Into Commercial Advantage",
    positioning:
      "We design petabyte-scale Snowflake data lakehouses, automated dbt ETL pipelines, and executive Power BI cockpits that unify operational data silos into a single source of verified truth.",
    color: "#0284C7",
    badge: "CLOUD LAKEHOUSES & BI",
    heroMetrics: [
      { value: "1.4M/s", label: "Stream Throughput", detail: "Kafka real-time event pipeline" },
      { value: "18x", label: "Query Speedup", detail: "Snowflake dimensional marts" },
      { value: "100%", label: "Audit Accuracy", detail: "dbt automated testing DAGs" },
    ],
    capabilities: [
      { title: "Medallion Data Lakehouses", desc: "Bronze, Silver, and Gold layer data engineering in Snowflake and Databricks." },
      { title: "Automated dbt Transformations", desc: "SQL CI/CD pipelines, automated unit tests, and automated data dictionary docs." },
      { title: "Real-Time Event Streaming", desc: "Apache Kafka and PostgreSQL CDC streaming for sub-second event propagation." },
      { title: "Executive Power BI Cockpits", desc: "Sub-second executive decision dashboards with automated daily/hourly refresh." },
      { title: "Predictive Analytics & Forecasting", desc: "Customer lifetime value models, churn predictors, and inventory demand forecasts." },
      { title: "Data Governance & Row-Level Security", desc: "Role-based access control, HIPAA/SOC2 compliance, and audit trail lineage." },
    ],
    architectureNodes: [
      { title: "01. Bronze (Raw)", subtitle: "Kafka & Webhooks", desc: "Lossless real-time event streaming and CDC log ingestion", status: "1.4M rows/s" },
      { title: "02. Silver (Cleansed)", subtitle: "dbt SQL Core", desc: "Automated deduplication, schema validation, and cleansing", status: "dbt Verified" },
      { title: "03. Gold (Business Marts)", subtitle: "Snowflake Dimensional", desc: "Star schemas, pre-aggregated tables, and instant queries", status: "18x Speedup" },
      { title: "04. Presentation Cockpit", subtitle: "Power BI & Looker", desc: "Executive dashboards and automated board telemetry", status: "Live Sync" },
    ],
    techStack: [
      { name: "Snowflake", tag: "Lakehouse", desc: "Decoupled compute petabyte data platform" },
      { name: "dbt Core", tag: "SQL CI/CD", desc: "Medallion transformation & DAG tests" },
      { name: "Apache Kafka", tag: "Streaming", desc: "Real-time CDC ingestion" },
      { name: "Power BI", tag: "Analytics", desc: "Executive business intelligence" },
      { name: "Databricks", tag: "Spark Lake", desc: "Delta Lake distributed compute" },
      { name: "PostgreSQL", tag: "OLTP Mart", desc: "Operational data persistence" },
    ],
    deliverables: [
      "Fully automated Snowflake/dbt lakehouse repository with complete test suites",
      "Interactive Power BI and Looker Studio executive dashboard templates",
      "Kafka/Airflow stream orchestrations with error handling & dead-letter queues",
      "Data dictionary, lineage graph, and data governance documentation",
      "24/7 SLA monitoring and automated pipeline alert integrations",
    ],
    faqs: [
      { q: "How long does a data lakehouse migration take?", a: "Most enterprise lakehouse migrations take between 3 to 6 weeks from initial source auditing to live Snowflake and Power BI deployment with automated dbt tests." },
      { q: "Will our existing operational databases experience downtime?", a: "No. We utilize zero-impact Change Data Capture (CDC) and read replicas to ingest data without putting load on production OLTP databases." },
    ],
    caseStudySlug: "healthcare-analytics-platform",
  },
  {
    slug: "digital-social-marketing",
    num: "03",
    title: "Digital & Social Marketing",
    shortTitle: "Marketing",
    tagline: "Drive Measurable, Compounding Growth",
    positioning:
      "We engineer full-funnel digital growth engines combining programmatic SEO, Answer Engine Optimization (AEO/GEO), Segment CDP customer data routing, and high-ROAS paid acquisition.",
    color: "#10B981",
    badge: "DEMAND GENERATION & ATTRIBUTION",
    heroMetrics: [
      { value: "+340%", label: "Blended ROAS", detail: "Closed-loop attribution tracking" },
      { value: "+280%", label: "Search Authority", detail: "Programmatic SEO & AEO citations" },
      { value: "-42%", label: "Lower CAC", detail: "Optimized multi-touch funnels" },
    ],
    capabilities: [
      { title: "Answer Engine Optimization (AEO/GEO)", desc: "Optimizing content to win citations inside ChatGPT, Perplexity, and Google Search Generative." },
      { title: "Programmatic SEO & Content Hubs", desc: "High-intent landing page programmatic generators built on clean Next.js architecture." },
      { title: "Segment CDP & Identity Resolution", desc: "Server-side event routing connecting web telemetry directly into HubSpot and CRM marts." },
      { title: "Algorithmic Paid Ads (Google & Meta)", desc: "Dynamic conversion value bidding, custom lookalikes, and high-converting creative testing." },
      { title: "Closed-Loop Revenue Attribution", desc: "Multi-touch attribution models mapping anonymous ad clicks to closed revenue deals." },
      { title: "Brand Identity & High-Converting UX", desc: "Bespoke visual branding, interactive calculators, and conversion rate optimization (CRO)." },
    ],
    architectureNodes: [
      { title: "01. Traffic Acquisition", subtitle: "Paid & Organic Funnels", desc: "Algorithmic Meta/Google ads + Programmatic SEO & AEO", status: "4.8x ROAS" },
      { title: "02. Event Telemetry", subtitle: "Segment CDP Bus", desc: "Server-side identity resolution & privacy-safe routing", status: "100% Deterministic" },
      { title: "03. CRM & Pipeline Sync", subtitle: "HubSpot & Salesforce", desc: "Automated lifecycle lead scoring & sales routing", status: "Real-Time Sync" },
      { title: "04. Revenue Attribution", subtitle: "Executive Cockpit", desc: "Multi-touch CAC to LTV attribution modeling", status: "Closed-Loop" },
    ],
    techStack: [
      { name: "Segment CDP", tag: "Data Bus", desc: "Server-side event collection & routing" },
      { name: "Google Analytics 4", tag: "Telemetry", desc: "Event-based behavioral tracking" },
      { name: "HubSpot CRM", tag: "Automation", desc: "Inbound funnel & lifecycle nurturing" },
      { name: "Meta Ads Manager", tag: "Paid Funnel", desc: "Dynamic creative conversion bidding" },
      { name: "Google Search Console", tag: "Search Health", desc: "Indexation & programmatic crawl audits" },
      { name: "Mixpanel", tag: "Product Funnel", desc: "Retention & user activation cohort metrics" },
    ],
    deliverables: [
      "Complete Segment CDP server-side routing and identity resolution setup",
      "Programmatic SEO architecture and high-converting landing page templates",
      "High-ROAS Meta and Google ad campaign structures with tracking pixels",
      "Multi-touch closed-loop revenue attribution dashboard in Power BI / Looker",
      "Quarterly growth roadmap and conversion rate optimization (CRO) audits",
    ],
    faqs: [
      { q: "What makes your growth approach different from traditional agencies?", a: "We treat growth as an engineering discipline. We build automated data pipelines (Segment CDP, programmatic SEO generators, server-side APIs) that continuously drive organic authority and track every dollar spent down to closed revenue." },
      { q: "How soon do we see measurable traction?", a: "Paid acquisition campaigns and server-side tracking pipelines start generating verified ROI within 14 days, while programmatic SEO and AEO authority build compounding momentum over 60–90 days." },
    ],
    caseStudySlug: "retail-recommendation-engine",
  },
  {
    slug: "ai-services",
    num: "04",
    title: "AI Services & Agents",
    shortTitle: "AI Services",
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
      { title: "Private VPC Vector RAG Engines", desc: "Sub-50ms hybrid semantic retrieval over company documents, databases, and codebases." },
      { title: "Autonomous Multi-Agent Swarms", desc: "Supervisor orchestrator routing tool-calling agents for research, analysis, and execution." },
      { title: "Enterprise Knowledge Base Copilots", desc: "Context-aware employee and customer assistants with clickable citation transparency." },
      { title: "Structured Document Intelligence", desc: "Automated OCR, invoice extraction, and legal contract parsing via Claude 3.5 Sonnet." },
      { title: "Zero-Leak Security Guardrails", desc: "Strict PII redaction, prompt injection defense, and HIPAA/SOC2 compliant model routing." },
      { title: "Custom LLM Fine-Tuning & Evaluation", desc: "Domain-adapted embedding weights and continuous synthetic benchmark testing." },
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
];
