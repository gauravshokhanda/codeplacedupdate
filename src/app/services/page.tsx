"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Database,
  TrendingUp,
  Bot,
  ShieldCheck,
  Cloud,
  Award,
  Target,
  Activity,
  BarChart3,
  Search,
  Layers,
  Code2,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { ServiceDetailItem, getPrimaryServiceHref } from "@/lib/servicesData";
import {
  InteractiveServicesShowcase,
  SHOWCASE_SERVICES_DATA,
} from "@/components/InteractiveServicesShowcase";
import { ServicesHeroPipeline } from "@/components/ServicesHeroPipeline";

// =========================================================================
// CONFIGURATION SWITCH:
// Toggle between experimental Appinventiv-inspired InteractiveServicesShowcase
// and the original 2x2 ServiceGatewayCard grid.
// Set to true to test the showcase; set to false to immediately restore original grid.
// =========================================================================
const USE_INTERACTIVE_SHOWCASE = true;

// =========================================================================
// DATA STRUCTURES
// =========================================================================

// Hero Trust Stats
const HERO_TRUST_STATS = [
  { value: "20+", label: "Trusted Clients", detail: "Startups & Enterprises" },
  { value: "10+", label: "Countries Reached", detail: "Global Delivery" },
];

// Delivery Process Steps (6 Steps)
const DELIVERY_STEPS = [
  { num: "01", name: "Discovery", desc: "Technical audit, architecture review & strategic milestone roadmap", icon: Search },
  { num: "02", name: "Architecture", desc: "Scalable system design, API contracts & security guardrails", icon: Target },
  { num: "03", name: "UX Engineering", desc: "Interactive Figma design systems & responsive user journeys", icon: Layers },
  { num: "04", name: "Agile Sprints", desc: "High-velocity 2-week execution cycles with live staging previews", icon: Code2 },
  { num: "05", name: "QA & Hardening", desc: "Automated end-to-end testing, security audits & load benchmarking", icon: ShieldCheck },
  { num: "06", name: "Production Scale", desc: "Zero-downtime deployment, real-time telemetry & proactive 24/7 SLA", icon: Rocket },
];

// Why CodePlaced Benefit Cards (6 Cards in Balanced 3-Column Grid)
const WHY_CODEPLACED = [
  {
    title: "Enterprise Ready",
    tag: "SECURITY & COMPLIANCE",
    desc: "Built with zero-trust architecture, SOC2 Type II controls, and HIPAA compliance from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Architecture",
    tag: "CLOUD NATIVE",
    desc: "Multi-region VPC meshes, autoscaling Kubernetes clusters, and sub-second in-memory caching for 100k+ concurrent users.",
    icon: Cloud,
  },
  {
    title: "Project Ownership",
    tag: "IP TRANSFER",
    desc: "Full intellectual property transfer, impeccably documented codebases, and direct daily communication with senior principal engineers.",
    icon: Award,
  },
  {
    title: "Business-First Thinking",
    tag: "COMMERCIAL IMPACT",
    desc: "Every architectural decision, data model, and marketing campaign is tied directly to measurable revenue, retention, and speed.",
    icon: Target,
  },
  {
    title: "Long-Term SLA Support",
    tag: "24/7 RELIABILITY",
    desc: "Proactive Datadog observability, incident response guarantees under 15 minutes, and continuous platform performance tuning.",
    icon: Activity,
  },
  {
    title: "Data-Driven Decisions",
    tag: "SINGLE SOURCE OF TRUTH",
    desc: "Single source of truth data modeling ensuring your leadership team operates with verified, real-time analytics and predictive forecasts.",
    icon: BarChart3,
  },
];

// Project screenshots (existing case study assets, linked to existing case study pages)
const PROJECT_SCREENSHOTS = [
  {
    slug: "collectiq",
    name: "CollectIQ",
    category: "SaaS / AI Automation",
    summary: "Collections operating system with recovery tracking, workflows and AI insights.",
    image: "/images/case-studies/collectiq/collectiq-collections-dashboard.webp",
    alt: "CollectIQ collections dashboard screenshot",
    fit: "object-cover object-top",
  },
  {
    slug: "progress-partners",
    name: "Progress Partners",
    category: "Data Analytics & BI",
    summary: "Unified ROAS and LTV dashboard built from marketing, subscription and payment data.",
    image: "/images/case-studies/progress-partners/hero-dashboard.webp",
    alt: "Progress Partners business intelligence dashboard screenshot",
    fit: "object-contain object-center",
  },
  {
    slug: "topplaced-ai",
    name: "TopPlaced AI",
    category: "AI Interview Platform",
    summary: "Voice-led AI interview simulator with coding tools, rubrics and proctoring.",
    image: "/images/case-studies/topplaced-ai/topplaced-card-live-interview.webp",
    alt: "TopPlaced AI live interview workspace screenshot",
    fit: "object-contain object-center",
  },
];

// Tech Categories
const TECH_CATEGORIES = ["Frontend", "Backend", "Cloud", "Data", "AI", "Marketing"] as const;
type TechCategory = typeof TECH_CATEGORIES[number];

const TECH_STACK_MAP: Record<TechCategory, { name: string; tag: string; desc: string; icon: string }[]> = {
  Frontend: [
    { name: "React 19", tag: "UI Framework", desc: "Concurrent rendering & modern server components", icon: "⚛️" },
    { name: "Next.js 15", tag: "Edge SSR", desc: "Sub-25ms server rendering & App Router optimizations", icon: "▲" },
    { name: "TypeScript", tag: "Type Safety", desc: "Strict end-to-end type validation & API contracts", icon: "TS" },
    { name: "Tailwind CSS", tag: "Design Tokens", desc: "Modular design systems & utility-first styling", icon: "🎨" },
  ],
  Backend: [
    { name: "Node.js", tag: "Async I/O", desc: "High-concurrency event-driven microservices runtime", icon: "🟢" },
    { name: "Java & Spring", tag: "Enterprise", desc: "Robust typed backend services & transactional safety", icon: "☕" },
    { name: "Python & FastAPI", tag: "High Speed", desc: "High-throughput async APIs & AI orchestrations", icon: "⚡" },
    { name: "PostgreSQL & Redis", tag: "Data Store", desc: "ACID compliance & sub-1ms in-memory caching", icon: "🐘" },
  ],
  Cloud: [
    { name: "AWS", tag: "Multi-Region", desc: "VPC, ECS, Lambda & S3 enterprise cloud mesh", icon: "☁️" },
    { name: "Google Cloud", tag: "GCP Suite", desc: "BigQuery, GKE & Vertex AI cloud solutions", icon: "🌐" },
    { name: "Microsoft Azure", tag: "Hybrid Cloud", desc: "Enterprise IAM, AKS & Azure OpenAI integrations", icon: "🔷" },
    { name: "Docker & K8s", tag: "Containers", desc: "Autoscaling container clusters & zero downtime", icon: "🐳" },
  ],
  Data: [
    { name: "Snowflake", tag: "Lakehouse", desc: "Decoupled compute petabyte data platform", icon: "❄️" },
    { name: "Databricks", tag: "Unified Lake", desc: "Delta Lake & Apache Spark data analytics engine", icon: "🧱" },
    { name: "Power BI", tag: "Executive BI", desc: "Interactive enterprise cockpits & drilldowns", icon: "📊" },
    { name: "dbt Core", tag: "SQL CI/CD", desc: "Medallion data transformation & automated DAG tests", icon: "🛠️" },
  ],
  AI: [
    { name: "OpenAI GPT-4o", tag: "Reasoning", desc: "Autonomous reasoning & task orchestration", icon: "🤖" },
    { name: "Claude 3.5", tag: "Document AI", desc: "Complex document analysis & agent code synthesis", icon: "👁️" },
    { name: "LangChain", tag: "Agent Swarms", desc: "Tool-calling multi-agent router orchestration", icon: "🦜" },
    { name: "Pinecone", tag: "Vector DB", desc: "Sub-50ms hybrid semantic vector retrieval", icon: "🌲" },
  ],
  Marketing: [
    { name: "Google Analytics 4", tag: "Telemetry", desc: "Event-based behavioral tracking & attribution", icon: "📈" },
    { name: "Google Search Console", tag: "SEO Health", desc: "Indexation, keywords & technical health crawls", icon: "🔍" },
    { name: "Segment CDP", tag: "Identity Sync", desc: "Server-side customer data platform bus", icon: "🔄" },
    { name: "Meta & Google Ads", tag: "Paid Funnels", desc: "Algorithmic bidding & high-ROAS acquisition", icon: "🎯" },
  ],
};

// =========================================================================
// SERVICE GATEWAY CARD COMPONENT (ENTERPRISE WHITE SECTION CARD)
// =========================================================================
function ServiceGatewayCard({ service, index }: { service: ServiceDetailItem; index: number }) {
  const ServiceIcon =
    service.num === "01"
      ? Bot
      : service.num === "02"
      ? Code2
      : service.num === "03"
      ? BarChart3
      : service.num === "04"
      ? Database
      : TrendingUp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
      className="h-full flex"
    >
      <div className="w-full rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#00BCD4]/70 p-7 sm:p-8 lg:p-9 flex flex-col justify-between group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="space-y-6">
          {/* Header Row: Clean Icon + Subtle Number */}
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-center justify-center text-neutral-900 relative group-hover:bg-[#00BCD4]/10 group-hover:border-[#00BCD4]/40 group-hover:text-[#00BCD4] transition-colors shrink-0">
              <ServiceIcon className="w-6 h-6 transition-colors" />
              <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#00BCD4]" />
            </div>

            <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-[#00BCD4] px-2.5 py-1 rounded-md bg-[#F7F8FA] border border-[#E5E7EB] transition-colors">
              {service.num}
            </span>
          </div>

          {/* Title, Eyebrow & Positioning */}
          <div className="space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00AFC8] block">
              {service.tagline}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[23px] font-bold text-neutral-900 tracking-tight group-hover:text-[#00BCD4] transition-colors leading-snug">
              {service.title}
            </h3>
            <p className="text-[15px] sm:text-base text-neutral-600 leading-relaxed pt-1">
              {service.positioning}
            </p>
          </div>

          {/* Clean, Spacious Core Capabilities (No Cluttered Pills) */}
          <div className="pt-5 border-t border-[#E5E7EB] space-y-2.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
              {service.slug === "digital-marketing" ? "Key Offerings" : "Core Engineered Capabilities"}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {(service.slug === "digital-marketing"
                ? service.capabilities
                : service.capabilities.slice(0, 4)
              ).map((cap, cIdx) => (
                <div
                  key={cIdx}
                  className="flex items-start gap-2 text-[13px] sm:text-[14px] text-neutral-700 font-medium group/item"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-1.5" />
                  <span className="group-hover/item:text-neutral-950 transition-colors leading-snug">
                    {cap.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Consistent Card Footer: Primary Metric + Explore Action */}
        <div className="pt-6 mt-6 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
          <div>
            <div className="text-xl sm:text-2xl font-black text-neutral-900 font-mono tracking-tight">
              {service.heroMetrics[0]?.value}
            </div>
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
              {service.heroMetrics[0]?.label}
            </div>
          </div>

          <Link
            href={getPrimaryServiceHref(service.slug)}
            className="inline-flex items-center gap-2.5 text-sm font-bold text-neutral-900 hover:text-[#00BCD4] transition-colors group/link"
          >
            <span>Explore Dedicated Page</span>
            <div className="w-8 h-8 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] group-hover/link:bg-[#00BCD4] group-hover/link:border-[#00BCD4] flex items-center justify-center text-neutral-900 group-hover/link:text-black transition-all">
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// =========================================================================
// MAIN SERVICES PAGE COMPONENT
// =========================================================================
export default function ServicesPage() {
  const [activeTechTab, setActiveTechTab] = useState<TechCategory>("Frontend");

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#00BCD4] selection:text-black">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION — SEAMLESS OBSIDIAN (#070B0E) + 4-PILLAR PIPELINE        */}
      {/* ========================================================================= */}
      <section className="relative bg-[#070B0E] border-b border-white/[0.08] text-white min-h-0 lg:min-h-[100svh] flex flex-col justify-center pt-[92px] pb-8 sm:pt-28 sm:pb-10 lg:pt-24 lg:pb-10 overflow-x-clip">
        {/* Seamless Obsidian Ambient Cyan Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[540px] h-[540px] pointer-events-none opacity-20 -z-0"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
            
            {/* Left Column (6 cols): Bold Headline, Readable Copy, CTAs & Stats */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              
              {/* 1. Small Hero Label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase bg-white/[0.03] text-white/80 border border-white/15"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" aria-hidden="true" />
                <span>FULL-STACK DIGITAL PARTNER</span>
              </motion.div>

              {/* 2. Headline with Confident Typography & Electric Cyan Highlight */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
                className="text-[30px] min-[375px]:text-[34px] sm:text-5xl lg:text-[50px] xl:text-[58px] font-black tracking-tight text-white leading-[1.08]"
              >
                <span className="block">
                  Engineering Excellence <span className="text-[#06B6D4]">Built for Scale.</span>
                </span>
                <span className="block text-lg min-[375px]:text-xl sm:text-3xl lg:text-[30px] xl:text-[36px] font-bold text-white/80 mt-1.5 sm:mt-2.5 tracking-tight">
                  Custom Software, Data &amp; AI Systems.
                </span>
              </motion.h1>

              {/* 3. Supporting Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
                className="text-[13.5px] min-[375px]:text-sm sm:text-base lg:text-[17px] text-white/65 max-w-xl leading-relaxed font-normal"
              >
                We engineer enterprise software applications, production AI agents, automated data platforms, and executive BI command centers that deliver measurable business growth.
              </motion.p>

              {/* 4. Action CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
                className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:flex sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-0.5"
              >
                <a
                  href="#four-pillars-gateway"
                  className="h-11 sm:h-12 px-5 sm:px-7 rounded-full bg-[#06B6D4] hover:bg-[#22D3EE] text-[#070B0E] font-extrabold text-[13px] min-[390px]:text-sm sm:text-base shadow-[0_0_24px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2 transition-all active:scale-95 group text-center whitespace-nowrap"
                >
                  <span className="lg:hidden">Explore Our Services</span>
                  <span className="hidden lg:inline">Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" aria-hidden="true" />
                </a>

                <Link
                  href="/contact#contact-hero"
                  className="h-11 sm:h-12 px-5 sm:px-7 rounded-full bg-white/[0.03] hover:bg-white/[0.07] text-white font-bold text-[13px] min-[390px]:text-sm sm:text-base border border-white/15 hover:border-[#06B6D4] flex items-center justify-center transition-all text-center whitespace-nowrap"
                >
                  <span>Send an Inquiry</span>
                </Link>
              </motion.div>

              {/* 5. Approved Trust Stats (Clean 2-column horizontal bar) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.32, ease: "easeOut" }}
                className="pt-4 sm:pt-6 border-t border-white/10 max-w-lg grid grid-cols-2 gap-3 sm:gap-8"
              >
                {HERO_TRUST_STATS.map((stat, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-3 sm:p-0 rounded-lg sm:rounded-none bg-white/[0.03] sm:bg-transparent border border-white/10 sm:border-none space-y-0.5 sm:space-y-1 ${
                      sIdx > 0 ? "sm:border-l sm:border-white/10 sm:pl-8" : ""
                    }`}
                  >
                    <div className="text-xl sm:text-3xl lg:text-[32px] font-black text-white font-mono tracking-tight">{stat.value}</div>
                    <div className="text-[11px] sm:text-xs font-semibold text-white/85">{stat.label}</div>
                    <div className="text-[10px] sm:text-[11px] text-white/65 font-mono">{stat.detail}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Desktop Right Column (6 cols): Interactive 4-Pillar Stepped Pipeline */}
            <div className="hidden lg:flex lg:col-span-6 relative items-center justify-center w-full">
              <ServicesHeroPipeline />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR PILLARS OF ENGINEERING EXCELLENCE — WHITE (#FFFFFF) */}
      {/* ========================================================================= */}
      <section id="four-pillars-gateway" className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-14 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        {USE_INTERACTIVE_SHOWCASE ? (
          <InteractiveServicesShowcase />
        ) : (
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
                CORE DISCIPLINES
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
                Our Pillars of Engineering Excellence
              </h2>
              <p className="text-sm sm:text-lg text-neutral-600 leading-relaxed font-normal">
                Click any service gateway to explore its dedicated production architecture, capabilities, and delivery methodology.
              </p>
            </div>

            {/* Clean Gateway Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {SHOWCASE_SERVICES_DATA.map((svc, idx) => (
                <ServiceGatewayCard key={svc.slug} service={svc} index={idx} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 3. AI SERVICES & AUTONOMOUS AGENTS — PURE BLACK (#000000) */}
      {/* Clean, business-focused presentation matching homepage aesthetic */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-14 lg:py-20 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-2.5">
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              ENTERPRISE INTELLIGENCE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              AI Services & Autonomous Agents
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-neutral-400 leading-relaxed font-normal">
              Practical, private AI solutions engineered to automate operational workflows, unlock organizational knowledge, and drive measurable business efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Visual Column: Clean Premium Agency Visual */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#222222] bg-[#0C0F14] shadow-xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/images/services/ai-automation.webp"
                  alt="CodePlaced Enterprise AI & Automation multi-agent supervisor operations workflow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />
                
                {/* Clean Feature Overlay Badge */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-[#090C12]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/40 flex items-center justify-center text-[#00BCD4]">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Enterprise Vector RAG & Agents</div>
                      <div className="text-[10px] text-neutral-400 font-mono">Private VPC Isolated • Zero Data Retention</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#00BCD4] px-2 py-0.5 rounded bg-black border border-[#00BCD4]/30 hidden sm:inline-block">
                    LIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column: 4 Concise AI Capabilities */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {[
                  {
                    title: "Private VPC Vector RAG",
                    desc: "Sub-50ms hybrid semantic search over internal databases, documents, and codebases with zero data leaks.",
                    icon: Search,
                  },
                  {
                    title: "Autonomous Agent Swarms",
                    desc: "Supervisor orchestrators routing specialized tool-calling agents for research, analysis, and execution.",
                    icon: Bot,
                  },
                  {
                    title: "Document Intelligence",
                    desc: "Automated OCR extraction, invoice parsing, and contract analysis via modern multimodal reasoning models.",
                    icon: Layers,
                  },
                  {
                    title: "Zero-Leak Guardrails",
                    desc: "Automated PII scrubbing, prompt injection defense, and strict SOC2/HIPAA compliance guardrails.",
                    icon: ShieldCheck,
                  },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#00BCD4]/40 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#00BCD4]/10 flex items-center justify-center text-[#00BCD4]">
                          <ItemIcon className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Cyan CTA Button */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Link
                  href="/services/ai-copilots"
                  className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-black font-extrabold text-xs sm:text-sm tracking-tight shadow-md transition-all active:scale-95 whitespace-nowrap"
                >
                  <span>Explore AI Services</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="/contact#contact-hero"
                  className="inline-flex items-center justify-center h-10 sm:h-11 px-5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/10 transition-all whitespace-nowrap"
                >
                  <span>Send an Inquiry</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3b. PROJECT SCREENSHOTS — WHITE (#FFFFFF), AUTHENTIC CASE STUDY ASSETS */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-14 lg:py-16 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
                SELECTED PROJECTS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-neutral-900 leading-tight">
                Products We&apos;ve Built
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#00AFC8] transition-colors group self-start md:self-end pb-1 border-b-2 border-neutral-900/20 hover:border-[#00AFC8]"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {PROJECT_SCREENSHOTS.map((project, pIdx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: pIdx * 0.06, ease: "easeOut" }}
              >
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="group block h-full rounded-xl overflow-hidden bg-white border border-[#E5E7EB] hover:border-[#00BCD4]/60 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full bg-[#0A0D14] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`${project.fit} group-hover:scale-[1.02] transition-transform duration-500`}
                    />
                  </div>
                  <div className="p-4 sm:p-5 space-y-1.5">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#00AFC8] block">
                      {project.category}
                    </span>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#00AFC8] transition-colors leading-snug">
                        {project.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#00BCD4] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOW CODEPLACED DELIVERS PRODUCTION RESULTS — PURE BLACK (#000000) */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-16 lg:py-24 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-2.5">
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              PRODUCTION ROADMAP
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              How CodePlaced Delivers Production Results
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-neutral-400 leading-relaxed font-normal">
              A disciplined, step-by-step engineering roadmap from initial discovery to continuous production scale.
            </p>
          </div>

          {/* 6 Process Cards: Compact 2-Column Grid on Mobile (3 rows of 2), 6 Columns on Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-4 relative items-stretch">
            {DELIVERY_STEPS.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: sIdx * 0.05, ease: "easeOut" }}
                  className="p-3 min-[375px]:p-3.5 sm:p-6 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#00BCD4]/50 hover:bg-[#161616] transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div className="space-y-2 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm min-[375px]:text-base sm:text-xl font-black text-[#00BCD4] font-mono">
                        {step.num}
                      </span>
                      <StepIcon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-[#00BCD4] transition-colors" />
                    </div>

                    <div>
                      <h3 className="text-xs min-[375px]:text-sm sm:text-lg font-bold text-white group-hover:text-[#00BCD4] transition-colors leading-snug">
                        {step.name}
                      </h3>

                      <p className="text-[10.5px] min-[375px]:text-[11.5px] sm:text-[13px] text-neutral-400 leading-snug mt-1 sm:mt-2 line-clamp-3 sm:line-clamp-none">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Step Indicator Arrow between cards */}
                  {sIdx < DELIVERY_STEPS.length - 1 && (
                    <div className="hidden xl:block absolute -right-3 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none z-10">
                      <ChevronRight className="w-4 h-4 text-neutral-600" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY LEADING COMPANIES CHOOSE CODEPLACED — WHITE (#FFFFFF) */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-2.5">
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              THE CODEPLACED ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              Why Leading Companies Choose CodePlaced
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-normal">
              Engineered for velocity, reliability, and measurable business growth.
            </p>
          </div>

          {/* 6 Benefit Cards: Compact 2-Column Grid on Mobile, 3 Columns on Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 items-stretch">
            {WHY_CODEPLACED.map((card, cIdx) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={cIdx}
                  className="p-3 min-[375px]:p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#00BCD4]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-2 sm:space-y-3">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-[#101820] flex items-center justify-center group-hover:border-[#00BCD4]/40 transition-colors">
                      <CardIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#00BCD4]" />
                    </div>

                    <div>
                      <h3 className="text-xs min-[375px]:text-sm sm:text-lg font-bold text-neutral-900 group-hover:text-[#00BCD4] transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-[10.5px] min-[375px]:text-[11.5px] sm:text-sm text-neutral-600 mt-1 sm:mt-2 leading-relaxed line-clamp-3 sm:line-clamp-none font-normal">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PRODUCTION-PROVEN TOOLS & FRAMEWORKS — PURE BLACK (#000000) */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-16 lg:py-24 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-2.5">
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              MODERN TOOLS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              Production-Proven Tools & Frameworks
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-neutral-400 leading-relaxed font-normal">
              Battle-tested frameworks, modern languages, and high-throughput cloud infrastructure.
            </p>
          </div>

          {/* Filter Tabs: Hover on Desktop, Tap on Mobile/Touch */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto w-full pb-2 scrollbar-none sm:justify-center sm:flex-wrap">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onMouseEnter={() => setActiveTechTab(cat)}
                onFocus={() => setActiveTechTab(cat)}
                onClick={() => setActiveTechTab(cat)}
                className={`px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                  activeTechTab === cat
                    ? "bg-[#00BCD4] text-neutral-950 font-black shadow-md scale-105"
                    : "bg-[#111111] text-neutral-300 hover:text-white hover:bg-[#181818] border border-[#222222] hover:border-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Category Cards: Smooth 200-300ms Transition, 2-Column Grid on Mobile, 4 Columns on Desktop */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTechTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 items-stretch"
            >
              {TECH_STACK_MAP[activeTechTab].map((tool) => (
                <div
                  key={tool.name}
                  className="p-3 sm:p-5 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#00BCD4]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base sm:text-lg shrink-0">{tool.icon}</span>
                      <div className="text-xs min-[375px]:text-sm sm:text-base font-bold text-white leading-snug truncate">{tool.name}</div>
                    </div>
                    <p className="text-[10.5px] min-[375px]:text-[11.5px] sm:text-xs text-neutral-400 leading-relaxed font-normal">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
