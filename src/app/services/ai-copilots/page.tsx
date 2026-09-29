"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AppShell } from "@/components/AppShell";
import {
  BrainCircuit,
  Bot,
  Sparkles,
  Search,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Lock,
  Workflow,
  Layers,
  FileText,
  MessageSquare,
  Mic,
  Database,
  TrendingUp,
  Zap,
  Activity,
  Server,
  X,
  Maximize2,
  ChevronRight,
  SlidersHorizontal,
  Globe,
  Clock,
  ChevronDown,
} from "lucide-react";

// Trusted Brands Logos
const TRUSTED_MARQUEE = [
  { name: "OpenAI", tag: "GPT-4o Partner" },
  { name: "Anthropic", tag: "Claude 3.5 Sonnet" },
  { name: "Pinecone", tag: "Vector Index" },
  { name: "LangChain", tag: "Agent Core" },
  { name: "AWS", tag: "Bedrock & SageMaker" },
  { name: "Microsoft Azure", tag: "OpenAI Service" },
  { name: "Google Cloud", tag: "Vertex AI" },
  { name: "Qdrant", tag: "Sub-10ms Vector Engine" },
];

// 6 Value Proposition Cards
const VALUE_PROPS = [
  {
    title: "Security First",
    description: "Strict air-gapped deployments, zero data leakage, and cryptographic role-based access control.",
    icon: Lock,
    badge: "Zero Leakage",
  },
  {
    title: "Enterprise Ready",
    description: "Engineered for 99.99% uptime SLAs, high-concurrency token caching, and SOC2 / HIPAA readiness.",
    icon: ShieldCheck,
    badge: "99.99% SLA",
  },
  {
    title: "Fast Deployment",
    description: "Go from architecture discovery to live production deployment in 2–4 calendar weeks.",
    icon: Zap,
    badge: "2–4 Weeks",
  },
  {
    title: "Scalable Architecture",
    description: "Multi-tenant vector cluster tuning handling millions of embeddings with sub-15ms p99 latency.",
    icon: Layers,
    badge: "p99 < 15ms",
  },
  {
    title: "AI Governance",
    description: "Deterministic citation tracing, real-time guardrails, and automated adversarial red-teaming evals.",
    icon: Activity,
    badge: "Deterministic",
  },
  {
    title: "Continuous Support",
    description: "Proactive model drift monitoring, automated re-indexing, and dedicated Principal Engineering pods.",
    icon: Server,
    badge: "24/7 Monitored",
  },
];

// 8 Comprehensive Capabilities
interface CapabilityItem {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  features: string[];
  techStack: string[];
  benchmark: string;
  businessImpact: string;
  architectureSteps: string[];
}

const CAPABILITIES_LIST: CapabilityItem[] = [
  {
    id: "rag-systems",
    category: "RAG & Knowledge",
    title: "RAG Systems",
    shortDesc: "Enterprise knowledge retrieval with hybrid semantic chunking and zero hallucination.",
    fullDesc: "We build multi-stage Retrieval-Augmented Generation architectures that combine BM25 keyword precision with dense embedding vectors and cross-encoder re-ranking for deterministic document search.",
    icon: Search,
    features: [
      "Semantic chunking with contextual parent-child inheritance",
      "Hybrid Reciprocal Rank Fusion (RRF) matching",
      "Cross-encoder rerankers eliminating false-positive context",
      "Deterministic inline citation linking directly to PDF coordinates",
    ],
    techStack: ["Qdrant", "Pinecone", "pgvector", "Cohere Rerank", "LangChain", "FastAPI"],
    benchmark: "99.4% citation accuracy, sub-18ms vector retrieval",
    businessImpact: "Cuts research and contract analysis time by up to 82%",
    architectureSteps: [
      "Document ingestion & layout-aware OCR extraction",
      "Metadata tagging & embedding vector generation",
      "Hybrid sparse/dense similarity search with RRF scoring",
      "Cross-encoder re-ranking & LLM citation synthesis",
    ],
  },
  {
    id: "ai-agents",
    category: "Autonomous Agents",
    title: "AI Agents",
    shortDesc: "Autonomous multi-step goal execution with cyclic LangGraph orchestration.",
    fullDesc: "Autonomous enterprise agents that break high-level business objectives into deterministic sub-tasks, interact with external APIs, and execute complex workflows with human-in-the-loop approval gates.",
    icon: Bot,
    features: [
      "Cyclic state machines powered by LangGraph & CrewAI",
      "Self-correcting code and query execution loops",
      "Safe external tool calling (Stripe, CRMs, ERPs, SQL)",
      "Cryptographic audit logs for every decision trace",
    ],
    techStack: ["LangGraph", "CrewAI", "Python", "OpenAI GPT-4o", "Claude 3.5 Sonnet", "PostgreSQL"],
    benchmark: "100% auditable execution traces with failover retries",
    businessImpact: "Automates 70% of repetitive cross-platform workflows",
    architectureSteps: [
      "Goal decomposition & task dependency DAG generation",
      "Tool invocation & API payload validation",
      "Self-reflection & automated error recovery loop",
      "Human confirmation gate & final action commit",
    ],
  },
  {
    id: "knowledge-search",
    category: "RAG & Knowledge",
    title: "Knowledge Search",
    shortDesc: "Sub-10ms unified semantic search across enterprise wikis, databases, and Notion.",
    fullDesc: "Consolidate siloed company knowledge into a blazing-fast semantic query engine that surfaces precise answers, verified code snippets, and operational guidelines instantly.",
    icon: Database,
    features: [
      "Real-time Change Data Capture (CDC) connectors",
      "Multi-modal embedding models (text, code, diagrams)",
      "Strict role-based document access control (RBAC)",
      "Automatic index compaction and deduplication",
    ],
    techStack: ["Qdrant", "PostgreSQL", "Kafka", "Docker", "Next.js 15"],
    benchmark: "Sub-10ms query latency across 50M+ vectors",
    businessImpact: "Reduces internal support tickets and onboarding delays by 65%",
    architectureSteps: [
      "Multi-source ingestion pipeline (Confluence, Notion, Drive)",
      "Vectorization & sparse indexing with pgvector",
      "Tenant-isolated semantic search layer",
      "Sub-second interactive UI dashboard view",
    ],
  },
  {
    id: "document-intelligence",
    category: "Search & Intelligence",
    title: "Document Intelligence",
    shortDesc: "Complex PDF, multi-column table, and financial scan extraction with zero data loss.",
    fullDesc: "Automated OCR and vision LLM parsing that transforms scanned contracts, medical records, and financial invoices into clean, structured JSON schemas ready for downstream databases.",
    icon: FileText,
    features: [
      "Vision-guided multi-column table extraction",
      "Key-value entity normalization & validation",
      "High-throughput parallel OCR document parsing",
      "Automated confidence scoring & manual review routing",
    ],
    techStack: ["LlamaParse", "Unstructured.io", "GPT-4o Vision", "AWS Textract", "Python"],
    benchmark: "99.8% extraction fidelity on complex tabular layouts",
    businessImpact: "Saves 18,000+ hours of manual data entry per year",
    architectureSteps: [
      "Document ingestion & layout segmentation",
      "Multi-modal vision extraction of nested tables",
      "Schema assertion & automated type normalization",
      "Direct lakehouse ingestion or webhook dispatch",
    ],
  },
  {
    id: "workflow-automation",
    category: "Autonomous Agents",
    title: "Workflow Automation",
    shortDesc: "Self-healing enterprise business loops and automated reconciliations.",
    fullDesc: "Eliminate manual data transfer between disparate SaaS platforms. Our AI orchestrators handle invoice processing, lead enrichment, customer onboarding, and anomaly resolution automatically.",
    icon: Workflow,
    features: [
      "Asynchronous distributed task queues (Celery / Redis)",
      "Event-driven trigger webhooks and API orchestration",
      "Automated exception handling with Slack / Teams alerts",
      "Immutable execution logs for SOC2 compliance",
    ],
    techStack: ["Temporal", "Celery", "Redis", "FastAPI", "Docker", "Kubernetes"],
    benchmark: "Sub-second webhook dispatch with 99.999% reliability",
    businessImpact: "Accelerates order-to-cash cycles by 4.8x",
    architectureSteps: [
      "Event trigger ingestion via secure webhooks",
      "AI payload enrichment & multi-point API orchestration",
      "Transaction rollback & self-healing error handling",
      "Executive notification & telemetry logging",
    ],
  },
  {
    id: "internal-chatbots",
    category: "Voice & Chatbots",
    title: "Internal Chatbots",
    shortDesc: "Role-based secure Slack and Microsoft Teams co-pilots for high-velocity teams.",
    fullDesc: "Empower your engineering, sales, and operations teams with intelligent Slack and Teams bots that query internal databases, summarize meeting transcripts, and draft client deliverables.",
    icon: MessageSquare,
    features: [
      "Native Slack & Microsoft Teams app integration",
      "Role-based permission gating matching corporate SSO",
      "Streaming responses with interactive action buttons",
      "Automated SQL query generation with safe read-only locks",
    ],
    techStack: ["Next.js 15", "Slack Bolt SDK", "FastAPI", "OpenAI", "Anthropic"],
    benchmark: "Sub-400ms first token streaming response",
    businessImpact: "Boosts team engineering and operational velocity by 35%",
    architectureSteps: [
      "SSO identity resolution & permission validation",
      "Context retrieval from internal repositories",
      "Deterministic response streaming via WebSockets",
      "Interactive button action execution",
    ],
  },
  {
    id: "voice-agents",
    category: "Voice & Chatbots",
    title: "Voice Agents",
    shortDesc: "Sub-300ms real-time voice synthesis and clinical/customer triage.",
    fullDesc: "Build human-grade conversational voice agents that understand nuances, handle interruptions naturally, and route urgent customer inquiries with ultra-low latency.",
    icon: Mic,
    features: [
      "WebSockets bidirectional audio streaming",
      "Sub-300ms voice synthesis with natural intonation",
      "Real-time speech-to-text with domain vocabulary",
      "Automated CRM logging and sentiment analysis",
    ],
    techStack: ["OpenAI Realtime API", "ElevenLabs", "WebSockets", "FastAPI", "Twilio"],
    benchmark: "< 300ms voice-to-voice turn-around latency",
    businessImpact: "Reduces customer call wait times from 45 min to under 30 seconds",
    architectureSteps: [
      "Streaming audio capture & noise cancellation",
      "Ultra-fast real-time speech tokenization",
      "Agent response synthesis & interruption handling",
      "Audio stream playback & automated call summary",
    ],
  },
  {
    id: "enterprise-search",
    category: "Search & Intelligence",
    title: "Enterprise Search",
    shortDesc: "Cross-platform Google Drive, Notion, Postgres, and Jira semantic indexing.",
    fullDesc: "A single unified search bar that connects across all company tools, providing instant semantic search with strict tenant isolation and zero data leakage.",
    icon: Globe,
    features: [
      "Native connectors for 30+ enterprise SaaS tools",
      "Incremental sync with zero API rate-limit bottlenecks",
      "Hybrid dense/sparse index optimization",
      "Auditable search analytics and query trend telemetry",
    ],
    techStack: ["Qdrant", "Elasticsearch", "PostgreSQL", "OAuth 2.0", "Next.js 15"],
    benchmark: "Instant multi-platform index updates in < 60s",
    businessImpact: "Eliminates 3+ hours per week of employee search friction",
    architectureSteps: [
      "OAuth connection & secure token management",
      "Real-time webhook & batch delta synchronization",
      "Multi-tenant vector indexing with encryption at rest",
      "Unified executive search frontend application",
    ],
  },
];

export default function AiCopilotsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>("rag-systems");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = ["All", "RAG & Knowledge", "Autonomous Agents", "Voice & Chatbots", "Search & Intelligence"];

  const filteredCapabilities =
    selectedCategory === "All"
      ? CAPABILITIES_LIST
      : CAPABILITIES_LIST.filter((c) => c.category === selectedCategory);

  const handleCardToggle = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      setTimeout(() => {
        const el = document.getElementById(`capability-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
    }
  };

  return (
    <AppShell>
      <div className="bg-[#F6FBFA] text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Centered Layout, Breadcrumb, Soft Green-Blue Radial Glow) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
          {/* Soft radial glow matching CodePlaced green-blue gradient */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none -z-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(34,197,94,0.08), rgba(14,165,233,0.06), transparent 70%)",
            }}
          />

          <div className="site-container relative z-10 max-w-[900px] mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[#0B4F6C] transition-colors">Services</Link>
              <span>/</span>
              <span className="text-[#0B4F6C] font-bold">AI Copilots</span>
            </div>

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>ENTERPRISE AI SOLUTIONS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[38px] sm:text-[54px] lg:text-[66px] font-[900] leading-[1.02] tracking-tight text-[#082F49] mb-6 [text-wrap:balance]">
              Build and Scale{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#14B8A6] to-[#22C55E]">
                Enterprise AI Copilots
              </span>{" "}
              with Confidence
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-[780px] mx-auto mb-10 font-normal">
              From Retrieval-Augmented Generation to autonomous AI agents, we build secure AI copilots that integrate with your business workflows and scale across your organization.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto h-[54px] px-8 rounded-[16px] bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl shadow-[#0B4F6C]/20 flex items-center justify-center gap-2.5 transition-all border border-[#14B8A6]/30 active:scale-95"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#capabilities"
                className="w-full sm:w-auto h-[54px] px-8 rounded-[16px] bg-white hover:bg-slate-50 text-[#082F49] font-bold text-sm border border-slate-200 shadow-xs flex items-center justify-center transition-all"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. TRUSTED BRANDS MARQUEE (35s Linear Infinite Loop, No Pauses) */}
        {/* ========================================================================= */}
        <section className="py-8 bg-white border-b border-slate-200/80 overflow-hidden select-none">
          <div className="site-container">
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 text-center mb-4">
              Supported Foundation Models & Vector Ecosystems
            </div>

            <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 35,
                  ease: "linear",
                }}
                className="flex items-center gap-14 sm:gap-20 w-max"
              >
                {[...TRUSTED_MARQUEE, ...TRUSTED_MARQUEE].map((brand, idx) => (
                  <div
                    key={`${brand.name}-${idx}`}
                    className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
                    <span className="font-bold text-base text-slate-800 tracking-tight">
                      {brand.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      ({brand.tag})
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. VALUE PROPOSITION SECTION (Why Businesses Choose CodePlaced + 6 Cards) */}
        {/* ========================================================================= */}
        <section className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Why Businesses Choose{" "}
              <span className="text-[#14B8A6]">CodePlaced</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We bridge the gap between bleeding-edge AI research and enterprise reliability, ensuring your copilots deliver measurable ROI with zero hallucinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {VALUE_PROPS.map((prop, idx) => {
              const IconComp = prop.icon;
              return (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -10 }}
                  className="rounded-[24px] bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-[#14B8A6]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center group-hover:bg-[#0B4F6C] group-hover:text-white transition-all shadow-2xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4F6C] bg-[#ECFEFF] px-3 py-1 rounded-full border border-[#0B4F6C]/15">
                        {prop.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#14B8A6]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Production Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CAPABILITIES SECTION (In-Page Expanding Cards with Framer Motion Layout) */}
        {/* ========================================================================= */}
        <section id="capabilities" className="section-py bg-white border-y border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                Full Spectrum AI Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Architectural Modules Built for Scale
              </h2>
              <p className="text-slate-600 text-base">
                Click any capability to expand its complete architecture, guardrails, tech stack, and execution flow directly inside the page.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Sticky Navigation Category Pills */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
                <div className="p-6 rounded-[24px] bg-[#F8FAFC] border border-slate-200/80 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
                    Filter Capability Domain
                  </div>

                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0B4F6C] text-white shadow-md shadow-[#0B4F6C]/20"
                            : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80"
                        }`}
                      >
                        <span>{cat}</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform ${
                            isSelected ? "text-white translate-x-0.5" : "text-slate-400"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Scoping Advisory Box */}
                <div className="p-6 rounded-[24px] bg-[#082F49] text-white border border-cyan-950 space-y-3 shadow-md">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Bespoke AI Pods
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Need a custom multi-agent architecture?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our Principal AI Architects can audit your database schemas and document corpus within 48 hours.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-1"
                  >
                    <span>Request AI Architecture Audit →</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: In-Page Expanding Product / Capability Cards */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCapabilities.map((item, idx) => {
                    const IconComponent = item.icon;
                    const isExpanded = expandedId === item.id;

                    return (
                      <motion.div
                        key={item.id}
                        id={`capability-${item.id}`}
                        layout
                        transition={{
                          layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.3 },
                        }}
                        className={`scroll-mt-28 transition-colors duration-300 ${
                          isExpanded
                            ? "col-span-1 md:col-span-2 rounded-[28px] bg-white border-2 border-[#0B4F6C] p-7 sm:p-9 shadow-[0_25px_70px_rgba(11,79,108,0.12)] ring-4 ring-[#14B8A6]/10"
                            : "rounded-[24px] bg-[#F8FAFC] hover:bg-white border border-slate-200/90 hover:border-[#14B8A6]/50 p-7 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between group"
                        }`}
                        onClick={!isExpanded ? () => handleCardToggle(item.id) : undefined}
                      >
                        {/* ========================================================= */}
                        {/* CARD HEADER (Shared between Collapsed and Expanded states) */}
                        {/* ========================================================= */}
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-2xs ${
                                  isExpanded
                                    ? "bg-[#0B4F6C] text-white"
                                    : "bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] group-hover:bg-[#0B4F6C] group-hover:text-white"
                                }`}
                              >
                                <IconComponent className="w-6 h-6" />
                              </div>

                              {isExpanded && (
                                <div>
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E7490] bg-[#ECFEFF] px-2.5 py-1 rounded-full border border-[#0B4F6C]/15">
                                    {item.category}
                                  </span>
                                  <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Active Architecture Blueprint</span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {!isExpanded ? (
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E7490] bg-[#ECFEFF] px-2.5 py-1 rounded-full border border-[#0B4F6C]/15">
                                {item.category}
                              </span>
                            ) : (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCardToggle(item.id);
                                }}
                                className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#082F49] text-xs font-bold transition-all flex items-center gap-1.5"
                                title="Collapse back to card"
                              >
                                <span>Collapse</span>
                                <X className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          <h3
                            className={`font-black text-[#082F49] tracking-tight leading-snug ${
                              isExpanded ? "text-2xl sm:text-3xl mb-3 text-[#0B4F6C]" : "text-xl group-hover:text-[#0B4F6C] transition-colors"
                            }`}
                          >
                            {item.title}
                          </h3>

                          {/* Short / Full Description */}
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {isExpanded ? item.fullDesc : item.shortDesc}
                          </p>

                          {/* Verified SLA Benchmark Badge */}
                          <div
                            className={`mt-4 p-3.5 rounded-xl border shadow-2xs ${
                              isExpanded
                                ? "bg-[#F0FDF4] border-emerald-200/80"
                                : "bg-white border-slate-200/80"
                            }`}
                          >
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              Verified SLA Benchmark
                            </div>
                            <div className="text-xs font-bold text-emerald-600 mt-0.5">
                              {item.benchmark}
                            </div>
                          </div>
                        </div>

                        {/* ========================================================= */}
                        {/* EXPANDED RICH IN-PAGE CONTENT (Revealed without any modal) */}
                        {/* ========================================================= */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="mt-8 pt-8 border-t border-slate-200 space-y-8 overflow-hidden"
                            >
                              {/* 1. Quantified Business Impact & Metric */}
                              <div className="p-5 rounded-2xl bg-[#ECFEFF]/60 border border-[#0B4F6C]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#0E7490]">
                                    Enterprise Business Outcome
                                  </div>
                                  <div className="text-base sm:text-lg font-black text-[#082F49]">
                                    {item.businessImpact}
                                  </div>
                                </div>
                                <div className="px-4 py-2 rounded-xl bg-white border border-[#0B4F6C]/20 text-xs font-bold text-[#0B4F6C] shadow-2xs whitespace-nowrap">
                                  2–4 Week Fixed Cutover
                                </div>
                              </div>

                              {/* 2. End-to-End Execution Architecture (4 Steps) */}
                              <div className="space-y-3">
                                <div className="text-xs font-bold uppercase tracking-wider text-[#0E7490] flex items-center gap-1.5">
                                  <Workflow className="w-4 h-4 text-[#0B4F6C]" />
                                  <span>End-to-End Execution Architecture</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                                  {item.architectureSteps.map((step, stepIdx) => (
                                    <div
                                      key={stepIdx}
                                      className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90 space-y-2 shadow-2xs hover:border-[#14B8A6]/40 transition-colors"
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="w-6 h-6 rounded-lg bg-[#0B4F6C] text-white flex items-center justify-center font-bold text-xs">
                                          {stepIdx + 1}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase">
                                          Step {stepIdx + 1}
                                        </span>
                                      </div>
                                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                                        {step}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* 3. Guardrails & Key Features */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F49] flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                    <span>Enterprise Features & Guardrails</span>
                                  </h4>
                                  <div className="space-y-2.5 pt-1">
                                    {item.features.map((feat, i) => (
                                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 flex flex-col justify-between">
                                  <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F49] flex items-center gap-2">
                                      <Cpu className="w-4 h-4 text-[#0B4F6C]" />
                                      <span>Technology Stack & Integration Matrix</span>
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5 pt-3">
                                      {item.techStack.map((tech) => (
                                        <span
                                          key={tech}
                                          className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#082F49] shadow-2xs"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>

                                  <p className="text-[11px] text-slate-500 leading-relaxed pt-3 border-t border-slate-200/80">
                                    100% committed directly into your private repository with zero vendor lock-in.
                                  </p>
                                </div>
                              </div>

                              {/* 4. In-Page Action CTA Bar */}
                              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#082F49] to-[#041E2A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
                                <div>
                                  <div className="text-xs font-bold text-cyan-300">
                                    Ready to deploy {item.title}?
                                  </div>
                                  <div className="text-xs text-slate-300">
                                    Get an NDA-backed architectural blueprint & timeline in 48 hours.
                                  </div>
                                </div>

                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleCardToggle(item.id);
                                    }}
                                    className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                                  >
                                    Collapse View
                                  </button>
                                  <Link
                                    href="/contact"
                                    className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-[#14B8A6] hover:bg-[#0D9488] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                                  >
                                    <span>Scope Architecture</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* ========================================================= */}
                        {/* COLLAPSED FOOTER (Tech preview & Expand In-Page Trigger) */}
                        {/* ========================================================= */}
                        {!isExpanded && (
                          <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {item.techStack.slice(0, 2).map((t) => (
                                <span
                                  key={t}
                                  className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-semibold text-slate-600"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>

                            <span className="text-xs font-bold text-[#0B4F6C] group-hover:text-[#14B8A6] inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-all">
                              <span>Expand Details</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. PROCESS / METHODOLOGY SECTION (4-Week Delivery Rhythm) */}
        {/* ========================================================================= */}
        <section className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              From Discovery to Live Copilot in 4 Weeks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                week: "Week 1",
                title: "Corpus Audit & Evaluation",
                desc: "Ingest sample documents, establish gold-standard evaluation benchmarks, and map safety guardrails.",
              },
              {
                week: "Week 2",
                title: "Vector Indexing & Hybrid RAG",
                desc: "Build custom parser pipelines, create hybrid vector indices with Qdrant, and benchmark recall accuracy.",
              },
              {
                week: "Week 3",
                title: "Agent Flow & UI Integration",
                desc: "Orchestrate multi-step LangGraph agents and embed snappy, sub-second chat interfaces.",
              },
              {
                week: "Week 4",
                title: "Red-Teaming & Production Cutover",
                desc: "Adversarial prompt injection testing, latency tuning, and live production release with token logging.",
              },
            ].map((step) => (
              <div key={step.week} className="p-7 rounded-[24px] bg-white border border-slate-200/90 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-black text-[#0B4F6C] bg-[#ECFEFF] px-3 py-1 rounded-full border border-[#0B4F6C]/20">
                  {step.week}
                </span>
                <h3 className="text-lg font-bold text-[#082F49]">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. CASE STUDIES SECTION (Featured Production AI Deliveries) */}
        {/* ========================================================================= */}
        <section className="section-py bg-white border-t border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                Client Success Stories
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Enterprise AI in Production
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case 1: MedHealth */}
              <div className="p-8 rounded-[28px] bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold bg-[#ECFEFF] text-[#0B4F6C] px-3 py-1 rounded-full border border-[#0B4F6C]/20">
                      Healthcare & Life Sciences
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Client: MedHealth</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#082F49]">
                    AI Clinical Triage Co-Pilot & Lakehouse
                  </h3>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Engineered a HIPAA-compliant clinical triage co-pilot that ingests EHR records and patient voice scans, slashing intake wait times by 4.8x.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                      <div className="text-xl font-black text-[#0B4F6C]">4.8x Faster</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Patient Intake</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                      <div className="text-xl font-black text-emerald-600">100% HIPAA</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Security Compliance</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200">
                  <Link
                    href="/case-studies"
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#0B4F6C] text-[#082F49] hover:text-white text-xs font-bold border border-slate-200 hover:border-[#0B4F6C] flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Case 2: Legal Tech */}
              <div className="p-8 rounded-[28px] bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold bg-[#ECFEFF] text-[#0B4F6C] px-3 py-1 rounded-full border border-[#0B4F6C]/20">
                      Legal Tech & Compliance
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Client: OmniJuris Corp</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#082F49]">
                    Contract Analysis & Risk RAG Engine
                  </h3>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Transformed 1.2M+ unstructured commercial agreements into an instant semantic query engine with citation-backed legal risk analysis.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                      <div className="text-xl font-black text-[#0B4F6C]">82% Saved</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Review Turnaround</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                      <div className="text-xl font-black text-emerald-600">99.4%</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Citation Accuracy</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200">
                  <Link
                    href="/case-studies"
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#0B4F6C] text-[#082F49] hover:text-white text-xs font-bold border border-slate-200 hover:border-[#0B4F6C] flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. WHY CHOOSE CODEPLACED SECTION */}
        {/* ========================================================================= */}
        <section className="section-py bg-[#082F49] text-white">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                The CodePlaced Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Enterprise AI Engineering You Can Trust
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "100% IP Ownership",
                  desc: "All source code, schemas, and fine-tuned weights committed directly to your private repos.",
                },
                {
                  title: "2–4 Week Fixed SLA",
                  desc: "Guaranteed milestone delivery without months of endless consulting bureaucracy.",
                },
                {
                  title: "Deterministic Guardrails",
                  desc: "Multi-tiered evaluations preventing catastrophic hallucinations and prompt injections.",
                },
                {
                  title: "Air-Gapped Security",
                  desc: "Deploy in your own private cloud or on-premise GPU clusters with SOC2 Type II compliance.",
                },
              ].map((adv) => (
                <div key={adv.title} className="p-6 rounded-[24px] bg-white/[0.04] border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B4F6C] text-white flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{adv.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. TECHNOLOGY STACK SECTION */}
        {/* ========================================================================= */}
        <section className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              Battle-Tested Tooling
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Production AI Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { category: "Foundation Models", tools: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Llama 3 (Fine-Tuned)", "Mistral Large"] },
              { category: "Vector Databases", tools: ["Qdrant Cluster", "Pinecone", "pgvector (Postgres)", "Milvus"] },
              { category: "Agent Frameworks", tools: ["LangGraph", "CrewAI", "LlamaIndex", "Semantic Kernel"] },
              { category: "Eval & Monitoring", tools: ["Ragas Benchmark", "DeepEval", "vLLM Engine", "LangSmith"] },
            ].map((col) => (
              <div key={col.category} className="p-6 rounded-[24px] bg-white border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E7490]">{col.category}</h4>
                <div className="space-y-2 pt-1">
                  {col.tools.map((t) => (
                    <div key={t} className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-100 text-xs font-bold text-[#082F49] flex items-center justify-between">
                      <span>{t}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. FAQ SECTION */}
        {/* ========================================================================= */}
        <section className="section-py bg-white border-t border-slate-200/80">
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
              {[
                {
                  q: "Will our proprietary company documents be used to train external models?",
                  a: "Never. We enforce zero-data-retention agreements with enterprise model providers and support self-hosted open-weights models (Llama 3, Mistral) deployed strictly inside your air-gapped private VPC.",
                },
                {
                  q: "How do you guarantee zero hallucinations in contract and compliance search?",
                  a: "We deploy hybrid RAG with reciprocal rank fusion, cross-encoder re-ranking, and strict deterministic citation verification. If context is missing from your knowledge base, the copilot explicitly declines to answer rather than guessing.",
                },
                {
                  q: "Can the AI Copilot perform actions inside our existing CRM, ERP, or database?",
                  a: "Yes. Using LangGraph cyclic agent workflows and authenticated tool calling, our agents safely update records, trigger billing workflows, and execute API calls with optional human-in-the-loop sign-off.",
                },
                {
                  q: "What does the 2–4 week delivery engagement look like?",
                  a: "Week 1 is discovery and benchmark evaluation, Week 2 builds the vector index and hybrid pipelines, Week 3 orchestrates agent logic and UI integration, and Week 4 completes red-teaming security testing and live cutover.",
                },
              ].map((faq, index) => {
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
        {/* 10. CTA SECTION */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white py-16 sm:py-20 text-center">
          <div className="site-container max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Ready to Deploy Production AI in 4 Weeks?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Book a 30-minute discovery call with a Principal AI Architect. We sign NDAs upfront and map your technical milestone blueprint.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl transition-all border border-[#14B8A6]/30"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
