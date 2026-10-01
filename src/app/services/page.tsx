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
  LineChart,
  Wrench,
  Boxes,
  KeyRound,
  Shield,
  Radio,
  FileCode,
  Smartphone,
  AppWindow,
  Settings2,
  Briefcase,
  Layers2,
} from "lucide-react";

// =========================================================================
// 1. TRUST METRICS BAR (Below Hero)
// =========================================================================
const HERO_METRICS = [
  { value: "250+", label: "Systems Delivered", sub: "Production-ready software" },
  { value: "150+", label: "Enterprise Integrations", sub: "APIs, ERPs & CRMs" },
  { value: "100+", label: "Production Deployments", sub: "Cloud, web & mobile" },
  { value: "18+", label: "Industries Served", sub: "Mission-critical verticals" },
  { value: "SOC2", label: "Security-First Engineering", sub: "Enterprise air-gapped controls" },
];

// Partner / Client Logos for Strip below metrics
const TRUSTED_PARTNERS = [
  { name: "OpenAI", role: "GPT-4o Partner" },
  { name: "Anthropic", role: "Claude 3.5 Sonnet" },
  { name: "AWS", role: "Advanced Tier Partner" },
  { name: "Google Cloud", role: "Vertex AI & BigQuery" },
  { name: "Microsoft Azure", role: "Cloud Solutions" },
  { name: "Snowflake", role: "Premier Partner" },
  { name: "Databricks", role: "Lakehouse Core" },
  { name: "Stripe", role: "Billing Infrastructure" },
];

// Floating Service Badges in Hero Visual Area
const FLOATING_SERVICE_BADGES = [
  { label: "AI & Automation", icon: BrainCircuit, color: "text-cyan-400 bg-cyan-950/40 border-cyan-500/30" },
  { label: "Web Platform", icon: AppWindow, color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30" },
  { label: "Mobile App", icon: Smartphone, color: "text-teal-300 bg-teal-950/40 border-teal-500/30" },
  { label: "Data Engineering", icon: Database, color: "text-sky-400 bg-sky-950/40 border-sky-500/30" },
  { label: "Cloud Infrastructure", icon: Cloud, color: "text-blue-300 bg-blue-950/40 border-blue-500/30" },
  { label: "Executive Analytics", icon: BarChart3, color: "text-cyan-300 bg-cyan-950/40 border-cyan-400/30" },
];

// =========================================================================
// 2. SIX CORE SERVICE CATEGORIES (Matching Reference Positioning)
// =========================================================================
const SIX_CORE_SERVICES = [
  {
    id: "ai-ml",
    title: "AI & ML Solutions",
    tagline: "Custom AI applications, agentic workflows, and deterministic enterprise RAG.",
    description:
      "Transform business processes with autonomous agent swarms, fine-tuned domain LLMs, and sub-18ms vector retrieval pipelines engineered with zero hallucinations.",
    icon: BrainCircuit,
    badge: "AI NATIVE",
    subServices: [
      "Custom AI Applications",
      "Agentic AI Systems (LangGraph Swarms)",
      "RAG Platforms (Hybrid Search & Citations)",
      "AI Automation & Intelligent Document Processing",
      "LLM Fine-Tuning & Self-Hosted Models",
    ],
    techStack: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "LangChain", "LlamaIndex", "Pinecone", "Weaviate"],
    href: "/services/ai-copilots",
  },
  {
    id: "web-development",
    title: "Web Application Development",
    tagline: "High-performance SaaS platforms, enterprise portals, and internal tools.",
    description:
      "We design and build ultra-responsive, secure, and scalable web applications crafted with Next.js, React, and modular micro-frontends designed for millions of active users.",
    icon: AppWindow,
    badge: "FULL-STACK SAAS",
    subServices: [
      "SaaS Platforms & Multi-Tenant Architecture",
      "Enterprise Portals & Client Dashboards",
      "Internal Tools & Operational Workspaces",
      "Marketplace & Multi-Vendor Applications",
      "Customer Dashboards & Self-Service UI",
    ],
    techStack: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    href: "/services",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    tagline: "Cross-platform and native iOS & Android applications with 60fps UX.",
    description:
      "Deliver stunning mobile experiences with native performance. We engineer Flutter, React Native, iOS (Swift), and Android (Kotlin) apps with offline sync and cloud APIs.",
    icon: Smartphone,
    badge: "IOS & ANDROID",
    subServices: [
      "iOS Development (Swift / SwiftUI)",
      "Android Development (Kotlin / Jetpack)",
      "Flutter Cross-Platform Development",
      "React Native Mobile Systems",
      "Legacy App Modernization & Performance Tuning",
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "GraphQL"],
    href: "/services",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Multi-cloud infrastructure as code, Kubernetes, and automated CI/CD.",
    description:
      "Build resilient, auto-scaling cloud foundations across AWS, Azure, and GCP. We automate provisioning with Terraform, manage Kubernetes clusters, and cut cloud bills by 28%+.",
    icon: Cloud,
    badge: "28% FINOPS SAVINGS",
    subServices: [
      "AWS Architecture & Managed Services",
      "Microsoft Azure Enterprise Cloud",
      "Google Cloud Platform (GCP) & Vertex AI",
      "Automated GitOps CI/CD Pipelines",
      "Infrastructure Automation & Terraform IaC",
    ],
    techStack: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    href: "/services/cloud-infrastructure",
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    tagline: "Petabyte lakehouses, ETL pipelines, and executive dashboards.",
    description:
      "Unify fragmented data silos into high-performance analytical lakehouses on Snowflake, BigQuery, and Databricks with sub-second Power BI and Looker Studio dashboards.",
    icon: Database,
    badge: "SUB-SECOND OLAP",
    subServices: [
      "Enterprise Data Warehousing & Lakehouses",
      "Real-Time ETL & CDC Data Pipelines",
      "Power BI Consulting & DAX Data Modeling",
      "Looker Studio & Tableau Visual Cockpits",
      "Executive Dashboards & KPI Attribution",
    ],
    techStack: ["BigQuery", "Snowflake", "Databricks", "dbt Core", "Power BI", "Looker Studio"],
    href: "/services/data-platforms",
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise Solutions",
    tagline: "Core backend systems, ERP/CRM integrations, and workflow automation.",
    description:
      "Modernize legacy core systems with Java/Spring Boot microservices, secure API gateways, seamless Salesforce/SAP integrations, and automated end-to-end enterprise workflows.",
    icon: Briefcase,
    badge: "JAVA & SPRING BOOT",
    subServices: [
      "ERP & Legacy System Integrations (SAP, NetSuite)",
      "CRM Systems & Salesforce Synchronization",
      "End-to-End Enterprise Workflow Automation",
      "Secure Customer & Vendor Portals",
      "Internal Platforms & Java/Spring Boot Microservices",
    ],
    techStack: ["Java", "Spring Boot", "FastAPI", "NestJS", "Kafka", "PostgreSQL"],
    href: "/services",
  },
];

// =========================================================================
// 3. WHEN TO USE WHICH SOLUTION (Decision Support Table)
// =========================================================================
const DECISION_MATRIX = [
  {
    problem: "Reporting Chaos",
    service: "Executive Dashboards & BI",
    timeline: "2–4 Weeks",
    outcome: "Single Source of Truth",
    desc: "Disparate spreadsheets, conflicting KPI definitions, and days spent manually assembling board decks.",
    href: "/services/executive-dashboards",
  },
  {
    problem: "Data Silos",
    service: "Data Platform & Lakehouse",
    timeline: "3–6 Weeks",
    outcome: "Unified Data",
    desc: "Fragmented customer data trapped in disparate CRMs, ERPs, billing portals, and legacy SQL databases.",
    href: "/services/data-platforms",
  },
  {
    problem: "Repetitive Tasks",
    service: "AI Agents & Copilots",
    timeline: "2–4 Weeks",
    outcome: "Automation",
    desc: "Manual document reviews, repetitive customer triage tickets, and slow clause extraction workflows.",
    href: "/services/ai-copilots",
  },
  {
    problem: "Customer Reporting",
    service: "Embedded Analytics & UI",
    timeline: "4–8 Weeks",
    outcome: "Better Retention",
    desc: "SaaS customers demanding white-labeled in-app dashboards, custom reports, and data export capabilities.",
    href: "/services/embedded-analytics",
  },
  {
    problem: "Infrastructure Costs",
    service: "Cloud & DevOps Optimization",
    timeline: "2–6 Weeks",
    outcome: "Cost Savings",
    desc: "Runaway AWS/GCP cloud bills, idle server instances, and unoptimized database query scans.",
    href: "/services/cloud-infrastructure",
  },
];

// =========================================================================
// 4. DELIVERY METHODOLOGY (5 Stages)
// =========================================================================
const DELIVERY_METHODOLOGY = [
  {
    step: "01",
    title: "Architecture Audit",
    timeline: "Days 1–3",
    items: ["Current state review", "Data source mapping", "Risk assessment"],
    outcome: "Clear alignment on data schemas, compliance guardrails, and latency SLAs.",
    icon: Search,
  },
  {
    step: "02",
    title: "Solution Blueprint",
    timeline: "Days 4–7",
    items: ["System design", "Security review", "Delivery roadmap"],
    outcome: "Deterministic blueprint ensuring zero data loss and flawless integrations.",
    icon: Workflow,
  },
  {
    step: "03",
    title: "Production Build",
    timeline: "Weeks 2–3",
    items: ["Development", "Testing", "Deployment"],
    outcome: "Working production pipelines, web/mobile apps, vector indices, and interfaces.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Optimization",
    timeline: "Week 3.5",
    items: ["Monitoring", "Performance tuning", "Cost optimization"],
    outcome: "Proven sub-20ms query latency, zero hallucinations, and high concurrency.",
    icon: Activity,
  },
  {
    step: "05",
    title: "Knowledge Transfer",
    timeline: "Week 4",
    items: ["Documentation", "Team enablement", "Governance"],
    outcome: "100% IP transfer committed directly to your private Git repositories.",
    icon: ShieldCheck,
  },
];

// =========================================================================
// 5. OUR PREFERRED TECHNOLOGY STACK (Matching Reference Specification)
// =========================================================================
const PREFERRED_TECH_STACK = [
  {
    id: "frontend",
    name: "Frontend",
    tools: [
      { name: "React", role: "Component UI Architecture" },
      { name: "Next.js", role: "SSR & Server Components" },
      { name: "Vue.js", role: "Progressive Web Framework" },
      { name: "Angular", role: "Enterprise Client Systems" },
      { name: "TypeScript", role: "End-to-End Type Safety" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    tools: [
      { name: "Node.js", role: "Event-Driven Microservices" },
      { name: "Java", role: "High-Concurrency Core" },
      { name: "Spring Boot", role: "Enterprise Microservices" },
      { name: "Python", role: "AI Compute & APIs" },
      { name: "FastAPI", role: "High-Throughput ASGI" },
      { name: "NestJS", role: "Structured Enterprise APIs" },
      { name: ".NET", role: "Enterprise C# Core" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    tools: [
      { name: "Flutter", role: "Multi-Platform 60fps UI" },
      { name: "React Native", role: "Cross-Platform Ecosystem" },
      { name: "Swift", role: "Native iOS / SwiftUI" },
      { name: "Kotlin", role: "Native Android / Jetpack" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    tools: [
      { name: "AWS", role: "EKS, Lambda, S3 & Bedrock" },
      { name: "Azure", role: "AKS & Azure OpenAI" },
      { name: "Google Cloud", role: "GKE, Vertex & BigQuery" },
      { name: "Docker", role: "Immutable Containers" },
      { name: "Kubernetes", role: "Auto-Scaling Orchestration" },
      { name: "Terraform", role: "Declarative IaC" },
    ],
  },
  {
    id: "data",
    name: "Data & Analytics",
    tools: [
      { name: "BigQuery", role: "Petabyte Serverless Analytics" },
      { name: "Snowflake", role: "Elastic Cloud Warehouse" },
      { name: "Redshift", role: "AWS Managed Data Warehouse" },
      { name: "Power BI", role: "Enterprise DAX Modeling" },
      { name: "Looker Studio", role: "Executive KPI Cockpits" },
      { name: "Tableau", role: "Visual Data Discovery" },
      { name: "dbt", role: "Transformation & Testing" },
    ],
  },
  {
    id: "ai",
    name: "AI & ML",
    tools: [
      { name: "OpenAI", role: "GPT-4o Frontier Models" },
      { name: "Anthropic", role: "Claude 3.5 Sonnet" },
      { name: "LangChain", role: "Agent Orchestration" },
      { name: "LlamaIndex", role: "Advanced Context & Search" },
      { name: "Vector Databases", role: "Pinecone, Weaviate & Qdrant" },
      { name: "RAG Frameworks", role: "Hybrid Reciprocal Rank Fusion" },
    ],
  },
];

// =========================================================================
// 6. ENTERPRISE SECURITY BUILT IN (8 Dark Gradient Cards)
// =========================================================================
const SECURITY_CARDS = [
  {
    title: "RBAC",
    subtitle: "Role-Based Access Control",
    desc: "Granular column-level masking, data access policies, and automated role assignments.",
    icon: KeyRound,
  },
  {
    title: "SSO",
    subtitle: "Google, Azure AD, Okta",
    desc: "Seamless enterprise identity federation with SAML 2.0, OAuth 2.0, and MFA enforcement.",
    icon: Users,
  },
  {
    title: "Audit Logs",
    subtitle: "Full Activity Tracking",
    desc: "Immutable cryptographic decision traces, query execution logs, and compliance audit feeds.",
    icon: Activity,
  },
  {
    title: "Encryption",
    subtitle: "At Rest & In Transit",
    desc: "AES-256 persistent volume encryption and TLS 1.3 across all communication interfaces.",
    icon: Lock,
  },
  {
    title: "VPC Deployment",
    subtitle: "Private Infrastructure",
    desc: "Air-gapped private VPC clusters with strict security groups and zero public internet exposure.",
    icon: Network,
  },
  {
    title: "SOC2 Alignment",
    subtitle: "Enterprise-Ready Controls",
    desc: "Engineered to satisfy SOC 2 Type II trust criteria and strict ISO 27001 requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Data Residency",
    subtitle: "Regional Compliance Support",
    desc: "Multi-region tenant routing ensuring compliance with GDPR, HIPAA, and CCPA data sovereignty.",
    icon: Globe,
  },
  {
    title: "Backup & Recovery",
    subtitle: "Disaster Recovery Planning",
    desc: "Automated snapshot scheduling, cross-region replication, and proven RPO/RTO SLAs.",
    icon: HardDrive,
  },
];

// =========================================================================
// 7. INDUSTRIES SECTION
// =========================================================================
const INDUSTRIES_SHOWCASE = [
  {
    name: "Healthcare",
    icon: HeartPulse,
    compliance: "HIPAA & HITRUST Ready",
    useCases: ["EHR Data Platforms", "Clinical Triage Copilots", "Physician Productivity Dashboards"],
    outcome: "4.8x faster patient intake & 18k+ physician hours saved",
  },
  {
    name: "FinTech & Banking",
    icon: Landmark,
    compliance: "SOC 2 & SEC 10-K Ready",
    useCases: ["Fraud Detection ML", "Sub-Second Risk Analytics", "Real-Time Ledger Reconciliations"],
    outcome: "99.99% ledger accuracy & < 12ms p99 query latency",
  },
  {
    name: "Retail & E-Commerce",
    icon: ShoppingBag,
    compliance: "PCI-DSS & GDPR Compliant",
    useCases: ["Customer Analytics CDP", "Inventory Stockout Forecasting", "Multi-Touch ROAS Attribution"],
    outcome: "+18% gross margin expansion & real-time ad sync",
  },
  {
    name: "Logistics & Supply Chain",
    icon: Truck,
    compliance: "DOT & ELD Telematics Ready",
    useCases: ["Fleet Telematics Streams", "Route Optimization ML", "Automated BOL Document OCR"],
    outcome: "24% fleet downtime reduction & $3.2M saved",
  },
  {
    name: "SaaS & Cloud Platforms",
    icon: MonitorSmartphone,
    compliance: "Multi-Tenant Row-Level Security",
    useCases: ["Embedded Customer Analytics", "In-App AI Copilots", "Stripe Usage-Based Metering"],
    outcome: "32% ARR expansion lift & 4x faster onboarding",
  },
  {
    name: "Manufacturing & Industrial",
    icon: Factory,
    compliance: "Industry 4.0 & ISA-95 Standards",
    useCases: ["Edge Sensor Ingestion", "Predictive Maintenance ML", "Plant Floor OEE Dashboards"],
    outcome: "35% less machine downtime & 72-hr advance alert",
  },
];

// =========================================================================
// 8. FEATURED CLIENT OUTCOMES
// =========================================================================
const CLIENT_OUTCOMES = [
  {
    industry: "EdTech",
    stat: "83.6%",
    label: "Course Completion Rate",
    stack: "BigQuery + Looker Studio",
    challenge: "Fragmented student engagement telemetry resulted in 40%+ course dropouts across 120,000 enrolled learners.",
    solution: "Built a centralized BigQuery lakehouse with real-time student drop-off alerts and Looker Studio retention dashboards.",
  },
  {
    industry: "FinTech",
    stat: "99.99%",
    label: "Ledger Accuracy",
    stack: "Snowflake + dbt",
    challenge: "Batch financial reconciliations took 8+ hours to run, causing delayed settlement reporting and SEC audit risks.",
    solution: "Architected a real-time Snowflake lakehouse with automated dbt reconciliation DAGs and instant anomaly flags.",
  },
  {
    industry: "Logistics",
    stat: "24%",
    label: "Fleet Downtime Reduction",
    stack: "BigQuery + Power BI",
    challenge: "Lagging fleet GPS telemetry caused frequent dispatch delays and unoptimized delivery routes across 1,400 vehicles.",
    solution: "Deployed a streaming telematics pipeline on BigQuery with an interactive Power BI dispatch cockpit.",
  },
  {
    industry: "SaaS",
    stat: "32%",
    label: "Product Stickiness Increase",
    stack: "Embedded Analytics",
    challenge: "Enterprise SaaS clients were churning due to basic reporting and lack of exportable executive data.",
    solution: "Embedded a white-labeled Next.js analytics widget with row-level security and automated scheduled PDF exports.",
  },
];

// =========================================================================
// 9. WHY COMPANIES CHOOSE CODEPLACED
// =========================================================================
const WHY_CHOOSE_CARDS = [
  {
    title: "Principal Engineers First",
    desc: "No junior-led projects. Every engagement is led directly by Principal Architects with 12+ years of enterprise experience.",
    icon: ShieldCheck,
  },
  {
    title: "Production Focused",
    desc: "Built for real-world usage. We write clean, test-covered code committed directly to your repos—not slide decks or prototypes.",
    icon: Code2,
  },
  {
    title: "Security By Default",
    desc: "Enterprise controls included. Air-gapped VPC deployments, SOC 2 readiness, and mutual NDAs signed upfront.",
    icon: Lock,
  },
  {
    title: "Fixed Scope Delivery",
    desc: "Predictable timelines. We work in fixed-scope milestone sprints. Go from architecture audit to live cutover in 2–4 weeks.",
    icon: Zap,
  },
  {
    title: "Executive Visibility",
    desc: "Leadership dashboards included. C-suite telemetry, board deck automation, and real-time revenue attribution built in.",
    icon: BarChart3,
  },
  {
    title: "Vendor Neutral",
    desc: "Best technology for your use case. We objectively recommend the best stack—whether React, Flutter, Java, Databricks, or AWS.",
    icon: Boxes,
  },
];

// =========================================================================
// 10. LATEST INSIGHTS
// =========================================================================
const LATEST_INSIGHTS = [
  {
    title: "Deterministic RAG: Combining Reciprocal Rank Fusion with Cross-Encoder Reranking",
    category: "AI Architecture",
    readTime: "7 min read",
    desc: "A deep dive into eliminating hallucinations in enterprise document search with sub-18ms vector retrieval and citation guardrails.",
  },
  {
    title: "Building High-Throughput Change Data Capture Pipelines with Kafka and Snowflake",
    category: "Data Engineering",
    readTime: "9 min read",
    desc: "How we process 2.4M events/second with zero data loss, distributed locks, and automated dbt schema evolution.",
  },
  {
    title: "The FinOps Playbook: Reducing Multi-Cloud Kubernetes Spend by 28%",
    category: "Cloud & DevOps",
    readTime: "6 min read",
    desc: "Real-world strategies for spot instance rebalancing, automated Karpenter autoscaling, and idle cluster reclamation.",
  },
];

// =========================================================================
// 11. FAQ
// =========================================================================
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
    q: "What cloud providers and technologies do you support?",
    a: "We support AWS, Microsoft Azure, Google Cloud Platform (GCP), modern full-stack web and mobile stacks (React, Next.js, Flutter, Swift, Java, Python), and on-premise air-gapped GPU clusters.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Post-launch, we provide continuous monitoring pods that handle model drift, vector re-indexing, infrastructure scaling, and guaranteed 99.99% platform uptime SLAs.",
  },
  {
    q: "Can you modernize existing legacy systems?",
    a: "Absolutely. We specialize in zero-downtime migrations from monolithic legacy architectures to modern microservices, Next.js web applications, and Databricks/Snowflake lakehouses.",
  },
  {
    q: "What is a typical project timeline?",
    a: "Our core engagements follow a structured 2–4 calendar week milestone schedule. We break work into distinct sprints: Discovery (Days 1–3), Architecture (Days 4–7), Build (Weeks 2–3), and Hardened Deployment (Week 4).",
  },
];

export default function ServicesMasterPage() {
  const [activeTechTab, setActiveTechTab] = useState("data");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>("ai-ml");

  return (
    <AppShell>
      <div className="bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white font-sans">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Full Stack Technology Partner Positioning) */}
        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Full Stack Technology Partner Positioning) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-10 pb-12 lg:pt-14 lg:pb-16 bg-gradient-to-b from-[#F0F9FF]/80 via-[#ECFEFF]/30 to-[#F8FAFC] border-b border-slate-200/80">
          {/* Subtle Ambient Radial Glows */}
          <div
            className="absolute top-10 left-1/3 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none -z-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(17,138,178,0.12), rgba(35,199,167,0.06), transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-10 w-[600px] h-[400px] pointer-events-none -z-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(15,61,92,0.08), transparent 70%)",
            }}
          />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
              {/* ========================================================================= */}
              {/* LEFT SIDE (Content & Positioning) */}
              {/* ========================================================================= */}
              <div className="lg:col-span-7 xl:col-span-6 space-y-6">
                {/* Small Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0A4D68] border border-[#0A4D68]/20 shadow-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#118ab2] animate-pulse" />
                  <span>FULL STACK TECHNOLOGY PARTNER</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="text-[38px] sm:text-[54px] lg:text-[62px] xl:text-[72px] font-[900] leading-[1.05] tracking-tight text-[#082F49]"
                >
                  We Build Scalable <br />
                  Digital Products, Powered <br className="hidden sm:inline" />
                  by{" "}
                  <span
                    className="bg-clip-text text-transparent font-black"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0f3d5c 0%, #118ab2 50%, #23c7a7 100%)",
                    }}
                  >
                    Data, AI & Cloud
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="text-base sm:text-[17px] text-slate-600 leading-relaxed space-y-3 font-normal"
                >
                  <p>
                    CodePlaced helps businesses design, develop, and scale modern software solutions — from web and mobile applications to enterprise platforms, AI systems, cloud infrastructure, analytics, and digital growth services.
                  </p>
                  <p className="text-slate-500 text-sm sm:text-[15px]">
                    Whether you need an MVP, custom software platform, BI dashboard, automation system, or ongoing technical support, our team delivers production-ready solutions that create measurable business outcomes.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
                >
                  <Link
                    href="/contact"
                    className="h-[54px] px-8 rounded-2xl bg-gradient-to-r from-[#0f3d5c] via-[#118ab2] to-[#23c7a7] hover:from-[#082F49] hover:to-[#118ab2] text-white font-extrabold text-sm shadow-xl shadow-[#118ab2]/25 flex items-center justify-center gap-2.5 transition-all border border-[#23c7a7]/30 active:scale-95 group"
                  >
                    <span>Book Strategy Call</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="#services-categories"
                    className="h-[54px] px-8 rounded-2xl bg-white hover:bg-slate-50 text-[#082F49] font-bold text-sm border border-slate-200/90 shadow-xs flex items-center justify-center transition-all hover:border-[#118ab2]/40"
                  >
                    <span>Explore Services</span>
                  </a>
                </motion.div>

                {/* Trust Indicators Below CTA with Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.4 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Clock className="w-4 h-4 text-[#118ab2] flex-shrink-0" />
                    <span>30-Min Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>NDA Signed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Zap className="w-4 h-4 text-[#23c7a7] flex-shrink-0" />
                    <span>2–4 Week Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Users className="w-4 h-4 text-[#0f3d5c] flex-shrink-0" />
                    <span>Dedicated Team</span>
                  </div>
                </motion.div>
              </div>

              {/* ========================================================================= */}
              {/* RIGHT SIDE (Animated Visual Ecosystem Illustration) */}
              {/* ========================================================================= */}
              <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center py-6 sm:py-10">
                {/* Ambient Radial Glow behind illustration */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#118ab2]/15 via-[#23c7a7]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                {/* Main Illustration Canvas */}
                <div className="relative w-full max-w-[540px] aspect-[4/3] flex items-center justify-center">
                  {/* Outer Circuit Halo / Glow Ring */}
                  <div className="absolute inset-4 rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-white/40 via-cyan-50/20 to-teal-50/30 backdrop-blur-xs -z-0" />

                  {/* CENTER: Floating Laptop Mockup */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-[78%] max-w-[380px] rounded-2xl bg-[#082F49] p-3 shadow-2xl shadow-[#082F49]/30 border border-slate-700/60"
                  >
                    {/* Screen Header Bar */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/60 text-[10px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-1 font-mono text-slate-300 font-semibold flex items-center gap-1">
                          <Code2 className="w-3 h-3 text-[#23c7a7]" /> app.tsx
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-400 font-bold">
                        LIVE : READY
                      </span>
                    </div>

                    {/* IDE / Terminal Content */}
                    <div className="rounded-lg bg-[#041D27] p-3 font-mono text-[11px] leading-relaxed text-slate-300 space-y-1.5 shadow-inner">
                      <div className="text-cyan-300 flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-[#23c7a7]" />
                        <span>codeplaced deploy --stack=full</span>
                      </div>
                      <div className="text-slate-400 pl-4 text-[10px]">
                        ✓ AI Pipeline: Active (sub-18ms) <br />
                        ✓ Lakehouse ETL: Snowflake Connected <br />
                        ✓ Cloud Cluster: AWS EKS Autoscaling <br />
                        ✓ UI Framework: Next.js 15 Ready
                      </div>
                      <div className="pt-1 flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Production verified in 14 days</span>
                      </div>
                    </div>

                    {/* Laptop Keyboard Base */}
                    <div className="h-3 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-xl mt-2 flex items-center justify-center">
                      <div className="w-12 h-1 bg-slate-500 rounded-full" />
                    </div>
                  </motion.div>

                  {/* ========================================================================= */}
                  {/* 6 FLOATING SERVICE PILLS (Glassmorphism Cards with Micro-Animations) */}
                  {/* ========================================================================= */}

                  {/* 1. TOP LEFT: AI & ML */}
                  <motion.div
                    animate={{ y: [0, -8, 0], x: [0, -2, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    className="absolute -top-2 left-0 sm:left-2 z-20 px-3.5 py-2 rounded-2xl bg-white/85 backdrop-blur-[16px] border border-white/60 shadow-xl shadow-slate-900/10 flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#0f3d5c] to-[#118ab2] text-white flex items-center justify-center shadow-xs">
                      <BrainCircuit className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#082F49]">AI & ML</div>
                      <div className="text-[9px] font-semibold text-[#118ab2]">LLM & Agents</div>
                    </div>
                  </motion.div>

                  {/* 2. LEFT CENTER: Web Apps */}
                  <motion.div
                    animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-6 z-20 px-3.5 py-2 rounded-2xl bg-white/85 backdrop-blur-[16px] border border-white/60 shadow-xl shadow-slate-900/10 flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shadow-xs">
                      <AppWindow className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#082F49]">Web Apps</div>
                      <div className="text-[9px] font-semibold text-emerald-600">Next.js & SaaS</div>
                    </div>
                  </motion.div>

                  {/* 3. BOTTOM LEFT: Data Analytics */}
                  <motion.div
                    animate={{ y: [0, -6, 0], x: [0, -2, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                    className="absolute -bottom-2 left-2 sm:left-4 z-20 px-3.5 py-2 rounded-2xl bg-white/85 backdrop-blur-[16px] border border-white/60 shadow-xl shadow-slate-900/10 flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-xl bg-sky-50 text-[#118ab2] border border-sky-200/60 flex items-center justify-center shadow-xs">
                      <Database className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#082F49]">Data Analytics</div>
                      <div className="text-[9px] font-semibold text-[#118ab2]">Lakehouses & BI</div>
                    </div>
                  </motion.div>

                  {/* 4. TOP RIGHT: Cloud */}
                  <motion.div
                    animate={{ y: [0, -7, 0], x: [0, 2, 0] }}
                    transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute -top-2 right-0 sm:right-2 z-20 px-3.5 py-2 rounded-2xl bg-white/85 backdrop-blur-[16px] border border-white/60 shadow-xl shadow-slate-900/10 flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#118ab2] to-[#23c7a7] text-white flex items-center justify-center shadow-xs">
                      <Cloud className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#082F49]">Cloud</div>
                      <div className="text-[9px] font-semibold text-[#23c7a7]">AWS, GCP, Azure</div>
                    </div>
                  </motion.div>

                  {/* 5. MIDDLE RIGHT: Mobile Apps */}
                  <motion.div
                    animate={{ y: [0, 7, 0], x: [0, 3, 0] }}
                    transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-6 z-20 px-3.5 py-2 rounded-2xl bg-white/85 backdrop-blur-[16px] border border-white/60 shadow-xl shadow-slate-900/10 flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-xl bg-teal-50 text-[#23c7a7] border border-teal-200/60 flex items-center justify-center shadow-xs">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#082F49]">Mobile Apps</div>
                      <div className="text-[9px] font-semibold text-[#0f3d5c]">iOS & Android</div>
                    </div>
                  </motion.div>

                  {/* 6. BOTTOM RIGHT: Enterprise Solutions */}
                  <motion.div
                    animate={{ y: [0, -8, 0], x: [0, 2, 0] }}
                    transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
                    className="absolute -bottom-2 right-2 sm:right-4 z-20 px-3.5 py-2 rounded-2xl bg-white/85 backdrop-blur-[16px] border border-white/60 shadow-xl shadow-slate-900/10 flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-xl bg-slate-900 text-cyan-300 flex items-center justify-center shadow-xs">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#082F49]">Enterprise Solutions</div>
                      <div className="text-[9px] font-semibold text-slate-500">Core Integrations</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* CLIENT LOGOS STRIP (Immediately Below Hero) */}
            {/* ========================================================================= */}
            <div className="mt-14 pt-8 border-t border-slate-200/70 text-center">
              <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-5">
                Trusted by modern businesses using world-class technology
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8">
                {[
                  "AWS",
                  "Google Cloud",
                  "Microsoft Azure",
                  "OpenAI",
                  "Snowflake",
                  "Databricks",
                  "Power BI",
                ].map((logo) => (
                  <div
                    key={logo}
                    className="px-4 py-2 rounded-xl bg-white/80 hover:bg-white border border-slate-200 text-slate-500 hover:text-[#082F49] hover:border-[#118ab2]/40 text-xs sm:text-sm font-bold tracking-tight shadow-2xs transition-all duration-200"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. OUR SERVICES DESIGNED AROUND YOUR BUSINESS GOALS (6 Categories) */}
        {/* ========================================================================= */}
        <section id="services-categories" className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              FULL-SPECTRUM CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Our Services Designed Around Your Business Goals
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              From product strategy and application development to AI automation, analytics, cloud engineering, and enterprise modernization, we provide end-to-end technology services under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIX_CORE_SERVICES.map((service, idx) => {
              const ServiceIcon = service.icon;
              const isExpanded = expandedServiceId === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#0B4F6C]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-13 h-13 rounded-2xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors shadow-2xs">
                        <ServiceIcon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-[#0E7490] bg-[#ECFEFF] px-2.5 py-1 rounded-full border border-[#0B4F6C]/15">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title + Tagline */}
                    <div>
                      <h3 className="text-xl font-black text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Sub-Services Checklist */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Capabilities & Deliverables:
                      </span>
                      <ul className="space-y-1.5">
                        {service.subServices.map((sub) => (
                          <li key={sub} className="text-xs text-slate-700 font-medium flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Tech Stack Pills */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Key Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#F8FAFC] border border-slate-200 text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={service.href}
                      className="text-xs font-bold text-[#0B4F6C] hover:text-[#0E7490] inline-flex items-center gap-1"
                    >
                      <span>Explore Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="px-3.5 py-1.5 rounded-lg bg-[#0B4F6C] hover:bg-[#0E7490] text-white text-xs font-bold transition-all shadow-2xs"
                    >
                      Scope Pod
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WHEN TO USE WHICH SOLUTION (Decision Support Table) */}
        {/* ========================================================================= */}
        <section id="decision-matrix" className="section-py bg-white border-y border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                STRATEGIC DECISION MATRIX
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                When To Use Which Solution
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Compare business problems, recommended services, delivery timelines, and expected outcomes to pick the right architecture for your team.
              </p>
            </div>

            {/* Decision Table */}
            <div className="overflow-x-auto">
              <div className="min-w-[850px] rounded-[24px] border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="grid grid-cols-12 bg-[#082F49] text-white text-xs font-bold uppercase tracking-wider py-4 px-6">
                  <div className="col-span-3">Business Problem</div>
                  <div className="col-span-3">Recommended Service</div>
                  <div className="col-span-2">Timeline</div>
                  <div className="col-span-4">Expected Outcome</div>
                </div>

                <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {DECISION_MATRIX.map((row) => (
                    <div
                      key={row.problem}
                      className="grid grid-cols-12 items-center p-6 hover:bg-[#F8FAFC] transition-colors gap-4"
                    >
                      <div className="col-span-3 space-y-1">
                        <span className="font-black text-[#082F49] text-base block">
                          {row.problem}
                        </span>
                        <p className="text-[11px] text-slate-500 leading-tight">{row.desc}</p>
                      </div>

                      <div className="col-span-3">
                        <Link
                          href={row.href}
                          className="font-bold text-[#0B4F6C] hover:text-[#0E7490] inline-flex items-center gap-1 group text-sm"
                        >
                          <span>{row.service}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>

                      <div className="col-span-2">
                        <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block text-xs">
                          {row.timeline}
                        </span>
                      </div>

                      <div className="col-span-4 flex items-center justify-between gap-2">
                        <span className="font-bold text-[#082F49]">{row.outcome}</span>
                        <Link
                          href="/contact"
                          className="px-3 py-1.5 rounded-lg bg-[#0B4F6C] hover:bg-[#0E7490] text-white text-xs font-bold transition-all shadow-2xs whitespace-nowrap"
                        >
                          Scope
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
        {/* 4. DELIVERY METHODOLOGY (How We Deliver Production Systems) */}
        {/* ========================================================================= */}
        <section id="methodology" className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              EXECUTION METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              How We Deliver Production Systems
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our 5-stage delivery rhythm eliminates consulting bureaucracy, delivering enterprise-grade software in 2–4 calendar weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {DELIVERY_METHODOLOGY.map((m) => {
              const MIcon = m.icon;
              return (
                <div
                  key={m.step}
                  className="p-6 rounded-[24px] bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0B4F6C]/40 transition-all duration-300 flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#0B4F6C] bg-[#ECFEFF] px-2.5 py-0.5 rounded-md border border-[#0B4F6C]/20">
                        Stage {m.step}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {m.timeline}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                      <MIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-[#082F49]">{m.title}</h3>

                    <ul className="space-y-1 pt-1 text-xs text-slate-600">
                      {m.items.map((it) => (
                        <li key={it} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#0E7490]" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                    {m.outcome}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. ENTERPRISE SECURITY BUILT IN (Dark Gradient Section) */}
        {/* ========================================================================= */}
        <section id="security" className="section-py bg-gradient-to-r from-[#052B45] via-[#083A5B] to-[#0D6E8A] text-white">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                INSTITUTIONAL TRUST & SAFETY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Enterprise Security Built In
              </h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
                Engineered for strict regulatory compliance, zero data leakage, and air-gapped private VPC deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SECURITY_CARDS.map((sec) => {
                const SecIcon = sec.icon;
                return (
                  <div
                    key={sec.title}
                    className="p-6 rounded-[24px] bg-white/[0.06] border border-white/10 space-y-3 hover:border-cyan-400/40 transition-colors backdrop-blur-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0B4F6C] text-cyan-300 flex items-center justify-center font-bold border border-white/10">
                      <SecIcon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{sec.title}</h4>
                      <span className="text-[11px] font-semibold text-cyan-200">{sec.subtitle}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{sec.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. INDUSTRIES SECTION */}
        {/* ========================================================================= */}
        <section id="industries" className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              DOMAIN SPECIALIZATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Engineered for Mission-Critical Industries
            </h2>
            <p className="text-slate-600 text-base">
              Every vertical has unique compliance constraints and data schemas. We bring battle-tested industry blueprints to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_SHOWCASE.map((ind) => {
              const IndIcon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0B4F6C]/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold">
                        <IndIcon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        {ind.compliance}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#082F49]">{ind.name}</h4>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Typical Use Cases:
                      </span>
                      {ind.useCases.map((uc) => (
                        <div key={uc} className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                          <span>{uc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Target Outcome:</div>
                    <div className="text-xs font-black text-emerald-600">{ind.outcome}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. FEATURED CLIENT OUTCOMES */}
        {/* ========================================================================= */}
        <section id="outcomes" className="section-py bg-white border-y border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                VERIFIED OUTCOMES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Featured Client Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CLIENT_OUTCOMES.map((co) => (
                <div
                  key={co.industry}
                  className="p-7 rounded-[28px] bg-[#F8FAFC] border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F6C] bg-[#ECFEFF] px-2.5 py-0.5 rounded-full border border-[#0B4F6C]/20">
                        {co.industry}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 font-mono">
                        {co.stack}
                      </span>
                    </div>

                    <div className="text-3xl sm:text-4xl font-black text-[#082F49]">
                      {co.stat}
                    </div>
                    <div className="text-xs font-bold text-[#0E7490]">{co.label}</div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                      {co.solution}
                    </p>
                  </div>

                  <Link
                    href="/case-studies"
                    className="text-xs font-bold text-[#0B4F6C] hover:text-[#0E7490] inline-flex items-center gap-1 pt-2"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. WHY COMPANIES CHOOSE CODEPLACED */}
        {/* ========================================================================= */}
        <section className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              THE CODEPLACED ADVANTAGE
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
                  className="p-8 rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0B4F6C]/40 transition-all space-y-3"
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
        </section>

        {/* ========================================================================= */}
        {/* 9. OUR PREFERRED TECHNOLOGY STACK (Immediately Above FAQ) */}
        {/* ========================================================================= */}
        <section id="tech-stack" className="section-py bg-white border-y border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                BATTLE-TESTED ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Our Preferred Technology Stack
              </h2>
              <p className="text-slate-600 text-base">
                We build on battle-tested frameworks proven for high scalability, responsive UI, sub-15ms AI inference, and 99.99% uptime.
              </p>
            </div>

            {/* Category Tab Buttons: Frontend, Backend, Mobile, Cloud & DevOps, Data & Analytics, AI & ML */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {PREFERRED_TECH_STACK.map((cat) => (
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
            {(() => {
              const activeCat =
                PREFERRED_TECH_STACK.find((c) => c.id === activeTechTab) ||
                PREFERRED_TECH_STACK[0];
              return (
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {activeCat.tools.map((t) => (
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
              );
            })()}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. LATEST INSIGHTS */}
        {/* ========================================================================= */}
        <section id="insights" className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              ENGINEERING PUBLICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Latest Insights & Research
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LATEST_INSIGHTS.map((art) => (
              <div
                key={art.title}
                className="p-7 rounded-[24px] bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-bold text-[#0B4F6C] bg-[#ECFEFF] px-2.5 py-0.5 rounded-full border border-[#0B4F6C]/20">
                      {art.category}
                    </span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#082F49] leading-snug">{art.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{art.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/blog"
                    className="text-xs font-bold text-[#0B4F6C] hover:text-[#14B8A6] inline-flex items-center gap-1.5"
                  >
                    <span>Read Publication</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. FAQ SECTION */}
        {/* ========================================================================= */}
        <section id="faq" className="section-py bg-white border-t border-slate-200/80">
          <div className="site-container max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                DIRECT ANSWERS
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
        {/* 12. FINAL HIGH-CONVERTING CTA SECTION */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-r from-[#052B45] via-[#083A5B] to-[#0D6E8A] text-white py-16 sm:py-20 text-center border-t border-slate-700">
          <div className="site-container max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Start Your 2–4 Week Engagement
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Ready to Deploy Production Systems in Weeks?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Get a principal architect review and a roadmap tailored to your business. We execute mutual NDAs upfront.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#052B45] hover:bg-[#083A5B] text-white font-bold text-sm shadow-xl transition-all border border-[#13B5EA]/30"
              >
                <span>Book Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#services-categories"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                <span>Explore Full Stack Services</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
