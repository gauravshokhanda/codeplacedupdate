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

// Visual 03: Digital & Social Marketing (Attribution & Growth Telemetry)
function MarketingVisual() {
  return (
    <div className="w-full rounded-2xl bg-[#0B0B0B] border border-[#262626] p-5 sm:p-6 text-white shadow-2xl relative overflow-hidden font-sans">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#00BCD4]" />
          <span className="text-xs font-mono font-bold text-white tracking-wide">
            Closed-Loop Revenue Attribution Engine
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#161616] border border-[#2a2a2a] text-[10px] font-mono text-[#00BCD4]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
          <span>CDP Active</span>
        </div>
      </div>

      {/* Main Marketing Telemetry Content */}
      <div className="pt-4 space-y-4">
        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Blended ROAS</div>
            <div className="text-base font-black text-white font-mono mt-0.5">+340%</div>
            <div className="text-[9px] text-[#10B981] font-mono">Closed Revenue</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Search Authority</div>
            <div className="text-base font-black text-white font-mono mt-0.5">+280%</div>
            <div className="text-[9px] text-[#00BCD4] font-mono">AEO & LLM Citations</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] text-left">
            <div className="text-[10px] font-mono text-neutral-400">Acquisition CAC</div>
            <div className="text-base font-black text-white font-mono mt-0.5">-42%</div>
            <div className="text-[9px] text-[#10B981] font-mono">Multi-Touch Attribution</div>
          </div>
        </div>

        {/* Attribution Channel Matrix */}
        <div className="p-3.5 rounded-xl bg-[#121212] border border-[#222222] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>PROGRAMMATIC ACQUISITION CHANNELS</span>
            <span className="text-[#10B981]">High Intent</span>
          </div>

          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00BCD4]" />
                <span className="text-neutral-200">Answer Engine Optimization (AEO)</span>
              </div>
              <span className="text-emerald-400 font-bold">4.8x ROAS</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-neutral-200">Programmatic SEO Content Hubs</span>
              </div>
              <span className="text-emerald-400 font-bold">+180k Visits</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0B0B0B] border border-[#1E1E1E]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                <span className="text-neutral-200">Segment Server-Side Identity Sync</span>
              </div>
              <span className="text-[#00BCD4] font-bold">100% Deterministic</span>
            </div>
          </div>
        </div>

        {/* Stack Badges */}
        <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">Segment</span>
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">GA4</span>
            <span className="px-2 py-0.5 rounded bg-[#181818] border border-[#282828] text-neutral-300">HubSpot</span>
          </div>
          <span className="text-[#00BCD4] font-semibold">Direct CRM Pipeline</span>
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

// Map service index to its corresponding realistic visual component
const SERVICE_VISUALS = [
  AppWebDevelopmentVisual,
  DataEngineeringVisual,
  MarketingVisual,
  AIServicesVisual,
];

// =========================================================================
// MAIN INTERACTIVE SERVICES SHOWCASE COMPONENT
// =========================================================================
export function InteractiveServicesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedContentRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScrollRef = useRef(false);

  const activeService = SERVICES_DATA[activeIdx];
  const VisualComponent = SERVICE_VISUALS[activeIdx];

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
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              CORE DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              Four Pillars Of Engineering Excellence
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Explore our core technical practices, system architectures, and production delivery methodologies.
            </p>
          </div>

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
  );
}
