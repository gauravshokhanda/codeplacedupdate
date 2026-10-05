"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Search,
  BookOpen,
  FileText,
  Download,
  Calendar,
  Clock,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Database,
  Cloud,
  Layers,
  BarChart3,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  ChevronRight,
  Filter,
  Check,
  Star,
  Users,
} from "lucide-react";
import { ArticleModal } from "@/components/ArticleModal";
import { BlogPost } from "@/types";

// =========================================================================
// DATA STRUCTURES
// =========================================================================

const CATEGORIES = [
  "All",
  "AI & Automation",
  "Data Engineering",
  "Analytics",
  "Cloud",
  "Product Engineering",
  "Case Studies",
  "Reports",
];

const FEATURED_REPORT: BlogPost = {
  id: "state-of-enterprise-ai-2026",
  title: "The State of Enterprise AI Adoption in 2026",
  excerpt:
    "How organizations are moving from AI experimentation to production-ready AI systems and measurable business outcomes.",
  category: "AI & Automation",
  author: {
    name: "Siddharth Verma",
    role: "Lead AI Architect",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
  },
  date: "Oct 2026",
  readTime: "12 min read",
  coverGradient: "from-[#082F49] via-[#0F4C81] to-[#14B8C4]",
  content: [
    "In 2026, enterprise leaders are no longer asking if generative AI and LLMs have utility; they are asking how to operationalize multi-agent systems with deterministic reliability, sub-200ms response latencies, and rigorous data privacy boundaries.",
    "Our research examines over 100 enterprise implementations across Healthcare, FinTech, and Logistics. We analyze the architectural shifts from naive vector lookups to hybrid retrieval (RRF + BM25), domain fine-tuning on proprietary data lakehouses, and the rise of autonomous agent swarms with self-healing reflection loops.",
    "This benchmark report details executive decision frameworks, security guardrails against prompt injection, and how engineering teams achieve positive ROI within the first 60 days of deployment.",
  ],
};

const LATEST_INSIGHTS: (BlogPost & { image: string })[] = [
  {
    id: "building-data-platforms-snowflake",
    title: "Building Modern Data Platforms with Snowflake",
    excerpt:
      "A deep dive into architecting zero-maintenance data pipelines with zero-copy cloning, automated dbt transforms, and row-level governance.",
    category: "Data Engineering",
    author: {
      name: "Prajjwal Rathi",
      role: "Principal Data Engineer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    },
    date: "Sep 28, 2026",
    readTime: "8 min read",
    coverGradient: "from-[#0F4C81] to-[#14B8C4]",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    content: [
      "Modern enterprises generate petabytes of telemetry and transactional records. Storing raw data without a structured lakehouse topology leads to query latency spikes and skyrocketing compute costs.",
      "In this article, we outline our reference architecture for Snowflake data platforms: medallion data design (Bronze/Silver/Gold), incremental dbt modeling, and automated data quality assertions.",
      "Learn how to structure multi-cluster virtual warehouses to scale concurrent queries across hundreds of analysts while cutting monthly cloud spend by 35%.",
    ],
  },
  {
    id: "power-bi-vs-looker-studio",
    title: "Power BI vs Looker Studio: Which Fits Your Business?",
    excerpt:
      "An executive decision matrix evaluating licensing models, semantic modeling, real-time caching, and enterprise scalability.",
    category: "Analytics",
    author: {
      name: "Maanya Tyagi",
      role: "Analytics Lead",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    date: "Sep 20, 2026",
    readTime: "6 min read",
    coverGradient: "from-[#082F49] to-[#0E7490]",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    content: [
      "Choosing between Microsoft Power BI and Google Looker Studio is rarely just about chart styles—it is an architectural commitment to your organizational data stack.",
      "We compare DAX vs LookML, row-level security (RLS) enforcement, embedded analytics licensing, and refresh latency benchmarks for high-density executive command centers.",
      "Discover which tool fits your ecosystem whether you are deeply invested in Microsoft 365 / Azure or leveraging Google Cloud / BigQuery.",
    ],
  },
  {
    id: "data-lake-vs-data-warehouse",
    title: "Data Lake vs Data Warehouse Explained",
    excerpt:
      "When to use raw parquet object storage, ClickHouse columnar databases, or structured enterprise relational data warehouses.",
    category: "Data Engineering",
    author: {
      name: "Gaurav Shokhanda",
      role: "Technology Lead",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    },
    date: "Sep 12, 2026",
    readTime: "7 min read",
    coverGradient: "from-[#0B4F6C] to-[#14B8C4]",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    content: [
      "The terminology around data lakes, lakehouses, and warehouses often confuses engineering teams. This guide unpacks the trade-offs between structured ACID guarantees and raw object lake flexibility.",
      "We explain the role of Apache Iceberg and Delta Lake in bridging the gap, allowing companies to query petabyte-scale data lakes with sub-second SQL performance.",
      "Includes a simple decision framework to help you choose the right storage engine for IoT telemetry, financial ledgers, or customer analytics.",
    ],
  },
  {
    id: "ai-agents-for-enterprise-automation",
    title: "AI Agents for Enterprise Automation",
    excerpt:
      "Deploying multi-agent cyclic state machines with LangGraph to orchestrate cross-platform ERP, CRM, and document reconciliation workflows.",
    category: "AI & Automation",
    author: {
      name: "Ankit",
      role: "Lead ML Engineer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    date: "Aug 30, 2026",
    readTime: "10 min read",
    coverGradient: "from-[#082F49] to-[#14B8C4]",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    content: [
      "Single-turn LLM prompts are insufficient for multi-step enterprise operations. Production AI requires stateful agents that reason, plan, invoke tools, and verify outputs.",
      "We walk through our battle-tested LangGraph architectures for automated invoice auditing, customer support escalation, and real-time database schema migrations.",
      "Learn how to construct human-in-the-loop verification gates and audit logs that pass strict enterprise compliance requirements.",
    ],
  },
  {
    id: "reduce-cloud-infrastructure-costs",
    title: "How to Reduce Cloud Infrastructure Costs",
    excerpt:
      "A tactical FinOps playbook for cloud-native teams: container rightsizing, Karpenter autoscaling, and query compression.",
    category: "Cloud",
    author: {
      name: "Anubhav",
      role: "Cloud Architect",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    },
    date: "Aug 18, 2026",
    readTime: "5 min read",
    coverGradient: "from-[#0E7490] to-[#082F49]",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    content: [
      "Cloud waste is one of the fastest drains on engineering budgets. Unused compute nodes, unindexed database scans, and over-provisioned Kubernetes clusters compound rapidly.",
      "We outline 5 concrete tactics we use to reduce client AWS, GCP, and Azure invoices by 35% to 50% without degrading application performance.",
      "Explore real-world case studies in spot instance orchestration, ZSTD storage compression, and serverless compute scaling.",
    ],
  },
  {
    id: "spring-boot-microservices-at-scale",
    title: "Spring Boot Microservices at Scale",
    excerpt:
      "Architecting high-concurrency enterprise services with Kafka event-sourcing, gRPC communication, and resilience patterns.",
    category: "Product Engineering",
    author: {
      name: "Naman",
      role: "Full Stack Engineer",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    },
    date: "Aug 05, 2026",
    readTime: "9 min read",
    coverGradient: "from-[#082F49] to-[#0F4C81]",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    content: [
      "Scaling Java Spring Boot microservices to handle millions of transactions requires meticulous thread pool tuning, reactive programming, and asynchronous messaging.",
      "We discuss domain-driven design (DDD), transactional outbox patterns with Kafka, and circuit breakers using Resilience4j to prevent cascading failures.",
      "Includes production Docker containerization configs and Kubernetes helm chart blueprints for zero-downtime rolling deployments.",
    ],
  },
];

const INDUSTRY_REPORTS = [
  {
    title: "2026 Data Engineering Trends Report",
    desc: "Comprehensive analysis of lakehouse architectures, dbt transformations, and petabyte-scale streaming pipelines.",
    pages: "48 Pages",
    date: "Feb 2026",
    badge: "Lakehouse Focus",
  },
  {
    title: "Enterprise AI Benchmark Report",
    desc: "Deterministic evaluations of frontier LLMs, domain-specific RAG latency, and private model serving architectures.",
    pages: "64 Pages",
    date: "Jan 2026",
    badge: "AI & LLM Evals",
  },
  {
    title: "Modern Analytics Stack Report",
    desc: "How high-growth organizations structure unified executive dashboards, semantic layers, and real-time telemetry.",
    pages: "36 Pages",
    date: "Dec 2025",
    badge: "BI & Telemetry",
  },
  {
    title: "Cloud Transformation Playbook",
    desc: "A proven guide for zero-downtime database migrations, Kubernetes orchestration, and FinOps cost containment.",
    pages: "52 Pages",
    date: "Nov 2025",
    badge: "Cloud & FinOps",
  },
];

const PLAYBOOKS = [
  {
    title: "Complete Data Engineering Playbook",
    subtitle: "Modern Data Stack • Lakehouses • dbt Pipelines",
    desc: "Everything you need to architect zero-maintenance data pipelines with end-to-end testing, lineage tracing, and CI/CD validation.",
    outcomes: [
      "Production-ready lakehouse schemas in 2 weeks",
      "Automated dbt transformations with zero loss",
      "Sub-second executive reporting queries",
    ],
    icon: Database,
  },
  {
    title: "Enterprise AI Implementation Guide",
    subtitle: "RAG Systems • Agents • Model Governance",
    desc: "A practical blueprint for deploying enterprise-ready AI copilots with strict hallucination guardrails and sub-200ms vector search.",
    outcomes: [
      "Private RAG architectures with citation auditing",
      "Multi-agent cyclic workflows with LangGraph",
      "100% HIPAA and SOC2 compliance alignment",
    ],
    icon: Cpu,
  },
  {
    title: "Analytics Modernization Roadmap",
    subtitle: "Executive Dashboards • Looker • Power BI",
    desc: "Transition fragmented spreadsheet silos into unified, high-density real-time command centers tailored for C-suite decision-makers.",
    outcomes: [
      "Single source of truth across all revenue data",
      "Role-based row-level security (RLS)",
      "Sub-100ms dashboard load times",
    ],
    icon: BarChart3,
  },
  {
    title: "Cloud Migration Strategy Framework",
    subtitle: "AWS • Azure • GCP • Kubernetes FinOps",
    desc: "Migrate legacy monoliths to modern cloud-native architectures with automated Terraform IaC and 35%+ cloud cost savings.",
    outcomes: [
      "Zero-downtime database and system cutovers",
      "Kubernetes autoscaling with Karpenter",
      "99.99% high-availability SLA resilience",
    ],
    icon: Cloud,
  },
];

const FEATURED_CASE_STUDIES = [
  {
    title: "Retail Analytics Platform",
    client: "OmniRetail Direct",
    impact: "Reduced reporting time by 40%",
    desc: "Unified online e-commerce platforms, retail POS registers, and ad platform attribution into a sub-second executive intelligence command center.",
    metric: "40% Faster",
    tag: "E-Commerce",
  },
  {
    title: "AI Automation System",
    client: "OmniJuris Corp",
    impact: "Saved 70% manual effort",
    desc: "Built a multi-agent contract analysis engine that extracts critical clauses, flags legal liabilities, and drafts citation-backed redlines automatically.",
    metric: "70% Saved",
    tag: "Enterprise AI",
  },
  {
    title: "Healthcare Dashboard Platform",
    client: "MedHealth Digital Health",
    impact: "Improved operational visibility by 60%",
    desc: "Constructed an automated triage lakehouse and executive clinical telemetry dashboard handling over 450k active patient interactions monthly.",
    metric: "60% Visibility Lift",
    tag: "Healthcare",
  },
];

const TRENDING_TOPICS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Engineering",
  "Cloud Architecture",
  "Power BI",
  "Looker Studio",
  "Snowflake",
  "Databricks",
  "AWS",
  "Azure",
  "Spring Boot",
  "Next.js",
  "Analytics",
  "Data Warehousing",
  "Automation",
];

const RESOURCE_TYPES = ["All", "Articles", "Reports", "Case Studies", "Playbooks", "Webinars"];

// =========================================================================
// MAIN INSIGHTS & RESOURCES PAGE COMPONENT
// =========================================================================

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedResourceType, setSelectedResourceType] = useState("All");
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filter latest insights
  const filteredInsights = LATEST_INSIGHTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === "AI & Automation" && post.category.includes("AI")) ||
      (selectedCategory === "Data Engineering" && post.category.includes("Data"));

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleDownload = (reportTitle: string) => {
    setDownloadToast(reportTitle);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setNewsletterSubscribed(false);
    }, 4000);
  };

  return (
    <div className="bg-white text-[#0F172A] selection:bg-[#0F4C81] selection:text-white font-sans">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Full-Width Mesh Gradient + Search + Quick Filters) */}
      {/* ========================================================================= */}
      <section
        className="relative pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-22 overflow-hidden border-b border-slate-200/80"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(20,184,196,0.14), transparent 45%), radial-gradient(circle at 10% 20%, rgba(15,76,129,0.08), transparent 40%), linear-gradient(135deg, #f8fcff 0%, #edf8fb 38%, #f5fcff 100%)",
        }}
      >
        {/* Subtle Tech Dot Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 -z-0"
          style={{
            backgroundImage: "radial-gradient(rgba(20, 184, 196, 0.15) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/85 backdrop-blur-md text-[#0F4C81] border border-[#14B8C4]/30 shadow-xs mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#14B8C4]" />
            <span>INSIGHTS • RESEARCH • RESOURCES</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-[36px] sm:text-[50px] lg:text-[62px] font-[800] leading-[1.08] tracking-[-0.035em] text-[#082F49] max-w-4xl mx-auto [text-wrap:balance]"
          >
            Ideas, Insights & Engineering Expertise For{" "}
            <span
              className="bg-clip-text text-transparent font-extrabold"
              style={{
                backgroundImage: "linear-gradient(90deg, #0F4C81, #14B8C4)",
              }}
            >
              Modern Businesses
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-5 leading-relaxed font-normal"
          >
            Explore practical guidance on Data Engineering, AI, Analytics, Cloud Architecture, and
            Digital Product Development from the team behind CodePlaced.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="max-w-xl mx-auto mt-8 relative"
          >
            <div
              className="rounded-full p-1.5 flex items-center bg-white/90 backdrop-blur-xl border border-[#14B8C4]/30 shadow-lg shadow-[#0F4C81]/5"
            >
              <div className="pl-4 pr-2 text-slate-400">
                <Search className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, architecture, technology (RAG, Snowflake, FinOps)..."
                className="w-full py-2.5 pr-4 bg-transparent text-sm text-[#082F49] placeholder-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-3 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Quick Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-7 max-w-4xl mx-auto"
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0F4C81] text-white shadow-md shadow-[#0F4C81]/20 scale-102"
                      : "bg-white/80 text-slate-600 hover:text-[#0F4C81] hover:bg-white border border-slate-200/80"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED INSIGHT SECTION (Large 50/50 Premium Card) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F4C81]">
              <Sparkles className="w-4 h-4 text-[#14B8C4]" />
              <span>FEATURED RESEARCH</span>
            </div>
            <span className="text-xs font-semibold text-slate-400">Quarterly Flagship</span>
          </div>

          <div
            className="rounded-[32px] overflow-hidden border transition-all duration-300 hover:shadow-2xl grid grid-cols-1 lg:grid-cols-12 relative"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #F8FCFD 100%)",
              borderColor: "rgba(20, 184, 196, 0.25)",
              boxShadow: "0 20px 60px rgba(15, 76, 129, 0.06)",
            }}
          >
            {/* Left 50%: Visual Image with Gradient Overlay */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[420px] lg:h-auto overflow-hidden bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
                alt={FEATURED_REPORT.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/90 via-[#082F49]/40 to-transparent" />

              {/* Floating Badges */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-black bg-[#14B8C4] text-[#082F49] uppercase tracking-wider shadow-md">
                  Featured
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                  Research Report
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  CodePlaced Enterprise Labs
                </span>
                <h4 className="text-lg font-bold">100+ Enterprise Systems Analyzed</h4>
              </div>
            </div>

            {/* Right 50%: Content & CTAs */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-[#0F4C81] font-bold">
                    <Clock className="w-4 h-4 text-[#14B8C4]" />
                    {FEATURED_REPORT.readTime}
                  </span>
                  <span>•</span>
                  <span>{FEATURED_REPORT.date}</span>
                  <span>•</span>
                  <span className="text-emerald-600 font-bold">PDF Available</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082F49] tracking-tight leading-snug">
                  {FEATURED_REPORT.title}
                </h2>

                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {FEATURED_REPORT.excerpt}
                </p>

                {/* Key Takeaways Preview */}
                <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8C4] flex-shrink-0 mt-0.5" />
                    <span>From single-turn prompts to multi-agent production orchestration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8C4] flex-shrink-0 mt-0.5" />
                    <span>Real-world latency evaluations and prompt injection security guardrails</span>
                  </div>
                </div>
              </div>

              {/* Author & Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={FEATURED_REPORT.author.avatar}
                    alt={FEATURED_REPORT.author.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-slate-200"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-[#082F49]">
                      {FEATURED_REPORT.author.name}
                    </div>
                    <div className="text-xs text-slate-500">{FEATURED_REPORT.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedArticle(FEATURED_REPORT)}
                    className="px-5 py-2.5 rounded-full bg-[#0F4C81] hover:bg-[#082F49] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                  >
                    <span>Read Report</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleDownload(FEATURED_REPORT.title)}
                    className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0F4C81] font-bold text-xs border border-slate-200 shadow-2xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LATEST INSIGHTS GRID (3-Column Architecture Articles) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0F4C81] border border-[#14B8C4]/25 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-[#14B8C4]" />
                <span>TECHNICAL FIELD NOTES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082F49] tracking-tight">
                Latest Insights & Analysis
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Field reports, benchmarks, and production lakehouse post-mortems authored by our
              Principal Engineers.
            </p>
          </div>

          {filteredInsights.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <p className="text-slate-500 text-base">
                No insights found matching &quot;{searchQuery}&quot; in category &quot;{selectedCategory}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#0F4C81] text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedArticle(post)}
                  className="group cursor-pointer rounded-[26px] bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#14B8C4]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#082F49] shadow-xs">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white font-medium drop-shadow-xs">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-[#14B8C4]" />
                        <span>{post.date}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#082F49] group-hover:text-[#0F4C81] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Author / Read CTA */}
                  <div className="p-7 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <div className="text-xs font-bold text-[#082F49]">
                          {post.author.name}
                        </div>
                        <div className="text-[10px] text-slate-400">{post.author.role}</div>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-[#0F4C81] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#14B8C4]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INDUSTRY REPORTS SECTION (Dark Background Cards) */}
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
          <div className="max-w-[850px] mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20 shadow-xs">
              <FileText className="w-3.5 h-3.5 text-cyan-300" />
              <span>EXECUTIVE RESEARCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Research & Industry Reports
            </h2>
            <p className="text-base text-slate-300 max-w-[650px] mx-auto leading-relaxed">
              Data-backed insights to help leaders make smarter technology decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRY_REPORTS.map((report, idx) => (
              <div
                key={idx}
                className="rounded-[24px] bg-white/[0.05] border border-white/10 p-7 backdrop-blur-md hover:bg-white/[0.09] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/10 text-cyan-200">
                      {report.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                    {report.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {report.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    <span>{report.pages}</span> • <span>{report.date}</span>
                  </div>

                  <button
                    onClick={() => handleDownload(report.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-[#082F49] text-xs font-bold transition-all active:scale-95 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PLAYBOOKS & GUIDES (Large Horizontal Cards) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[850px] mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0F4C81] border border-[#14B8C4]/25 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#14B8C4]" />
              <span>STEP-BY-STEP IMPLEMENTATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#082F49]">
              Playbooks & Frameworks
            </h2>
            <p className="text-base text-slate-600 max-w-[650px] mx-auto leading-relaxed">
              Battle-tested architectural blueprints, schema checklists, and execution roadmaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PLAYBOOKS.map((pb, idx) => {
              const Icon = pb.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[28px] bg-gradient-to-br from-[#F8FCFD] to-white border border-slate-200/90 p-8 shadow-2xs hover:shadow-xl hover:border-[#14B8C4]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#ECFEFF] text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#14B8C4] uppercase tracking-wider">
                        {pb.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#082F49] group-hover:text-[#0F4C81] transition-colors">
                      {pb.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pb.desc}
                    </p>

                    <div className="pt-2 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Outcomes:
                      </div>
                      {pb.outcomes.map((out, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      Format: PDF + Architecture Diagrams
                    </span>

                    <button
                      onClick={() => handleDownload(pb.title)}
                      className="px-5 py-2.5 rounded-full bg-[#0F4C81] hover:bg-[#082F49] text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Guide</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FEATURED CASE STUDIES (Real Results, Real Impact) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0F4C81] border border-[#14B8C4]/25 mb-3">
                <TrendingUp className="w-3.5 h-3.5 text-[#14B8C4]" />
                <span>CLIENT SUCCESS STORIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082F49] tracking-tight">
                Real Results, Real Impact
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F4C81] hover:text-[#14B8C4] transition-colors"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {FEATURED_CASE_STUDIES.map((cs, idx) => (
              <div
                key={idx}
                className="rounded-[24px] bg-white border border-slate-200/90 p-7 shadow-2xs hover:shadow-xl hover:border-[#14B8C4]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECFEFF] text-[#0F4C81]">
                      {cs.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{cs.client}</span>
                  </div>

                  <h3 className="text-xl font-black text-[#082F49] mb-2 group-hover:text-[#0F4C81] transition-colors">
                    {cs.title}
                  </h3>

                  <div className="py-2.5 px-3.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-extrabold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{cs.impact}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-2xl font-black text-[#0F4C81]">{cs.metric}</div>
                  <Link
                    href="/case-studies"
                    className="text-xs font-bold text-slate-600 group-hover:text-[#0F4C81] inline-flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. TRENDING TOPICS (Interactive Tag Cloud) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Trending Engineering & Analytics Topics
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {TRENDING_TOPICS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-2 rounded-xl bg-slate-50 hover:bg-[#ECFEFF] text-slate-700 hover:text-[#0F4C81] border border-slate-200 hover:border-[#14B8C4]/40 text-xs sm:text-sm font-bold transition-all active:scale-95 cursor-pointer shadow-2xs"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. NEWSLETTER SECTION (Full-Width Gradient Banner) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#082F49] via-[#0F4C81] to-[#041E2A] text-white relative overflow-hidden">
        {/* Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] pointer-events-none -z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(20,184,196,0.22), transparent 70%)",
          }}
        />

        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>ENGINEERING DISPATCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Stay Ahead of Data & AI Trends
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get practical insights, engineering strategies, and technology trends delivered directly
            to your inbox.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your work email..."
              className="w-full sm:w-[280px] h-[50px] px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
            <button
              type="submit"
              className="w-full sm:w-auto h-[50px] px-6 rounded-xl bg-[#14B8C4] hover:bg-[#00b7c2] text-[#082F49] font-extrabold text-sm transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
            >
              {newsletterSubscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>

          <p className="text-xs text-slate-400">
            No spam. One high-value engineering digest per month. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. RESOURCES LIBRARY (Filterable Catalog) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[850px] mx-auto text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0F4C81] border border-[#14B8C4]/25 shadow-xs">
              <Filter className="w-3.5 h-3.5 text-[#14B8C4]" />
              <span>CONTENT ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#082F49]">
              Resources Library
            </h2>
            <p className="text-base text-slate-600 max-w-[600px] mx-auto">
              Explore our full collection of research papers, architectural playbooks, and case studies.
            </p>

            {/* Resource Type Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {RESOURCE_TYPES.map((type) => {
                const isActive = selectedResourceType === type;
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedResourceType(type)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#082F49] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#14B8C4] uppercase tracking-wider">
                  Whitepaper
                </span>
                <h4 className="text-base font-bold text-[#082F49] mt-1 mb-2">
                  Building Sub-10ms Vector Search on Kubernetes
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Benchmarks evaluating Qdrant, Milvus, and pgvector performance at 50M embedding scale.
                </p>
              </div>
              <button
                onClick={() => handleDownload("Vector Search Benchmark")}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] hover:text-[#14B8C4]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Whitepaper</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#14B8C4] uppercase tracking-wider">
                  Checklist
                </span>
                <h4 className="text-base font-bold text-[#082F49] mt-1 mb-2">
                  Enterprise SOC2 & HIPAA Readiness Checklist
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A 32-point technical audit checklist for cloud storage encryption, IAM roles, and logging.
                </p>
              </div>
              <button
                onClick={() => handleDownload("Security Readiness Checklist")}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] hover:text-[#14B8C4]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Checklist</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#14B8C4] uppercase tracking-wider">
                  Webinar Series
                </span>
                <h4 className="text-base font-bold text-[#082F49] mt-1 mb-2">
                  Modern Lakehouse Migration: From Legacy SQL to Snowflake
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Watch our Principal Engineers demonstrate zero-downtime ETL cutovers step by step.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] hover:text-[#14B8C4]"
              >
                <span>Request Recording</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FINAL CTA SECTION (Large Dark Blue Gradient) */}
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
            <span>TRANSFORM YOUR TECH STACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ready To Build Your Next Data, AI or Digital Product?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Talk to our engineering experts and discover the right strategy, architecture, and
            technology stack for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-[#38BDF8] hover:bg-[#0284C7] text-[#082F49] hover:text-white font-extrabold text-[15px] transition-all shadow-xl shadow-[#38BDF8]/20 flex items-center justify-center gap-2.5 active:scale-95 group"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-[15px] border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>View Our Work</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Data Engineering Specialists</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>AI & Automation Experts</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Enterprise Delivery Teams</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Global Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* READING MODAL */}
      {/* ========================================================================= */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookCall={() => setSelectedArticle(null)}
      />

      {/* Download Toast */}
      <AnimatePresence>
        {downloadToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#082F49] text-white border border-cyan-400/40 shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-white">Download Started</div>
              <div className="text-slate-300 truncate">{downloadToast}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
