import {
  NavItem,
  MetricItem,
  FeatureCard,
  EngagementStep,
  CaseStudy,
  Testimonial,
  ServiceItem,
  TechCategory,
  IndustryItem,
  BlogPost,
  FaqItem,
} from "@/types";

export interface AwardItem {
  id: string;
  badgeTitle: string;
  year: string;
  organization: string;
  category: string;
  description: string;
  iconName: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies", badge: "Live" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const TRUSTED_BRANDS = [
  { name: "OpenAI", logo: "OpenAI", subtitle: "GPT-4o Partner" },
  { name: "Anthropic", logo: "Anthropic", subtitle: "Claude 3.5 Sonnet" },
  { name: "AWS", logo: "AWS", subtitle: "Advanced Tier" },
  { name: "Meta", logo: "Meta", subtitle: "Llama 3 Ecosystem" },
  { name: "Google Cloud", logo: "Google Cloud", subtitle: "Vertex AI" },
  { name: "Microsoft", logo: "Microsoft", subtitle: "Azure Cloud" },
  { name: "Stripe", logo: "Stripe", subtitle: "Billing Infrastructure" },
  { name: "HubSpot", logo: "HubSpot", subtitle: "CRM Sync" },
];

export const WHY_CHOOSE_US: FeatureCard[] = [
  {
    id: "end-to-end",
    title: "End-to-End Execution",
    description: "From strategy and planning to development, analytics, and growth, we manage the entire delivery lifecycle.",
    iconName: "Zap",
    tag: "Full Lifecycle",
    highlights: ["Strategy & Planning", "Modern Engineering", "Data & BI Systems", "Growth & Marketing"],
  },
  {
    id: "scalable-tech",
    title: "Scalable Technology",
    description: "Solutions designed to support business growth without compromising performance.",
    iconName: "Cloud",
    tag: "High Performance",
    highlights: ["Cloud-Native Architecture", "Zero Bottlenecks", "Enterprise Security", "High Concurrency"],
  },
  {
    id: "data-driven",
    title: "Data-Driven Decisions",
    description: "Turn fragmented data into actionable business intelligence.",
    iconName: "Database",
    tag: "Actionable BI",
    highlights: ["Automated ETL Pipelines", "Executive Dashboards", "Power BI & Looker", "Real-Time Telemetry"],
  },
  {
    id: "business-focused",
    title: "Business-Focused Delivery",
    description: "Every solution is aligned with measurable business objectives.",
    iconName: "TrendingUp",
    tag: "Outcome Driven",
    highlights: ["Commercial Impact", "Fixed Milestones", "Transparent Sprints", "Clear ROI Tracking"],
  },
  {
    id: "cross-functional",
    title: "Cross-Functional Expertise",
    description: "Technology, analytics, and marketing expertise under one partner.",
    iconName: "Users",
    tag: "Unified Pods",
    highlights: ["App & Web Developers", "Data Engineers", "Growth Specialists", "Senior Technical Leads"],
  },
  {
    id: "long-term",
    title: "Long-Term Partnership",
    description: "We focus on sustainable growth, continuous improvement, and long-term success.",
    iconName: "ShieldCheck",
    tag: "Sustainable Growth",
    highlights: ["Continuous Optimization", "Dedicated SLA Support", "Proactive Maintenance", "Scalable Roadmap"],
  },
];

export const METRICS_DATA: MetricItem[] = [
  {
    id: "projects",
    value: 250,
    suffix: "+",
    label: "Projects Delivered",
    subtext: "Digital products & platforms",
  },
  {
    id: "clients",
    value: 150,
    suffix: "+",
    label: "Global Clients",
    subtext: "Startups to enterprises",
  },
  {
    id: "workflows",
    value: 1200,
    suffix: "+",
    label: "Automated Workflows",
    subtext: "Pipelines & production systems",
  },
  {
    id: "industries",
    value: 20,
    suffix: "+",
    label: "Industries Served",
    subtext: "Healthcare, Fintech, Retail & SaaS",
  },
  {
    id: "uptime",
    value: 99.9,
    suffix: "%",
    label: "Platform Reliability",
    subtext: "Enterprise uptime SLA",
  },
];

export const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    step: "01",
    title: "Discovery & Deep Audit",
    duration: "Week 1",
    description: "We dissect your existing data architecture, pain points, security posture, and business KPIs to architect a surgical execution plan.",
    deliverables: ["Architecture Assessment Report", "Data Quality & Leak Audit", "Target 4-Week Milestone Roadmap"],
  },
  {
    step: "02",
    title: "Architecture & Blueprint",
    duration: "Week 1 - 2",
    description: "Design modular schemas, pipeline topologies, security guardrails, and AI agent interface specifications before touching production.",
    deliverables: ["System Topology Diagrams", "API & Schema Contracts", "Infrastructure as Code Blueprints"],
  },
  {
    step: "03",
    title: "Sprint Development",
    duration: "Week 2 - 3",
    description: "Elite engineers deploy in rapid test-driven sprints. You receive live branch previews and working end-to-end data flows every 48 hours.",
    deliverables: ["Automated Pipeline Ingestion", "AI Model Fine-Tuning / RAG", "Interactive Executive UI Dashboard"],
  },
  {
    step: "04",
    title: "Stress Testing & Verification",
    duration: "Week 3 - 4",
    description: "Simulating edge-case load, failover scenarios, prompt injection penetration testing, and data reconciliation accuracy checks.",
    deliverables: ["Chaos Engineering Report", "Security & HIPAA/SOC2 Audit", "Sub-100ms Query Benchmark"],
  },
  {
    step: "05",
    title: "Production Launch",
    duration: "Week 4",
    description: "Zero-downtime blue/green deployment to your cloud environment with telemetry alerting, runbooks, and staff handover training.",
    deliverables: ["Live Production Cutover", "Comprehensive Runbook & Docs", "24/7 War Room Handshake"],
  },
  {
    step: "06",
    title: "Scale & Autonomous Optimization",
    duration: "Ongoing",
    description: "Continuous model drift monitoring, auto-scaling compute, and proactive feature enhancements to compound your operational advantage.",
    deliverables: ["Continuous FinOps Tuning", "Automated Model Re-training", "Quarterly Innovation Roadmap"],
  },
];

export const FEATURED_CASE_STUDIES: CaseStudy[] = [
  {
    id: "healthcare-platform",
    title: "Healthcare Intelligence Platform",
    client: "MedHealth Digital Health",
    industry: "Healthcare & Life Sciences",
    tagline: "AI-Powered Patient Engagement & Clinical Triage Platform",
    description: "Engineered a HIPAA-compliant clinical triage co-pilot and automated patient data lakehouse, slashing consultation wait times while maintaining 99.98% diagnostic routing accuracy.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Intake Velocity", value: "4.8x Faster" },
      { label: "Compliance Score", value: "100% HIPAA" },
      { label: "Active Patients", value: "450k+/mo" },
      { label: "Staff Hours Saved", value: "18,000 hrs/yr" },
    ],
    technologies: ["Next.js 15", "FastAPI", "OpenAI GPT-4o", "PostgreSQL", "FHIR / HL7", "AWS HIPAA Shield"],
    challenge: "Fragmented EHR silos and manual intake forms led to 45-minute average patient wait times and severe clinical staff burnout across 14 hospital networks.",
    solution: "Built an agentic clinical workflow that ingests voice, scans, and EHR records, extracting vital metrics into an encrypted vector lakehouse with human clinician sign-off.",
    impact: [
      "Reduced emergency triage wait times from 45 minutes to 7.2 minutes",
      "Seamlessly integrated with Epic and Cerner EHR architectures",
      "Zero compliance incidents across 1.2M secure patient interactions",
    ],
  },
  {
    id: "legal-intelligence",
    title: "Enterprise Legal Intelligence Platform",
    client: "OmniJuris Corp",
    industry: "Legal Tech & Compliance",
    tagline: "High-Precision Document AI & Automated Risk Analysis",
    description: "Transformed millions of unstructured contracts, NDAs, and regulatory filings into an instant semantic query engine with citation-backed legal risk analysis.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Review Time Saved", value: "82%" },
      { label: "Annual Cost Savings", value: "$1.4M" },
      { label: "Docs Processed", value: "1.2M+" },
      { label: "Citation Accuracy", value: "99.4%" },
    ],
    technologies: ["Anthropic Claude 3.5", "Python", "dbt", "Snowflake", "Qdrant Vector DB", "Docker"],
    challenge: "Senior attorneys were spending over 30 hours per week manually reviewing 200+ page international commercial agreements for indemnity liabilities.",
    solution: "Designed a multi-agent RAG pipeline with clause extraction, redline suggestions, and deterministic citation verification against global case law precedents.",
    impact: [
      "Contract turnaround dropped from 4 business days to under 45 minutes",
      "Eliminated 100% of missed high-severity indemnity clauses in initial trials",
      "Enterprise roll-out to 450+ corporate legal counsels within 6 weeks",
    ],
  },
  {
    id: "automotive-analytics",
    title: "Global Automotive Telemetry Ecosystem",
    client: "Veloce Mobility",
    industry: "Automotive & IoT",
    tagline: "Real-Time Telemetry Lakehouse & Executive Dashboard",
    description: "Built an ultra-low latency telemetry streaming ingestion pipeline processing 1.2M vehicle sensor events per second with predictive maintenance alerts.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Query Latency", value: "< 35ms" },
      { label: "Daily Ingestion", value: "1.2B Events" },
      { label: "Maintenance Gain", value: "24% Saved" },
      { label: "Fleet Uptime", value: "99.98%" },
    ],
    technologies: ["Apache Kafka", "ClickHouse", "React", "TypeScript", "Kubernetes", "Grafana Core"],
    challenge: "Legacy relational databases crashed under high-velocity telemetry bursts from 80,000 commercial fleet vehicles, rendering fleet managers blind to breakdowns.",
    solution: "Re-architected the stack using ClickHouse column-store analytics, Kafka real-time ingestion, and an ultra-snappy React executive command center.",
    impact: [
      "Sub-second alert dispatch for impending thermal engine failures",
      "Saved $3.2M in annual towing and preventable drivetrain repair costs",
      "Dashboard loads over 100M data points in less than 200 milliseconds",
    ],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Global Logistics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote: "CodePlaced delivered what three previous consulting agencies couldn't in 18 months: a bulletproof, real-time analytics lakehouse in just 3 weeks. Our executive team now makes daily decisions with 100% confidence.",
    rating: 5,
    highlight: "Delivered in 3 weeks vs 18 months legacy delays",
    metricsResult: "12x faster query speed across 40TB dataset",
  },
  {
    id: "2",
    name: "Dr. Elena Rostova",
    role: "VP of Product Engineering",
    company: "BioSynaptics AI",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    quote: "The CodePlaced engineering team feels like an elite in-house Special Ops squad. Their mastery of agentic workflows and LLM latency optimization cut our customer onboarding cycle by 70%. Simply world-class.",
    rating: 5,
    highlight: "Cut customer onboarding cycle by 70%",
    metricsResult: "99.98% production uptime from day one",
  },
  {
    id: "3",
    name: "David H. Steinberg",
    role: "Founder & Managing Director",
    company: "CapitalFlow FinTech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote: "Working with CodePlaced was the best technical investment our startup made. They didn't just build dashboards—they audited our underlying schemas, killed redundant cloud spend, and handed us an asset that impressed our Series B leads.",
    rating: 5,
    highlight: "Helped close Series B with audited data integrity",
    metricsResult: "$340,000 annualized cloud cost reduction",
  },
  {
    id: "4",
    name: "Sarah Jenkins",
    role: "Head of Digital Operations",
    company: "OmniRetail Direct",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    quote: "Their 'delivery in weeks' promise isn't marketing fluff. Our unified growth dashboard was live within 18 calendar days, uniting our Meta, Google, and Stripe data into a single source of truth.",
    rating: 5,
    highlight: "Live in 18 calendar days with unified attribution",
    metricsResult: "14% immediate reduction in blended customer CAC",
  },
];

export const MEDIA_OUTLETS = [
  { name: "Forbes", quote: "The boutique powerhouse turning enterprise data chaos into competitive AI engines.", logo: "Forbes" },
  { name: "Inc. 5000", quote: "Recognized among the most agile AI & data engineering partners of 2026.", logo: "Inc." },
  { name: "Yahoo! Finance", quote: "How CodePlaced guarantees 2-4 week production delivery for mid-market leaders.", logo: "Yahoo!" },
  { name: "Business Insider", quote: "The architectural shift towards AI-native data systems led by modern consultancies.", logo: "Business Insider" },
  { name: "Entrepreneur", quote: "Speed, security, and measurable ROI: Why founders are turning to CodePlaced.", logo: "Entrepreneur" },
  { name: "TechCrunch", quote: "Bridging the gap between bleeding-edge LLM research and enterprise reliability.", logo: "TechCrunch" },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "app-web-development",
    title: "App & Web Development",
    tagline: "Build powerful digital products and platforms tailored to your business.",
    description: "Build digital products that are designed to scale. From MVPs to enterprise-grade platforms, CodePlaced develops secure, high-performance applications that help businesses launch faster, operate efficiently, and grow confidently.",
    iconName: "Code2",
    capabilities: [
      "Mobile App Development (iOS & Android)",
      "Web Development & Custom Web Applications",
      "SaaS Development & Multi-Tenant Platforms",
      "Shopify & WordPress Development",
      "API & Third-Party Integrations",
      "Custom Backend Systems & Admin Panels",
      "Website Maintenance & Support",
    ],
    deliverables: "Production-ready, scalable software with 100% private IP ownership & CI/CD deployment",
    badge: "01 — Core Engineering",
  },
  {
    id: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
    tagline: "Transform complex data into connected, actionable insights.",
    description: "Turn your data into a business advantage. We help organizations collect, clean, transform, visualize, and operationalize data through modern analytics platforms and business intelligence solutions.",
    iconName: "Database",
    capabilities: [
      "Data Engineering & Modern Lakehouses",
      "Automated ETL Pipelines & Ingestion",
      "Data Warehousing & Data Integration",
      "Business Intelligence & Dashboard Development",
      "Power BI & Looker Studio Solutions",
      "KPI Reporting & Predictive Analytics",
      "Data Modeling, Visualization & Process Automation",
    ],
    deliverables: "Unified real-time data lakehouse, automated dbt pipelines & executive BI scorecards",
    badge: "02 — Intelligence",
  },
  {
    id: "digital-social-marketing",
    title: "Digital & Social Marketing",
    tagline: "Turn your digital presence into a channel for meaningful growth.",
    description: "Build your brand. Reach your audience. Drive growth. From content creation and social media management to paid advertising and analytics, CodePlaced helps businesses create a stronger digital presence and measurable marketing outcomes.",
    iconName: "BrainCircuit",
    capabilities: [
      "Social Media Management & Strategy",
      "Content Strategy & High-Impact Creation",
      "Graphic Design & Creative Copywriting",
      "Reels & Short-Form Video Production",
      "Paid Advertising (Google, Meta & LinkedIn)",
      "Technical SEO & Growth Strategy",
      "Marketing Analytics & Campaign Performance Tracking",
    ],
    deliverables: "Engineered growth engine with multi-touch CAC attribution & verified ROI telemetry",
    badge: "03 — Measurable Growth",
  },
];

// The 4 Awards Cards explicitly requested:
export const AWARDS_LIST: AwardItem[] = [
  {
    id: "award-1",
    badgeTitle: "Top AI Consultancy",
    year: "2026",
    organization: "Global Tech Leaders Summit",
    category: "Enterprise AI Innovation",
    description: "Awarded #1 Enterprise AI Solution Partner for outstanding 2-4 week production delivery velocity and verifiable model accuracy.",
    iconName: "Award",
  },
  {
    id: "award-2",
    badgeTitle: "Data Architecture of the Year",
    year: "2025",
    organization: "Modern Data Stack Consortium",
    category: "Lakehouse Engineering",
    description: "Recognized for building sub-35ms real-time telemetry streaming architectures supporting over 1.2 billion events daily.",
    iconName: "ShieldCheck",
  },
  {
    id: "award-3",
    badgeTitle: "Excellence in Enterprise Trust",
    year: "2026",
    organization: "CyberSecurity & Compliance Board",
    category: "Zero-Downtime & Security",
    description: "Certified for zero security incidents and 100% audit pass rates across HIPAA, SOC2 Type II, and ISO 27001 deployments.",
    iconName: "Lock",
  },
  {
    id: "award-4",
    badgeTitle: "Clutch Global Leader",
    year: "2025",
    organization: "Clutch Enterprise Reviews",
    category: "Client Satisfaction 5.0 ★",
    description: "Ranked Top 1% Worldwide across 150+ client deployments for on-time delivery and post-launch operational compounding.",
    iconName: "Star",
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "ai",
    name: "AI & Agents",
    description: "State-of-the-art foundation models, orchestration frameworks, and vector retrieval engines.",
    tools: [
      { name: "OpenAI GPT-4o", description: "Flagship multimodal reasoning model", level: "Production Standard", icon: "Bot" },
      { name: "Anthropic Claude 3.5", description: "Superior code synthesis and long context", level: "Production Standard", icon: "Sparkles" },
      { name: "LangGraph / CrewAI", description: "Multi-agent cyclic orchestration", level: "Agent Architecture", icon: "Workflow" },
      { name: "Qdrant / Pinecone", description: "Sub-10ms vector similarity search", level: "Vector Layer", icon: "Layers" },
      { name: "HuggingFace", description: "Open source model fine-tuning & quantization", level: "Custom Models", icon: "Cpu" },
      { name: "Ollama / vLLM", description: "Self-hosted private model serving", level: "On-Prem / Private", icon: "Terminal" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Blazing fast, responsive, and visually stunning web applications with modern design systems.",
    tools: [
      { name: "Next.js 15", description: "App router, React Server Components & SSR", level: "Framework", icon: "Layout" },
      { name: "React 19", description: "Action hooks, server transitions & concurrent UI", level: "Library", icon: "Boxes" },
      { name: "TypeScript", description: "Strict type safety across the entire application", level: "Language", icon: "FileCode" },
      { name: "Tailwind CSS", description: "Utility-first design system with tokens", level: "Styling", icon: "Palette" },
      { name: "Framer Motion", description: "Silky smooth 60fps enterprise micro-interactions", level: "Animation", icon: "Wand2" },
      { name: "Shadcn UI", description: "Accessible Radix-primitive based components", level: "UI System", icon: "Component" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    description: "High-throughput APIs, asynchronous event brokers, and resilient microservices.",
    tools: [
      { name: "Python / FastAPI", description: "Asynchronous REST & WebSocket services", level: "API Core", icon: "Terminal" },
      { name: "Node.js / Bun", description: "High-concurrency event loops and microservices", level: "Runtime", icon: "Server" },
      { name: "Go (Golang)", description: "High-performance compute and streaming daemons", level: "Microservices", icon: "Zap" },
      { name: "GraphQL / REST", description: "Type-safe declarative client-server APIs", level: "API Layer", icon: "Share2" },
      { name: "Celery / Redis Queue", description: "Distributed task queues and background jobs", level: "Workers", icon: "ListOrdered" },
      { name: "gRPC", description: "Ultra-compact binary protocol between services", level: "Internal IPC", icon: "Network" },
    ],
  },
  {
    id: "database",
    name: "Database & Storage",
    description: "Relational, columnar, analytical, and vector persistence for any workload demand.",
    tools: [
      { name: "PostgreSQL", description: "Rock-solid relational database with pgvector", level: "Primary OLTP", icon: "Database" },
      { name: "ClickHouse", description: "Blazing columnar analytics for billion-row queries", level: "Real-Time OLAP", icon: "BarChart2" },
      { name: "Snowflake", description: "Scalable enterprise cloud data warehouse", level: "Lakehouse", icon: "Cloud" },
      { name: "MongoDB", description: "Flexible document store for polymorphic payloads", level: "NoSQL", icon: "FolderArchive" },
      { name: "Redis", description: "Sub-millisecond caching & Pub/Sub message broker", level: "In-Memory", icon: "Zap" },
      { name: "dbt (data build tool)", description: "Modular SQL transformation and testing", level: "ELT Pipeline", icon: "Wrench" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    description: "Enterprise multi-cloud, container orchestration, and zero-trust security postures.",
    tools: [
      { name: "AWS", description: "ECS, EKS, Lambda, S3, RDS, CloudFront", level: "Cloud Platform", icon: "Cloud" },
      { name: "Google Cloud", description: "BigQuery, Vertex AI, GKE, Cloud Run", level: "Cloud Platform", icon: "CloudLightning" },
      { name: "Docker", description: "Standardized container runtime environments", level: "Containers", icon: "Box" },
      { name: "Kubernetes", description: "Self-healing enterprise cluster orchestration", level: "Orchestration", icon: "ShieldCheck" },
      { name: "Terraform", description: "Auditable declarative Infrastructure as Code", level: "IaC", icon: "FileText" },
      { name: "GitHub Actions", description: "Automated test, lint, build, and deploy CI/CD", level: "DevOps", icon: "GitBranch" },
    ],
  },
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare & MedTech",
    iconName: "HeartPulse",
    useCase: "HIPAA-compliant triage bots, EHR integration, medical document extraction, and patient retention analytics.",
    impactStat: "4.8x faster patient intake",
    compliance: "HIPAA & HITECH Ready",
  },
  {
    id: "fintech",
    name: "Finance & FinTech",
    iconName: "Landmark",
    useCase: "Real-time fraud anomaly detection, automated ledger reconciliations, portfolio risk analytics, and algorithmic trade auditing.",
    impactStat: "99.999% ledger accuracy",
    compliance: "SOC2 Type II & PCI-DSS",
  },
  {
    id: "saas",
    name: "B2B SaaS & Tech",
    iconName: "MonitorSmartphone",
    useCase: "Embedded customer analytics, multi-tenant AI copilot integrations, billing attribution, and predictive churn prevention.",
    impactStat: "32% boost in product stickiness",
    compliance: "GDPR & CCPA Compliant",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    iconName: "Truck",
    useCase: "Fleet telematics lakehouses, automated dispatch routing, predictive carrier delay forecasting, and fuel optimization.",
    impactStat: "24% fleet downtime reduction",
    compliance: "ISO 27001 Certified",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    iconName: "ShoppingBag",
    useCase: "Unified multi-channel ad spend attribution, dynamic pricing optimization, stockout prediction, and automated returns intake.",
    impactStat: "18% gross margin improvement",
    compliance: "Omnichannel Sync",
  },
  {
    id: "realestate",
    name: "Real Estate & PropTech",
    iconName: "Building2",
    useCase: "Automated lease abstraction, property valuation models, tenant underwriting pipelines, and capital expenditure forecasting.",
    impactStat: "80% faster lease verification",
    compliance: "Audit-Ready Logs",
  },
  {
    id: "education",
    name: "Education & EdTech",
    iconName: "GraduationCap",
    useCase: "Adaptive learning pathways, automated assessment grading, student lifecycle retention models, and institutional BI dashboards.",
    impactStat: "3.2x student engagement lift",
    compliance: "FERPA Compliant",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    iconName: "Factory",
    useCase: "IoT sensor telemetry ingestion, predictive equipment maintenance, computer vision quality control, and supply bottleneck prevention.",
    impactStat: "35% reduction in unplanned stops",
    compliance: "Industry 4.0 Standard",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "rag-in-production-2026",
    title: "Building Production-Grade RAG Systems in 2026: Lessons from 100M Tokens",
    excerpt: "Why simple vector search fails in enterprise environments, and how hybrid BM25 + dense embedding re-ranking prevents catastrophic hallucination.",
    category: "AI Architecture",
    author: {
      name: "Siddharth Verma",
      role: "Lead AI Architect",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    },
    date: "Sep 22, 2026",
    readTime: "7 min read",
    coverGradient: "from-[#0B4F6C] via-[#082F49] to-[#083344]",
    content: [
      "Naive RAG implementations work well for pitch deck demos, but completely crumble when exposed to multi-thousand page enterprise PDF manuals, complex tables, and nuanced legal terms.",
      "In this comprehensive deep-dive, we unpack our three-tiered retrieval architecture: semantic chunking with metadata inheritance, hybrid reciprocal rank fusion (RRF), and cross-encoder re-ranking.",
      "We also showcase benchmark latency evaluations keeping the 95th percentile response latency under 450 milliseconds across millions of indexed documents.",
    ],
  },
  {
    id: "modern-data-stack-vs-lakehouse",
    title: "Modern Data Stack vs All-in-One AI Lakehouse: An Executive Decision Guide",
    excerpt: "Should your company stitch together 10 different SaaS tools or consolidate into a unified ClickHouse / Databricks engine? Here is the financial and operational trade-off.",
    category: "Data Strategy",
    author: {
      name: "Priya Nair",
      role: "VP of Data Engineering",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    date: "Sep 14, 2026",
    readTime: "6 min read",
    coverGradient: "from-[#0E7490] via-[#082F49] to-[#041e2a]",
    content: [
      "The era of tool sprawl is officially over. CFOs are demanding accountability for twelve different data vendors that each charge for compute, ingress, and seat licenses.",
      "We compare the total cost of ownership (TCO) between distributed point solutions and modern consolidated lakehouse topologies over a 3-year enterprise horizon.",
      "Includes architectural blueprints for how mid-market tech enterprises can cut monthly cloud data expenditures by 40% without sacrificing real-time visibility.",
    ],
  },
  {
    id: "cloud-finops-cut-bills-42-percent",
    title: "How We Cut Cloud Infrastructure Bills by 42% While Tripling Pipeline Throughput",
    excerpt: "A tactical breakdown of autoscaling rightsizing, ClickHouse query compression, and smart spot instance management implemented for our automotive client.",
    category: "Cloud FinOps",
    author: {
      name: "Aman Gupta",
      role: "Head of Cloud Infrastructure",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    date: "Aug 29, 2026",
    readTime: "5 min read",
    coverGradient: "from-[#0B4F6C] via-[#0E7490] to-[#082F49]",
    content: [
      "When our IoT client approached us, their AWS invoice was ballooning at $45,000 per month due to uncompressed Kafka storage and unindexed DynamoDB scans.",
      "By transitioning event-stream storage into columnar ClickHouse with ZSTD compression and deploying Karpenter for Kubernetes node autoscaling, we achieved dramatic savings.",
      "The resulting setup not only trimmed their bill down to $26,000 monthly, but lowered query latency from 8 seconds to 35 milliseconds.",
    ],
  },
];

export const FAQS_LIST: FaqItem[] = [
  {
    category: "Timeline & Delivery",
    question: "How long does a typical project take to deliver?",
    answer: "Our core promise is delivery in 2 to 4 weeks. By utilizing pre-tested enterprise architectural blueprints, modular micro-components, and senior dedicated engineers, we skip the months of bureaucratic discovery and ship production-ready data pipelines and dashboards in weeks, not quarters.",
  },
  {
    category: "Capabilities",
    question: "Do you build custom AI products or just wrap existing APIs?",
    answer: "We build full-stack, enterprise-grade AI systems. While we integrate frontier models (OpenAI, Anthropic) where optimal, we build custom RAG architectures, multi-agent state machines (LangGraph), fine-tune open-weights models (Llama, Mistral) on private client data, and configure air-gapped on-premise inference servers for strict regulatory compliance.",
  },
  {
    category: "Industry Fit",
    question: "What industries and compliance frameworks do you serve?",
    answer: "We specialize in data-intensive sectors including Healthcare (HIPAA / HITECH), FinTech & Banking (SOC2 Type II, PCI-DSS), B2B SaaS, Logistics & Fleet Telematics, Real Estate, and Manufacturing. Every solution we build includes audit trails, encryption at rest/transit, and role-based access control.",
  },
  {
    category: "Technical Integration",
    question: "Can you work with our existing legacy databases and cloud setups?",
    answer: "Yes, 85% of our projects involve integrating with existing legacy systems. Whether your data is locked in on-prem SQL Server, SAP, Salesforce, Oracle, or modern cloud warehouses like Snowflake and BigQuery, we engineer non-disruptive connectors and ingestion pipelines without halting your live operations.",
  },
  {
    category: "Code & IP Ownership",
    question: "What does the code ownership and IP agreement look like?",
    answer: "You own 100% of the intellectual property, code, schemas, and models we build for your company. Everything is committed directly into your private GitHub/GitLab repositories and deployed into your cloud accounts with zero vendor lock-in.",
  },
  {
    category: "Engagement & Support",
    question: "How do we get started and what does ongoing support look like?",
    answer: "It starts with a 30-minute Architecture Audit Call where our Principal Engineer reviews your systems and maps a fixed-scope milestone plan. After launch, we provide dedicated support tiers, proactive monitoring, and quarterly feature iterations to ensure your systems compound in value.",
  },
];
