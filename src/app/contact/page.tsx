"use client";

import React, { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash === "#contact-hero") {
        setTimeout(() => {
          if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 120);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

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
    <div className="text-white selection:bg-[#00C8E8] selection:text-black font-sans min-h-screen relative bg-[#050505]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & IMMEDIATE CONTACT FORM */}
      {/* Mobile: Hero Heading -> Direct Contact Form (Visible Above Fold) */}
      {/* Desktop: Split 50/50 with Hero + Capabilities on Left, Form on Right */}
      {/* ========================================================================= */}
      <section
        id="contact-hero"
        ref={formRef}
        className="relative pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#050505] border-b border-[#1B242B]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-start">
            {/* LEFT SIDE: Heading, Description & Desktop Capabilities */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-6 text-left">
              {/* Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/5 backdrop-blur-md text-[#00C8E8] border border-[#1B242B] shadow-xs"
              >
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00C8E8]" />
                <span>TRUSTED DATA, AI & DIGITAL PARTNER</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-[28px] xs:text-[34px] sm:text-[44px] lg:text-[56px] font-[900] leading-[1.12] sm:leading-[1.08] tracking-tight text-white"
              >
                Let&apos;s Build Your Next <br />
                <span className="text-[#00C8E8] font-extrabold">
                  Data, AI & Digital Product
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-xs sm:text-base lg:text-lg text-[#A1AAB7] leading-relaxed font-normal max-w-xl"
              >
                From data engineering and analytics platforms to AI-powered applications and
                cloud-native software, CodePlaced helps organizations transform ideas into scalable
                digital solutions.
              </motion.p>

              {/* Desktop Only: 4 Glass Capability Cards Grid (Hidden on mobile so form appears immediately) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="hidden lg:grid grid-cols-2 gap-4 pt-2"
              >
                {CAPABILITY_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-[22px] bg-[#101820] border border-[#1B242B] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#00C8E8]/60 flex flex-col justify-between group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#050505] text-[#00C8E8] border border-[#1B242B] group-hover:bg-[#00C8E8] group-hover:text-black transition-colors flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-[#00C8E8] group-hover:text-black transition-colors" />
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#00C8E8] transition-colors mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#A1AAB7] leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* RIGHT SIDE / MOBILE IMMEDIATE: Floating Form Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="lg:col-span-6 relative mt-2 lg:mt-0"
            >
              {/* Subtle ambient blur behind form */}
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-[40px] pointer-events-none -z-10"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,200,232,0.12), transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Form Card: Clean white container on mobile, dark on desktop */}
              <div
                className="rounded-2xl sm:rounded-[32px] p-4 xs:p-5 sm:p-9 md:p-10 transition-all relative overflow-hidden bg-white text-neutral-900 border border-slate-200 lg:bg-[#101820] lg:text-white lg:border-[#1B242B] shadow-2xl"
              >
                {/* Form Header */}
                <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-100 lg:border-[#1B242B]">
                  <h2 className="text-xl sm:text-[26px] font-black text-neutral-900 lg:text-white tracking-tight">
                    Schedule a Strategy Call
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 lg:text-[#A1AAB7] mt-0.5 sm:mt-1">
                    Direct architectural conversation with our Principal Engineers.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-6 sm:py-10 text-center space-y-3 sm:space-y-4"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/10 text-emerald-600 lg:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.5]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900 lg:text-white">
                      Strategy Call Requested!
                    </h3>
                    <p className="text-neutral-600 lg:text-[#A1AAB7] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-neutral-950 lg:text-white">{formData.fullName}</strong>. Our
                      technical leadership has received your details and will coordinate your 30-min
                      consultation within 24 hours.
                    </p>
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 lg:bg-[#050505] border border-slate-200 lg:border-[#1B242B] text-left text-xs text-neutral-700 lg:text-[#A1AAB7] space-y-1.5 max-w-sm mx-auto">
                      <div>
                        <strong className="text-neutral-900 lg:text-white">Email:</strong> {formData.email}
                      </div>
                      <div>
                        <strong className="text-neutral-900 lg:text-white">Service:</strong> {formData.service}
                      </div>
                      <div>
                        <strong className="text-neutral-900 lg:text-white">Budget:</strong> {formData.budget}
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
                        className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-neutral-900 hover:bg-black text-white lg:bg-white lg:hover:bg-slate-100 lg:text-black text-xs font-bold transition-all cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 lg:text-white mb-1">
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
                        className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white placeholder:text-neutral-400 lg:placeholder:text-[#A1AAB7]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] transition-all bg-[#F8FAFC] lg:bg-[#050505]"
                      />
                    </div>

                    {/* Work Email & Phone Number (Single column on mobile, 2 cols on tablet+) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 lg:text-white mb-1">
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
                          className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white placeholder:text-neutral-400 lg:placeholder:text-[#A1AAB7]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] transition-all bg-[#F8FAFC] lg:bg-[#050505]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-800 lg:text-white mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white placeholder:text-neutral-400 lg:placeholder:text-[#A1AAB7]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] transition-all bg-[#F8FAFC] lg:bg-[#050505]"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 lg:text-white mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Global Inc."
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white placeholder:text-neutral-400 lg:placeholder:text-[#A1AAB7]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] transition-all bg-[#F8FAFC] lg:bg-[#050505]"
                      />
                    </div>

                    {/* Service Interested In & Project Budget (Single column on mobile, 2 cols on tablet+) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 lg:text-white mb-1">
                          Service Interested In
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] bg-[#F8FAFC] lg:bg-[#050505] transition-all"
                        >
                          {SERVICES_LIST.map((svc) => (
                            <option key={svc} value={svc} className="bg-white text-neutral-900 lg:bg-[#101820] lg:text-white">
                              {svc}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-800 lg:text-white mb-1">
                          Project Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                          }
                          className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] bg-[#F8FAFC] lg:bg-[#050505] transition-all"
                        >
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b} className="bg-white text-neutral-900 lg:bg-[#101820] lg:text-white">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 lg:text-white mb-1">
                        Project Description
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your objectives, architecture scale, timeline, or current bottlenecks..."
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white placeholder:text-neutral-400 lg:placeholder:text-[#A1AAB7]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] transition-all resize-none bg-[#F8FAFC] lg:bg-[#050505]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1 sm:pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-11 sm:h-[52px] rounded-xl text-black font-extrabold text-xs sm:text-[15px] shadow-lg flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-70 cursor-pointer bg-[#00BCD4] hover:bg-[#20d7f5]"
                      >
                        {isSubmitting ? (
                          <span>Connecting with Engineering...</span>
                        ) : (
                          <>
                            <span>Schedule Strategy Call</span>
                            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Under Button Trust Guarantees */}
                    <div className="pt-2 flex items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-neutral-500 lg:text-[#A1AAB7] font-semibold flex-wrap">
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-500 stroke-[2.5]" />
                        NDA Available
                      </span>
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-500 stroke-[2.5]" />
                        Free Consultation
                      </span>
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-500 stroke-[2.5]" />
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
      {/* 2. DIRECT CONTACT OPTIONS — IMMEDIATELY BELOW THE FORM */}
      {/* Mobile: Compact 2-Column Grid | Desktop: Two Large Side-by-Side Cards */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white border-b border-[#E5EAF0] text-neutral-900">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile View: Compact 2-Column Grid */}
          <div className="lg:hidden space-y-4">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#007F9C]">
                DIRECT COMMUNICATION
              </span>
              <h2 className="text-xl font-black text-[#101820] tracking-tight">
                Direct Contact Channels
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="mailto:hello@codeplaced.com"
                className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1 block hover:border-[#00BCD4] transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-[#007F9C]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  General Inquiries
                </div>
                <div className="text-xs font-bold text-[#101820] truncate">
                  hello@codeplaced.com
                </div>
              </a>

              <a
                href="mailto:contact@codeplaced.com"
                className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1 block hover:border-[#00BCD4] transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-[#007F9C]">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  Business & Sales
                </div>
                <div className="text-xs font-bold text-[#101820] truncate">
                  contact@codeplaced.com
                </div>
              </a>

              <a
                href="tel:+919999999999"
                className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1 block hover:border-[#00BCD4] transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-emerald-600">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  Direct Phone
                </div>
                <div className="text-xs font-bold text-[#101820] truncate">
                  +91 99999 99999
                </div>
              </a>

              <a
                href="mailto:careers@codeplaced.com"
                className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1 block hover:border-[#00BCD4] transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-[#007F9C]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  Careers & Talent
                </div>
                <div className="text-xs font-bold text-[#101820] truncate">
                  careers@codeplaced.com
                </div>
              </a>

              <div className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1">
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-[#007F9C]">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  Business Hours
                </div>
                <div className="text-xs font-bold text-[#101820]">
                  Mon–Fri, 9AM–6PM
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1">
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  Response Promise
                </div>
                <div className="text-xs font-bold text-emerald-700">
                  Within 24 Hours
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View: Original Two-Column Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Direct Office Contact */}
            <div className="col-span-6 rounded-[18px] bg-white border border-[#E5EAF0] p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-xs">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF9FC] text-[#007F9C] border border-[#00C8E8]/20 mb-4">
                  <Mail className="w-3.5 h-3.5 text-[#007F9C]" />
                  <span>COMMUNICATION CHANNELS</span>
                </div>
                <h3 className="text-2xl font-black text-[#101820] mb-2">
                  Office Contact
                </h3>
                <p className="text-xs sm:text-sm text-[#566171] mb-6">
                  Direct channels to reach our technical leadership, partnerships, and talent pods.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white text-[#101820] border border-[#E5EAF0] flex items-center justify-center">
                        <Mail className="w-4 h-4 text-[#007F9C]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#566171]">
                          General Inquiries
                        </div>
                        <a
                          href="mailto:hello@codeplaced.com"
                          className="text-sm font-extrabold text-[#101820] hover:text-[#007F9C] transition-colors"
                        >
                          hello@codeplaced.com
                        </a>
                      </div>
                    </div>
                    <span className="text-xs text-[#566171] font-medium">Primary</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white text-[#101820] border border-[#E5EAF0] flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-[#007F9C]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#566171]">
                          Business & Partnerships
                        </div>
                        <a
                          href="mailto:contact@codeplaced.com"
                          className="text-sm font-extrabold text-[#101820] hover:text-[#007F9C] transition-colors"
                        >
                          contact@codeplaced.com
                        </a>
                      </div>
                    </div>
                    <span className="text-xs text-[#566171] font-medium">Sales</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white text-[#101820] border border-[#E5EAF0] flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-[#007F9C]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#566171]">
                          Careers & Engineering
                        </div>
                        <a
                          href="mailto:careers@codeplaced.com"
                          className="text-sm font-extrabold text-[#101820] hover:text-[#007F9C] transition-colors"
                        >
                          careers@codeplaced.com
                        </a>
                      </div>
                    </div>
                    <span className="text-xs text-[#566171] font-medium">Talent</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5EAF0] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#566171]">
                    Direct Phone Line
                  </div>
                  <div className="text-sm font-extrabold text-[#101820]">
                    +91 99999 99999
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Business Hours & Response Promise */}
            <div className="col-span-6 rounded-[18px] bg-[#0B1117] border border-[#1B242B] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#00C8E8] border border-white/20 mb-4">
                  <Clock className="w-3.5 h-3.5 text-[#00C8E8]" />
                  <span>OPERATIONAL CADENCE</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Business Hours & Support
                </h3>
                <p className="text-xs sm:text-sm text-[#A1AAB7] mb-6">
                  Standard headquarters operations with active shift options for North American and
                  European timezones.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#050505] border border-[#1B242B] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#00C8E8] uppercase tracking-wider">
                        Business Hours
                      </div>
                      <div className="text-base font-extrabold text-white mt-0.5">
                        Monday – Friday
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">9:00 AM – 6:00 PM IST</div>
                      <div className="text-xs text-[#A1AAB7]">Standard IST HQ</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#050505] border border-[#1B242B] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#00C8E8] uppercase tracking-wider">
                        Response Promise
                      </div>
                      <div className="text-base font-extrabold text-white mt-0.5">
                        Within 24 Hours
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-emerald-400">Guaranteed Review</div>
                      <div className="text-xs text-[#A1AAB7]">Senior Engineer Scoping</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1B242B] flex items-center justify-between text-xs text-[#A1AAB7]">
                <span className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#00C8E8]" />
                  <span>Strict NDA Guardrails Active</span>
                </span>
                <button
                  onClick={scrollToForm}
                  className="px-4 py-2 rounded-full text-black font-extrabold text-xs transition-colors cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #087FA5 0%, #00C8E8 100%)",
                  }}
                >
                  Book Strategy Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY COMPANIES CONTACT CODEPLACED — COMPACT 2-COL MOBILE GRID */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white border-b border-[#E5EAF0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[850px] mx-auto text-center mb-6 sm:mb-14 space-y-1.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#EBF9FC] text-[#007F9C] border border-[#00C8E8]/20 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#007F9C]" />
              <span>CORE ARCHITECTURAL STRENGTHS</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#101820]">
              Why Companies Contact CodePlaced
            </h2>
            <p className="text-xs sm:text-base text-[#566171] max-w-[680px] mx-auto leading-relaxed">
              We eliminate technical debt and bridge the gap between complex data architectures and
              high-growth digital execution.
            </p>
          </div>

          {/* 2-Column on Mobile, 4-Column on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {WHY_CONTACT_REASONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl sm:rounded-[18px] bg-white border border-[#E5EAF0] p-3.5 sm:p-7 shadow-xs hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#00C8E8] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-5">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#F7F9FB] text-[#101820] border border-[#E5EAF0] group-hover:bg-[#101820] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#007F9C]" />
                      </div>
                      <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold bg-[#EBF9FC] text-[#007F9C] border border-[#00C8E8]/20 truncate max-w-[85px] sm:max-w-none">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-lg font-bold text-[#101820] mb-1 sm:mb-2 group-hover:text-[#00C8E8] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-sm text-[#566171] leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-[#E5EAF0] flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#101820]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#007F9C]" />
                    <span>Production Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HELPING BUSINESSES TRANSFORM WITH TECHNOLOGY (TESTIMONIALS) */}
      {/* Mobile: Horizontal Swipeable Carousel | Desktop: 3-Column Grid */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 bg-[#F7F9FB] border-b border-[#E5EAF0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[850px] mx-auto text-center mb-6 sm:mb-14 space-y-1.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white text-[#101820] border border-[#E5EAF0] shadow-xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>PROVEN CLIENT OUTCOMES</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#101820]">
              Helping Businesses Transform With Technology
            </h2>
            <p className="text-xs sm:text-base text-[#566171] max-w-[650px] mx-auto leading-relaxed">
              Read how our dedicated engineering squads deliver measurable velocity, architecture
              resilience, and business growth.
            </p>
          </div>

          {/* Mobile View: Swipeable Carousel */}
          <div className="md:hidden flex overflow-x-auto gap-3 pb-2 snap-x snap-mandatory">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="w-[86vw] max-w-[330px] shrink-0 snap-start rounded-2xl p-4 sm:p-6 flex flex-col justify-between bg-white border border-[#E5EAF0] shadow-xs relative overflow-hidden"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-2.5">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xs text-[#101820] leading-relaxed mb-4 font-normal line-clamp-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Client Profile */}
                <div className="pt-3 border-t border-[#E5EAF0] flex items-center gap-2.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#00C8E8] shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-[#101820] truncate">{t.name}</div>
                    <div className="text-[10px] text-[#566171] truncate">{t.role}</div>
                    <div className="text-[10px] font-bold text-[#007F9C] truncate">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: 3-Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="rounded-[18px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white border border-[#E5EAF0] shadow-xs relative overflow-hidden"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm sm:text-[15px] text-[#101820] leading-relaxed mb-6 font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Client Profile */}
                <div className="pt-4 border-t border-[#E5EAF0] flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#00C8E8]"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-[#101820]">{t.name}</div>
                    <div className="text-xs text-[#566171]">{t.role}</div>
                    <div className="text-[11px] font-bold text-[#007F9C]">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ENTERPRISE PLATFORMS SECTION (TRUSTED LOGOS) */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-[#050505] border-b border-[#1B242B]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#00C8E8] mb-4 sm:mb-6">
            Engineered Across Leading Enterprise Platforms
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-4 items-center">
            {TRUSTED_LOGOS.map((tech, idx) => (
              <div
                key={idx}
                className="py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl bg-[#101820] border border-[#1B242B] hover:border-[#00C8E8]/40 transition-colors text-center shadow-2xs group"
              >
                <span className="block text-xs sm:text-sm font-extrabold text-white group-hover:text-[#00C8E8] transition-colors truncate">
                  {tech.name}
                </span>
                <span className="block text-[9px] sm:text-[10px] text-[#A1AAB7] font-medium truncate">
                  {tech.domain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ SECTION */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 bg-[#F7F9FB] border-b border-[#E5EAF0]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-14 space-y-1.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white text-[#101820] border border-[#E5EAF0] shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#007F9C]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#101820]">
              Questions About Working With Us
            </h2>
            <p className="text-xs sm:text-base text-[#566171] max-w-[620px] mx-auto leading-relaxed">
              Clear answers on how we scope, partner, deploy, and support enterprise systems.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-2.5 sm:space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl sm:rounded-[16px] bg-white border border-[#E5EAF0] overflow-hidden shadow-2xs hover:shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-lg font-bold text-[#101820]">
                      {item.q}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F7F9FB] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#101820] text-[#00C8E8]" : "text-[#101820]"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-base text-[#566171] leading-relaxed border-t border-[#E5EAF0]">
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
      {/* 7. FINAL CTA SECTION */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 bg-[#050505]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-[32px] p-6 sm:p-14 text-center overflow-hidden bg-[#101820] border border-[#1B242B] text-white shadow-2xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#00C8E8]/10 text-[#00C8E8] border border-[#00C8E8]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#00C8E8]" /> Start Your Engagement
            </div>

            <h2 className="text-xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight max-w-3xl mx-auto">
              Ready To Build Something Exceptional?
            </h2>

            <p className="text-xs sm:text-base lg:text-lg text-[#A1AAB7] max-w-2xl mx-auto leading-relaxed">
              Tell us about your project and our team will help define the right strategy, technology
              stack and delivery approach.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto h-11 sm:h-[54px] px-8 rounded-xl text-black font-extrabold text-xs sm:text-[15px] transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95 group cursor-pointer bg-[#00BCD4] hover:bg-[#20d7f5]"
              >
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/case-studies"
                className="w-full sm:w-auto h-11 sm:h-[54px] px-8 rounded-xl bg-white/5 hover:bg-white/10 text-white font-extrabold text-xs sm:text-[15px] border border-[#1B242B] transition-all flex items-center justify-center gap-2"
              >
                <span>View Case Studies</span>
              </Link>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-[#1B242B] flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-[11px] sm:text-sm font-semibold text-[#A1AAB7]">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#00C8E8]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00C8E8]" />
                <span>Data & AI Specialists</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#00C8E8]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00C8E8]" />
                <span>Enterprise Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#00C8E8]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00C8E8]" />
                <span>Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
