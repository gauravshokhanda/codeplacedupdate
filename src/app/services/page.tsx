"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AppShell } from "@/components/AppShell";
import {
  Database,
  BrainCircuit,
  BarChart3,
  LayoutGrid,
  Cloud,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Cpu,
  Workflow,
  Lock,
  Server,
  Activity,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  Clock,
  Check,
  FileText,
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  Truck,
  ShoppingBag,
  Building2,
  GraduationCap,
  Factory,
  Globe,
  HelpCircle,
  PhoneCall,
  SlidersHorizontal,
  Code2,
  Search,
  Users,
  Terminal,
  ShieldAlert,
  HardDrive,
  Network,
  GitBranch,
} from "lucide-react";

// 5 Core Service Pillars with Detailed Deliverables & Tech Matrices
const SERVICE_PILLARS = [
  {
    id: "data-platforms",
    title: "Data Platforms & Pipelines",
    tagline: "Scalable lakehouses, real-time CDC pipelines, and unified data foundations.",
    description:
      "Eliminate data silos with low-latency streaming pipelines, Delta Lake / Apache Iceberg architectures, and automated governance that power executive decision-making.",
    icon: Database,
    href: "/services/data-platforms",
    badge: "2–4 WEEKS DELIVERY",
    benchmark: "Sub-second queries across 10B+ rows with 99.999% uptime",
    deliverables: [
      "Lakehouse Architecture Blueprint (Delta Lake / Iceberg)",
      "Real-time Change Data Capture (CDC) pipelines via Kafka & Spark",
      "Automated Data Quality & Governance framework with dbt tests",
      "Role-Based Access Control (RBAC) & Column-level masking",
      "Comprehensive Production Runbook & Source Code Handover",
    ],
    techStack: ["Databricks", "Apache Spark", "Snowflake", "dbt", "Apache Kafka", "BigQuery", "AWS S3", "PostgreSQL"],
  },
  {
    id: "ai-copilots",
    title: "AI Copilots & Autonomous Agents",
    tagline: "Deterministic RAG systems, cyclic LangGraph state machines, and private LLM fine-tuning.",
    description:
      "Transform static enterprise documents and fragmented knowledge into live, conversational copilots that automate complex workflows with sub-18ms vector retrieval and zero hallucinations.",
    icon: BrainCircuit,
    href: "/services/ai-copilots",
    badge: "SUB-18MS INFERENCE",
    benchmark: "99.4% citation accuracy, sub-18ms vector retrieval",
    deliverables: [
      "Multi-stage Hybrid RAG Architecture (BM25 + Dense Vectors + Cohere Rerank)",
      "LangGraph Autonomous Multi-Agent Cyclic State Workflows",
      "Deterministic Inline PDF Citation & Coordinate Verification",
      "Automated Adversarial Prompt Injection & Red-Teaming Eval Suite",
      "Interactive Streamlit / React Web Copilot User Interface",
    ],
    techStack: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "LangGraph", "LlamaIndex", "Qdrant", "Pinecone", "FastAPI", "Python"],
  },
  {
    id: "executive-dashboards",
    title: "Executive Dashboards & Telemetry",
    tagline: "Sub-second visualizations, multi-touch revenue attribution, and operational telemetry.",
    description:
      "Replace sluggish legacy BI reports with snappy, interactive executive control centers that surface real-time pipeline attribution, CAC velocity, and operational telemetry.",
    icon: BarChart3,
    href: "/services/executive-dashboards",
    badge: "SUB-50MS LATENCY",
    benchmark: "Sub-50ms dashboard page load with automated multi-channel attribution",
    deliverables: [
      "Executive Telemetry & Real-Time Revenue Attribution Model",
      "Sub-second Analytical Data Marts using ClickHouse & DuckDB",
      "Interactive KPI Control Center with dynamic filtering & drilldowns",
      "Automated Slack / Email Executive Anomaly Alert Workers",
      "Mobile-Responsive Executive Portal & PDF Export Engine",
    ],
    techStack: ["Next.js 15", "Apache Superset", "Power BI", "Tableau", "ClickHouse", "DuckDB", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "embedded-analytics",
    title: "Embedded Customer Analytics",
    tagline: "Multi-tenant, white-labeled reporting engines built directly into your SaaS application.",
    description:
      "Monopolize client retention by embedding enterprise-grade analytics, custom PDF exports, and self-serve SQL exploration directly into your customer-facing software.",
    icon: LayoutGrid,
    href: "/services/embedded-analytics",
    badge: "100% MULTI-TENANT",
    benchmark: "Strict tenant isolation with sub-10ms query execution",
    deliverables: [
      "Multi-tenant Cryptographic Isolation & Row-Level Security (RLS)",
      "White-labeled Embeddable React / Web Component Library",
      "Scheduled High-Throughput PDF / Excel Export Engine",
      "Self-Serve Visual Query Builder for Non-Technical Users",
      "Metered Usage Telemetry & Stripe Billing Integration",
    ],
    techStack: ["Next.js", "React 19", "Cube.js", "PostgreSQL", "Tailwind CSS", "WebSockets", "Docker", "AWS Lambda"],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & FinOps Optimization",
    tagline: "Multi-cloud Kubernetes orchestration, Terraform IaC, and automated cost reduction.",
    description:
      "Modernize legacy infrastructure into resilient, auto-scaling Kubernetes clusters with automated spot instance rebalancing and strict SOC2 Type II compliance.",
    icon: Cloud,
    href: "/services/cloud-infrastructure",
    badge: "28% COST REDUCTION",
    benchmark: "Average 28% infrastructure cost reduction in 30 days",
    deliverables: [
      "Terraform Multi-Region Infrastructure as Code (IaC) Modules",
      "High-Availability Auto-Scaling Kubernetes Cluster (EKS/GKE/AKS)",
      "Automated Spot Instance Rebalancer & Cloud Cost FinOps Guardrails",
      "Zero-Trust Network, Vault Secrets & IAM Least-Privilege Architecture",
      "GitOps Automated CI/CD Deployment Pipeline with GitHub Actions",
    ],
    techStack: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker", "Datadog", "GitHub Actions"],
  },
];

// Comparison Matrix Data ("When To Use Which Solution")
const COMPARISON_ROWS = [
  {
    solution: "Data Platforms & Pipelines",
    bestFor: "Companies with fragmented data silos across CRMs, ERPs, and SQL databases needing a single unified source of truth.",
    timeline: "2–4 Weeks",
    teamSize: "2 Principal Data Engineers + 1 Solution Architect",
    roiDriver: "Eliminates 20+ hrs/wk of manual reporting and reduces pipeline failures to 0.",
    href: "/services/data-platforms",
  },
  {
    solution: "AI Copilots & Agents",
    bestFor: "Organizations with 1,000+ unstructured PDFs, legal contracts, or customer support backlogs wanting automated triage.",
    timeline: "2–4 Weeks",
    teamSize: "1 Principal AI Architect + 2 Full-Stack ML Engineers",
    roiDriver: "Cuts document analysis time by up to 82% with 99.4% citation accuracy.",
    href: "/services/ai-copilots",
  },
  {
    solution: "Executive Dashboards",
    bestFor: "Founders, CTOs, and VPs needing real-time visibility into CAC, pipeline ROAS, and multi-cloud infrastructure spend.",
    timeline: "1–3 Weeks",
    teamSize: "1 Lead BI Architect + 1 Frontend Performance Engineer",
    roiDriver: "Sub-50ms telemetry with automated anomaly alerts preventing budget overruns.",
    href: "/services/executive-dashboards",
  },
  {
    solution: "Embedded Analytics",
    bestFor: "SaaS founders looking to increase ARR and reduce churn by offering self-serve analytics directly inside their product.",
    timeline: "2–4 Weeks",
    teamSize: "1 Full-Stack Platform Engineer + 1 Database Architect",
    roiDriver: "Unlocks 15–25% higher ACV with enterprise-grade multi-tenant reporting.",
    href: "/services/embedded-analytics",
  },
  {
    solution: "Cloud & FinOps Optimization",
    bestFor: "Engineering teams facing runaway AWS/GCP bills, slow build pipelines, or failing compliance audits.",
    timeline: "1–3 Weeks",
    teamSize: "1 Principal DevOps/FinOps Architect",
    roiDriver: "Guaranteed 20–35% cloud infrastructure bill reduction within 30 days.",
    href: "/services/cloud-infrastructure",
  },
];

// 6-Step Enterprise Delivery Methodology
const DELIVERY_STEPS = [
  {
    step: "01",
    title: "Discovery & Corpus Audit",
    timeline: "Days 1–3",
    deliverables: "Architecture Gap Assessment, Data Contracts & Fixed Sprint Scope",
    outcome: "Clear alignment on data schemas, SLA benchmarks, and security guardrails.",
    icon: Search,
  },
  {
    step: "02",
    title: "Architecture Blueprint",
    timeline: "Days 4–7",
    deliverables: "NDA-Backed Technical Specification, Schema Map & Security Protocol",
    outcome: "Deterministic blueprint ensuring zero data loss and flawless system integrations.",
    icon: Workflow,
  },
  {
    step: "03",
    title: "Production Build Sprint",
    timeline: "Weeks 2–3",
    deliverables: "Private Git Repository, Clean Modular Code & Automated Unit/ETL Tests",
    outcome: "Working production pipelines, vector indices, and dashboard interfaces.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Adversarial Testing & Evals",
    timeline: "Week 3.5",
    deliverables: "Gold-Standard Eval Benchmarks, Latency Metrics & Red-Teaming Report",
    outcome: "Proven sub-20ms query latency, zero hallucinations, and high concurrency resilience.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Air-Gapped Deployment",
    timeline: "Week 4",
    deliverables: "Live Production Release, CI/CD GitOps Handover & Full IP Transfer",
    outcome: "100% air-gapped private VPC cutover with zero downtime and guaranteed SLAs.",
    icon: Server,
  },
  {
    step: "06",
    title: "Ongoing Principal Support",
    timeline: "Post-Launch",
    deliverables: "24/7 Drift Monitoring, Automated Re-indexing & Dedicated Principal Pod",
    outcome: "Continuous performance scaling and proactive cloud cost optimization.",
    icon: Activity,
  },
];

// Tech Stack Categories matching exact prompt specification
const TECH_CATEGORIES_DATA = [
  {
    id: "frontend",
    name: "Frontend",
    tools: [
      { name: "Next.js 15", role: "React Server Components & SSR" },
      { name: "React 19", role: "Declarative UI & Concurrent Mode" },
      { name: "TypeScript", role: "End-to-End Type Safety" },
      { name: "Tailwind CSS", role: "Design Token Architecture" },
      { name: "Vite", role: "Sub-second HMR Build Core" },
      { name: "WebSockets", role: "Real-time Telemetry Streams" },
      { name: "HTML5 Canvas", role: "High-FPS Chart Rendering" },
      { name: "Framer Motion", role: "Hardware-Accelerated UI" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    tools: [
      { name: "Java", role: "Enterprise High-Concurrency Core" },
      { name: "Spring Boot", role: "Production Microservices" },
      { name: "Node.js", role: "Event-Driven Asynchronous Services" },
      { name: "NestJS", role: "Enterprise Structured Architecture" },
      { name: "Python", role: "AI Orchestration & Compute" },
      { name: "FastAPI", role: "High-Throughput ASGI APIs" },
      { name: "PostgreSQL / pgvector", role: "ACID Relational & Vector DB" },
      { name: "Redis", role: "Sub-millisecond Token Cache" },
    ],
  },
  {
    id: "data",
    name: "Data Engineering",
    tools: [
      { name: "Databricks", role: "Unified Lakehouse Compute" },
      { name: "Apache Spark", role: "Distributed Large-Scale ETL" },
      { name: "Apache Airflow", role: "DAG Workflow Orchestration" },
      { name: "Apache Kafka", role: "Real-time Distributed Event Streaming" },
      { name: "dbt", role: "Data Modeling & Automated Tests" },
      { name: "Snowflake", role: "Elastic Cloud Data Warehouse" },
      { name: "BigQuery", role: "Petabyte Serverless Analytics" },
      { name: "ClickHouse", role: "Ultra-Fast OLAP Telemetry" },
    ],
  },
  {
    id: "ai",
    name: "AI & Agents",
    tools: [
      { name: "OpenAI", role: "GPT-4o Frontier Reasoning" },
      { name: "Anthropic", role: "Claude 3.5 Sonnet Precision" },
      { name: "LangChain", role: "Agent Tooling & Orchestration" },
      { name: "LlamaIndex", role: "Advanced Context & Indexing" },
      { name: "Pinecone", role: "Managed Vector Database" },
      { name: "Weaviate", role: "Multi-Modal Vector Search" },
      { name: "LangGraph", role: "Cyclic State Multi-Agent Workflows" },
      { name: "Cohere", role: "Cross-Encoder Reranking Precision" },
    ],
  },
  {
    id: "analytics",
    name: "Analytics & BI",
    tools: [
      { name: "Power BI", role: "Enterprise Analytics Modeling" },
      { name: "Looker Studio", role: "Executive KPI Portals" },
      { name: "Tableau", role: "Interactive Visual Discovery" },
      { name: "Metabase", role: "Embedded Self-Serve Exploration" },
      { name: "Apache Superset", role: "Open-Source Telemetry Control" },
      { name: "Cube.js", role: "Headless Semantic Layer" },
      { name: "DuckDB", role: "In-Process Sub-second Analytics" },
      { name: "PostHog", role: "Product Telemetry & Cohorts" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    tools: [
      { name: "AWS", role: "Bedrock, EKS, Lambda & SageMaker" },
      { name: "Azure", role: "Azure OpenAI, AKS & Enterprise IAM" },
      { name: "GCP", role: "Vertex AI, BigQuery & GKE" },
      { name: "Docker", role: "Immutable Microservices Containers" },
      { name: "Kubernetes", role: "Multi-Cloud Auto-Scaling Cluster" },
      { name: "Terraform", role: "Declarative Infrastructure as Code" },
      { name: "GitHub Actions", role: "Automated GitOps CI/CD" },
      { name: "Datadog", role: "APM, Tracing & Real-time Logs" },
    ],
  },
];

// 8 Mission-Critical Industries
const INDUSTRIES_DATA = [
  {
    title: "Healthcare",
    icon: HeartPulse,
    desc: "HIPAA-compliant clinical triage co-pilots, EHR data lakes, and medical OCR document parsing.",
    solutions: ["EHR Ingestion Lakehouses", "HIPAA AI Triage Bots", "Medical Imaging Metadata"],
  },
  {
    title: "Financial Services",
    icon: Landmark,
    desc: "Real-time fraud anomaly detection, automated transaction reconciliations, and SEC audit trails.",
    solutions: ["Sub-second Risk Telemetry", "Automated Reconciliation DAGs", "Regulatory Audit Feeds"],
  },
  {
    title: "SaaS Platforms",
    icon: MonitorSmartphone,
    desc: "Multi-tenant embedded customer analytics, sub-10ms query execution, and metered usage billing.",
    solutions: ["Embedded Customer Dashboards", "Tenant-Isolated Vectors", "Stripe Metered Usage"],
  },
  {
    title: "Manufacturing",
    icon: Factory,
    desc: "Predictive maintenance sensor streaming, edge device telemetry, and supply chain anomaly radar.",
    solutions: ["Edge Ingestion Kafka Streams", "Predictive Equipment Downtime", "Defect Optical Vision"],
  },
  {
    title: "Logistics",
    icon: Truck,
    desc: "Autonomous dispatch agents, fleet route optimization algorithms, and inventory tracking pipelines.",
    solutions: ["Dynamic Fleet Routing", "Automated Dispatch LangGraph", "Warehouse Vector Search"],
  },
  {
    title: "Retail & E-commerce",
    icon: ShoppingBag,
    desc: "Real-time dynamic pricing algorithms, customer churn prediction models, and unified ROAS attribution.",
    solutions: ["Multi-Touch Ad Attribution", "Customer Lifetime Value ML", "Real-Time Catalog Search"],
  },
  {
    title: "Education",
    icon: GraduationCap,
    desc: "Personalized AI tutoring copilots, automated grading workflows, and student retention modeling.",
    solutions: ["Student Progress Telemetry", "Citation-Backed Q&A Bots", "Adaptive Learning DAGs"],
  },
  {
    title: "Real Estate",
    icon: Building2,
    desc: "Automated lease document intelligence, portfolio valuation modeling, and property data search.",
    solutions: ["Lease OCR JSON Normalization", "Portfolio Revenue Attribution", "Geospatial Vector Index"],
  },
];

// 3 Case Studies
const CASE_STUDIES_DATA = [
  {
    client: "MedHealth Global",
    industry: "Healthcare",
    challenge: "High patient intake wait times and manual triage resulting in physician burnout and compliance risks.",
    solution: "Engineered a HIPAA-compliant clinical triage co-pilot that ingests EHR records and patient voice scans.",
    results: [
      { value: "4.8x Faster", label: "Patient Intake Velocity" },
      { value: "100% HIPAA", label: "Air-Gapped Compliance" },
      { value: "32,000+ Hrs", label: "Annual Doctor Time Saved" },
    ],
  },
  {
    client: "OmniJuris Corp",
    industry: "SaaS & Legal",
    challenge: "1.2M+ commercial contracts stranded in unsearchable PDF archives with slow manual clause reviews.",
    solution: "Built a multi-stage hybrid RAG engine with reciprocal rank fusion and deterministic inline PDF citation.",
    results: [
      { value: "82% Saved", label: "Review Turnaround Time" },
      { value: "99.4%", label: "Citation Precision Rate" },
      { value: "1.2M Files", label: "Indexed in < 48 Hours" },
    ],
  },
  {
    client: "FinScale Cloud",
    industry: "Financial Services",
    challenge: "Runaway multi-cloud AWS bills and sluggish analytical dashboards causing customer onboarding friction.",
    solution: "Designed an auto-scaling Kubernetes cluster with automated spot instance rebalancing and ClickHouse OLAP.",
    results: [
      { value: "$1.4M / yr", label: "Infrastructure Cost Savings" },
      { value: "11.2 ms", label: "p99 Dashboard Query Latency" },
      { value: "99.9%", label: "Platform Uptime SLA" },
    ],
  },
];

// Why Companies Choose CodePlaced
const WHY_CHOOSE_CARDS = [
  {
    title: "Production-First Engineering",
    desc: "We write clean, test-covered production code committed directly to your repos—not disposable slide decks or mockups.",
    icon: Code2,
  },
  {
    title: "Senior Architects & Consultants",
    desc: "Every project is led directly by Principal Engineers with 12+ years of enterprise experience in high-concurrency systems.",
    icon: ShieldCheck,
  },
  {
    title: "Enterprise Security Standards",
    desc: "Strict air-gapped private VPC deployments, SOC2 readiness, mutual NDAs signed upfront, and zero data leakage.",
    icon: Lock,
  },
  {
    title: "Fast Delivery Cycles",
    desc: "We work in fixed-scope, milestone-based sprints. Go from architecture discovery to live production cutover in 2–4 calendar weeks.",
    icon: Zap,
  },
  {
    title: "AI + Data + Infrastructure Expertise",
    desc: "Unified mastery across lakehouses, vector databases, LLM agents, and cloud Kubernetes orchestration under one roof.",
    icon: Layers,
  },
  {
    title: "Long-Term Partnership Model",
    desc: "100% intellectual property ownership handover with ongoing dedicated Principal Engineering pods for proactive scaling.",
    icon: Activity,
  },
];

// FAQs List matching exact prompt specification
const FAQS = [
  {
    q: "How quickly can projects start?",
    a: "We initiate discovery and technical scoping within 48 hours of executing a mutual NDA. Most fixed-scope engagements kick off their Week 1 sprint immediately following the initial architecture audit.",
  },
  {
    q: "Do you sign NDA?",
    a: "Yes, always. We execute standard mutual NDAs upfront before reviewing any architecture blueprints, code repositories, or data schemas to guarantee 100% confidentiality.",
  },
  {
    q: "Do you work with enterprise clients?",
    a: "Yes. We regularly partner with Fortune 500 enterprises, high-growth venture-backed SaaS platforms, and regulated healthcare/financial institutions needing institutional-grade compliance and scale.",
  },
  {
    q: "What cloud providers do you support?",
    a: "We support AWS, Microsoft Azure, Google Cloud Platform (GCP), and on-premise air-gapped private GPU clusters. All infrastructure is provisioned with Terraform Infrastructure as Code (IaC).",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Post-launch, we provide continuous monitoring pods that handle model drift, vector re-indexing, infrastructure scaling, and guaranteed 99.9% platform uptime SLAs.",
  },
  {
    q: "Can you modernize existing systems?",
    a: "Absolutely. We specialize in zero-downtime migrations from legacy data warehouses (SQL Server, Oracle, Hadoop) to modern Databricks/Snowflake lakehouses using blue-green CDC pipelines.",
  },
  {
    q: "What is a typical project timeline?",
    a: "Our core engagements follow a structured 2–4 calendar week milestone schedule. We break work into distinct sprints: Discovery (Days 1–3), Architecture (Days 4–7), Build (Weeks 2–3), and Hardened Deployment (Week 4).",
  },
];

// Client Logos Marquee Data
const CLIENT_LOGOS = [
  { name: "FinScale", sector: "FinTech" },
  { name: "MedHealth", sector: "Healthcare" },
  { name: "OmniJuris", sector: "LegalTech" },
  { name: "NexusRetail", sector: "E-commerce" },
  { name: "ApexLogistics", sector: "Supply Chain" },
  { name: "CloudMatrix", sector: "SaaS Platform" },
  { name: "AeroTech", sector: "Manufacturing" },
  { name: "CyberShield", sector: "Security" },
];

export default function ServicesMasterPage() {
  const [activeTechTab, setActiveTechTab] = useState("data");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [expandedPillarId, setExpandedPillarId] = useState<string | null>("data-platforms");

  return (
    <AppShell>
      <div className="bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (High-Impact Headline, Trust Ribbon & Scoping CTAs) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-white via-[#ECFEFF]/20 to-[#F8FAFC] border-b border-slate-200/80">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none -z-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(14,116,144,0.08), rgba(20,184,166,0.05), transparent 70%)",
            }}
          />

          <div className="site-container relative z-10 max-w-5xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#0B4F6C] font-bold">Services & Architecture</span>
            </div>

            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>ENTERPRISE ARCHITECTURE & CONSULTING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-[900] leading-[1.02] tracking-tight text-[#082F49] mb-6 [text-wrap:balance]">
              Engineering Mission-Critical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                Data, AI & Cloud Systems
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
              From petabyte lakehouses to autonomous AI copilots and real-time executive telemetry, we build high-impact enterprise software systems delivered in 2–4 week fixed sprints.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/contact"
                className="w-full sm:w-auto h-[54px] px-8 rounded-[16px] bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl shadow-[#0B4F6C]/20 flex items-center justify-center gap-2.5 transition-all border border-[#14B8A6]/30 active:scale-95"
              >
                <span>Book Architecture Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#comparison"
                className="w-full sm:w-auto h-[54px] px-8 rounded-[16px] bg-white hover:bg-slate-50 text-[#082F49] font-bold text-sm border border-slate-200 shadow-xs flex items-center justify-center transition-all"
              >
                <span>Explore Solution Matrix</span>
              </a>
            </div>

            {/* 4-Metric Enterprise Trust Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200/80 mb-10">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-[#0B4F6C]">250+</div>
                <div className="text-xs font-bold text-slate-700 mt-0.5">Projects Delivered</div>
                <div className="text-[10px] text-slate-400">Fixed-scope 2–4 wk sprints</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-[#0B4F6C]">150+</div>
                <div className="text-xs font-bold text-slate-700 mt-0.5">Clients Served</div>
                <div className="text-[10px] text-slate-400">High-growth & Enterprise</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-[#0B4F6C]">18+</div>
                <div className="text-xs font-bold text-slate-700 mt-0.5">Industries Served</div>
                <div className="text-[10px] text-slate-400">Healthcare, FinTech, SaaS</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">99.9%</div>
                <div className="text-xs font-bold text-slate-700 mt-0.5">Platform Uptime</div>
                <div className="text-[10px] text-slate-400">Guaranteed production SLA</div>
              </div>
            </div>

            {/* Client Logos Strip (Trust Signal) */}
            <div className="pt-6 border-t border-slate-200/60">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                Trusted by engineering leaders across 150+ organizations & 18+ industries
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
                {CLIENT_LOGOS.map((client) => (
                  <div
                    key={client.name}
                    className="px-4 py-2 rounded-xl bg-white/80 hover:bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 transition-all hover:border-[#14B8A6]/40"
                  >
                    <span className="font-extrabold text-[#082F49] text-xs tracking-tight">{client.name}</span>
                    <span className="text-[9px] font-semibold text-[#0E7490] bg-[#ECFEFF] px-2 py-0.5 rounded-md border border-[#0B4F6C]/10">
                      {client.sector}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. 5 CORE SERVICE PILLARS WITH DETAILED DELIVERABLES & IN-PAGE EXPANSION */}
        {/* ========================================================================= */}
        <section id="pillars" className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              Pillars of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Five Architectural Capabilities
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Every domain is led by seasoned Principal Engineers with deep specialization in high-concurrency throughput and sub-100ms response SLAs.
            </p>
          </div>

          <div className="space-y-8">
            {SERVICE_PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isExpanded = expandedPillarId === pillar.id;

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className={`rounded-[28px] border transition-all duration-300 p-7 sm:p-10 ${
                    isExpanded
                      ? "bg-white border-2 border-[#0B4F6C] shadow-[0_25px_70px_rgba(11,79,108,0.12)] ring-4 ring-[#14B8A6]/10"
                      : "bg-white hover:bg-[#F8FAFC] border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0B4F6C]/40"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold flex-shrink-0 shadow-2xs">
                        <IconComponent className="w-7 h-7" />
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E7490] bg-[#ECFEFF] px-3 py-1 rounded-full border border-[#0B4F6C]/15">
                            {pillar.badge}
                          </span>
                          <span className="text-xs font-bold text-emerald-600">
                            {pillar.benchmark}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-[#082F49]">
                          {pillar.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-semibold text-[#0E7490]">
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setExpandedPillarId(isExpanded ? null : pillar.id)}
                        className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#082F49] text-xs font-bold transition-colors flex items-center gap-1.5"
                      >
                        <span>{isExpanded ? "Hide Deliverables" : "View Deliverables"}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </button>

                      <Link
                        href={pillar.href}
                        className="px-6 py-2.5 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white text-xs font-bold transition-all shadow-md shadow-[#0B4F6C]/20 flex items-center gap-1.5"
                      >
                        <span>Explore Deep Dive</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Expanded Deliverables Specification */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 pt-8 border-t border-slate-200 space-y-6 overflow-hidden"
                      >
                        <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                          {pillar.description}
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                          {/* Deliverables List (Span 7) */}
                          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F49] flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Typical Fixed-Scope Deliverables</span>
                            </h4>
                            <div className="space-y-2.5 pt-1">
                              {pillar.deliverables.map((item, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-1.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technology Stack & Ownership (Span 5) */}
                          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col justify-between space-y-4">
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F49] flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-[#0B4F6C]" />
                                <span>Core Tech Stack</span>
                              </h4>
                              <div className="flex flex-wrap gap-1.5 pt-3">
                                {pillar.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#082F49] shadow-2xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-2 font-medium">
                              <Lock className="w-3.5 h-3.5 text-emerald-600" />
                              <span>100% IP ownership committed directly to your private Git repo</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SERVICE COMPARISON MATRIX ("When To Use Which Solution") */}
        {/* ========================================================================= */}
        <section id="comparison" className="section-py bg-white border-y border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                Strategic Decision Matrix
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                When To Use Which Solution
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Compare timelines, pod compositions, and primary business ROI drivers to identify the exact architecture for your current growth stage.
              </p>
            </div>

            {/* Desktop Comparison Table */}
            <div className="overflow-x-auto">
              <div className="min-w-[950px] rounded-[24px] border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="grid grid-cols-12 bg-[#082F49] text-white text-xs font-bold uppercase tracking-wider py-4 px-6">
                  <div className="col-span-3">Solution Pillar</div>
                  <div className="col-span-4">Best Suited For</div>
                  <div className="col-span-2">Timeline & Team</div>
                  <div className="col-span-3">Primary ROI Driver</div>
                </div>

                <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {COMPARISON_ROWS.map((row, rIdx) => (
                    <div
                      key={row.solution}
                      className="grid grid-cols-12 items-center p-6 hover:bg-[#F8FAFC] transition-colors gap-4"
                    >
                      <div className="col-span-3 space-y-1">
                        <span className="font-black text-[#082F49] text-base block">
                          {row.solution}
                        </span>
                        <Link
                          href={row.href}
                          className="text-xs font-bold text-[#0B4F6C] hover:text-[#14B8A6] inline-flex items-center gap-1"
                        >
                          <span>Explore specs</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="col-span-4 text-slate-600 leading-relaxed text-xs">
                        {row.bestFor}
                      </div>

                      <div className="col-span-2 space-y-1">
                        <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block text-xs">
                          {row.timeline}
                        </span>
                        <span className="text-[11px] text-slate-500 block">
                          {row.teamSize}
                        </span>
                      </div>

                      <div className="col-span-3 space-y-2">
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          {row.roiDriver}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B4F6C] text-white text-xs font-bold hover:bg-[#0E7490] transition-colors shadow-2xs"
                        >
                          <span>Scope Pod</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. MID-PAGE CONVERSION BANNER */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white py-12">
          <div className="site-container max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Tailored Architecture Advisory
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Unsure which solution fits your current roadmap?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Book a 30-minute scoping session with a Principal Architect. We sign mutual NDAs upfront.
              </p>
            </div>

            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-[#14B8A6] hover:bg-[#0D9488] text-[#082F49] font-extrabold text-xs shadow-xl transition-all whitespace-nowrap flex-shrink-0"
            >
              Schedule Scoping Call
            </Link>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. 6-STEP ENTERPRISE PROCESS ("How We Deliver Production Systems") */}
        {/* ========================================================================= */}
        <section id="process" className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              How We Deliver Production Systems
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our 6-step milestone rhythm eliminates consulting bureaucracy, delivering enterprise-grade software in 2–4 calendar weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERY_STEPS.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-7 rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0B4F6C]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#0B4F6C] bg-[#ECFEFF] px-3 py-1 rounded-full border border-[#0B4F6C]/20">
                        Step {step.step}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                        {step.timeline}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-bold text-[#082F49]">
                      {step.title}
                    </h3>

                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                      <div>
                        <span className="font-bold text-[#082F49] block">Deliverables:</span>
                        <span className="text-slate-600">{step.deliverables}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#0E7490] block">Expected Outcome:</span>
                        <span className="text-slate-600">{step.outcome}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contextual CTA Strip: Talk To A Principal Architect */}
          <div className="mt-12 p-6 sm:p-8 rounded-[24px] bg-gradient-to-r from-[#0B4F6C] to-[#0E7490] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-200 bg-white/10 px-3 py-0.5 rounded-full border border-white/20">
                Direct Engineering Access
              </span>
              <h4 className="text-lg sm:text-xl font-black">
                Need a Custom Production Architecture Blueprint?
              </h4>
              <p className="text-xs sm:text-sm text-cyan-100/90 max-w-xl">
                We review your data schemas and deliver a fixed-scope 2–4 week milestone plan within 48 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white text-[#0B4F6C] hover:bg-slate-100 text-xs font-black shadow-md hover:shadow-lg transition-all whitespace-nowrap flex items-center gap-2 flex-shrink-0"
            >
              <span>Talk To A Principal Architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. TECHNOLOGY STACK SECTION (6 Interactive Category Tabs) */}
        {/* ========================================================================= */}
        <section id="tech-stack" className="section-py bg-white border-t border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                Battle-Tested Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Enterprise Technology Stack
              </h2>
              <p className="text-slate-600 text-base">
                We build on battle-tested frameworks proven for petabyte data throughput, sub-15ms AI inference, and 99.9% uptime.
              </p>
            </div>

            {/* Category Tab Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {TECH_CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTechTab(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTechTab === cat.id
                      ? "bg-[#0B4F6C] text-white shadow-md shadow-[#0B4F6C]/20"
                      : "bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 border border-slate-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Active Category Tool Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {TECH_CATEGORIES_DATA.find((c) => c.id === activeTechTab)?.tools.map((t) => (
                <div
                  key={t.name}
                  className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs hover:border-[#14B8A6]/40 transition-colors"
                >
                  <div className="text-sm font-bold text-[#082F49]">{t.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-1">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. SECURITY & COMPLIANCE SECTION ("Enterprise Security Built In") */}
        {/* ========================================================================= */}
        <section id="security" className="section-py bg-[#082F49] text-white">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                Institutional Trust & Safety
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Enterprise Security Built In
              </h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
                Engineered for strict regulatory compliance, zero data retention, and air-gapped private VPC deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "SOC 2 Ready", desc: "Strict access control, audit trails, and VPC infrastructure isolation.", icon: ShieldCheck },
                { title: "ISO 27001 Practices", desc: "Adherence to international information security management protocols.", icon: Lock },
                { title: "NDA Protected", desc: "All schemas, metrics, and business data protected by upfront mutual agreements.", icon: FileText },
                { title: "Role-Based Access Control", desc: "Granular column-level masking and corporate SSO identity federation.", icon: Users },
                { title: "Audit Logging", desc: "Cryptographic immutable decision traces and transaction execution logging.", icon: Activity },
                { title: "Encryption At Rest", desc: "AES-256 military-grade encryption across all persistent lakehouse storage.", icon: HardDrive },
                { title: "Encryption In Transit", desc: "TLS 1.3 cryptographic protocols across every network interface.", icon: Network },
                { title: "100% IP Handover", desc: "All source code, ETL DAGs, and weights committed directly to your repos.", icon: CheckCircle2 },
              ].map((sec) => {
                const SecIcon = sec.icon;
                return (
                  <div
                    key={sec.title}
                    className="p-6 rounded-[24px] bg-white/[0.04] border border-white/10 space-y-3 hover:border-cyan-400/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0B4F6C] text-cyan-300 flex items-center justify-center font-bold">
                      <SecIcon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h4 className="text-base font-bold text-white">{sec.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{sec.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Contextual CTA Strip: Book Architecture Review */}
            <div className="mt-14 p-6 sm:p-8 rounded-[24px] bg-white/[0.06] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-500/20">
                  Compliance & Security Vetting
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Require Custom Infosec Questionnaires or VPC Peering?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  We provide SOC 2 compliance reports and sign custom enterprise data processing agreements (DPAs).
                </p>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#082F49] text-xs font-black shadow-lg transition-all whitespace-nowrap flex items-center gap-2 flex-shrink-0"
              >
                <span>Book Architecture Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. INDUSTRY EXPERTISE SECTION ("Engineered for Mission-Critical Industries") */}
        {/* ========================================================================= */}
        <section id="industries" className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              Domain Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Engineered for Mission-Critical Industries
            </h2>
            <p className="text-slate-600 text-base">
              Every vertical has unique compliance constraints and data schemas. We bring battle-tested industry blueprints to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_DATA.map((ind) => {
              const IndIcon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="p-6 rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0B4F6C]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold">
                      <IndIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#082F49]">{ind.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Typical Solutions:
                    </span>
                    {ind.solutions.map((sol) => (
                      <div key={sol} className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. FEATURED CLIENT OUTCOMES (Case Studies) */}
        {/* ========================================================================= */}
        <section id="case-studies" className="section-py bg-white border-t border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                Verified Case Studies
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Featured Client Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {CASE_STUDIES_DATA.map((cs) => (
                <div
                  key={cs.client}
                  className="p-8 rounded-[28px] bg-[#F8FAFC] border border-slate-200/90 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F6C] bg-[#ECFEFF] px-3 py-1 rounded-full border border-[#0B4F6C]/20">
                        {cs.industry}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">Client: {cs.client}</span>
                    </div>

                    <h3 className="text-xl font-black text-[#082F49] pt-1">
                      {cs.solution}
                    </h3>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 text-xs">
                      <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                        The Challenge:
                      </span>
                      <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
                    </div>

                    {/* Measurable Results */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {cs.results.map((r) => (
                        <div key={r.label} className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                          <div className="text-base font-black text-[#0B4F6C]">{r.value}</div>
                          <div className="text-[9px] text-slate-500 font-semibold mt-0.5 leading-tight">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200">
                    <Link
                      href="/case-studies"
                      className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#0B4F6C] text-[#082F49] hover:text-white text-xs font-bold border border-slate-200 hover:border-[#0B4F6C] flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Contextual CTA Strip: Request Solution Blueprint */}
            <div className="mt-14 p-6 sm:p-8 rounded-[24px] bg-[#ECFEFF] border border-[#0B4F6C]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B4F6C] bg-white px-3 py-0.5 rounded-full border border-[#0B4F6C]/20 font-mono">
                  Proven Enterprise ROI
                </span>
                <h4 className="text-lg sm:text-xl font-black text-[#082F49]">
                  Want Measurable Latency & Cost Reductions for Your Platform?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                  Get a tailored solution blueprint with milestone deliverables, SLA benchmarks, and fixed sprint scoping.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white text-xs font-black shadow-md transition-all whitespace-nowrap flex items-center gap-2 flex-shrink-0"
              >
                <span>Request Solution Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. WHY COMPANIES CHOOSE CODEPLACED */}
        {/* ========================================================================= */}
        <section className="section-py bg-white border-t border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                The CodePlaced Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Why Companies Choose CodePlaced
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_CARDS.map((card) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="p-8 rounded-[24px] bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0B4F6C]/40 transition-all space-y-3"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold">
                      <CardIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#082F49]">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. RESOURCES & RESEARCH SECTION */}
        {/* ========================================================================= */}
        <section id="insights" className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              Engineering Publications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Latest Insights & Research
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Deterministic RAG: Combining Reciprocal Rank Fusion with Cross-Encoder Reranking",
                tag: "AI Architecture",
                readTime: "7 min read",
                desc: "A deep dive into eliminating hallucinations in enterprise document search with sub-18ms vector retrieval.",
              },
              {
                title: "Building High-Throughput Change Data Capture Pipelines with Kafka and Snowflake",
                tag: "Data Engineering",
                readTime: "9 min read",
                desc: "How we process 2.4M events/second with zero data loss and automated schema evolution.",
              },
              {
                title: "The FinOps Playbook: Reducing Multi-Cloud Kubernetes Spend by 28%",
                tag: "Cloud Infrastructure",
                readTime: "6 min read",
                desc: "Real-world strategies for spot instance rebalancing and automated idle cluster reclamation.",
              },
            ].map((art) => (
              <div
                key={art.title}
                className="p-7 rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-bold text-[#0B4F6C] bg-[#ECFEFF] px-2.5 py-0.5 rounded-full border border-[#0B4F6C]/20">
                      {art.tag}
                    </span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#082F49] leading-snug">{art.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{art.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/blog"
                    className="text-xs font-bold text-[#0B4F6C] hover:text-[#14B8A6] inline-flex items-center gap-1.5"
                  >
                    <span>Read Paper</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. FAQ SECTION (7 Enterprise Buyer FAQs) */}
        {/* ========================================================================= */}
        <section id="faq" className="section-py bg-white border-t border-slate-200/80">
          <div className="site-container max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                Direct Answers
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#082F49]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3.5">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-[20px] border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-[#F0F9FF]/70 border-[#0B4F6C]/30 shadow-md ring-1 ring-[#0B4F6C]/20"
                        : "bg-white hover:bg-slate-50 border-slate-200 shadow-2xs"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4"
                    >
                      <span className="font-bold text-[#082F49] text-base">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#0B4F6C] transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 13. FINAL HIGH-CONVERTING CTA SECTION */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white py-16 sm:py-20 text-center">
          <div className="site-container max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Start Your 2–4 Week Engagement
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Ready to Deploy Production Systems in Weeks?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Book a 30-minute discovery call with a Principal AI & Data Architect. We sign NDAs upfront and map your fixed milestone blueprint.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl transition-all border border-[#14B8A6]/30"
              >
                <span>Book Architecture Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                <span>Explore Client Outcomes</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
