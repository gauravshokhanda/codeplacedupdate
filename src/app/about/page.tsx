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
  Search,
  Palette,
  Rocket,
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

const WHY_WORK_WITH_US = [
  {
    title: "Data & AI Expertise",
    desc: "Specialized architects who turn complex unstructured data into deterministic intelligence and real-time decision engines.",
    icon: Database,
    badge: "Specialized Pods",
  },
  {
    title: "Cloud Native Architecture",
    desc: "Engineered on AWS, Azure, and GCP with automated autoscaling, infrastructure as code, and zero single points of failure.",
    icon: Cloud,
    badge: "99.99% Uptime",
  },
  {
    title: "Fast Delivery Cycles",
    desc: "Agile sprints and battle-tested blueprints that deploy working, audited production systems in 2–4 weeks rather than months.",
    icon: Zap,
    badge: "2–4 Weeks",
  },
  {
    title: "Enterprise Security",
    desc: "Bilateral NDAs upfront, SOC2 Type II alignment, HIPAA compliance, row-level security, and cryptographic audit logging.",
    icon: ShieldCheck,
    badge: "SOC2 & HIPAA",
  },
  {
    title: "Business Focused Solutions",
    desc: "Every line of code and dashboard metric is engineered to unlock measurable revenue, eliminate manual waste, and prove ROI.",
    icon: TrendingUp,
    badge: "Outcome Driven",
  },
  {
    title: "Long-Term Partnership",
    desc: "We build enduring relationships with flexible SLA maintenance, dedicated support pods, and continuous feature scaling.",
    icon: Users,
    badge: "24/7 SLA Options",
  },
];

const LEADERSHIP_TEAM = [
  {
    name: "Maanya Tyagi",
    role: "Founder & CEO",
    bio: "Maanya leads analytics, AI initiatives, and business intelligence solutions at CodePlaced. She specializes in transforming complex datasets into actionable insights that help organizations make better decisions, streamline operations, and unlock scalable revenue growth.",
    image: "/team/Manya.png",
    imagePosition: "object-top sm:object-center",
    expertise: [
      "AI Strategy",
      "Product Innovation",
      "Business Growth",
      "Digital Transformation",
    ],
    ctaText: "Connect With Maanya",
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
    role: "Data Analyst Intern",
    image: "/team/team-7.jpg",
  },
  {
    name: "Naman",
    role: "Data Analyst Intern",
    image: "/team/team-5.jpg",
  },
  {
    name: "Kashish",
    role: "Data Analyst Intern",
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

const DELIVERY_METHODOLOGY = [
  {
    step: "01",
    title: "Discovery",
    desc: "Technical requirements gathering, data audits, system mapping & milestone roadmap alignment.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy",
    desc: "System blueprints, data schemas, cloud sizing, security protocols & SLA definitions.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Design",
    desc: "Interactive UI/UX prototypes, data visual flows & customer journey validation.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Development",
    desc: "Rapid agile sprints led by senior developers with clean code commits & weekly live demos.",
    icon: Cpu,
  },
  {
    step: "05",
    title: "Testing",
    desc: "Automated QA validation, security penetration testing, load benchmarks & evaluation gates.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch",
    desc: "Zero-downtime production deployment, private repo transfer & continuous telemetry.",
    icon: Rocket,
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

// =========================================================================
// EASING & MOTION CONFIGURATION
// =========================================================================
const EASING = [0.22, 1, 0.36, 1] as const;

const teamGridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const teamMemberVariant = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EASING,
    },
  },
};

// =========================================================================
// MAIN ABOUT PAGE COMPONENT
// =========================================================================

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div
      style={{
        background: `
          radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.12) 0%, transparent 45%),
          radial-gradient(circle at 90% 35%, rgba(16, 185, 129, 0.07) 0%, transparent 35%),
          radial-gradient(circle at 10% 65%, rgba(14, 165, 233, 0.09) 0%, transparent 40%),
          radial-gradient(circle at 50% 95%, rgba(15, 76, 129, 0.06) 0%, transparent 40%),
          linear-gradient(180deg, #f8fcff 0%, #f2f9fd 30%, #edf7fb 70%, #f5fbff 100%)
        `,
      }}
      className="text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white font-sans relative min-h-screen"
    >
      {/* ========================================================================= */}
      {/* SECTION 1 — HERO SECTION (Clean, Minimal & Animated AI Constellation) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Large Blurred Radial Glass Orb Behind Headline */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0"
          style={{
            width: "650px",
            height: "650px",
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(0, 183, 194, 0.08) 45%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Dynamic Animated AI Constellation & Neural Network Graph */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-65" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aiConstellationGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b7c2" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="aiConstellationGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#0f4c81" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Neural Graph Network Links */}
            <line x1="50%" y1="42%" x2="32%" y2="28%" stroke="url(#aiConstellationGrad1)" strokeWidth="1.4" strokeDasharray="6 4" />
            <line x1="50%" y1="42%" x2="68%" y2="28%" stroke="url(#aiConstellationGrad2)" strokeWidth="1.4" strokeDasharray="6 4" />
            <line x1="50%" y1="42%" x2="25%" y2="55%" stroke="url(#aiConstellationGrad1)" strokeWidth="1.4" />
            <line x1="50%" y1="42%" x2="75%" y2="55%" stroke="url(#aiConstellationGrad2)" strokeWidth="1.4" />
            <line x1="50%" y1="42%" x2="50%" y2="68%" stroke="url(#aiConstellationGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Cross Outer Links */}
            <line x1="32%" y1="28%" x2="18%" y2="35%" stroke="url(#aiConstellationGrad1)" strokeWidth="1.2" strokeDasharray="4 4" />
            <line x1="68%" y1="28%" x2="82%" y2="35%" stroke="url(#aiConstellationGrad2)" strokeWidth="1.2" strokeDasharray="4 4" />
            <line x1="25%" y1="55%" x2="35%" y2="75%" stroke="url(#aiConstellationGrad1)" strokeWidth="1.2" strokeDasharray="6 4" />
            <line x1="75%" y1="55%" x2="65%" y2="75%" stroke="url(#aiConstellationGrad2)" strokeWidth="1.2" strokeDasharray="6 4" />
            <line x1="35%" y1="75%" x2="50%" y2="68%" stroke="url(#aiConstellationGrad1)" strokeWidth="1.2" />
            <line x1="65%" y1="75%" x2="50%" y2="68%" stroke="url(#aiConstellationGrad2)" strokeWidth="1.2" />

            {/* Neural Nodes (SVG Circles with Glowing Halo) */}
            <circle cx="50%" cy="42%" r="6" fill="#00b7c2" fillOpacity="0.85" />
            <circle cx="50%" cy="42%" r="14" fill="#00b7c2" fillOpacity="0.15" />

            <circle cx="32%" cy="28%" r="4.5" fill="#0284c7" fillOpacity="0.8" />
            <circle cx="68%" cy="28%" r="4.5" fill="#00b7c2" fillOpacity="0.8" />
            <circle cx="25%" cy="55%" r="4" fill="#38bdf8" fillOpacity="0.75" />
            <circle cx="75%" cy="55%" r="4" fill="#0f4c81" fillOpacity="0.75" />
            <circle cx="50%" cy="68%" r="5" fill="#00b7c2" fillOpacity="0.8" />
            <circle cx="18%" cy="35%" r="3.5" fill="#0284c7" fillOpacity="0.6" />
            <circle cx="82%" cy="35%" r="3.5" fill="#38bdf8" fillOpacity="0.6" />
            <circle cx="35%" cy="75%" r="3.5" fill="#00b7c2" fillOpacity="0.6" />
            <circle cx="65%" cy="75%" r="3.5" fill="#0f4c81" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Centered Hero Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASING }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#0f4c81] border border-[#00b7c2]/30 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
            <span>AI • DATA • DIGITAL ENGINEERING</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASING }}
            className="text-[38px] sm:text-[54px] lg:text-[66px] font-black leading-[1.06] tracking-[-0.035em] text-[#082F49] [text-wrap:balance]"
          >
            The Team Behind Scalable{" "}
            <span
              className="bg-clip-text text-transparent font-black inline-block"
              style={{
                backgroundImage: "linear-gradient(90deg, #0f4c81 0%, #00b7c2 50%, #0284c7 100%)",
              }}
            >
              Data, AI & Digital Products
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASING }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            CodePlaced brings together engineers, architects, AI specialists and product leaders who build secure, scalable digital ecosystems that drive measurable business impact.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASING }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1"
          >
            <a
              href="#leadership-team"
              className="w-full sm:w-auto h-[48px] px-8 rounded-full bg-[#082F49] hover:bg-[#0f4c81] text-white font-extrabold text-[14px] sm:text-[15px] shadow-lg shadow-[#082F49]/15 flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 group"
            >
              <span>Meet Our Leaders</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#why-choose-us"
              className="w-full sm:w-auto h-[48px] px-8 rounded-full bg-white/90 hover:bg-white text-[#082F49] font-bold text-[14px] sm:text-[15px] border border-sky-200/80 shadow-xs flex items-center justify-center transition-all duration-300"
            >
              <span>Explore Our Story</span>
            </a>
          </motion.div>

          {/* Centered Trust Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASING }}
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
      {/* SECTION 2 — WHY BUSINESSES CHOOSE CODEPLACED (2-Cols Mobile & Tablet, 3-Cols Desktop) */}
      {/* ========================================================================= */}
      <section id="why-choose-us" className="py-14 sm:py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASING }}
            className="max-w-[800px] mx-auto text-center mb-10 sm:mb-12 space-y-2.5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>THE CODEPLACED ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#082F49]">
              Why Businesses Choose CodePlaced
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-[680px] mx-auto font-normal">
              We replace junior-heavy agency models with senior engineering velocity, transparent communication, and guaranteed delivery.
            </p>
          </motion.div>

          {/* 6 Feature Cards: 2 cols mobile, 2 cols tablet, 3 cols desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {WHY_WORK_WITH_US.map((item, idx) => {
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
                    <span className="truncate">Guaranteed Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — LEADERSHIP SECTION (Executive Profiles — Premium Glass Gradient) */}
      {/* ========================================================================= */}
      <section id="leadership-team" className="py-14 sm:py-16 lg:py-24 overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASING }}
            className="max-w-[850px] mx-auto text-center mb-10 sm:mb-14 space-y-2.5 sm:space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
              <Users className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>EXECUTIVE LEADERSHIP</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#082F49]">
              Meet The Leaders Behind CodePlaced
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-[740px] mx-auto font-normal">
              Built by experienced technology leaders focused on scalable software, AI innovation, and business growth.
            </p>
          </motion.div>

          {/* 2-Column Executive Profile Panels (Stacked on Mobile, 2 Cols on Tablet & Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
            {LEADERSHIP_TEAM.map((founder, fIdx) => (
              <motion.div
                key={fIdx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.95, delay: fIdx * 0.12, ease: EASING }}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(235, 248, 255, 0.85) 100%)",
                  border: "1px solid rgba(14, 165, 233, 0.2)",
                  boxShadow: "0 20px 60px rgba(2, 132, 199, 0.08)",
                }}
                className="rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-8 hover:shadow-[0_30px_80px_rgba(2,132,199,0.16)] hover:border-[#00b7c2]/60 hover:-translate-y-2 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between group"
              >
                <div className="space-y-4 sm:space-y-5">
                  {/* Full Color Portrait (Responsive height: 230px mobile, 320px tablet, 420px desktop) */}
                  <div className="relative h-[230px] sm:h-[320px] lg:h-[420px] w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-slate-900 shadow-md">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      style={{ filter: "none" }}
                      className={`w-full h-full object-cover ${founder.imagePosition || "object-top sm:object-center"} group-hover:scale-[1.03] transition-transform duration-700 ease-out`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#042841]/95 via-[#042841]/50 to-transparent" />
                    
                    {/* Floating Info on Bottom of Image */}
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 sm:bottom-4 sm:left-5 sm:right-5 text-white space-y-0.5 sm:space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-[#00b7c2]/35 backdrop-blur-md text-cyan-200 border border-[#00b7c2]/40">
                        {founder.role}
                      </span>
                      <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                        {founder.name}
                      </h3>
                    </div>
                  </div>

                  {/* Leadership Summary Bio */}
                  <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed font-normal">
                    {founder.bio}
                  </p>

                  {/* Strategic Focus Tags */}
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

                {/* Bottom LinkedIn CTA Action (Opens in new tab) */}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — ENGINEERING TEAM SECTION (3 Cols Desktop, 2 Cols Tablet & Mobile) */}
      {/* ========================================================================= */}
      <section className="py-14 lg:py-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASING }}
            className="max-w-[800px] mx-auto text-center mb-10 space-y-2.5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
              <Users className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>CORE SPECIALISTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#082F49]">
              Meet Our Engineering Team
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-[680px] mx-auto font-normal">
              A multidisciplinary squad of analysts, growth specialists, and engineers powering enterprise execution.
            </p>
          </motion.div>

          {/* Grid Layout: 3 cards per row on Desktop (lg:grid-cols-3) / 2 cards on Tablet & Mobile (grid-cols-2) */}
          <motion.div
            variants={teamGridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mt-6"
          >
            {ENGINEERING_TEAM.map((member, idx) => (
              <motion.div
                key={idx}
                variants={teamMemberVariant}
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

                {/* Name & Role (Only) */}
                <div className="space-y-1 w-full">
                  <h3 className="text-sm sm:text-base font-black text-[#082F49] group-hover:text-[#0f4c81] transition-colors duration-300 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#00b7c2] leading-snug">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — HOW WE DELIVER SUCCESSFUL DIGITAL PRODUCTS (6-Step Timeline) */}
      {/* ========================================================================= */}
      <section id="delivery-process" className="py-14 lg:py-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[800px] mx-auto text-center mb-12 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>THE ENGINEERING BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#082F49]">
              How We Deliver Successful Digital Products
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-[680px] mx-auto font-normal">
              A disciplined, milestone-driven 6-step engineering methodology that guarantees reliable code and fixed timelines.
            </p>
          </div>

          {/* 6-Step Compact Horizontal Timeline Grid (Single row on desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {DELIVERY_METHODOLOGY.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(244, 251, 255, 0.8))",
                    boxShadow: "0 8px 24px rgba(2, 132, 199, 0.04)",
                  }}
                  className="rounded-[22px] p-4 sm:p-5 border border-sky-100 hover:border-[#00b7c2]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black text-[#00b7c2] tracking-wider">
                        {step.step}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-[#ECFEFF] flex items-center justify-center text-[#0f4c81]">
                        <StepIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-sm font-extrabold text-[#082F49] mb-1">
                      {step.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-sky-100 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Verified Gate</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 — ENTERPRISE FAQ (Transparent Background, White Cards) */}
      {/* ========================================================================= */}
      <section className="py-14 lg:py-20 bg-transparent">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASING }}
            className="text-center mb-10 space-y-2.5"
          >
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
          </motion.div>

          {/* Accordion List (White Cards, Sky Border, Subtle Shadow) */}
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
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
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

      {/* ========================================================================= */}
      {/* SECTION 7 — COMPACT CTA STRIP (Clean & Streamlined, Seamless) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-[#082F49] tracking-tight">
            Ready to build with CodePlaced?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Explore our engineering capabilities or connect directly with our technical leadership.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#leadership-team"
              className="w-full sm:w-auto h-[44px] px-6 rounded-full bg-[#082F49] hover:bg-[#0f4c81] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-[#082F49]/15 flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Meet Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/services"
              className="w-full sm:w-auto h-[44px] px-6 rounded-full bg-white hover:bg-slate-50 text-[#082F49] font-bold text-xs sm:text-sm border border-sky-200 transition-all duration-300 flex items-center justify-center shadow-xs"
            >
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
