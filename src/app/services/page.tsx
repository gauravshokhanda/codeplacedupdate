"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Smartphone,
  Database,
  TrendingUp,
  Bot,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Code2,
  Server,
  Activity,
  Users,
  Clock,
  Briefcase,
  Globe2,
  Lock,
  Boxes,
  Terminal,
  ChevronRight,
  ExternalLink,
  Target,
  FileCheck,
  Rocket,
  LineChart,
  Radio,
  Search,
  FileCode2,
  Video,
  Layers3,
  Workflow,
  Monitor,
  Share2,
  PieChart,
  Shield,
  Palette,
  Eye,
  CheckCheck,
  Award,
  Gauge,
  Cpu,
  Flame,
  ArrowUpRight,
  Filter,
  Check,
  Building2,
  Lightbulb,
  Cloud,
  BarChart3,
  CpuIcon,
  Layers,
  CheckCircle,
  Network,
  GitBranch,
  RefreshCw,
} from "lucide-react";

// =========================================================================
// DATA STRUCTURES
// =========================================================================

// Hero Orbit Nodes
const HERO_ORBIT_NODES = [
  { id: "apps", label: "App & Web", category: "iOS, Android & Next.js", icon: Smartphone, angle: 0, radius: 155, color: "#16D3F5" },
  { id: "data", label: "Data Engineering", category: "Snowflake & dbt", icon: Database, angle: 90, radius: 155, color: "#0284C7" },
  { id: "growth", label: "Digital Marketing", category: "SEO, AEO & Ads", icon: TrendingUp, angle: 180, radius: 155, color: "#10B981" },
  { id: "ai", label: "AI Services", category: "RAG & LLM Agents", icon: Bot, angle: 270, radius: 155, color: "#16D3F5" },
];

// Hero Trust Stats
const HERO_TRUST_STATS = [
  { value: "250+", label: "Projects Delivered", detail: "Global Deployments" },
  { value: "150+", label: "Clients Served", detail: "Startups to Fortune 500" },
  { value: "15+", label: "Industries Served", detail: "Fintech, Health, Retail" },
  { value: "99.9%", label: "Reliability Rate", detail: "Production SLA" },
];

// 4 Pillars Overview Cards (Taller, Richer, Glow Hover)
const FOUR_PILLARS = [
  {
    num: "01",
    id: "service-01",
    title: "App & Web Development",
    tagline: "Build products designed for scale",
    desc: "Custom web applications, native mobile apps, and multi-tenant SaaS platforms engineered with sub-second API speeds.",
    icon: Smartphone,
    color: "#16D3F5",
    gradient: "from-[#16D3F5]/20 to-transparent",
    metric: "< 250ms Response",
    metricLabel: "p99 Edge Latency",
    techList: ["Next.js 15", "Flutter", "FastAPI", "React 19"],
  },
  {
    num: "02",
    id: "service-02",
    title: "Data Engineering & Analytics",
    tagline: "Turn complex data into advantage",
    desc: "Petabyte-scale Snowflake lakehouses, automated dbt ETL pipelines, and real-time executive Power BI cockpits.",
    icon: Database,
    color: "#0284C7",
    gradient: "from-[#0284C7]/20 to-transparent",
    metric: "1.4M+ Rows/s",
    metricLabel: "Streaming Throughput",
    techList: ["Snowflake", "dbt Core", "Kafka", "Power BI"],
  },
  {
    num: "03",
    id: "service-03",
    title: "Digital & Social Marketing",
    tagline: "Drive high-impact commercial growth",
    desc: "Programmatic SEO, Answer Engine Optimization (AEO/GEO), Segment CDP sync, and high-ROAS paid acquisition.",
    icon: TrendingUp,
    color: "#10B981",
    gradient: "from-[#10B981]/20 to-transparent",
    metric: "+300% Growth",
    metricLabel: "Engagement & ROAS",
    techList: ["Segment CDP", "GA4 Attribution", "AEO / GEO", "Meta Ads"],
  },
  {
    num: "04",
    id: "service-04",
    title: "AI Services & Agents",
    tagline: "Automate complex business workflows",
    desc: "Private enterprise RAG, tool-calling multi-agent swarms, and self-healing automated workflows with zero data leaks.",
    icon: Bot,
    color: "#16D3F5",
    gradient: "from-[#16D3F5]/25 to-transparent",
    metric: "< 400ms",
    metricLabel: "Vector Inference",
    techList: ["OpenAI GPT-4o", "Claude 3.5", "Pinecone", "LangChain"],
  },
];

// Delivery Process Steps
const DELIVERY_STEPS = [
  { num: "01", name: "Discovery", desc: "Requirements gathering, KPI mapping & legacy tech stack audit", icon: Search },
  { num: "02", name: "Planning", desc: "System architecture, OpenAPI specs & sprint roadmap", icon: Target },
  { num: "03", name: "Design", desc: "Tokenized design systems, clickable Figma UX & user flows", icon: Palette },
  { num: "04", name: "Development", desc: "Clean modular code, 2-week agile sprints & PR previews", icon: Code2 },
  { num: "05", name: "Testing", desc: "100k synthetic load tests, security audits & QA sign-off", icon: ShieldCheck },
  { num: "06", name: "Launch", desc: "Zero-downtime cutover, Datadog telemetry & 24/7 SLA", icon: Rocket },
];

// Modern Linear/Vercel Style Bento Cards
const WHY_CODEPLACED = [
  {
    title: "Enterprise Ready",
    tag: "SECURITY & COMPLIANCE",
    desc: "Built with zero-trust architecture, SOC2 Type II controls, and HIPAA compliance from day one.",
    icon: ShieldCheck,
    span: "lg:col-span-2",
    badge: "SOC2 & HIPAA",
  },
  {
    title: "Scalable Architecture",
    tag: "CLOUD NATIVE",
    desc: "Multi-region VPC meshes, autoscaling Kubernetes clusters, and sub-second in-memory caching for 100k+ concurrent users.",
    icon: Cloud,
    span: "lg:col-span-1",
    badge: "100k Concurrency",
  },
  {
    title: "Project Ownership",
    tag: "IP TRANSFER",
    desc: "Full intellectual property transfer, impeccably documented codebases, and direct daily communication with senior principal engineers.",
    icon: Award,
    span: "lg:col-span-1",
    badge: "100% IP Ownership",
  },
  {
    title: "Business-First Thinking",
    tag: "COMMERCIAL IMPACT",
    desc: "Every architectural decision, data model, and marketing campaign is tied directly to measurable revenue, retention, and speed.",
    icon: Target,
    span: "lg:col-span-2",
    badge: "Revenue Aligned",
  },
  {
    title: "Long-Term SLA Support",
    tag: "24/7 RELIABILITY",
    desc: "Proactive Datadog observability, incident response guarantees under 15 minutes, and continuous platform performance tuning.",
    icon: Activity,
    span: "lg:col-span-2",
    badge: "15-Min Response SLA",
  },
  {
    title: "Data-Driven Decisions",
    tag: "SINGLE SOURCE OF TRUTH",
    desc: "Single source of truth data modeling ensuring your leadership team operates with verified, real-time analytics and predictive forecasts.",
    icon: BarChart3,
    span: "lg:col-span-1",
    badge: "Real-Time BI",
  },
];

// Tech Stack Categories
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

const AMBIENT_PARTICLES = [
  { x: 10, y: 15, size: 2.5, delay: 0, duration: 8 },
  { x: 25, y: 40, size: 3, delay: 1.5, duration: 10 },
  { x: 45, y: 20, size: 2, delay: 2.2, duration: 9 },
  { x: 70, y: 60, size: 3.5, delay: 0.8, duration: 11 },
  { x: 85, y: 25, size: 2.5, delay: 3.1, duration: 8.5 },
  { x: 92, y: 75, size: 3, delay: 1.8, duration: 10.5 },
];

export default function ServicesShowcasePage() {
  const [activeTechTab, setActiveTechTab] = useState<TechCategory>("Frontend");

  return (
    <div
      style={{
        backgroundColor: "#F4FAFD",
      }}
      className="relative min-h-screen text-[#072C4C] selection:bg-[#072C4C] selection:text-white font-sans overflow-x-hidden"
    >
      {/* Dynamic Background Aurora Mesh */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none opacity-70 -z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(22,211,245,0.15) 0%, rgba(7,44,76,0.04) 50%, transparent 80%)",
        }}
      />

      {/* Floating Particles */}
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
            className="absolute rounded-full bg-[#16D3F5]/60"
          />
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dynamic Orbit + Expanding Pulse Rings + Counter Animations) */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Headline, Copy, Buttons & Animated Trust Row */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/40 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>FULL-STACK DIGITAL PARTNER</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#072C4C] leading-[1.08]"
            >
              Build. Scale.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #072C4C 0%, #16D3F5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Transform.
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#072C4C]/90">
                Digital Products With Confidence.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-[#476077] max-w-xl leading-relaxed"
            >
              From custom applications and analytics platforms to AI-powered solutions and digital growth systems, we help organizations design, build, and scale technology that delivers measurable business impact.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <a
                href="#services-overview"
                className="w-full sm:w-auto h-[52px] px-8 rounded-full text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group"
                style={{
                  background: "linear-gradient(90deg, #072C4C 0%, #16D3F5 100%)",
                }}
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto h-[52px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#072C4C] font-bold text-sm border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-300 hover:border-[#16D3F5]/50"
              >
                <span>Book Strategy Call</span>
              </Link>
            </motion.div>

            {/* Animated Trust Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="pt-6 border-t border-[#072C4C]/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {HERO_TRUST_STATS.map((stat, sIdx) => (
                <div key={sIdx} className="space-y-0.5">
                  <div className="text-2xl font-black text-[#072C4C] font-mono tracking-tight">{stat.value}</div>
                  <div className="text-xs font-bold text-[#072C4C]/80">{stat.label}</div>
                  <div className="text-[10px] text-[#5B738B] font-mono">{stat.detail}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Orbital Animation + Expanding Pulse Rings */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[500px]">
            {/* Soft Expanding Pulse Rings */}
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0.05, 0.35] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-72 h-72 rounded-full border-2 border-[#16D3F5]/40 pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1.1, 1.6, 1.1], opacity: [0.2, 0.02, 0.2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-72 h-72 rounded-full border border-[#072C4C]/20 pointer-events-none"
            />

            {/* Ambient Backlight */}
            <div className="absolute w-80 h-80 bg-[#16D3F5]/18 rounded-full blur-[100px] pointer-events-none" />

            {/* Orbit SVG Ring */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <circle
                cx="50%"
                cy="50%"
                r="155"
                fill="none"
                stroke="#16D3F5"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="opacity-35 animate-spin"
                style={{ animationDuration: "60s" }}
              />
              <circle
                cx="50%"
                cy="50%"
                r="225"
                fill="none"
                stroke="#072C4C"
                strokeWidth="1"
                strokeDasharray="8 8"
                className="opacity-20 animate-spin"
                style={{ animationDuration: "90s", animationDirection: "reverse" }}
              />
            </svg>

            {/* Center Glowing Hub */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-36 h-36 rounded-3xl bg-gradient-to-br from-[#072C4C] via-[#0B3A62] to-[#041C33] text-white border-2 border-[#16D3F5]/70 shadow-[0_0_50px_rgba(22,211,245,0.35)] flex flex-col items-center justify-center text-center p-3.5 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-400/20 text-[#16D3F5] flex items-center justify-center mb-1 shadow-inner">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase font-black tracking-wider text-cyan-300">CodePlaced</span>
              <span className="text-[10px] font-mono text-slate-300">Hub Core</span>
            </motion.div>

            {/* 4 Orbiting Badges */}
            {HERO_ORBIT_NODES.map((node, idx) => {
              const IconComp = node.icon;
              const rad = (node.angle * Math.PI) / 180;
              const xPos = Math.cos(rad) * node.radius;
              const yPos = Math.sin(rad) * node.radius;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: [xPos, xPos + 6 * Math.cos(rad + 1), xPos],
                    y: [yPos, yPos + 6 * Math.sin(rad + 1), yPos],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    delay: idx * 0.35,
                    ease: "easeInOut",
                  }}
                  className="absolute z-20 cursor-default"
                  style={{
                    transform: `translate(${xPos}px, ${yPos}px)`,
                  }}
                >
                  <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#072C4C]/[0.08] shadow-lg shadow-sky-950/8 hover:border-[#16D3F5] hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-xs shrink-0"
                      style={{ background: node.color }}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs font-black text-[#072C4C] leading-tight">
                        {node.label}
                      </div>
                      <div className="text-[9px] font-mono text-[#5B738B]">{node.category}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FOUR PILLARS SECTION (Taller 240-280px Cards, Hover Lift 12px, Glow, Rotations) */}
      {/* ========================================================================= */}
      <section id="services-overview" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
        <div className="max-w-[1280px] mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              <Boxes className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              Four Pillars Of Engineering Excellence
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              Everything needed to build, scale, automate, and grow modern businesses.
            </p>
          </div>

          {/* 4 High-Impact Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {FOUR_PILLARS.map((pillar, pIdx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: pIdx * 0.1, ease: "easeOut" }}
                >
                  <a
                    href={`#${pillar.id}`}
                    className="relative min-h-[300px] p-8 rounded-[30px] bg-[#F8FCFE] border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:bg-white hover:shadow-[0_20px_40px_rgba(22,211,245,0.12)] hover:-translate-y-3 transition-all duration-300 flex flex-col justify-between space-y-6 h-full group overflow-hidden"
                  >
                    {/* Background Subtle Gradient Glow */}
                    <div
                      className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-10 group-hover:opacity-35 transition-opacity"
                      style={{ background: pillar.color }}
                    />

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                          style={{ background: pillar.color }}
                        >
                          <PillarIcon className="w-7 h-7" />
                        </div>
                        <span className="text-sm font-mono font-black text-[#16D3F5] px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100">
                          {pillar.num}
                        </span>
                      </div>

                      <div>
                        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#16D3F5]">
                          {pillar.tagline}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#072C4C] tracking-tight mt-1 group-hover:text-[#0B3A62] transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-[#5B738B] mt-2 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between relative z-10">
                      <div>
                        <div className="text-sm font-black text-[#072C4C] font-mono">{pillar.metric}</div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{pillar.metricLabel}</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#072C4C] group-hover:text-[#16D3F5] transition-colors">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICE SECTION 1: APP & WEB DEVELOPMENT (Real Engineering Dashboard) */}
      {/* ========================================================================= */}
      <section id="service-01" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] relative">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Description, Metrics & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-[#E8F7FC] text-[#16D3F5] border border-cyan-100">
              SERVICE 01 • FULL-STACK ENGINEERING
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C] leading-tight">
              Build Digital Products That Scale With Your Business
            </h2>

            <p className="text-sm sm:text-base text-[#5B738B] leading-relaxed">
              We design and build resilient, user-centric web applications, native mobile apps, and multi-tenant SaaS platforms engineered with sub-second API speeds and modern design systems.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xl font-black text-[#072C4C] font-mono">&lt; 250ms</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Response Time</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xl font-black text-cyan-600 font-mono">60 FPS</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Interfaces</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xl font-black text-emerald-600 font-mono">99.9%</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Reliability</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#072C4C] hover:bg-[#0B3A62] text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Discuss Your Product</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Live Engineering Architecture Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#072C4C] text-white border border-[#16D3F5]/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
                  <Server className="w-4 h-4 text-[#16D3F5]" />
                  <span>CLIENT & API GATEWAY TOPOLOGY</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE MESH
                </span>
              </div>

              {/* Multi-Tier Interactive Blocks */}
              <div className="space-y-3 font-mono text-xs">
                {/* Client Layer */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-cyan-300 font-bold flex items-center justify-between">
                      <span>Mobile (iOS / Android)</span>
                      <span className="text-[10px] text-emerald-400">60 FPS</span>
                    </div>
                    <p className="text-[10px] text-slate-300 font-sans">Flutter native compilation & offline sync</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-cyan-300 font-bold flex items-center justify-between">
                      <span>Web (Next.js 15)</span>
                      <span className="text-[10px] text-emerald-400">12ms Edge</span>
                    </div>
                    <p className="text-[10px] text-slate-300 font-sans">App Router SSR & concurrent hydration</p>
                  </div>
                </div>

                {/* API Gateway & SaaS Mesh */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-500/30 space-y-2">
                  <div className="flex items-center justify-between text-cyan-200 font-bold">
                    <span>FastAPI & Node.js Async Core</span>
                    <span className="text-[10px] text-slate-400">&lt; 250ms p99</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-300 text-center font-sans">
                    <span className="p-2 rounded-lg bg-black/40 border border-white/5">Multi-Tenant RBAC</span>
                    <span className="p-2 rounded-lg bg-black/40 border border-white/5">GraphQL API</span>
                    <span className="p-2 rounded-lg bg-black/40 border border-white/5">Admin Cockpits</span>
                  </div>
                </div>

                {/* Databases & Storage */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="font-bold text-slate-200">PostgreSQL + Redis Cache</div>
                      <div className="text-[10px] text-slate-400 font-sans">Multi-AZ replicas & sub-1ms session caching</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/20">Synced</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICE SECTION 2: DATA ENGINEERING & ANALYTICS (Live Pipeline Flow) */}
      {/* ========================================================================= */}
      <section id="service-02" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Live Medallion Architecture Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#041C33] text-white border border-[#0284C7]/40 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-sky-300">
                  <Activity className="w-4 h-4 text-[#0284C7]" />
                  <span>MEDALLION LAKEHOUSE ETL FLOW</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">1.4M rows/sec</span>
              </div>

              {/* Medallion Pipeline Stages */}
              <div className="space-y-3 font-mono text-xs">
                {/* Bronze */}
                <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">BRONZE</span>
                    <div>
                      <div className="font-bold text-amber-200">Raw Data Ingestion</div>
                      <div className="text-[10px] text-slate-400 font-sans">Kafka Streams &bull; Webhooks &bull; Postgres CDC</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-300">Lossless Raw</span>
                </div>

                {/* Silver */}
                <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-400/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 rounded bg-slate-400/20 text-slate-200 font-bold text-[10px]">SILVER</span>
                    <div>
                      <div className="font-bold text-slate-200">dbt SQL Transformations</div>
                      <div className="text-[10px] text-slate-400 font-sans">Deduplication &bull; Schema Tests &bull; Quality Hardening</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-300">dbt Tested</span>
                </div>

                {/* Gold */}
                <div className="p-3.5 rounded-2xl bg-yellow-950/20 border border-yellow-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 font-bold text-[10px]">GOLD</span>
                    <div>
                      <div className="font-bold text-yellow-200">Snowflake Dimensional Marts</div>
                      <div className="text-[10px] text-slate-400 font-sans">Star schemas &bull; Pre-aggregated high-speed queries</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-yellow-300">18x Speedup</span>
                </div>

                {/* BI Cockpits */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-950 to-cyan-950 border border-cyan-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="font-bold text-cyan-200">Executive Power BI & Looker</div>
                      <div className="text-[10px] text-slate-400 font-sans">Sub-second query response &bull; Automated board reporting</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400">Live BI Sync</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading, Description, Metrics & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 text-left order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-sky-50 text-[#0284C7] border border-sky-100">
              SERVICE 02 • CLOUD LAKEHOUSES & BI
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C] leading-tight">
              Turn Your Data Into A Business Advantage
            </h2>

            <p className="text-sm sm:text-base text-[#5B738B] leading-relaxed">
              We design enterprise-grade Snowflake data platforms, automated ETL data transformation pipelines, and executive dashboards that unify your operational silos into a single source of truth.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#F8FCFE] border border-slate-200/80 shadow-xs">
                <div className="text-xl font-black text-[#072C4C] font-mono">1.4M+</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Rows Processed</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F8FCFE] border border-slate-200/80 shadow-xs">
                <div className="text-xl font-black text-blue-600 font-mono">40%</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Faster Reporting</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F8FCFE] border border-slate-200/80 shadow-xs">
                <div className="text-xl font-black text-emerald-600 font-mono">Real-Time</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Dashboards</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#072C4C] hover:bg-[#0B3A62] text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Modernize Your Data</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SERVICE SECTION 3: DIGITAL & SOCIAL MARKETING (Attribution Funnel) */}
      {/* ========================================================================= */}
      <section id="service-03" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] relative">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Description, Metrics & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-emerald-50 text-[#10B981] border border-emerald-100">
              SERVICE 03 • DEMAND & GROWTH
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C] leading-tight">
              Build Your Brand. Reach Your Audience. Drive Growth.
            </h2>

            <p className="text-sm sm:text-base text-[#5B738B] leading-relaxed">
              We engineer full-funnel digital marketing systems combining programmatic SEO, Answer Engine Optimization (AEO/GEO), Segment CDP customer data routing, and algorithmic paid acquisition.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xl font-black text-emerald-600 font-mono">300%</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Engagement Growth</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xl font-black text-[#072C4C] font-mono">Lower</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Acquisition Cost</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xl font-black text-cyan-600 font-mono">Higher</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Lead Quality</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#072C4C] hover:bg-[#0B3A62] text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Accelerate Your Growth</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Acquisition & Attribution Cockpit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#082920] text-white border border-[#10B981]/40 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-300">
                  <TrendingUp className="w-4 h-4 text-[#10B981]" />
                  <span>CLOSED-LOOP REVENUE ATTRIBUTION</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  REAL-TIME ROAS
                </span>
              </div>

              {/* Attribution Funnel Stats */}
              <div className="space-y-3 font-mono text-xs">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                    <div className="text-[10px] text-emerald-300">PAID CHANNELS</div>
                    <div className="text-lg font-black text-white">4.8x ROAS</div>
                    <div className="text-[9px] text-slate-400 font-sans">Meta & Google Ads</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                    <div className="text-[10px] text-emerald-300">ORGANIC & AEO</div>
                    <div className="text-lg font-black text-white">+240% YoY</div>
                    <div className="text-[9px] text-slate-400 font-sans">ChatGPT & GEO SEO</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                    <div className="text-[10px] text-emerald-300">RETENTION</div>
                    <div className="text-lg font-black text-white">68% LTV</div>
                    <div className="text-[9px] text-slate-400 font-sans">Lifecycle Nurture</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs text-emerald-300">
                    <span>Segment CDP Identity Resolution</span>
                    <span>100% Deterministic</span>
                  </div>
                  <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 w-[94%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Anonymous Visitor</span>
                    <span>CRM Lead Sync</span>
                    <span>Closed Revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SERVICE SECTION 4: AI SERVICES (True Showcase: Moving Grid, Nodes, Flow) */}
      {/* ========================================================================= */}
      <section id="service-04" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#072C4C] text-white relative overflow-hidden">
        {/* Animated Cyber Grid */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#16D3F5 1px, transparent 1px), linear-gradient(90deg, #16D3F5 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="max-w-[1280px] mx-auto space-y-16 relative z-10">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/15">
              SERVICE 04 • ENTERPRISE AI & AGENTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Operationalize AI Across Products And Business Workflows
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We engineer enterprise-grade private RAG knowledge engines, autonomous multi-agent swarms, and bespoke generative AI applications that securely automate high-friction operational processes.
            </p>
          </div>

          {/* Autonomous Multi-Agent Swarm Diagram */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#051C33]/90 border border-cyan-500/40 shadow-[0_0_50px_rgba(22,211,245,0.15)] space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
                <Bot className="w-4 h-4 text-[#16D3F5]" />
                <span>AUTONOMOUS MULTI-AGENT SWARM ARCHITECTURE</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                ZERO DATA LEAKS
              </span>
            </div>

            {/* Visual Flow Topology */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-1.5">
                <div className="text-cyan-300 font-bold flex items-center justify-between">
                  <span>01. Supervisor</span>
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <p className="text-[10px] text-slate-300 font-sans">Intent parsing, task planning & multi-agent routing</p>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-1.5">
                <div className="text-cyan-300 font-bold flex items-center justify-between">
                  <span>02. Vector RAG</span>
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <p className="text-[10px] text-slate-300 font-sans">Pinecone semantic search over internal documentation</p>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-1.5">
                <div className="text-cyan-300 font-bold flex items-center justify-between">
                  <span>03. Tool Sandbox</span>
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <p className="text-[10px] text-slate-300 font-sans">Sandboxed SQL queries, API calls & deterministic execution</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-1.5">
                <div className="text-emerald-300 font-bold flex items-center justify-between">
                  <span>04. Guardrails</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-[10px] text-slate-300 font-sans">PII redaction, hallucination defense & HIPAA privacy</p>
              </div>
            </div>
          </div>

          {/* AI Metrics & CTA Banner */}
          <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-wrap items-center gap-8 font-mono">
              <div>
                <div className="text-2xl font-black text-cyan-300">&lt; 400ms</div>
                <div className="text-[10px] text-slate-400 uppercase">Inference</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div>
                <div className="text-2xl font-black text-emerald-400">99.9%</div>
                <div className="text-[10px] text-slate-400 uppercase">Uptime</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div>
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="text-[10px] text-slate-400 uppercase">Availability</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="h-12 px-8 rounded-full bg-[#16D3F5] hover:bg-cyan-300 text-[#072C4C] font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all duration-300 self-start md:self-auto"
            >
              <span>Build Custom AI Solution</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. DELIVERY PROCESS (Connected Horizontal Timeline + Staggered Animations) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
        <div className="max-w-[1280px] mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              <Workflow className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>PRODUCTION ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              How CodePlaced Delivers Production Results
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              A disciplined, step-by-step engineering roadmap from initial discovery to continuous production scale.
            </p>
          </div>

          {/* 6 Connected Steps with Timeline Stagger */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {DELIVERY_STEPS.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: sIdx * 0.08, ease: "easeOut" }}
                  className="p-6 rounded-3xl bg-[#F8FCFE] border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#072C4C] font-mono font-black text-sm flex items-center justify-center shadow-xs group-hover:bg-[#072C4C] group-hover:text-white transition-colors">
                        {step.num}
                      </div>
                      <StepIcon className="w-4 h-4 text-[#16D3F5]" />
                    </div>
                    <h3 className="text-lg font-black text-[#072C4C]">{step.name}</h3>
                    <p className="text-xs text-[#5B738B] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WHY CODEPLACED (Linear/Vercel Style Bento Grid) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#F4FAFD]">
        <div className="max-w-[1280px] mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>THE CODEPLACED ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              Why Leading Companies Choose CodePlaced
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              Engineered for velocity, reliability, and measurable business growth.
            </p>
          </div>

          {/* 6 Modern Bento Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {WHY_CODEPLACED.map((card, cIdx) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={cIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: cIdx * 0.08, ease: "easeOut" }}
                  className={`p-8 sm:p-9 rounded-[32px] bg-white border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between group ${card.span}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#E8F7FC] text-[#072C4C] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CardIcon className="w-6 h-6 text-[#16D3F5]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                        {card.badge}
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        {card.tag}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#072C4C] mt-1">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-[#5B738B] mt-2 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. TECHNOLOGY STACK (Category Glass Panels) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              <Cpu className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>MODERN TOOLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              Production-Proven Tools & Frameworks
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              Battle-tested frameworks, modern languages, and high-throughput cloud infrastructure.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechTab(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                  activeTechTab === cat
                    ? "bg-[#072C4C] text-white shadow-md scale-105"
                    : "bg-[#F4FAFD] text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK_MAP[activeTechTab].map((tool, tIdx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: tIdx * 0.05 }}
                className="p-6 rounded-2xl bg-[#F8FCFE] border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:bg-white hover:shadow-lg transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{tool.icon}</span>
                    <div className="text-sm font-black text-[#072C4C]">{tool.name}</div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-50 text-[#072C4C] border border-cyan-100 font-bold">
                    {tool.tag}
                  </span>
                </div>
                <p className="text-xs text-[#5B738B] leading-relaxed">{tool.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CASE STUDY SECTION (Strong Visual Hierarchy: 70/30 Split) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#F4FAFD]">
        <div className="max-w-[1280px] mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
                <Briefcase className="w-3.5 h-3.5 text-[#16D3F5]" />
                <span>REAL OUTCOMES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
                Proven Engineering In Production
              </h2>
              <p className="text-base sm:text-lg text-[#5B738B]">
                Discover how we engineered mission-critical platforms for fast-growing enterprises.
              </p>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#072C4C] hover:text-[#16D3F5] transition-colors group"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Featured Case Study Grid (65% / 35% Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Large Featured Card (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-7 p-8 sm:p-10 rounded-[32px] bg-white border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-2xl transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-cyan-50 text-[#072C4C] border border-cyan-100">
                    FEATURED CASE STUDY • HEALTHCARE & AI
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">99.99% Reliability</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#072C4C] tracking-tight">
                  Healthcare Analytics Platform & AI Triage Engine
                </h3>
                <p className="text-sm text-[#5B738B] leading-relaxed">
                  Engineered a HIPAA-compliant Snowflake lakehouse with automated dbt transformations and real-time clinical triage assistant, unifying EHR silos across 40+ medical facilities.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                <div>
                  <div className="text-xl font-black text-[#072C4C] font-mono">14.2M</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Patient Records</div>
                </div>
                <div>
                  <div className="text-xl font-black text-blue-600 font-mono">&lt; 400ms</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Query Speed</div>
                </div>
                <div>
                  <div className="text-xl font-black text-emerald-600 font-mono">100%</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">HIPAA Compliant</div>
                </div>
              </div>
            </motion.div>

            {/* 2 Side Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="p-7 rounded-3xl bg-white border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-xl transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-sky-50 text-[#072C4C]">
                    RETAIL & E-COMMERCE
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">+340% Conversions</span>
                </div>
                <h4 className="text-lg font-black text-[#072C4C]">Retail Recommendation Engine</h4>
                <p className="text-xs text-[#5B738B] leading-relaxed">
                  Real-time vector search and personalized recommendations boosting checkout conversions by 3.4x.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="p-7 rounded-3xl bg-white border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-xl transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-50 text-[#072C4C]">
                    SUPPLY CHAIN
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">Zero Stockouts</span>
                </div>
                <h4 className="text-lg font-black text-[#072C4C]">Multi-Store Sync Platform</h4>
                <p className="text-xs text-[#5B738B] leading-relaxed">
                  Sub-50ms inventory synchronization across 200+ retail storefronts and warehouse ERP hubs.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA (Animated Gradient, Floating Glow & Polished Copy) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#072C4C] via-[#05223C] to-[#041A2E] text-white relative overflow-hidden">
        {/* Glow Behind Headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#16D3F5]/14 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/10 text-cyan-300 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#16D3F5]" />
            <span>START YOUR PROJECT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Technology That Turns{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16D3F5 0%, #67E8F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ideas Into Impact.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From product engineering and AI systems to analytics and growth platforms, we build digital experiences that scale.
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
              href="/case-studies"
              className="w-full sm:w-auto h-[54px] px-8 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 flex items-center justify-center transition-all duration-300"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
