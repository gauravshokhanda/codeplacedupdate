"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Code2,
  BarChart3,
  TrendingUp,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Factory,
  Truck,
  GraduationCap,
  Home as HomeIcon,
  Layers,
  CheckCircle2,
  Activity,
  Zap,
  Cloud,
  Headphones,
  Target,
  Check,
  ShieldCheck,
  Briefcase,
  Globe2,
} from "lucide-react";

// =========================================================================
// DATA STRUCTURES
// =========================================================================

const PARTNER_LOGOS = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "OpenAI",
  "Snowflake",
  "Databricks",
  "HubSpot",
  "Meta",
  "Shopify",
];

const TRUST_METRICS = [
  { icon: Briefcase, label: "250+ Projects Delivered" },
  { icon: CheckCircle2, label: "150+ Clients Served" },
  { icon: Globe2, label: "20+ Industries Served" },
  { icon: ShieldCheck, label: "99.9% System Reliability" },
];

const SERVICES_GRID = [
  {
    id: "software-dev",
    icon: Code2,
    title: "Custom Software & Web Apps",
    tag: "Next.js • React • Node.js",
    desc: "Elastic full-stack platforms, mobile apps, and microservices engineered for high concurrency, zero single points of failure, and clean maintainability.",
    features: ["Next.js & React Frontends", "Python / Node.js Backends", "Zero-Downtime CI/CD"],
    href: "/services",
  },
  {
    id: "data-platforms",
    icon: BarChart3,
    title: "Data Platforms & Lakehouses",
    tag: "Snowflake • BigQuery • dbt",
    desc: "Unified cloud data warehouses, real-time ingestion, and automated ETL/ELT pipelines that eliminate fragmented business silos.",
    features: ["Automated Data Ingestion", "dbt Modeling & Governance", "Sub-Second Query Speeds"],
    href: "/services/data-platforms",
  },
  {
    id: "executive-dashboards",
    icon: Activity,
    title: "Executive Dashboards & BI",
    tag: "Power BI • Looker Studio",
    desc: "Intuitive command centers and embedded dashboards translating complex multi-cloud datasets into real-time executive decisions.",
    features: ["Live Telemetry Streaming", "Executive KPI Scorecards", "Multi-Tenant Embedding"],
    href: "/services/executive-dashboards",
  },
  {
    id: "ai-copilots",
    icon: Zap,
    title: "AI Copilots & Automation",
    tag: "LLMs • RAG • Agents",
    desc: "Domain-specific AI copilots and automated workflow pipelines that augment operational teams and reduce cycle times from hours to seconds.",
    features: ["Custom RAG Architectures", "Intelligent Document Parsing", "Private Enterprise LLMs"],
    href: "/services/ai-copilots",
  },
  {
    id: "cloud-infra",
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    tag: "AWS • GCP • Kubernetes",
    desc: "High-availability, cost-optimized cloud infrastructure with automated autoscaling, zero-trust security, and 99.99% uptime SLAs.",
    features: ["AWS / GCP Well-Architected", "Terraform Infrastructure as Code", "24/7 Production Monitoring"],
    href: "/services/cloud-infrastructure",
  },
  {
    id: "digital-growth",
    icon: TrendingUp,
    title: "Digital Growth & Attribution",
    tag: "SEO • Paid Media • CRO",
    desc: "Engineered growth systems combining algorithmic performance advertising, technical SEO, and multi-touch CAC attribution to scale revenue predictably.",
    features: ["Multi-Touch Attribution", "Conversion Rate Optimization", "Automated Lead Ingestion"],
    href: "/services",
  },
];

const WHY_CHOOSE_CARDS = [
  {
    title: "Fast MVP Delivery",
    desc: "Agile 2-week production sprints that deploy working, audited software and analytics platforms in weeks rather than months.",
    icon: Zap,
    tag: "⚡ Fast Delivery",
  },
  {
    title: "Full Stack Expertise",
    desc: "Senior engineering specialists proficient in Next.js, React, Python, Power BI, distributed cloud, and production AI workflows.",
    icon: Code2,
    tag: "100% Senior Pods",
  },
  {
    title: "Data-Driven Decisions",
    desc: "Every architectural choice, schema design, and marketing campaign is validated with sub-second telemetry and verified metrics.",
    icon: BarChart3,
    tag: "Live Telemetry",
  },
  {
    title: "Cloud Native Architecture",
    desc: "Zero-single-point-of-failure infrastructures engineered on AWS and GCP with automated autoscaling and 99.99% uptime.",
    icon: Cloud,
    tag: "99.99% SLA",
  },
  {
    title: "Dedicated Support",
    desc: "Direct Slack channel collaboration with Principal Architects and Lead Engineers. Zero junior account handoffs or layers.",
    icon: Headphones,
    tag: "Direct Access",
  },
  {
    title: "Business-Focused Approach",
    desc: "We focus obsessively on commercial outcomes: reducing operational overhead, increasing conversion velocity, and proving clear ROI.",
    icon: Target,
    tag: "ROI Driven",
  },
];

import { CASE_STUDIES_DATA } from "@/lib/caseStudiesData";

const STATS_DATA = [
  { value: "250+", label: "Projects Delivered", detail: "Software, BI & Growth Systems" },
  { value: "150+", label: "Clients Served", detail: "Startups to Global Enterprises" },
  { value: "1200+", label: "Automated Workflows", detail: "Pipelines & Production APIs" },
  { value: "18+", label: "Industries Supported", detail: "Domain-Specific Blueprints" },
  { value: "$250M+", label: "Revenue Processed", detail: "Tracked via Real-Time Telemetry" },
];

const INDUSTRIES_PILLS = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Finance", icon: Landmark },
  { name: "Retail", icon: ShoppingBag },
  { name: "SaaS", icon: Layers },
  { name: "Logistics", icon: Truck },
  { name: "Manufacturing", icon: Factory },
  { name: "Education", icon: GraduationCap },
  { name: "Real Estate", icon: HomeIcon },
];

// =========================================================================
// REUSABLE ANIMATION VARIANTS (Viewport re-triggering, once: false)
// =========================================================================

const EASING = [0.22, 1, 0.36, 1] as const;

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const caseStudiesContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const caseStudyCard = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98,
    transition: {
      duration: 0.7,
      ease: EASING,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: EASING,
    },
  },
};

// =========================================================================
// MAIN HOMEPAGE COMPONENT
// =========================================================================

export default function HomePage() {
  const marqueeLogos = [
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
  ];

  return (
    <div className="relative min-h-screen text-[#0F2940] selection:bg-[#0F4C81] selection:text-white font-sans overflow-x-hidden">
      {/* Soft Ambient Blur Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-[rgba(0,180,255,0.06)] rounded-full blur-[130px] -top-[200px] -right-[150px] pointer-events-none -z-0" />
      <div className="absolute w-[500px] h-[500px] bg-[rgba(11,74,125,0.04)] rounded-full blur-[130px] top-[40%] -left-[150px] pointer-events-none -z-0" />
      <div className="absolute w-[550px] h-[550px] bg-[rgba(19,191,234,0.05)] rounded-full blur-[130px] top-[75%] -right-[100px] pointer-events-none -z-0" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-8 px-4 sm:px-6 lg:px-8 text-center">
        {/* Soft Radial Center Glow */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[800px] h-[360px] pointer-events-none -z-0 bg-radial from-[#06B6D4]/12 via-[#0F4C81]/6 to-transparent blur-3xl" />

        <div className="max-w-[1060px] mx-auto relative z-10 space-y-6">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASING }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/80 backdrop-blur-sm text-[#0F4C81] border border-[#06B6D4]/30 shadow-[0_4px_16px_rgba(15,23,42,0.04)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Trusted Software, Data & AI Partner</span>
          </motion.div>

          {/* Large Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASING }}
            className="text-[44px] sm:text-[60px] lg:text-[72px] font-[800] leading-[1.12] sm:leading-[1.14] tracking-[-0.035em] text-[#0F2940] [text-wrap:balance]"
          >
            Building Scalable <br />
            <span
              className="bg-clip-text text-transparent font-extrabold inline-block py-0.5"
              style={{
                backgroundImage: "linear-gradient(90deg, #0B4A7D 0%, #13BFEA 100%)",
              }}
            >
              Software Products,
            </span>{" "}
            <br />
            <span
              className="bg-clip-text text-transparent font-extrabold inline-block py-0.5"
              style={{
                backgroundImage: "linear-gradient(90deg, #0F2940 0%, #13BFEA 100%)",
              }}
            >
              Data Platforms
            </span>{" "}
            &{" "}
            <span
              className="bg-clip-text text-transparent font-extrabold inline-block py-0.5"
              style={{
                backgroundImage: "linear-gradient(90deg, #13BFEA 0%, #0B4A7D 100%)",
              }}
            >
              Growth Systems
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASING }}
            className="text-base sm:text-lg text-[#5B6B7A] leading-relaxed max-w-[720px] mx-auto font-normal"
          >
            Custom software engineering, analytics platforms, AI automation, and growth solutions built for modern businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASING }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[50px] px-8 rounded-full bg-gradient-to-r from-[#0B4A7D] to-[#13BFEA] hover:opacity-95 text-white font-extrabold text-[15px] shadow-[0_10px_30px_rgba(19,191,234,0.25)] flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto h-[50px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#0F2940] font-bold text-[15px] border border-[#E7EDF5] shadow-[0_10px_30px_rgba(15,23,42,0.06)] flex items-center justify-center transition-all duration-300 hover:border-[#13BFEA]/40"
            >
              <span>Explore Services</span>
            </Link>
          </motion.div>

          {/* Inline Trust Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASING }}
            className="pt-6 sm:pt-7 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-9 gap-y-2.5 text-xs sm:text-sm font-semibold text-[#5B6B7A]"
          >
            {TRUST_METRICS.map((metric, idx) => {
              const IconComponent = metric.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-2 text-slate-700">
                    <IconComponent className="w-4 h-4 text-[#13BFEA] shrink-0" />
                    <span>{metric.label}</span>
                  </div>
                  {idx < TRUST_METRICS.length - 1 && (
                    <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300" />
                  )}
                </React.Fragment>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CONTINUOUS INFINITE SCROLLING MARQUEE (Same Gradient, Subtle Dividers) */}
      {/* ========================================================================= */}
      <div className="w-full py-4 border-y border-[#0F3D5E]/10 overflow-hidden relative select-none">
        <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0,_black_60px,_black_calc(100%-60px),transparent_100%)]">
          <div className="animate-marquee hover:[animation-play-state:paused] flex items-center">
            {marqueeLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 px-6 sm:px-8 text-[#36546F]/80 hover:text-[#0F2940] transition-all duration-200 shrink-0 group cursor-default"
              >
                <span className="text-sm sm:text-[15px] font-semibold tracking-[-0.02em] group-hover:text-[#0F2940] transition-colors">
                  {logo}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#13BFEA]/60 group-hover:bg-[#13BFEA] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. FULL STACK SERVICES GRID */}
      {/* ========================================================================= */}
      <section className="pt-14 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-200/60 relative overflow-hidden">
        {/* Subtle Top-Right Ambient Orb */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-radial from-[#13BFEA]/8 to-transparent blur-3xl pointer-events-none -z-0" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASING }}
            className="text-center max-w-[720px] mx-auto mb-14 space-y-2.5"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4A7D]">
              INTEGRATED CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F2940]">
              Full-Stack Digital Services
            </h2>
            <p className="text-[#5B6B7A] text-sm sm:text-base">
              End-to-end software engineering, lakehouses, real-time dashboards, and algorithmic growth systems.
            </p>
          </motion.div>

          {/* Row 1 */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {SERVICES_GRID.slice(0, 3).map((svc, idx) => {
              const IconComp = svc.icon;
              const cardVariant = {
                hidden: {
                  opacity: 0,
                  x: idx === 0 ? -35 : idx === 2 ? 35 : 0,
                  y: idx === 1 ? 35 : 12,
                  scale: 0.98,
                  transition: {
                    duration: 0.7,
                    ease: EASING,
                  },
                },
                show: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 1.0,
                    ease: EASING,
                  },
                },
              };

              return (
                <motion.div
                  key={svc.id}
                  variants={cardVariant}
                  className="rounded-3xl glass-service-card p-7 sm:p-8 shadow-xs hover:border-[#13BFEA]/50 hover:shadow-[0_24px_65px_rgba(15,23,42,0.10)] hover:-translate-y-[5px] transition-all duration-400 ease-out flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[rgba(0,176,255,0.08)] border border-[#13BFEA]/20 flex items-center justify-center text-[#0B4A7D] group-hover:bg-[#0B4A7D] group-hover:text-white transition-all shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-[#0B4A7D] bg-[#ECFEFF] px-2.5 py-1 rounded-full border border-[#13BFEA]/30">
                        {svc.tag}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold text-[#0F2940] group-hover:text-[#0B4A7D] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-[#5B6B7A] text-sm leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-200/40">
                      {svc.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#13BFEA] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B4A7D] group-hover:text-[#13BFEA] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-6 sm:mt-7"
          >
            {SERVICES_GRID.slice(3, 6).map((svc, idx) => {
              const IconComp = svc.icon;
              const cardVariant = {
                hidden: {
                  opacity: 0,
                  x: idx === 0 ? -35 : idx === 2 ? 35 : 0,
                  y: idx === 1 ? 35 : 12,
                  scale: 0.98,
                  transition: {
                    duration: 0.7,
                    ease: EASING,
                  },
                },
                show: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 1.0,
                    ease: EASING,
                  },
                },
              };

              return (
                <motion.div
                  key={svc.id}
                  variants={cardVariant}
                  className="rounded-3xl glass-service-card p-7 sm:p-8 shadow-xs hover:border-[#13BFEA]/50 hover:shadow-[0_24px_65px_rgba(15,23,42,0.10)] hover:-translate-y-[5px] transition-all duration-400 ease-out flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[rgba(0,176,255,0.08)] border border-[#13BFEA]/20 flex items-center justify-center text-[#0B4A7D] group-hover:bg-[#0B4A7D] group-hover:text-white transition-all shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-[#0B4A7D] bg-[#ECFEFF] px-2.5 py-1 rounded-full border border-[#13BFEA]/30">
                        {svc.tag}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold text-[#0F2940] group-hover:text-[#0B4A7D] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-[#5B6B7A] text-sm leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-200/40">
                      {svc.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#13BFEA] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B4A7D] group-hover:text-[#13BFEA] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE CODEPLACED */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASING }}
            className="text-center max-w-[740px] mx-auto mb-14 space-y-2.5"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4A7D]">
              THE CODEPLACED ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F2940]">
              Why Companies Choose CodePlaced
            </h2>
            <p className="text-[#5B6B7A] text-sm sm:text-base">
              Senior engineering squads, transparent sprint cadences, and an unwavering focus on commercial ROI.
            </p>
          </motion.div>

          {/* Row 1 */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {WHY_CHOOSE_CARDS.slice(0, 3).map((card, idx) => {
              const IconComp = card.icon;
              const cardVariant = {
                hidden: {
                  opacity: 0,
                  x: idx === 0 ? -35 : idx === 2 ? 35 : 0,
                  y: idx === 1 ? 35 : 12,
                  scale: 0.98,
                  transition: {
                    duration: 0.7,
                    ease: EASING,
                  },
                },
                show: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 1.0,
                    ease: EASING,
                  },
                },
              };

              return (
                <motion.div
                  key={idx}
                  variants={cardVariant}
                  className="p-7 sm:p-8 rounded-3xl glass-panel-card shadow-xs hover:border-[#13BFEA]/50 hover:shadow-[0_24px_65px_rgba(15,23,42,0.10)] hover:-translate-y-[5px] transition-all duration-400 ease-out space-y-3.5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(0,176,255,0.08)] border border-[#13BFEA]/20 flex items-center justify-center text-[#0B4A7D] group-hover:bg-[#0B4A7D] group-hover:text-white transition-colors shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold text-[#0B4A7D] bg-[#ECFEFF] px-3 py-1 rounded-full border border-[#13BFEA]/30">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0F2940] group-hover:text-[#0B4A7D] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#5B6B7A] text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-6 sm:mt-7"
          >
            {WHY_CHOOSE_CARDS.slice(3, 6).map((card, idx) => {
              const IconComp = card.icon;
              const cardVariant = {
                hidden: {
                  opacity: 0,
                  x: idx === 0 ? -35 : idx === 2 ? 35 : 0,
                  y: idx === 1 ? 35 : 12,
                  scale: 0.98,
                  transition: {
                    duration: 0.7,
                    ease: EASING,
                  },
                },
                show: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 1.0,
                    ease: EASING,
                  },
                },
              };

              return (
                <motion.div
                  key={idx}
                  variants={cardVariant}
                  className="p-7 sm:p-8 rounded-3xl glass-panel-card shadow-xs hover:border-[#13BFEA]/50 hover:shadow-[0_24px_65px_rgba(15,23,42,0.10)] hover:-translate-y-[5px] transition-all duration-400 ease-out space-y-3.5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(0,176,255,0.08)] border border-[#13BFEA]/20 flex items-center justify-center text-[#0B4A7D] group-hover:bg-[#0B4A7D] group-hover:text-white transition-colors shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold text-[#0B4A7D] bg-[#ECFEFF] px-3 py-1 rounded-full border border-[#13BFEA]/30">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0F2940] group-hover:text-[#0B4A7D] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#5B6B7A] text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-slate-200/60 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, ease: EASING }}
              className="space-y-2"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B4A7D]">
                PROVEN DELIVERIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2940] tracking-tight">
                Featured Case Studies
              </h2>
            </motion.div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B4A7D] hover:text-[#13BFEA] transition-colors group"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 6-Card Staggered Masonry Portfolio Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            {CASE_STUDIES_DATA.map((study, idx) => {
              const isLarge = idx === 0 || idx === 4;
              const colSpanClass = isLarge ? "lg:col-span-7" : idx === 2 || idx === 3 ? "lg:col-span-6" : "lg:col-span-5";
              const imageHeightClass = isLarge ? "h-[300px] sm:h-[340px] lg:h-[360px]" : "h-[240px] sm:h-[280px] lg:h-[290px]";

              return (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 40, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.95, delay: (idx % 2) * 0.12, ease: EASING }}
                  className={`${colSpanClass} rounded-[24px] glass-panel-card card-shadow-subtle overflow-hidden flex flex-col justify-between hover:-translate-y-2 hover:border-[#13BFEA]/50 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10),0_30px_70px_rgba(15,23,42,0.08)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group`}
                >
                  <Link
                    href={`/case-studies/${study.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Visual Portfolio Hero */}
                      <div className={`relative ${imageHeightClass} w-full overflow-hidden bg-slate-900`}>
                        <img
                          src={study.heroImage}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2940]/85 via-[#0F2940]/20 to-transparent" />

                        {/* Top-Left: Industry Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 text-[#0B4A7D] shadow-sm backdrop-blur-md border border-white/80">
                            {study.industry}
                          </span>
                        </div>

                        {/* Bottom Floating Primary Metric on Visual */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-extrabold shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#13BFEA] animate-pulse" />
                            <span>{study.metrics[0].value}</span>
                          </div>

                          <div className="hidden sm:flex items-center gap-1.5">
                            {study.technologies.slice(0, 2).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Narrative Content */}
                      <div className="p-6 sm:p-8 space-y-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0F2940] group-hover:text-[#0B4A7D] transition-colors leading-snug">
                          {study.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#5B6B7A] leading-relaxed line-clamp-2">
                          {study.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Footer with Metric & CTA */}
                    <div className="px-6 sm:px-8 pb-6 sm:pb-7 pt-4 border-t border-slate-200/40 flex items-center justify-between mt-auto">
                      <div className="space-y-0.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#5B6B7A] block">
                          {study.metrics[0].label}
                        </span>
                        <p className="text-base sm:text-lg font-black text-[#0B4A7D] tracking-tight">
                          {study.metrics[0].value}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0B4A7D] group-hover:text-[#13BFEA] transition-colors">
                        <span>Read Case Study</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. STATS BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {STATS_DATA.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: idx * 0.08,
                  ease: EASING,
                }}
                className="p-5 sm:p-6 rounded-3xl glass-panel-card border-t-4 border-t-[#13BFEA] shadow-xs hover:shadow-[0_24px_65px_rgba(15,23,42,0.10)] hover:-translate-y-[4px] text-center space-y-1 transition-all duration-400 ease-out"
              >
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0B4A7D] to-[#13BFEA]">
                  {m.value}
                </span>
                <p className="text-sm font-bold text-[#0F2940]">{m.label}</p>
                <p className="text-[11px] text-[#5B6B7A] leading-tight">{m.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INDUSTRIES */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASING }}
            className="space-y-1.5"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4A7D]">
              DOMAIN SPECIALIZATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2940] tracking-tight">
              Industries We Power
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-[960px] mx-auto">
            {INDUSTRIES_PILLS.map((ind, idx) => {
              const IconComponent = ind.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.05,
                    ease: EASING,
                  }}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full glass-panel-card shadow-xs hover:border-[#13BFEA] hover:shadow-[0_10px_25px_rgba(19,191,234,0.12)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
                >
                  <IconComponent className="w-4 h-4 text-[#0B4A7D] group-hover:text-[#13BFEA] group-hover:rotate-12 transition-all duration-300" />
                  <span className="text-sm font-bold text-[#0F2940]">{ind.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL CTA (once: false) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.0, ease: EASING }}
          className="max-w-[1100px] mx-auto rounded-[32px] p-10 sm:p-14 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #0B4A7D 0%, #13BFEA 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-[780px] mx-auto relative z-10 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/15 text-white border border-white/25">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>START YOUR NEXT SPRINT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
              Ready To Build Something Intelligent?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-[660px] mx-auto leading-relaxed font-normal">
              From custom software to analytics platforms and growth systems, let&apos;s build something that scales. Schedule a 30-minute architecture session with our Principal Specialists.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1">
              <Link
                href="/contact"
                className="w-full sm:w-auto h-[52px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#0F2940] font-black text-[15px] shadow-xl shadow-black/10 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto h-[52px] px-8 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-[15px] border border-white/30 shadow-xs flex items-center justify-center transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
