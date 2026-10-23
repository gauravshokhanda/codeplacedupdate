"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Smartphone,
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
  Cpu,
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

// Connected Tech Ecosystem Capabilities
const TECH_ECOSYSTEM_NODES = [
  {
    id: "software",
    code: "01 // DEV",
    title: "Software Development",
    subtitle: "Custom Web, Mobile & Microservices",
    tech: "Next.js 15 • TypeScript • React 19",
    metric: "Sub-25ms SLA",
    icon: Code2,
    accent: "#00BCD4",
  },
  {
    id: "data",
    code: "02 // DATA",
    title: "Data Engineering",
    subtitle: "Pipelines, Warehousing & Medallion Sync",
    tech: "Snowflake • dbt • Apache Kafka",
    metric: "Automated DAGs",
    icon: Database,
    accent: "#0284C7",
  },
  {
    id: "analytics",
    code: "03 // BI",
    title: "Analytics & BI",
    subtitle: "Executive Cockpits & Predictive Telemetry",
    tech: "Power BI • Tableau • Datadog",
    metric: "Real-Time KPIs",
    icon: BarChart3,
    accent: "#10B981",
  },
  {
    id: "ai",
    code: "04 // AI",
    title: "AI & Automation",
    subtitle: "RAG Copilots, Agent Swarms & Workflows",
    tech: "OpenAI GPT-4o • Claude • Pinecone",
    metric: "Low-Latency Vectors",
    icon: Bot,
    accent: "#00BCD4",
  },
];

// Hero Trust Stats
const HERO_TRUST_STATS = [
  { value: "250+", label: "Projects Delivered", detail: "Global Deployments" },
  { value: "150+", label: "Clients Served", detail: "Startups & Fortune 500" },
  { value: "15+", label: "Industries Served", detail: "Fintech, Health, Retail" },
  { value: "99.9%", label: "Reliability Rate", detail: "Strict SLA Guarantees" },
];

// Delivery Process Steps (6 Steps)
const DELIVERY_STEPS = [
  { num: "01", name: "Discovery", desc: "Requirements gathering, KPI mapping & legacy tech stack audit", icon: Search },
  { num: "02", name: "Planning", desc: "System architecture, OpenAPI specs & sprint roadmap", icon: Target },
  { num: "03", name: "Design", desc: "Tokenized design systems, clickable Figma UX & user flows", icon: Layers },
  { num: "04", name: "Development", desc: "Clean modular code, 2-week agile sprints & PR previews", icon: Code2 },
  { num: "05", name: "Testing", desc: "100k synthetic load tests, security audits & QA sign-off", icon: ShieldCheck },
  { num: "06", name: "Launch", desc: "Zero-downtime cutover, Datadog telemetry & 24/7 SLA", icon: Rocket },
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
      ? Smartphone
      : service.num === "02"
      ? Database
      : service.num === "03"
      ? TrendingUp
      : Bot;

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
// CONNECTED TECHNOLOGY ECOSYSTEM VISUAL (INTERACTIVE ARCHITECTURE NETWORK)
// =========================================================================

interface EcosystemNodeItem {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  badge: string;
  capability: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  desktopClass: string;
  mobileClass: string;
  svgPath: string;
  pulseDuration: string;
}

const ECOSYSTEM_NODES: EcosystemNodeItem[] = [
  {
    id: "software",
    code: "01 // DEV",
    title: "Software Engineering",
    shortTitle: "Software",
    badge: "Next.js 15 • Microservices",
    capability: "Sub-25ms web apps, cloud microservices & scalable backends",
    icon: Code2,
    accent: "#00BCD4",
    desktopClass: "top-[8%] left-[3%]",
    mobileClass: "top-[3%] left-[1%]",
    svgPath: "M 140 100 C 190 115, 220 160, 245 195",
    pulseDuration: "3.2s",
  },
  {
    id: "data",
    code: "02 // DATA",
    title: "Data Engineering",
    shortTitle: "Data",
    badge: "Pipelines • Lakehouse",
    capability: "Petabyte streaming ETL & automated DAG synchronization",
    icon: Database,
    accent: "#0284C7",
    desktopClass: "top-[6%] right-[3%]",
    mobileClass: "top-[3%] right-[1%]",
    svgPath: "M 460 90 C 410 110, 380 160, 355 195",
    pulseDuration: "3.8s",
  },
  {
    id: "analytics",
    code: "03 // BI",
    title: "Analytics & BI",
    shortTitle: "Analytics",
    badge: "Real-Time KPIs",
    capability: "Unified executive cockpits, telemetry & predictive metrics",
    icon: BarChart3,
    accent: "#10B981",
    desktopClass: "bottom-[12%] left-[4%]",
    mobileClass: "bottom-[5%] left-[1%]",
    svgPath: "M 145 365 C 195 350, 220 300, 245 265",
    pulseDuration: "3.5s",
  },
  {
    id: "ai",
    code: "04 // AI",
    title: "AI & Automation",
    shortTitle: "AI & Agents",
    badge: "Autonomous Swarms",
    capability: "Enterprise RAG copilots & adaptive multi-agent swarms",
    icon: Bot,
    accent: "#00BCD4",
    desktopClass: "bottom-[10%] right-[4%]",
    mobileClass: "bottom-[5%] right-[1%]",
    svgPath: "M 455 370 C 405 350, 380 300, 355 265",
    pulseDuration: "4.0s",
  },
];

function InteractiveConnectedEcosystem({ isMobile = false }: { isMobile?: boolean }) {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 12, y: y * 12 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setActiveNode(null);
  };

  const activeItem = ECOSYSTEM_NODES.find((n) => n.id === activeNode);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[620px] lg:max-w-none mx-auto select-none flex items-center justify-center ${
        isMobile ? "aspect-[580/420]" : "aspect-[580/480] sm:aspect-[600/480]"
      }`}
      aria-label="CodePlaced Connected Technology Ecosystem"
    >
      {/* 1. Ambient Luminous Cyan Diffusion Glow */}
      <div
        style={{
          transform: `translate3d(${mouseOffset.x * -0.3}px, ${mouseOffset.y * -0.3}px, 0)`,
        }}
        className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#00BCD4]/15 via-[#0284C7]/5 to-[#00BCD4]/15 blur-3xl pointer-events-none -z-0 transition-transform duration-300"
        aria-hidden="true"
      />

      {/* 2. SVG Connecting Network Backplane with Luminous Cyan Conduits */}
      <svg
        viewBox="0 0 600 460"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
        aria-hidden="true"
      >
        <defs>
          <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Orbital Rings */}
        <circle
          cx="300"
          cy="230"
          r="135"
          fill="none"
          stroke="#1E2838"
          strokeWidth="1"
          strokeDasharray="3 6"
          opacity="0.8"
        />
        <circle
          cx="300"
          cy="230"
          r="92"
          fill="none"
          stroke="#00BCD4"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.35"
        />

        {/* Subtle Horizontal & Vertical Architecture Grid Lines */}
        <line x1="200" y1="230" x2="400" y2="230" stroke="#161D2A" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="300" y1="130" x2="300" y2="330" stroke="#161D2A" strokeWidth="1" strokeDasharray="2 4" />

        {/* Secondary Cross-Connection Data Busses (Telemetry Links) */}
        <path
          d="M 125 125 C 145 190, 145 270, 125 335"
          fill="none"
          stroke="#1A2230"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <path
          d="M 475 115 C 455 185, 455 275, 475 345"
          fill="none"
          stroke="#1A2230"
          strokeWidth="1"
          strokeDasharray="2 4"
        />

        {/* Base Connection Tracks */}
        {ECOSYSTEM_NODES.map((node) => (
          <path
            key={`base-${node.id}`}
            d={node.svgPath}
            fill="none"
            stroke="#202A3C"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        ))}

        {/* Active & Illuminated Cyan Conduit Paths */}
        {ECOSYSTEM_NODES.map((node) => {
          const isActive = activeNode === node.id;
          const isDimmed = activeNode !== null && !isActive;

          return (
            <g key={`conduit-${node.id}`}>
              {/* Luminous Core Conduit */}
              <path
                d={node.svgPath}
                fill="none"
                stroke={isActive ? "#00BCD4" : "#00BCD4"}
                strokeWidth={isActive ? "2.5" : "1.75"}
                opacity={isActive ? 1 : isDimmed ? 0.2 : 0.65}
                filter={isActive ? "url(#cyanGlow)" : undefined}
                className="transition-all duration-300"
              />

              {/* Inward Data Pulse (Node to Core) */}
              <circle
                r={isActive ? 4 : 3}
                fill="#00BCD4"
                filter="url(#cyanGlow)"
                opacity={isDimmed ? 0.2 : 0.95}
              >
                <animateMotion
                  path={node.svgPath}
                  dur={isActive ? "1.6s" : node.pulseDuration}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Secondary Bidirectional Pulse (Core to Node) */}
              <circle
                r={isActive ? 3 : 2}
                fill="#38BDF8"
                opacity={isDimmed ? 0.15 : 0.75}
              >
                <animateMotion
                  path={node.svgPath}
                  dur={isActive ? "1.6s" : node.pulseDuration}
                  begin={isActive ? "0.8s" : "1.6s"}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* Dynamic Junction Pips along the Network */}
        <circle cx="195" cy="148" r="2.5" fill="#00BCD4" opacity="0.6" />
        <circle cx="405" cy="145" r="2.5" fill="#00BCD4" opacity="0.6" />
        <circle cx="198" cy="312" r="2.5" fill="#00BCD4" opacity="0.6" />
        <circle cx="402" cy="315" r="2.5" fill="#00BCD4" opacity="0.6" />
      </svg>

      {/* 3. Central System Core (Connected Digital Product Hub) */}
      <div
        style={{
          transform: `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto transition-transform duration-300"
      >
        <div className="relative w-[160px] sm:w-[185px] p-3 sm:p-3.5 rounded-2xl bg-[#090C12]/95 border border-[#242C3C] backdrop-blur-xl shadow-[0_0_40px_rgba(0,188,212,0.18)] text-center">
          
          {/* Rotating Subtle Radar Orbit */}
          <div className="absolute -inset-2.5 rounded-full border border-dashed border-[#1C2534] animate-[spin_50s_linear_infinite] pointer-events-none" />

          {/* Core Header */}
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#1A202C] text-[9px] sm:text-[10px] font-mono">
            <span className="text-neutral-400">PRODUCT CORE</span>
            <div className="inline-flex items-center gap-1 text-[#00BCD4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Central Layered Hub Emblem */}
          <div className="my-2 relative">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0F1722] to-[#080B10] border border-[#00BCD4]/40 flex items-center justify-center text-[#00BCD4] shadow-[0_0_16px_rgba(0,188,212,0.3)] mx-auto relative group">
              <Cpu className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00BCD4] animate-ping opacity-75" />
            </div>
          </div>

          {/* Dynamic Telemetry Feedback Readout */}
          <div className="min-h-[34px] flex flex-col justify-center">
            {activeItem ? (
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono font-bold text-[#00BCD4] uppercase tracking-wider">
                  SYNC: {activeItem.shortTitle}
                </div>
                <div className="text-[9px] text-neutral-300 font-medium line-clamp-1">
                  {activeItem.badge}
                </div>
              </div>
            ) : (
              <div className="space-y-0.5">
                <div className="text-[9px] sm:text-[10px] font-mono text-neutral-300 uppercase tracking-wider">
                  CONNECTED ECOSYSTEM
                </div>
                <div className="text-[9px] text-neutral-400 font-mono">
                  Software • Data • AI
                </div>
              </div>
            )}
          </div>

          {/* Bottom Telemetry Ticker */}
          <div className="mt-1.5 pt-1.5 border-t border-[#1A202C] flex items-center justify-between text-[9px] font-mono text-neutral-400">
            <span>SLA: 99.9%</span>
            <span className="text-[#00BCD4]">SUB-25ms</span>
          </div>

        </div>
      </div>

      {/* 4. Surrounding Asymmetric Capability Nodes */}
      {ECOSYSTEM_NODES.map((node) => {
        const isActive = activeNode === node.id;
        const isDimmed = activeNode !== null && !isActive;
        const NodeIcon = node.icon;
        const positionClass = isMobile ? node.mobileClass : node.desktopClass;

        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            onClick={() => setActiveNode(isActive ? null : node.id)}
            style={{
              transform: `translate3d(${mouseOffset.x * 1.1}px, ${mouseOffset.y * 1.1}px, 0)`,
            }}
            className={`absolute ${positionClass} z-20 cursor-pointer select-none transition-all duration-300 group ${
              isDimmed ? "opacity-30 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div
              className={`relative rounded-xl bg-[#0C0F17]/95 border backdrop-blur-md px-3 py-2 sm:px-3.5 sm:py-2.5 transition-all duration-300 shadow-xl ${
                isActive
                  ? "border-[#00BCD4] shadow-[0_0_24px_rgba(0,188,212,0.35)] -translate-y-1 bg-[#101626]"
                  : "border-[#222938] hover:border-[#00BCD4]/70 hover:bg-[#121826]"
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isActive
                      ? "bg-[#00BCD4] text-black shadow-[0_0_12px_rgba(0,188,212,0.6)]"
                      : "bg-[#141A26] border border-[#23293A] text-[#00BCD4] group-hover:border-[#00BCD4]/50"
                  }`}
                >
                  <NodeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                      {node.code}
                    </span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? "bg-[#00BCD4] shadow-[0_0_6px_#00BCD4]" : "bg-neutral-600"
                      }`}
                    />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-snug whitespace-nowrap">
                    {node.shortTitle}
                  </h4>
                </div>
              </div>

              {/* Dynamic Capability Tooltip on Hover/Active */}
              {isActive && (
                <div className="absolute left-0 top-full mt-2 w-52 sm:w-60 p-2.5 rounded-xl bg-[#080B11] border border-[#00BCD4]/60 shadow-[0_8px_30px_rgba(0,0,0,0.8)] z-30 pointer-events-none text-[11px] text-neutral-200 leading-snug">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#00BCD4] uppercase tracking-wider mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                    <span>{node.title}</span>
                  </div>
                  <div>{node.capability}</div>
                  <div className="mt-1.5 pt-1.5 border-t border-[#1C212E] text-[10px] font-mono text-[#00BCD4]">
                    {node.badge}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

    </div>
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
      <section className="relative bg-[#000000] border-b border-[#222222] text-white min-h-0 lg:min-h-[100svh] flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-20 lg:pb-8 overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div
          className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[540px] h-[540px] pointer-events-none opacity-15 -z-0"
          style={{
            background: "radial-gradient(circle, rgba(0,188,212,0.2) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            
            {/* Left Column (52% / 7 cols): Bold Headline, Readable Copy, CTAs & Stats */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              {/* 1. Small Hero Label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#111111] text-slate-200 border border-[#262626]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00BCD4]" />
                <span>FULL-STACK DIGITAL PARTNER</span>
              </motion.div>

              {/* 2. Headline with Confident 58-66px Desktop Typography & Cyan Highlight */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
                className="text-[34px] xs:text-[38px] sm:text-5xl lg:text-[56px] xl:text-[64px] font-black tracking-tight text-white leading-[1.06]"
              >
                <span className="block">
                  Build. Scale. <span className="text-[#00BCD4]">Transform.</span>
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-bold text-neutral-200 mt-2 sm:mt-2.5 tracking-tight">
                  Digital Products With Confidence.
                </span>
              </motion.h1>

              {/* 3. Supporting Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
                className="text-sm sm:text-base lg:text-[17px] text-neutral-300 max-w-xl leading-relaxed font-normal"
              >
                From custom applications and analytics platforms to AI-powered solutions and digital growth systems, we help organizations design, build, and scale technology that delivers measurable business impact.
              </motion.p>

              {/* 4. Action CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-0.5"
              >
                <a
                  href="#four-pillars-gateway"
                  className="h-11 sm:h-12 px-7 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-sm sm:text-base shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/contact#contact-hero"
                  className="h-11 sm:h-12 px-7 rounded-full bg-[#111111] hover:bg-[#181818] text-white font-bold text-sm sm:text-base border border-[#262626] hover:border-[#00BCD4]/50 flex items-center justify-center transition-all"
                >
                  <span>Book Strategy Call</span>
                </Link>
              </motion.div>

              {/* 5. Mobile Technology Visual (Strictly between CTAs and Stats on mobile) */}
              <div className="block lg:hidden pt-3 pb-2">
                <InteractiveConnectedEcosystem isMobile />
              </div>

              {/* 6. Verified Trust Stats (Clean 2x2 grid on mobile, horizontal row with dividers on desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.32, ease: "easeOut" }}
                className="pt-5 sm:pt-6 border-t border-[#222222] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
              >
                {HERO_TRUST_STATS.map((stat, sIdx) => (
                  <div
                    key={sIdx}
                    className={`space-y-0.5 sm:space-y-1 ${
                      sIdx > 0 ? "sm:border-l sm:border-[#222222] sm:pl-5" : ""
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl lg:text-[32px] font-black text-white font-mono tracking-tight">{stat.value}</div>
                    <div className="text-xs font-semibold text-neutral-300">{stat.label}</div>
                    <div className="text-[11px] text-neutral-400 font-mono">{stat.detail}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Desktop Right Column: Interactive Technology Solutions Ecosystem Visual (48% / 5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:flex lg:col-span-5 relative items-center justify-end w-full"
            >
              <InteractiveConnectedEcosystem />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FOUR PILLARS OF ENGINEERING EXCELLENCE — WHITE (#FFFFFF) */}
      {/* ========================================================================= */}
      <section id="four-pillars-gateway" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        {USE_INTERACTIVE_SHOWCASE ? (
          <InteractiveServicesShowcase />
        ) : (
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
                CORE DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
                Four Pillars Of Engineering Excellence
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
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
      {/* 3. HOW CODEPLACED DELIVERS PRODUCTION RESULTS — PURE BLACK (#000000) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              PRODUCTION ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              How CodePlaced Delivers Production Results
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
              A disciplined, step-by-step engineering roadmap from initial discovery to continuous production scale.
            </p>
          </div>

          {/* 6 Process Cards in 1 Row on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 relative items-stretch">
            {DELIVERY_STEPS.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: sIdx * 0.05, ease: "easeOut" }}
                  className="p-5 sm:p-6 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#00BCD4]/50 hover:bg-[#161616] transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-[#00BCD4] font-mono">
                        {step.num}
                      </span>
                      <StepIcon className="w-5 h-5 text-neutral-400 group-hover:text-[#00BCD4] transition-colors" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#00BCD4] transition-colors">
                        {step.name}
                      </h3>

                      <p className="text-[13px] text-neutral-400 leading-relaxed mt-2">
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
      {/* 4. WHY LEADING COMPANIES CHOOSE CODEPLACED — WHITE (#FFFFFF) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              THE CODEPLACED ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              Why Leading Companies Choose CodePlaced
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Engineered for velocity, reliability, and measurable business growth.
            </p>
          </div>

          {/* 6 Benefit Cards in Balanced 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {WHY_CODEPLACED.map((card, cIdx) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={cIdx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: cIdx * 0.05, ease: "easeOut" }}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#00BCD4]/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-5 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-neutral-900 flex items-center justify-center group-hover:bg-[#00BCD4]/10 group-hover:border-[#00BCD4]/40 group-hover:text-[#00BCD4] transition-colors">
                        <CardIcon className="w-6 h-6 transition-colors" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00AFC8]">
                        {card.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#00BCD4] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-[15px] text-neutral-600 mt-2.5 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PRODUCTION-PROVEN TOOLS & FRAMEWORKS — PURE BLACK (#000000) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              MODERN TOOLS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              Production-Proven Tools & Frameworks
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
              Battle-tested frameworks, modern languages, and high-throughput cloud infrastructure.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechTab(cat)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold transition-all duration-200 cursor-pointer ${
                  activeTechTab === cat
                    ? "bg-[#00BCD4] text-neutral-950 font-black shadow-md scale-105"
                    : "bg-[#111111] text-neutral-300 hover:text-white hover:bg-[#181818] border border-[#222222] hover:border-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {TECH_STACK_MAP[activeTechTab].map((tool, tIdx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: tIdx * 0.04 }}
                className="p-6 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#00BCD4]/50 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{tool.icon}</span>
                      <div className="text-base font-bold text-white">{tool.name}</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black text-[#00BCD4] border border-[#262626] font-semibold">
                      {tool.tag}
                    </span>
                  </div>
                  <p className="text-[13px] text-neutral-400 leading-relaxed mt-3">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FINAL CTA SECTION — WHITE BACKGROUND (#FFFFFF) WITH PREMIUM BLACK CARD */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1240px] mx-auto rounded-2xl sm:rounded-3xl bg-[#000000] border border-[#222222] p-10 sm:p-14 lg:p-18 text-center text-white relative overflow-hidden shadow-2xl">
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

            <div className="max-w-2xl mx-auto relative z-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#00BCD4]" />
                <span>START YOUR NEXT SPRINT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] text-white">
                Technology That Turns Ideas{" "}
                <span className="text-[#00BCD4]">
                  Into Impact.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed font-normal pt-1">
                From product engineering and AI systems to analytics and growth platforms, we build digital experiences that scale.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact#contact-hero"
                  className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-sm sm:text-base shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/case-studies"
                  className="w-full sm:w-auto h-12 px-8 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-sm sm:text-base border border-neutral-700 flex items-center justify-center transition-all"
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
