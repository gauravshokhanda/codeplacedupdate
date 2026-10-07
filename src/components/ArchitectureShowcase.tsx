"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Cpu,
  Activity,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Server,
  Cloud,
  CheckCircle2,
  Lock,
  GitBranch,
  TrendingUp,
} from "lucide-react";

interface ArchitectureTab {
  id: string;
  label: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  pipelineSteps: { step: string; detail: string; status: string }[];
  tags: string[];
}

const ARCHITECTURE_TABS: ArchitectureTab[] = [
  {
    id: "lakehouse",
    label: "Data Lakehouse & Pipelines",
    tag: "Data Architecture",
    icon: Database,
    title: "Medallion Lakehouse & Zero-Copy Pipelines",
    subtitle: "Automated dbt transformations with sub-second analytical querying.",
    description:
      "We architect unified lakehouse topologies on Snowflake, ClickHouse, and AWS S3 with Bronze/Silver/Gold data validation, dynamic schema migrations, and column-level masking for enterprise governance.",
    metrics: [
      { label: "Query Acceleration", value: "8.4x Faster" },
      { label: "Cloud Compute Savings", value: "35%–42%" },
      { label: "Daily Transactions", value: "45M+ Records" },
    ],
    pipelineSteps: [
      { step: "01 Ingestion", detail: "Raw JSON/Parquet stream to Bronze Lakehouse", status: "Active" },
      { step: "02 Transformation", detail: "Incremental dbt SQL models with auto-tests", status: "Verified" },
      { step: "03 Governance", detail: "Row-level security (RLS) & dynamic column masking", status: "Enforced" },
      { step: "04 Serving", detail: "Sub-second BI materialization on Gold schemas", status: "Live" },
    ],
    tags: ["Snowflake", "dbt Core", "Apache Iceberg", "PostgreSQL", "AWS S3"],
  },
  {
    id: "ai-agents",
    label: "Enterprise AI & Copilots",
    tag: "AI Architecture",
    icon: Cpu,
    title: "Autonomous Agent Swarms & Stateful RAG",
    subtitle: "Deterministic guardrails, sub-200ms hybrid retrieval, and zero data leakage.",
    description:
      "Deploy custom multi-agent workflows using LangGraph and hybrid vector search (BM25 + RRF). Bilateral tenancy ensures company data is never used to train frontier public LLM models.",
    metrics: [
      { label: "Search Latency", value: "< 140ms" },
      { label: "Hallucination Drop", value: "94% Reduced" },
      { label: "Token Efficiency", value: "3.2x Optimized" },
    ],
    pipelineSteps: [
      { step: "01 Hybrid Retrieval", detail: "Dense semantic vector + BM25 keyword fusion", status: "Cached" },
      { step: "02 Validation Gate", detail: "Input schema validation & PII redaction layer", status: "Protected" },
      { step: "03 Agent Reflection", detail: "Cyclic multi-step tool calling and output verify", status: "Running" },
      { step: "04 Output Citation", detail: "Audited source groundings with confidence score", status: "Delivered" },
    ],
    tags: ["LangGraph", "FastAPI", "Pinecone", "OpenAI", "Claude 3.5"],
  },
  {
    id: "high-concurrency",
    label: "High-Concurrency Telemetry",
    tag: "Systems Architecture",
    icon: Activity,
    title: "Event-Driven Telemetry & Real-Time Scoring",
    subtitle: "2.4M transactions per second with 99.999% multi-region uptime.",
    description:
      "Engineered with Apache Kafka, Go, and Redis clusters to process high-throughput IoT and financial transactions with sub-50ms p99 response times and zero-downtime rolling deployments.",
    metrics: [
      { label: "Peak Load Capacity", value: "2.4M TPS" },
      { label: "p99 Execution Latency", value: "38ms" },
      { label: "System Availability", value: "99.999%" },
    ],
    pipelineSteps: [
      { step: "01 Edge Routing", detail: "Geo-distributed Anycast ingress gateway", status: "Optimal" },
      { step: "02 Event Streaming", detail: "Partitioned Kafka event bus with idempotent keys", status: "Buffered" },
      { step: "03 Stateful Scoring", detail: "Sub-50ms fraud scoring & state machine eval", status: "Evaluated" },
      { step: "04 Multi-Region Sync", detail: "Active-active consensus with zero data loss", status: "Synced" },
    ],
    tags: ["Apache Kafka", "Go", "Redis Cluster", "Kubernetes", "gRPC"],
  },
  {
    id: "executive-bi",
    label: "Executive BI Cockpits",
    tag: "Analytics Architecture",
    icon: Layers,
    title: "Live Unified Executive Decision Cockpits",
    subtitle: "Consolidate 10+ operational data sources into a single source of truth.",
    description:
      "Custom semantic layers linking Power BI, Looker Studio, and embedded web dashboards directly to production databases, giving founders and C-suite leaders instant commercial visibility.",
    metrics: [
      { label: "Data Refresh Rate", value: "Real-Time" },
      { label: "Unified Data Sources", value: "12+ Systems" },
      { label: "Decision Velocity", value: "5x Faster" },
    ],
    pipelineSteps: [
      { step: "01 Source Unification", detail: "ERP, CRM, Stripe, Ads, and warehouse sync", status: "Connected" },
      { step: "02 Semantic Layer", detail: "Certified metric definitions & DAX calculation models", status: "Certified" },
      { step: "03 Real-Time Caching", detail: "Automated memory-backed incremental refresh", status: "Refreshed" },
      { step: "04 Cross-Platform UI", detail: "Responsive executive mobile & desktop cockpits", status: "Active" },
    ],
    tags: ["Power BI", "Looker Studio", "BigQuery", "PostgreSQL", "Tailored DAX"],
  },
];

export function ArchitectureShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>("lakehouse");

  const currentTab = ARCHITECTURE_TABS.find((t) => t.id === activeTabId) || ARCHITECTURE_TABS[0];
  const IconComponent = currentTab.icon;

  return (
    <section className="py-20 lg:py-28 bg-[#F4FAFC] relative overflow-hidden">
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none -z-0">
        <div
          className="absolute inset-0 rounded-full blur-[90px] opacity-40"
          style={{
            background:
              "radial-gradient(circle at center, rgba(28,200,229,0.22), rgba(15,43,70,0.08), transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12 lg:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0F2B46] border border-[#1CC8E5]/30 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#1CC8E5]" />
            <span>ENGINEERING ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2B46]">
            See How We Engineer Scalable Digital Systems
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed">
            Production-grade blueprints built for reliability, sub-second latency, and verified commercial performance.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-6">
          {ARCHITECTURE_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer flex-shrink-0 ${
                  isActive
                    ? "bg-[#0F2B46] text-white shadow-md shadow-[#0F2B46]/15 scale-[1.02]"
                    : "bg-white text-[#5B6B7C] hover:text-[#0F2B46] hover:bg-slate-50 border border-slate-200/80"
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? "text-[#1CC8E5]" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Architecture Blueprint Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-white border border-sky-100/90 shadow-xl shadow-sky-950/5 p-6 sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Details Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2.5">
                  <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-xs font-extrabold text-[#0D3B66]">
                    {currentTab.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0F2B46] tracking-tight leading-snug">
                    {currentTab.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#18B6D8]">
                    {currentTab.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#5B6B7C] leading-relaxed">
                  {currentTab.description}
                </p>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                  {currentTab.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-2xl bg-[#F4FAFC] border border-sky-100 text-center space-y-1"
                    >
                      <div className="text-base sm:text-lg lg:text-xl font-black text-[#0F2B46]">
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-xs font-semibold text-[#5B6B7C]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentTab.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/60 text-xs font-medium text-[#0F2B46]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Pipeline Telemetry Diagram */}
              <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-[#0F2B46] to-[#0D3B66] p-6 sm:p-7 text-white shadow-lg space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-[#1CC8E5]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">
                        Live Execution Graph
                      </div>
                      <div className="text-[10px] text-cyan-300">
                        Zero-Downtime Pipeline • 99.99% Availability
                      </div>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Operational
                  </span>
                </div>

                {/* Sequential Step Cards */}
                <div className="space-y-2.5">
                  {currentTab.pipelineSteps.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0 space-y-0.5">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>{s.step}</span>
                        </div>
                        <div className="text-[11px] text-slate-300 truncate">
                          {s.detail}
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-[#1CC8E5]/20 text-[#1CC8E5] border border-[#1CC8E5]/30 text-[10px] font-extrabold flex-shrink-0">
                        {s.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1CC8E5]" />
                    SOC2 & ISO Compliant Architecture
                  </span>
                  <span className="text-[11px] text-cyan-300 font-semibold">
                    v4.2 Production
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
