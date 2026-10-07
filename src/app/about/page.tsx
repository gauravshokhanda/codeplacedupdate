"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  Database,
  CheckCircle2,
  Cpu,
  Cloud,
  ChevronDown,
  Compass,
  HelpCircle,
} from "lucide-react";

// =========================================================================
// DATA STRUCTURES
// =========================================================================

const COMPANY_STATS = [
  { value: "250+", label: "Projects Delivered" },
  { value: "20+", label: "Industries Served" },
  { value: "99.9%", label: "Platform Reliability" },
  { value: "Global", label: "Delivery Team" },
];

const COMPANY_PRINCIPLES = [
  {
    title: "Ownership",
    desc: "We take complete end-to-end accountability for project success, treating every system as if it were our own business.",
    icon: ShieldCheck,
    badge: "Accountability",
  },
  {
    title: "Transparency",
    desc: "Clear sprint milestones, open progress visibility, and honest communication with no hidden surprises.",
    icon: Users,
    badge: "Open Comms",
  },
  {
    title: "Innovation",
    desc: "Engineering modern, future-proof architectures and AI solutions that create a genuine competitive moat.",
    icon: Zap,
    badge: "Forward Thinking",
  },
  {
    title: "Quality",
    desc: "Enterprise-grade code quality, robust security testing, and reliable performance across every release.",
    icon: Cpu,
    badge: "High Standard",
  },
  {
    title: "Collaboration",
    desc: "Partnering directly with your leadership and engineering pods as a cohesive, high-velocity team.",
    icon: Compass,
    badge: "True Extension",
  },
  {
    title: "Long-Term Partnerships",
    desc: "We focus on sustainable architectures, continuous improvements, and compounding long-term value.",
    icon: TrendingUp,
    badge: "Sustainable ROI",
  },
];

const LEADERSHIP_TEAM = [
  {
    name: "Manya Tyagi",
    role: "Founder & CEO",
    bio: "Manya leads business intelligence, analytics, AI initiatives, and growth strategies at CodePlaced. She specializes in turning complex datasets into actionable insights that help organizations make smarter decisions, streamline operations, and unlock scalable revenue growth.",
    image: "/team/Manya.png",
    imagePosition: "object-top sm:object-center",
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
    role: "Co-Founder & CTO",
    bio: "Gaurav oversees technology strategy, software architecture, cloud infrastructure, and product engineering at CodePlaced. He helps businesses build scalable, cloud-native systems and AI automation workflows that support long-term enterprise growth.",
    image: "/team/gaurav.jpg",
    imagePosition: "object-[center_20%] sm:object-[center_25%] md:object-center scale-105 sm:scale-100",
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

const ENGINEERING_TEAM = [
  {
    name: "Ankit",
    role: "Data Analyst Manager",
    image: "/team/team-2.jpg",
  },
  {
    name: "Prajjwal Kumar Rathi",
    role: "Data Analyst",
    image: "/team/team-7.jpg",
  },
  {
    name: "Naman",
    role: "Data Analyst",
    image: "/team/team-5.jpg",
  },
  {
    name: "Kashish",
    role: "Data Analyst",
    image: "/team/team-4.jpg",
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
];

const FAQ_ITEMS = [
  {
    q: "What industries does CodePlaced work with?",
    a: "We partner with Healthcare, Financial Services, SaaS, Retail, Education, Logistics, and Manufacturing enterprises. Our engineering pods tailor each architecture to industry-specific compliance requirements like HIPAA, SOC2, and GDPR.",
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
    <div
      style={{
        background: "linear-gradient(180deg, #f8fcff 0%, #edf7fb 40%, #eaf5f9 100%)",
      }}
      className="text-[#0F172A] selection:bg-[#0f4c81] selection:text-white font-sans relative min-h-screen"
    >
      {/* ========================================================================= */}
      {/* SECTION 1 — HERO SECTION (Clean, Minimal & Editorial) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[82vh] lg:min-h-[88vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
        {/* Soft Radial Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0"
          style={{
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(18, 207, 208, 0.16) 0%, rgba(15, 79, 108, 0.08) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Subtle Light Moving Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
          <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#00b7c2] animate-ping" />
          <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-[#0f4c81] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 rounded-full bg-[#38bdf8] animate-bounce" />
        </div>

        {/* Centered Hero Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASING }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#0f4c81] border border-[#00b7c2]/30 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
            <span>THE CODEPLACED TEAM</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASING }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#082F49] [text-wrap:balance]"
          >
            The Team Behind Scalable{" "}
            <span
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: "linear-gradient(90deg, #0f4c81 0%, #00b7c2 50%, #0284c7 100%)",
              }}
            >
              Data, AI & Digital Products
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASING }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            A multidisciplinary team of developers, analysts, marketers, and business leaders helping organizations build, optimize, and scale through technology.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASING }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1"
          >
            <a
              href="#leadership-team"
              className="w-full sm:w-auto h-[48px] px-8 rounded-full bg-[#082F49] hover:bg-[#0f4c81] text-white font-extrabold text-sm shadow-lg shadow-[#082F49]/15 flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 group"
            >
              <span>Meet Our Leaders</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#why-choose-us"
              className="w-full sm:w-auto h-[48px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#082F49] font-bold text-sm border border-sky-200/80 shadow-xs flex items-center justify-center transition-all duration-300"
            >
              <span>Explore Our Principles</span>
            </a>
          </motion.div>

          {/* Trust Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASING }}
            className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-center"
          >
            {COMPANY_STATS.map((stat, sIdx) => (
              <div key={sIdx} className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-black text-[#0f4c81] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — PRINCIPLES (No Divider Lines, Natural Spacing) */}
      {/* ========================================================================= */}
      <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[800px] mx-auto text-center mb-10 sm:mb-12 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>CORE PRINCIPLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#082F49]">
              The Principles Behind Every Project
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-[680px] mx-auto font-normal">
              The standards, values, and engineering discipline that guide our client partnerships and ensure long-term success.
            </p>
          </div>

          {/* 6 Feature Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {COMPANY_PRINCIPLES.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(244, 251, 255, 0.85))",
                    boxShadow: "0 12px 36px rgba(2, 132, 199, 0.05)",
                  }}
                  className="rounded-[18px] sm:rounded-[24px] p-3.5 sm:p-5 lg:p-6 border border-sky-100 hover:border-[#00b7c2]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl sm:rounded-2xl bg-[#ECFEFF] text-[#0f4c81] flex items-center justify-center group-hover:bg-[#0f4c81] group-hover:text-white transition-colors duration-300 shadow-xs flex-shrink-0">
                        <ItemIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold bg-white text-slate-700 border border-sky-100 shadow-2xs">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#082F49] mb-1 sm:mb-2 group-hover:text-[#0f4c81] transition-colors duration-300 line-clamp-1 sm:line-clamp-none">
                      {item.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs lg:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-3.5 border-t border-sky-100/70 flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00b7c2] flex-shrink-0" />
                    <span className="truncate">CodePlaced Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — LEADERSHIP SECTION */}
      {/* ========================================================================= */}
      <section id="leadership-team" className="py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-[850px] mx-auto text-center mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
              <Users className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>EXECUTIVE LEADERSHIP</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#082F49]">
              Meet The Leaders Behind CodePlaced
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-[740px] mx-auto font-normal">
              Built by experienced professionals focused on technology, analytics, innovation, and business growth.
            </p>
          </div>

          {/* 2-Column Executive Profile Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
            {LEADERSHIP_TEAM.map((founder, fIdx) => (
              <div
                key={fIdx}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(235, 248, 255, 0.85) 100%)",
                  border: "1px solid rgba(14, 165, 233, 0.2)",
                  boxShadow: "0 20px 60px rgba(2, 132, 199, 0.08)",
                }}
                className="rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-8 hover:shadow-[0_30px_80px_rgba(2,132,199,0.16)] hover:border-[#00b7c2]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4 sm:space-y-5">
                  {/* Portrait */}
                  <div className="relative h-[230px] sm:h-[320px] lg:h-[420px] w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-slate-900 shadow-md">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className={`w-full h-full object-cover ${founder.imagePosition || "object-top sm:object-center"} group-hover:scale-[1.03] transition-transform duration-700 ease-out`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#042841]/95 via-[#042841]/50 to-transparent" />
                    
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 sm:bottom-4 sm:left-5 sm:right-5 text-white space-y-0.5 sm:space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-[#00b7c2]/35 backdrop-blur-md text-cyan-200 border border-[#00b7c2]/40">
                        {founder.role}
                      </span>
                      <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                        {founder.name}
                      </h3>
                    </div>
                  </div>

                  {/* Summary Bio */}
                  <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed font-normal">
                    {founder.bio}
                  </p>

                  {/* Strategic Focus */}
                  <div className="space-y-1.5 sm:space-y-2 pt-0.5">
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                      Strategic Focus
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      {founder.expertise.map((exp, eIdx) => (
                        <div
                          key={eIdx}
                          className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-xs border border-sky-100 shadow-2xs"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00b7c2] flex-shrink-0" />
                          <span className="text-[11px] sm:text-xs font-bold text-[#082F49] tracking-tight truncate">
                            {exp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Action */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-sky-100">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[44px] sm:h-[48px] w-full rounded-xl sm:rounded-2xl bg-[#082F49] hover:bg-[#0f4c81] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#082F49]/10 transition-all duration-300 active:scale-98 group/btn"
                    aria-label={`${founder.ctaText} on LinkedIn (opens in new tab)`}
                  >
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                    </svg>
                    <span>{founder.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — TEAM PROFILES */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[800px] mx-auto text-center mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
              <Users className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>THE TEAM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#082F49]">
              Meet Our Team
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-[680px] mx-auto font-normal">
              A multidisciplinary squad of analysts, growth specialists, and engineers powering enterprise execution.
            </p>
          </div>

          {/* Grid Layout: 3 cards Desktop / 2 cards Tablet & Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mt-6">
            {ENGINEERING_TEAM.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(240, 249, 255, 0.85))",
                  boxShadow: "0 10px 30px rgba(2, 132, 199, 0.05)",
                }}
                className="group rounded-[24px] p-5 sm:p-6 text-center hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] hover:border-[#00b7c2]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center border border-sky-200/70"
              >
                {/* Circular Profile Image */}
                <div className="w-[100px] h-[100px] sm:w-[115px] sm:h-[115px] rounded-full overflow-hidden ring-4 ring-[#00b7c2]/25 group-hover:ring-[#00b7c2]/60 shadow-md transition-all duration-300 bg-slate-900 mx-auto flex-shrink-0 relative mb-3.5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top sm:object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Name & Role (Professional roles only) */}
                <div className="space-y-1 w-full">
                  <h3 className="text-sm sm:text-base font-black text-[#082F49] group-hover:text-[#0f4c81] transition-colors duration-300 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#00b7c2] leading-snug">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — FAQ (Directly Above Footer, No Extraneous CTA) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-sky-200 shadow-2xs">
              <HelpCircle className="w-3 h-3 text-[#00b7c2]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#082F49]">
              Questions About Working With Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[540px] mx-auto font-normal">
              Clear answers on how we partner, scope, build, and support enterprise systems.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    boxShadow: "0 10px 30px rgba(2, 132, 199, 0.04)",
                  }}
                  className="rounded-[20px] bg-white border border-sky-200/70 overflow-hidden transition-all duration-300 hover:border-[#00b7c2]/50"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#082F49]">
                      {item.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#00b7c2] text-white" : "bg-sky-50 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
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
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-50">
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
    </div>
  );
}
