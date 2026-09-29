"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Lock,
  BarChart3,
  Activity,
  Sparkles,
  Bot,
  Workflow,
  Play,
  Pause,
  ChevronRight,
  Database,
  Mail,
  Check,
  Zap,
  Layers,
  Server,
  Cpu,
} from "lucide-react";

interface HeroProps {
  onOpenBookAudit?: (scope?: string) => void;
}

const TRUSTED_LOGOS = [
  { name: "OpenAI", tag: "GPT-4o Partner" },
  { name: "Anthropic", tag: "Claude 3.5 Sonnet" },
  { name: "AWS", tag: "Advanced Tier" },
  { name: "Microsoft", tag: "Azure Cloud" },
  { name: "Meta", tag: "Llama 3 Ecosystem" },
  { name: "Google Cloud", tag: "Vertex AI" },
  { name: "Stripe", tag: "Billing Sync" },
  { name: "Databricks", tag: "Lakehouse Core" },
];

const WALKTHROUGH_TABS = [
  { id: 0, title: "1. Executive Dashboard", icon: BarChart3, badge: "Live KPI Telemetry" },
  { id: 1, title: "2. AI Copilot", icon: Bot, badge: "RAG & Agents" },
  { id: 2, title: "3. Predictive Analytics", icon: TrendingUp, badge: "Forecast Engine" },
  { id: 3, title: "4. Workflow Automation", icon: Workflow, badge: "LangGraph Nodes" },
  { id: 4, title: "5. Enterprise Insights", icon: ShieldCheck, badge: "SOC2 & Security" },
];

export function Hero({ onOpenBookAudit }: HeroProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [copilotQueryIndex, setCopilotQueryIndex] = useState(0);

  const marqueeLogos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  // Scroll Container Ref for Seamless Edge-to-Edge Expansion
  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "center center"],
  });

  // Issue 1: Border Radius smoothly animates 32px -> 24px -> 16px -> 8px -> 0px
  const showcaseRadius = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.7, 0.95],
    ["32px", "20px", "8px", "0px"]
  );

  // Width smoothly expands from 90vw -> 96vw -> 100vw (Edge-to-Edge)
  const showcaseWidth = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.7, 0.95],
    ["90vw", "96vw", "100vw", "100vw"]
  );

  const showcaseScale = useTransform(
    scrollYProgress,
    [0.1, 0.6, 0.95],
    [0.96, 1.0, 1.0]
  );

  const showcaseShadow = useTransform(
    scrollYProgress,
    [0.1, 0.6],
    [
      "0 20px 60px rgba(4, 28, 50, 0.25)",
      "0 45px 140px rgba(4, 28, 50, 0.55)",
    ]
  );

  // Auto-cycle through walkthrough tabs every 4 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % WALKTHROUGH_TABS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Rotate AI Copilot Prompt Simulations
  useEffect(() => {
    const copilotInterval = setInterval(() => {
      setCopilotQueryIndex((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(copilotInterval);
  }, []);

  const copilotConversations = [
    {
      query: "Analyze infrastructure costs & anomaly spend across clusters",
      response: "Detected 18% unnecessary cloud spend across us-east-1 idle GPU clusters. Auto-rebalancing to spot instances saves $6,420/mo with zero SLA degradation.",
      metric: "Annual Projected Savings: $77,040",
      citation: "Lakehouse FinOps • 99.4% confidence",
    },
    {
      query: "Generate executive pipeline attribution & CAC breakdown",
      response: "Attributed ₹1.84 Crore pipeline to multi-touch intent signals across Search and Organic Executive Audits. Blended CAC dropped by -22.4% MoM.",
      metric: "Blended ROAS: 8.4x Across Channels",
      citation: "Snowflake Ingest #4910 • Verified",
    },
    {
      query: "Forecast Q4 MRR growth velocity & churn risk signals",
      response: "Predicted Q4 ARR acceleration is +34.2% YoY. Zero high-value enterprise accounts are exhibiting retention churn risk metrics.",
      metric: "Revenue Forecast Fidelity: 98.6%",
      citation: "Predictive Analytics Model • SOC2 Audited",
    },
  ];

  return (
    <section
      id="hero"
      className="relative bg-[#F8FAFC] overflow-hidden pt-[110px] pb-0"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8,131,149,0.08), rgba(5,191,219,0.04), transparent 70%)",
        }}
      />

      <div className="site-container relative z-10">
        {/* ========================================================================= */}
        {/* 1. HERO HEADER (Centered Layout) */}
        {/* ========================================================================= */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[36px] px-5 rounded-full bg-[#EAF8FF] border border-[#0A4D68]/20 flex items-center justify-center gap-2 text-xs font-bold tracking-wider text-[#0A4D68] uppercase shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#088395] animate-pulse" />
            <span>ENTERPRISE AI • DATA SYSTEMS • AUTOMATION</span>
          </motion.div>
        </div>

        {/* Large Centered Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[920px] mx-auto text-center"
        >
          <h1 className="text-[42px] sm:text-[60px] lg:text-[76px] font-[900] leading-[0.98] sm:leading-[0.94] tracking-[-0.04em] text-[#041C32] [text-wrap:balance]">
            Data Systems That Scale.{" "}
            <span className="bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#05BFDB] bg-clip-text text-transparent block sm:inline">
              Delivered in Weeks.
            </span>
          </h1>
        </motion.div>

        {/* Centered Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[760px] mx-auto text-center mt-6"
        >
          <p className="text-[18px] sm:text-[20px] leading-[1.65] text-[#04293A]/80 font-normal">
            From autonomous AI copilots to unified data platforms, we engineer high-throughput systems that turn complex enterprise workflows into competitive advantage.
          </p>
        </motion.div>

        {/* Centered CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto h-[56px] px-8 rounded-[16px] bg-[#0A4D68] hover:bg-[#064663] text-white font-bold text-[15px] flex items-center justify-center gap-2.5 shadow-xl shadow-[#0A4D68]/25 active:scale-95 transition-all duration-200 border border-[#088395]/30"
          >
            <span>Book Architecture Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/case-studies"
            className="w-full sm:w-auto h-[56px] px-8 rounded-[16px] bg-white hover:bg-[#EAF8FF] text-[#041C32] font-bold text-[15px] border border-slate-200 shadow-xs flex items-center justify-center transition-all duration-200"
          >
            <span>View Case Studies</span>
          </Link>
        </motion.div>

        {/* Continuous Trusted By Logos Infinite Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-[48px] flex flex-col items-center select-none"
        >
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-5">
            Trusted by engineering leaders building at scale
          </div>

          <div
            className="w-full max-w-[1000px] overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]"
            onMouseEnter={() => setIsMarqueePaused(true)}
            onMouseLeave={() => setIsMarqueePaused(false)}
          >
            <motion.div
              animate={{ x: isMarqueePaused ? undefined : ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex items-center gap-12 sm:gap-16 w-max cursor-pointer py-1"
            >
              {marqueeLogos.map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  className="flex items-center gap-2.5 opacity-65 hover:opacity-100 transition-opacity duration-200 flex-shrink-0 group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#088395] transition-colors" />
                  <span className="font-bold text-sm sm:text-base text-[#04293A] tracking-tight group-hover:text-[#0A4D68] transition-colors">
                    {brand.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    ({brand.tag})
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FLAGSHIP PRODUCT SHOWCASE: EDGE-TO-EDGE EXPANDING SHOWCASE (ZERO GAP) */}
      {/* ========================================================================= */}
      <div ref={showcaseRef} className="relative mt-[56px] w-full flex justify-center z-20 overflow-hidden">
        <motion.div
          style={{
            scale: showcaseScale,
            width: showcaseWidth,
            borderRadius: showcaseRadius,
            boxShadow: showcaseShadow,
          }}
          className="bg-[#041C32] border border-[#088395]/30 overflow-hidden text-white transition-shadow duration-300 transform-gpu will-change-transform"
        >
          {/* Top Browser Window Header */}
          <div className="bg-[#04293A] border-b border-[#064663] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 select-none">
            {/* Left: Traffic Lights + Brand Mark + Fake URL */}
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-[#EAF8FF]">
                <Lock className="w-3 h-3 text-[#05BFDB]" />
                <span>codeplaced.ai/live-dashboard</span>
              </div>
            </div>

            {/* Right: Live Stream & Controls */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-2 text-xs font-bold text-[#05BFDB]">
                <span className="w-2 h-2 rounded-full bg-[#05BFDB] animate-ping" />
                <span>● Live Product Stream • 60 FPS</span>
              </div>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-1.5"
                title={isPlaying ? "Pause Automated Walkthrough" : "Play Automated Walkthrough"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3" />
                    <span>Play</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 5 Real Walkthrough Navigation Tabs */}
          <div className="bg-[#064663]/60 px-4 py-2.5 border-b border-[#0A4D68]/40 overflow-x-auto select-none">
            <div className="flex items-center gap-2 min-w-max">
              {WALKTHROUGH_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsPlaying(false);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2.5 ${
                      isActive
                        ? "bg-[#0A4D68] text-white shadow-md border border-[#05BFDB]/50 ring-2 ring-[#05BFDB]/20"
                        : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#05BFDB]" : "text-slate-400"}`} />
                    <span>{tab.title}</span>
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#05BFDB] text-[#041C32] font-black"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Interactive Stage Body */}
          <div className="relative min-h-[520px] sm:min-h-[560px] p-6 sm:p-10 bg-gradient-to-b from-[#041C32] to-[#04293A] flex flex-col justify-center overflow-hidden">
            {/* Subtle background mesh grid */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#05BFDB 1px, transparent 1px), linear-gradient(90deg, #05BFDB 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <AnimatePresence mode="wait">
              {/* ================================================================= */}
              {/* TAB 1: EXECUTIVE DASHBOARD & LIVE KPI TELEMETRY */}
              {/* ================================================================= */}
              {activeTab === 0 && (
                <motion.div
                  key="tab-executive"
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 relative z-10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0A4D68]/40 text-[#05BFDB] border border-[#088395]/40">
                      <Sparkles className="w-3.5 h-3.5 text-[#05BFDB]" />
                      <span>LIVE REVENUE TELEMETRY & ATTRIBUTION MATRIX</span>
                    </div>
                    <span className="text-xs font-mono text-[#05BFDB]">
                      Ingestion: 2.8M events/sec • Zero Loss
                    </span>
                  </div>

                  {/* 4 KPI Counting Metric Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xs">
                      <div className="text-xs text-slate-300 font-semibold flex items-center justify-between">
                        <span>Attributed Revenue</span>
                        <TrendingUp className="w-4 h-4 text-[#05BFDB]" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white mt-1.5 tracking-tight">
                        ₹1.84 Crore
                      </div>
                      <div className="text-xs font-bold text-emerald-400 mt-2 flex items-center gap-1">
                        <span>+34.2% MoM Expansion</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xs">
                      <div className="text-xs text-slate-300 font-semibold flex items-center justify-between">
                        <span>Active Enterprise Users</span>
                        <Users className="w-4 h-4 text-[#05BFDB]" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white mt-1.5 tracking-tight">
                        148,200
                      </div>
                      <div className="text-xs font-bold text-[#05BFDB] mt-2 flex items-center gap-1">
                        <span>99.999% SLA Guaranteed</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xs">
                      <div className="text-xs text-slate-300 font-semibold flex items-center justify-between">
                        <span>Blended ROAS</span>
                        <Zap className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white mt-1.5 tracking-tight">
                        8.4x
                      </div>
                      <div className="text-xs font-bold text-emerald-400 mt-2 flex items-center gap-1">
                        <span>CAC Reduced by -22.4%</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xs">
                      <div className="text-xs text-slate-300 font-semibold flex items-center justify-between">
                        <span>Query Latency (p99)</span>
                        <Activity className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1.5 tracking-tight">
                        11.2 ms
                      </div>
                      <div className="text-xs font-bold text-slate-300 mt-2 flex items-center gap-1">
                        <span>Sub-15ms Target Met</span>
                      </div>
                    </div>
                  </div>

                  {/* Chart & Live Stream Matrix */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                        <span>MULTI-MONTH MRR ACCELERATION RUN-RATE</span>
                        <span className="text-[#05BFDB]">Snowflake CDC</span>
                      </div>
                      <div className="h-28 w-full relative">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 500 100">
                          <defs>
                            <linearGradient id="execChartGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#05BFDB" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#0A4D68" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                            d="M 0,85 C 90,75 140,80 220,45 C 310,15 390,35 500,8"
                            fill="none"
                            stroke="#05BFDB"
                            strokeWidth="3"
                          />
                          <motion.path
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            d="M 0,85 C 90,75 140,80 220,45 C 310,15 390,35 500,8 L 500,100 L 0,100 Z"
                            fill="url(#execChartGrad)"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 text-xs">
                      <div className="text-slate-300 font-bold uppercase tracking-wider mb-2">
                        Live Change-Data-Capture (CDC)
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.04] flex items-center justify-between">
                        <span className="font-mono text-[#05BFDB]">HighIntent_Search_Ads</span>
                        <span className="text-emerald-400 font-bold">18.4% CVR</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.04] flex items-center justify-between">
                        <span className="font-mono text-[#05BFDB]">Direct_Executive_Audit</span>
                        <span className="text-emerald-400 font-bold">32.6% CVR</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ================================================================= */}
              {/* TAB 2: AI COPILOT & TYPING PROMPT SIMULATION */}
              {/* ================================================================= */}
              {activeTab === 1 && (
                <motion.div
                  key="tab-copilot"
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 relative z-10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0A4D68]/40 text-[#05BFDB] border border-[#088395]/40">
                      <Bot className="w-3.5 h-3.5 text-[#05BFDB]" />
                      <span>RAG COPILOT • DETERMINISTIC CITATION VERIFICATION</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">Zero Hallucination Guarantee</span>
                  </div>

                  <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.05] border border-white/10 space-y-5">
                    {/* User Prompt */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                        U
                      </div>
                      <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-sm text-[#EAF8FF] font-medium max-w-xl">
                        &ldquo;{copilotConversations[copilotQueryIndex].query}&rdquo;
                      </div>
                    </div>

                    {/* AI Copilot Response */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-[#0A4D68] text-[#05BFDB] flex items-center justify-center font-bold text-xs flex-shrink-0 border border-[#05BFDB]/40">
                        <Bot className="w-4 h-4 text-[#05BFDB]" />
                      </div>
                      <div className="p-5 rounded-2xl bg-[#041C32] border border-[#064663] text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl space-y-3">
                        <p>{copilotConversations[copilotQueryIndex].response}</p>
                        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs">
                          <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5" />
                            {copilotConversations[copilotQueryIndex].metric}
                          </span>
                          <span className="text-[#05BFDB] font-mono">
                            {copilotConversations[copilotQueryIndex].citation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ================================================================= */}
              {/* TAB 3: PREDICTIVE ANALYTICS & FORECASTING */}
              {/* ================================================================= */}
              {activeTab === 2 && (
                <motion.div
                  key="tab-predictive"
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 relative z-10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0A4D68]/40 text-[#05BFDB] border border-[#088395]/40">
                      <TrendingUp className="w-3.5 h-3.5 text-[#05BFDB]" />
                      <span>PREDICTIVE ML FORECASTING & ANOMALY RADAR</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">Model Confidence: 98.6%</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
                      <div className="text-2xl sm:text-3xl font-black text-white">₹8.6 Crore</div>
                      <div className="text-xs text-[#05BFDB] font-medium mt-1">Projected Q4 Run Rate</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
                      <div className="text-2xl sm:text-3xl font-black text-emerald-400">0.02%</div>
                      <div className="text-xs text-slate-300 font-medium mt-1">Enterprise Churn Probability</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
                      <div className="text-2xl sm:text-3xl font-black text-white">99.98%</div>
                      <div className="text-xs text-[#05BFDB] font-medium mt-1">Pipeline Delivery Fidelity</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                    <div className="text-xs font-bold text-slate-300 flex items-center justify-between">
                      <span>MONTE CARLO REVENUE SIMULATION (10,000 RUNS)</span>
                      <span className="text-[#05BFDB]">Bandwidth: High-Confidence Zone</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl bg-white/[0.04] text-center">
                        <span className="text-slate-400 block text-[10px]">P10 Worst Case</span>
                        <span className="text-white font-bold text-sm">₹7.8 Crore</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#0A4D68]/40 border border-[#05BFDB]/30 text-center">
                        <span className="text-[#05BFDB] block text-[10px]">P50 Median</span>
                        <span className="text-white font-black text-sm">₹8.6 Crore</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.04] text-center">
                        <span className="text-slate-400 block text-[10px]">P90 Best Case</span>
                        <span className="text-emerald-400 font-bold text-sm">₹9.4 Crore</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ================================================================= */}
              {/* TAB 4: WORKFLOW AUTOMATION & LANGGRAPH NODE NETWORK */}
              {/* ================================================================= */}
              {activeTab === 3 && (
                <motion.div
                  key="tab-workflow"
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 relative z-10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0A4D68]/40 text-[#05BFDB] border border-[#088395]/40">
                      <Workflow className="w-3.5 h-3.5 text-[#05BFDB]" />
                      <span>LANGGRAPH AUTONOMOUS MULTI-SYSTEM NODE NETWORK</span>
                    </div>
                    <span className="text-xs font-mono text-[#05BFDB]">Self-Healing Exception Loops</span>
                  </div>

                  {/* 5-Node Connected Flow */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                    {[
                      { title: "Salesforce CRM", sub: "Event Trigger", icon: Users },
                      { title: "Qdrant Vector", sub: "Sub-10ms Match", icon: Database },
                      { title: "LangGraph Engine", sub: "Agent State Loop", icon: Bot },
                      { title: "Executive Board", sub: "Instant Telemetry", icon: BarChart3 },
                      { title: "Slack / Email", sub: "Action Committed", icon: Mail },
                    ].map((node, i) => {
                      const IconNode = node.icon;
                      return (
                        <div
                          key={node.title}
                          className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-center space-y-2 relative group hover:border-[#05BFDB]/50 transition-colors"
                        >
                          <div className="w-10 h-10 mx-auto rounded-xl bg-[#0A4D68] text-[#05BFDB] flex items-center justify-center shadow-xs">
                            <IconNode className="w-5 h-5" />
                          </div>
                          <div className="text-xs font-bold text-white">{node.title}</div>
                          <div className="text-[10px] text-slate-400">{node.sub}</div>

                          {i < 4 && (
                            <div className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#05BFDB]/60 z-10">
                              <ChevronRight className="w-4 h-4 animate-pulse" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Continuous Autonomous Execution Pipeline</span>
                    </span>
                    <span className="text-emerald-400 font-bold">100% Auditable Traces</span>
                  </div>
                </motion.div>
              )}

              {/* ================================================================= */}
              {/* TAB 5: ENTERPRISE INSIGHTS & SOC2 GOVERNANCE */}
              {/* ================================================================= */}
              {activeTab === 4 && (
                <motion.div
                  key="tab-security"
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 relative z-10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0A4D68]/40 text-[#05BFDB] border border-[#088395]/40">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>ENTERPRISE GOVERNANCE & AIR-GAPPED VPC DEPLOYMENT</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">SOC2 Type II Ready</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2">
                      <Lock className="w-6 h-6 text-[#05BFDB]" />
                      <h4 className="text-sm font-bold text-white">Zero Data Retention</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Your proprietary data is never used to train public models. Air-gapped private cluster deployment guaranteed.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2">
                      <Server className="w-6 h-6 text-emerald-400" />
                      <h4 className="text-sm font-bold text-white">100% IP Ownership</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        All source code, schemas, ETL pipelines, and fine-tuned weights committed directly to your private Git repo.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2">
                      <Cpu className="w-6 h-6 text-[#05BFDB]" />
                      <h4 className="text-sm font-bold text-white">2–4 Week Fixed SLA</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Guaranteed production cutover within weeks, backed by dedicated Principal Engineers and SLAs.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#088395] hover:bg-[#05BFDB] text-[#041C32] font-black text-xs shadow-xl transition-all"
                    >
                      Schedule 30-Min Architecture Discovery
                    </Link>
                    <Link
                      href="/services"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all"
                    >
                      Explore All 5 Architecture Pillars →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Window Footer Telemetry Bar */}
          <div className="bg-[#04293A] px-6 py-3.5 border-t border-[#064663] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300 select-none">
            <div className="flex items-center gap-4">
              <span>Enterprise SLA: <strong className="text-white">99.999%</strong></span>
              <span>•</span>
              <span>Delivery SLA: <strong className="text-emerald-400">2–4 Weeks Fixed</strong></span>
              <span>•</span>
              <span>Security: <strong className="text-[#05BFDB]">Air-Gapped Private VPC</strong></span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#05BFDB] font-mono">Module {activeTab + 1} of 5</span>
              <Link
                href="/contact"
                className="px-3.5 py-1.5 rounded-lg bg-[#0A4D68] hover:bg-[#088395] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <span>Scope Architecture</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
