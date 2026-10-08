"use client";

import React, { useState } from "react";
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
  Check,
  Search,
  Target,
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
  Smartphone,
  ChevronDown,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import { ServiceDetailItem } from "@/lib/servicesData";

interface ServiceDetailClientProps {
  service: ServiceDetailItem;
  otherServices: ServiceDetailItem[];
}

export function ServiceDetailClient({ service, otherServices }: ServiceDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ServiceIcon =
    service.num === "01"
      ? Smartphone
      : service.num === "02"
      ? Database
      : service.num === "03"
      ? TrendingUp
      : Bot;

  return (
    <div
      style={{
        backgroundColor: "#F4FAFD",
      }}
      className="relative min-h-screen text-[#072C4C] selection:bg-[#072C4C] selection:text-white font-sans overflow-x-hidden"
    >
      {/* Background Radial Mesh */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none opacity-70 -z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(22,211,245,0.15) 0%, rgba(7,44,76,0.04) 50%, transparent 80%)",
        }}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06]">
        <div className="max-w-[1280px] mx-auto space-y-10">
          
          {/* Back to Services & Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#072C4C] hover:text-[#16D3F5] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Services</span>
            </Link>

            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              DISCIPLINE {service.num} &bull; {service.badge}
            </span>
          </div>

          {/* Title & Statement */}
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md"
                style={{ background: service.color }}
              >
                <ServiceIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16D3F5]">
                  {service.tagline}
                </span>
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#072C4C] leading-[1.08]"
                >
                  {service.title}
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-base sm:text-lg text-[#5B738B] leading-relaxed max-w-3xl"
            >
              {service.positioning}
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto h-[52px] px-8 rounded-full text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2.5 transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, #072C4C 0%, #16D3F5 100%)",
                }}
              >
                <span>Schedule Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#architecture-topology"
                className="w-full sm:w-auto h-[52px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#072C4C] font-bold text-sm border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-300"
              >
                <span>Explore Architecture Blueprint</span>
              </a>
            </div>
          </div>

          {/* Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4"
          >
            {service.heroMetrics.map((m, mIdx) => (
              <div
                key={mIdx}
                className="p-6 rounded-3xl bg-white border border-[#072C4C]/[0.08] shadow-xs space-y-1"
              >
                <div className="text-3xl font-black text-[#072C4C] font-mono tracking-tight">{m.value}</div>
                <div className="text-xs font-bold text-[#072C4C]">{m.label}</div>
                <div className="text-[10px] font-mono text-slate-400">{m.detail}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CAPABILITIES BREAKDOWN (6 Comprehensive Cards) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
        <div className="max-w-[1280px] mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              <Layers className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              What We Build & Deliver
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              Engineered modules tailored for high concurrency, fault tolerance, and commercial impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.capabilities.map((cap, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: cIdx * 0.06, ease: "easeOut" }}
                className="p-8 rounded-[30px] bg-[#F8FCFE] border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#072C4C] flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:bg-[#072C4C] group-hover:text-white transition-colors">
                    0{cIdx + 1}
                  </div>
                  <h3 className="text-xl font-black text-[#072C4C]">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B738B] leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE PRODUCTION ARCHITECTURE TOPOLOGY */}
      {/* ========================================================================= */}
      <section id="architecture-topology" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#072C4C] text-white relative overflow-hidden">
        {/* Animated Grid Glow */}
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
              <span>ARCHITECTURE BLUEPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Production Architecture Topology
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Designed for sub-second execution, continuous telemetry, multi-region failover, and zero security loopholes.
            </p>
          </div>

          {/* Interactive Flow Topology */}
          <div className="p-7 sm:p-9 rounded-3xl bg-[#051C33]/90 border border-cyan-500/40 shadow-[0_0_50px_rgba(22,211,245,0.15)] space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
                <Activity className="w-4 h-4 text-[#16D3F5]" />
                <span>{service.shortTitle.toUpperCase()} &bull; ACTIVE RUNTIME MESH</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                HEALTHY (p99 OK)
              </span>
            </div>

            {/* 4 Topology Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              {service.architectureNodes.map((node, nIdx) => (
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
      {/* 4. TECHNOLOGY STACK USED */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#F4FAFD]">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              <Cpu className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>CORE TOOLING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              Technology Stack Used
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              Battle-tested frameworks, modern languages, and cloud-native services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {service.techStack.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-lg transition-all text-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E8F7FC] text-[#072C4C] flex items-center justify-center font-mono font-bold text-xs mx-auto group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <div className="text-sm font-black text-[#072C4C]">{tool.name}</div>
                <div className="text-[10px] font-mono text-slate-400">{tool.tag}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PRODUCTION DELIVERABLES & FAQS */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Deliverables (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16D3F5]" />
                <span>WHAT YOU RECEIVE</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#072C4C]">
                Production Deliverables
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#F8FCFE] border border-slate-200/80 flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: FAQs Accordion (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
                <HelpCircle className="w-3.5 h-3.5 text-[#16D3F5]" />
                <span>COMMON QUESTIONS</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#072C4C]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {service.faqs.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="rounded-2xl bg-[#F8FCFE] border border-slate-200/80 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer font-bold text-sm text-[#072C4C] hover:text-[#16D3F5] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-[#16D3F5]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#5B738B] leading-relaxed border-t border-slate-200/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OTHER SERVICES GATEWAY NAVIGATOR */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#F4FAFD]">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
                <Workflow className="w-3.5 h-3.5 text-[#16D3F5]" />
                <span>EXPLORE ALL DISCIPLINES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#072C4C]">
                Other Engineering Disciplines
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#072C4C] hover:text-[#16D3F5] transition-colors group"
            >
              <span>View All 4 Pillars</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="p-8 rounded-[30px] bg-white border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-black text-[#16D3F5] px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100">
                    {other.num}
                  </span>
                  <h3 className="text-xl font-black text-[#072C4C] group-hover:text-[#0B3A62] transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-xs text-[#5B738B] leading-relaxed line-clamp-2">
                    {other.positioning}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#072C4C]">
                  <span className="font-mono text-emerald-600">{other.heroMetrics[0]?.value}</span>
                  <div className="flex items-center gap-1 group-hover:text-[#16D3F5] transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CTA */}
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
            Ready To Engineer Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16D3F5 0%, #67E8F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {service.shortTitle}?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a technical discovery call with our senior engineering leads to map requirements, architecture, and sprint timelines.
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
              href="/case-studies"
              className="w-full sm:w-auto h-[54px] px-8 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 flex items-center justify-center transition-all duration-300"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
