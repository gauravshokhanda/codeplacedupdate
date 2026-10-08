"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Briefcase,
  Boxes,
  ChevronRight,
  ExternalLink,
  Target,
  Rocket,
  Search,
  Workflow,
  Cpu,
  ArrowUpRight,
  Cloud,
  BarChart3,
  Award,
  Layers,
  Check,
} from "lucide-react";
import { SERVICES_DATA, ServiceDetailItem } from "@/lib/servicesData";

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
  { value: "150+", label: "Clients Served", detail: "Startups & Fortune 500" },
  { value: "15+", label: "Industries Served", detail: "Fintech, Health, Retail" },
  { value: "99.9%", label: "Reliability Rate", detail: "Strict SLA Guarantees" },
];

// Delivery Process Steps
const DELIVERY_STEPS = [
  { num: "01", name: "Discovery", desc: "Requirements gathering, KPI mapping & legacy tech stack audit", icon: Search },
  { num: "02", name: "Planning", desc: "System architecture, OpenAPI specs & sprint roadmap", icon: Target },
  { num: "03", name: "Design", desc: "Tokenized design systems, clickable Figma UX & user flows", icon: Layers },
  { num: "04", name: "Development", desc: "Clean modular code, 2-week agile sprints & PR previews", icon: Code2 },
  { num: "05", name: "Testing", desc: "100k synthetic load tests, security audits & QA sign-off", icon: ShieldCheck },
  { num: "06", name: "Launch", desc: "Zero-downtime cutover, Datadog telemetry & 24/7 SLA", icon: Rocket },
];

// Linear-Style Bento Cards
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

const AMBIENT_PARTICLES = [
  { x: 10, y: 15, size: 2.5, delay: 0, duration: 8 },
  { x: 25, y: 40, size: 3, delay: 1.5, duration: 10 },
  { x: 45, y: 20, size: 2, delay: 2.2, duration: 9 },
  { x: 70, y: 60, size: 3.5, delay: 0.8, duration: 11 },
  { x: 85, y: 25, size: 2.5, delay: 3.1, duration: 8.5 },
  { x: 92, y: 75, size: 3, delay: 1.8, duration: 10.5 },
];

// =========================================================================
// INTERACTIVE MAGNETIC 3D TILT SERVICE CARD COMPONENT
// =========================================================================
function InteractiveServiceGatewayCard({ service, index }: { service: ServiceDetailItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 2-4 degrees tilt
    const rX = ((y - centerY) / centerY) * -3;
    const rY = ((x - centerX) / centerX) * 3;

    setRotateX(rX);
    setRotateY(rY);

    // Glow position in percentage
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const ServiceIcon =
    service.num === "01"
      ? Smartphone
      : service.num === "02"
      ? Database
      : service.num === "03"
      ? TrendingUp
      : Bot;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? "translateY(-8px)" : "translateY(0)"}`,
          transition: isHovered ? "transform 0.1s ease-out, box-shadow 0.3s ease" : "transform 0.5s ease-out, box-shadow 0.5s ease",
        }}
        className="relative h-full rounded-[36px] bg-white border border-[#072C4C]/[0.08] shadow-xl hover:shadow-[0_25px_60px_rgba(22,211,245,0.18)] hover:border-[#16D3F5] transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
      >
        {/* Dynamic Cursor Spotlight Radial Glow */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
            style={{
              background: `radial-gradient(circle 350px at ${glowPos.x}% ${glowPos.y}%, rgba(22,211,245,0.14), transparent 80%)`,
            }}
          />
        )}

        {/* Ambient Corner Accent */}
        <div
          className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-15 group-hover:opacity-35 transition-opacity pointer-events-none"
          style={{ background: service.color }}
        />

        <Link
          href={`/services/${service.slug}`}
          className="p-8 sm:p-10 flex flex-col justify-between h-full space-y-8 relative z-10 block"
        >
          {/* Header Row: Icon + Number */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                style={{ background: service.color }}
              >
                <ServiceIcon className="w-8 h-8" />
              </div>

              <span className="text-base font-mono font-black text-[#16D3F5] px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-100">
                {service.num}
              </span>
            </div>

            {/* Title & Statement */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#16D3F5]">
                {service.tagline}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#072C4C] tracking-tight group-hover:text-[#0B3A62] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5B738B] leading-relaxed">
                {service.positioning}
              </p>
            </div>

            {/* 4–6 Key Capabilities Chips */}
            <div className="space-y-2 pt-2">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Key Engineered Capabilities
              </div>
              <div className="flex flex-wrap gap-2">
                {service.capabilities.slice(0, 5).map((cap, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 rounded-xl text-xs font-mono bg-[#F8FCFE] border border-slate-200/80 text-slate-700 font-bold group-hover:border-[#16D3F5]/50 group-hover:bg-white transition-colors"
                  >
                    {cap.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Outcome Metric + CTA Gateway */}
          <div className="pt-6 border-t border-slate-200/70 flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-xl font-black text-[#072C4C] font-mono tracking-tight">
                {service.heroMetrics[0]?.value}
              </div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                {service.heroMetrics[0]?.label}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#072C4C] group-hover:text-[#16D3F5] transition-colors">
              <span>Explore Dedicated Page</span>
              <div className="w-9 h-9 rounded-full bg-[#E8F7FC] flex items-center justify-center group-hover:bg-[#072C4C] group-hover:text-white transition-all shadow-xs">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
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
    <div
      style={{
        backgroundColor: "#F4FAFD",
      }}
      className="relative min-h-screen text-[#072C4C] selection:bg-[#072C4C] selection:text-white font-sans overflow-x-hidden"
    >
      {/* Background Dynamic Mesh Glow */}
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
      {/* 1. HERO SECTION */}
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
                href="#four-pillars-gateway"
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

            {/* Trust Row */}
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

          {/* Right Side: 3D Orbital Hub */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[500px]">
            {/* Concentric Pulse Rings */}
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

            {/* Orbit SVG Rings */}
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
              <span className="text-[10px] font-mono text-slate-300">Service Core</span>
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
      {/* 2. FOUR PILLARS GATEWAY (Large 2x2 Interactive 3D Magnetic Cards) */}
      {/* ========================================================================= */}
      <section id="four-pillars-gateway" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
        <div className="max-w-[1280px] mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8F7FC] text-[#072C4C] border border-[#16D3F5]/30">
              <Boxes className="w-3.5 h-3.5 text-[#16D3F5]" />
              <span>CORE DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#072C4C]">
              Four Pillars Of Engineering Excellence
            </h2>
            <p className="text-base sm:text-lg text-[#5B738B]">
              Click any service gateway to explore its dedicated production architecture, capabilities, and delivery methodology.
            </p>
          </div>

          {/* Clean 2x2 Interactive Gateway Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {SERVICES_DATA.map((svc, idx) => (
              <InteractiveServiceGatewayCard key={svc.slug} service={svc} index={idx} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DELIVERY ROADMAP (6 Connected Steps) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#F4FAFD]">
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
                  className="p-6 rounded-3xl bg-white border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F7FC] text-[#072C4C] font-mono font-black text-sm flex items-center justify-center shadow-xs group-hover:bg-[#072C4C] group-hover:text-white transition-colors">
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
      {/* 4. WHY CODEPLACED (Linear-Style Bento Grid) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-white">
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
                  className={`p-8 sm:p-9 rounded-[32px] bg-[#F8FCFE] border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:bg-white hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between group ${card.span}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#072C4C] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
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
      {/* 5. TECHNOLOGY ECOSYSTEM */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#072C4C]/[0.06] bg-[#F4FAFD]">
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
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
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
                className="p-6 rounded-2xl bg-white border border-[#072C4C]/[0.08] hover:border-[#16D3F5] hover:shadow-lg transition-all space-y-3"
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
      {/* 6. FINAL CTA SECTION */}
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
