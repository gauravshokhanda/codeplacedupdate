"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Globe,
  Smartphone,
  Zap,
  Activity,
  Workflow,
  LineChart,
  Server,
  Bot,
  Search,
  Target,
  ShieldCheck,
} from "lucide-react";

interface CapabilityPractice {
  num: string;
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  icon: React.ElementType;
  href: string;
  capabilities: string[];
  archNodes: { label: string; tag: string; icon: React.ElementType }[];
  metricHeadline: string;
}

const CAPABILITY_PRACTICES: CapabilityPractice[] = [
  {
    num: "01",
    id: "app-web-dev",
    title: "App & Web Development",
    subtitle: "Product Engineering",
    tagline: "Build digital products and platforms tailored to your business goals.",
    icon: Code2,
    href: "/services",
    capabilities: [
      "Mobile Apps (iOS & Android)",
      "SaaS Platforms",
      "Shopify Solutions",
      "WordPress Development",
      "API Integrations",
      "Custom Backends",
    ],
    metricHeadline: "< 25ms p99 Edge SSR • 60 FPS Native UI",
    archNodes: [
      { label: "Next.js 15 Frontend", tag: "Edge SSR", icon: Globe },
      { label: "VPC Gateway API", tag: "Sub-10ms", icon: Layers },
      { label: "High-Speed Cache", tag: "Redis Memory", icon: Zap },
      { label: "Cross-Platform UI", tag: "Swift / Flutter", icon: Smartphone },
    ],
  },
  {
    num: "02",
    id: "data-engineering",
    title: "Data Engineering",
    subtitle: "Lakehouses & Analytics",
    tagline: "Turn fragmented data into actionable business intelligence.",
    icon: Database,
    href: "/services",
    capabilities: [
      "ETL Pipelines",
      "Data Warehouses",
      "Power BI",
      "Looker Studio",
      "KPI Dashboards",
      "Predictive Analytics",
    ],
    metricHeadline: "1.4M rows/s Stream • 18x Query Acceleration",
    archNodes: [
      { label: "Kafka Event Stream", tag: "Bronze Ingestion", icon: Workflow },
      { label: "Snowflake Warehouse", tag: "Petabyte Scale", icon: Server },
      { label: "dbt SQL Transforms", tag: "Silver CI/CD", icon: Activity },
      { label: "Power BI Cockpit", tag: "Gold BI Mart", icon: LineChart },
    ],
  },
  {
    num: "03",
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Growth & Demand Gen",
    tagline: "Build visibility, engagement, and measurable growth.",
    icon: TrendingUp,
    href: "/services",
    capabilities: [
      "SEO",
      "AEO (AI Engine Optimization)",
      "GEO (Generative Optimization)",
      "Paid Ads (Google & Meta)",
      "Social Media",
      "Content Strategy",
    ],
    metricHeadline: "+340% Blended ROAS • 4.8x Intent Velocity",
    archNodes: [
      { label: "Programmatic SEO", tag: "100 CWV Score", icon: Search },
      { label: "AEO Knowledge Graph", tag: "AI Search Rank", icon: Bot },
      { label: "GA4 Multi-Attribution", tag: "Server Telemetry", icon: Activity },
      { label: "High-ROAS Ad Engine", tag: "Dynamic Scale", icon: Target },
    ],
  },
  {
    num: "04",
    id: "ai-services",
    title: "AI Services",
    subtitle: "Intelligent Systems",
    tagline: "Operationalize AI across workflows, products, and customer experiences.",
    icon: Sparkles,
    href: "/services",
    capabilities: [
      "AI Agents",
      "LLM Integration",
      "Automation",
      "AI Assistants",
      "AI Workflows",
      "Internal AI Systems",
    ],
    metricHeadline: "85% Manual Triage Cut • < 400ms Vector Retrieval",
    archNodes: [
      { label: "Autonomous Agent", tag: "Tool Calling", icon: Bot },
      { label: "Private Vector DB", tag: "Pinecone / Qdrant", icon: Database },
      { label: "Guardrail Validation", tag: "Schema Enforced", icon: ShieldCheck },
      { label: "ERP Action Dispatch", tag: "Zero-Data-Leak", icon: Zap },
    ],
  },
];

export function CoreCapabilitiesShowcase() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const current = CAPABILITY_PRACTICES[activeIdx];

  return (
    <section className="py-24 lg:py-32 bg-[#F7FBFF] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#0D3B66] border border-[#06B6D4]/30 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2942] leading-tight">
              Four Core Capabilities. <br className="hidden sm:inline" />
              One Engineering Partner.
            </h2>
            <p className="text-base sm:text-lg text-[#5B6B7C]">
              Everything required to design, build, automate, analyze, and grow modern businesses.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0D3B66] hover:text-[#06B6D4] transition-colors group self-start md:self-auto"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Large Premium Light Showcase Container */}
        <div
          className="rounded-[36px] p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-[#0F172A]/[0.08] shadow-xl bg-white"
          style={{
            boxShadow: "0 20px 60px rgba(15, 23, 42, 0.05)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10">
            {/* Left Navigation: 4 Large Vertical Practice Selectors (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
              {CAPABILITY_PRACTICES.map((practice, idx) => {
                const isSelected = activeIdx === idx;
                const IconComp = practice.icon;

                return (
                  <button
                    key={practice.id}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`text-left p-5 sm:p-6 rounded-[24px] transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? "bg-[#0F2942] text-white border-[#0F2942] shadow-xl shadow-slate-950/15 scale-[1.02]"
                        : "bg-[#F7FBFF] hover:bg-white text-[#0F2942] border-[#0F172A]/[0.08] hover:border-[#06B6D4]/50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <div
                          className={`text-xs font-mono font-black uppercase tracking-wider ${
                            isSelected ? "text-cyan-300" : "text-[#06B6D4]"
                          }`}
                        >
                          {practice.num}
                        </div>

                        <h3
                          className={`text-lg sm:text-xl font-black tracking-tight ${
                            isSelected ? "text-white" : "text-[#0F2942]"
                          }`}
                        >
                          {practice.title}
                        </h3>

                        <div
                          className={`text-xs font-mono ${
                            isSelected ? "text-slate-300 font-semibold" : "text-slate-500"
                          }`}
                        >
                          {practice.subtitle}
                        </div>
                      </div>

                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shrink-0 ${
                          isSelected
                            ? "bg-cyan-400 text-[#0F2B46] shadow-md shadow-cyan-900/30"
                            : "bg-white text-[#0D3B66] border border-sky-100 shadow-xs"
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Large Showcase Panel: Crisp Light Surface (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-[28px] bg-white border border-[#E7EEF5] p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col justify-between space-y-6"
                >
                  {/* Headline & Description */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D3B66]">
                          {current.num} / 04 • {current.subtitle}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-cyan-700 font-bold bg-[#F4FAFC] px-3 py-1 rounded-full border border-sky-100">
                        {current.metricHeadline}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#0F2B46] tracking-tight leading-tight">
                        {current.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#5B6B7C] mt-2 leading-relaxed font-normal">
                        {current.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Visual Architecture Preview (Mini Connected Graph) */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      System Architecture Flow
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
                      {current.archNodes.map((node, nIdx) => {
                        const NodeIcon = node.icon;
                        return (
                          <div
                            key={nIdx}
                            className="p-3.5 rounded-2xl bg-[#F8FBFD] border border-sky-100 hover:border-cyan-400 hover:bg-white hover:shadow-md transition-all space-y-1.5 group"
                          >
                            <div className="w-8 h-8 rounded-xl bg-white border border-sky-100 flex items-center justify-center text-[#0D3B66] shadow-xs group-hover:text-[#18B6D8] transition-colors">
                              <NodeIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#0F2B46] group-hover:text-[#0D3B66] transition-colors">
                                {node.label}
                              </div>
                              <div className="text-[10px] font-mono text-cyan-600 font-semibold mt-0.5">
                                {node.tag}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-3 pt-1">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Deliverables & Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.capabilities.map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F2B46]"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clean Bottom Action CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={current.href}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0F2B46] hover:bg-[#0D3B66] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all group/btn active:scale-95 cursor-pointer ml-auto sm:ml-0"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 text-cyan-300 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
