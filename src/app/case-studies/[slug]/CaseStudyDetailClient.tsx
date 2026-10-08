"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart3,
  Server,
  Cloud,
  Lock,
  Database,
  Users,
  Quote,
  Check,
  Search,
  Target,
  ChevronLeft,
  ChevronRight,
  Bot,
  Activity,
  Globe2,
  Workflow,
  Rocket,
  Award,
  Zap,
  ExternalLink,
  DollarSign,
  Star,
  Clock,
  Briefcase,
  AlertCircle,
  Code2,
  CheckCircle,
  Play,
  ArrowUpRight,
} from "lucide-react";
import { CaseStudyItem } from "@/lib/caseStudiesData";

interface CaseStudyDetailClientProps {
  study: CaseStudyItem;
  prevStudy: CaseStudyItem | null;
  nextStudy: CaseStudyItem | null;
  relatedStudies: CaseStudyItem[];
}

export function CaseStudyDetailClient({
  study,
  prevStudy,
  nextStudy,
  relatedStudies,
}: CaseStudyDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allImages = [study.heroImage, ...(study.galleryImages || [])];

  return (
    <div
      style={{
        backgroundColor: "#F4FAFD",
      }}
      className="relative min-h-screen text-[#072C4C] selection:bg-[#072C4C] selection:text-white font-sans overflow-x-hidden"
    >
      {/* Dynamic Background Mesh */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[750px] pointer-events-none opacity-70 -z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(22,211,245,0.15) 0%, rgba(7,44,76,0.04) 50%, transparent 80%)",
        }}
      />

      {/* ========================================================================= */}
      {/* 1. IMMERSIVE HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06]">
        <div className="max-w-[1280px] mx-auto space-y-10">
          
          {/* Back to Case Studies Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#072C4C] hover:text-[#16D3F5] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Case Studies</span>
            </Link>

            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              {study.industry} &bull; {study.clientType}
            </span>
          </div>

          {/* Split Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Title, Summary, Team Metadata, Action CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#16D3F5] border border-cyan-100">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRODUCTION CASE STUDY</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C] leading-[1.1]"
              >
                {study.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-base sm:text-lg text-[#5B738B] leading-relaxed"
              >
                {study.shortDescription}
              </motion.p>

              {/* Engineering Team & Project Metadata Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Team Size</div>
                  <div className="text-xs font-bold text-[#072C4C] font-mono mt-0.5">{study.teamSize}</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Duration</div>
                  <div className="text-xs font-bold text-[#072C4C] font-mono mt-0.5">{study.duration}</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Active Scale</div>
                  <div className="text-xs font-bold text-[#072C4C] font-mono mt-0.5">{study.activeUsers}</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Availability</div>
                  <div className="text-xs font-bold text-emerald-600 font-mono mt-0.5">{study.availability}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href="#production-architecture"
                  className="w-full sm:w-auto h-[50px] px-7 rounded-full text-white font-bold text-xs shadow-md hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, #072C4C 0%, #16D3F5 100%)",
                  }}
                >
                  <Server className="w-4 h-4" />
                  <span>View Architecture</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto h-[50px] px-7 rounded-full bg-white hover:bg-slate-50 text-[#072C4C] font-bold text-xs border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-300"
                >
                  <span>Book Strategy Call</span>
                </Link>
              </div>
            </div>

            {/* Right Side: Layered Dashboard Mockup with Floating Widgets */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[32px] overflow-hidden border border-[#072C4C]/[0.08] shadow-2xl min-h-[400px] sm:min-h-[460px] group">
                <img
                  src={allImages[activeImageIndex]}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072C4C]/90 via-[#072C4C]/20 to-transparent" />

                {/* Floating Telemetry Badge Top-Right */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#072C4C]/90 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>STREAM ACTIVE</span>
                </div>

                {/* Floating Metrics Widget Bottom-Left */}
                <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-xl text-[#072C4C] flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Primary Production Metric
                    </div>
                    <div className="text-xl font-black font-mono text-[#072C4C]">
                      {study.metrics[0]?.value}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-600 font-mono">
                      {study.metrics[0]?.label}
                    </span>
                    <div className="text-[10px] text-slate-400 font-mono">Verified in Production</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE PROBLEM ("From Fragmented Data To Unified Intelligence") */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
        <div className="max-w-[1280px] mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
              <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
              <span>THE OPERATIONAL BOTTLENECK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              From Fragmented Data To Unified Intelligence
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              Before CodePlaced engineered the solution, legacy architecture and operational silos caused severe business friction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Problem Statement & Friction Points (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-[30px] bg-[#FFF8F8] border border-rose-200 space-y-4">
                <div className="text-xs font-mono font-bold uppercase text-rose-600">
                  Legacy Architecture Failure
                </div>
                <p className="text-sm sm:text-base text-[#072C4C] leading-relaxed font-medium">
                  {study.problemStatement}
                </p>
              </div>

              {/* Business Goals Target */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Mission-Critical Objectives
                </div>
                {study.businessGoals.map((goal, gIdx) => (
                  <div key={gIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FCFE] border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Disconnected Systems Diagram (6 Cols) */}
            <div className="lg:col-span-6 p-8 rounded-[30px] bg-[#072C4C] text-white border border-[#16D3F5]/20 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-cyan-300 font-bold">LEGACY SILOED TOPOLOGY (BEFORE)</span>
                <span className="text-[10px] font-mono text-rose-400 bg-rose-950/50 px-2.5 py-0.5 rounded border border-rose-500/30">
                  HIGH LATENCY
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-slate-300">
                  <span>Disconnected Legacy Databases</span>
                  <span className="text-rose-400">4-Hour Batch Lag</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-slate-300">
                  <span>Manual Charting & Data Entry</span>
                  <span className="text-rose-400">High Error Margin</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-slate-300">
                  <span>No Executive Real-Time Telemetry</span>
                  <span className="text-rose-400">Blind Decisions</span>
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-cyan-200/80 font-mono">
                &darr; Modernized with CodePlaced Cloud-Native Mesh &darr;
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CHALLENGE → SOLUTION → OUTCOME (3 Color-Coded Premium Cards) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#F4FAFD]">
        <div className="max-w-[1280px] mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              <Workflow className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>THE THREE-PILLAR STORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              Challenge &bull; Solution &bull; Outcome
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              A complete narrative breakdown of how CodePlaced solved complex operational bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 01. The Challenge (Rose) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="p-8 sm:p-9 rounded-[32px] bg-[#FFF8F8] border border-rose-200 space-y-6 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-mono font-black text-sm">
                  01
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600">
                    Business Problem
                  </div>
                  <h3 className="text-2xl font-black text-[#072C4C] mt-1">The Challenge</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5B738B] leading-relaxed">
                  {study.problemStatement}
                </p>

                {study.challenges && study.challenges.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-rose-200/60">
                    <div className="text-[10px] font-mono font-bold uppercase text-slate-400">Technical Constraints</div>
                    {study.challenges.map((c, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-rose-500 font-bold">&bull;</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* 02. The Engineering Solution (Cyan/Blue) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="p-8 sm:p-9 rounded-[32px] bg-[#F8FCFE] border border-[#16D3F5]/50 space-y-6 flex flex-col justify-between shadow-lg shadow-cyan-500/5"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F7FC] text-[#072C4C] flex items-center justify-center font-mono font-black text-sm">
                  02
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#16D3F5]">
                    Architecture & Delivery
                  </div>
                  <h3 className="text-2xl font-black text-[#072C4C] mt-1">The Solution</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5B738B] leading-relaxed">
                  {study.solution}
                </p>

                {study.solutionHighlights && study.solutionHighlights.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    <div className="text-[10px] font-mono font-bold uppercase text-slate-400">Core Highlights</div>
                    {study.solutionHighlights.map((sh, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#16D3F5] shrink-0 mt-0.5" />
                        <span>{sh}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* 03. The Commercial Outcome (Emerald) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="p-8 sm:p-9 rounded-[32px] bg-[#F0FDF4] border border-emerald-200 space-y-6 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-mono font-black text-sm">
                  03
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600">
                    Commercial ROI
                  </div>
                  <h3 className="text-2xl font-black text-[#072C4C] mt-1">The Outcome</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5B738B] leading-relaxed">
                  {study.businessImpact}
                </p>

                <div className="space-y-2 pt-2 border-t border-emerald-200/60">
                  <div className="text-[10px] font-mono font-bold uppercase text-slate-400">Verified Gains</div>
                  {study.results.map((r, i) => (
                    <div key={i} className="text-xs text-slate-700 flex items-center justify-between border-b border-emerald-100/60 pb-1">
                      <span className="font-medium text-slate-600">{r.title}</span>
                      <span className="font-mono font-black text-emerald-700">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE SYSTEM ARCHITECTURE ("Production Architecture") */}
      {/* ========================================================================= */}
      <section id="production-architecture" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#072C4C] text-white relative overflow-hidden">
        {/* Animated Cyber Grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#16D3F5 1px, transparent 1px), linear-gradient(90deg, #16D3F5 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="max-w-[1280px] mx-auto space-y-16 relative z-10">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/15">
              <Server className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>INTERACTIVE SYSTEM TOPOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Production Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Live multi-tier data pipeline and execution framework engineered for continuous telemetry, sub-second latency, and zero data leakage.
            </p>
          </div>

          {/* Interactive Topology Box */}
          <div className="p-7 sm:p-9 rounded-3xl bg-[#051C33]/90 border border-cyan-500/40 shadow-[0_0_50px_rgba(22,211,245,0.15)] space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
                <Activity className="w-4 h-4 text-[#16D3F5]" />
                <span>END-TO-END PIPELINE & EXECUTION TOPOLOGY</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                LIVE PRODUCTION MESH
              </span>
            </div>

            {/* 4 Topology Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              {study.architectureNodes.map((node, nIdx) => (
                <div
                  key={nIdx}
                  className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="text-cyan-300 font-bold">{node.title}</div>
                    <div className="text-[10px] text-cyan-200/80 uppercase">{node.subtitle}</div>
                    <p className="text-[10px] text-slate-300 font-sans leading-relaxed pt-1">{node.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-emerald-400 font-bold">{node.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PRODUCT SHOWCASE (Actual Interface Screenshots & Annotations) */}
      {/* ========================================================================= */}
      {study.showcaseModules && study.showcaseModules.length > 0 && (
        <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
          <div className="max-w-[1280px] mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#16D3F5]" />
                <span>PRODUCT EXPERIENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
                Interface & Cockpit Showcase
              </h2>
              <p className="text-base sm:text-lg text-[#5B738B]">
                High-throughput dashboards, automated consoles, and real-time operational interfaces built for enterprise end-users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {study.showcaseModules.map((mod, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                  className="rounded-[30px] bg-[#F8FCFE] border border-[#072C4C]/[0.08] overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={mod.image}
                      alt={mod.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#072C4C]/90 text-cyan-300">
                      {mod.tag}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-black text-[#072C4C]">{mod.name}</h3>
                    <p className="text-xs text-[#5B738B] leading-relaxed">{mod.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. ENGINEERING DECISIONS ("Why We Built It This Way") */}
      {/* ========================================================================= */}
      {study.engineeringDecisions && study.engineeringDecisions.length > 0 && (
        <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#F4FAFD]">
          <div className="max-w-[1280px] mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
                <Cpu className="w-3.5 h-3.5 text-[#16D3F5]" />
                <span>ARCHITECTURAL RATIONALE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
                Why We Built It This Way
              </h2>
              <p className="text-base sm:text-lg text-[#5B738B]">
                Engineering decisions driven by real-world load requirements, security guarantees, and commercial outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {study.engineeringDecisions.map((dec, dIdx) => (
                <motion.div
                  key={dIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: dIdx * 0.08, ease: "easeOut" }}
                  className="p-8 rounded-[32px] bg-white border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-xl transition-all space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-base font-black text-[#072C4C] font-mono">{dec.technology}</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-cyan-50 text-[#072C4C] font-bold">
                      ARCH DECISION
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-mono font-bold text-rose-600 uppercase text-[10px]">Problem: </span>
                      <span className="text-slate-600">{dec.problem}</span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-[#16D3F5] uppercase text-[10px]">Decision: </span>
                      <span className="text-slate-800 font-medium">{dec.decision}</span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-emerald-600 uppercase text-[10px]">Benefit: </span>
                      <span className="text-emerald-800 font-bold">{dec.benefit}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 7. IMPLEMENTATION TIMELINE */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
        <div className="max-w-[1280px] mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              <Workflow className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>SPRINT PROGRESSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              Implementation Timeline
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              A structured roadmap from discovery and security audits to zero-downtime production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {study.process.map((step, sIdx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: sIdx * 0.08, ease: "easeOut" }}
                className="p-6 rounded-3xl bg-[#F8FCFE] border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:bg-white hover:shadow-lg transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#072C4C] font-mono font-black text-sm flex items-center justify-center shadow-xs">
                    {step.step}
                  </div>
                  <h3 className="text-base font-black text-[#072C4C]">{step.title}</h3>
                  <p className="text-xs text-[#5B738B] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. BEFORE VS AFTER (Split Transformation Comparison) */}
      {/* ========================================================================= */}
      {study.beforeAfter && study.beforeAfter.length > 0 && (
        <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#F4FAFD]">
          <div className="max-w-[1280px] mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
                <BarChart3 className="w-3.5 h-3.5 text-[#16D3F5]" />
                <span>TRANSFORMATION COMPARISON</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
                Before vs After Implementation
              </h2>
              <p className="text-base sm:text-lg text-[#5B738B]">
                Direct telemetry metrics benchmarked before and after CodePlaced deployment.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#072C4C]/[0.08] shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-[#072C4C] text-white font-mono text-xs uppercase tracking-wider">
                      <th className="p-5 pl-8 font-bold">Metric Dimension</th>
                      <th className="p-5 text-rose-300 font-bold">Before CodePlaced</th>
                      <th className="p-5 text-emerald-300 font-bold">After CodePlaced</th>
                      <th className="p-5 pr-8 text-cyan-300 font-bold text-right">Net Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {study.beforeAfter.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#F6FBFE] transition-colors">
                        <td className="p-5 pl-8 font-bold text-[#072C4C]">{row.metric}</td>
                        <td className="p-5 text-rose-600 font-mono text-xs">{row.before}</td>
                        <td className="p-5 text-emerald-700 font-mono font-bold text-xs">{row.after}</td>
                        <td className="p-5 pr-8 text-right font-mono font-black text-[#16D3F5] text-xs">
                          {row.improvement}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 9. BUSINESS IMPACT DASHBOARD & 10. CLIENT TESTIMONIAL */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
        <div className="max-w-[1280px] mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Business Impact Grid (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
                  <Award className="w-3.5 h-3.5 text-[#16D3F5]" />
                  <span>VERIFIED COMMERCIAL GAINS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#072C4C]">
                  Business Impact Dashboard
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.results.map((r, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-6 rounded-2xl bg-[#F8FCFE] border border-slate-200/80 space-y-2"
                  >
                    <div className="text-2xl font-black text-[#072C4C] font-mono">{r.value}</div>
                    <div className="text-xs font-bold text-[#072C4C]">{r.title}</div>
                    <p className="text-[11px] text-[#5B738B] leading-relaxed">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial Card (5 Cols) */}
            {study.testimonial && (
              <div className="lg:col-span-5 p-8 sm:p-9 rounded-[32px] bg-[#072C4C] text-white border border-[#16D3F5]/30 shadow-2xl space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Verified Client
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-slate-200 italic font-medium leading-relaxed">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  {study.testimonial.avatar && (
                    <img
                      src={study.testimonial.avatar}
                      alt={study.testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/40 shrink-0"
                    />
                  )}
                  <div>
                    <div className="text-sm font-black text-white">{study.testimonial.author}</div>
                    <div className="text-xs text-slate-400">
                      {study.testimonial.role} &bull; {study.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. RELATED CASE STUDIES */}
      {/* ========================================================================= */}
      {relatedStudies && relatedStudies.length > 0 && (
        <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#F4FAFD]">
          <div className="max-w-[1280px] mx-auto space-y-12">
            
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
                  <Briefcase className="w-3.5 h-3.5 text-[#16D3F5]" />
                  <span>CONTINUE EXPLORING</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#072C4C]">
                  Related Case Studies
                </h2>
              </div>

              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#072C4C] hover:text-[#16D3F5] transition-colors group"
              >
                <span>View All Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedStudies.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/case-studies/${rel.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-[28px] bg-white border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between space-y-6 group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden h-44 bg-slate-100">
                      <img
                        src={rel.heroImage}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/95 text-[#072C4C] shadow-2xs">
                        {rel.industry}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-[#072C4C] group-hover:text-[#0B3A62] transition-colors line-clamp-2">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-[#5B738B] mt-2 line-clamp-2 leading-relaxed">
                        {rel.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#072C4C]">
                    <span className="font-mono text-emerald-600">{rel.metrics[0]?.value}</span>
                    <div className="flex items-center gap-1 group-hover:text-[#16D3F5] transition-colors">
                      <span>Read Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 12. FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#072C4C] via-[#05223C] to-[#041A2E] text-white relative overflow-hidden">
        {/* Glow Behind Headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#16D3F5]/14 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/10 text-cyan-300 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#16D3F5]" />
            <span>START YOUR PROJECT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Ready To Engineer Your Next{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16D3F5 0%, #67E8F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              High-Impact System?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build a scalable, high-performance platform engineered for measurable business impact. Schedule a technical discovery call with our principal engineering leads.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[54px] px-9 rounded-full text-[#072C4C] bg-[#16D3F5] hover:bg-cyan-300 font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto h-[54px] px-8 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 flex items-center justify-center transition-all duration-300"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
