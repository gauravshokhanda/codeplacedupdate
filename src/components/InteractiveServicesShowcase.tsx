"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Database,
  TrendingUp,
  Bot,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Terminal,
  Cpu,
  Layers,
  Lock,
  Globe2,
  Workflow,
  Sparkles,
  Search,
  ExternalLink,
  BarChart3,
  Code2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES_DATA, ServiceDetailItem } from "@/lib/servicesData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// =========================================================================
// REALISTIC VISUAL PREVIEWS FOR EACH SERVICE
// =========================================================================

// Visual 01: App & Web Development (Next.js 15 & Native Mobile Architecture)
function AppWebDevelopmentVisual() {
  return (
    <div className="w-full rounded-2xl bg-[#0B0B0B] border border-[#262626] p-5 sm:p-6 text-white shadow-2xl relative overflow-hidden font-sans">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          <span className="text-[11px] font-mono text-neutral-400 ml-2 truncate">
            https://app.enterprise-core.io/production
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#161616] border border-[#2a2a2a] text-[10px] font-mono text-[#00BCD4]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
          <span>SSR 18ms</span>
        </div>
      </div>

      {/* Main Architecture Content */}
      <div className="pt-4 space-y-4">
        {/* Metric Highlights Row */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">p99 Latency</div>
            <div className="text-base font-black text-white font-mono mt-0.5">&lt; 250ms</div>
            <div className="text-[9px] text-[#00BCD4] font-mono">Edge CDN Active</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Mobile FPS</div>
            <div className="text-base font-black text-white font-mono mt-0.5">60 FPS</div>
            <div className="text-[9px] text-[#10B981] font-mono">Flutter Native</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Uptime SLA</div>
            <div className="text-base font-black text-white font-mono mt-0.5">99.99%</div>
            <div className="text-[9px] text-neutral-400 font-mono">Multi-AZ Mesh</div>
          </div>
        </div>

        {/* Live Endpoints & Component Status */}
        <div className="p-3.5 rounded-xl bg-[#121212] border border-[#222222] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>LIVE PRODUCTION ENDPOINTS</span>
            <span className="text-[#00BCD4]">HTTP/3 Enabled</span>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#10B981] font-bold">GET</span>
                <span className="text-neutral-300">/api/v2/auth/session</span>
              </div>
              <span className="text-neutral-400">14ms • 200 OK</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#00BCD4] font-bold">POST</span>
                <span className="text-neutral-300">/api/v2/orders/stream</span>
              </div>
              <span className="text-neutral-400">22ms • 201 Created</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#A855F7] font-bold">WS</span>
                <span className="text-neutral-300">/telemetry/live-sync</span>
              </div>
              <span className="text-[#10B981]">Connected (100% SLA)</span>
            </div>
          </div>
        </div>

        {/* Engineering Stack Badges */}
        <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">Next.js 15</span>
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">TypeScript</span>
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">Flutter</span>
          </div>
          <span className="text-[#00BCD4] font-semibold">SOC2 Compliant</span>
        </div>
      </div>
    </div>
  );
}

// Visual 02: Data Engineering & Analytics (Snowflake Lakehouse & dbt DAG)
function DataEngineeringVisual() {
  return (
    <div className="w-full rounded-2xl bg-[#0B0B0B] border border-[#262626] p-5 sm:p-6 text-white shadow-2xl relative overflow-hidden font-sans">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-[#00BCD4]" />
          <span className="text-xs font-mono font-bold text-white tracking-wide">
            Snowflake Lakehouse & dbt Pipeline
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#161616] border border-[#2a2a2a] text-[10px] font-mono text-[#10B981]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>DAG: 48/48 Passing</span>
        </div>
      </div>

      {/* Main Pipeline Content */}
      <div className="pt-4 space-y-4">
        {/* Throughput & Speedup Cards */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Stream Throughput</div>
            <div className="text-base font-black text-white font-mono mt-0.5">1.4M/s</div>
            <div className="text-[9px] text-[#00BCD4] font-mono">Kafka Real-Time</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Query Speedup</div>
            <div className="text-base font-black text-white font-mono mt-0.5">18x</div>
            <div className="text-[9px] text-[#10B981] font-mono">Snowflake Marts</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Audit Accuracy</div>
            <div className="text-base font-black text-white font-mono mt-0.5">100%</div>
            <div className="text-[9px] text-neutral-400 font-mono">Zero Discrepancy</div>
          </div>
        </div>

        {/* Medallion Architecture Flow */}
        <div className="p-3.5 rounded-xl bg-[#121212] border border-[#222222] space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>MEDALLION LAKEHOUSE PIPELINE</span>
            <span className="text-[#00BCD4]">Auto-Partitioned</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-[#0B0B0B] border border-[#282828] space-y-1">
              <span className="text-[#CD7F32] font-black text-[11px] block">BRONZE</span>
              <span className="text-[10px] text-neutral-400 block truncate">Raw Event Stream</span>
              <span className="text-[9px] text-emerald-400 font-mono">1.4M rows/s</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0B0B0B] border border-[#282828] space-y-1">
              <span className="text-slate-300 font-black text-[11px] block">SILVER</span>
              <span className="text-[10px] text-neutral-400 block truncate">dbt Cleansed</span>
              <span className="text-[9px] text-[#00BCD4] font-mono">Schema Valid</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0B0B0B] border border-[#282828] space-y-1">
              <span className="text-amber-300 font-black text-[11px] block">GOLD</span>
              <span className="text-[10px] text-neutral-400 block truncate">Power BI Marts</span>
              <span className="text-[9px] text-purple-300 font-mono">Sub-1s Queries</span>
            </div>
          </div>
        </div>

        {/* Telemetry Stack */}
        <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">Snowflake</span>
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">dbt Core</span>
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">Power BI</span>
          </div>
          <span className="text-[#00BCD4] font-semibold">HIPAA & SOC2</span>
        </div>
      </div>
    </div>
  );
}

// Visual 03: Data Analytics & Business Intelligence (Executive BI & Telemetry Cockpit)
function AnalyticsBIVisual() {
  return (
    <div className="w-full rounded-2xl bg-[#0B0B0B] border border-[#262626] p-4 sm:p-6 text-white shadow-2xl relative overflow-hidden font-sans">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#222222]">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-[#00BCD4]" />
          <span className="text-xs font-mono font-bold text-white tracking-wide truncate">
            Executive BI & Predictive Telemetry Cockpit
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#161616] border border-[#2a2a2a] text-[10px] font-mono text-[#00BCD4] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
          <span>DirectQuery Sub-1s</span>
        </div>
      </div>

      {/* Main Analytics Content */}
      <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          <div className="p-2 sm:p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[9px] sm:text-[10px] font-mono text-neutral-400">Query Speed</div>
            <div className="text-sm sm:text-base font-black text-white font-mono mt-0.5">&lt; 800ms</div>
            <div className="text-[8px] sm:text-[9px] text-[#00BCD4] font-mono">In-Memory Cache</div>
          </div>
          <div className="p-2 sm:p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[9px] sm:text-[10px] font-mono text-neutral-400">Blended ROAS</div>
            <div className="text-sm sm:text-base font-black text-white font-mono mt-0.5">+340%</div>
            <div className="text-[8px] sm:text-[9px] text-[#10B981] font-mono">Closed Revenue</div>
          </div>
          <div className="p-2 sm:p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[9px] sm:text-[10px] font-mono text-neutral-400">Single Source</div>
            <div className="text-sm sm:text-base font-black text-white font-mono mt-0.5">100%</div>
            <div className="text-[8px] sm:text-[9px] text-purple-300 font-mono">Audit Verified</div>
          </div>
        </div>

        {/* Live KPI Readouts */}
        <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#121212] border border-[#222222] space-y-2">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-400">
            <span>EXECUTIVE KPI TELEMETRY</span>
            <span className="text-[#10B981]">Live Refresh</span>
          </div>

          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00BCD4]" />
                <span className="text-neutral-200">Revenue & Margin Telemetry</span>
              </div>
              <span className="text-emerald-400 font-bold">+28.4% YoY</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-neutral-200">Predictive Churn & LTV Ratio</span>
              </div>
              <span className="text-emerald-400 font-bold">4.6x LTV:CAC</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                <span className="text-neutral-200">Automated Anomaly Detection</span>
              </div>
              <span className="text-[#00BCD4] font-bold">0 Outliers</span>
            </div>
          </div>
        </div>

        {/* Stack Badges */}
        <div className="flex items-center justify-between pt-1 text-[10px] sm:text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">Power BI</span>
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">Tableau</span>
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">Datadog</span>
          </div>
          <span className="text-[#00BCD4] font-semibold">Leadership Ready</span>
        </div>
      </div>
    </div>
  );
}

// Visual 04: AI Services & Agents (Multi-Agent Swarms & Vector RAG)
function AIServicesVisual() {
  return (
    <div className="w-full rounded-2xl bg-[#0B0B0B] border border-[#262626] p-5 sm:p-6 text-white shadow-2xl relative overflow-hidden font-sans">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#00BCD4]" />
          <span className="text-xs font-mono font-bold text-white tracking-wide">
            Enterprise Multi-Agent Swarm & Vector RAG
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#161616] border border-[#2a2a2a] text-[10px] font-mono text-[#00BCD4]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
          <span>VPC Isolated</span>
        </div>
      </div>

      {/* Main Agent Orchestration Content */}
      <div className="pt-4 space-y-4">
        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Vector Retrieval</div>
            <div className="text-base font-black text-white font-mono mt-0.5">&lt; 400ms</div>
            <div className="text-[9px] text-[#00BCD4] font-mono">Pinecone Hybrid</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Data Leakage</div>
            <div className="text-base font-black text-white font-mono mt-0.5">0%</div>
            <div className="text-[9px] text-[#10B981] font-mono">Zero Data Retention</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Task Velocity</div>
            <div className="text-base font-black text-white font-mono mt-0.5">10x</div>
            <div className="text-[9px] text-purple-300 font-mono">Agent Swarm Sync</div>
          </div>
        </div>

        {/* Live Multi-Agent Swarm Orchestration Trace */}
        <div className="p-3.5 rounded-xl bg-[#121212] border border-[#222222] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>SUPERVISOR AGENT EXECUTION TRACE</span>
            <span className="text-[#10B981]">Sandboxed Safe</span>
          </div>

          <div className="space-y-1.5 text-xs font-mono">
            <div className="p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-cyan-950/60 text-[#00BCD4] text-[10px]">ROUTER</span>
                <span className="text-neutral-300">Supervisor: Parse intent &amp; construct plan</span>
              </div>
              <span className="text-neutral-400">12ms</span>
            </div>

            <div className="p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 text-[10px]">RAG</span>
                <span className="text-neutral-300">Pinecone: 12 context chunks retrieved</span>
              </div>
              <span className="text-neutral-400">38ms</span>
            </div>

            <div className="p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-purple-950/60 text-purple-300 text-[10px]">GUARD</span>
                <span className="text-neutral-300">HIPAA PII Redaction &amp; Verification</span>
              </div>
              <span className="text-emerald-400 font-bold">100% Passed</span>
            </div>
          </div>
        </div>

        {/* Stack Badges */}
        <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">GPT-4o</span>
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">Claude 3.5</span>
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">Pinecone</span>
          </div>
          <span className="text-[#00BCD4] font-semibold">Strict Zero-Trust</span>
        </div>
      </div>
    </div>
  );
}

// Map service index to its corresponding realistic visual component in exact homepage order:
// 01 AI & Automation -> AIServicesVisual
// 02 Software Development -> AppWebDevelopmentVisual
// 03 Data Analytics & BI -> AnalyticsBIVisual
// 04 Data Engineering -> DataEngineeringVisual
const SERVICE_VISUALS = [
  AIServicesVisual,
  AppWebDevelopmentVisual,
  AnalyticsBIVisual,
  DataEngineeringVisual,
];

// Mobile Service Selector Cards (2x2 Grid)
const MOBILE_SELECTOR_CARDS = [
  {
    idx: 0,
    title: "AI & Automation",
    desc: "Intelligent agents, RAG & workflow automation",
    icon: Bot,
  },
  {
    idx: 1,
    title: "Software Development",
    desc: "Scalable web apps, mobile & cloud APIs",
    icon: Code2,
  },
  {
    idx: 2,
    title: "Data Analytics & BI",
    desc: "Executive dashboards, KPIs & predictive insights",
    icon: BarChart3,
  },
  {
    idx: 3,
    title: "Data Engineering",
    desc: "Lakehouses, pipelines & automated ETL",
    icon: Database,
  },
];

// =========================================================================
// MAIN INTERACTIVE SERVICES SHOWCASE COMPONENT
// =========================================================================
export function InteractiveServicesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedContentRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScrollRef = useRef(false);

  const activeService = SERVICES_DATA[activeIdx] || SERVICES_DATA[0];
  const VisualComponent = SERVICE_VISUALS[activeIdx] || SERVICE_VISUALS[0];

  // GSAP ScrollTrigger for Desktop (> 1024px)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const triggerEl = containerRef.current;
      const pinnedEl = pinnedContentRef.current;
      if (!triggerEl || !pinnedEl) return;

      const st = ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 80px",
        end: "+=1200",
        pin: pinnedEl,
        pinSpacing: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (isProgrammaticScrollRef.current) return;
          const progress = self.progress;
          // Map progress 0.0 -> 1.0 into indices 0, 1, 2, 3
          const newIdx = Math.min(3, Math.floor(progress * 4));
          setActiveIdx(newIdx);
        },
      });

      return () => {
        st.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  // Handle Manual Tab Click or Prev/Next Button
  const handleSelectService = (idx: number) => {
    setActiveIdx(idx);
    isProgrammaticScrollRef.current = true;
    setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 1200);
  };

  const handlePrev = () => {
    const nextIdx = (activeIdx - 1 + SERVICES_DATA.length) % SERVICES_DATA.length;
    handleSelectService(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % SERVICES_DATA.length;
    handleSelectService(nextIdx);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div ref={pinnedContentRef} className="w-full">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              CORE DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              Four Pillars Of Engineering Excellence
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-normal">
              Explore our core technical practices, system architectures, and production delivery methodologies.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE SERVICE SHOWCASE (BELOW 1024px): 2x2 GRID + EDITORIAL DETAIL */}
          {/* ========================================================================= */}
          <div className="block lg:hidden space-y-4">
            {/* Top 2x2 Service Cards Grid (Matching Homepage Style) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              {SERVICES_DATA.map((service, idx) => {
                const isSelected = activeIdx === idx;
                const ServiceIcon =
                  service.num === "01"
                    ? Bot
                    : service.num === "02"
                    ? Code2
                    : service.num === "03"
                    ? BarChart3
                    : Database;

                return (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between group cursor-pointer bg-white shadow-xs select-none ${
                      isSelected
                        ? "border-[#00BCD4] ring-2 ring-[#00BCD4]/30"
                        : "border-[#E5E7EB] hover:border-[#00BCD4]/50"
                    }`}
                  >
                    <div>
                      {/* Top Row: Circular Icon with Cyan Dot Accent + Number */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 rounded-full bg-[#FAFAFA] border border-[#E5E7EB] flex items-center justify-center text-[#101820] relative shrink-0 group-hover:border-[#00BCD4]/40 transition-colors">
                          <ServiceIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#101820]" />
                          <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-neutral-400">
                          {service.num}
                        </span>
                      </div>

                      {/* Service Title */}
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-[#00BCD4] transition-colors">
                        {service.title}
                      </h4>

                      {/* Short Description */}
                      <p className="text-[10px] xs:text-[10.5px] text-neutral-500 leading-relaxed mt-1 line-clamp-2">
                        {service.positioning}
                      </p>
                    </div>

                    {/* Bottom Action Link */}
                    <div className="pt-2 mt-2.5 border-t border-[#E5E7EB] flex items-center justify-between text-[10.5px] xs:text-[11px] font-bold text-[#00BCD4]">
                      <span>{isSelected ? "Active Discipline" : "Select Service"}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Service Presentation Section */}
            <div className="pt-2 space-y-3">
              {/* Horizontally Scrollable Service Selector Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 scrollbar-none">
                {SERVICES_DATA.map((service, idx) => (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                      activeIdx === idx
                        ? "bg-[#00BCD4] text-neutral-950 font-bold shadow-xs scale-102"
                        : "bg-[#F3F4F6] text-neutral-600 border border-[#E5E7EB] hover:text-neutral-900"
                    }`}
                  >
                    {service.shortTitle}
                  </button>
                ))}
              </div>

              {/* Clean Editorial Detail Card */}
              <div className="rounded-2xl bg-white border border-[#E5E7EB] p-4 xs:p-5 shadow-xs space-y-4">
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#00BCD4] px-2 py-0.5 rounded bg-[#00BCD4]/10 uppercase tracking-wider">
                      {activeService.num} // {activeService.tagline}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight leading-tight pt-0.5">
                    {activeService.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-0.5">
                    {activeService.positioning}
                  </p>
                </div>

                {/* Clean Professional Business Visual (Clean Metric Plate, No Code/Terminal) */}
                <div className="rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] p-3.5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-neutral-800 pb-2 border-b border-[#E5E7EB]">
                    <span>Performance & Engineering Highlights</span>
                    <span className="text-[10px] font-mono font-bold text-[#00838F] px-2 py-0.5 rounded bg-[#00BCD4]/10">
                      Production Verified
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {activeService.heroMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-2 rounded-lg bg-white border border-[#E5E7EB] text-left">
                        <div className="text-[9.5px] font-mono text-neutral-500 truncate">{metric.label}</div>
                        <div className="text-sm font-black text-neutral-900 font-mono mt-0.5">{metric.value}</div>
                        <div className="text-[9px] text-[#00838F] font-mono truncate">{metric.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2 pt-1 border-t border-[#E5E7EB]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                    Core Capabilities
                  </span>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                    {activeService.capabilities.slice(0, 4).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-1.5 text-xs text-neutral-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-1.5" />
                        <span className="leading-snug">{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-2 border-t border-[#E5E7EB] space-y-1.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                    Technologies & Frameworks
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeService.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#F3F4F6] border border-[#E5E7EB] text-[10.5px] font-mono text-neutral-700 font-medium"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore CTA Row */}
                <div className="pt-3 border-t border-[#E5E7EB] flex items-center gap-2.5">
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-black font-extrabold text-xs tracking-tight shadow-xs transition-all active:scale-95 text-center"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact#contact-hero"
                    className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-xs border border-[#E5E7EB] transition-all text-center"
                  >
                    <span>Book Call</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* DESKTOP INTERACTIVE SHOWCASE (1024px+): PRESERVED TABS & PINNED LAYOUT */}
          {/* ========================================================================= */}
          <div className="hidden lg:block space-y-8 sm:space-y-10">
            {/* Minimal Interactive Service Navigation Tabs + Counter Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-2 border-b border-[#E5E7EB]">
              {/* 4 Interactive Service Tabs */}
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {SERVICES_DATA.map((service, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={service.slug}
                      onClick={() => handleSelectService(idx)}
                      className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-2 ${
                        isActive
                          ? "text-neutral-950 bg-[#F7F8FA] border border-[#E5E7EB] shadow-xs"
                          : "text-neutral-500 hover:text-neutral-900 hover:bg-[#F9FAFB] border border-transparent"
                      }`}
                    >
                      <span className={`font-mono text-xs ${isActive ? "text-[#00BCD4] font-black" : "text-neutral-400"}`}>
                        {service.num}
                      </span>
                      <span>{service.shortTitle}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#00BCD4] rounded-full"
                          transition={{ duration: 0.25 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Counter, Progress Bar & Prev/Next Arrows */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end shrink-0">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500">
                  <span className="text-[#00BCD4] text-sm">0{activeIdx + 1}</span>
                  <span>/</span>
                  <span>04</span>
                </div>

                {/* Progress Line */}
                <div className="w-24 h-1.5 bg-[#F0F2F5] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#00BCD4] rounded-full"
                    animate={{ width: `${((activeIdx + 1) / 4) * 100}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Service"
                    className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] hover:bg-[#00BCD4]/10 hover:border-[#00BCD4]/40 flex items-center justify-center text-neutral-700 hover:text-[#00BCD4] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Service"
                    className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] hover:bg-[#00BCD4]/10 hover:border-[#00BCD4]/40 flex items-center justify-center text-neutral-700 hover:text-[#00BCD4] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Two-Column Showcase Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (~55%): Typography, Content, Capabilities & CTAs */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-5"
                  >
                    {/* Category Pill + Eyebrow */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-black text-[#00BCD4] px-2.5 py-0.5 rounded bg-[#F7F8FA] border border-[#E5E7EB]">
                        {activeService.num} / 04
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00AFC8]">
                        {activeService.tagline}
                      </span>
                    </div>

                    {/* Large 38-46px Service Heading */}
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-neutral-900 tracking-tight leading-[1.12]">
                      {activeService.title}
                    </h3>

                    {/* Positioning Description */}
                    <p className="text-base sm:text-[17px] text-neutral-600 leading-relaxed font-normal">
                      {activeService.positioning}
                    </p>

                    {/* Core Capabilities: 4 Clean Minimal Items */}
                    <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                        Core Engineered Capabilities
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeService.capabilities.slice(0, 4).map((cap, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-2 text-[13.5px] text-neutral-700 font-medium group/item"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2" />
                            <span className="leading-snug group-hover/item:text-neutral-950 transition-colors">
                              {cap.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metric Highlight & Primary CTA Action */}
                    <div className="pt-5 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl sm:text-3xl font-black text-neutral-900 font-mono tracking-tight">
                          {activeService.heroMetrics[0]?.value}
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-neutral-800">
                            {activeService.heroMetrics[0]?.label}
                          </div>
                          <div className="text-[10px] font-mono text-neutral-400">
                            {activeService.heroMetrics[0]?.detail}
                          </div>
                        </div>
                      </div>

                      <Link
                        href={`/services/${activeService.slug}`}
                        className="inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full bg-neutral-900 hover:bg-[#00BCD4] text-white hover:text-black font-extrabold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-sm group/btn shrink-0"
                      >
                        <span>Explore Dedicated Page</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column (~45%): Service-Specific Visual Mockup */}
              <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.slug}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full"
                  >
                    <VisualComponent />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
