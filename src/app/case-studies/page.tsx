"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  BarChart3,
  Zap,
  Workflow,
  Rocket,
  Briefcase,
  ShoppingBag,
  Truck,
  HeartPulse,
  DollarSign,
  ArrowUpRight,
  Star,
  Award,
  Radio,
  Quote,
  Check,
  Search,
  Target,
  Bot,
  Activity,
} from "lucide-react";
import { CASE_STUDIES_DATA, CaseStudyItem } from "@/lib/caseStudiesData";

// =========================================================================
// CINEMATIC EASING & ANIMATION CONSTANTS (Apple Keynote / Stripe Launch)
// =========================================================================
const CINEMATIC_EASE = [0.16, 1, 0.3, 1] as const;

// Cinematic card introduction with blur and deliberate upward rise
const cinematicCardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: custom * 0.3, // 300ms deliberate stagger between cards
      ease: CINEMATIC_EASE,
    },
  }),
};

// Section Heading Reveal
const headingRevealVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: CINEMATIC_EASE },
  },
};

// Row-by-Row Impact Grid Variants
const impactRowVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
    filter: "blur(6px)",
  },
  visible: (rowIndex: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      delay: rowIndex * 0.4, // Wait 400ms between rows
      ease: CINEMATIC_EASE,
    },
  }),
};

// Testimonial Sequential Reveal Variants
const testimonialVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
    filter: "blur(6px)",
  },
  visible: (idx: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      delay: idx * 0.25, // Wait 250ms between testimonials
      ease: CINEMATIC_EASE,
    },
  }),
};

// =========================================================================
// DATA STRUCTURES
// =========================================================================

// Command Center Live Telemetry Feeds (Hero Option A)
const HERO_COMMAND_FEEDS = [
  {
    title: "Healthcare Analytics Platform",
    industry: "Healthcare",
    metric: "18,000 records/hr",
    status: "Live Ingestion (14 Sites)",
    icon: HeartPulse,
    color: "#16D3F5",
  },
  {
    title: "Retail Omnichannel Sync",
    industry: "Retail & E-Com",
    metric: "< 1.5s Global Sync",
    status: "180+ POS Stores Synced",
    icon: ShoppingBag,
    color: "#0284C7",
  },
  {
    title: "Autonomous Ledger AI Copilot",
    industry: "Finance & Fintech",
    metric: "99.4% Extraction",
    status: "$450M Volume Reconciled",
    icon: DollarSign,
    color: "#10B981",
  },
  {
    title: "Dynamic Fleet Dispatch Engine",
    industry: "Logistics",
    metric: "99.2% On-Time",
    status: "1,200 Trucks Real-Time",
    icon: Truck,
    color: "#16D3F5",
  },
];

// Impact Metrics Wall
const IMPACT_METRICS_WALL = [
  { num: 250, suffix: "+", label: "Projects Delivered", detail: "Global Deployments" },
  { num: 150, suffix: "+", label: "Clients Served", detail: "Startups & Fortune 500" },
  { num: 1200, suffix: "+", label: "Automated Workflows", detail: "Live In Production" },
  { num: 15, suffix: "+", label: "Industries Supported", detail: "Domain Blueprints" },
  { num: 99.9, suffix: "%", decimals: 1, label: "Platform Reliability", detail: "Strict SLA Guarantees" },
];

// Industry Navigator Filter Pills
const INDUSTRY_NAV_PILLS = [
  { id: "all", label: "All Projects" },
  { id: "Healthcare", label: "Healthcare" },
  { id: "Retail", label: "Retail & E-Commerce" },
  { id: "Finance", label: "Finance & Fintech" },
  { id: "Logistics", label: "Logistics" },
  { id: "Manufacturing", label: "Manufacturing" },
  { id: "AI", label: "Enterprise AI" },
];

// Results Timeline: "From Challenge To Impact"
const RESULTS_TIMELINE = [
  {
    step: "01",
    phase: "Discovery & Audit",
    timeline: "Week 1",
    desc: "Domain audits, legacy database schema parsing, and commercial KPI alignment.",
    deliverables: "Product Specification & Technical RFC",
    icon: Search,
  },
  {
    step: "02",
    phase: "Architecture & Strategy",
    timeline: "Week 2",
    desc: "Cloud IaC topology, security threat modeling, and OpenAPI endpoint contracts.",
    deliverables: "High-Availability System Blueprint",
    icon: Target,
  },
  {
    step: "03",
    phase: "Agile Development",
    timeline: "Weeks 3–8",
    desc: "High-velocity 2-week sprints with staging preview URLs and automated unit tests.",
    deliverables: "Demonstrable Staging Deployments",
    icon: Cpu,
  },
  {
    step: "04",
    phase: "QA & Security Hardening",
    timeline: "Weeks 9–10",
    desc: "100k synthetic concurrency load testing, penetration testing & SOC2/HIPAA audits.",
    deliverables: "Production Sign-Off & Load Test Reports",
    icon: ShieldCheck,
  },
  {
    step: "05",
    phase: "Production Deployment",
    timeline: "Week 11",
    desc: "Zero-downtime blue/green cutover, DNS routing, and Datadog telemetry alarms.",
    deliverables: "Live Production Launch & Rollback Gates",
    icon: Rocket,
  },
  {
    step: "06",
    phase: "Continuous Optimization",
    timeline: "Ongoing",
    desc: "Sub-second query tuning, latency minimization, and 24/7 proactive SLA support.",
    deliverables: "24/7 SLA Guarantees & Monthly Reviews",
    icon: TrendingUp,
  },
];

// Engineering Impact Grid Outcomes
const ENGINEERING_OUTCOMES = [
  {
    title: "Revenue Growth",
    rawNumber: 340,
    prefix: "+",
    suffix: "%",
    display: "+340%",
    label: "Blended Conversion ROI",
    desc: "High-velocity checkout flows, localized personalization engines, and real-time inventory synchronization.",
    icon: TrendingUp,
    color: "#10B981",
  },
  {
    title: "Cost Reduction",
    rawNumber: 2.8,
    decimals: 1,
    prefix: "$",
    suffix: "M+",
    display: "$2.8M+",
    label: "Annual Operational Savings",
    desc: "Automated manual charting, eliminated overselling refunds, and avoided catastrophic factory downtime.",
    icon: DollarSign,
    color: "#0284C7",
  },
  {
    title: "Process Automation",
    rawNumber: 18000,
    suffix: " hrs",
    display: "18,000 hrs",
    label: "Reclaimed Annually",
    desc: "Autonomous invoice processing, clinical triage summary drafting, and automated ERP work orders.",
    icon: Workflow,
    color: "#16D3F5",
  },
  {
    title: "Performance Optimization",
    rawNumber: 250,
    prefix: "< ",
    suffix: "ms",
    display: "< 250ms",
    label: "p99 API Response Latency",
    desc: "Edge server-side rendering, distributed Redis caching, and decoupled compute lakehouses.",
    icon: Zap,
    color: "#072C4C",
  },
  {
    title: "Operational Visibility",
    rawNumber: 1.4,
    decimals: 1,
    suffix: "M/s",
    display: "1.4M/s",
    label: "Telemetry Ingestion Rate",
    desc: "Single source of truth Power BI dashboards unifying distributed ERPs, EHRs, and POS streams.",
    icon: BarChart3,
    color: "#0284C7",
  },
  {
    title: "Enterprise AI Enablement",
    rawNumber: 0,
    suffix: "%",
    display: "0%",
    label: "Customer Data Leakage",
    desc: "Private VPC RAG vector engines, domain-tuned LLM agents, and strict PII redaction guardrails.",
    icon: Bot,
    color: "#16D3F5",
  },
];

// Testimonials
const ENTERPRISE_TESTIMONIALS = [
  {
    quote: "CodePlaced delivered in 4 weeks what our internal vendor teams struggled with for over 18 months. The clinical adoption was instantaneous.",
    author: "Dr. Elena Rostova",
    role: "Chief Medical Information Officer",
    company: "MedHealth Regional Health Network",
    industry: "Healthcare",
    outcome: "18,000 hrs saved/year & -42% triage latency",
  },
  {
    quote: "Our engineers can't imagine working without the CodePlaced copilot. It has become our single source of truth across the entire company.",
    author: "David Chen",
    role: "VP of Engineering & Cloud Infrastructure",
    company: "CloudScale Systems",
    industry: "Enterprise AI",
    outcome: "6.4x faster ticket resolution & +38 NPS",
  },
  {
    quote: "CodePlaced gave our plant managers X-ray vision into our machinery. The system caught a critical pump failure in week 2 that saved us over $600K alone.",
    author: "Heinrich Meyer",
    role: "Global Head of Manufacturing Technology",
    company: "Vanguard Industrial Engineering",
    industry: "Manufacturing",
    outcome: "19 failures prevented & $2.8M saved",
  },
];

const AMBIENT_PARTICLES = [
  { x: 8, y: 12, size: 2.5, delay: 0, duration: 8.5 },
  { x: 22, y: 35, size: 3, delay: 1.2, duration: 10 },
  { x: 42, y: 68, size: 2, delay: 2.5, duration: 9 },
  { x: 65, y: 22, size: 3.5, delay: 0.7, duration: 11.5 },
  { x: 82, y: 55, size: 2, delay: 3.1, duration: 8 },
  { x: 92, y: 18, size: 3, delay: 1.8, duration: 10.5 },
];

// =========================================================================
// LIGHTWEIGHT ANIMATED NUMBER COUNTER
// =========================================================================
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplayValue(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, value, duration]);

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

// =========================================================================
// FEATURED ENTERPRISE CASE STUDY SHOWCASE (Fully Clickable Master Section)
// =========================================================================
function FeaturedCaseStudyShowcase({ study }: { study: CaseStudyItem }) {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showcaseRef.current) return;
    const rect = showcaseRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  return (
    <div
      ref={showcaseRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Custom Desktop Floating Cursor Badge ("Open Study") */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-30 hidden lg:flex items-center justify-center rounded-full bg-[#072C4C]/95 text-[#16D3F5] text-[11px] font-mono font-bold tracking-wider uppercase border border-[#16D3F5] shadow-[0_12px_30px_rgba(7,44,76,0.45)] backdrop-blur-md"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          x: "-50%",
          y: "-50%",
          width: 86,
          height: 86,
        }}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={
          isHovered
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.2 }
        }
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <span className="text-center leading-tight">
          Explore<br />Study &rarr;
        </span>
      </motion.div>

      {/* Fully Clickable Anchor Wrapping the Entire Master Card */}
      <Link
        href={`/case-studies/${study.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative rounded-[36px] overflow-hidden bg-white/90 backdrop-blur-md border border-[#072C4C]/[0.08] shadow-md hover:shadow-2xl transition-all duration-500"
        style={{
          transform: isHovered ? "translateY(-6px)" : "translateY(0px)",
          borderColor: isHovered ? "#16D3F5" : "rgba(7,44,76,0.08)",
          boxShadow: isHovered
            ? "0 25px 60px rgba(7,44,76,0.14), 0 0 30px rgba(22,211,245,0.20)"
            : "0 6px 25px rgba(7,44,76,0.04)",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease, border-color 0.5s ease",
        }}
      >
        {/* Subtle Radial Cursor Glow */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-20 rounded-[36px] transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(22, 211, 245, 0.12), transparent 70%)`,
            }}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* 1. Visual Showcase (7 Cols - Slides in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.2, ease: CINEMATIC_EASE }}
            className="lg:col-span-7 relative min-h-[420px] lg:min-h-[500px] overflow-hidden bg-slate-900"
          >
            <motion.img
              src={study.heroImage}
              alt={study.title}
              className="w-full h-full object-cover"
              style={{
                transform: isHovered ? "scale(1.045)" : "scale(1)",
                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            {/* Dynamic Contrast Gradient */}
            <div
              className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
              style={{
                background: isHovered
                  ? "linear-gradient(to top, rgba(7,44,76,0.95) 0%, rgba(7,44,76,0.50) 45%, rgba(7,44,76,0.20) 100%)"
                  : "linear-gradient(to top, rgba(7,44,76,0.90) 0%, rgba(7,44,76,0.40) 45%, rgba(7,44,76,0.15) 100%)",
              }}
            />

            {/* Floating Live Badges */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2.5 z-10">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: 0.3, duration: 0.7, ease: CINEMATIC_EASE }}
                style={{
                  transform: isHovered ? "translateY(-3px)" : "translateY(0px)",
                  transition: "transform 0.4s ease",
                }}
                className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-white/95 backdrop-blur-md text-[#072C4C] border border-white shadow-md"
              >
                18,000+ Records Synced
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: 0.45, duration: 0.7, ease: CINEMATIC_EASE }}
                style={{
                  transform: isHovered ? "translateY(-3px)" : "translateY(0px)",
                  transition: "transform 0.4s ease",
                }}
                className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/95 backdrop-blur-md text-white border border-emerald-400 shadow-md"
              >
                99.99% Reliability
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: 0.6, duration: 0.7, ease: CINEMATIC_EASE }}
                style={{
                  transform: isHovered ? "translateY(-3px)" : "translateY(0px)",
                  transition: "transform 0.4s ease",
                }}
                className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#16D3F5]/95 backdrop-blur-md text-[#072C4C] border border-cyan-300 shadow-md"
              >
                42% Efficiency Gain
              </motion.span>
            </div>

            {/* Bottom Title on Image */}
            <div
              className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10 transition-transform duration-400"
              style={{
                transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
              }}
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                {study.industry} &bull; {study.clientType}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                {study.title}
              </h3>
            </div>
          </motion.div>

          {/* 2. Narrative Content Panel (5 Cols - Slides in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.2, delay: 0.3, ease: CINEMATIC_EASE }}
            className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-white/75 backdrop-blur-xs border-t lg:border-t-0 lg:border-l border-slate-100"
          >
            <div className="space-y-5">
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  Business Challenge
                </div>
                <p className="text-xs sm:text-sm text-[#5B738B] leading-relaxed">
                  {study.problemStatement}
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-slate-200/60">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#16D3F5] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16D3F5]" />
                  Engineering Solution
                </div>
                <p className="text-xs sm:text-sm text-[#5B738B] leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Tech Badges (900ms Stagger In) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, delay: 0.7, ease: CINEMATIC_EASE }}
                className="pt-2"
              >
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Architecture & Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-white border border-slate-200 text-[#072C4C] font-bold shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Outcome Summary & Interactive CTA Banner */}
            <div className="pt-5 border-t border-slate-200/70 flex items-center justify-between">
              <div>
                <div className="text-xl font-black text-[#072C4C] font-mono">
                  {study.metrics[0]?.value}
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">
                  {study.metrics[0]?.label}
                </div>
              </div>

              {/* Secondary CTA Button (Synced with Parent Link Hover) */}
              <div
                className="h-11 px-6 rounded-full text-white font-bold text-xs shadow-md flex items-center gap-2 transition-all duration-300"
                style={{
                  backgroundColor: isHovered ? "#16D3F5" : "#072C4C",
                  color: isHovered ? "#072C4C" : "#ffffff",
                  transform: isHovered ? "scale(1.04)" : "scale(1)",
                }}
              >
                <span>Open Case Study</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-300"
                  style={{
                    transform: isHovered ? "translateX(4px)" : "translateX(0px)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Link>
    </div>
  );
}

// =========================================================================
// ENGINEERING WALL MOSAIC TILE (Storytelling Stagger Sequence)
// =========================================================================
function EngineeringWallTile({
  study,
  index,
}: {
  study: CaseStudyItem;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cinematicCardVariants}
      custom={index} // Sequential 300ms stagger: Card 1 (0s), Card 2 (0.3s), Card 3 (0.6s)...
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full relative group cursor-pointer"
    >
      {/* Custom Desktop Floating Cursor Badge ("View Story") inside Card */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-30 hidden lg:flex items-center justify-center rounded-full bg-[#072C4C]/95 text-[#16D3F5] text-[11px] font-mono font-bold tracking-wider uppercase border border-[#16D3F5] shadow-[0_10px_25px_rgba(7,44,76,0.4)] backdrop-blur-md"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          x: "-50%",
          y: "-50%",
          width: 78,
          height: 78,
        }}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={
          isHovered
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.2 }
        }
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <span className="text-center leading-tight">
          View<br />Story
        </span>
      </motion.div>

      <Link
        href={`/case-studies/${study.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-[32px] overflow-hidden bg-white/90 backdrop-blur-sm border border-[#072C4C]/[0.07] shadow-sm hover:shadow-xl transition-all duration-400 block h-full flex flex-col justify-between"
        style={{
          transform: isHovered
            ? "translateY(-8px) scale(1.015)"
            : "translateY(0px) scale(1)",
          borderColor: isHovered ? "#16D3F5" : "rgba(7,44,76,0.07)",
          boxShadow: isHovered
            ? "0 20px 50px rgba(7,44,76,0.10), 0 0 25px rgba(22,211,245,0.18)"
            : "0 4px 20px rgba(7,44,76,0.03)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* Subtle Cursor-Follow Radial Glow */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-20 rounded-[32px] transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(22, 211, 245, 0.12), transparent 70%)`,
            }}
          />
        )}

        {/* 1. Visual Header (Appears First) */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
          <motion.img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.04 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.2, ease: CINEMATIC_EASE }}
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#072C4C]/95 via-[#072C4C]/35 to-transparent pointer-events-none" />

          {/* Badges Over Image */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-white/95 text-[#072C4C] shadow-sm">
              {study.industry}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#072C4C]/80 text-[#16D3F5] border border-[#16D3F5]/30">
              0{index + 1}
            </span>
          </div>

          {/* 3. Metrics Appear in Sequence */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: index * 0.3 + 0.35, ease: CINEMATIC_EASE }}
            className="absolute bottom-4 left-4 right-4 z-10 text-white flex items-end justify-between"
          >
            <div>
              <div className="text-2xl font-black font-mono text-[#16D3F5] tracking-tight">
                {study.metrics[0]?.value}
              </div>
              <div className="text-[10px] font-mono text-slate-300 uppercase">
                {study.metrics[0]?.label}
              </div>
            </div>

            {/* 4. Arrow / CTA Appears in Sequence */}
            <div
              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-md"
              style={{
                backgroundColor: isHovered ? "#16D3F5" : "rgba(255,255,255,0.2)",
                color: isHovered ? "#072C4C" : "#ffffff",
                transform: isHovered ? "translate(2px, -2px)" : "translate(0, 0)",
              }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* 2. Content Body (Appears 200ms After Image) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, delay: index * 0.3 + 0.2, ease: CINEMATIC_EASE }}
          className="p-7 space-y-4 flex flex-col justify-between flex-grow bg-white/60 backdrop-blur-xs"
        >
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#16D3F5]">
              {study.clientType}
            </span>
            <h3 className="text-xl font-black text-[#072C4C] transition-colors leading-tight line-clamp-2">
              {study.title}
            </h3>
            <p className="text-xs text-[#5B738B] leading-relaxed line-clamp-2">
              {study.shortDescription}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="pt-3 border-t border-slate-100/80 flex flex-wrap gap-1.5">
            {study.technologies.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/80 border border-slate-200/70 text-slate-700 font-bold"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// =========================================================================
// MAIN CASE STUDIES PAGE (Unified Continuous Canvas)
// =========================================================================
export default function CaseStudiesCommandCenterPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies =
    activeFilter === "all"
      ? CASE_STUDIES_DATA
      : CASE_STUDIES_DATA.filter((s) =>
          s.industry.toLowerCase().includes(activeFilter.toLowerCase())
        );

  const flagshipStudy = CASE_STUDIES_DATA[0]; // Healthcare Platform

  return (
    <div
      style={{
        backgroundColor: "#F4F8FB",
      }}
      className="relative min-h-screen text-[#072C4C] selection:bg-[#072C4C] selection:text-white font-sans overflow-x-hidden"
    >
      {/* ========================================================================= */}
      {/* CONTINUOUS AMBIENT DEPTH LAYER (No visible section breaks) */}
      {/* ========================================================================= */}
      
      {/* Top Left Ambient Cyan Glow */}
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] pointer-events-none opacity-80 -z-0"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(0, 195, 255, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Top Right Ambient Blue Glow */}
      <div
        className="absolute top-40 right-0 w-[850px] h-[850px] pointer-events-none opacity-70 -z-0"
        style={{
          background:
            "radial-gradient(circle at 85% 18%, rgba(0, 120, 255, 0.06) 0%, transparent 50%)",
        }}
      />

      {/* Mid-Page Ambient Teal Depth Glow */}
      <div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1000px] pointer-events-none opacity-60 -z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 195, 255, 0.05) 0%, rgba(7, 44, 76, 0.02) 50%, transparent 70%)",
        }}
      />

      {/* Lower Ambient Depth Glow */}
      <div
        className="absolute top-[65%] left-10 w-[900px] h-[900px] pointer-events-none opacity-70 -z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(0, 200, 180, 0.05) 0%, transparent 60%)",
        }}
      />

      {/* Subtle Atmospheric Transition Ribbon */}
      <div
        className="absolute top-[1200px] left-0 right-0 h-[300px] pointer-events-none opacity-60 -z-0"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(0, 180, 255, 0.03), transparent)",
          filter: "blur(80px)",
        }}
      />

      {/* Floating Ambient Micro-Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {AMBIENT_PARTICLES.map((p, idx) => (
          <div
            key={idx}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `particleFloat ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
            className="absolute rounded-full bg-[#16D3F5]/50"
          />
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO: LIVE PROJECT COMMAND CENTER */}
      {/* ========================================================================= */}
      <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-18 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Side: Headline, Narrative & Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/80 text-[#072C4C] border border-[#16D3F5]/40 shadow-xs backdrop-blur-sm"
            >
              <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span>LIVE PROJECT COMMAND CENTER</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.0, delay: 0.1, ease: CINEMATIC_EASE }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#072C4C] leading-[1.08]"
            >
              Real Projects.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #072C4C 0%, #16D3F5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Real Results.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.25, ease: CINEMATIC_EASE }}
              className="text-base sm:text-lg text-[#476077] max-w-xl leading-relaxed"
            >
              Engineering systems that process millions of events, automate operations, and create measurable business impact.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.35, ease: CINEMATIC_EASE }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-1"
            >
              <a
                href="#engineering-wall"
                className="w-full sm:w-auto h-[52px] px-8 rounded-full text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group"
                style={{
                  background: "linear-gradient(90deg, #072C4C 0%, #16D3F5 100%)",
                }}
              >
                <span>Explore Engineering Wall</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto h-[52px] px-8 rounded-full bg-white/90 hover:bg-white text-[#072C4C] font-bold text-sm border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-300 hover:border-[#16D3F5]/50 backdrop-blur-xs"
              >
                <span>Book Strategy Call</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Live Command Center Telemetry Panel */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.2, ease: CINEMATIC_EASE }}
              className="p-6 sm:p-8 rounded-[36px] bg-[#072C4C] text-white border border-[#16D3F5]/30 shadow-2xl space-y-5 relative overflow-hidden"
            >
              {/* Top Bar with Live Telemetry Ticker */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
                  <Activity className="w-4 h-4 text-[#16D3F5]" />
                  <span>ACTIVE TELEMETRY MONITORS</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ALL NODES OPERATIONAL
                </span>
              </div>

              {/* 4 Live Project Telemetry Feeds */}
              <div className="space-y-3 font-mono text-xs">
                {HERO_COMMAND_FEEDS.map((feed, fIdx) => {
                  const FeedIcon = feed.icon;
                  return (
                    <motion.div
                      key={fIdx}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.35 + fIdx * 0.12, ease: CINEMATIC_EASE }}
                      className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#16D3F5]/50 hover:bg-white/10 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                          style={{ background: feed.color }}
                        >
                          <FeedIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-100">{feed.title}</div>
                          <div className="text-[10px] text-slate-400 font-sans">{feed.status}</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-cyan-300 font-bold">{feed.metric}</div>
                        <span className="text-[9px] text-emerald-400 font-sans">Verified</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom SLA Summary */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-300 border-t border-white/10">
                <span>Total Workflows: <strong>1,200+ Live</strong></span>
                <span>Uptime SLA: <strong className="text-emerald-400">99.99%</strong></span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. IMPACT METRICS WALL (Continuous Canvas Flow) */}
      {/* ========================================================================= */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {IMPACT_METRICS_WALL.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cinematicCardVariants}
              custom={idx * 0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="p-5 rounded-2xl bg-white/80 border border-[#072C4C]/[0.06] hover:border-[#16D3F5] hover:shadow-md transition-all text-center space-y-1 backdrop-blur-xs"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#072C4C] font-mono tracking-tight">
                <AnimatedCounter
                  value={stat.num}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-xs font-bold text-[#072C4C]">{stat.label}</div>
              <div className="text-[10px] font-mono text-slate-400">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED TRANSFORMATION (Fully Clickable Master Section) */}
      {/* ========================================================================= */}
      <section id="featured-story" className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto space-y-10">
          
          {/* Section Heading Reveal with Interactive Top-Right Action */}
          <motion.div
            variants={headingRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/80 text-[#072C4C] border border-[#16D3F5]/30 backdrop-blur-xs">
                <Award className="w-3.5 h-3.5 text-[#16D3F5]" />
                <span>FLAGSHIP STORYTELLING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
                Featured Enterprise Case Study
              </h2>
            </div>

            <Link
              href={`/case-studies/${flagshipStudy.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-[#072C4C] hover:text-[#16D3F5] transition-colors group px-4 py-2 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs hover:border-[#16D3F5]/50 backdrop-blur-xs"
            >
              <span>Open Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Fully Clickable Master Showcase Card */}
          <FeaturedCaseStudyShowcase study={flagshipStudy} />

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MAIN PORTFOLIO: THE ENGINEERING WALL (Continuous Flow) */}
      {/* ========================================================================= */}
      <section id="engineering-wall" className="py-16 lg:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          {/* Heading Staggered First */}
          <motion.div
            variants={headingRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/80 text-[#072C4C] border border-[#16D3F5]/30 backdrop-blur-xs">
                <Briefcase className="w-3.5 h-3.5 text-[#16D3F5]" />
                <span>THE ENGINEERING WALL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
                Enterprise Production Portfolio
              </h2>
              <p className="text-base sm:text-lg text-[#5B738B]">
                Interactive visual project tiles. Click any project to inspect its complete architecture blueprint and commercial results.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {INDUSTRY_NAV_PILLS.map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setActiveFilter(pill.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                    activeFilter === pill.id
                      ? "bg-[#072C4C] text-white shadow-md scale-105"
                      : "bg-white/80 text-slate-600 hover:bg-white border border-slate-200/80 backdrop-blur-xs"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* 2x3 Engineering Wall Tile Grid with 300ms Sequential Deliberate Stagger */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, idx) => (
              <EngineeringWallTile key={study.slug} study={study} index={idx} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. RESULTS TIMELINE ("From Challenge To Impact" Continuous Flow) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <motion.div
            variants={headingRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/80 text-[#072C4C] border border-[#16D3F5]/30 backdrop-blur-xs">
              <Workflow className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>DELIVERY LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              From Challenge To Impact
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              A disciplined, transparent delivery framework designed for velocity, security, and measurable commercial outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {RESULTS_TIMELINE.map((stage, sIdx) => {
              const StageIcon = stage.icon;
              return (
                <motion.div
                  key={stage.step}
                  variants={cinematicCardVariants}
                  custom={sIdx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  className="p-8 rounded-[30px] bg-white/80 border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:bg-white hover:shadow-xl transition-all duration-400 space-y-6 flex flex-col justify-between group relative backdrop-blur-xs"
                  style={{
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease",
                  }}
                  whileHover={{ y: -6 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#072C4C] group-hover:bg-[#072C4C] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                        <StageIcon className="w-6 h-6 text-[#16D3F5]" />
                      </div>
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100/90 text-slate-600">
                        {stage.timeline}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-mono font-black text-[#16D3F5]">STAGE {stage.step}</div>
                      <h3 className="text-xl font-black text-[#072C4C] tracking-tight mt-1">
                        {stage.phase}
                      </h3>
                      <p className="text-xs text-[#5B738B] mt-2 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Primary Outcome
                    </div>
                    <div className="text-xs font-mono font-bold text-[#072C4C] mt-1 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{stage.deliverables}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ENGINEERING IMPACT GRID (Continuous Flow) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <motion.div
            variants={headingRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/80 text-[#072C4C] border border-[#16D3F5]/30 backdrop-blur-xs">
              <BarChart3 className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>OUTCOMES ACHIEVED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              Engineering Impact Grid
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              Measurable commercial advantages engineered across our global enterprise portfolio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ENGINEERING_OUTCOMES.map((item, idx) => {
              const ItemIcon = item.icon;
              const rowIndex = Math.floor(idx / 3); // 0 for row 1, 1 for row 2
              return (
                <motion.div
                  key={idx}
                  variants={impactRowVariants}
                  custom={rowIndex}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-[32px] bg-white/90 border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-xl transition-all duration-400 space-y-4 flex flex-col justify-between group backdrop-blur-xs"
                  style={{
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease",
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300"
                        style={{ background: item.color }}
                      >
                        <ItemIcon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black font-mono text-[#072C4C]">
                        <AnimatedCounter
                          value={item.rawNumber}
                          prefix={item.prefix || ""}
                          suffix={item.suffix || ""}
                          decimals={item.decimals || 0}
                        />
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </div>
                      <h3 className="text-xl font-black text-[#072C4C] mt-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#5B738B] mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ENTERPRISE TESTIMONIALS (Continuous Flow) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <motion.div
            variants={headingRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/80 text-[#072C4C] border border-[#16D3F5]/30 backdrop-blur-xs">
              <Quote className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              What Enterprise Leaders Say
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              Direct feedback from Chief Medical Information Officers, VPs of Engineering, and Heads of Technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENTERPRISE_TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                variants={testimonialVariants}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                whileHover={{ y: -5 }}
                className="p-8 sm:p-9 rounded-[32px] bg-white/85 border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:bg-white hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between backdrop-blur-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Verified Client
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#072C4C] italic font-medium leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 space-y-1">
                  <div className="text-sm font-black text-[#072C4C]">{t.author}</div>
                  <div className="text-xs text-[#5B738B]">{t.role} &bull; {t.company}</div>
                  <div className="text-[10px] font-mono text-emerald-600 font-bold pt-1">{t.outcome}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#072C4C] via-[#05223C] to-[#041A2E] text-white relative overflow-hidden mt-8">
        {/* Glow Behind Headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#16D3F5]/14 rounded-full blur-[130px] pointer-events-none" />

        <motion.div
          variants={headingRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/10 text-cyan-300 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#16D3F5]" />
            <span>START YOUR PROJECT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Ready To Engineer Your Next{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16D3F5 0%, #67E8F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              High-Impact System?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a petabyte data lakehouse, an autonomous AI copilot, or a sub-second omnichannel product, CodePlaced delivers production results with guaranteed velocity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[54px] px-9 rounded-full text-[#072C4C] bg-[#16D3F5] hover:bg-cyan-300 font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto h-[54px] px-8 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 flex items-center justify-center transition-all duration-300"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
