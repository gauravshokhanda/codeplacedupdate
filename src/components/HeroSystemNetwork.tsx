"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import {
  Sparkles,
  Database,
  BarChart3,
  TrendingUp,
  Code2,
  CheckCircle2,
  ChevronRight,
  Radio,
  Layers,
} from "lucide-react";
import Link from "next/link";

interface EcosystemStage {
  id: string;
  name: string;
  shortTitle: string;
  headline: string;
  category: string;
  x: number; // percentage in visual canvas
  y: number; // percentage in visual canvas
  icon: React.ElementType;
  metric: string;
  secondaryMetric: string;
  tag: string;
  bullets: string[];
  techStack: string[];
  actionLink: string;
}

const STAGES: EcosystemStage[] = [
  {
    id: "ai-services",
    name: "AI Services & Agents",
    shortTitle: "AI Services & Agents",
    headline: "Operationalize AI across workflows, products, and customer experiences.",
    category: "Autonomous LLM Workflows & Vector Intelligence",
    x: 50,
    y: 20,
    icon: Sparkles,
    metric: "< 400ms Inference",
    secondaryMetric: "99.4% Accuracy",
    tag: "Autonomous Core",
    bullets: [
      "Custom AI Agents & Tool Calling",
      "Enterprise RAG & Vector Search",
      "LLM Fine-Tuning & Orchestration",
      "Self-Healing Autonomous Workflows",
    ],
    techStack: ["OpenAI", "Claude", "LangChain", "CrewAI", "Pinecone"],
    actionLink: "/services/ai-services",
  },
  {
    id: "data-platform",
    name: "Data Platform",
    shortTitle: "Data Platform",
    headline: "Connect, transform, and operationalize business data at enterprise scale.",
    category: "Snowflake & dbt Medallion Lakehouse Architecture",
    x: 20,
    y: 48,
    icon: Database,
    metric: "1.4M rows/sec",
    secondaryMetric: "Zero-Loss ETL",
    tag: "Real-Time Bus",
    bullets: [
      "Automated ETL / ELT Pipelines",
      "Cloud Lakehouses & Warehousing",
      "dbt SQL Transformation & Modeling",
      "Real-Time Event Streams & CDC",
    ],
    techStack: ["Snowflake", "Databricks", "dbt", "Apache Kafka", "PostgreSQL"],
    actionLink: "/services/data-engineering",
  },
  {
    id: "bi-cockpit",
    name: "Business Intelligence",
    shortTitle: "Business Intelligence",
    headline: "Turn data into dashboards, executive telemetry, and decision-ready insights.",
    category: "Executive Telemetry, Power BI & Looker Dashboards",
    x: 80,
    y: 48,
    icon: BarChart3,
    metric: "< 12ms Query Response",
    secondaryMetric: "99.9% Data Accuracy",
    tag: "Executive Cockpit",
    bullets: [
      "Power BI Cockpits & Reports",
      "Looker Studio Visualizations",
      "KPI Dashboards & Automated Alerts",
      "Executive Decision Hubs",
    ],
    techStack: ["Power BI", "Looker Studio", "BigQuery", "ClickHouse", "Tableau"],
    actionLink: "/services/data-engineering",
  },
  {
    id: "marketing-engine",
    name: "Marketing Engine",
    shortTitle: "Marketing Engine",
    headline: "Connect acquisition, attribution, automation, and full-funnel growth analytics.",
    category: "Programmatic SEO, AEO & High-ROAS Acquisition",
    x: 20,
    y: 78,
    icon: TrendingUp,
    metric: "+340% Blended ROAS",
    secondaryMetric: "Real-Time CDP Sync",
    tag: "Growth Engine",
    bullets: [
      "Multi-Touch Attribution Systems",
      "High-ROAS Paid Ad Campaigns",
      "Programmatic SEO & AEO Optimization",
      "Real-Time Customer Data Platform (CDP)",
    ],
    techStack: ["Google Ads", "Meta Ads", "GA4", "HubSpot", "Segment"],
    actionLink: "/services/digital-marketing",
  },
  {
    id: "custom-apps",
    name: "Custom Applications",
    shortTitle: "Custom Applications",
    headline: "Build scalable web, mobile, SaaS, and enterprise application meshes.",
    category: "Next.js 15 Full-Stack SaaS & Mobile Ecosystems",
    x: 80,
    y: 78,
    icon: Code2,
    metric: "99.99% Reliability SLA",
    secondaryMetric: "< 80ms Edge Latency",
    tag: "Application Mesh",
    bullets: [
      "Next.js 15 Full-Stack SaaS Platforms",
      "Native iOS & Android Mobile Apps",
      "High-Throughput Sub-Second APIs",
      "Enterprise Microservices Architecture",
    ],
    techStack: ["Next.js", "React Native", "Flutter", "TypeScript", "FastAPI"],
    actionLink: "/services/app-web-development",
  },
];

const UNIFIED_ECOSYSTEM_STAGE: EcosystemStage = {
  id: "unified-ecosystem",
  name: "Unified Digital Ecosystem",
  shortTitle: "Unified Mesh",
  headline: "Every system, AI agent, data pipeline, and digital interface interconnected seamlessly.",
  category: "Interconnected Enterprise Architecture",
  x: 50,
  y: 50,
  icon: Layers,
  metric: "< 50ms Sync Latency",
  secondaryMetric: "99.99% Ecosystem SLA",
  tag: "Fully Interconnected",
  bullets: [
    "Continuous Real-Time Data Streaming",
    "Unified Autonomous Vector Intelligence",
    "Closed-Loop Marketing & Product Telemetry",
    "Zero-Downtime Microservices Mesh",
  ],
  techStack: ["AWS", "Next.js", "Snowflake", "OpenAI", "Power BI"],
  actionLink: "/services",
};

const CONNECTIONS = [
  { from: 0, to: 1, id: "ai-data" }, // AI -> Data Platform
  { from: 0, to: 2, id: "ai-bi" }, // AI -> BI
  { from: 1, to: 2, id: "data-bi" }, // Data Platform -> BI
  { from: 1, to: 3, id: "data-mkt" }, // Data Platform -> Marketing Engine
  { from: 1, to: 4, id: "data-apps" }, // Data Platform -> Custom Apps
  { from: 2, to: 4, id: "bi-apps" }, // BI -> Custom Apps
  { from: 3, to: 4, id: "mkt-apps" }, // Marketing -> Custom Apps
];

export function HeroSystemNetwork() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isUnifiedState, setIsUnifiedState] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-expansion trigger upon reaching viewport
  const isSectionInView = useInView(containerRef, {
    margin: "-10% 0px -10% 0px",
    once: false,
  });

  // Pinned Scroll Tracker for the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // 0.00 – 0.20 => AI Services & Agents
    // 0.20 – 0.40 => Data Platform
    // 0.40 – 0.60 => Business Intelligence
    // 0.60 – 0.80 => Marketing Engine
    // 0.80 – 0.94 => Custom Applications
    // 0.94 – 1.00 => Unified All-Node Finale before release
    if (progress < 0.20) {
      setIsUnifiedState(false);
      setActiveStageIndex(0);
    } else if (progress < 0.40) {
      setIsUnifiedState(false);
      setActiveStageIndex(1); // Data Platform
    } else if (progress < 0.60) {
      setIsUnifiedState(false);
      setActiveStageIndex(2); // Business Intelligence
    } else if (progress < 0.74) {
      setIsUnifiedState(false);
      setActiveStageIndex(3); // Marketing Engine
    } else if (progress < 0.92) {
      setIsUnifiedState(false);
      setActiveStageIndex(4); // Custom Applications
    } else {
      setIsUnifiedState(true);
      setActiveStageIndex(5); // Unified Finale
    }
  });

  const activeStage = isUnifiedState
    ? UNIFIED_ECOSYSTEM_STAGE
    : STAGES[activeStageIndex] || STAGES[0];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[500vh] bg-[#F7FBFF]"
    >
      {/* ========================================================================= */}
      {/* 100VH STICKY VIEWPORT CONTAINER WITH AUTO-EXPANSION ANIMATION */}
      {/* ========================================================================= */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-20">
        <motion.div
          initial={{ scale: 0.94, opacity: 0.85, borderRadius: "28px" }}
          animate={
            isSectionInView
              ? { scale: 1, opacity: 1, borderRadius: "0px" }
              : { scale: 0.94, opacity: 0.85, borderRadius: "28px" }
          }
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full h-full flex flex-col justify-center py-6 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto overflow-hidden will-change-transform will-change-opacity"
        >
          {/* ========================================================================= */}
          {/* MAIN BODY: 2-COLUMN STORYTELLING (Left: Narrative/Telemetry | Right: Mesh) */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
            
            {/* ----------------------------------------------------------------------- */}
            {/* LEFT COLUMN: Storytelling Heading, Description & Telemetry Panel (5 Cols) */}
            {/* ----------------------------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4"
                >
                  {/* Active Stage Heading */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] font-bold block mb-1">
                      {activeStage.category}
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2942] tracking-tight leading-tight">
                      {activeStage.name}
                    </h3>
                  </div>

                  {/* Story Description */}
                  <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed font-normal">
                    {activeStage.headline}
                  </p>

                  {/* Telemetry Card */}
                  <div className="rounded-2xl bg-white border border-[#E6EDF5] p-5 sm:p-6 shadow-xl shadow-sky-950/5 space-y-4">
                    {/* Benchmarks Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">
                          Throughput Benchmark
                        </span>
                        <span className="text-lg sm:text-xl font-mono font-black text-[#0F2942]">
                          {activeStage.metric}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">
                          Reliability SLA
                        </span>
                        <span className="text-sm sm:text-base font-mono font-bold text-[#06B6D4]">
                          {activeStage.secondaryMetric}
                        </span>
                      </div>
                    </div>

                    {/* Key Capabilities Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {activeStage.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                          <span className="truncate">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills & Action Link */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {activeStage.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#F0F7FC] text-slate-700 font-semibold border border-[#E6EDF5]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={activeStage.actionLink}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0D3B66] hover:text-[#06B6D4] transition-colors shrink-0 group"
                      >
                        <span>Explore</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ----------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: Light Theme Ecosystem Network Canvas (7 Cols) */}
            {/* ----------------------------------------------------------------------- */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] rounded-[32px] bg-gradient-to-b from-[#FFFFFF] via-[#F4FAFD] to-[#EAF5FC] border border-[#E6EDF5] overflow-hidden shadow-2xl shadow-sky-950/5 select-none">
                
                {/* Embedded Upper-Right Live Telemetry Status Pill */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50/90 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-200/80 shadow-xs">
                  <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
                  <span className="font-bold">
                    {isUnifiedState ? "Full Ecosystem Connected" : "Live Telemetry ● Synchronized"}
                  </span>
                </div>

                {/* Subtle Moving Ambient Blueprint Grid */}
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: "36px 36px",
                    animation: "gridFloat 25s linear infinite",
                  }}
                />

                {/* Luminous Glow Behind Center */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#06B6D4]/12 rounded-full blur-[90px] pointer-events-none" />

                {/* SVG Interconnected Architecture Mesh with Flowing Dashed Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="active-line-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
                      <stop offset="50%" stopColor="#0284C7" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="1" />
                    </linearGradient>
                    <filter id="cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {CONNECTIONS.map((conn) => {
                    const fromNode = STAGES[conn.from];
                    const toNode = STAGES[conn.to];
                    const isConnected =
                      isUnifiedState ||
                      conn.from === activeStageIndex ||
                      conn.to === activeStageIndex;

                    return (
                      <g key={conn.id}>
                        {/* Base or Flowing Connection Line */}
                        <line
                          x1={`${fromNode.x}%`}
                          y1={`${fromNode.y}%`}
                          x2={`${toNode.x}%`}
                          y2={`${toNode.y}%`}
                          stroke={isConnected ? "url(#active-line-cyan)" : "#DBE7F2"}
                          strokeWidth={isConnected ? 3 : 1.5}
                          strokeDasharray="8 6"
                          filter={isConnected ? "url(#cyan-glow)" : undefined}
                          className={`transition-all duration-800 ${isConnected ? "animate-pulse" : ""}`}
                        />

                        {/* Moving Signal Packet Along Active Line */}
                        {isConnected && (
                          <circle r="4.5" fill="#06B6D4" className="filter drop-shadow-[0_0_10px_#06B6D4]">
                            <animateMotion
                              dur={isUnifiedState ? "1.4s" : "1.8s"}
                              repeatCount="indefinite"
                              path={`M ${fromNode.x * 12.8} ${fromNode.y * 7.2} L ${toNode.x * 12.8} ${toNode.y * 7.2}`}
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* 5 Architecture Nodes with Smooth Continuous Interpolation */}
                {STAGES.map((node, index) => {
                  const IconComponent = node.icon;
                  const isActive = isUnifiedState || activeStageIndex === index;

                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveStageIndex(index)}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      className={`absolute z-20 cursor-pointer group transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "z-30 scale-108 opacity-100"
                          : "opacity-45 scale-100 hover:opacity-75"
                      }`}
                    >
                      {/* Active Glowing Halo */}
                      {isActive && (
                        <div className="absolute inset-0 -m-4 rounded-3xl bg-[#06B6D4]/35 animate-pulse blur-xl pointer-events-none" />
                      )}

                      {/* Node Card Container */}
                      <div
                        className={`flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:py-3 rounded-2xl border transition-all duration-800 ${
                          isActive
                            ? "bg-white text-[#0F2942] border-2 border-[#06B6D4] shadow-[0_0_40px_rgba(6,182,212,0.4)] -translate-y-2 ring-4 ring-[#06B6D4]/20"
                            : "bg-white/95 text-slate-700 border border-[#DBE7F2] shadow-sm"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-800 ${
                            isActive
                              ? "bg-[#0F2942] text-[#06B6D4] shadow-sm"
                              : "bg-[#F0F7FC] text-[#0D3B66]"
                          }`}
                        >
                          <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </div>
                        <div className="text-left">
                          <div
                            className={`text-xs sm:text-sm font-black leading-tight ${
                              isActive ? "text-[#0F2942]" : "text-slate-800"
                            }`}
                          >
                            {node.shortTitle}
                          </div>
                          <div
                            className={`text-[10px] font-mono mt-0.5 ${
                              isActive ? "text-[#06B6D4] font-bold" : "text-slate-400"
                            }`}
                          >
                            {node.metric}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





