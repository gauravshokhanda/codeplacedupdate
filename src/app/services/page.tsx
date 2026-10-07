"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Smartphone,
  Share2,
  Database,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Check,
  Search,
  FileCode2,
  Cpu,
  Rocket,
  Headphones,
  Cloud,
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

const SERVICES_CATEGORIES_DATA = [
  {
    id: "app-web-development",
    number: "01",
    title: "App & Web Development",
    icon: Smartphone,
    shortDesc: "Build powerful digital products and platforms tailored to your business.",
    fullDesc:
      "Build digital products that are designed to scale. From MVPs to enterprise-grade platforms, CodePlaced develops secure, high-performance applications that help businesses launch faster, operate efficiently, and grow confidently.",
    positioning:
      "From MVPs to fully customized digital platforms, we design and build reliable digital products around your business needs.",
    services: [
      "Mobile App Development (iOS & Android)",
      "Web Development & Responsive Portals",
      "Custom SaaS & Multi-Tenant Platforms",
      "Shopify & E-Commerce Engineering",
      "API Architecture & Microservices",
      "Custom Backends & Admin Command Panels",
      "Proactive Maintenance & SLA Support",
    ],
  },
  {
    id: "data-engineering-analytics",
    number: "02",
    title: "Data Engineering & Analytics",
    icon: Database,
    shortDesc: "Transform complex data into connected, actionable insights.",
    fullDesc:
      "Turn your data into a commercial advantage. We help organizations collect, clean, transform, visualize, and operationalize data through modern analytics platforms and business intelligence solutions.",
    positioning:
      "We connect, clean, transform, and visualize your data so you can make faster, smarter decisions.",
    services: [
      "Data Lakehouses & Medallion Pipeline Architecture",
      "Automated ETL/ELT with dbt & Python",
      "Enterprise Data Warehousing (Snowflake, BigQuery)",
      "Executive Command Dashboards (Power BI, Looker)",
      "Predictive Analytics & KPI Modeling",
      "Real-Time Telemetry & Data Quality Assurance",
      "Row-Level Security & Governance Enforcement",
    ],
  },
  {
    id: "digital-social-marketing",
    number: "03",
    title: "Digital & Social Marketing",
    icon: Share2,
    shortDesc: "Turn your digital presence into a channel for meaningful growth.",
    fullDesc:
      "Build your brand. Reach your audience. Drive growth. From content creation and social media management to paid advertising and analytics, CodePlaced helps businesses create a stronger digital presence and measurable marketing outcomes.",
    positioning:
      "From strategy and content to paid campaigns and analytics, we help businesses build a stronger digital presence and generate measurable growth.",
    services: [
      "Technical SEO & Content Growth Strategy",
      "Omnichannel Social Media Management",
      "High-Impact Creative Production & Copywriting",
      "Paid Acquisition (Google Ads, Meta, LinkedIn)",
      "Conversion Rate Optimization (CRO) & Funnels",
      "Multi-Touch Attribution & Campaign Tracking",
      "Full-Funnel Analytics Reporting",
    ],
  },
];

const DELIVERY_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand business goals, user needs, and technical constraints to architect the optimal delivery roadmap.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    desc: "Plan scalable solutions, system architecture diagrams, and intuitive user experiences with clear milestones.",
    icon: FileCode2,
  },
  {
    step: "03",
    title: "Build",
    desc: "Develop robust products, platforms, and automated data pipelines with 2-week agile sprints.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Optimize",
    desc: "Monitor runtime performance, fine-tune query latencies, and scale systems continuously post-launch.",
    icon: Rocket,
  },
];

const SERVICE_DIFFERENTIATORS = [
  {
    title: "End-to-End Delivery",
    desc: "From initial scoping and system architecture to launch and ongoing maintenance, we manage the entire project lifecycle.",
    icon: Zap,
    badge: "Full Lifecycle",
  },
  {
    title: "Industry Expertise",
    desc: "Deep domain knowledge across fintech, healthcare, retail, SaaS, logistics, and digital commerce.",
    icon: Building2,
    badge: "Domain Depth",
  },
  {
    title: "Modern Technologies",
    desc: "Built on resilient cloud stacks, modern frontend frameworks, and robust data engineering tools.",
    icon: Cloud,
    badge: "Modern Stack",
  },
  {
    title: "Scalable Architecture",
    desc: "Engineering systems designed to effortlessly handle increasing workloads, users, and data volumes.",
    icon: Layers,
    badge: "High Performance",
  },
  {
    title: "Data-Driven Execution",
    desc: "Every technical and marketing decision is backed by analytics, user telemetry, and measurable KPIs.",
    icon: Database,
    badge: "Actionable BI",
  },
  {
    title: "Continuous Support",
    desc: "Proactive monitoring, SLA maintenance, and continuous optimization to ensure sustained long-term success.",
    icon: Headphones,
    badge: "Sustained ROI",
  },
];

const STATS_DATA = [
  { value: "250+", label: "Projects Delivered", detail: "Software, BI & Growth Systems" },
  { value: "150+", label: "Clients Served", detail: "Startups to Global Enterprises" },
  { value: "1200+", label: "Automated Workflows", detail: "Pipelines & Production APIs" },
  { value: "15+", label: "Industries Supported", detail: "Domain-Specific Blueprints" },
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
      { name: "AWS", tag: "Cloud Infrastructure" },
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
    <div
      style={{
        background: "linear-gradient(180deg, #f8fcff 0%, #edf7fb 40%, #eaf5f9 100%)",
      }}
      className="text-[#0F2B46] selection:bg-[#0D3B66] selection:text-white font-sans relative min-h-screen"
    >
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 text-center">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#0D3B66] border border-[#1CC8E5]/30 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1CC8E5]" />
            <span>MODERN TECHNOLOGY PARTNER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-[#0F2B46] [text-wrap:balance]"
          >
            Solutions Designed Around{" "}
            <span
              className="bg-clip-text text-transparent font-black inline-block py-0.5"
              style={{
                backgroundImage: "linear-gradient(90deg, #0F2B46 0%, #1CC8E5 50%, #0D3B66 100%)",
              }}
            >
              Your Business Goals
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[#5B6B7C] max-w-[800px] mx-auto leading-relaxed font-normal"
          >
            From application development and data engineering to digital marketing, we deliver solutions built for measurable commercial impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a
              href="#services-grid"
              className="w-full sm:w-auto h-[50px] px-8 rounded-full text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group"
              style={{
                background: "linear-gradient(90deg, #0F2B46, #1CC8E5)",
              }}
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto h-[50px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#0F2B46] font-bold text-sm border border-slate-200 shadow-xs flex items-center justify-center transition-all duration-300 hover:border-[#1CC8E5]/50"
            >
              <span>View Our Work</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full py-4 border-y border-[#0F2B46]/10 overflow-hidden relative select-none">
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
                className="flex items-center gap-2.5 text-[#5B6B7C] hover:text-[#0F2B46] transition-colors shrink-0 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1CC8E5]" />
                <span className="text-sm sm:text-[15px] font-semibold tracking-tight">{logo.name}</span>
                <span className="text-xs text-slate-400">({logo.category})</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CORE SERVICE OFFERINGS */}
      {/* ========================================================================= */}
      <section id="services-grid" className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0D3B66] border border-[#1CC8E5]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#1CC8E5]" />
              <span>CORE SERVICE OFFERINGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2B46]">
              Comprehensive Technology & Growth Services
            </h2>
            <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-[750px] mx-auto font-normal">
              From MVPs to enterprise-grade platforms, analytics lakehouses, and high-impact digital marketing.
            </p>
          </div>

          {/* 3 Large Service Pillar Cards */}
          <div className="space-y-8 lg:space-y-10">
            {SERVICES_CATEGORIES_DATA.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="rounded-3xl bg-white p-7 sm:p-9 lg:p-10 shadow-xs hover:shadow-xl hover:shadow-sky-950/8 hover:border-[#1CC8E5]/40 transition-all duration-300 border border-sky-100 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Category Info */}
                    <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0D3B66] shadow-2xs group-hover:bg-[#0F2B46] group-hover:text-white transition-colors duration-300">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs font-black bg-[#F4FAFC] text-[#0D3B66] border border-sky-100">
                            {cat.number}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-[#0F2B46] tracking-tight group-hover:text-[#0D3B66] transition-colors">
                          {cat.title}
                        </h3>

                        <p className="text-xs font-bold text-[#18B6D8] uppercase tracking-wide">
                          {cat.shortDesc}
                        </p>

                        <p className="text-sm text-[#5B6B7C] leading-relaxed font-normal">
                          {cat.fullDesc}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#F4FAFC] border border-sky-100 text-xs sm:text-sm text-[#0F2B46] font-medium leading-relaxed">
                        <span className="font-bold text-[#0D3B66] block mb-1">Our Approach:</span>
                        {cat.positioning}
                      </div>
                    </div>

                    {/* Right Column: Services List */}
                    <div className="lg:col-span-7 flex flex-col justify-between pt-4 lg:pt-0 lg:border-l lg:border-slate-100 lg:pl-10">
                      <div>
                        <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                          Specialized Deliverables
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                          {cat.services.map((svcName, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-3.5 rounded-xl bg-[#F4FAFC] hover:bg-white border border-sky-100 hover:border-[#1CC8E5]/40 transition-all flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F2B46] shadow-2xs"
                            >
                              <div className="w-5 h-5 rounded-full bg-white text-[#1CC8E5] border border-sky-100 shadow-2xs flex items-center justify-center flex-shrink-0">
                                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                              </div>
                              <span className="truncate">{svcName}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <span className="text-xs font-semibold text-[#5B6B7C]">
                          Need custom scoping for this capability?
                        </span>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 h-10 rounded-full bg-[#0F2B46] hover:bg-[#0D3B66] text-white text-xs font-bold shadow-md transition-all active:scale-95"
                        >
                          <span>Get In Touch</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR DELIVERY APPROACH */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F4FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0D3B66] border border-[#1CC8E5]/30 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#1CC8E5]" />
              <span>OUR DELIVERY APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2B46]">
              From Strategy To Execution
            </h2>
            <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-[750px] mx-auto font-normal">
              A structured 4-stage delivery lifecycle designed to take projects seamlessly from initial concept to scalable production systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_STEPS.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-3xl bg-white p-7 shadow-xs hover:shadow-xl hover:shadow-sky-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-sky-100 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-black text-[#18B6D8] tracking-wider px-2.5 py-1 rounded-full bg-[#F4FAFC] border border-sky-100">
                        STAGE {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0D3B66] group-hover:bg-[#0F2B46] group-hover:text-white transition-colors">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#0F2B46] mb-2 group-hover:text-[#0D3B66] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Milestone Gate</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DIFFERENTIATORS */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0D3B66] border border-[#1CC8E5]/30 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1CC8E5]" />
              <span>WHAT SETS OUR SERVICES APART</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2B46]">
              Built For Scale. Designed For Results.
            </h2>
            <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-[750px] mx-auto font-normal">
              We combine technical engineering excellence, domain specialization, and agile execution to deliver reliable, enterprise-grade digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_DIFFERENTIATORS.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white p-7 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-sky-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-sky-100 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0D3B66] group-hover:bg-[#0F2B46] group-hover:text-white transition-colors duration-300">
                        <ItemIcon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F4FAFC] text-[#0D3B66] border border-sky-100">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0F2B46] mb-2 group-hover:text-[#0D3B66] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#5B6B7C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0F2B46]">
                    <CheckCircle2 className="w-4 h-4 text-[#1CC8E5]" />
                    <span>CodePlaced Commitment</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STATS BLOCK (Consistent Theme) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            {STATS_DATA.map((stat, sIdx) => (
              <div
                key={sIdx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-sky-100 shadow-xs hover:shadow-xl hover:shadow-sky-950/8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0F2B46] to-[#1CC8E5] tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#0F2B46] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#5B6B7C]">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TECHNOLOGY STACK */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0D3B66] border border-[#1CC8E5]/30 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-[#1CC8E5]" />
              <span>MODERN TECH STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2B46]">
              Enterprise-Grade Technologies
            </h2>
            <p className="text-base sm:text-lg text-[#5B6B7C] leading-relaxed max-w-[750px] mx-auto font-normal">
              We build with modern, production-proven languages and cloud ecosystems that maximize runtime speed, maintainability, and developer velocity.
            </p>
          </div>

          {/* Categorized Tech Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_CATEGORIES.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="rounded-3xl bg-white p-7 shadow-xs hover:shadow-xl hover:shadow-sky-950/5 hover:-translate-y-1 transition-all duration-300 border border-sky-100"
              >
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-[#0F2B46]">
                    {cat.category}
                  </h3>
                  <span className="text-xs font-extrabold text-[#18B6D8]">
                    0{cIdx + 1}
                  </span>
                </div>

                <div className="space-y-3">
                  {cat.technologies.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3.5 rounded-xl bg-[#F4FAFC] border border-sky-100 flex items-center justify-between hover:border-[#1CC8E5]/40 transition-colors"
                    >
                      <span className="text-sm font-bold text-[#0F2B46]">
                        {tech.name}
                      </span>
                      <span className="text-[11px] font-semibold text-[#5B6B7C] bg-white px-2 py-0.5 rounded-md border border-slate-100">
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
      {/* 7. FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-[1100px] mx-auto rounded-[32px] p-10 sm:p-14 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #0F2B46 0%, #0D3B66 50%, #1CC8E5 100%)",
          }}
        >
          <div className="max-w-[780px] mx-auto relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/15 text-white border border-white/25">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>START YOUR PROJECT TODAY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Technology That Turns Ideas Into Impact
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-[660px] mx-auto leading-relaxed font-normal">
              Let&apos;s build scalable digital products, unlock value from your data, and accelerate meaningful business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto h-[50px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#0F2B46] font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 group"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/case-studies"
                className="w-full sm:w-auto h-[50px] px-8 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 shadow-xs flex items-center justify-center transition-all duration-300"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
