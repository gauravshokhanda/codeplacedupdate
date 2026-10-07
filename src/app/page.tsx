"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Globe2,
  CheckCircle2,
  Zap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Layers,
  Factory,
} from "lucide-react";
import { HeroSystemNetwork } from "@/components/HeroSystemNetwork";
import { CoreCapabilitiesShowcase } from "@/components/CoreCapabilitiesShowcase";
import { TechStackRadar } from "@/components/TechStackRadar";
import { DeliveryProcessTimeline } from "@/components/DeliveryProcessTimeline";
import { CASE_STUDIES_DATA } from "@/lib/caseStudiesData";

// =========================================================================
// DATA STRUCTURES
// =========================================================================

const PARTNER_LOGOS = [
  "AWS",
  "Azure",
  "Google Cloud",
  "OpenAI",
  "Databricks",
  "Snowflake",
  "Shopify",
  "HubSpot",
  "Meta",
];

const SUCCESS_STORIES = [
  {
    slug: "real-time-inventory-sync",
    title: "Retail Inventory Platform",
    industry: "Retail & Omnichannel",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    outcome: "Zero stockout errors across 12 channels (<50ms sync).",
    metricValue: "3.2M/s",
    metricLabel: "Sync Throughput",
  },
  {
    slug: "ai-workflow-financial-ledger",
    title: "AI Workflow Platform",
    industry: "Fintech & Banking",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    outcome: "85% reduction in manual audit cycles, saving $2.4M/yr.",
    metricValue: "85%",
    metricLabel: "Audit Reduction",
  },
  {
    slug: "fleet-dispatch-optimization",
    title: "Fleet Dispatch System",
    industry: "Logistics & Fleet",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    outcome: "31% reduction in deadhead miles and dynamic driver dispatch.",
    metricValue: "31%",
    metricLabel: "Cost Reduction",
  },
];

const STATS_CARDS = [
  {
    value: "250+",
    label: "Projects Delivered",
    detail: "Custom software, lakehouses & enterprise systems.",
  },
  {
    value: "150+",
    label: "Clients Served",
    detail: "From VC-funded startups to global enterprises.",
  },
  {
    value: "1,200+",
    label: "Automated Workflows",
    detail: "Continuous ETL, ML agents & backend pipelines.",
  },
  {
    value: "99.9%",
    label: "System Reliability",
    detail: "Zero-downtime deployments and multi-region failovers.",
  },
];

const INDUSTRIES_DATA = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    badge: "12+ Solutions Delivered",
    points: ["AI Triage", "Patient Analytics", "Clinical Dashboards"],
    href: "/industries",
  },
  {
    id: "finance",
    name: "Finance",
    icon: Landmark,
    badge: "15+ Ledgers Deployed",
    points: ["Algorithmic Ledgers", "Risk Telemetry", "Real-Time Audits"],
    href: "/industries",
  },
  {
    id: "retail",
    name: "Retail",
    icon: ShoppingBag,
    badge: "25+ Stores Synced",
    points: ["Omnichannel Sync", "Shopify Plus", "Recommendation ML"],
    href: "/industries",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    badge: "10k+ Vehicles Tracked",
    points: ["IoT Telematics", "Route Optimization", "Fleet Dispatch"],
    href: "/industries",
  },
  {
    id: "saas",
    name: "SaaS",
    icon: Layers,
    badge: "40+ Platforms Launched",
    points: ["Multi-Tenant Next.js", "Edge Gateways", "Microservices"],
    href: "/industries",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    badge: "18+ Plants Automated",
    points: ["Predictive Maintenance", "Vision Defect AI", "Industrial IoT"],
    href: "/industries",
  },
];

const TRUST_METRICS = [
  { icon: Briefcase, label: "250+ Projects Delivered" },
  { icon: CheckCircle2, label: "150+ Clients Served" },
  { icon: Globe2, label: "15+ Industries" },
  { icon: ShieldCheck, label: "99.9% Reliability" },
];

const EASING = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const marqueeLogos = [
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
  ];

  const flagshipStudy = CASE_STUDIES_DATA[0];

  return (
    <div
      style={{
        background: "#F7FBFF",
      }}
      className="relative min-h-screen text-[#0F2B46] selection:bg-[#0D3B66] selection:text-white font-sans"
    >
      {/* Ambient Glow Orbs */}
      <div className="absolute w-[650px] h-[650px] bg-[rgba(6,182,212,0.06)] rounded-full blur-[140px] -top-[200px] -right-[150px] pointer-events-none -z-0" />
      <div className="absolute w-[550px] h-[550px] bg-[rgba(15,41,66,0.04)] rounded-full blur-[140px] top-[30%] -left-[150px] pointer-events-none -z-0" />

      {/* ========================================================================= */}
      {/* SECTION 1 — HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-[1040px] mx-auto space-y-6">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASING }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#0D3B66] border border-[#06B6D4]/35 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>MODERN TECHNOLOGY PARTNER</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASING }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-[#0F2942] [text-wrap:balance]"
          >
            Technology That <br />
            <span
              className="bg-clip-text text-transparent font-black inline-block py-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0F2942 0%, #06B6D4 50%, #0D3B66 100%)",
              }}
            >
              Turns Ideas Into Impact.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASING }}
            className="text-base sm:text-lg lg:text-xl text-[#5B6B7C] leading-relaxed max-w-[780px] mx-auto font-normal"
          >
            From AI-powered applications and enterprise platforms to analytics ecosystems and growth systems, we help organizations build, scale, and transform with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASING }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[52px] px-8 rounded-full text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group"
              style={{
                background: "linear-gradient(90deg, #0F2942, #06B6D4)",
              }}
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto h-[52px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#0F2942] font-bold text-sm border border-slate-200 shadow-xs flex items-center justify-center transition-all duration-300 hover:border-[#06B6D4]/50"
            >
              <span>View Case Studies</span>
            </Link>
          </motion.div>

          {/* Client Trust Layer Under CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASING }}
            className="pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs sm:text-sm font-semibold text-[#5B6B7C]"
          >
            {TRUST_METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="flex items-center gap-2 text-[#0F2942]">
                  <Icon className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  <span>{metric.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Partner Logo Marquee Strip — Full Width & Transparent */}
        <div className="w-full max-w-full mt-12 py-4 border-t border-b border-[#0D9488]/12 bg-transparent">
          <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0,_black_60px,_black_calc(100%-60px),transparent_100%)]">
            <div className="animate-marquee hover:[animation-play-state:paused] flex items-center">
              {marqueeLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-6 sm:px-8 text-[#5B6B7C] hover:text-[#0F2942] transition-all duration-200 shrink-0 group cursor-default"
                >
                  <span className="text-sm sm:text-[15px] font-semibold tracking-tight group-hover:text-[#0F2942] transition-colors">
                    {logo}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]/60 group-hover:bg-[#06B6D4] transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — DIGITAL ECOSYSTEM (Light Section + 700px Dark Canvas Showcase) */}
      {/* ========================================================================= */}
      <HeroSystemNetwork />

      {/* ========================================================================= */}
      {/* SECTION 3 — FOUR CORE CAPABILITIES (Light Premium Showcase) */}
      {/* ========================================================================= */}
      <CoreCapabilitiesShowcase />

      {/* ========================================================================= */}
      {/* SECTION 4 — FEATURED CASE STUDY (60% IMAGE / 40% CONTENT - Light Surface) */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* SECTION 4 — FEATURED CASE STUDY */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#F7FBFF]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#0D3B66] border border-[#06B6D4]/30 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>FEATURED FLAGSHIP CASE STUDY</span>
          </div>

          {flagshipStudy && (
            <div className="rounded-[36px] bg-white text-[#0F2942] border border-[#0F172A]/[0.08] shadow-2xl shadow-sky-950/5 overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* 60% Image (7 Cols) */}
                <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden bg-slate-900">
                  <img
                    src={flagshipStudy.heroImage}
                    alt={flagshipStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/80 via-[#0F2942]/20 to-transparent" />

                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#0D3B66] shadow-md">
                      {flagshipStudy.industry}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0F2942]/80 backdrop-blur-md text-white border border-white/20">
                      {flagshipStudy.clientType}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                      Flagship Engineering Deployment
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black mt-1">
                      {flagshipStudy.title}
                    </h4>
                  </div>
                </div>

                {/* 40% Crisp Editorial Content Panel (5 Cols) */}
                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-mono font-bold text-[#06B6D4] uppercase tracking-wider">
                      PROVEN CLIENT IMPACT
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F2942] tracking-tight leading-tight">
                      Healthcare Analytics Platform & AI Triage Engine
                    </h3>
                    <p className="text-sm sm:text-base text-[#5B6B7C] leading-relaxed font-normal">
                      HIPAA-compliant data lakehouse and autonomous clinical triage assistant that reduced emergency wait times, eliminated manual charting waste, and delivered sub-second telemetry.
                    </p>

                    {/* Results Metrics */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-[#F7FBFF] border border-[#0F172A]/[0.08] text-center">
                        <div className="text-lg sm:text-xl font-black text-[#0F2942] font-mono">
                          18,000 hrs
                        </div>
                        <div className="text-[10px] font-bold text-slate-500 mt-0.5">
                          Hours Saved
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#F7FBFF] border border-[#0F172A]/[0.08] text-center">
                        <div className="text-lg sm:text-xl font-black text-emerald-600 font-mono">
                          99.9%
                        </div>
                        <div className="text-[10px] font-bold text-slate-500 mt-0.5">
                          Platform Uptime
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#F7FBFF] border border-[#0F172A]/[0.08] text-center">
                        <div className="text-lg sm:text-xl font-black text-[#0F2942] font-mono">
                          42%
                        </div>
                        <div className="text-[10px] font-bold text-slate-500 mt-0.5">
                          Faster Operations
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/case-studies/${flagshipStudy.slug}`}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0F2942] hover:bg-[#0D3B66] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all group/btn"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 text-cyan-300 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — MORE SUCCESS STORIES */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F7FBFF]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#06B6D4]">
                REAL SYSTEMS. REAL BUSINESS OUTCOMES.
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F2942] tracking-tight">
                Production Case Studies
              </h2>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0D3B66] hover:text-[#06B6D4] transition-colors group"
            >
              <span>View All 6 Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map((story) => (
              <Link
                key={story.slug}
                href={`/case-studies/${story.slug}`}
                className="rounded-[32px] bg-white border border-[#0F172A]/[0.08] p-6 shadow-sm hover:shadow-xl hover:shadow-sky-950/8 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-900">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white text-[#0D3B66] shadow-xs">
                        {story.industry}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-300">
                        {story.metricValue}
                      </span>
                      <span className="text-[10px] text-slate-300">
                        {story.metricLabel}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-[#0F2942] group-hover:text-[#06B6D4] transition-colors leading-snug">
                      {story.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5B6B7C] mt-1.5 leading-relaxed">
                      {story.outcome}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0D3B66] group-hover:text-[#06B6D4] transition-colors">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 — IMPACT STATS */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-28 bg-[#F7FBFF]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#0D3B66] border border-[#06B6D4]/30 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>MEASURABLE IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2942]">
              Engineered For Scale. <br className="hidden sm:inline" />
              Proven Across Enterprises.
            </h2>
            <p className="text-[#5B6B7C] text-base sm:text-lg leading-relaxed">
              We deliver mission-critical software, high-throughput lakehouses, and autonomous workflows that power global business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_CARDS.map((stat, sIdx) => (
              <div
                key={sIdx}
                className="p-8 rounded-[30px] bg-white border border-[#0F172A]/[0.08] shadow-lg shadow-sky-950/5 hover:shadow-xl hover:shadow-sky-950/10 hover:-translate-y-1.5 transition-all duration-300 space-y-3"
              >
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0F2942] to-[#06B6D4] font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-lg font-black text-[#0F2942]">
                  {stat.label}
                </div>
                <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7 — INDUSTRIES */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#F7FBFF] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#0D3B66] border border-[#06B6D4]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>DOMAIN SPECIALIZATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2942]">
                Industries We Power
              </h2>
              <p className="text-[#5B6B7C] text-base sm:text-lg">
                Domain-specific blueprints, regulatory compliance expertise, and battle-tested data pipelines.
              </p>
            </div>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0D3B66] hover:text-[#06B6D4] transition-colors group self-start md:self-auto"
            >
              <span>Explore All Industries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = ind.icon;

              return (
                <div
                  key={ind.id}
                  className="p-8 rounded-[30px] bg-white border border-[#0F172A]/[0.08] hover:border-[#06B6D4] hover:shadow-xl hover:shadow-sky-950/8 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#F0F7FC] border border-slate-100 flex items-center justify-center text-[#0D3B66] shadow-xs group-hover:bg-[#0F2942] group-hover:text-[#06B6D4] transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#06B6D4] bg-[#F0F7FC] px-3 py-1 rounded-full border border-slate-100">
                        {ind.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[#0F2942] group-hover:text-[#06B6D4] transition-colors">
                        {ind.name}
                      </h3>
                    </div>

                    <div className="space-y-2 pt-1">
                      {ind.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-[#5B6B7C]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={ind.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D3B66] group-hover:text-[#06B6D4] transition-colors"
                    >
                      <span>View Industry</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8 — MODERN ENGINEERING ECOSYSTEM */}
      {/* ========================================================================= */}
      <TechStackRadar />

      {/* ========================================================================= */}
      {/* SECTION 9 — DELIVERY PROCESS */}
      {/* ========================================================================= */}
      <DeliveryProcessTimeline />

      {/* ========================================================================= */}
      {/* SECTION 10 — CTA */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7FBFF]">
        <div
          className="max-w-[1200px] mx-auto rounded-[36px] p-10 sm:p-16 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, #071524 0%, #0D3B66 50%, #1CC8E5 100%)",
            border: "1px solid rgba(0, 212, 255, 0.25)",
          }}
        >
          {/* Cyber Grid */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="max-w-[820px] mx-auto relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider bg-white/15 text-white border border-white/25">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>START YOUR NEXT SPRINT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Ready To Build Something Intelligent?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-[680px] mx-auto leading-relaxed font-normal">
              From custom software to analytics platforms and growth systems, let&apos;s build something that scales.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto h-[54px] px-9 rounded-full bg-white hover:bg-slate-50 text-[#0F2B46] font-extrabold text-sm shadow-xl flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto h-[54px] px-9 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 shadow-xs flex items-center justify-center transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
