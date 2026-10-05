"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  Lock,
  Globe2,
  Star,
  Database,
  Cpu,
  Cloud,
  Code2,
  Layers,
  ChevronDown,
  Check,
  Send,
  HelpCircle,
  Briefcase,
  MapPin,
} from "lucide-react";
import confetti from "canvas-confetti";

// =========================================================================
// DATA CONSTANTS
// =========================================================================

const SERVICES_LIST = [
  "Data Engineering",
  "AI & Automation",
  "Analytics Platforms",
  "Custom Software Development",
  "Cloud & DevOps",
  "Product Design",
  "Technology Consulting",
];

const BUDGET_RANGES = [
  "$5k–10k",
  "$10k–25k",
  "$25k–50k",
  "$50k–100k",
  "$100k+",
];

const TRUSTED_LOGOS = [
  { name: "Google", domain: "Cloud & AI" },
  { name: "Microsoft", domain: "Enterprise Azure" },
  { name: "AWS", domain: "Cloud Infrastructure" },
  { name: "OpenAI", domain: "LLMs & Vectors" },
  { name: "Snowflake", domain: "Data Lakehouse" },
  { name: "Databricks", domain: "Lakehouse & Spark" },
  { name: "Power BI", domain: "Executive Dashboards" },
];

const CAPABILITY_CARDS = [
  {
    title: "Data Engineering",
    desc: "Modern data platforms, ETL pipelines, warehousing and governance.",
    icon: Database,
  },
  {
    title: "AI & Automation",
    desc: "LLM applications, AI agents, RAG systems and workflow automation.",
    icon: Cpu,
  },
  {
    title: "Cloud Architecture",
    desc: "AWS, Azure, GCP infrastructure and scalable deployments.",
    icon: Cloud,
  },
  {
    title: "Custom Software",
    desc: "Web applications, SaaS platforms and enterprise systems.",
    icon: Code2,
  },
];

const WHY_CONTACT_REASONS = [
  {
    title: "Build Data Platforms",
    desc: "Modern warehouses, ETL pipelines and reporting systems.",
    icon: Database,
    tag: "Lakehouse Architecture",
  },
  {
    title: "Deploy AI Solutions",
    desc: "LLM applications, AI copilots and business automation.",
    icon: Cpu,
    tag: "Sub-200ms RAG",
  },
  {
    title: "Modernize Infrastructure",
    desc: "Cloud-native architecture and DevOps optimization.",
    icon: Cloud,
    tag: "99.99% Uptime",
  },
  {
    title: "Scale Software Products",
    desc: "Enterprise applications and digital platforms.",
    icon: Layers,
    tag: "High Concurrency",
  },
];

const TESTIMONIALS = [
  {
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Global Logistics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote:
      "CodePlaced delivered what three previous consulting agencies couldn't in 18 months: a bulletproof, real-time analytics lakehouse in just 3 weeks. Our leadership makes decisions with complete clarity.",
    rating: 5,
  },
  {
    name: "Dr. Elena Rostova",
    role: "VP of Product Engineering",
    company: "BioSynaptics Health",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    quote:
      "The CodePlaced engineering team feels like an elite in-house Special Ops squad. Their mastery of agentic workflows and LLM latency optimization cut our onboarding cycle by 70%.",
    rating: 5,
  },
  {
    name: "David H. Steinberg",
    role: "Founder & Managing Director",
    company: "CapitalFlow FinTech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote:
      "Working with CodePlaced was the single best technical investment our company made. They audited our schemas, killed redundant cloud spend, and helped us scale smoothly.",
    rating: 5,
  },
];

const GLOBAL_DELIVERY_REGIONS = [
  {
    country: "India",
    flag: "🇮🇳",
    model: "Core Engineering Pods & AI Labs",
    timeZone: "IST (UTC+5:30) • 24/7 Coverage Available",
    hub: "Delhi NCR / Bengaluru Hub",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    model: "Enterprise Solutions & Architecture",
    timeZone: "EST / CST / PST Overlap Dedicated Pods",
    hub: "North America Client Coverage",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    model: "European Digital Engineering",
    timeZone: "GMT / BST Active Sprint Alignment",
    hub: "London & EMEA Client Pods",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    model: "MENA Innovation & FinTech Systems",
    timeZone: "GST (UTC+4) Real-Time Coordination",
    hub: "Dubai Enterprise Support",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    model: "APAC Product Scaling & Analytics",
    timeZone: "AEST (UTC+10) Dedicated Turnaround",
    hub: "Sydney & Melbourne Regional Pods",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    model: "Southeast Asia High-Velocity Pods",
    timeZone: "SGT (UTC+8) Live Architecture Support",
    hub: "ASEAN Cloud & AI Infrastructure",
  },
];

const FAQ_ITEMS = [
  {
    q: "What services does CodePlaced provide?",
    a: "We specialize in end-to-end Data Engineering (pipelines, lakehouses, warehousing), AI & Automation (agentic workflows, private RAG systems, LLMs), Cloud Architecture & FinOps (AWS, Azure, GCP), and Custom Software Development (high-concurrency web, mobile, and SaaS platforms).",
  },
  {
    q: "How long does a project typically take?",
    a: "Most scoped initiatives—such as executive dashboards, data platform foundations, MVP applications, or AI copilots—are delivered in fixed 2 to 4 week milestone cycles. Larger enterprise transformations are phased into predictable 2-week agile sprints.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, absolutely. We execute bilateral Non-Disclosure Agreements (NDAs) before discussing any system architecture, sensitive datasets, or technical requirements. All project code and intellectual property belong 100% to you from day one.",
  },
  {
    q: "Can you work with existing teams?",
    a: "Yes. Our senior pods integrate directly into your existing engineering workflows, whether joining your Jira/Slack cadences as autonomous squads or pairing with your in-house architects to accelerate critical roadmaps.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We offer flexible post-launch SLA maintenance, proactive 24/7 cloud telemetry monitoring, automated security patching, and continuous feature scaling to support your long-term operational growth.",
  },
  {
    q: "How do we get started?",
    a: "Simply submit the consultation form on this page or schedule a strategy call. A Principal Engineer will review your requirements and coordinate a 30-minute discovery session with clear timelines, architecture recommendations, and estimated scope within 24 hours.",
  },
];

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: SERVICES_LIST[0],
    budget: BUDGET_RANGES[1],
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.fullName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0F4C81", "#14B8C4", "#00b7c2", "#082F49", "#10B981"],
        });
      } catch {
        // Safe fallback
      }
    }, 700);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-white text-[#0F172A] selection:bg-[#0F4C81] selection:text-white font-sans">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (One Full-Width Seamless Gradient + Subtle Tech Pattern) */}
      {/* ========================================================================= */}
      <section
        ref={formRef}
        className="relative pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28 overflow-hidden border-b border-slate-200/60"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(20,184,196,0.14), transparent 45%), radial-gradient(circle at 10% 20%, rgba(15,76,129,0.08), transparent 40%), linear-gradient(135deg, #f8fcff 0%, #edf8fb 38%, #f5fcff 100%)",
        }}
      >
        {/* Subtle Tech Dot Pattern Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 -z-0"
          style={{
            backgroundImage: "radial-gradient(rgba(20, 184, 196, 0.15) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* LEFT SIDE: Heading & 4 Glass Cards (Sits directly on canvas, no enclosing box) */}
            <div className="lg:col-span-6 space-y-7 text-left">
              {/* Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/80 backdrop-blur-md text-[#0F4C81] border border-[#14B8C4]/30 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#14B8C4]" />
                <span>TRUSTED DATA, AI & DIGITAL PARTNER</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-[38px] sm:text-[48px] lg:text-[56px] font-[800] leading-[1.08] tracking-[-0.035em] text-[#082F49]"
              >
                Let&apos;s Build Your Next <br />
                <span
                  className="bg-clip-text text-transparent font-extrabold"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #0F4C81, #14B8C4)",
                  }}
                >
                  Data, AI & Digital Product
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
              >
                From data engineering and analytics platforms to AI-powered applications and
                cloud-native software, CodePlaced helps organizations transform ideas into scalable
                digital solutions.
              </motion.p>

              {/* 4 Glass Capability Cards Grid */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1"
              >
                {CAPABILITY_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-[22px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between group"
                      style={{
                        background: "rgba(255, 255, 255, 0.82)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(20, 184, 196, 0.22)",
                        boxShadow: "0 8px 24px rgba(15, 76, 129, 0.04)",
                      }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#ECFEFF] text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-[#082F49] group-hover:text-[#0F4C81] transition-colors mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* RIGHT SIDE: Premium Floating Form Card with Ambient Teal Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              {/* Teal Glow Behind Form (Creates High Depth) */}
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-[40px] pointer-events-none -z-10"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(20,184,196,0.22), rgba(15,76,129,0.08) 60%, transparent 80%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Glassmorphism Form Card */}
              <div
                className="rounded-[32px] p-6 sm:p-9 md:p-10 transition-all relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.90)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(20, 184, 196, 0.20)",
                  boxShadow: "0 25px 70px rgba(15, 76, 129, 0.09)",
                }}
              >
                {/* Form Header */}
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <h2 className="text-2xl sm:text-[26px] font-black text-[#082F49] tracking-tight">
                    Schedule a Strategy Call
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Direct architectural conversation with our Principal Engineers.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-black text-[#082F49]">
                      Strategy Call Requested!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#082F49]">{formData.fullName}</strong>. Our
                      technical leadership has received your details and will coordinate your 30-min
                      consultation within 24 hours.
                    </p>
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-left text-xs text-slate-600 space-y-1.5 max-w-sm mx-auto">
                      <div>
                        <strong className="text-[#082F49]">Email:</strong> {formData.email}
                      </div>
                      <div>
                        <strong className="text-[#082F49]">Service:</strong> {formData.service}
                      </div>
                      <div>
                        <strong className="text-[#082F49]">Budget:</strong> {formData.budget}
                      </div>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: "",
                            email: "",
                            company: "",
                            phone: "",
                            service: SERVICES_LIST[0],
                            budget: BUDGET_RANGES[1],
                            description: "",
                          });
                        }}
                        className="px-6 py-2.5 rounded-full bg-[#0F4C81] hover:bg-[#082F49] text-white text-xs font-bold transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Mercer"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8C4]/20 focus:border-[#14B8C4] transition-all bg-white/90"
                      />
                    </div>

                    {/* Work Email & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Work Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8C4]/20 focus:border-[#14B8C4] transition-all bg-white/90"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8C4]/20 focus:border-[#14B8C4] transition-all bg-white/90"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Global Inc."
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8C4]/20 focus:border-[#14B8C4] transition-all bg-white/90"
                      />
                    </div>

                    {/* Service Interested In & Project Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Service Interested In
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8C4]/20 focus:border-[#14B8C4] bg-white transition-all"
                        >
                          {SERVICES_LIST.map((svc) => (
                            <option key={svc} value={svc}>
                              {svc}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Project Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8C4]/20 focus:border-[#14B8C4] bg-white transition-all"
                        >
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Project Description
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your objectives, architecture scale, timeline, or current bottlenecks..."
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8C4]/20 focus:border-[#14B8C4] transition-all resize-none bg-white/90"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-[52px] rounded-full bg-gradient-to-r from-[#0F4C81] to-[#14B8C4] hover:from-[#082F49] hover:to-[#0F4C81] text-white font-extrabold text-[15px] shadow-lg shadow-[#14B8C4]/20 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Connecting with Engineering...</span>
                        ) : (
                          <>
                            <span>Schedule Strategy Call</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Under Button Trust Guarantees */}
                    <div className="pt-3 flex items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold flex-wrap">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
                        NDA Available
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
                        Free Consultation
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
                        24 Hour Response
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUSTED BY SECTION (Continuous Technology Ecosystem Marquee) */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Engineered Across Leading Enterprise Platforms
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-center">
            {TRUSTED_LOGOS.map((tech, idx) => (
              <div
                key={idx}
                className="py-3 px-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-[#14B8C4]/40 transition-colors text-center shadow-2xs group"
              >
                <span className="block text-sm font-extrabold text-slate-700 group-hover:text-[#0F4C81] transition-colors">
                  {tech.name}
                </span>
                <span className="block text-[10px] text-slate-400 font-medium">
                  {tech.domain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY COMPANIES CONTACT CODEPLACED (4 Enterprise Cards) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[850px] mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0F4C81] border border-[#14B8C4]/25 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#14B8C4]" />
              <span>CORE ARCHITECTURAL STRENGTHS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#082F49]">
              Why Companies Contact CodePlaced
            </h2>
            <p className="text-base text-slate-600 max-w-[680px] mx-auto leading-relaxed">
              We eliminate technical debt and bridge the gap between complex data architectures and
              high-growth digital execution.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CONTACT_REASONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[24px] bg-white border border-slate-200/90 p-7 shadow-2xs hover:shadow-lg hover:border-[#14B8C4]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#ECFEFF] text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#082F49] mb-2 group-hover:text-[#0F4C81] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0F4C81]">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8C4]" />
                    <span>Production Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLIENT SUCCESS STORIES (3 Glassmorphism Testimonial Cards) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[850px] mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0F4C81] border border-[#14B8C4]/25 shadow-xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>PROVEN CLIENT OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#082F49]">
              Helping Businesses Transform With Technology
            </h2>
            <p className="text-base text-slate-600 max-w-[650px] mx-auto leading-relaxed">
              Read how our dedicated engineering squads deliver measurable velocity, architecture
              resilience, and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="rounded-[26px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, #F8FCFD 100%)",
                  border: "1px solid rgba(20, 184, 196, 0.22)",
                  boxShadow: "0 10px 30px rgba(8, 47, 73, 0.04)",
                }}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm sm:text-[15px] text-slate-700 leading-relaxed mb-6 font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Client Profile */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#14B8C4]"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-[#082F49]">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                    <div className="text-[11px] font-bold text-[#14B8C4]">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GLOBAL DELIVERY SECTION (Dark Background Interactive Cards) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#082F49] text-white relative overflow-hidden border-b border-white/10">
        {/* Radial Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none -z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(20,184,196,0.15), transparent 70%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-[850px] mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20 shadow-xs">
              <Globe2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>GLOBAL DELIVERY MODEL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Serving Clients Across Industries & Regions
            </h2>
            <p className="text-base text-slate-300 max-w-[650px] mx-auto leading-relaxed">
              Autonomous engineering pods configured to your timezone, compliance frameworks, and
              operational tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {GLOBAL_DELIVERY_REGIONS.map((region, idx) => (
              <div
                key={idx}
                className="rounded-[22px] bg-white/[0.05] border border-white/10 p-6 backdrop-blur-md hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{region.flag}</span>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {region.country}
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-400/20 px-2.5 py-0.5 rounded-full">
                      Active Pods
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-200 mb-2">
                    {region.model}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {region.timeZone}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] font-medium text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#14B8C4]" />
                  <span>{region.hub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTACT INFORMATION SECTION (Two-Column Layout) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Direct Office Contact */}
            <div className="lg:col-span-6 rounded-[28px] bg-[#F8FAFC] border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0F4C81] border border-[#14B8C4]/20 mb-4">
                  <Mail className="w-3.5 h-3.5 text-[#14B8C4]" />
                  <span>COMMUNICATION CHANNELS</span>
                </div>
                <h3 className="text-2xl font-black text-[#082F49] mb-2">
                  Office Contact
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Direct channels to reach our technical leadership, partnerships, and talent pods.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#ECFEFF] text-[#0F4C81] flex items-center justify-center">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          General Inquiries
                        </div>
                        <a
                          href="mailto:hello@codeplaced.com"
                          className="text-sm font-extrabold text-[#082F49] hover:text-[#0F4C81] transition-colors"
                        >
                          hello@codeplaced.com
                        </a>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">Primary</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#ECFEFF] text-[#0F4C81] flex items-center justify-center">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Business & Partnerships
                        </div>
                        <a
                          href="mailto:contact@codeplaced.com"
                          className="text-sm font-extrabold text-[#082F49] hover:text-[#0F4C81] transition-colors"
                        >
                          contact@codeplaced.com
                        </a>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">Sales</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#ECFEFF] text-[#0F4C81] flex items-center justify-center">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Careers & Engineering
                        </div>
                        <a
                          href="mailto:careers@codeplaced.com"
                          className="text-sm font-extrabold text-[#082F49] hover:text-[#0F4C81] transition-colors"
                        >
                          careers@codeplaced.com
                        </a>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">Talent</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Direct Phone Line
                  </div>
                  <div className="text-sm font-extrabold text-[#082F49]">
                    +91 99999 99999
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Business Hours & Response Promise */}
            <div className="lg:col-span-6 rounded-[28px] bg-gradient-to-br from-[#0F4C81] to-[#082F49] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20 mb-4">
                  <Clock className="w-3.5 h-3.5 text-cyan-300" />
                  <span>OPERATIONAL CADENCE</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Business Hours & Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  Standard headquarters operations with active shift options for North American and
                  European timezones.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                        Business Hours
                      </div>
                      <div className="text-base font-extrabold text-white mt-0.5">
                        Monday – Friday
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">9:00 AM – 6:00 PM IST</div>
                      <div className="text-xs text-slate-300">Standard IST HQ</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                        Response Promise
                      </div>
                      <div className="text-base font-extrabold text-white mt-0.5">
                        Within 24 Hours
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-emerald-300">Guaranteed Review</div>
                      <div className="text-xs text-slate-300">Senior Engineer Scoping</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Strict NDA Guardrails Active</span>
                </span>
                <button
                  onClick={scrollToForm}
                  className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-[#082F49] font-extrabold text-xs transition-colors"
                >
                  Book Strategy Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FAQ SECTION (Dark Gradient Accordion) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#082F49] text-white border-b border-white/10">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-300" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Questions About Working With Us
            </h2>
            <p className="text-base text-slate-300 max-w-[620px] mx-auto leading-relaxed">
              Clear answers on how we scope, partner, deploy, and support enterprise systems.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] bg-white/[0.04] border border-white/10 overflow-hidden transition-colors hover:bg-white/[0.06]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-white">
                      {item.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#14B8C4] text-[#082F49]" : "text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5">
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
      {/* 8. FINAL CTA SECTION (Large Dark Blue Gradient Section) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#082F49] to-[#041E2A] text-white text-center relative overflow-hidden">
        {/* Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none -z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(20,184,196,0.18), transparent 70%)",
          }}
        />

        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ready To Build Something Exceptional?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and our team will help define the right strategy, technology
            stack and delivery approach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-[#38BDF8] hover:bg-[#0284C7] text-[#082F49] hover:text-white font-extrabold text-[15px] transition-all shadow-xl shadow-[#38BDF8]/20 flex items-center justify-center gap-2.5 active:scale-95 group cursor-pointer"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-[15px] border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>View Case Studies</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Data & AI Specialists</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Enterprise Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Global Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
