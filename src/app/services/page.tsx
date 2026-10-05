"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Smartphone,
  AppWindow,
  Share2,
  BarChart3,
  Database,
  Wrench,
  Cloud,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  Layers,
  Clock,
  Check,
  Search,
  FileCode2,
  Cpu,
  Lock,
  Rocket,
  Headphones,
  Settings2,
} from "lucide-react";

const PARTNER_LOGOS = [
  { name: "AWS", category: "Cloud Infrastructure" },
  { name: "Google Cloud", category: "AI & BigQuery" },
  { name: "Microsoft Azure", category: "Enterprise Cloud" },
  { name: "OpenAI", category: "LLM & Copilots" },
  { name: "Meta", category: "Social Growth & Ads" },
  { name: "Power BI", category: "BI & Dashboards" },
  { name: "PostgreSQL", category: "Relational DB" },
  { name: "Snowflake", category: "Cloud Data Warehouse" },
];

const SERVICES_GRID = [
  {
    id: "app-development",
    title: "App Development",
    icon: Smartphone,
    gradient: "from-[#0f4c81] to-[#00b7c2]",
    bgLight: "bg-[#F0F9FF]",
    borderColor: "border-[#00b7c2]/20",
    description:
      "Native and cross-platform mobile apps engineered for speed, high user retention, and intuitive usability.",
    features: [
      "Basic App MVP",
      "Custom Mobile Apps",
      "Android & iOS",
      "Admin Panels",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: AppWindow,
    gradient: "from-[#082F49] to-[#0EA5E9]",
    bgLight: "bg-[#F8FAFC]",
    borderColor: "border-slate-200",
    description:
      "Modern, ultra-fast web applications and responsive business websites optimized for search rankings and conversion.",
    features: [
      "Business Websites",
      "Custom Web Applications",
      "CMS Development",
      "SEO Ready",
    ],
  },
  {
    id: "social-media",
    title: "Social Media",
    icon: Share2,
    gradient: "from-[#0f4c81] to-[#14B8A6]",
    bgLight: "bg-[#ECFDF5]",
    borderColor: "border-[#14B8A6]/20",
    description:
      "End-to-end social media growth, visual creative production, scheduling automation, and performance analytics.",
    features: [
      "Monthly Content",
      "Reels & Creatives",
      "Posting & Scheduling",
      "Growth Analytics",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: BarChart3,
    gradient: "from-[#0369A1] to-[#06B6D4]",
    bgLight: "bg-[#F0FDF4]",
    borderColor: "border-cyan-200",
    description:
      "Transform disparate data streams into live, executive-ready dashboards and operational KPI tracking.",
    features: [
      "Power BI Dashboards",
      "Looker Studio",
      "KPI Reporting",
      "Executive Dashboards",
    ],
  },
  {
    id: "custom-analytics",
    title: "Custom Analytics",
    icon: Database,
    gradient: "from-[#0B4F6C] to-[#22C55E]",
    bgLight: "bg-[#F0F9FF]",
    borderColor: "border-emerald-200",
    description:
      "Scalable data lakehouses, automated ETL/ELT pipelines, warehousing architectures, and predictive machine learning.",
    features: [
      "Data Warehousing",
      "ETL Pipelines",
      "Data Automation",
      "Predictive Models",
    ],
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    icon: Wrench,
    gradient: "from-[#0F172A] to-[#0284C7]",
    bgLight: "bg-[#F8FAFC]",
    borderColor: "border-slate-200",
    description:
      "Proactive security patching, zero-downtime backups, continuous performance monitoring, and 24/7 technical support.",
    features: [
      "Security Updates",
      "Backups",
      "Performance Monitoring",
      "Technical Support",
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    icon: Cloud,
    gradient: "from-[#0284C7] to-[#38BDF8]",
    bgLight: "bg-[#F0F9FF]",
    borderColor: "border-sky-200",
    description:
      "Reliable cloud architecture, automated CI/CD deployment gates, containerization, and FinOps cost optimization.",
    features: [
      "AWS",
      "Azure",
      "Deployment",
      "Monitoring",
    ],
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise Solutions",
    icon: Building2,
    gradient: "from-[#082F49] to-[#0B4F6C]",
    bgLight: "bg-[#F8FAFC]",
    borderColor: "border-slate-200",
    description:
      "Custom internal workflow software, secure employee portals, CRM architectures, and multi-system API integrations.",
    features: [
      "CRM Systems",
      "Internal Portals",
      "Automation",
      "Integrations",
    ],
  },
];

const DELIVERY_STEPS = [
  {
    step: "01",
    title: "Discovery",
    desc: "Technical requirements, architecture scoping & business goal alignment.",
    icon: Search,
  },
  {
    step: "02",
    title: "Planning",
    desc: "System blueprints, sprint timeline, milestone roadmap & SLA definition.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Design",
    desc: "UI/UX wireframes, user journeys & high-fidelity interactive prototypes.",
    icon: FileCode2,
  },
  {
    step: "04",
    title: "Development",
    desc: "Agile sprints by senior engineers with weekly demos and clean code.",
    icon: Cpu,
  },
  {
    step: "05",
    title: "Testing",
    desc: "Rigorous QA testing, security audits & automated regression validation.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch",
    desc: "Zero-downtime deployment, infrastructure handoff & production verify.",
    icon: Rocket,
  },
  {
    step: "07",
    title: "Support",
    desc: "Continuous SLA maintenance, performance monitoring & proactive updates.",
    icon: Headphones,
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    title: "Fast Delivery",
    desc: "Production-ready systems deployed in 2–4 weeks using pre-tested blueprints.",
    icon: Zap,
    badge: "2–4 Weeks",
  },
  {
    title: "Business Focused",
    desc: "Every line of code and dashboard is built around measurable outcomes and revenue ROI.",
    icon: TrendingUp,
    badge: "Outcome Driven",
  },
  {
    title: "Senior Engineers",
    desc: "Work directly with experienced developers and architects with zero junior handoffs.",
    icon: Users,
    badge: "100% Senior",
  },
  {
    title: "Transparent Communication",
    desc: "Weekly sprint demos, real-time Slack communication, and transparent Git commits.",
    icon: Clock,
    badge: "Weekly Demos",
  },
  {
    title: "Scalable Architecture",
    desc: "Engineered from day one to handle high traffic, secure multi-tenancy, and growth.",
    icon: Layers,
    badge: "Cloud Ready",
  },
  {
    title: "Long-Term Support",
    desc: "Reliable maintenance packages, 99.9% uptime SLAs, and dedicated technical support.",
    icon: ShieldCheck,
    badge: "24/7 SLA",
  },
];

const STATS_DATA = [
  { value: "250+", label: "Projects Delivered", sub: "Web, Mobile & AI" },
  { value: "150+", label: "Clients Served", sub: "Global Enterprises & Startups" },
  { value: "1200+", label: "Automated Workflows", sub: "ETL, AI & Analytics" },
  { value: "15+", label: "Industries Supported", sub: "Fintech, Health, Retail & SaaS" },
];

const TECH_CATEGORIES = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", tag: "UI Library" },
      { name: "Next.js", tag: "Full-Stack Framework" },
      { name: "TypeScript", tag: "Type Safety" },
      { name: "Tailwind CSS", tag: "Modern Styling" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", tag: "JavaScript Runtime" },
      { name: "Java Spring Boot", tag: "Enterprise Backend" },
      { name: "Python", tag: "AI & Automation" },
      { name: "FastAPI", tag: "High-Speed APIs" },
    ],
  },
  {
    category: "Analytics & Data",
    technologies: [
      { name: "Power BI", tag: "Executive Dashboards" },
      { name: "Looker Studio", tag: "Interactive Reports" },
      { name: "SQL & PostgreSQL", tag: "Relational Queries" },
      { name: "Snowflake", tag: "Data Lakehouse" },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", tag: "Amazon Web Services" },
      { name: "Microsoft Azure", tag: "Enterprise Cloud" },
      { name: "Docker", tag: "Containerization" },
      { name: "Kubernetes", tag: "Orchestration" },
    ],
  },
];

export default function ServicesPage() {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <div className="text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white font-sans relative">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden border-b border-slate-200/60">
        {/* Ambient Soft Glow Behind Content */}
        <div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[850px] h-[450px] pointer-events-none -z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(20,184,197,0.14), rgba(11,107,136,0.06), transparent 70%)",
          }}
        />

        <section className="relative pt-32 pb-8 sm:pt-36 sm:pb-9 lg:pt-40 lg:pb-10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-5"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/70 backdrop-blur-sm text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
                <span>FULL STACK SOFTWARE & AI ENGINEERING</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-[38px] sm:text-[54px] lg:text-[68px] font-[800] leading-[1.12] sm:leading-[1.14] tracking-[-0.03em] text-[#082F49] mb-5 max-w-[1050px] mx-auto [text-wrap:balance]"
            >
              Custom Software, Data Analytics &{" "}
              <span
                className="bg-clip-text text-transparent font-extrabold inline-block py-0.5"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0f4c81, #00b7c2)",
                }}
              >
                Digital Growth Services
              </span>
            </motion.h1>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-[800px] mx-auto mb-7 leading-relaxed font-normal"
            >
              From websites and mobile apps to analytics dashboards, social media growth, and
              ongoing maintenance, CodePlaced helps businesses build, launch, and scale faster.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto h-[50px] px-8 rounded-2xl bg-gradient-to-r from-[#0f4c81] to-[#00b7c2] hover:from-[#082F49] hover:to-[#0f4c81] text-white font-extrabold text-[15px] shadow-xl shadow-[#00b7c2]/20 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#services-grid"
                className="w-full sm:w-auto h-[50px] px-8 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white text-[#082F49] font-bold text-[15px] border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-200 hover:border-[#00b7c2]/40"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Trust Bullet Items Below Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-600"
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
                <span>Delivery Focused</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Tech Marquee (Continuous Gradient, Subtle Divider, Monochrome) */}
        <div className="py-4 border-t border-[#0F3D5E]/10 overflow-hidden relative select-none">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0,_black_60px,_black_calc(100%-60px),transparent_100%)] select-none"
              onMouseEnter={() => setIsMarqueePaused(true)}
              onMouseLeave={() => setIsMarqueePaused(false)}
            >
              <motion.div
                animate={{ x: isMarqueePaused ? undefined : ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 24,
                    ease: "linear",
                  },
                }}
                className="flex items-center gap-8 sm:gap-12 w-max"
              >
                {marqueeLogos.map((logo, idx) => (
                  <div
                    key={`${logo.name}-${idx}`}
                    className="flex items-center gap-2.5 text-[#36546F]/80 hover:text-[#082F49] transition-colors shrink-0 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00b7c2]" />
                    <span className="text-sm sm:text-[15px] font-semibold tracking-[-0.02em]">{logo.name}</span>
                    <span className="text-[11px] text-slate-400 font-medium">({logo.category})</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SERVICES GRID (8 Glassmorphic Cards) */}
      {/* ========================================================================= */}
      <section id="services-grid" className="pt-14 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[900px] mx-auto text-center mb-14 lg:mb-18 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/70 backdrop-blur-sm text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>CORE SERVICE OFFERINGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#082F49]">
              Comprehensive Technology & Growth Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[750px] mx-auto font-normal">
              Engineered for velocity, scalability, and measurable business impact. Everything your
              organization needs from MVP to enterprise scale.
            </p>
          </div>

          {/* 8 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_GRID.map((svc) => {
              const IconComponent = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="rounded-[20px] glass-service-card p-7 shadow-xs hover:shadow-xl hover:border-[#00b7c2]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group min-h-[280px]"
                >
                  <div>
                    {/* Icon Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ECFEFF] to-[#E0F2FE] border border-[#00b7c2]/25 flex items-center justify-center text-[#0f4c81] group-hover:scale-105 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-[#0f4c81]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Production Ready
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-[#082F49] group-hover:text-[#0f4c81] transition-colors mb-2.5">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/40">
                      {svc.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700"
                        >
                          <div className="w-4 h-4 rounded-full bg-[#ECFEFF] text-[#00b7c2] flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom Link */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-200/40 text-xs font-bold text-[#0f4c81] group-hover:text-[#00b7c2] transition-colors"
                  >
                    <span>Request Scoping</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DELIVERY PROCESS */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[900px] mx-auto text-center mb-14 lg:mb-18 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/70 backdrop-blur-sm text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>THE CODEPLACED BLUEPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#082F49]">
              How We Deliver Production Systems
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[750px] mx-auto font-normal">
              A transparent, agile, 7-step engineering methodology that guarantees reliable code and
              fixed milestones from day one.
            </p>
          </div>

          {/* 7-Step Delivery Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {DELIVERY_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-[20px] glass-panel-card p-5 shadow-2xs hover:shadow-md hover:border-[#00b7c2]/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between relative group"
                >
                  <div>
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black text-[#00b7c2] tracking-wider">
                        {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-[#ECFEFF]/80 flex items-center justify-center text-[#0f4c81]">
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-extrabold text-[#082F49] mb-2 group-hover:text-[#0f4c81] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-200/40 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Milestone Gate</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY BUSINESSES CHOOSE CODEPLACED */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[900px] mx-auto text-center mb-14 lg:mb-18 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/70 backdrop-blur-sm text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>THE CODEPLACED ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#082F49]">
              Why Businesses Choose CodePlaced
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[750px] mx-auto font-normal">
              We replace bloated traditional agencies with elite senior engineering velocity,
              transparent communication, and guaranteed delivery.
            </p>
          </div>

          {/* 6 Advantage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] glass-panel-card p-8 shadow-2xs hover:shadow-lg hover:border-[#00b7c2]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs flex items-center justify-center text-[#0f4c81] group-hover:bg-[#0f4c81] group-hover:text-white transition-colors duration-300">
                        <ItemIcon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#082F49] mb-3 group-hover:text-[#0f4c81] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Checked Guarantee */}
                  <div className="mt-6 pt-4 border-t border-slate-200/40 flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00b7c2]" />
                    <span>CodePlaced Commitment</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SIMPLE STATS BLOCK (Dark Gradient Section) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#082F49] via-[#0B4F6C] to-[#041E2A] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {STATS_DATA.map((stat, sIdx) => (
              <div
                key={sIdx}
                className="p-6 sm:p-8 rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur-xs flex flex-col justify-center"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#38BDF8] tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-base sm:text-lg font-extrabold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TECHNOLOGY STACK */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[900px] mx-auto text-center mb-14 lg:mb-18 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/70 backdrop-blur-sm text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>MODERN TECH STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#082F49]">
              Enterprise-Grade Technologies
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[750px] mx-auto font-normal">
              We build with modern, production-proven languages and cloud ecosystems that maximize
              runtime speed, maintainability, and developer velocity.
            </p>
          </div>

          {/* Categorized Tech Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_CATEGORIES.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="rounded-[20px] glass-panel-card p-6 shadow-2xs hover:shadow-md hover:border-[#00b7c2]/30 hover:-translate-y-1 transition-all duration-200"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/40">
                  <h3 className="text-lg font-bold text-[#082F49]">
                    {cat.category}
                  </h3>
                  <span className="text-xs font-extrabold text-[#00b7c2]">
                    0{cIdx + 1}
                  </span>
                </div>

                {/* Technologies List */}
                <div className="space-y-3">
                  {cat.technologies.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3 rounded-xl bg-white/70 backdrop-blur-xs border border-slate-200/60 flex items-center justify-between hover:border-[#00b7c2]/40 transition-colors"
                    >
                      <span className="text-sm font-bold text-[#082F49]">
                        {tech.name}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-600 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200/50">
                        {tech.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CTA (Dark Gradient like TechAhead) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#082F49] to-[#041E2A] text-white text-center relative overflow-hidden">
        {/* Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none -z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,183,194,0.18), transparent 70%)",
          }}
        />

        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>START YOUR PROJECT TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Build Your Next Product?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss your website, app, analytics dashboard, or growth strategy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-[#38BDF8] hover:bg-[#0284C7] text-[#082F49] hover:text-white font-extrabold text-[15px] transition-all shadow-xl shadow-[#38BDF8]/20 flex items-center justify-center gap-2.5 active:scale-95 group"
            >
              <span>Schedule Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-[15px] border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>30-Min Strategy Call</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Bilateral NDA Upfront</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Delivery in 2–4 Weeks</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
