"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
import { SERVICES_DATA, ServiceDetailItem } from "@/lib/servicesData";
import { InteractiveServicesShowcase } from "@/components/InteractiveServicesShowcase";

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
  { value: "250+", label: "Projects Delivered", detail: "Global Deployments" },
  { value: "150+", label: "Clients Served", detail: "Startups & Fortune 500" },
  { value: "15+", label: "Industries Served", detail: "Fintech, Health, Retail" },
  { value: "99.9%", label: "Reliability Rate", detail: "Strict SLA Guarantees" },
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
      ? TrendingUp
      : Database;

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
              Core Engineered Capabilities
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {service.capabilities.slice(0, 4).map((cap, cIdx) => (
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
            href={`/services/${service.slug}`}
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
      {/* 1. HERO SECTION — PURE BLACK (#000000, FULL VIEWPORT 100SVH ON DESKTOP) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#000000] border-b border-[#222222] text-white min-h-0 lg:min-h-[100svh] flex flex-col justify-center pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-24 lg:pb-10 overflow-x-clip">
        {/* Subtle Ambient Backlight */}
        <div
          className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[540px] h-[540px] pointer-events-none opacity-15 -z-0"
          style={{
            background: "radial-gradient(circle, rgba(0,188,212,0.2) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
            
            {/* Left Column (52% / 7 cols): Bold Headline, Readable Copy, CTAs & Stats */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-5 text-left">
              
              {/* 1. Small Hero Label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase bg-[#111111] text-slate-200 border border-[#262626]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00BCD4]" />
                <span>FULL-STACK DIGITAL PARTNER</span>
              </motion.div>

              {/* 2. Headline with Confident 58-66px Desktop Typography & Cyan Highlight */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
                className="text-[28px] xs:text-[32px] sm:text-5xl lg:text-[56px] xl:text-[64px] font-black tracking-tight text-white leading-[1.08]"
              >
                <span className="block">
                  Engineering Excellence <span className="text-[#00BCD4]">Built for Scale.</span>
                </span>
                <span className="block text-xl xs:text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-bold text-neutral-200 mt-1.5 sm:mt-2.5 tracking-tight">
                  Custom Software, Data & AI Systems.
                </span>
              </motion.h1>

              {/* 3. Supporting Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
                className="text-xs xs:text-sm sm:text-base lg:text-[17px] text-neutral-300 max-w-xl leading-relaxed font-normal"
              >
                We engineer enterprise software applications, production AI agents, automated data platforms, and executive BI command centers that deliver measurable business growth.
              </motion.p>

              {/* 4. Action CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-0.5"
              >
                <a
                  href="#four-pillars-gateway"
                  className="h-10 sm:h-12 px-6 sm:px-7 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-base shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group text-center"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/contact#contact-hero"
                  className="h-10 sm:h-12 px-6 sm:px-7 rounded-full bg-[#111111] hover:bg-[#181818] text-white font-bold text-xs sm:text-base border border-[#262626] hover:border-[#00BCD4]/50 flex items-center justify-center transition-all text-center"
                >
                  <span>Send an Inquiry</span>
                </Link>
              </motion.div>

              {/* Mobile Hero Banner Image: Visible below CTAs, contained & responsive without excessive height */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.28, ease: "easeOut" }}
                className="block lg:hidden my-3 sm:my-5 w-full"
              >
                <div className="relative w-full max-w-[640px] mx-auto rounded-2xl p-1 sm:p-1.5 bg-gradient-to-b from-[#141B26] to-[#0A0D14] border border-[#223044] shadow-[0_0_35px_rgba(0,188,212,0.18)]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00BCD4]/20 via-[#0284C7]/20 to-[#00BCD4]/10 rounded-2xl blur-lg opacity-60 pointer-events-none -z-10" />
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#05070A] border border-white/5">
                    <Image
                      src="/images/services/services-hero-team.jpg"
                      alt="CodePlaced Connected Engineering Architecture: AI & Automation, Software Development, Data Analytics, Data Engineering"
                      fill
                      sizes="(max-width: 1024px) 100vw, 640px"
                      priority
                      className="object-cover object-[40%_center] select-none"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 5. Verified Trust Stats (Clean 2x2 grid on mobile, horizontal row with dividers on desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.32, ease: "easeOut" }}
                className="pt-4 sm:pt-6 border-t border-[#222222] grid grid-cols-2 sm:grid-cols-4 gap-2.5 xs:gap-3.5 sm:gap-6"
              >
                {HERO_TRUST_STATS.map((stat, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-2.5 sm:p-0 rounded-lg sm:rounded-none bg-[#0D0D0D] sm:bg-transparent border border-white/5 sm:border-none space-y-0.5 sm:space-y-1 ${
                      sIdx > 0 ? "sm:border-l sm:border-[#222222] sm:pl-5" : ""
                    }`}
                  >
                    <div className="text-xl sm:text-3xl lg:text-[32px] font-black text-white font-mono tracking-tight">{stat.value}</div>
                    <div className="text-[11px] sm:text-xs font-semibold text-neutral-300">{stat.label}</div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-400 font-mono">{stat.detail}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Desktop Right Column: Services Hero Banner Visual (48% / 5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:flex lg:col-span-5 relative items-center justify-center xl:justify-end w-full"
            >
              <div className="relative w-full rounded-2xl p-1.5 bg-gradient-to-b from-[#141B26] to-[#0A0D14] border border-[#223044] shadow-[0_0_50px_rgba(0,188,212,0.18)] hover:border-[#00BCD4]/60 transition-all duration-300 group">
                {/* Subtle Cyan Ambient Glow behind image */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00BCD4]/25 via-[#0284C7]/20 to-[#00BCD4]/15 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity -z-10 pointer-events-none" />

                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#05070A] border border-white/5">
                  <Image
                    src="/images/services/services-hero-team.jpg"
                    alt="CodePlaced Four Core Engineering Services — AI & Automation, Software Development, Data Analytics, Data Engineering"
                    fill
                    sizes="(max-width: 1280px) 45vw, 600px"
                    priority
                    className="object-cover object-[38%_center] select-none"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FOUR PILLARS OF ENGINEERING EXCELLENCE — WHITE (#FFFFFF) */}
      {/* ========================================================================= */}
      <section id="four-pillars-gateway" className="scroll-mt-24 sm:scroll-mt-28 py-10 sm:py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        {USE_INTERACTIVE_SHOWCASE ? (
          <InteractiveServicesShowcase />
        ) : (
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
                CORE DISCIPLINES
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
                Four Pillars Of Engineering Excellence
              </h2>
              <p className="text-sm sm:text-lg text-neutral-600 leading-relaxed font-normal">
                Click any service gateway to explore its dedicated production architecture, capabilities, and delivery methodology.
              </p>
            </div>

            {/* Original Clean 2x2 Gateway Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {SERVICES_DATA.map((svc, idx) => (
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
      <section className="py-10 sm:py-16 lg:py-20 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
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
                  <span className="text-[10px] font-mono font-bold text-[#00BCD4] px-2 py-0.5 rounded bg-black border border-[#00BCD4]/30 hidden xs:inline-block">
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
              <div className="pt-1 flex items-center gap-3">
                <Link
                  href="/services/ai-copilots"
                  className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-6 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-black font-extrabold text-xs sm:text-sm tracking-tight shadow-md transition-all active:scale-95"
                >
                  <span>Explore AI Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact#contact-hero"
                  className="inline-flex items-center justify-center h-10 sm:h-11 px-5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/10 transition-all"
                >
                  <span>Send an Inquiry</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOW CODEPLACED DELIVERS PRODUCTION RESULTS — PURE BLACK (#000000) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 xs:gap-3 sm:gap-4 relative items-stretch">
            {DELIVERY_STEPS.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: sIdx * 0.05, ease: "easeOut" }}
                  className="p-3 xs:p-3.5 sm:p-6 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#00BCD4]/50 hover:bg-[#161616] transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div className="space-y-2.5 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm xs:text-base sm:text-xl font-black text-[#00BCD4] font-mono">
                        {step.num}
                      </span>
                      <StepIcon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-[#00BCD4] transition-colors" />
                    </div>

                    <div>
                      <h3 className="text-xs xs:text-sm sm:text-lg font-bold text-white group-hover:text-[#00BCD4] transition-colors leading-snug">
                        {step.name}
                      </h3>

                      <p className="text-[10.5px] xs:text-[11.5px] sm:text-[13px] text-neutral-400 leading-snug mt-1 sm:mt-2 line-clamp-3 sm:line-clamp-none">
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
      <section className="py-10 sm:py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          
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
                  className="p-3 xs:p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#00BCD4]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-2 sm:space-y-3">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-[#101820] flex items-center justify-center group-hover:border-[#00BCD4]/40 transition-colors">
                      <CardIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#00BCD4]" />
                    </div>

                    <div>
                      <h3 className="text-xs xs:text-sm sm:text-lg font-bold text-neutral-900 group-hover:text-[#00BCD4] transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-[10.5px] xs:text-[11.5px] sm:text-sm text-neutral-600 mt-1 sm:mt-2 leading-relaxed line-clamp-3 sm:line-clamp-none font-normal">
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
      <section className="py-10 sm:py-16 lg:py-24 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
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

          {/* Filter Tabs: Horizontally Scrollable on Mobile, Centered Wrap on Desktop */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto w-full pb-2 scrollbar-none sm:justify-center sm:flex-wrap">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat}
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

          {/* Active Category Cards: Compact 2-Column Grid on Mobile, 4 Columns on Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 items-stretch">
            {TECH_STACK_MAP[activeTechTab].map((tool) => (
              <div
                key={tool.name}
                className="p-3 sm:p-5 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#00BCD4]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-base sm:text-lg shrink-0">{tool.icon}</span>
                    <div className="text-xs xs:text-sm sm:text-base font-bold text-white leading-snug truncate">{tool.name}</div>
                  </div>
                  <p className="text-[10.5px] xs:text-[11.5px] sm:text-xs text-neutral-400 leading-relaxed font-normal">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CTA SECTION — WHITE BACKGROUND (#FFFFFF) WITH PREMIUM BLACK CARD */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 bg-[#FFFFFF] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1240px] mx-auto rounded-2xl sm:rounded-3xl bg-[#000000] border border-[#222222] p-6 xs:p-8 sm:p-14 lg:p-18 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Subtle Cyan Grid Accent */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#00BCD4]" />
                <span>START YOUR NEXT SPRINT</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] text-white">
                Technology That Turns Ideas{" "}
                <span className="text-[#00BCD4]">
                  Into Impact.
                </span>
              </h2>

              <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed font-normal pt-0.5 sm:pt-1">
                From product engineering and AI systems to analytics and growth platforms, we build digital experiences that scale.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  href="/contact#contact-hero"
                  className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-base shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group text-center"
                >
                  <span>Send an Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/case-studies"
                  className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-base border border-neutral-700 flex items-center justify-center transition-all text-center"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
