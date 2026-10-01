"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { BookAuditModal } from "@/components/BookAuditModal";
import { CaseStudy } from "@/types";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Mail,
  PhoneCall,
  Clock,
  CheckCircle2,
  Lock,
  Building2,
  Star,
  Quote,
  Layers,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Server,
  FileCheck2,
  Users2,
  Award,
  Zap,
  Check,
  FileText,
  ChevronRight,
  Shield,
  KeyRound,
  FileSpreadsheet,
  Workflow,
  CheckSquare,
} from "lucide-react";
import confetti from "canvas-confetti";

// Dropdown options
const PROJECT_TYPES = [
  "Data Platform",
  "AI Copilot",
  "Executive Dashboard",
  "Embedded Analytics",
  "Cloud Infrastructure",
  "Web Application",
  "Mobile Application",
  "Custom Solution",
];

const BUDGET_RANGES = [
  "< $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000+",
];

const TIMELINE_OPTIONS = [
  "Immediate (1-2 weeks)",
  "Within 1 month",
  "Q2/Q3 (1-3 months)",
  "Exploring Architectural Options",
];

// Section 2: Recognition & Trust Cards
const RECOGNITIONS = [
  {
    id: "soc2",
    badge: "SOC2 Type II Ready",
    category: "Enterprise Security Focus",
    description: "Zero-trust access policies, encrypted transport, and audited infrastructure security controls.",
    icon: ShieldCheck,
    highlight: "100% Audit Ready",
  },
  {
    id: "delivery",
    badge: "Production Delivery Excellence",
    category: "Velocity & Agility",
    description: "Battle-tested 2 to 4 week milestone execution cadence from architecture schema to production launch.",
    icon: Zap,
    highlight: "2–4 Week Guarantee",
  },
  {
    id: "ai",
    badge: "AI Engineering Expertise",
    category: "Enterprise LLM & RAG",
    description: "Low-latency vector databases, hybrid retrieval, agentic workflows, and deterministic output guardrails.",
    icon: Cpu,
    highlight: "Sub-200ms Latency",
  },
  {
    id: "cloud",
    badge: "Cloud Architecture Excellence",
    category: "Resilience & FinOps",
    description: "High-availability multi-cloud deployments across AWS, GCP, and Azure with proactive cost containment.",
    icon: Cloud,
    highlight: "99.99% Uptime SLA",
  },
  {
    id: "csat",
    badge: "Customer Satisfaction",
    category: "Client Validation",
    description: "100% client satisfaction and long-term retainer partnerships with Fortune 500 & fast-scaling startups.",
    icon: Award,
    highlight: "5.0 ★ Enterprise CSAT",
  },
];

// Section 3: Featured Client Outcomes
const OUTCOMES_DATA: (CaseStudy & { filterCategory: string })[] = [
  {
    id: "fintech-ledger",
    title: "Real-Time Ledger & Financial Analytics Engine",
    client: "Apex Financial Core",
    industry: "FinTech",
    filterCategory: "FinTech",
    tagline: "Ultra-Reliable Multi-Entity Reconciliation & Treasury Platform",
    description: "Architected a dual-entry distributed ledger and real-time reconciliation engine processing millions of transactions with mathematical determinism.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Ledger Accuracy", value: "99.99%" },
      { label: "Daily Volume", value: "$420M+" },
      { label: "Reconciliation", value: "Sub-Second" },
    ],
    technologies: ["PostgreSQL", "Kafka", "Node.js", "Redis", "AWS Fargate"],
    challenge: "Disparate payment gateways created end-of-month reconciliation discrepancies requiring 120+ manual accounting hours per cycle.",
    solution: "Engineered an immutable, event-sourced ledger lakehouse with automated anomaly detection and instant audit export.",
    impact: [
      "Achieved 99.99% automated ledger accuracy across 18 banking partners",
      "Eliminated 95% of manual monthly reconciliation overhead",
      "Passed SOC2 Type II financial security audit with zero deficiencies",
    ],
  },
  {
    id: "healthcare-ai",
    title: "Clinical Triage & Patient Intelligence Lakehouse",
    client: "MedHealth Digital Health",
    industry: "Healthcare",
    filterCategory: "Healthcare",
    tagline: "HIPAA-Compliant AI Copilot & Real-Time EHR Ingestion",
    description: "Built an agentic clinical workflow that ingests voice, scans, and EHR records, extracting vital metrics into an encrypted vector lakehouse.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Intake Velocity", value: "4.8x Faster" },
      { label: "Compliance", value: "100% HIPAA" },
      { label: "Patients", value: "450k+/mo" },
    ],
    technologies: ["FastAPI", "OpenAI GPT-4o", "PostgreSQL", "FHIR / HL7", "AWS HIPAA Shield"],
    challenge: "Fragmented EHR silos and manual intake forms led to 45-minute average patient wait times and severe clinician burnout.",
    solution: "Constructed an automated triage assistant with clinician-in-the-loop review, direct EHR sync, and zero data leakage.",
    impact: [
      "Reduced triage wait times from 45 minutes down to 7.2 minutes",
      "Zero compliance incidents across 1.2M secure patient interactions",
      "Saved over 18,000 clinical staff hours annually",
    ],
  },
  {
    id: "logistics-telemetry",
    title: "Global Fleet Telemetry & Predictive Maintenance",
    client: "Veloce Mobility",
    industry: "Logistics",
    filterCategory: "Logistics",
    tagline: "High-Throughput IoT Stream Processing & Fleet Telemetry",
    description: "Re-architected real-time fleet sensor stream processing to detect thermal and mechanical faults before catastrophic breakdowns occur.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Downtime Reduction", value: "24% Saved" },
      { label: "Daily Events", value: "1.2B Events" },
      { label: "Query Latency", value: "< 35ms" },
    ],
    technologies: ["Apache Kafka", "ClickHouse", "React", "TypeScript", "Kubernetes"],
    challenge: "Legacy databases collapsed during peak hours from 80,000 IoT commercial vehicles, causing blind spots during critical breakdowns.",
    solution: "Migrated to ClickHouse columnar storage with real-time Kafka event streaming and an executive command center.",
    impact: [
      "24% fleet downtime reduction within 90 days of deployment",
      "Saved $3.2M in preventable drivetrain towing and repair costs",
      "Command center loads 100M data points in under 200ms",
    ],
  },
  {
    id: "education-adaptive",
    title: "Adaptive Learning Engine & Student Analytics",
    client: "LearnSphere Global",
    industry: "Education",
    filterCategory: "Education",
    tagline: "AI-Powered Mastery Learning & Dynamic Curriculum Delivery",
    description: "Built an adaptive curriculum AI engine that personalizes lesson difficulty and interactive exercises based on real-time comprehension telemetry.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Course Completion", value: "83.6% Rate" },
      { label: "Engagement Lift", value: "3.4x Higher" },
      { label: "Active Learners", value: "850,000+" },
    ],
    technologies: ["Next.js 15", "Python", "FastAPI", "Pinecone", "GCP Vertex AI"],
    challenge: "Drop-off rates on asynchronous technical courses hovered at 68% due to one-size-fits-all rigid instructional pacing.",
    solution: "Engineered an intelligent tutor agent that dynamically scaffolds complex concepts and generates contextual practice challenges.",
    impact: [
      "Boosted course completion rates from 32% to 83.6%",
      "Increased daily active session duration by 140%",
      "Deployed across 40+ universities worldwide in 5 weeks",
    ],
  },
  {
    id: "saas-legal",
    title: "Enterprise Document AI & Contract Risk Analysis",
    client: "OmniJuris Corp",
    industry: "SaaS",
    filterCategory: "SaaS",
    tagline: "Multi-Agent Semantic Intelligence & Automated Risk Redlining",
    description: "Transformed millions of unstructured contracts, NDAs, and regulatory filings into an instant semantic query engine with citation-backed legal risk analysis.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Review Time Saved", value: "82%" },
      { label: "Annual Cost Savings", value: "$1.4M" },
      { label: "Docs Processed", value: "1.2M+" },
    ],
    technologies: ["Anthropic Claude 3.5", "Snowflake", "dbt", "Qdrant", "Docker"],
    challenge: "Senior attorneys were spending over 30 hours per week manually reviewing 200+ page commercial agreements.",
    solution: "Designed a multi-agent RAG pipeline with clause extraction, redline suggestions, and deterministic citations.",
    impact: [
      "Contract turnaround dropped from 4 business days to under 45 minutes",
      "Eliminated 100% of missed high-severity indemnity clauses in trial sets",
      "Enterprise roll-out to 450+ corporate legal counsels within 6 weeks",
    ],
  },
  {
    id: "retail-unified",
    title: "Unified Omnichannel Attribution & Inventory Hub",
    client: "OmniRetail Direct",
    industry: "Retail",
    filterCategory: "Retail",
    tagline: "Real-Time Multi-Store Inventory & CAC Attribution",
    description: "Consolidated online e-commerce platforms, retail POS terminals, and ad platform attribution into a sub-second executive intelligence command center.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "CAC Reduction", value: "14% Blended" },
      { label: "Sync Latency", value: "< 1.5s" },
      { label: "SKU Catalog", value: "2.4M items" },
    ],
    technologies: ["React", "Go", "PostgreSQL", "Kafka", "Snowflake"],
    challenge: "Inventory stockouts and distorted ad attribution led to wasted ad spend and poor customer fulfillment.",
    solution: "Created unified data models linking Stripe, Shopify, POS registers, and Meta Ads for real-time gross margin transparency.",
    impact: [
      "Live within 18 calendar days with unified attribution",
      "14% immediate reduction in blended customer CAC",
      "Zero inventory discrepancies during holiday peak volumes",
    ],
  },
  {
    id: "mfg-automation",
    title: "Industrial IoT Telemetry & Assembly Automation",
    client: "Nexus Industrial Systems",
    industry: "Manufacturing",
    filterCategory: "Manufacturing",
    tagline: "Edge-to-Cloud Factory Intelligence & Predictive Quality",
    description: "Connected 12 manufacturing facilities with edge gateway streaming for real-time vibration, thermal, and defect detection.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Bottleneck Reduction", value: "38%" },
      { label: "Defect Catch Rate", value: "99.8%" },
      { label: "Energy Saved", value: "22%" },
    ],
    technologies: ["MQTT", "Rust", "TimescaleDB", "AWS IoT Core", "Grafana"],
    challenge: "Unplanned machinery outages and batch quality variations caused millions in scrap waste each quarter.",
    solution: "Deployed low-latency edge nodes and machine learning anomaly detectors directly onto the factory floor.",
    impact: [
      "Reduced assembly bottlenecks by 38% across 12 facilities",
      "Prevented 4 major catastrophic turbine failures",
      "Achieved payback on engineering investment within 75 days",
    ],
  },
];

// Section 5: Technology Ecosystem Data
const TECH_ECOSYSTEM = {
  Frontend: [
    { name: "React", level: "Core Standard", description: "Modern modular UI architecture with component reusability" },
    { name: "Next.js", level: "Production", description: "Server components, hybrid caching & sub-second page delivery" },
    { name: "TypeScript", level: "Strict Standard", description: "Type-safe runtime safety for mission-critical apps" },
    { name: "Angular", level: "Enterprise Tier", description: "Structured enterprise portals with strict architectural boundaries" },
  ],
  Backend: [
    { name: "Node.js", level: "Event Driven", description: "Ultra-fast asynchronous microservices & real-time APIs" },
    { name: "Java", level: "High Concurrency", description: "Resilient enterprise backbones and transactional throughput" },
    { name: "Spring Boot", level: "Enterprise Standard", description: "Hardened microservice frameworks with robust dependency injection" },
    { name: "Python", level: "AI & Pipeline Core", description: "Vector transformations, machine learning & data orchestration" },
    { name: "FastAPI", level: "High Throughput", description: "Async REST APIs with automatic OpenAPI schema validation" },
    { name: "NestJS", level: "Architecture First", description: "Scalable TypeScript microservices with modular dependency design" },
  ],
  Mobile: [
    { name: "Flutter", level: "Cross Platform", description: "Native 60fps performance across iOS and Android from a single codebase" },
    { name: "React Native", level: "Native Bridge", description: "Ecosystem-aligned mobile applications with native device integrations" },
  ],
  Cloud: [
    { name: "AWS", level: "Advanced Tier", description: "EKS, Lambda, SQS, RDS, and enterprise security guardrails" },
    { name: "Azure", level: "Enterprise Cloud", description: "Azure OpenAI, Cosmos DB, and active directory federations" },
    { name: "GCP", level: "Data & AI Hub", description: "Vertex AI, BigQuery, and Google Kubernetes Engine (GKE)" },
    { name: "Docker", level: "Container Standard", description: "Reproducible microservice containerization for every environment" },
    { name: "Kubernetes", level: "Orchestration", description: "Automated container autoscaling, self-healing, and traffic routing" },
    { name: "Terraform", level: "IaC Standard", description: "Declarative infrastructure as code with automated CI/CD audits" },
  ],
  Data: [
    { name: "BigQuery", level: "Serverless SQL", description: "Petabyte-scale analytical queries with sub-second response times" },
    { name: "Snowflake", level: "Enterprise Lakehouse", description: "Elastic data warehousing with zero-copy cloning and data sharing" },
    { name: "dbt", level: "Transformation Layer", description: "Modular SQL transformations, automated data testing, and lineage" },
    { name: "Power BI", level: "Executive BI", description: "Enterprise dashboarding with role-based row-level security" },
    { name: "Looker Studio", level: "Self-Service", description: "Live semantic models and interactive team reporting" },
  ],
  AI: [
    { name: "OpenAI", level: "LLM Orchestration", description: "GPT-4o, embeddings, function calling & enterprise fine-tuning" },
    { name: "Anthropic", level: "High-Context AI", description: "Claude 3.5 Sonnet for complex reasoning, code & legal analysis" },
    { name: "LangChain", level: "Agent Framework", description: "Multi-step tool integration, structured outputs & stateful agents" },
    { name: "LlamaIndex", level: "RAG Pipeline", description: "Hierarchical vector indexing and deterministic document retrieval" },
    { name: "Vector Databases", level: "Sub-20ms Search", description: "Pinecone, Qdrant, Milvus & pgvector for semantic recall" },
  ],
};

// Section 6: Client Testimonials
const TESTIMONIALS_LIST = [
  {
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Global Logistics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote: "CodePlaced delivered what three previous consulting agencies couldn't in 18 months: a bulletproof, real-time analytics lakehouse in just 3 weeks. Our executive team now makes daily decisions with 100% confidence.",
    rating: 5,
    highlight: "12x faster query speed across 40TB dataset",
  },
  {
    name: "Dr. Elena Rostova",
    role: "VP of Product Engineering",
    company: "BioSynaptics AI",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    quote: "The CodePlaced engineering team feels like an elite in-house Special Ops squad. Their mastery of agentic workflows and LLM latency optimization cut our customer onboarding cycle by 70%. Simply world-class.",
    rating: 5,
    highlight: "Cut customer onboarding cycle by 70%",
  },
  {
    name: "David H. Steinberg",
    role: "Founder & Managing Director",
    company: "CapitalFlow FinTech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote: "Working with CodePlaced was the best technical investment our startup made. They audited our schemas, killed redundant cloud spend, and handed us an asset that directly impressed our Series B leads.",
    rating: 5,
    highlight: "$340,000 annualized cloud cost reduction",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Digital Operations",
    company: "OmniRetail Direct",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    quote: "Their 'delivery in weeks' promise isn't marketing fluff. Our unified growth dashboard was live within 18 calendar days, uniting our Meta, Google, and Stripe data into a single source of truth.",
    rating: 5,
    highlight: "Live in 18 calendar days with unified attribution",
  },
];

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    description: "",
    budget: BUDGET_RANGES[1],
    timeline: TIMELINE_OPTIONS[0],
    agreePrivacy: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Modals & Active Items
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");
  const [selectedTechTab, setSelectedTechTab] = useState<keyof typeof TECH_ECOSYSTEM>("AI");

  // Form reference for quick scroll
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.agreePrivacy) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0B4F6C", "#0E7490", "#14B8A6", "#38BDF8", "#10B981"],
        });
      } catch {
        // Fallback safely
      }
    }, 800);
  };

  // Filtered case studies
  const filteredOutcomes =
    activeCategoryFilter === "All"
      ? OUTCOMES_DATA.slice(0, 3)
      : OUTCOMES_DATA.filter((item) => item.filterCategory === activeCategoryFilter);

  const filterTabs = [
    "All",
    "Healthcare",
    "FinTech",
    "SaaS",
    "Logistics",
    "Retail",
    "Manufacturing",
    "Education",
  ];

  return (
    <div className="bg-white text-[#0F172A]">
      {/* ==================================================== */}
      {/* SECTION 1 — HERO + CONTACT FORM (Two-Column Layout) */}
      {/* ==================================================== */}
      <section
        ref={formRef}
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF]/20 to-white border-b border-slate-200/80 overflow-hidden"
      >
          {/* Ambient subtle glow background */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#0B4F6C]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-[#14B8A6]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="site-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* LEFT SIDE: Architecture Consultation & Value Proposition */}
              <div className="lg:col-span-6 space-y-8">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" />
                  <span>ARCHITECTURE CONSULTATION</span>
                </div>

                {/* Headline */}
                <h1 className="text-[36px] sm:text-[48px] lg:text-[54px] font-black tracking-tight text-[#082F49] leading-[1.12]">
                  Build Production-Ready <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                    Data, AI & Software Systems
                  </span>
                </h1>

                {/* Subheading */}
                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    Speak directly with senior engineers who have delivered production-grade analytics
                    platforms, AI copilots, cloud infrastructure, executive dashboards, and enterprise
                    software systems.
                  </p>
                  <p className="text-slate-600 font-medium">
                    Whether you&apos;re modernizing operations, scaling data pipelines, building AI
                    workflows, or launching a new platform, we help teams move from idea to deployment in
                    weeks.
                  </p>
                </div>

                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <a
                    href="mailto:hello@codeplaced.com"
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0B4F6C]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col items-start group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#ECFEFF] text-[#0B4F6C] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors mt-0.5 truncate max-w-full">
                      hello@codeplaced.com
                    </span>
                  </a>

                  <button
                    onClick={() => setIsBookModalOpen(true)}
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0B4F6C]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col items-start text-left group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#ECFEFF] text-[#0B4F6C] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Live Scheduling
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors mt-0.5">
                      Schedule Review
                    </span>
                  </button>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                      <Lock className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Confidentiality
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#082F49] mt-0.5">
                      NDA Available Upon Request
                    </span>
                  </div>
                </div>

                {/* Testimonial Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#082F49] to-[#0B4F6C] text-white shadow-xl shadow-[#082F49]/10 relative overflow-hidden">
                  <Quote className="w-16 h-16 text-white/10 absolute top-4 right-4 pointer-events-none" />

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <blockquote className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed mb-4">
                    &ldquo;CodePlaced transformed fragmented operations into a centralized analytics system
                    that improved decision-making and reduced manual effort across teams.&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-between pt-3 border-t border-white/15">
                    <div>
                      <div className="font-bold text-sm text-white">VP Operations</div>
                      <div className="text-xs text-cyan-300">Enterprise Client</div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/15 text-cyan-200 border border-white/20">
                      Verified Client
                    </span>
                  </div>
                </div>

                {/* Below Testimonial: Trusted Logos Row */}
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                    Integrated Across Leading Enterprise Ecosystems
                  </div>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    {["AWS", "Google Cloud", "Microsoft Azure", "OpenAI", "Snowflake", "Databricks"].map(
                      (logo) => (
                        <span
                          key={logo}
                          className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold tracking-tight shadow-2xs"
                        >
                          {logo}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Enterprise Lead Form */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl shadow-slate-900/10 relative">
                  {/* Card Header */}
                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <h2 className="text-2xl font-black text-[#082F49] tracking-tight">
                      Book an Architecture Review
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Direct consultation with a Principal Engineer. Zero sales pressure.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-10 text-center space-y-5"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                      </div>

                      <h3 className="text-2xl font-black text-[#082F49]">
                        Architecture Review Booked!
                      </h3>

                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#082F49]">{formData.firstName}</strong>. Our senior
                        engineering leadership has received your inquiry and will review your technical
                        requirements.
                      </p>

                      <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-left text-xs text-slate-600 space-y-1.5 max-w-sm mx-auto">
                        <div>
                          <strong className="text-[#082F49]">Work Email:</strong> {formData.email}
                        </div>
                        <div>
                          <strong className="text-[#082F49]">Project Type:</strong> {formData.projectType}
                        </div>
                        <div>
                          <strong className="text-[#082F49]">Timeline:</strong> {formData.timeline}
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                              firstName: "",
                              lastName: "",
                              company: "",
                              email: "",
                              phone: "",
                              projectType: PROJECT_TYPES[0],
                              description: "",
                              budget: BUDGET_RANGES[1],
                              timeline: TIMELINE_OPTIONS[0],
                              agreePrivacy: true,
                            });
                          }}
                          className="px-6 py-2.5 rounded-xl bg-[#082F49] hover:bg-[#0B4F6C] text-white text-xs font-bold transition-all"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {/* First Name / Last Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            First Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Alex"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({ ...formData, firstName: e.target.value })
                            }
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/20 focus:border-[#0B4F6C] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            placeholder="Mercer"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({ ...formData, lastName: e.target.value })
                            }
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/20 focus:border-[#0B4F6C] transition-all"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme Enterprise"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/20 focus:border-[#0B4F6C] transition-all"
                        />
                      </div>

                      {/* Work Email / Phone Number */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Work Email <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/20 focus:border-[#0B4F6C] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/20 focus:border-[#0B4F6C] transition-all"
                          />
                        </div>
                      </div>

                      {/* Project Type Dropdown */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Project Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/20 focus:border-[#0B4F6C] bg-white transition-all"
                        >
                          {PROJECT_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Project Description */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Project Description
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe your objectives, data scale, timeline, or current technical stack..."
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/20 focus:border-[#0B4F6C] transition-all resize-none"
                        />
                      </div>

                      {/* Budget Range & Timeline Dropdowns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Budget Range
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/20 focus:border-[#0B4F6C] bg-white transition-all"
                          >
                            {BUDGET_RANGES.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Timeline
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) =>
                              setFormData({ ...formData, timeline: e.target.value })
                            }
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/20 focus:border-[#0B4F6C] bg-white transition-all"
                          >
                            {TIMELINE_OPTIONS.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Checkbox: Privacy Policy */}
                      <div className="flex items-center gap-2.5 pt-1">
                        <input
                          id="privacyCheck"
                          type="checkbox"
                          checked={formData.agreePrivacy}
                          onChange={(e) =>
                            setFormData({ ...formData, agreePrivacy: e.target.checked })
                          }
                          className="w-4 h-4 rounded border-slate-300 text-[#0B4F6C] focus:ring-[#0B4F6C]"
                        />
                        <label
                          htmlFor="privacyCheck"
                          className="text-xs text-slate-600 cursor-pointer select-none"
                        >
                          I agree to the Privacy Policy and consent to principal engineer contact.
                        </label>
                      </div>

                      {/* Primary CTA */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting || !formData.agreePrivacy}
                          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0B4F6C] to-[#0E7490] hover:from-[#082F49] hover:to-[#0B4F6C] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#0B4F6C]/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Reserving Consultation Slot...</span>
                          ) : (
                            <>
                              <span>Book Architecture Call</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                      {/* Small Note Below */}
                      <div className="text-center pt-1">
                        <p className="text-[11px] text-slate-500 font-medium flex items-center justify-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-emerald-600" />
                          Typical response time: within 1 business day
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 2 — RECOGNITION & TRUST (Dark Gradient) */}
        {/* ==================================================== */}
        <section className="section-py bg-gradient-to-b from-[#082F49] via-[#083344] to-[#041E2A] text-white relative overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#0B4F6C]/30 rounded-full blur-[120px] pointer-events-none -z-0" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-[#14B8A6]/15 rounded-full blur-[100px] pointer-events-none -z-0" />

          <div className="site-container relative z-10 text-center">
            {/* Heading & Subheading */}
            <div className="max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-sm">
                <Award className="w-3.5 h-3.5 text-[#38BDF8]" /> Verified Quality Standards
              </div>

              <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-black tracking-tight text-white leading-[1.15]">
                Recognition Built on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#14B8A6] to-[#10B981]">
                  Real Impact
                </span>
              </h2>

              <p className="text-[16px] sm:text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed">
                From startup launches to enterprise modernization initiatives, our work is recognized
                for engineering quality, delivery excellence, and measurable business outcomes.
              </p>
            </div>

            {/* Display 5 Award / Badge Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {RECOGNITIONS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md p-6 border border-white/15 hover:border-[#14B8A6]/50 shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B4F6C]/60 to-[#0E7490]/40 border border-[#38BDF8]/30 flex items-center justify-center shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7 text-[#38BDF8]" />
                      </div>

                      {/* Badge Title */}
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {item.badge}
                      </h3>

                      {/* Category */}
                      <div className="text-xs text-cyan-300 font-semibold mt-1">
                        {item.category}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Highlight Tag */}
                    <div className="mt-5 pt-3 border-t border-white/10 w-full flex items-center justify-center gap-1 text-[11px] font-bold text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{item.highlight}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 3 — FEATURED CLIENT OUTCOMES (White Section) */}
        {/* ==================================================== */}
        <section className="section-py bg-white">
          <div className="site-container">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-2xs">
                <Workflow className="w-3.5 h-3.5 text-[#0E7490]" /> Case Studies & Architecture
              </div>

              <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-black text-[#082F49] tracking-tight">
                Featured Client Outcomes
              </h2>

              <p className="text-lg text-slate-600 font-medium">
                Real systems. Real business impact.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
                {filterTabs.map((tab) => {
                  const isActive = activeCategoryFilter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveCategoryFilter(tab)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-[#0B4F6C] text-white shadow-md shadow-[#0B4F6C]/20 scale-105"
                          : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Display Case Study Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              <AnimatePresence mode="popLayout">
                {filteredOutcomes.map((study) => (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 hover:border-[#0B4F6C]/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div>
                      {/* Image + Industry Badge */}
                      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-[#082F49] shadow-sm">
                          {study.industry}
                        </span>

                        <div className="absolute bottom-3 left-4 right-4 text-white">
                          <span className="text-xs uppercase tracking-wider font-semibold text-cyan-300">
                            {study.client}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6 space-y-4">
                        <h3 className="text-lg font-black text-[#082F49] group-hover:text-[#0B4F6C] transition-colors line-clamp-2">
                          {study.title}
                        </h3>

                        {/* Challenge & Solution */}
                        <div className="space-y-2 text-xs text-slate-600">
                          <div>
                            <strong className="text-slate-800 font-bold block mb-0.5">
                              Challenge:
                            </strong>
                            <p className="line-clamp-2 text-slate-500">{study.challenge}</p>
                          </div>
                          <div>
                            <strong className="text-slate-800 font-bold block mb-0.5">
                              Solution:
                            </strong>
                            <p className="line-clamp-2 text-slate-500">{study.solution}</p>
                          </div>
                        </div>

                        {/* Metric Highlights Pill */}
                        <div className="pt-2">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Key Results
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {study.metrics.slice(0, 2).map((metric, i) => (
                              <div
                                key={i}
                                className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-100"
                              >
                                <div className="text-xs text-slate-400 font-medium">
                                  {metric.label}
                                </div>
                                <div className="text-sm font-extrabold text-[#0B4F6C]">
                                  {metric.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card CTA */}
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => setSelectedCaseStudy(study)}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#F8FAFC] group-hover:bg-[#0B4F6C] group-hover:text-white text-[#0B4F6C] text-xs font-bold border border-slate-200 group-hover:border-[#0B4F6C] transition-all flex items-center justify-center gap-2"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 4 — PROVEN RESULTS (Dark Gradient Metrics) */}
        {/* ==================================================== */}
        <section className="py-20 bg-gradient-to-b from-[#082F49] via-[#083344] to-[#041d27] text-white relative overflow-hidden">
          <div className="site-container relative z-10 text-center">
            {/* Heading */}
            <div className="max-w-2xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Empirical Track Record
              </div>
              <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] font-black tracking-tight text-white">
                Proven Results. Delivered at Scale.
              </h2>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 pb-14 border-b border-white/10">
              {[
                { value: "250+", label: "Systems Delivered" },
                { value: "150+", label: "Enterprise Integrations" },
                { value: "1,200+", label: "Automated Workflows" },
                { value: "18+", label: "Industries Served" },
                { value: "250M+", label: "Records Processed Monthly" },
              ].map((m, idx) => (
                <div
                  key={idx}
                  className={`${
                    idx === 4 ? "col-span-2 md:col-span-1" : ""
                  } p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xs`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#14B8A6] mb-2 tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-300">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Below Metrics: Partner Logos */}
            <div className="pt-10">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
                Enterprise Cloud & AI Partners
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-slate-300">
                {[
                  "AWS",
                  "Azure",
                  "Google Cloud",
                  "OpenAI",
                  "Anthropic",
                  "Snowflake",
                  "Databricks",
                ].map((partner) => (
                  <div
                    key={partner}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm font-bold tracking-tight text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 5 — TECHNOLOGY ECOSYSTEM (Light Background) */}
        {/* ==================================================== */}
        <section className="section-py bg-[#F8FAFC]">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* LEFT Column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-2xs">
                  <Cpu className="w-3.5 h-3.5 text-[#0E7490]" /> Modern Frameworks & Stacks
                </div>

                <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-[#082F49] tracking-tight leading-[1.15]">
                  Technology <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                    Ecosystem
                  </span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We leverage modern frameworks, cloud platforms, analytics stacks, and AI
                  infrastructure to build scalable systems designed for enterprise reliability.
                </p>

                {/* Category Navigation Tabs */}
                <div className="space-y-2 pt-2">
                  {(Object.keys(TECH_ECOSYSTEM) as (keyof typeof TECH_ECOSYSTEM)[]).map((catKey) => {
                    const isSelected = selectedTechTab === catKey;
                    return (
                      <button
                        key={catKey}
                        onClick={() => setSelectedTechTab(catKey)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                          isSelected
                            ? "bg-[#082F49] text-white border-[#082F49] shadow-lg shadow-[#082F49]/20 ring-1 ring-[#14B8A6]"
                            : "bg-white hover:bg-slate-100/70 text-[#082F49] border-slate-200"
                        }`}
                      >
                        <span className="font-bold text-sm">{catKey}</span>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                            isSelected
                              ? "bg-white/15 text-cyan-300"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {TECH_ECOSYSTEM[catKey].length} Stacks
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F49] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0B4F6C]" /> Custom Architecture Assessment
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Have proprietary or on-prem legacy database requirements? We engineer custom adapter
                    connectors.
                  </p>
                  <button
                    onClick={scrollToForm}
                    className="mt-3 text-xs font-bold text-[#0B4F6C] hover:text-[#0E7490] inline-flex items-center gap-1"
                  >
                    Request Stack Evaluation →
                  </button>
                </div>
              </div>

              {/* RIGHT Column: Technology Grid */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTechTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-900/5 space-y-6"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <div>
                        <h3 className="text-xl font-extrabold text-[#082F49]">
                          {selectedTechTab} Architecture
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Enterprise-grade deployment standards & telemetry patterns
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20">
                        Production Tier
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {TECH_ECOSYSTEM[selectedTechTab].map((tool) => (
                        <div
                          key={tool.name}
                          className="p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#F0F9FF] border border-slate-200/90 hover:border-[#0B4F6C]/30 transition-all group"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold text-[#0B4F6C]">
                              {tool.level}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          </div>
                          <h4 className="font-bold text-sm text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                            {tool.name}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 leading-snug">
                            {tool.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Architectural Contract Preview */}
                    <div className="p-5 rounded-2xl bg-[#082F49] text-slate-200 font-mono text-xs overflow-x-auto shadow-inner">
                      <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-white/10 text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-rose-500" />
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="ml-1 text-slate-300 font-sans font-semibold">
                            deployment_contract.json
                          </span>
                        </div>
                        <span className="text-[#38BDF8] font-sans font-bold">
                          ✓ CI/CD Audited
                        </span>
                      </div>
                      <pre className="text-cyan-200 leading-relaxed">
{`{
  "stack_tier": "${selectedTechTab}",
  "concurrency_limit": "250,000 req/sec",
  "audit_compliance": "SOC2 + HIPAA Validated",
  "delivery_cycle": "2-4 Weeks Production Standard"
}`}
                      </pre>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 6 — CLIENT TESTIMONIALS (Dark Gradient) */}
        {/* ==================================================== */}
        <section className="section-py bg-gradient-to-b from-[#082F49] via-[#083344] to-[#041d27] text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none -z-0" />

          <div className="site-container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
                <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" /> Engineering Leadership Endorsements
              </div>
              <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-black tracking-tight text-white leading-tight">
                Solutions Engineered for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#14B8A6] to-[#10B981]">
                  High-Impact Outcomes
                </span>
              </h2>
            </div>

            {/* 4 Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {TESTIMONIALS_LIST.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.05] backdrop-blur-[20px] rounded-3xl p-7 border border-white/15 shadow-xl flex flex-col justify-between relative group hover:border-[#14B8A6]/40 transition-all duration-300"
                >
                  <Quote className="w-10 h-10 text-cyan-400/20 absolute top-6 right-6" />

                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Highlight Badge */}
                    <div className="mb-6 p-2.5 rounded-xl bg-[#0B4F6C]/30 border border-cyan-400/30 inline-flex items-center gap-2 text-xs text-cyan-200 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{t.highlight}</span>
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/40"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-xs text-slate-300">
                        {t.role} • <span className="text-cyan-400 font-semibold">{t.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 7 — SECURITY & COMPLIANCE (White Section) */}
        {/* ==================================================== */}
        <section className="section-py bg-white">
          <div className="site-container">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0E7490]" /> Rigorous Enterprise Governance
              </div>

              <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-black text-[#082F49] tracking-tight">
                Security, Compliance & Governance Built In
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-medium">
                Security is embedded into every solution we deliver.
              </p>
            </div>

            {/* 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Column 1: Security by Design */}
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 space-y-4 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#ECFEFF] text-[#0B4F6C] flex items-center justify-center">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#082F49]">
                  Security by Design
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {["Role-based Access", "Encryption (At Rest & In Transit)", "Audit Logging", "Network Security"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Column 2: Data Protection */}
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 space-y-4 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#082F49]">
                  Data Protection
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {["PII Controls", "Data Retention", "Backup Strategy", "Access Governance"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Column 3: Compliance */}
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 space-y-4 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#082F49]">
                  Compliance
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {["SOC2 Type II Ready", "GDPR Compliant", "HIPAA Ready", "Industry Standards"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Column 4: Governance */}
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 space-y-4 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#082F49]">
                  Governance
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {["Change Management", "Documentation", "Operational Policies", "Risk Controls"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Highlighted Certification Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#082F49] via-[#0B4F6C] to-[#082F49] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white">
                    Enterprise Security Standards
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    Every software pipeline, AI interface, and database cluster undergoes static vulnerability analysis and bilateral NDA shielding.
                  </p>
                </div>
              </div>

              <button
                onClick={scrollToForm}
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#082F49] text-xs font-extrabold uppercase tracking-wider transition-all flex-shrink-0"
              >
                Request Security Packet
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 8 — FINAL CTA (Dark Teal Gradient Section) */}
        {/* ==================================================== */}
        <section className="section-py bg-gradient-to-r from-[#0B4F6C] via-[#082F49] to-[#041D27] text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#14B8A6]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="site-container relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Start Your Next Sprint
            </div>

            <h2 className="text-[32px] sm:text-[46px] lg:text-[56px] font-black tracking-tight text-white leading-tight">
              Ready to Build Something Intelligent?
            </h2>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Let&apos;s discuss your next AI, data, cloud, or software initiative.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#38BDF8] hover:bg-[#0284C7] text-[#082F49] hover:text-white font-extrabold text-sm transition-all shadow-lg shadow-[#38BDF8]/20 flex items-center justify-center gap-2"
              >
                <span>Book Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsBookModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Schedule Consultation</span>
              </button>
            </div>

            {/* Trust Indicators Below */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2 text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>30-Min Principal Review</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NDA Signed Upfront</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Production Delivery in 2–4 Weeks</span>
              </div>
            </div>
          </div>
        </section>

        {/* Global Modals for interactive exploration */}
        <CaseStudyModal
          study={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onBookCall={() => {
            setSelectedCaseStudy(null);
            scrollToForm();
          }}
        />

        <BookAuditModal
          isOpen={isBookModalOpen}
          onClose={() => setIsBookModalOpen(false)}
        />
      </div>
  );
}
