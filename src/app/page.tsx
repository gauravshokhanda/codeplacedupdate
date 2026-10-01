"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CaseStudy } from "@/types";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Clock,
  Smartphone,
  AppWindow,
  Share2,
  BarChart3,
  Cpu,
  Cloud,
  Wrench,
  Building2,
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  Truck,
  ShoppingBag,
  GraduationCap,
  Factory,
  Home as HomeIcon,
  Zap,
  Layers,
  TrendingUp,
  Users,
  Database,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

// =========================================================================
// DATA FOR HOMEPAGE SECTIONS
// =========================================================================

const PARTNER_LOGOS = [
  { name: "AWS", tag: "Cloud Infrastructure" },
  { name: "Google Cloud", tag: "Vertex AI & Data" },
  { name: "Microsoft Azure", tag: "Enterprise Cloud" },
  { name: "OpenAI", tag: "GPT-4o Partner" },
  { name: "Snowflake", tag: "Data Lakehouse" },
  { name: "Databricks", tag: "AI & Analytics" },
];

const CORE_SERVICES = [
  {
    id: "app-dev",
    title: "App Development",
    icon: Smartphone,
    bullets: ["Basic App MVP", "Custom Mobile Apps", "iOS & Android (Flutter/Swift)"],
    href: "/services",
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: AppWindow,
    bullets: ["Business Websites", "Custom Web Applications", "Next.js & Modern SaaS"],
    href: "/services",
  },
  {
    id: "social-media",
    title: "Social Media & Growth",
    icon: Share2,
    bullets: ["Content Strategy", "Paid Campaign Management", "Multi-Channel Attribution"],
    href: "/services",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: BarChart3,
    bullets: ["Executive Dashboards", "KPI Reporting", "Sub-Second BI Queries"],
    href: "/services/data-platforms",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    icon: Cpu,
    bullets: ["AI Assistants & Copilots", "Workflow Automation", "Enterprise RAG & Search"],
    href: "/services/ai-copilots",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    bullets: ["AWS & Azure Architecture", "Infrastructure Automation", "28%+ FinOps Savings"],
    href: "/services/cloud-infrastructure",
  },
  {
    id: "web-maintenance",
    title: "Website Maintenance",
    icon: Wrench,
    bullets: ["Security Updates", "24/7 Uptime Monitoring", "Automated Backups & SLAs"],
    href: "/services",
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise Solutions",
    icon: Building2,
    bullets: ["CRM & ERP Integrations", "Internal Portals", "Java & Spring Boot Core"],
    href: "/services",
  },
];

const WHY_CHOOSE_CARDS = [
  {
    title: "Fast MVP Delivery",
    desc: "Rapid 2–4 week deployment sprints backed by battle-tested architecture patterns.",
    icon: Zap,
  },
  {
    title: "Full Stack Expertise",
    desc: "End-to-end capabilities spanning frontend, backend, native mobile, AI, and cloud.",
    icon: Layers,
  },
  {
    title: "Data Driven Decisions",
    desc: "Systems rooted in rigorous telemetry, observability, and verifiable business KPIs.",
    icon: TrendingUp,
  },
  {
    title: "Cloud Native Architecture",
    desc: "Scalable, resilient multi-cloud foundations engineered for high concurrency.",
    icon: Cloud,
  },
  {
    title: "Dedicated Support",
    desc: "Direct access to senior engineers and Principal Architects throughout the engagement.",
    icon: Users,
  },
  {
    title: "Business Focused Approach",
    desc: "Measurable ROI, transparent milestones, bilateral NDAs, and zero agency fluff.",
    icon: ShieldCheck,
  },
];

const FEATURED_CASE_STUDIES: CaseStudy[] = [
  {
    id: "medhealth-triage",
    title: "Clinical Triage & Patient Intelligence Lakehouse",
    client: "MedHealth Digital Health",
    industry: "Healthcare",
    tagline: "AI-Powered Patient Engagement & Clinical Triage Platform",
    description: "Built an agentic clinical workflow that ingests voice, scans, and EHR records, extracting vital metrics into an encrypted vector lakehouse.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Intake Velocity", value: "4.8x Faster" },
      { label: "Hours Saved", value: "18,000 hrs/yr" },
    ],
    technologies: ["FastAPI", "OpenAI GPT-4o", "PostgreSQL", "FHIR / HL7"],
    challenge: "Fragmented EHR silos and manual intake forms led to 45-minute average patient wait times.",
    solution: "Constructed an automated triage assistant with clinician sign-off and direct EHR sync.",
    impact: [
      "Reduced triage wait times from 45 mins to 7.2 mins",
      "Zero compliance incidents across 1.2M secure patient interactions",
    ],
  },
  {
    id: "apex-ledger",
    title: "Real-Time Ledger & Financial Analytics Engine",
    client: "Apex Financial Core",
    industry: "FinTech",
    tagline: "Ultra-Reliable Multi-Entity Reconciliation & Treasury Platform",
    description: "Architected a dual-entry distributed ledger and real-time reconciliation engine processing millions of transactions with mathematical determinism.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Ledger Accuracy", value: "99.99%" },
      { label: "Daily Volume", value: "$420M+" },
    ],
    technologies: ["PostgreSQL", "Kafka", "Node.js", "Redis"],
    challenge: "Disparate payment gateways created end-of-month reconciliation discrepancies.",
    solution: "Engineered an immutable, event-sourced ledger lakehouse with automated anomaly detection.",
    impact: [
      "Achieved 99.99% automated ledger accuracy across 18 banking partners",
      "Eliminated 95% of manual monthly reconciliation overhead",
    ],
  },
  {
    id: "veloce-telemetry",
    title: "Global Fleet Telemetry & Predictive Maintenance",
    client: "Veloce Mobility",
    industry: "Logistics",
    tagline: "High-Throughput IoT Stream Processing & Fleet Telemetry",
    description: "Re-architected real-time fleet sensor stream processing to detect thermal and mechanical faults before breakdowns occur.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Downtime Reduction", value: "24% Saved" },
      { label: "Cost Savings", value: "$3.2M/yr" },
    ],
    technologies: ["Apache Kafka", "ClickHouse", "React", "TypeScript"],
    challenge: "Legacy databases collapsed during peak hours from 80,000 IoT commercial vehicles.",
    solution: "Migrated to ClickHouse columnar storage with real-time Kafka event streaming.",
    impact: [
      "24% fleet downtime reduction within 90 days of deployment",
      "Saved $3.2M in preventable drivetrain towing and repair costs",
    ],
  },
];

const RESULTS_METRICS = [
  { value: "250+", label: "Projects Delivered" },
  { value: "150+", label: "Clients Served" },
  { value: "1,200+", label: "Automated Workflows" },
  { value: "18+", label: "Industries Served" },
  { value: "250M+", label: "Records Processed Monthly" },
];

const INDUSTRIES_LIST = [
  { name: "Healthcare", icon: HeartPulse, href: "/industries" },
  { name: "Finance", icon: Landmark, href: "/industries" },
  { name: "SaaS", icon: MonitorSmartphone, href: "/industries" },
  { name: "Logistics", icon: Truck, href: "/industries" },
  { name: "Retail", icon: ShoppingBag, href: "/industries" },
  { name: "Education", icon: GraduationCap, href: "/industries" },
  { name: "Real Estate", icon: HomeIcon, href: "/industries" },
  { name: "Manufacturing", icon: Factory, href: "/industries" },
];

export default function Home() {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  const marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white font-sans">
      {/* Unified Top Hero & Navigation Wrapper (Seamless Gradient Background) */}
      <div
        className="relative overflow-hidden border-b border-slate-200/80"
        style={{
          background: "linear-gradient(180deg, #F4FBFD 0%, #EDF8FB 60%, #FFFFFF 100%)",
        }}
      >
        {/* Ambient Soft Glow Behind Content */}
        <div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[850px] h-[450px] pointer-events-none -z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(20,184,197,0.14), rgba(11,107,136,0.06), transparent 70%)",
          }}
        />

        {/* HERO SECTION (TechAhead-Inspired Centered Enterprise Hero) */}
        <section className="relative pt-24 pb-14 sm:pt-28 lg:pt-36 lg:pb-18">

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
                <span>FULL STACK TECHNOLOGY PARTNER</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-[38px] sm:text-[56px] lg:text-[72px] font-[800] leading-[1.05] tracking-[-0.03em] text-[#082F49] mb-6 max-w-[1050px] mx-auto [text-wrap:balance]"
            >
              We Build Scalable Digital Products, <br className="hidden sm:inline" />
              Powered by{" "}
              <span
                className="bg-clip-text text-transparent font-extrabold inline-block"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0f4c81, #00b7c2)",
                }}
              >
                Data, AI & Cloud
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-[18px] text-slate-600 leading-[1.65] max-w-[700px] mx-auto mb-9 font-normal"
            >
              CodePlaced helps businesses design, develop, and scale modern software solutions—from
              websites and mobile applications to analytics, automation, cloud infrastructure, and
              digital growth systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-gradient-to-r from-[#0f4c81] to-[#00b7c2] hover:from-[#082F49] hover:to-[#0f4c81] text-white font-extrabold text-[15px] shadow-xl shadow-[#00b7c2]/20 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-white hover:bg-slate-50 text-[#082F49] font-bold text-[15px] border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-200 hover:border-[#00b7c2]/40"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="text-[#00b7c2] font-black">✓</span>
                <span>30-Min Consultation</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="text-[#00b7c2] font-black">✓</span>
                <span>NDA Signed</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="text-[#00b7c2] font-black">✓</span>
                <span>2–4 Week Delivery</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <main className="overflow-hidden">
        {/* ========================================================================= */}
        {/* 2. PARTNER LOGOS (Simple Horizontal Infinite Marquee ~100px) */}
        {/* ========================================================================= */}
        <section className="py-6 sm:py-8 bg-white border-b border-slate-200/60 overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)] select-none"
              onMouseEnter={() => setIsMarqueePaused(true)}
              onMouseLeave={() => setIsMarqueePaused(false)}
            >
              <motion.div
                animate={{ x: isMarqueePaused ? undefined : ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
                className="flex items-center gap-10 sm:gap-14 w-max cursor-pointer py-1"
              >
                {marqueeLogos.map((brand, idx) => (
                  <div
                    key={`${brand.name}-${idx}`}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs hover:border-[#00b7c2]/40 hover:bg-white transition-all flex-shrink-0 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00b7c2] group-hover:scale-125 transition-transform" />
                    <span className="font-extrabold text-sm sm:text-base text-[#082F49] tracking-tight group-hover:text-[#0f4c81] transition-colors">
                      {brand.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      ({brand.tag})
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CORE SERVICES OVERVIEW (8 Clean Cards) */}
        {/* ========================================================================= */}
        <section className="section-py bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-[#00b7c2]" />
                <span>Full Stack Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Full Stack Digital Services
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal">
                End-to-end technology solutions designed to help businesses build, scale, automate, and
                grow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CORE_SERVICES.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#00b7c2]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[rgba(15,76,129,0.06)] group-hover:bg-[#0f4c81] text-[#0f4c81] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="text-lg font-black text-[#082F49] group-hover:text-[#0f4c81] transition-colors mb-3">
                        {service.title}
                      </h3>

                      <ul className="space-y-2 text-xs text-slate-600 mb-6">
                        {service.bullets.map((b, i) => (
                          <li key={i} className="flex items-center gap-2 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00b7c2] flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4c81] group-hover:text-[#00b7c2] transition-colors pt-3 border-t border-slate-100"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHY BUSINESSES CHOOSE CODEPLACED (6 Cards Only) */}
        {/* ========================================================================= */}
        <section className="section-py bg-white border-b border-slate-200/80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00b7c2]" />
                <span>Enterprise Delivery Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Why Businesses Choose CodePlaced
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal">
                Enterprise engineering rigor combined with fast milestone velocity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_CARDS.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#00b7c2]/40 hover:bg-white shadow-2xs hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-[#0f4c81] group-hover:bg-[#0f4c81] group-hover:text-white flex items-center justify-center mb-4 shadow-2xs transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#082F49] mb-2 group-hover:text-[#0f4c81] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. FEATURED CASE STUDIES PREVIEW (3 Cards + View All Button) */}
        {/* ========================================================================= */}
        <section className="section-py bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
                <span>Client Impact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Real Solutions. Measurable Impact.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal">
                Explore how we helped fast-growing companies and enterprises launch production-grade
                systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {FEATURED_CASE_STUDIES.map((study) => (
                <div
                  key={study.id}
                  className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#00b7c2]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image & Industry Badge */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-[#082F49]">
                        {study.industry}
                      </span>
                      <div className="absolute bottom-3 left-3 text-white text-xs font-semibold text-cyan-300">
                        {study.client}
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="p-6 space-y-3.5">
                      <h3 className="text-base font-black text-[#082F49] group-hover:text-[#0f4c81] transition-colors line-clamp-2">
                        {study.title}
                      </h3>

                      <div className="space-y-2 text-xs text-slate-600">
                        <div>
                          <strong className="text-slate-800 font-bold block">Challenge:</strong>
                          <p className="line-clamp-2 text-slate-500">{study.challenge}</p>
                        </div>
                        <div>
                          <strong className="text-slate-800 font-bold block">Solution:</strong>
                          <p className="line-clamp-2 text-slate-500">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results Metric */}
                      <div className="pt-2">
                        <div className="grid grid-cols-2 gap-2">
                          {study.metrics?.map((m: { label: string; value: string }, i: number) => (
                            <div key={i} className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-100">
                              <div className="text-[11px] text-slate-400 font-medium">{m.label}</div>
                              <div className="text-sm font-extrabold text-[#0f4c81]">{m.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/case-studies"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#F8FAFC] group-hover:bg-[#0f4c81] group-hover:text-white text-[#0f4c81] text-xs font-bold border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>View Case Study Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0f4c81] hover:bg-[#082F49] text-white font-extrabold text-sm shadow-md transition-all active:scale-95"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. RESULTS SECTION (Dark Gradient Section) */}
        {/* ========================================================================= */}
        <section className="py-20 bg-gradient-to-b from-[#082F49] via-[#083344] to-[#041d27] text-white relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00b7c2]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Empirical Track Record</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Proven Results. Delivered at Scale.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
              {RESULTS_METRICS.map((item, idx) => (
                <div
                  key={idx}
                  className={`${
                    idx === 4 ? "col-span-2 md:col-span-1" : ""
                  } p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs text-center`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#14B8A6] mb-2 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. INDUSTRIES PREVIEW (8 Clean Industry Cards + Explore Button) */}
        {/* ========================================================================= */}
        <section className="section-py bg-white border-b border-slate-200/80">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#00b7c2]" />
                <span>Domain Specialization</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
                Industries We Transform
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal">
                Specialized technology engineering tailored to mission-critical regulatory and scale
                requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {INDUSTRIES_LIST.map((ind, idx) => {
                const IndIcon = ind.icon;
                return (
                  <Link
                    key={idx}
                    href={ind.href}
                    className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#00b7c2]/50 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#0f4c81] group-hover:bg-[#0f4c81] group-hover:text-white flex items-center justify-center mb-3 transition-colors shadow-2xs">
                      <IndIcon className="w-6 h-6" />
                    </div>
                    <span className="font-extrabold text-sm sm:text-base text-[#082F49] group-hover:text-[#0f4c81] transition-colors">
                      {ind.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#082F49] font-extrabold text-sm border border-slate-200 shadow-xs transition-all hover:border-[#00b7c2]/40"
              >
                <span>Explore Industries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. FINAL CTA (Dark Premium Section) */}
        {/* ========================================================================= */}
        <section className="section-py bg-gradient-to-r from-[#0B4F6C] via-[#082F49] to-[#041D27] text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00b7c2]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Start Your Next Sprint</span>
            </div>

            <h2 className="text-[32px] sm:text-[46px] lg:text-[56px] font-black tracking-tight text-white leading-tight">
              Ready to Build Something Intelligent?
            </h2>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Let&apos;s discuss your next web, mobile, analytics, AI, or cloud initiative.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#38BDF8] hover:bg-[#0284C7] text-[#082F49] hover:text-white font-extrabold text-sm transition-all shadow-lg shadow-[#38BDF8]/20 flex items-center justify-center gap-2"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2 text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>30-Min Principal Review</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NDA Signed Upfront</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Production Delivery in 2–4 Weeks</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
