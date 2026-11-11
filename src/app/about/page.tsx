"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Code2,
  Database,
  BarChart3,
  Bot,
} from "lucide-react";

// =========================================================================
// DATA STRUCTURES (VERIFIED FACTUAL DATA ONLY)
// =========================================================================

// Hero Trust Metrics (Verified figures from existing project data)
const COMPANY_STATS = [
  { value: "250+", label: "Projects Delivered" },
  { value: "20+", label: "Industries Served" },
  { value: "99.9%", label: "Platform Reliability" },
  { value: "Global", label: "Delivery Team" },
];

// Core Principles (Company Philosophy)
const COMPANY_PRINCIPLES = [
  {
    num: "01",
    title: "Ownership",
    desc: "We take complete end-to-end accountability for project success, treating every system as if it were our own business.",
  },
  {
    num: "02",
    title: "Transparency",
    desc: "Clear sprint milestones, open progress visibility, and honest communication with no hidden surprises.",
  },
  {
    num: "03",
    title: "Innovation",
    desc: "Engineering modern, future-proof architectures and AI solutions that create a genuine competitive moat.",
  },
  {
    num: "04",
    title: "Quality",
    desc: "Enterprise-grade code quality, robust security testing, and reliable performance across every release.",
  },
  {
    num: "05",
    title: "Collaboration",
    desc: "Partnering directly with your leadership and engineering pods as a cohesive, high-velocity team.",
  },
  {
    num: "06",
    title: "Long-Term Partnerships",
    desc: "We focus on sustainable architectures, continuous improvements, and compounding long-term value.",
  },
];

// Executive Leadership Profiles (White Background, Natural Photography - Spacious & Prominent)
const LEADERSHIP_TEAM = [
  {
    name: "Manya Tyagi",
    role: "Founder & CEO",
    bio: "Manya leads business intelligence, analytics, AI initiatives, and growth strategies at CodePlaced. She specializes in turning complex datasets into actionable insights that help organizations make smarter decisions, streamline operations, and unlock scalable revenue growth.",
    image: "/team/Manya.png",
    imagePosition: "object-top",
    expertise: [
      "AI Strategy",
      "Business Intelligence",
      "Analytics",
      "Product Innovation",
    ],
    ctaText: "Connect With Manya",
    linkedin: "https://www.linkedin.com/in/manya-tyagi-626a421b2/",
  },
  {
    name: "Gaurav Shokhanda",
    role: "Co-Founder & Technology Lead",
    bio: "Gaurav oversees technology strategy, software architecture, cloud infrastructure, and product engineering at CodePlaced. He helps businesses build scalable, cloud-native systems and AI automation workflows that support long-term enterprise growth.",
    image: "/team/gaurav.jpg",
    imagePosition: "object-[center_20%]",
    expertise: [
      "Cloud Architecture",
      "Full-Stack Engineering",
      "Enterprise Systems",
      "Technical Leadership",
    ],
    ctaText: "Connect With Gaurav",
    linkedin: "https://www.linkedin.com/in/gaurav-shokhanda-b5ba12194/",
  },
];

// 4-Stage Horizontal Flow: How We Work Together
const HOW_WE_WORK_STEPS = [
  {
    num: "01",
    phase: "Understand",
    desc: "We analyze your business objectives, audit technical bottlenecks, and define quantifiable milestones.",
  },
  {
    num: "02",
    phase: "Architect",
    desc: "We design resilient system blueprints, API contracts, and security guardrails tailored for scale.",
  },
  {
    num: "03",
    phase: "Build",
    desc: "Our senior pods deliver production-ready software, automated data pipelines, and AI systems in rapid sprints.",
  },
  {
    num: "04",
    phase: "Scale",
    desc: "We continuously benchmark production telemetry, optimize performance, and provide proactive SLA support.",
  },
];

// Meet Our Team
const ENGINEERING_TEAM: {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
}[] = [
  {
    name: "Ankit",
    role: "Data Analyst Manager",
    image: "/team/team-2.jpg",
  },
  {
    name: "Prajwal Kumar Rathi",
    role: "Data Analyst",
    image: "/team/team-7.jpg",
  },
  {
    name: "Naman",
    role: "Data Analyst",
    image: "/team/team-5.jpg",
  },
  {
    name: "Jivika",
    role: "Content & Growth",
    image: "/team/team-3.jpg",
  },
  {
    name: "Sadiya Ansari",
    role: "Growth & Editing Specialist",
    image: "/team/team-6.jpg",
  },
  {
    name: "Tanya Gupta",
    role: "Marketing Specialist",
    image: "/team/tanya-gupta.webp",
  },
  {
    name: "Aditya Kumar",
    role: "Data Analyst",
    image: "/team/aditya-kumar.webp",
  },
];

// What We Bring Together (Capabilities Section)
const CAPABILITIES = [
  {
    num: "01",
    title: "Software Development",
    desc: "Build web, mobile, and custom software solutions that support business operations and growth.",
    icon: Code2,
  },
  {
    num: "02",
    title: "Data Engineering",
    desc: "Connect systems, organize information, and build reliable data foundations.",
    icon: Database,
  },
  {
    num: "03",
    title: "Analytics & Business Intelligence",
    desc: "Turn business data into dashboards, reporting, and actionable insights.",
    icon: BarChart3,
  },
  {
    num: "04",
    title: "AI & Automation",
    desc: "Improve workflows and business processes through practical AI and intelligent automation.",
    icon: Bot,
  },
];

// Frequently Asked Questions
const FAQ_ITEMS = [
  {
    q: "What industries does CodePlaced work with?",
    a: "We partner with Ecommerce, EdTech, Insurance, Human Resources, Healthcare, and Real Estate enterprises. Our engineering pods tailor each architecture to industry-specific compliance requirements like HIPAA, SOC2, and GDPR.",
  },
  {
    q: "How long do projects typically take to deliver?",
    a: "Most scoped projects—such as executive dashboards, data lakehouses, MVP apps, and AI copilots—are delivered in fixed 2–4 week production cycles. Larger enterprise transformations are phased into predictable 2-week agile sprints.",
  },
  {
    q: "Do you provide AI consulting and production implementation?",
    a: "Yes. We offer end-to-end AI consulting and implementation, including domain-specific RAG architectures, multi-agent automated workflows, private LLM fine-tuning, and low-latency vector search systems with strict hallucination guardrails.",
  },
  {
    q: "Can you modernize our existing legacy systems and databases?",
    a: "Absolutely. We specialize in zero-downtime database migrations, monolith-to-microservices re-architectures, legacy CRM integrations, and cloud cost optimizations without causing downtime to live business operations.",
  },
];

const EASING = [0.22, 1, 0.36, 1] as const;

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-sans relative min-h-screen bg-[#000000] text-neutral-900 selection:bg-[#00BCD4] selection:text-black">
      
      {/* ========================================================================= */}
      {/* 01. HERO — PREMIUM IMAGE-LED SPLIT-SCREEN (PURE BLACK #000000) */}
      {/* Desktop: 52-55% Left / 45-48% Right | Mobile: Content-driven with strict order */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden min-h-0 lg:min-h-[100svh] flex flex-col justify-center pt-20 pb-8 sm:pt-28 sm:pb-12 lg:pt-24 lg:pb-10 bg-[#000000] text-white">
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0"
          style={{
            width: "680px",
            height: "680px",
            background: "radial-gradient(circle, rgba(0, 188, 212, 0.08) 0%, rgba(0, 0, 0, 0) 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Minimal Cyan Subtle Grid Accent */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none -z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 188, 212, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 188, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
            
            {/* Left Column: 1. Label -> 2. Headline -> 3. Description -> 4. CTAs -> (Mobile Photo) -> 6. Stats */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              
              {/* 1. Small "WHO WE ARE" label */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASING }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-[#111111] text-[#00BCD4] border border-[#262626] shadow-xs"
              >
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00BCD4]" />
                <span>WHO WE ARE</span>
              </motion.div>

              {/* 2. Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASING }}
                className="text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-black leading-[1.12] sm:leading-[1.09] tracking-tight text-white [text-wrap:balance]"
              >
                Building Practical Technology Solutions That Deliver{" "}
                <span className="text-[#00BCD4]">
                  Lasting Impact.
                </span>
              </motion.h1>

              {/* 3. Supporting Description */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: EASING }}
                className="text-xs sm:text-base lg:text-lg text-neutral-300 max-w-xl leading-relaxed font-normal"
              >
                CodePlaced is a modern technology partner. We combine senior full-stack engineering, advanced cloud data platforms, and practical AI automation to help organizations scale faster with less friction.
              </motion.p>

              {/* 4. Primary and Secondary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26, ease: EASING }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-0.5 sm:pt-1"
              >
                <a
                  href="#leadership-team"
                  className="h-11 sm:h-12 px-6 sm:px-7 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-base shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group text-center"
                >
                  <span>Meet Our Leaders</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#capabilities"
                  className="h-11 sm:h-12 px-5 sm:px-7 rounded-full bg-[#111111] hover:bg-[#181818] text-white font-bold text-xs sm:text-base border border-[#262626] hover:border-[#00BCD4]/50 flex items-center justify-center transition-all text-center"
                >
                  <span>Explore Capabilities</span>
                </a>
              </motion.div>

              {/* 5. Mobile Technology-Team Photograph */}
              <div className="block lg:hidden pt-1 pb-1">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-neutral-800">
                  <img
                    src="/images/about/hero-team.jpg"
                    alt="CodePlaced technology professionals and engineers collaborating on scalable digital solutions"
                    className="w-full h-[180px] xs:h-[210px] sm:h-[260px] object-cover object-[center_28%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* 6. Four Statistics (Compact 2x2 grid on mobile, 4 cols on desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34, ease: EASING }}
                className="pt-4 sm:pt-7 border-t border-[#222222] grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-6"
              >
                {COMPANY_STATS.map((stat, sIdx) => (
                  <div key={sIdx} className="p-2.5 sm:p-0 rounded-lg bg-[#111111]/60 sm:bg-transparent border border-[#222222]/50 sm:border-0 space-y-0.5 sm:space-y-1">
                    <div className="text-xl sm:text-3xl font-black text-[#00BCD4] sm:text-white font-mono tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-neutral-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Desktop Right Side: 5. Large Editorial Team Photograph (~45% / 5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASING }}
              className="hidden lg:flex lg:col-span-5 relative items-center justify-end"
            >
              <div className="relative w-full max-w-[560px] xl:max-w-[600px] rounded-2xl xl:rounded-3xl overflow-hidden group">
                <img
                  src="/images/about/hero-team.jpg"
                  alt="CodePlaced technology professionals and engineers collaborating on scalable digital solutions"
                  className="w-full h-[470px] xl:h-[510px] object-cover object-[center_30%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Soft Edge Blends */}
                <div className="absolute inset-y-0 left-0 w-28 xl:w-36 bg-gradient-to-r from-[#000000] via-[#000000]/50 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-16 xl:h-20 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#000000]/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. OUR STORY — RESPONSIVE EDITORIAL LAYOUT (WHITE #FFFFFF) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-start max-w-5xl mx-auto">
            
            {/* Left Column (~45%): Editorial Hook */}
            <div className="lg:col-span-5 space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
                OUR STORY
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-neutral-900 leading-tight">
                Great Solutions Start With Understanding the Problem.
              </h2>
              <p className="text-xs sm:text-base text-neutral-600 leading-relaxed font-normal">
                A modern technology consultancy built on business clarity, engineering discipline, and compounding long-term impact.
              </p>
            </div>

            {/* Right Column (~55%): The Narrative with Responsive Accent */}
            <div className="lg:col-span-7 border-t-2 lg:border-t-0 lg:border-l-2 border-[#00BCD4] pt-3.5 lg:pt-0 pl-0 lg:pl-7 space-y-2.5 sm:space-y-3.5 text-neutral-700 text-xs sm:text-base leading-relaxed font-normal">
              <p className="font-semibold text-neutral-900">
                CodePlaced is built around a simple belief: technology should solve meaningful business problems.
              </p>
              <p>
                Businesses often deal with disconnected systems, repetitive processes, scattered data, or ideas that need the right technical direction.
              </p>
              <p>
                We bring together development, analytics, and AI capabilities to understand these challenges and build solutions that make everyday operations simpler, more connected, and more effective.
              </p>
              <p className="text-neutral-900 font-medium">
                Our approach begins with listening, understanding the business, and choosing technology that fits the problem.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. MISSION & VISION — PREMIUM DARK PANELS (PURE BLACK #000000) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center space-y-1.5 sm:space-y-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              PURPOSE & DIRECTION
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-white leading-tight">
              Mission & Vision
            </h2>
            <p className="text-xs sm:text-base text-neutral-400 leading-relaxed font-normal">
              The fundamental objectives that shape our engineering decisions and client relationships.
            </p>
          </div>

          {/* Two Charcoal Panels (Stacked on mobile, side-by-side on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
            {/* Panel 1: Mission */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-7 bg-[#101214] border border-[#222222] shadow-xl flex flex-col justify-between space-y-3 sm:space-y-4 hover:border-[#00BCD4]/40 transition-all duration-300">
              <div className="space-y-2 sm:space-y-3">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-[#00BCD4]/10 text-[#00BCD4] border border-[#00BCD4]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                  <span>OUR MISSION</span>
                </div>
                <h3 className="text-sm sm:text-xl lg:text-[22px] font-black text-white leading-snug tracking-tight">
                  “To help businesses solve practical challenges through thoughtful technology, connected data, and intelligent automation.”
                </h3>
              </div>
              <p className="text-[11px] sm:text-sm text-neutral-400 leading-relaxed border-t border-[#1C1F22] pt-2.5 sm:pt-3.5">
                We measure our success not by code volume, but by measurable efficiency gained, manual bottlenecks removed, and revenue unlocked.
              </p>
            </div>

            {/* Panel 2: Vision */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-7 bg-[#101214] border border-[#222222] shadow-xl flex flex-col justify-between space-y-3 sm:space-y-4 hover:border-[#00BCD4]/40 transition-all duration-300">
              <div className="space-y-2 sm:space-y-3">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-[#00BCD4]/10 text-[#00BCD4] border border-[#00BCD4]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                  <span>OUR VISION</span>
                </div>
                <h3 className="text-sm sm:text-xl lg:text-[22px] font-black text-white leading-snug tracking-tight">
                  “To make useful, scalable technology more accessible to businesses, helping them operate smarter and grow with confidence.”
                </h3>
              </div>
              <p className="text-[11px] sm:text-sm text-neutral-400 leading-relaxed border-t border-[#1C1F22] pt-2.5 sm:pt-3.5">
                We envision a future where modern software, data lakes, and AI automation are accessible and reliable for ambitious organizations worldwide.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. CORE PRINCIPLES — COMPACT 2-COLUMN GRID (WHITE #FFFFFF) */}
      {/* ========================================================================= */}
      <section id="why-choose-us" className="scroll-mt-20 py-10 sm:py-14 lg:py-16 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center space-y-1.5 sm:space-y-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              CORE PRINCIPLES
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              The Principles Behind Every Project
            </h2>
            <p className="text-xs sm:text-base text-neutral-600 leading-relaxed font-normal">
              The standards, values, and engineering discipline that guide our client partnerships.
            </p>
          </div>

          {/* MOBILE VIEW (md:hidden): Compact 2-Column Grid */}
          <div className="grid grid-cols-2 md:hidden gap-2.5">
            {COMPANY_PRINCIPLES.map((principle) => (
              <div
                key={principle.num}
                className="p-3 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] space-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-mono text-xs font-black text-[#00BCD4]">
                      {principle.num}
                    </span>
                    <span className="text-neutral-300 font-mono text-[10px]">—</span>
                    <h3 className="text-xs font-bold text-neutral-900 tracking-tight truncate">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-[10px] text-neutral-600 leading-snug line-clamp-3">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP VIEW (hidden md:grid): Editorial Numbered Rows (2 cols on md+) */}
          <div className="hidden md:grid md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-6 max-w-5xl mx-auto">
            {COMPANY_PRINCIPLES.map((principle) => (
              <div
                key={principle.num}
                className="pt-4 border-t border-[#E5E7EB] space-y-2 group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-black text-[#00BCD4]">
                    {principle.num}
                  </span>
                  <span className="text-neutral-300 font-mono text-xs">—</span>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#00838F] transition-colors tracking-tight">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal pl-8">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. MEET OUR LEADERSHIP — COMPACT ON MOBILE, SPACIOUS ON DESKTOP (#FFFFFF) */}
      {/* ========================================================================= */}
      <section id="leadership-team" className="scroll-mt-20 py-10 sm:py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10 lg:space-y-12">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center space-y-1.5 sm:space-y-2.5">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              EXECUTIVE LEADERSHIP
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[42px] font-black tracking-tight text-neutral-900 leading-tight">
              The People Leading CodePlaced.
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-normal">
              Built by experienced professionals focused on technology, analytics, innovation, and business growth.
            </p>
          </div>

          {/* 2-Column Executive Profile Cards (Compact on mobile, 2 cols on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
            {LEADERSHIP_TEAM.map((founder, fIdx) => (
              <div
                key={fIdx}
                className="rounded-xl sm:rounded-2xl bg-white border border-[#E5E7EB] shadow-xs hover:shadow-xl hover:border-[#00BCD4]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Portrait Container - Compact on mobile without face distortion */}
                  <div className="relative w-full h-[220px] xs:h-[260px] sm:h-[340px] md:h-[400px] lg:h-[440px] bg-[#F4F5F7] overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className={`w-full h-full object-cover ${founder.imagePosition || "object-top"} group-hover:scale-[1.02] transition-transform duration-500 ease-out`}
                    />
                  </div>

                  {/* Card Content & Bio */}
                  <div className="p-4 sm:p-7 space-y-3 sm:space-y-4">
                    {/* Role & Name */}
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-[#E0F7FA] text-[#00838F] border border-[#00BCD4]/25">
                        {founder.role}
                      </span>
                      <h3 className="text-xl sm:text-[26px] font-black text-neutral-900 tracking-tight">
                        {founder.name}
                      </h3>
                    </div>

                    {/* Bio */}
                    <p className="text-xs sm:text-[15px] text-neutral-600 leading-relaxed font-normal">
                      {founder.bio}
                    </p>

                    {/* Core Expertise Tags */}
                    <div className="space-y-1.5 pt-0.5 sm:pt-1">
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                        Core Expertise
                      </span>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {founder.expertise.map((exp, eIdx) => (
                          <span
                            key={eIdx}
                            className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] text-[11px] sm:text-xs font-medium text-neutral-700"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Connection CTA */}
                <div className="p-4 sm:p-7 pt-0">
                  <div className="pt-3 sm:pt-4 border-t border-[#E5E7EB]">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 sm:h-12 w-full rounded-xl bg-[#050505] hover:bg-[#00BCD4] hover:text-black text-white font-bold text-xs sm:text-sm border border-neutral-800 hover:border-[#00BCD4] flex items-center justify-center gap-2 shadow-xs transition-all duration-200 active:scale-98 group/btn cursor-pointer"
                      aria-label={`${founder.ctaText} on LinkedIn (opens in new tab)`}
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                      </svg>
                      <span>{founder.ctaText}</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. HOW WE WORK TOGETHER — 2x2 MOBILE GRID, 4 COLS DESKTOP (PURE BLACK) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center space-y-1.5 sm:space-y-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              OUR APPROACH
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-white leading-tight">
              Different Expertise. One Shared Goal.
            </h2>
            <p className="text-xs sm:text-base text-neutral-400 leading-relaxed font-normal">
              Every project brings together the right mix of business understanding, technical expertise, and collaboration.
            </p>
          </div>

          {/* 4-Stage 2x2 Grid on Mobile, 4 cols on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 max-w-6xl mx-auto">
            {HOW_WE_WORK_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0B0B0B] border border-[#222222] hover:border-[#00BCD4]/50 transition-all duration-300 flex flex-col justify-between space-y-2 sm:space-y-4 group"
              >
                <div className="space-y-1.5 sm:space-y-3">
                  <div className="flex items-center justify-between border-b border-[#1E1E1E] pb-1.5 sm:pb-2.5">
                    <span className="text-xl sm:text-2xl font-black font-mono text-[#00BCD4]">
                      {step.num}
                    </span>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00BCD4]/40 group-hover:bg-[#00BCD4] transition-colors" />
                  </div>
                  <h3 className="text-xs sm:text-lg font-bold text-white tracking-tight">
                    {step.phase}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-neutral-400 leading-snug font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07. MEET OUR TEAM — COMPACT 2-COLUMN GRID ON MOBILE (LIGHT GRAY #F4F5F7) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F4F5F7] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center space-y-1.5 sm:space-y-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              THE TEAM
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              Meet Our Team
            </h2>
            <p className="text-xs sm:text-base text-neutral-600 leading-relaxed font-normal">
              A multidisciplinary squad of analysts, growth specialists, and engineers powering enterprise execution.
            </p>
          </div>

          {/* Compact 2-column Grid on Mobile, Flex on Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-2.5 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
            {ENGINEERING_TEAM.map((member) => (
              <div
                key={member.name}
                className="w-full lg:w-[calc(33.333%-16px)] rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center bg-white border border-[#E5E7EB] shadow-2xs hover:border-[#00BCD4]/50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center group"
              >
                {/* Circular Profile Image with Neutral Studio Background */}
                <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden ring-2 sm:ring-4 ring-[#00BCD4]/20 group-hover:ring-[#00BCD4]/50 shadow-xs transition-all duration-300 bg-neutral-100 mx-auto flex-shrink-0 relative mb-2 sm:mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.imagePosition || "object-top"} group-hover:scale-105 transition-transform duration-500 ease-out`}
                  />
                </div>

                {/* Name & Role */}
                <div className="space-y-0.5 w-full">
                  <h3 className="text-xs sm:text-base font-bold text-neutral-900 group-hover:text-[#00838F] transition-colors leading-tight line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-[10px] sm:text-sm font-semibold text-[#00838F] leading-tight line-clamp-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08. CAPABILITIES — COMPACT 2-COLUMN GRID (PURE BLACK #000000) */}
      {/* ========================================================================= */}
      <section id="capabilities" className="scroll-mt-20 py-10 sm:py-14 lg:py-16 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-1.5 sm:space-y-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              OUR EXPERTISE
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-white leading-tight">
              Different Capabilities. One Connected Approach.
            </h2>
            <p className="text-xs sm:text-base text-neutral-400 leading-relaxed font-normal max-w-2xl mx-auto">
              From building digital products to connecting data and automating workflows, our teams bring the right capabilities together to solve business challenges.
            </p>
          </div>

          {/* 4 Capabilities Grid (2 cols on mobile, 4 cols with vertical dividers on desktop) */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-[#222222]">
            {CAPABILITIES.map((cap) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={cap.num}
                  className="p-3.5 sm:p-5 lg:p-0 rounded-xl sm:rounded-2xl lg:rounded-none bg-[#0B0B0B] lg:bg-transparent border border-[#222222] lg:border-0 flex flex-col justify-between space-y-2.5 sm:space-y-4 lg:px-6 first:pl-0 last:pr-0 group"
                >
                  <div className="space-y-2 sm:space-y-3.5">
                    {/* Top Row: Cyan Number & Minimal Line Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xl sm:text-3xl font-black text-[#00BCD4] tracking-tight">
                        {cap.num}
                      </span>
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#00BCD4] group-hover:border-[#00BCD4]/50 transition-all">
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00BCD4]" />
                      </div>
                    </div>

                    {/* Capability Heading */}
                    <h3 className="text-xs sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#00BCD4] transition-colors">
                      {cap.title}
                    </h3>

                    {/* Muted Description */}
                    <p className="text-[10px] sm:text-sm text-neutral-400 leading-snug sm:leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action CTA */}
          <div className="text-center pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#111111] hover:bg-[#181818] text-white font-bold text-xs sm:text-sm border border-[#262626] hover:border-[#00BCD4]/60 transition-all duration-200 group shadow-xs"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00BCD4] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09. FAQ — MOBILE-FRIENDLY ACCORDION (PURE WHITE #FFFFFF) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-1.5 sm:space-y-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              Questions About Working With Us
            </h2>
            <p className="text-xs sm:text-base text-neutral-600 leading-relaxed font-normal">
              Clear answers on how we partner, scope, build, and support enterprise systems.
            </p>
          </div>

          {/* Compact Accordion List with comfortable tap targets */}
          <div className="space-y-2.5 sm:space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl sm:rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden transition-all duration-200 hover:border-[#00BCD4]/40 shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-base font-bold text-neutral-900 pr-2">
                      {item.q}
                    </span>
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#00BCD4] text-black" : "bg-[#F7F9FA] text-neutral-500 border border-[#E5E7EB]"
                      }`}
                    >
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASING }}
                        className="overflow-hidden"
                      >
                        <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 pt-0 text-[11px] sm:text-sm text-neutral-600 leading-relaxed border-t border-[#F0F2F5]">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FINAL CTA — RESPONSIVE PREMIUM CARD (PURE BLACK #000000) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#000000] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1240px] mx-auto rounded-2xl sm:rounded-3xl bg-[#0B0B0B] border border-[#222222] p-5 sm:p-10 lg:p-14 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Subtle Cyan Cyber Grid Accent */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 188, 212, 0.2) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 188, 212, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: "36px 36px",
              }}
            />

            <div className="max-w-2xl mx-auto relative z-10 space-y-3.5 sm:space-y-5">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#00BCD4]" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-[44px] font-black tracking-tight leading-[1.12] text-white">
                Have a Business Challenge?{" "}
                <span className="text-[#00BCD4]">
                  Let&apos;s Find the Right Solution.
                </span>
              </h2>

              <p className="text-xs sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed font-normal">
                Tell us what you&apos;re building or what isn&apos;t working. We&apos;ll explore how the right technology can help.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
                <Link
                  href="/contact#contact-hero"
                  className="w-full sm:w-auto h-11 sm:h-12 px-7 sm:px-8 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-base shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group"
                >
                  <span>Send an Inquiry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto h-11 sm:h-12 px-7 sm:px-8 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-base border border-neutral-700 flex items-center justify-center transition-all"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
