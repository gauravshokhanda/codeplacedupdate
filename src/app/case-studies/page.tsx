"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Cpu,
  Layers,
  Building2,
  Clock,
  Activity,
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  Truck,
  ShoppingBag,
  GraduationCap,
  Factory,
  Database,
  BrainCircuit,
  BarChart3,
  Cloud,
  Lock,
  Server,
  FileText,
  Users,
  Search,
  Code2,
  Workflow,
  Check,
  X,
  ChevronRight,
  SlidersHorizontal,
  ExternalLink,
  Zap,
  Plane,
  Radio,
  Star,
  Quote,
  Shield,
  Bot,
  LineChart,
} from "lucide-react";

// =========================================================================
// Comprehensive Case Studies Data
// =========================================================================
export interface CaseStudyDetail {
  id: string;
  title: string;
  client: string;
  clientType: string;
  industry: string;
  service: string;
  tagline: string;
  summary: string;
  image: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  challenge: string;
  existingProblems: string[];
  solution: string;
  architectureDetails: string[];
  processTimeline: { week: string; milestone: string }[];
  resultsAchieved: string[];
  lessonsLearned: string;
  futureRoadmap: string;
}

const CASE_STUDIES_MASTER: CaseStudyDetail[] = [
  {
    id: "edtech-analytics",
    title: "Scaling Data Analytics for a High-Growth EdTech Platform",
    client: "SkillBridge Global",
    clientType: "Venture-Backed EdTech (450k+ Active Learners)",
    industry: "Education",
    service: "BI & Dashboards",
    tagline: "BigQuery Lakehouse & Sub-Second Looker Studio Telemetry",
    summary: "Transformed student retention and executive reporting by unifying learner events into a governed BigQuery data lakehouse with sub-second Looker dashboards.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Course Completion", value: "83.6%" },
      { label: "Reporting Time", value: "90% Less" },
      { label: "Decision Velocity", value: "3x Faster" },
      { label: "Operational Savings", value: "40%" },
    ],
    technologies: ["BigQuery", "Looker Studio", "Python", "dbt", "Postgres", "GCP"],
    challenge: "SkillBridge's fragmented transactional PostgreSQL databases crashed during peak semester enrollments, causing 3-day reporting delays and blind retention analytics.",
    existingProblems: [
      "Heavy analytical queries locked the production OLTP database during student exams",
      "Manual CSV exports took 15+ hours weekly for department deans and CFOs",
      "No unified identity matching student engagement across mobile apps and web LMS",
    ],
    solution: "Engineered a zero-downtime CDC pipeline using Airbyte and dbt into BigQuery, paired with automated Looker Studio executive telemetry dashboards.",
    architectureDetails: [
      "Change Data Capture (CDC) streaming learner events into BigQuery storage",
      "dbt automated data modeling with 140+ unit and data quality assertions",
      "Pre-aggregated analytical marts for sub-50ms Looker Studio report rendering",
      "Role-Based Access Control (RBAC) isolating university student records",
    ],
    processTimeline: [
      { week: "Week 1", milestone: "PostgreSQL audit, schema mapping & data contracts" },
      { week: "Week 2", milestone: "BigQuery lakehouse setup & automated dbt pipeline deployment" },
      { week: "Week 3", milestone: "Looker Studio executive control centers & dean portals" },
      { week: "Week 4", milestone: "Full production cutover with zero downtime & 100% IP transfer" },
    ],
    resultsAchieved: [
      "Course completion rate improved to 83.6% via automated learner intervention triggers",
      "Executive reporting time reduced by 90% from 3 days to real-time dashboards",
      "Query costs decreased by 40% using partitioned and clustered BigQuery tables",
    ],
    lessonsLearned: "Separating operational transactional workloads from analytical data marts is critical for zero-downtime scale.",
    futureRoadmap: "Integrating personalized AI tutoring copilots with private student vector memory in Q4.",
  },
  {
    id: "healthcare-platform",
    title: "HIPAA-Compliant Clinical Triage Copilot & EHR Lakehouse",
    client: "MedHealth Digital Health",
    clientType: "Hospital Network (14 Regional Facilities)",
    industry: "Healthcare",
    service: "AI Agents",
    tagline: "Air-Gapped Clinical RAG & Automated Patient Intake",
    summary: "Engineered a HIPAA-compliant clinical triage co-pilot that ingests EHR records and patient voice scans, slashing intake wait times while ensuring zero hallucinations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Intake Velocity", value: "4.8x Faster" },
      { label: "Compliance Score", value: "100% HIPAA" },
      { label: "Annual Doctor Time", value: "18,000+ Hrs" },
      { label: "Citation Accuracy", value: "99.4%" },
    ],
    technologies: ["OpenAI", "Claude", "FastAPI", "Python", "PostgreSQL", "AWS"],
    challenge: "Manual emergency clinical intake created 45-minute average patient bottlenecks and severe physician burnout across 14 hospital networks.",
    existingProblems: [
      "EHR records were stranded across legacy Epic and Cerner systems with no semantic search",
      "Clinical staff spent 4+ hours per shift manually transcribing triage notes",
      "Strict HIPAA privacy laws prohibited sending patient PII to public AI endpoints",
    ],
    solution: "Designed an air-gapped hybrid RAG engine with automated PII masking, deterministic inline medical citations, and physician sign-off workflows.",
    architectureDetails: [
      "Real-time PII anonymization gateway stripping identifiers before LLM ingestion",
      "Hybrid Reciprocal Rank Fusion (BM25 + Dense Vectors) for EHR document retrieval",
      "LangGraph cyclic state machine enforcing clinician verification gates",
      "Private AWS GovCloud deployment with encrypted KMS storage",
    ],
    processTimeline: [
      { week: "Week 1", milestone: "HIPAA security assessment & EHR schema normalization" },
      { week: "Week 2", milestone: "Air-gapped vector lakehouse & deterministic RAG pipeline" },
      { week: "Week 3", milestone: "Physician triage web copilot & adversarial red-teaming" },
      { week: "Week 4", milestone: "Clinical facility deployment with 99.99% uptime SLA" },
    ],
    resultsAchieved: [
      "Patient intake velocity accelerated 4.8x from 45 minutes to 9 minutes",
      "Saved 18,000+ clinical doctor hours annually across 14 facilities",
      "Zero compliance incidents across 1.2M secure patient interactions",
    ],
    lessonsLearned: "Deterministic citation coordinates and strict human-in-the-loop gates are mandatory for enterprise clinical adoption.",
    futureRoadmap: "Expanding to multi-modal medical imaging metadata extraction and automated prescription cross-check.",
  },
  {
    id: "fintech-reconciliation",
    title: "Autonomous Financial Ledger Reconciliation Engine",
    client: "CapitalFlow FinTech",
    clientType: "Global Cross-Border Payment Rail ($2.4B/yr Volume)",
    industry: "Fintech",
    service: "Data Engineering",
    tagline: "Sub-Second Multi-Currency Reconciliation & SEC Auditing",
    summary: "Replaced 40 hours of manual end-of-month spreadsheet reconciliation with an automated dbt and Python pipeline matching 4M+ daily transactions.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Ledger Accuracy", value: "99.999%" },
      { label: "Close Time", value: "15 Mins" },
      { label: "Cost Saved", value: "$1.4M / yr" },
      { label: "Monthly Saved", value: "160 Hours" },
    ],
    technologies: ["Snowflake", "dbt", "Airflow", "Python", "Kafka", "Postgres", "AWS"],
    challenge: "Complex cross-border payments between Stripe, Adyen, and local bank rails led to discrepancy backlogs and compliance audit delays.",
    existingProblems: [
      "Month-end financial close required 4 business days of manual Excel matching",
      "Discrepancies in multi-currency exchange rates caused periodic audit exceptions",
      "No real-time alerting for high-value transactional variance anomalies",
    ],
    solution: "Engineered a double-entry event streaming engine with cryptographic checksums and real-time Slack exception routing.",
    architectureDetails: [
      "Apache Kafka event bus ingesting 4M+ transaction webhooks daily",
      "Snowflake analytical warehouse with automated dbt double-entry verification DAGs",
      "Sub-millisecond anomaly detection workers flagging variance threshold breaks",
      "Audit-ready cryptographic transaction hashing for SEC compliance",
    ],
    processTimeline: [
      { week: "Week 1", milestone: "Payment rails audit & double-entry reconciliation rules mapping" },
      { week: "Week 2", milestone: "Kafka streaming ingestion & Snowflake data warehouse setup" },
      { week: "Week 3", milestone: "dbt automated tests & real-time CFO exception dashboard" },
      { week: "Week 4", milestone: "Live production cutover with zero ledger mismatch" },
    ],
    resultsAchieved: [
      "Month-end close time reduced from 4 business days to 15 minutes",
      "99.999% ledger accuracy verified across $2.4B in annual transactions",
      "Saved $1.4M annually in administrative accounting overhead and audit fees",
    ],
    lessonsLearned: "Automated data contracts between payment gateways prevent silent schema drift.",
    futureRoadmap: "Deploying autonomous liquidity rebalancing agents across European and Asian banking corridors.",
  },
  {
    id: "legal-intelligence",
    title: "Enterprise Legal Intelligence Platform & Document RAG",
    client: "OmniJuris Corp",
    clientType: "Corporate Legal Department (450+ Legal Counsels)",
    industry: "SaaS",
    service: "RAG Systems",
    tagline: "High-Precision Contract RAG & Deterministic Risk Extraction",
    summary: "Transformed millions of unstructured contracts, NDAs, and regulatory filings into an instant semantic query engine with citation-backed legal risk analysis.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Review Turnaround", value: "82% Saved" },
      { label: "Citation Precision", value: "99.4%" },
      { label: "Indexed Volume", value: "1.2M Files" },
      { label: "Legal Adoption", value: "4x Lift" },
    ],
    technologies: ["Claude", "Python", "Snowflake", "Pinecone", "dbt", "Docker"],
    challenge: "Senior attorneys spent 30+ hours per week manually reviewing 200+ page international commercial agreements for indemnity liabilities.",
    existingProblems: [
      "1.2M contracts were stranded in static PDF file archives with no full-text search",
      "Attorneys missed high-severity indemnity clauses due to document fatigue",
      "Contract redlining and review took an average of 4 business days per deal",
    ],
    solution: "Built a multi-stage hybrid RAG engine with reciprocal rank fusion, deterministic inline PDF coordinate citation, and clause risk scoring.",
    architectureDetails: [
      "OCR and document parsing pipeline normalizing 1.2M scanned legal PDFs",
      "Hybrid vector indexing using Pinecone and dense embedding cross-encoders",
      "Deterministic inline PDF coordinate bounding box highlighting in UI",
      "Automated adversarial red-teaming eval suite ensuring zero hallucination",
    ],
    processTimeline: [
      { week: "Week 1", milestone: "Contract corpus taxonomy & risk clause ontology definition" },
      { week: "Week 2", milestone: "Document parsing, vector indexing & hybrid search RAG" },
      { week: "Week 3", milestone: "Interactive legal counsel web UI & redlining engine" },
      { week: "Week 4", milestone: "Enterprise rollout to 450+ attorneys with 99.4% precision" },
    ],
    resultsAchieved: [
      "Contract turnaround dropped from 4 business days to under 45 minutes (82% time saved)",
      "Indexed 1.2M complex legal contracts in less than 48 hours",
      "99.4% verified citation precision rate across all legal risk evaluations",
    ],
    lessonsLearned: "Cross-encoder reranking is essential when searching nuanced legal language.",
    futureRoadmap: "Adding automated multi-lingual contract translation and jurisdiction harmonization.",
  },
  {
    id: "automotive-analytics",
    title: "Global IoT Fleet Telemetry & Predictive Maintenance Lakehouse",
    client: "Veloce Mobility",
    clientType: "Commercial Fleet Operator (80,000 Connected Vehicles)",
    industry: "Manufacturing",
    service: "Cloud Infrastructure",
    tagline: "Sub-25ms Telemetry Processing for 1.2B Events/Day",
    summary: "Built an ultra-low latency telemetry streaming ingestion pipeline processing 1.2M vehicle sensor events per second with predictive maintenance alerts.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Query Latency", value: "< 25 ms" },
      { label: "Daily Events", value: "1.2B Pings" },
      { label: "Fleet Uptime", value: "99.98%" },
      { label: "Downtime Prevented", value: "$3.2M / yr" },
    ],
    technologies: ["Kafka", "Python", "Kubernetes", "AWS", "Terraform", "React"],
    challenge: "Legacy relational databases crashed under high-velocity telemetry bursts from 80,000 vehicles, rendering fleet managers blind to impending breakdowns.",
    existingProblems: [
      "Database queries took 45+ seconds to return vehicle location and engine health",
      "Preventable thermal engine failures cost $3.2M in annual emergency towing",
      "Uncompressed telemetry drove cloud storage bills above $45,000 monthly",
    ],
    solution: "Re-architected the stack using Apache Kafka real-time ingestion, ClickHouse columnar storage with ZSTD compression, and a snappy React executive dashboard.",
    architectureDetails: [
      "Auto-scaling Kubernetes cluster processing 1.2M sensor events/second",
      "ClickHouse columnar OLAP achieving 10:1 data compression ratio",
      "Predictive vibration and thermal machine learning anomaly alert daemons",
      "Terraform multi-region IaC deployment with automated spot instance rebalancing",
    ],
    processTimeline: [
      { week: "Week 1", milestone: "CAN-bus telematics schema audit & Kafka ingestion topology" },
      { week: "Week 2", milestone: "ClickHouse OLAP storage cluster & compression tuning" },
      { week: "Week 3", milestone: "React fleet command center & predictive alert workers" },
      { week: "Week 4", milestone: "80,000 vehicle live cutover with sub-25ms query speed" },
    ],
    resultsAchieved: [
      "Query speed dropped from 45 seconds to sub-25 milliseconds",
      "Prevented $3.2M in annual engine breakdowns via 72-hour advance alerts",
      "Reduced cloud infrastructure costs by 42% through data compression",
    ],
    lessonsLearned: "Columnar OLAP engines outperform relational databases by 100x on time-series telemetry.",
    futureRoadmap: "Integrating autonomous dynamic dispatch routing algorithms based on live traffic and weather.",
  },
  {
    id: "retail-attribution",
    title: "Unified Omnichannel Ad Attribution & Customer Analytics",
    client: "NexusRetail Direct",
    clientType: "Direct-to-Consumer Brand ($65M Annual GMV)",
    industry: "Retail",
    service: "Embedded Analytics",
    tagline: "Sub-Second Multi-Touch Attribution & Dynamic Pricing ML",
    summary: "Consolidated Meta, Google, TikTok, and Shopify purchase streams into a real-time Snowflake lakehouse with first-party identity resolution.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Blended CAC", value: "-14%" },
      { label: "Gross Margin", value: "+18%" },
      { label: "Attribution Sync", value: "Real-Time" },
      { label: "Analytics Adoption", value: "4x Lift" },
    ],
    technologies: ["Snowflake", "Next.js", "Power BI", "dbt", "Postgres", "AWS"],
    challenge: "Wasted ad budget due to 24-hour reporting delays from third-party pixel aggregators and broken multi-touch attribution models.",
    existingProblems: [
      "Marketing team could not identify which channels drove high-LTV repeat buyers",
      "Frequent inventory stockouts on trending items due to disconnected sales data",
      "High blended customer acquisition costs hurting profitability",
    ],
    solution: "Deployed a unified customer data platform on Snowflake with automated attribution modeling, dynamic pricing algorithms, and real-time inventory alerts.",
    architectureDetails: [
      "First-party identity resolution graph unifying cookie and email events",
      "Automated dbt transformation DAGs calculating multi-touch Shapley attribution",
      "Next.js executive marketing command center with sub-second cohort drilldowns",
      "Embedded inventory reordering automation triggered by sales velocity",
    ],
    processTimeline: [
      { week: "Week 1", milestone: "Ad channel API integrations & identity resolution design" },
      { week: "Week 2", milestone: "Snowflake data warehouse & dbt attribution models" },
      { week: "Week 3", milestone: "Executive marketing dashboard & inventory alert bot" },
      { week: "Week 4", milestone: "Live deployment with immediate 14% CAC reduction" },
    ],
    resultsAchieved: [
      "14% immediate reduction in blended customer acquisition costs",
      "18% gross margin lift from dynamic price adjustments on trending SKUs",
      "4x lift in analytics adoption across marketing, finance, and supply chain teams",
    ],
    lessonsLearned: "First-party data identity graphs outperform third-party pixel trackers in post-cookie privacy environments.",
    futureRoadmap: "Deploying automated ad budget reallocation AI agents based on real-time ROAS thresholds.",
  },
];

// =========================================================================
// Filter Constants
// =========================================================================
const INDUSTRY_FILTERS = [
  "All",
  "Education",
  "Healthcare",
  "Fintech",
  "SaaS",
  "Manufacturing",
  "Retail",
  "Logistics",
  "Real Estate",
  "Hospitality",
];

const SOLUTION_FILTERS = [
  "All",
  "Data Engineering",
  "BI & Dashboards",
  "AI Agents",
  "RAG Systems",
  "Embedded Analytics",
  "Cloud Infrastructure",
  "Automation",
];

const TECH_FILTERS = [
  "All",
  "BigQuery",
  "Looker Studio",
  "Power BI",
  "Python",
  "dbt",
  "Airflow",
  "Postgres",
  "Snowflake",
  "AWS",
  "GCP",
  "Kafka",
  "OpenAI",
  "Claude",
  "React",
  "Next.js",
];

// =========================================================================
// 10 Industry Success Cards
// =========================================================================
const INDUSTRY_SOLUTIONS_LIST = [
  {
    industry: "Healthcare",
    icon: HeartPulse,
    projects: "38+ Projects",
    useCases: "HIPAA Clinical Triage, EHR Lakehouses, Doctor Copilots",
    outcomes: "4.8x faster intake, 100% compliance pass rate",
  },
  {
    industry: "Fintech",
    icon: Landmark,
    projects: "42+ Projects",
    useCases: "Real-Time Ledger Reconciliations, Fraud Telemetry, SEC Auditing",
    outcomes: "99.999% ledger accuracy, 15-min month-end close",
  },
  {
    industry: "Manufacturing",
    icon: Factory,
    projects: "30+ Projects",
    useCases: "IoT Sensor Streaming, Predictive Maintenance, Plant Telemetry",
    outcomes: "35% less downtime, $3.2M annual maintenance savings",
  },
  {
    industry: "Retail",
    icon: ShoppingBag,
    projects: "35+ Projects",
    useCases: "Multi-Touch ROAS Attribution, Dynamic Pricing, Inventory ML",
    outcomes: "-14% customer CAC, +18% gross margin lift",
  },
  {
    industry: "Logistics",
    icon: Truck,
    projects: "28+ Projects",
    useCases: "Fleet Telematics Lakehouses, Dynamic Route Optimization",
    outcomes: "24% fleet fuel reduction, sub-25ms GPS query speed",
  },
  {
    industry: "Real Estate",
    icon: Building2,
    projects: "22+ Projects",
    useCases: "Commercial Lease OCR Extraction, Portfolio Valuation ML",
    outcomes: "80% faster lease verification, automated audit logs",
  },
  {
    industry: "Education",
    icon: GraduationCap,
    projects: "25+ Projects",
    useCases: "Student Retention Telemetry, Adaptive LMS Dashboards",
    outcomes: "83.6% completion rate, 90% less reporting time",
  },
  {
    industry: "Hospitality",
    icon: Plane,
    projects: "18+ Projects",
    useCases: "Dynamic Revenue Yield ML, Guest Sentiment Analytics",
    outcomes: "+15% RevPAR expansion, automated demand forecasting",
  },
  {
    industry: "SaaS",
    icon: MonitorSmartphone,
    projects: "48+ Projects",
    useCases: "Multi-Tenant Embedded Analytics, In-App AI Copilots",
    outcomes: "32% ARR expansion, 30% churn reduction",
  },
  {
    industry: "Insurance",
    icon: ShieldCheck,
    projects: "20+ Projects",
    useCases: "Claims Document Extraction, Underwriting Risk Scoring",
    outcomes: "74% faster claims turnaround, zero data leakage",
  },
];

// =========================================================================
// 6 Business Impact Metrics
// =========================================================================
const IMPACT_METRICS = [
  { value: "90%", label: "Reduction in Manual Reporting", sub: "From days to sub-second real-time queries" },
  { value: "5x", label: "Faster Decision Making", sub: "Automated executive alerts and telemetry" },
  { value: "100+", label: "Production Systems Delivered", sub: "Shipped in 2–4 week fixed sprints" },
  { value: "40%", label: "Average Efficiency Gain", sub: "Eliminating manual spreadsheet compilation" },
  { value: "95%", label: "Client Retention Rate", sub: "Multi-year Principal Engineering pods" },
  { value: "2–4 Wks", label: "Average Deployment Timeline", sub: "From initial discovery to live VPC cutover" },
];

// =========================================================================
// Categorized Tech Stack Grid
// =========================================================================
const TECH_CATEGORIES_GRID = [
  {
    category: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    tools: ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "NestJS"],
  },
  {
    category: "Data Engineering",
    tools: ["BigQuery", "Snowflake", "Databricks", "dbt", "Airflow", "Kafka", "PostgreSQL"],
  },
  {
    category: "Analytics & BI",
    tools: ["Looker Studio", "Power BI", "Tableau", "Metabase", "Mixpanel"],
  },
  {
    category: "AI & ML",
    tools: ["OpenAI", "Claude", "LangChain", "LlamaIndex", "Pinecone", "Weaviate"],
  },
  {
    category: "Cloud & DevOps",
    tools: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
];

// =========================================================================
// Client Testimonials
// =========================================================================
const TESTIMONIALS = [
  {
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Global Logistics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote: "CodePlaced delivered what three previous consulting agencies couldn't in 18 months: a bulletproof, real-time analytics lakehouse in just 3 weeks. Our executive team makes daily decisions with 100% confidence.",
    result: "12x faster query speed across 40TB dataset",
  },
  {
    name: "Dr. Elena Rostova",
    role: "VP of Product Engineering",
    company: "BioSynaptics AI",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    quote: "The CodePlaced engineering team feels like an elite in-house Special Ops squad. Their mastery of agentic workflows and latency optimization cut our customer onboarding cycle by 70%.",
    result: "99.98% production uptime from day one",
  },
  {
    name: "David H. Steinberg",
    role: "Founder & Managing Director",
    company: "CapitalFlow FinTech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote: "Working with CodePlaced was the best technical investment our startup made. They audited our schemas, killed redundant cloud spend, and handed us an asset that impressed our Series B leads.",
    result: "$340,000 annualized cloud cost reduction",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Digital Operations",
    company: "OmniRetail Direct",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    quote: "Their 'delivery in weeks' promise isn't marketing fluff. Our unified growth dashboard was live within 18 calendar days, uniting our Meta, Google, and Stripe data into a single source of truth.",
    result: "14% immediate reduction in blended CAC",
  },
];

// =========================================================================
// Recommended Services Cross-Sell
// =========================================================================
const RECOMMENDED_SERVICES = [
  {
    title: "Data Platforms & Pipelines",
    desc: "Scalable lakehouses, streaming CDC pipelines, and unified dbt data foundations.",
    href: "/services/data-platforms",
    icon: Database,
  },
  {
    title: "Executive Dashboards & BI",
    desc: "Sub-second visualizations, multi-touch revenue attribution, and C-suite telemetry.",
    href: "/services/executive-dashboards",
    icon: BarChart3,
  },
  {
    title: "AI Copilots & Autonomous Agents",
    desc: "Deterministic RAG systems, cyclic LangGraph state machines, and private model serving.",
    href: "/services/ai-copilots",
    icon: BrainCircuit,
  },
  {
    title: "Embedded Customer Analytics",
    desc: "Multi-tenant, white-labeled reporting engines built directly into your software.",
    href: "/services/embedded-analytics",
    icon: Layers,
  },
  {
    title: "Cloud & FinOps Infrastructure",
    desc: "Multi-cloud Kubernetes orchestration, Terraform IaC, and 35% cost reduction.",
    href: "/services/cloud-infrastructure",
    icon: Cloud,
  },
];

// =========================================================================
// 3 Featured Research Blogs
// =========================================================================
const RESEARCH_BLOGS = [
  {
    title: "Building Production-Grade RAG in 2026: Lessons from 100M Tokens",
    category: "AI Architecture",
    readTime: "7 min read",
    desc: "Why naive vector search fails in enterprise environments, and how hybrid BM25 + dense embedding cross-encoders prevent hallucinations.",
  },
  {
    title: "Modern Data Stack vs All-in-One AI Lakehouse: Executive Guide",
    category: "Data Strategy",
    readTime: "6 min read",
    desc: "An architectural and financial trade-off analysis between tool sprawl and consolidated ClickHouse/Databricks lakehouse topologies.",
  },
  {
    title: "Cutting Cloud Infrastructure Bills by 42% While Tripling Throughput",
    category: "Cloud FinOps",
    readTime: "5 min read",
    desc: "Tactical breakdown of Karpenter autoscaling, ClickHouse columnar compression, and smart spot instance management.",
  },
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedSolution, setSelectedSolution] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudyDetail | null>(null);

  // Filter Logic
  const filteredStudies = CASE_STUDIES_MASTER.filter((study) => {
    const matchIndustry = selectedIndustry === "All" || study.industry.toLowerCase().includes(selectedIndustry.toLowerCase());
    const matchSolution = selectedSolution === "All" || study.service.toLowerCase().includes(selectedSolution.toLowerCase());
    const matchTech = selectedTech === "All" || study.technologies.some((t) => t.toLowerCase() === selectedTech.toLowerCase());
    return matchIndustry && matchSolution && matchTech;
  });

  const featuredStudy = CASE_STUDIES_MASTER[0];

  return (
    <div className="bg-[#F7FAFC] text-[#0B2035] selection:bg-[#062B44] selection:text-white font-sans">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION REDESIGN */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-white via-[#ECFEFF]/25 to-[#F7FAFC] border-b border-[#D9E6EF]">
          {/* Ambient Gradient Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none -z-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(14,165,164,0.09), rgba(19,181,234,0.05), transparent 70%)",
            }}
          />

          <div className="site-container relative z-10 max-w-5xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-[#062B44] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#062B44] font-bold">Case Studies & Outcomes</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#062B44] border border-[#062B44]/20 shadow-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#0EA5A4]" />
              <span>REAL-WORLD RESULTS</span>
            </div>

            {/* Headline */}
            <h1 className="text-[38px] sm:text-[54px] lg:text-[66px] font-[900] leading-[1.02] tracking-tight text-[#062B44] mb-6 [text-wrap:balance]">
              Case Studies That Deliver{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#062B44] via-[#0EA5A4] to-[#13B5EA]">
                Measurable Business Outcomes
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
              Explore how startups, SMBs, and enterprises transformed operations, analytics, automation, and decision-making using CodePlaced&apos;s data and AI systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#case-studies-grid"
                className="w-full sm:w-auto h-[54px] px-8 rounded-[16px] bg-[#062B44] hover:bg-[#083A5B] text-white font-bold text-sm shadow-xl shadow-[#062B44]/20 flex items-center justify-center gap-2.5 transition-all border border-[#13B5EA]/30 active:scale-95"
              >
                <span>View Success Stories</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto h-[54px] px-8 rounded-[16px] bg-white hover:bg-slate-50 text-[#062B44] font-bold text-sm border border-[#D9E6EF] shadow-xs flex items-center justify-center transition-all"
              >
                <span>Book Architecture Call</span>
              </Link>
            </div>

            {/* KPI Row (5 Metrics) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-[#D9E6EF]">
              <div className="p-4 rounded-2xl bg-white border border-[#D9E6EF] shadow-2xs text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#062B44]">50+</div>
                <div className="text-xs font-bold text-slate-700 mt-0.5">Projects Delivered</div>
                <div className="text-[10px] text-slate-400">Fixed milestone sprints</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#D9E6EF] shadow-2xs text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#0EA5A4]">$10M+</div>
                <div className="text-xs font-bold text-slate-700 mt-0.5">Revenue Influenced</div>
                <div className="text-[10px] text-slate-400">Direct client ROI</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#D9E6EF] shadow-2xs text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#062B44]">100+</div>
                <div className="text-xs font-bold text-slate-700 mt-0.5">Automated Workflows</div>
                <div className="text-[10px] text-slate-400">Production DAGs</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#D9E6EF] shadow-2xs text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#062B44]">95%</div>
                <div className="text-xs font-bold text-slate-700 mt-0.5">Client Retention</div>
                <div className="text-[10px] text-slate-400">Long-term engineering pods</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#D9E6EF] shadow-2xs text-center col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">2–4 Wks</div>
                <div className="text-xs font-bold text-slate-700 mt-0.5">Production Delivery</div>
                <div className="text-[10px] text-slate-400">From audit to live cutover</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FEATURED FLAGSHIP CASE STUDY */}
        {/* ========================================================================= */}
        <section className="section-py site-container">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0EA5A4]">
                Flagship Case Study
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#062B44]">
                Featured Enterprise Outcome
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500 hidden sm:inline-block">
              {featuredStudy.clientType}
            </span>
          </div>

          <div className="rounded-[28px] bg-white border border-[#D9E6EF] shadow-lg overflow-hidden hover:border-[#0EA5A4]/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left: Project Image & Metric Overlay (Span 5) */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden bg-slate-900">
                <img
                  src={featuredStudy.image}
                  alt={featuredStudy.title}
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062B44]/95 via-[#062B44]/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECFEFF] text-[#062B44] shadow-sm">
                    {featuredStudy.industry}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                    Client: {featuredStudy.client}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    {featuredStudy.title}
                  </h3>
                </div>
              </div>

              {/* Right: Challenge, Solution & 6 Metrics (Span 7) */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#ECFEFF] text-[#062B44] font-bold border border-[#062B44]/10">
                      {featuredStudy.service}
                    </span>
                    <span className="text-slate-500 font-medium">
                      {featuredStudy.tagline}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {featuredStudy.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-[#F7FAFC] border border-slate-200 text-xs">
                      <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block mb-1">
                        Business Challenge:
                      </span>
                      <p className="text-slate-700 leading-relaxed">{featuredStudy.challenge}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#ECFEFF]/60 border border-[#0EA5A4]/20 text-xs">
                      <span className="font-bold text-[#0EA5A4] uppercase tracking-wider text-[10px] block mb-1">
                        Solution Delivered:
                      </span>
                      <p className="text-slate-700 leading-relaxed">{featuredStudy.solution}</p>
                    </div>
                  </div>

                  {/* 6 Key Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                    <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E6EF] text-center">
                      <div className="text-lg font-black text-[#062B44]">83.6%</div>
                      <div className="text-[10px] font-semibold text-slate-500 mt-0.5">Course Completion</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E6EF] text-center">
                      <div className="text-lg font-black text-[#0EA5A4]">90% Less</div>
                      <div className="text-[10px] font-semibold text-slate-500 mt-0.5">Reporting Time</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E6EF] text-center">
                      <div className="text-lg font-black text-[#062B44]">100%</div>
                      <div className="text-[10px] font-semibold text-slate-500 mt-0.5">Data Accuracy</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E6EF] text-center">
                      <div className="text-lg font-black text-emerald-600">3x Faster</div>
                      <div className="text-[10px] font-semibold text-slate-500 mt-0.5">Decision Making</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E6EF] text-center">
                      <div className="text-lg font-black text-[#062B44]">40%</div>
                      <div className="text-[10px] font-semibold text-slate-500 mt-0.5">Cost Reduction</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D9E6EF] text-center">
                      <div className="text-lg font-black text-[#0EA5A4]">95%</div>
                      <div className="text-[10px] font-semibold text-slate-500 mt-0.5">Forecast Accuracy</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredStudy.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-[#F7FAFC] border border-slate-200 text-slate-700 text-[11px] font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveModalStudy(featuredStudy)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#062B44] hover:bg-[#083A5B] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MULTI-DIMENSIONAL FILTER SYSTEM */}
        {/* ========================================================================= */}
        <section id="case-studies-grid" className="site-container pt-4 pb-12">
          <div className="p-6 sm:p-8 rounded-[24px] bg-white border border-[#D9E6EF] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
              <div className="flex items-center gap-2 font-bold text-sm text-[#062B44]">
                <SlidersHorizontal className="w-4 h-4 text-[#0EA5A4]" />
                <span>Filter Enterprise Case Studies</span>
              </div>
              {(selectedIndustry !== "All" || selectedSolution !== "All" || selectedTech !== "All") && (
                <button
                  onClick={() => {
                    setSelectedIndustry("All");
                    setSelectedSolution("All");
                    setSelectedTech("All");
                  }}
                  className="text-xs font-bold text-[#0EA5A4] hover:underline"
                >
                  Reset Filters
                </button>
              )}
            </div>

            {/* Filter 1: Industry Filters */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Filter by Industry:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {INDUSTRY_FILTERS.map((ind) => {
                  const isActive = selectedIndustry === ind;
                  return (
                    <button
                      key={ind}
                      onClick={() => setSelectedIndustry(ind)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        isActive
                          ? "bg-[#062B44] text-white shadow-xs"
                          : "bg-[#F7FAFC] text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {ind}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter 2: Solution Filters */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Filter by Solution:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SOLUTION_FILTERS.map((sol) => {
                  const isActive = selectedSolution === sol;
                  return (
                    <button
                      key={sol}
                      onClick={() => setSelectedSolution(sol)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        isActive
                          ? "bg-[#0EA5A4] text-white shadow-xs"
                          : "bg-[#F7FAFC] text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {sol}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter 3: Technology Filters */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Filter by Technology:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {TECH_FILTERS.map((tech) => {
                  const isActive = selectedTech === tech;
                  return (
                    <button
                      key={tech}
                      onClick={() => setSelectedTech(tech)}
                      className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                        isActive
                          ? "bg-slate-800 text-white shadow-xs"
                          : "bg-[#F7FAFC] text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {tech}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 4. CASE STUDY CARDS GRID */}
          {/* ========================================================================= */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-black text-[#062B44]">
                Showing {filteredStudies.length} Case Studies
              </h3>
              <span className="text-xs font-bold text-slate-500">
                2–4 Week Production Sprints
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredStudies.map((study, idx) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="rounded-[24px] bg-white border border-[#D9E6EF] shadow-xs hover:shadow-xl hover:border-[#0EA5A4]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Visual Thumbnail Banner */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#062B44]/95 via-[#062B44]/40 to-transparent" />

                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#ECFEFF] text-[#062B44] shadow-xs">
                          {study.industry}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#062B44]/80 text-cyan-200 border border-white/10">
                          {study.service}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                          {study.client}
                        </div>
                        <h4 className="text-base font-bold text-white leading-snug line-clamp-2">
                          {study.title}
                        </h4>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {study.summary}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1">
                        {study.technologies.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-[#F7FAFC] border border-slate-200 text-slate-700 text-[10px] font-semibold"
                          >
                            {t}
                          </span>
                        ))}
                        {study.technologies.length > 4 && (
                          <span className="px-1.5 py-0.5 text-[10px] font-bold text-slate-400">
                            +{study.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Business Impact Box */}
                      <div className="p-3.5 rounded-xl bg-[#ECFEFF]/60 border border-[#0EA5A4]/20 flex items-center justify-between">
                        <div>
                          <div className="text-[9px] uppercase font-bold text-slate-400">Primary Impact</div>
                          <div className="text-xs font-black text-[#062B44]">{study.metrics[0].label}</div>
                        </div>
                        <span className="text-base font-black text-[#0EA5A4]">{study.metrics[0].value}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Trigger */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setActiveModalStudy(study)}
                      className="w-full py-3 px-4 rounded-xl bg-[#F7FAFC] hover:bg-[#062B44] text-[#062B44] hover:text-white text-xs font-bold border border-slate-200 hover:border-[#062B44] flex items-center justify-center gap-2 transition-all group/btn shadow-2xs"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. INDUSTRY SUCCESS GRID (Solutions Across Industries) */}
        {/* ========================================================================= */}
        <section className="section-py bg-white border-y border-[#D9E6EF]">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0EA5A4]">
                Domain Blueprints
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B44] tracking-tight">
                Solutions Across Industries
              </h2>
              <p className="text-slate-600 text-base">
                Discover how we deliver verified ROI across regulated and high-throughput enterprise verticals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {INDUSTRY_SOLUTIONS_LIST.map((ind) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={ind.industry}
                    className="p-5 rounded-2xl bg-[#F7FAFC] border border-[#D9E6EF] shadow-2xs hover:shadow-lg hover:border-[#0EA5A4]/40 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[rgba(6,43,68,0.08)] text-[#062B44] flex items-center justify-center font-bold">
                          <IndIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {ind.projects}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-[#062B44]">{ind.industry}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{ind.useCases}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-200 text-[10px] font-bold text-[#0EA5A4]">
                      {ind.outcomes}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. IMPACT METRICS SECTION (Dark Gradient) */}
        {/* ========================================================================= */}
        <section className="section-py bg-gradient-to-r from-[#062B44] via-[#083A5B] to-[#0EA5A4] text-white">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                Institutional Confidence
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Business Outcomes We Consistently Deliver
              </h2>
              <p className="text-slate-300 text-base max-w-2xl mx-auto">
                Our milestone-based 2–4 week sprints eliminate consulting bloat and deliver production systems that scale.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {IMPACT_METRICS.map((m) => (
                <div
                  key={m.label}
                  className="p-6 rounded-2xl bg-white/[0.06] border border-white/10 text-center backdrop-blur-md space-y-2 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-black text-cyan-300">{m.value}</div>
                  <h4 className="text-xs font-bold text-white leading-snug">{m.label}</h4>
                  <p className="text-[10px] text-slate-300 leading-tight">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. BEFORE VS AFTER TRANSFORMATION */}
        {/* ========================================================================= */}
        <section className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0EA5A4]">
              Enterprise Shift
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B44] tracking-tight">
              Before vs After Transformation
            </h2>
            <p className="text-slate-600 text-base">
              See how modernizing into an automated lakehouse and AI ecosystem changes day-to-day operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before Card */}
            <div className="p-8 rounded-[28px] bg-red-50/50 border border-red-200/80 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-red-200">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
                  <X className="w-4 h-4 text-red-600" />
                  <span>Legacy State (Before CodePlaced)</span>
                </span>
                <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2.5 py-0.5 rounded-full">
                  High Risk
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-700 font-medium">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  <span>Manual spreadsheets and CSV extracts prone to human formula errors</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  <span>Siloed databases with no unified customer or financial truth layer</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  <span>Slow 3-day reporting cycles preventing agile C-suite decisions</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  <span>High cloud bills from unindexed scans and runaway compute jobs</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  <span>Failing compliance audits due to zero column-level data lineage</span>
                </div>
              </div>
            </div>

            {/* After Card */}
            <div className="p-8 rounded-[28px] bg-emerald-50/50 border border-emerald-200/80 space-y-5 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Modernized State (With CodePlaced)</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Enterprise Grade
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-800 font-bold">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                  <span>Automated real-time CDC pipelines with 100% data contract validation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                  <span>Unified lakehouse with sub-50ms executive dashboards and anomaly alerts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                  <span>Deterministic AI copilots with verified inline citations and zero hallucinations</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                  <span>35%+ FinOps cloud savings via columnar OLAP and spot instance autoscaling</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                  <span>100% IP ownership committed directly into your private Git repositories</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. TECHNOLOGIES USED ACROSS PROJECTS */}
        {/* ========================================================================= */}
        <section id="tech-stack" className="section-py bg-white border-y border-[#D9E6EF]">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0EA5A4]">
                Enterprise Toolchain
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B44] tracking-tight">
                Technologies Used Across Projects
              </h2>
              <p className="text-slate-600 text-base">
                Battle-tested frameworks proven for petabyte data throughput, sub-15ms AI inference, and 99.9% uptime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_CATEGORIES_GRID.map((cat) => (
                <div
                  key={cat.category}
                  className="p-7 rounded-[24px] bg-[#F7FAFC] border border-[#D9E6EF] shadow-2xs hover:shadow-xl hover:border-[#0EA5A4]/40 transition-all space-y-4 flex flex-col justify-between"
                >
                  <h3 className="text-base font-bold text-[#062B44]">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.tools.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-white border border-[#D9E6EF] text-xs font-bold text-[#062B44] shadow-2xs hover:border-[#13B5EA]/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. CLIENT TESTIMONIALS (Dark Gradient Section) */}
        {/* ========================================================================= */}
        <section className="section-py bg-gradient-to-r from-[#062B44] via-[#083A5B] to-[#0EA5A4] text-white">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                Verified Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Trusted by Growing Teams and Enterprises
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="p-7 rounded-[24px] bg-white/[0.06] border border-white/10 space-y-4 flex flex-col justify-between backdrop-blur-md hover:border-cyan-400/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {t.result}
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover border border-white/20"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">{t.name}</div>
                        <div className="text-[10px] text-slate-300">{t.role}, {t.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. RELATED SERVICES CROSS-SELL */}
        {/* ========================================================================= */}
        <section className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0EA5A4]">
              Architectural Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B44] tracking-tight">
              Recommended Enterprise Services
            </h2>
            <p className="text-slate-600 text-base">
              Explore our core pillars of excellence delivered in 2–4 week milestone sprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {RECOMMENDED_SERVICES.map((srv) => {
              const SrvIcon = srv.icon;
              return (
                <Link
                  key={srv.title}
                  href={srv.href}
                  className="p-6 rounded-[24px] bg-white border border-[#D9E6EF] shadow-2xs hover:shadow-xl hover:border-[#0EA5A4]/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(6,43,68,0.08)] text-[#062B44] flex items-center justify-center font-bold group-hover:bg-[#062B44] group-hover:text-white transition-colors">
                      <SrvIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#062B44] group-hover:text-[#0EA5A4] transition-colors">
                      {srv.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#062B44] group-hover:text-[#0EA5A4]">
                    <span>Explore Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. RESEARCH & INSIGHTS SECTION */}
        {/* ========================================================================= */}
        <section id="insights" className="section-py bg-white border-t border-[#D9E6EF]">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0EA5A4]">
                Engineering Publications
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B44] tracking-tight">
                Latest Research & Insights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RESEARCH_BLOGS.map((art) => (
                <div
                  key={art.title}
                  className="p-7 rounded-[24px] bg-[#F7FAFC] border border-[#D9E6EF] shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-bold text-[#062B44] bg-[#ECFEFF] px-2.5 py-0.5 rounded-full border border-[#062B44]/20">
                        {art.category}
                      </span>
                      <span>{art.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#062B44] leading-snug">{art.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{art.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <Link
                      href="/blog"
                      className="text-xs font-bold text-[#062B44] hover:text-[#0EA5A4] inline-flex items-center gap-1.5"
                    >
                      <span>Read Publication</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#062B44] text-[#062B44] text-xs font-bold transition-all shadow-xs"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 13. FINAL CTA SECTION */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-r from-[#062B44] via-[#083A5B] to-[#0EA5A4] text-white py-16 sm:py-20 text-center border-t border-slate-700">
          <div className="site-container max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Start Your Enterprise Engagement
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Ready to Become Our Next Success Story?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Book a 30-minute architecture review and discover how we can streamline your data, analytics, and AI initiatives in 2–4 week fixed sprints.
            </p>

            {/* Benefits Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-cyan-200 pt-2">
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NDA Signed Upfront</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Senior Architect Review</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Production Roadmap</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>2–4 Week Delivery Plan</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#062B44] font-black text-sm shadow-xl transition-all"
              >
                <span>Book Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                <span>View Service Blueprints</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. FULL CASE STUDY DETAIL MODAL */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {activeModalStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalStudy(null)}
                className="fixed inset-0 bg-[#062B44]/80 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[28px] border border-[#D9E6EF] shadow-2xl p-6 sm:p-10 space-y-8 text-left"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECFEFF] text-[#062B44]">
                        {activeModalStudy.industry}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {activeModalStudy.clientType}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#062B44]">
                      {activeModalStudy.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveModalStudy(null)}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* 4 Outcome Metrics Ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeModalStudy.metrics.map((m) => (
                    <div key={m.label} className="p-4 rounded-xl bg-[#F7FAFC] border border-[#D9E6EF] text-center">
                      <div className="text-xl font-black text-[#062B44]">{m.value}</div>
                      <div className="text-[10px] font-semibold text-slate-500 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Existing System Problems */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#062B44] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#0EA5A4]" />
                    <span>Business Challenge & Legacy Friction</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeModalStudy.challenge}
                  </p>

                  <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2 text-xs">
                    <span className="font-bold text-red-800 uppercase tracking-wider text-[10px] block">
                      Existing System Vulnerabilities:
                    </span>
                    {activeModalStudy.existingProblems.map((prob, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-red-950 font-medium">
                        <X className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{prob}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Designed */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#062B44] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#0EA5A4]" />
                    <span>Architecture Designed & Implemented</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeModalStudy.solution}
                  </p>

                  <div className="p-5 rounded-2xl bg-[#ECFEFF]/60 border border-[#0EA5A4]/20 space-y-2 text-xs">
                    <span className="font-bold text-[#062B44] uppercase tracking-wider text-[10px] block">
                      Key Technical Components:
                    </span>
                    {activeModalStudy.architectureDetails.map((arch, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-slate-800 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Timeline & Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Timeline */}
                  <div className="p-5 rounded-2xl bg-[#F7FAFC] border border-slate-200 space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#062B44]">
                      4-Week Sprint Milestones
                    </h5>
                    <div className="space-y-2">
                      {activeModalStudy.processTimeline.map((step) => (
                        <div key={step.week} className="text-xs">
                          <span className="font-bold text-[#0EA5A4] block">{step.week}:</span>
                          <span className="text-slate-600">{step.milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results & Lessons */}
                  <div className="p-5 rounded-2xl bg-[#F7FAFC] border border-slate-200 space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#062B44]">
                      Verified Business Impact
                    </h5>
                    <div className="space-y-2">
                      {activeModalStudy.resultsAchieved.map((res, rIdx) => (
                        <div key={rIdx} className="text-xs text-slate-700 font-medium flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Technologies Used in this Engagement:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeModalStudy.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-[#F7FAFC] border border-slate-200 text-xs font-bold text-[#062B44]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    100% intellectual property ownership committed directly to your repos.
                  </div>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#062B44] hover:bg-[#083A5B] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Schedule Architecture Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
  );
}
