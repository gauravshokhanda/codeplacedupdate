"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Sparkles,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Globe,
  Smartphone,
  LineChart,
  Target,
  Server,
  Bot,
  Search,
  Activity,
  Workflow,
} from "lucide-react";

interface PracticeItem {
  id: string;
  num: string;
  title: string;
  category: string;
  tagline: string;
  href: string;
  icon: React.ElementType;
  primaryMetric: { value: string; label: string };
  secondaryMetric: { value: string; label: string };
  subItems: { title: string; desc: string; icon: React.ElementType }[];
  visualType: "app" | "data" | "marketing" | "ai";
}

const PRACTICES: PracticeItem[] = [
  {
    id: "app-web-dev",
    num: "01",
    title: "App & Web Development",
    category: "Product Engineering",
    tagline: "Build powerful digital products and platforms tailored to your business.",
    href: "/services",
    icon: Code2,
    primaryMetric: { value: "< 25ms", label: "p99 Global Latency" },
    secondaryMetric: { value: "60 FPS", label: "Native Mobile UI" },
    subItems: [
      { title: "SaaS Platforms", desc: "Multi-tenant cloud apps with automated scaling.", icon: Globe },
      { title: "Mobile Apps", desc: "Native iOS (Swift) & Android (Kotlin / Flutter).", icon: Smartphone },
      { title: "Web Applications", desc: "Next.js 15 App Router & Server Actions.", icon: Layers },
      { title: "Shopify Stores", desc: "Headless Shopify Plus with custom checkouts.", icon: Zap },
    ],
    visualType: "app",
  },
  {
    id: "data-engineering",
    num: "02",
    title: "Data Engineering & Analytics",
    category: "Lakehouses & BI",
    tagline: "Transform complex data into connected, actionable insights.",
    href: "/services",
    icon: Database,
    primaryMetric: { value: "18x", label: "Query Acceleration" },
    secondaryMetric: { value: "1.4M/s", label: "Stream Ingestion" },
    subItems: [
      { title: "ETL Pipelines", desc: "Automated dbt SQL transformations & CDC sync.", icon: Workflow },
      { title: "Dashboards", desc: "Executive cockpits with Row-Level Security.", icon: LineChart },
      { title: "Data Warehouse", desc: "Snowflake, Databricks & BigQuery Lakehouses.", icon: Server },
      { title: "Power BI", desc: "Interactive enterprise telemetry & BI modeling.", icon: Activity },
    ],
    visualType: "data",
  },
  {
    id: "digital-marketing",
    num: "03",
    title: "Digital & Social Marketing",
    category: "Demand Generation",
    tagline: "Turn your digital presence into a channel for meaningful growth.",
    href: "/services",
    icon: TrendingUp,
    primaryMetric: { value: "+340%", label: "Average Paid ROAS" },
    secondaryMetric: { value: "4.8x", label: "Search Intent Lift" },
    subItems: [
      { title: "SEO", desc: "Technical programmatic Core Web Vitals dominance.", icon: Search },
      { title: "AEO & GEO", desc: "AI Engine & Generative Engine Optimization.", icon: Bot },
      { title: "Paid Ads", desc: "High-ROAS Google, Meta & LinkedIn acquisition.", icon: Target },
      { title: "Attribution", desc: "Full-funnel multi-touch conversion telemetry.", icon: TrendingUp },
    ],
    visualType: "marketing",
  },
  {
    id: "ai-services",
    num: "04",
    title: "AI Services",
    category: "Intelligent Systems",
    tagline: "Deploy practical AI solutions that automate processes and unlock new business value.",
    href: "/services",
    icon: Sparkles,
    primaryMetric: { value: "85%", label: "Manual Triage Cut" },
    secondaryMetric: { value: "< 400ms", label: "RAG Retrieval" },
    subItems: [
      { title: "AI Agents", desc: "Deterministic autonomous agents with tool calling.", icon: Bot },
      { title: "Chatbots", desc: "Domain-tuned clinical & enterprise assistants.", icon: Sparkles },
      { title: "Automation", desc: "End-to-end invoice, OCR & document workflows.", icon: Zap },
      { title: "RAG Systems", desc: "Private vector retrieval with strict guardrails.", icon: Database },
    ],
    visualType: "ai",
  },
];

export function WhatWeBuildStory() {
  const [activeTab, setActiveTab] = useState<string>("app-web-dev");

  const current = PRACTICES.find((p) => p.id === activeTab) || PRACTICES[0];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF] relative overflow-hidden border-b border-sky-100/80">
      {/* Ambient background lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/70 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F4FAFC] text-[#0D3B66] border border-[#1CC8E5]/30">
              <Cpu className="w-3.5 h-3.5 text-[#18B6D8]" />
              <span>OUR CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2B46] leading-[1.12]">
              Four Core Capabilities. <br className="hidden sm:inline" />
              Zero Engineering Compromise.
            </h2>
            <p className="text-base sm:text-lg text-[#5B6B7C]">
              A focused set of services designed to help businesses build, scale and grow with modern technology.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0D3B66] hover:text-[#1CC8E5] transition-colors group self-start md:self-auto"
          >
            <span>Explore Full Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Large Interactive Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Large Vertical Selector (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            {PRACTICES.map((p) => {
              const isSelected = activeTab === p.id;
              const IconComponent = p.icon;

              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  onMouseEnter={() => setActiveTab(p.id)}
                  className={`text-left p-6 sm:p-7 rounded-[28px] transition-all duration-300 relative cursor-pointer border ${
                    isSelected
                      ? "bg-[#0F2B46] text-white border-[#0F2B46] shadow-xl shadow-slate-900/10 scale-[1.02]"
                      : "bg-[#F4FAFC] hover:bg-white text-[#0F2B46] border-sky-100 hover:border-cyan-400/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-white/10 text-cyan-300"
                            : "bg-white text-[#0D3B66] border border-sky-100"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <div
                          className={`text-xs font-mono font-bold uppercase tracking-wider ${
                            isSelected ? "text-cyan-300" : "text-[#18B6D8]"
                          }`}
                        >
                          {p.num} • {p.category}
                        </div>
                        <h3
                          className={`text-lg sm:text-xl font-black mt-0.5 tracking-tight ${
                            isSelected ? "text-white" : "text-[#0F2B46]"
                          }`}
                        >
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform ${
                        isSelected
                          ? "bg-cyan-400 text-[#0F2B46] rotate-90"
                          : "text-slate-400 opacity-60"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-xs sm:text-sm text-slate-300 mt-3.5 leading-relaxed"
                    >
                      {p.tagline}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Visual Stage (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-[36px] bg-[#0F2B46] text-white p-8 sm:p-10 lg:p-12 border border-[#1CC8E5]/30 shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden"
              >
                {/* Decorative glow mesh */}
                <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-[110px] pointer-events-none" />

                {/* Stage Header */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                        PRACTICE {current.num} ARCHITECTURE
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {current.num} / 04
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 mt-1.5 leading-relaxed font-normal">
                      {current.tagline}
                    </p>
                  </div>
                </div>

                {/* 4 Focused Sub-Item Mockup Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
                  {current.subItems.map((sub, idx) => {
                    const SubIcon = sub.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all space-y-1.5 group"
                      >
                        <div className="flex items-center gap-2.5 text-cyan-300">
                          <SubIcon className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {sub.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-snug">
                          {sub.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* 2 Big Verified SLA Metrics */}
                <div className="grid grid-cols-2 gap-4 relative z-10 pt-2">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-cyan-300 font-mono">
                      {current.primaryMetric.value}
                    </div>
                    <div className="text-[11px] text-slate-300 font-semibold mt-0.5">
                      {current.primaryMetric.label}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                      {current.secondaryMetric.value}
                    </div>
                    <div className="text-[11px] text-slate-300 font-semibold mt-0.5">
                      {current.secondaryMetric.label}
                    </div>
                  </div>
                </div>

                {/* Direct Link to Deep Services Page */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono text-slate-400">
                    Full engineering specs on services page
                  </span>

                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#0F2B46] font-extrabold text-xs sm:text-sm shadow-md transition-all group/btn"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
