"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  Truck,
  ShoppingBag,
  Building2,
  GraduationCap,
  Factory,
  Radio,
  Zap,
  Film,
  Building,
  HardHat,
  Plane,
  Briefcase,
  CheckCircle2,
  Workflow,
  ChevronRight,
  Search,
  ChevronDown,
  ChevronLeft,
  Filter,
  Check,
} from "lucide-react";

// =========================================================================
// 1. TRUST METRICS RIBBON (Hero Verified Stats)
// =========================================================================
const TRUST_METRICS = [
  { value: "100+", label: "Enterprise Deployments", sub: "Across 16+ verticals" },
  { value: "95%", label: "Client Retention Rate", sub: "Multi-year partnerships" },
  { value: "2–4 Wks", label: "Average Delivery Sprint", sub: "From audit to production" },
  { value: "99.99%", label: "Guaranteed SLA", sub: "Mission-critical reliability" },
];

// =========================================================================
// 2. FEATURED INDUSTRY SOLUTIONS CAROUSEL DATA
// =========================================================================
const FEATURED_SOLUTIONS = [
  {
    id: "healthcare-ai",
    industry: "Healthcare & Life Sciences",
    title: "Clinical Copilot & HIPAA EHR Lakehouse",
    metric: "4.8x Faster",
    metricLabel: "Patient Intake Cycle",
    desc: "Air-gapped clinical triage AI copilot with deterministic ICD-10 medical citation guardrails and an encrypted FHIR lakehouse.",
    tech: ["FHIR", "HL7", "BigQuery", "Looker Studio", "Python", "FastAPI"],
    badge: "HIPAA Compliant",
    highlight: "18,000+ physician hours saved annually across 14 hospital networks.",
    architecture: "EHR Silos → Kafka Ingest → BigQuery Lakehouse → LangGraph Clinical Copilot → Provider Cockpit",
  },
  {
    id: "fintech-fraud",
    industry: "Financial Services & Banking",
    title: "Real-Time SEC Audit & Fraud Detection Engine",
    metric: "< 12 ms",
    metricLabel: "p99 Ledger Latency",
    desc: "Sub-second analytical data mart using ClickHouse columnar OLAP with automated reconciliation DAGs and SEC compliance alerts.",
    tech: ["Snowflake", "ClickHouse", "dbt", "Kafka", "Java", "Spring Boot"],
    badge: "SOC 2 & SEC Ready",
    highlight: "99.999% ledger accuracy with $1.4M saved in annual cloud data warehouse overhead.",
    architecture: "Transaction Stream → Kafka Event Broker → ClickHouse OLAP → Anomaly ML Model → Executive Cockpit",
  },
  {
    id: "retail-analytics",
    industry: "Retail & E-Commerce",
    title: "Omnichannel Customer CDP & Multi-Touch ROAS",
    metric: "+18%",
    metricLabel: "Gross Margin Expansion",
    desc: "Unified customer data platform on Snowflake with automated ad attribution modeling, dynamic pricing ML, and inventory telemetry.",
    tech: ["Snowflake", "dbt Core", "Looker Studio", "Python", "PostgreSQL"],
    badge: "Multi-Touch ROAS",
    highlight: "14% blended customer CAC reduction across 2.4M active omnichannel shoppers.",
    architecture: "Shopify + Ad Spends → dbt Transformations → Snowflake CDP → Dynamic Pricing ML → Real-Time BI",
  },
  {
    id: "logistics-command",
    industry: "Logistics & Supply Chain",
    title: "Fleet Command Center & Telematics Telemetry",
    metric: "24%",
    metricLabel: "Fleet Downtime Reduction",
    desc: "High-throughput ELD telematics lakehouse processing 1.2M sensor events/second with predictive route optimization.",
    tech: ["Kafka", "Apache Spark", "Databricks", "Power BI", "Node.js"],
    badge: "Sub-25ms GPS Sync",
    highlight: "$3.2M saved in prevented shipment delays and fuel efficiency routing.",
    architecture: "Vehicle Sensors → Spark Streaming → Databricks Lakehouse → Telematics API → Dispatch Console",
  },
  {
    id: "saas-multitenant",
    industry: "SaaS & Cloud Platforms",
    title: "Multi-Tenant Lakehouse & Embedded Copilots",
    metric: "32%",
    metricLabel: "ARR Expansion Rate",
    desc: "Tenant-isolated analytics engine allowing SaaS applications to embed custom SQL exploration and AI copilots natively.",
    tech: ["React", "Next.js", "ClickHouse", "OpenAI GPT-4o", "Postgres"],
    badge: "Tenant Isolation",
    highlight: "4x increase in enterprise tier upgrades driven by white-labeled embedded analytics.",
    architecture: "Tenant Event Logs → ClickHouse Cloud → Row-Level Security Layer → Embedded Next.js Dashboards",
  },
  {
    id: "manufacturing-iot",
    industry: "Manufacturing & Industrial",
    title: "Industrial IoT Predictive Maintenance Platform",
    metric: "35%",
    metricLabel: "Less Machine Downtime",
    desc: "Edge-to-cloud vibration and thermal sensor ingestion pipelines predicting equipment failure 72 hours before breakdown.",
    tech: ["Kafka", "TimeScaleDB", "FastAPI", "Power BI", "Python ML"],
    badge: "Industry 4.0",
    highlight: "$4.5M prevented annual downtime across 8 automated assembly facilities.",
    architecture: "Edge SCADA Sensors → MQTT Broker → Kafka Stream → TimeScaleDB → Maintenance Dispatch Alerts",
  },
];

// =========================================================================
// 3. MISSION-CRITICAL INDUSTRIES EXPLORER DATA
// =========================================================================
interface IndustryExplorerItem {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  badge: string;
  desc: string;
  impact: string;
  capabilities: string[];
  tech: string[];
  compliance: string;
}

const INDUSTRIES_LIST: IndustryExplorerItem[] = [
  {
    id: "healthcare",
    name: "Healthcare & MedTech",
    category: "Healthcare & Life Sciences",
    icon: HeartPulse,
    badge: "HIPAA Ready",
    desc: "Clinical triage AI, EHR data lakehouses, patient intake telemetry, and diagnostic copilots.",
    impact: "4.8x faster intake",
    capabilities: ["HIPAA Data Lakehouses", "Clinical Triage Copilots", "EHR Ingestion Pipelines"],
    tech: ["FHIR", "HL7", "BigQuery", "Looker Studio"],
    compliance: "HIPAA, HITRUST, SOC 2",
  },
  {
    id: "fintech",
    name: "Finance & FinTech",
    category: "Finance & Banking",
    icon: Landmark,
    badge: "SOC 2 & SEC",
    desc: "Real-time ledger reconciliations, automated SEC reporting, fraud risk ML, and portfolio cockpits.",
    impact: "99.999% ledger accuracy",
    capabilities: ["Real-Time SEC Reporting", "Sub-Second Risk Analytics", "Fraud Detection ML"],
    tech: ["Snowflake", "ClickHouse", "dbt", "Kafka"],
    compliance: "SEC, FINRA, SOC 2 Type II",
  },
  {
    id: "saas",
    name: "SaaS & Cloud Tech",
    category: "SaaS & Tech",
    icon: MonitorSmartphone,
    badge: "Multi-Tenant",
    desc: "Embedded customer analytics, multi-tenant lakehouse isolation, usage billing, and in-app AI copilots.",
    impact: "32% ARR expansion",
    capabilities: ["Embedded Analytics Widgets", "Tenant Vector Isolation", "In-App AI Copilots"],
    tech: ["React", "Next.js", "ClickHouse", "OpenAI"],
    compliance: "SOC 2, GDPR, CCPA",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    category: "Commerce & Media",
    icon: ShoppingBag,
    badge: "ROAS ML",
    desc: "Multi-touch marketing attribution, inventory stockout forecasting, and dynamic pricing algorithms.",
    impact: "18% gross margin lift",
    capabilities: ["Multi-Touch ROAS Attribution", "Dynamic Pricing Engine", "Inventory Forecasting"],
    tech: ["Snowflake", "dbt Core", "Looker Studio", "Python"],
    compliance: "PCI-DSS, GDPR",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    category: "Supply Chain & IoT",
    icon: Truck,
    badge: "Sub-25ms GPS",
    desc: "Fleet telematics lakehouses, weather-adjusted route forecasting, and automated bill-of-lading OCR.",
    impact: "24% cost reduction",
    capabilities: ["Fleet Telematics Stream", "Route Optimization ML", "Automated BOL OCR Normalization"],
    tech: ["Kafka", "Databricks", "Spark", "Power BI"],
    compliance: "DOT, ELD Mandate, SOC 2",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    category: "Supply Chain & IoT",
    icon: Factory,
    badge: "Industry 4.0",
    desc: "Sensor streaming lakehouses, predictive vibration anomaly detection, and plant OEE telemetry.",
    impact: "35% less downtime",
    capabilities: ["Predictive Maintenance ML", "Plant Floor OEE Dashboards", "SCADA Historian Lakehouse"],
    tech: ["TimeScaleDB", "Kafka", "Python", "Power BI"],
    compliance: "ISO 9001, ISA-95, OSHA",
  },
  {
    id: "insurance",
    name: "Insurance & Underwriting",
    category: "Finance & Banking",
    icon: ShieldCheck,
    badge: "Risk Intelligence",
    desc: "Automated policy extraction, first-notice-of-loss claims triage, and actuarial loss modeling.",
    impact: "74% faster claims",
    capabilities: ["Claims Triage OCR", "Actuarial Risk Models", "Fraud Scoring Engine"],
    tech: ["Snowflake", "LangChain", "Python", "Looker Studio"],
    compliance: "NAIC, HIPAA, SOC 2",
  },
  {
    id: "realestate",
    name: "Real Estate & PropTech",
    category: "Commerce & Media",
    icon: Building2,
    badge: "Doc AI",
    desc: "Commercial lease abstraction OCR, automated NOI waterfall modeling, and valuation ML.",
    impact: "80% faster review",
    capabilities: ["Lease Abstraction OCR", "Portfolio NOI Modeling", "Tenant Churn Forecasting"],
    tech: ["OpenAI", "PostgreSQL", "React", "Next.js"],
    compliance: "SOC 2, Fair Housing Act",
  },
  {
    id: "education",
    name: "Education & EdTech",
    category: "Public & Regulated",
    icon: GraduationCap,
    badge: "FERPA Ready",
    desc: "Adaptive AI tutoring copilots, automated rubric grading, and student retention telemetry.",
    impact: "3.2x engagement",
    capabilities: ["Adaptive Learning Copilots", "Student Retention BI", "Automated Rubric Graders"],
    tech: ["Node.js", "Python", "OpenAI", "BigQuery"],
    compliance: "FERPA, COPPA, ADA Title III",
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    category: "Supply Chain & IoT",
    icon: Zap,
    badge: "Grid Analytics",
    desc: "Smart meter Kafka streams, peak grid load forecasting ML, and automated ESG carbon compliance.",
    impact: "28% peak savings",
    capabilities: ["Smart Meter Streaming", "Grid Load Forecast ML", "ESG Carbon Telemetry"],
    tech: ["Kafka", "Apache Spark", "Databricks", "Power BI"],
    compliance: "NERC CIP, FERC, ISO 14001",
  },
  {
    id: "telecom",
    name: "Telecommunications",
    category: "SaaS & Tech",
    icon: Radio,
    badge: "Sub-10ms Queries",
    desc: "Real-time 5G network telemetry, subscriber churn prediction ML, and high-concurrency billing analytics.",
    impact: "Sub-10ms queries",
    capabilities: ["5G Telemetry Ingestion", "Subscriber Churn ML", "CDR Billing Lakehouse"],
    tech: ["ClickHouse", "Kafka", "Go", "Looker Studio"],
    compliance: "FCC, CALEA, SOC 2",
  },
  {
    id: "government",
    name: "Government & Public Sector",
    category: "Public & Regulated",
    icon: Building,
    badge: "FedRAMP Ready",
    desc: "FedRAMP & CJIS compliant data environments, citizen telemetry portals, and automated case document indexing.",
    impact: "100% audit pass",
    capabilities: ["FedRAMP Data Lakehouse", "Citizen Portal Telemetry", "Case Document Indexing"],
    tech: ["AWS GovCloud", "PostgreSQL", "React", "Python"],
    compliance: "FedRAMP, CJIS, FISMA",
  },
  {
    id: "construction",
    name: "Construction & Engineering",
    category: "Supply Chain & IoT",
    icon: HardHat,
    badge: "IoT Telemetry",
    desc: "Jobsite sensor streaming, subcontractor risk modeling, and automated project cost forecasting DAGs.",
    impact: "22% margin protect",
    capabilities: ["Jobsite Sensor Telemetry", "Subcontractor Risk ML", "Cost Variance DAGs"],
    tech: ["Python", "FastAPI", "PostgreSQL", "Power BI"],
    compliance: "OSHA, Procore Sync",
  },
  {
    id: "media",
    name: "Media & Advertising",
    category: "Commerce & Media",
    icon: Film,
    badge: "Real-Time Attribution",
    desc: "Programmatic ad yield optimization, content recommendation graphs, and real-time impression analytics.",
    impact: "42% higher yield",
    capabilities: ["Programmatic Yield Engine", "Content Recommendation Graph", "Impression Streaming OLAP"],
    tech: ["ClickHouse", "Kafka", "Python", "React"],
    compliance: "GDPR, COPPA, IAB TCF",
  },
  {
    id: "hospitality",
    name: "Hospitality & Travel",
    category: "Commerce & Media",
    icon: Plane,
    badge: "Yield ML",
    desc: "Dynamic room pricing ML, RevPAR intelligence cockpits, and guest sentiment graph analytics.",
    impact: "15% RevPAR lift",
    capabilities: ["Dynamic Yield Engine", "RevPAR BI Cockpit", "Guest Sentiment AI"],
    tech: ["Snowflake", "ClickHouse", "Python", "Tableau"],
    compliance: "PCI-DSS, GDPR",
  },
  {
    id: "professional-services",
    name: "Professional & Legal Services",
    category: "Public & Regulated",
    icon: Briefcase,
    badge: "Practice BI",
    desc: "Resource utilization telemetry, automated client billing attribution, and contract knowledge copilots.",
    impact: "20+ hrs/wk saved",
    capabilities: ["Contract Review Copilot", "Utilization Telemetry", "Knowledge Search RAG"],
    tech: ["LangChain", "OpenAI", "PostgreSQL", "React"],
    compliance: "ABA Model Rules, SOC 2",
  },
];

const FILTER_CATEGORIES = [
  "All Industries",
  "Healthcare & Life Sciences",
  "Finance & Banking",
  "SaaS & Tech",
  "Supply Chain & IoT",
  "Commerce & Media",
  "Public & Regulated",
];

// =========================================================================
// 4. ARCHITECTURE BLUEPRINTS INTERACTIVE SECTION DATA
// =========================================================================
const BLUEPRINTS = [
  {
    id: "healthcare-blueprint",
    name: "Healthcare EHR Lakehouse",
    domain: "Healthcare",
    badge: "HIPAA Air-Gapped",
    sla: "99.99% Availability",
    steps: [
      { num: "01", title: "Data Sources", desc: "Epic, Cerner, FHIR APIs, PACS DICOM images, and legacy SQL Server clinical silos.", tech: "FHIR / HL7 CDC", tag: "Encrypted Ingest" },
      { num: "02", title: "Ingestion & Security", desc: "De-identification pipeline with HIPAA Safe Harbor hashing and automated Kafka streams.", tech: "Kafka + Air-Gapped VPC", tag: "PHI Scrubbing" },
      { num: "03", title: "Lakehouse Core", desc: "BigQuery / Databricks Delta lake with automated dbt clinical testing and data quality checks.", tech: "Delta Lake + dbt Core", tag: "Deterministic Data" },
      { num: "04", title: "AI Clinical Copilot", desc: "LangGraph deterministic reasoning agent with medical citation guardrails and vector index.", tech: "Hybrid RAG + Vector DB", tag: "Zero Hallucinations" },
      { num: "05", title: "Provider Cockpit", desc: "Snappy Next.js WebGL & Looker Studio cockpits for ICU occupancy, triage, and doctor workflows.", tech: "Looker Studio / Next.js", tag: "< 18ms Queries" },
    ],
  },
  {
    id: "fintech-blueprint",
    name: "Real-Time FinTech Ledger",
    domain: "Financial Services",
    badge: "SOC 2 & SEC Ready",
    sla: "< 12ms p99 Latency",
    steps: [
      { num: "01", title: "Transaction Feeds", desc: "Core banking APIs, Stripe webhooks, SWIFT/ACH message queues, and stock exchange tick feeds.", tech: "Event Streaming", tag: "Zero Event Loss" },
      { num: "02", title: "Event Broker", desc: "High-throughput Apache Kafka cluster partitioned by tenant with distributed idempotency locks.", tech: "Apache Kafka Cluster", tag: "10M+ Events/Sec" },
      { num: "03", title: "Columnar OLAP Mart", desc: "ClickHouse real-time columnar database aggregating billions of rows in sub-second queries.", tech: "ClickHouse Columnar", tag: "Sub-Second OLAP" },
      { num: "04", title: "Fraud & Recon ML", desc: "Continuous ledger reconciliation DAGs and real-time transaction anomaly detection models.", tech: "dbt Tests + Scikit-Learn", tag: "99.999% Accuracy" },
      { num: "05", title: "Executive Cockpit", desc: "C-suite risk telemetry, real-time VaR models, automated SEC 10-K audit reporting tables.", tech: "Power BI / React Portal", tag: "Executive Agility" },
    ],
  },
  {
    id: "saas-blueprint",
    name: "SaaS Multi-Tenant Engine",
    domain: "SaaS & Cloud Platforms",
    badge: "Multi-Tenant Isolated",
    sla: "Sub-15ms In-App Response",
    steps: [
      { num: "01", title: "App Event Telemetry", desc: "PostHog, Segment, Stripe billing webhooks, and Postgres operational application database.", tech: "CDC Sync Pipelines", tag: "Sub-Minute Sync" },
      { num: "02", title: "Row-Level Security", desc: "Cryptographic tenant isolation with automatic tenant routing and partitioned schemas.", tech: "Tenant Routing Layer", tag: "100% Data Isolation" },
      { num: "03", title: "Warehouse Mart", desc: "Snowflake / ClickHouse data mart with automated dbt rollup models for tenant usage telemetry.", tech: "Snowflake + dbt Cloud", tag: "Cost Optimized" },
      { num: "04", title: "In-App AI Copilot", desc: "Contextual RAG assistant answering customer questions using tenant-specific knowledge bases.", tech: "OpenAI GPT-4o + pgvector", tag: "Isolated Vector DB" },
      { num: "05", title: "Embedded Analytics", desc: "Native embedded React analytics components with custom SQL query sandbox and PDF export.", tech: "React + Tailwind + WebGL", tag: "White-Labeled UI" },
    ],
  },
  {
    id: "logistics-blueprint",
    name: "Supply Chain IoT Command",
    domain: "Logistics & Fleet",
    badge: "Sub-25ms GPS Sync",
    sla: "24/7 Zero Downtime",
    steps: [
      { num: "01", title: "Fleet & Sensors", desc: "ELD GPS pings, OBD-II engine diagnostics, temperature sensors, and warehouse RFID readers.", tech: "IoT Edge Gateways", tag: "1.2M Pings/Sec" },
      { num: "02", title: "Stream Processing", desc: "Apache Spark Structured Streaming consuming Kafka topics with geospatial geofence filtering.", tech: "Spark + Kafka Cluster", tag: "Real-Time Stream" },
      { num: "03", title: "Historian Lakehouse", desc: "Databricks Delta Lake storing billions of historical vehicle trips with Z-order indexing.", tech: "Databricks Delta Lake", tag: "Petabyte Scalable" },
      { num: "04", title: "Route Optimization ML", desc: "Weather-adjusted predictive arrival models and automated dynamic route re-dispatching.", tech: "Python Fast Route DAGs", tag: "24% Cost Saved" },
      { num: "05", title: "Dispatch Portal", desc: "Interactive map view with live driver routing, detention alert triggers, and BOL OCR indexing.", tech: "Next.js + Mapbox + Power BI", tag: "Sub-25ms Map FPS" },
    ],
  },
];

// =========================================================================
// 5. INDUSTRY CAPABILITIES & TECH STACKS ACCORDION DATA
// =========================================================================
const DETAILED_SERVICES = [
  {
    id: "healthcare",
    name: "Healthcare & MedTech",
    icon: HeartPulse,
    summary: "Clinical triage AI, HIPAA-shielded data lakehouses, patient intake telemetry, and physician productivity cockpits.",
    challenge: "Fragmented EHR silos and manual intake forms cause 45-minute average wait times, physician burnout, and compliance vulnerabilities across hospital networks.",
    solutions: [
      "HIPAA-Shielded Data Lakehouses (FHIR / HL7 Ingestion)",
      "Clinical Triage AI Copilots with deterministic citation guardrails",
      "ICU bed occupancy & physician productivity executive dashboards",
      "Automated medical coding (ICD-10 / CPT) classification models",
    ],
    techStack: ["FHIR", "HL7", "BigQuery", "Looker Studio", "Python", "FastAPI", "GCP Healthcare API"],
    outcomes: ["4.8x faster patient intake", "18,000+ physician hours saved", "100% HIPAA audit compliance"],
  },
  {
    id: "fintech",
    name: "Financial Services & Banking",
    icon: Landmark,
    summary: "Sub-second ledger reconciliations, real-time SEC audit compliance, fraud risk ML, and executive liquidity cockpits.",
    challenge: "Legacy data warehouse queries take 8+ minutes to execute, leaving leadership blind to intraday liquidity risks, transaction fraud, and regulatory reconciliations.",
    solutions: [
      "Sub-second ClickHouse columnar data marts for high-frequency transactions",
      "Real-time fraud scoring DAGs processing 10,000+ events per second",
      "Automated SEC 10-K / FINRA regulatory compliance reporting tables",
      "Executive liquidity, portfolio IRR, and multi-asset exposure cockpits",
    ],
    techStack: ["Snowflake", "ClickHouse", "dbt", "Kafka", "Java", "Spring Boot", "AWS KMS HSM"],
    outcomes: ["< 12ms p99 query latency", "99.999% verified ledger accuracy", "$1.4M annual cloud cost saved"],
  },
  {
    id: "saas",
    name: "SaaS & Cloud Platforms",
    icon: MonitorSmartphone,
    summary: "Tenant-isolated embedded analytics widgets, in-app RAG copilots, product telemetry, and usage-based billing telemetry.",
    challenge: "Engineering teams spend months building custom reporting instead of core product features, resulting in customer churn and low expansion revenue.",
    solutions: [
      "Multi-tenant embedded analytics widgets with row-level security",
      "In-app AI copilots operating over tenant-isolated knowledge bases",
      "Real-time product telemetry (PostHog/Segment) to Snowflake pipelines",
      "Stripe billing usage-metering and Net Revenue Retention (NRR) telemetry",
    ],
    techStack: ["React", "Next.js", "ClickHouse", "OpenAI GPT-4o", "PostgreSQL", "dbt Cloud"],
    outcomes: ["32% ARR expansion lift", "4x faster enterprise onboarding", "Sub-15ms embedded queries"],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    summary: "High-throughput ELD sensor streaming, weather-adjusted route optimization ML, and automated bill-of-lading OCR.",
    challenge: "Delayed carrier status updates, manual bill-of-lading entries, and blind route congestion lead to demurrage penalties and high fuel overhead.",
    solutions: [
      "High-throughput ELD GPS and sensor streaming lakehouse (1.2M msgs/sec)",
      "Weather and congestion-adjusted predictive route optimization ML",
      "Automated bill-of-lading (BOL) and shipping invoice OCR normalization",
      "Central dispatch command portal with live fleet geofencing alerts",
    ],
    techStack: ["Kafka", "Apache Spark", "Databricks", "Power BI", "Node.js", "Mapbox GL"],
    outcomes: ["24% reduction in fleet downtime", "$3.2M saved in prevented delays", "Sub-25ms GPS telemetry"],
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    icon: ShoppingBag,
    summary: "Unified customer data platforms (CDP), multi-touch attribution DAGs, dynamic pricing, and stockout forecasting ML.",
    challenge: "Fragmented ad spend across channels causes inaccurate CAC calculations, blind attribution, and expensive inventory stockouts.",
    solutions: [
      "Unified customer data platform (CDP) on Snowflake linking Shopify + ad channels",
      "Multi-touch marketing attribution DAGs with incrementality testing",
      "SKU-level stockout forecasting ML models with automated supplier PO dispatch",
      "Executive gross margin velocity and blended CAC cockpit",
    ],
    techStack: ["Snowflake", "dbt Core", "Looker Studio", "Python", "FastAPI", "Stripe API"],
    outcomes: ["18% gross margin expansion", "-14% blended customer CAC", "Real-time ad ROAS sync"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: Factory,
    summary: "Edge-to-cloud SCADA streaming, predictive vibration anomaly machine learning, and multi-plant OEE executive radar.",
    challenge: "Unplanned factory downtime costs millions annually due to lagging edge sensor monitoring and delayed maintenance dispatch.",
    solutions: [
      "Industrial IoT edge-to-cloud Kafka streaming pipelines for SCADA sensors",
      "Predictive vibration and thermal anomaly machine learning models",
      "Plant floor operator tablets and shift handoff digital logs",
      "Multi-facility Overall Equipment Effectiveness (OEE) executive radar",
    ],
    techStack: ["TimeScaleDB", "Kafka", "Python", "Power BI", "FastAPI", "Docker Edge"],
    outcomes: ["35% less machine downtime", "$4.5M prevented annual loss", "72-hour advance failure alert"],
  },
];

// =========================================================================
// 6. CLIENT LOGOS & TRUSTED ECOSYSTEM
// =========================================================================
const CLIENT_ECOSYSTEM = [
  { name: "OpenAI", role: "GPT-4o Enterprise", tag: "AI Infrastructure" },
  { name: "Snowflake", role: "Premier Partner", tag: "Data Warehouse" },
  { name: "Databricks", role: "Lakehouse Core", tag: "Lakehouse Partner" },
  { name: "AWS", role: "Advanced Tier", tag: "Cloud Infrastructure" },
  { name: "Google Cloud", role: "BigQuery & Vertex", tag: "Cloud AI" },
  { name: "Microsoft Azure", role: "Fabric & Power BI", tag: "Enterprise BI" },
  { name: "Apache Kafka", role: "Event Streaming", tag: "Real-Time Ingestion" },
  { name: "ClickHouse", role: "Columnar OLAP", tag: "High-Speed Analytics" },
];

// =========================================================================
// 7. INDUSTRY RESEARCH & WHITE PAPERS
// =========================================================================
const RESEARCH_PAPERS = [
  {
    title: "Healthcare Analytics Blueprint: HIPAA Lakehouses & Deterministic RAG",
    category: "Healthcare & Life Sciences",
    readTime: "8 min read",
    tag: "Architecture Guide",
    desc: "A tactical guide to eliminating AI hallucinations in clinical triage copilots using reciprocal rank fusion, dense vector embeddings, and strict FHIR guardrails.",
  },
  {
    title: "FinTech KPI & SEC Audit Framework: Sub-Second Financial Telemetry",
    category: "Finance & Banking",
    readTime: "10 min read",
    tag: "Playbook",
    desc: "Architectural blueprint for sub-second trade telemetry, zero-loss financial event streams, and automated SEC regulatory audit feeds using Kafka and ClickHouse.",
  },
  {
    title: "The Multi-Tenant SaaS Metrics Handbook: Embedded Analytics at Scale",
    category: "SaaS & Cloud Tech",
    readTime: "6 min read",
    tag: "Whitepaper",
    desc: "How high-growth B2B SaaS engineering teams architect row-level security, isolated vector indexes, and sub-15ms embedded dashboards.",
  },
];

export default function IndustriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Industries");
  const [activeBlueprintId, setActiveBlueprintId] = useState("healthcare-blueprint");
  const [solutionIndex, setSolutionIndex] = useState(0);
  const [expandedCapability, setExpandedCapability] = useState<string | null>("healthcare");
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const isFiltering = searchQuery.trim() !== "" || selectedCategory !== "All Industries";

  // Filtered industries logic
  const filteredIndustries = useMemo(() => {
    return INDUSTRIES_LIST.filter((ind) => {
      const matchesCategory =
        selectedCategory === "All Industries" || ind.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        ind.name.toLowerCase().includes(query) ||
        ind.desc.toLowerCase().includes(query) ||
        ind.badge.toLowerCase().includes(query) ||
        ind.capabilities.some((s) => s.toLowerCase().includes(query)) ||
        ind.tech.some((t) => t.toLowerCase().includes(query)) ||
        ind.compliance.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const activeBlueprint = useMemo(() => {
    return BLUEPRINTS.find((b) => b.id === activeBlueprintId) || BLUEPRINTS[0];
  }, [activeBlueprintId]);

  const handleNextSolution = () => {
    setSolutionIndex((prev) => (prev + 1) % FEATURED_SOLUTIONS.length);
  };

  const handlePrevSolution = () => {
    setSolutionIndex((prev) => (prev - 1 + FEATURED_SOLUTIONS.length) % FEATURED_SOLUTIONS.length);
  };

  const toggleCapability = (id: string) => {
    setExpandedCapability((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#000000] text-[#FFFFFF] font-sans antialiased selection:bg-[#00BCD4] selection:text-[#050505]">
      {/* ========================================================================= */}
      {/* 1. HERO — INDUSTRIES WE TRANSFORM (PURE BLACK #000000 54/46 SPLIT WITH PHOTO) */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 bg-[#000000] border-b border-[#1B242B] overflow-hidden">
        {/* Ambient Subtle Radial Glow */}
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] pointer-events-none opacity-20 -z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 188, 212, 0.16) 0%, rgba(8, 127, 165, 0.05) 50%, transparent 75%)",
          }}
        />

        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 54% Column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
            >
              {/* Eyebrow Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00BCD4]/40 bg-[#101214] text-[#00BCD4] shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                  ENTERPRISE DOMAIN INTELLIGENCE
                </span>
              </motion.div>

              {/* Main Headline: 52–60px on desktop */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]"
              >
                Digital Transformation Across{" "}
                <span className="text-[#00BCD4]">Critical Industries.</span>
              </motion.h1>

              {/* Subheadline Description */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-base sm:text-[17px] text-slate-300 leading-relaxed font-normal max-w-2xl"
              >
                We engineer production lakehouses, sub-second OLAP marts, deterministic AI copilots, and C-suite analytics cockpits tailored to your industry&apos;s compliance guardrails and latency SLAs.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1"
              >
                <a
                  href="#featured-solutions"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 h-12 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-lg shadow-[#00BCD4]/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 text-center cursor-pointer"
                >
                  <span>Explore Featured Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </a>

                <Link
                  href="/contact#contact-hero"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm sm:text-base border border-white/15 hover:border-[#00BCD4]/60 transition-all duration-200 text-center"
                >
                  <span>Schedule Strategy Call</span>
                </Link>
              </motion.div>

              {/* 4-Metric Trust Ribbon */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="pt-5 sm:pt-6 border-t border-[#1B242B] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5"
              >
                {TRUST_METRICS.map((metric) => (
                  <div key={metric.label} className="space-y-0.5">
                    <div className="text-2xl sm:text-3xl font-mono font-black text-[#00BCD4] tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-xs font-bold text-white leading-tight">
                      {metric.label}
                    </div>
                    <div className="text-[11px] text-[#A1AAB7] leading-tight">
                      {metric.sub}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right 46% Column: High-Quality Photorealistic Collaborative Workspace Image */}
            {/* Right 46% Column: Photorealistic Multi-Industry Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full h-[280px] sm:h-[340px] md:h-[390px] lg:h-[430px] rounded-2xl overflow-hidden border border-[#1B242B] shadow-2xl bg-[#101214]">
                <Image
                  src="/images/industries-multi-domain-hero.jpg"
                  alt="CodePlaced digital transformation engineering across healthcare, industrial automation, and logistics operations"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Subtle dark bottom & side gradient to blend seamlessly into pure black page */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/65 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/25 via-transparent to-transparent pointer-events-none" />

                {/* Subtle verified pill badge on corner */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000000]/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>One Technology Partner &bull; Multi-Industry Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED INDUSTRY SOLUTIONS — BLACK (COMPACT 50/50 COMPOSITION) */}
      {/* ========================================================================= */}
      <section id="featured-solutions" className="py-12 sm:py-14 lg:py-16 bg-[#000000] border-b border-[#1B242B] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Carousel Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-9">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
                FLAGSHIP SOLUTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-white tracking-tight">
                Featured Industry Solutions
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Deep-dive into battle-tested architectures solving high-impact domain challenges with measurable client outcomes.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2.5 self-start md:self-auto">
              <button
                onClick={handlePrevSolution}
                className="w-10 h-10 rounded-full border border-[#1B242B] hover:border-[#00BCD4] bg-[#101214] hover:bg-[#101214]/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Previous solution"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSolution}
                className="w-10 h-10 rounded-full border border-[#1B242B] hover:border-[#00BCD4] bg-[#101214] hover:bg-[#101214]/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Next solution"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Solution Card (Compact 50/50 Composition) */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#101214] border border-[#1B242B] shadow-2xl p-6 sm:p-8 lg:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={FEATURED_SOLUTIONS[solutionIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
              >
                {/* Left 7 Columns */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00BCD4] bg-[#000000] px-3 py-0.5 rounded-full border border-[#1B242B]">
                      {FEATURED_SOLUTIONS[solutionIndex].industry}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      {FEATURED_SOLUTIONS[solutionIndex].badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[30px] font-extrabold leading-tight text-white tracking-tight">
                    {FEATURED_SOLUTIONS[solutionIndex].title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {FEATURED_SOLUTIONS[solutionIndex].desc}
                  </p>

                  {/* Architecture Data Flow String */}
                  <div className="text-xs font-mono bg-[#000000] p-3 rounded-xl border border-[#1B242B] overflow-x-auto whitespace-nowrap text-slate-200">
                    <span className="text-[#00BCD4] font-bold">Data Pipeline: </span>
                    {FEATURED_SOLUTIONS[solutionIndex].architecture}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="space-y-1.5 pt-0.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Production Technology Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {FEATURED_SOLUTIONS[solutionIndex].tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md bg-[#000000] border border-[#1B242B] text-xs font-mono font-bold text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Link
                      href="/contact#contact-hero"
                      className="inline-flex items-center justify-center gap-2 px-5 h-10 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Deploy Similar Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center justify-center gap-2 px-5 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-[#1B242B] hover:border-[#00BCD4]/40 transition-all"
                    >
                      <span>Read Case Study</span>
                    </Link>
                  </div>
                </div>

                {/* Right 5 Columns: Verified Result Card */}
                <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#000000] border border-[#1B242B] text-white shadow-xl space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00BCD4]">
                      Quantified Result
                    </span>
                    <div className="text-4xl sm:text-5xl font-black text-[#00BCD4] tracking-tight font-mono">
                      {FEATURED_SOLUTIONS[solutionIndex].metric}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-200">
                      {FEATURED_SOLUTIONS[solutionIndex].metricLabel}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#101214] border border-[#1B242B] space-y-1">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00BCD4]">
                      Verified Impact:
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                      {FEATURED_SOLUTIONS[solutionIndex].highlight}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-[#1B242B] flex items-center justify-between text-[11px] text-[#A1AAB7]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00BCD4]" /> Production Audited
                    </span>
                    <span className="font-mono text-white">Fixed-Sprint Delivery</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {FEATURED_SOLUTIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSolutionIndex(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    solutionIndex === i ? "w-7 bg-[#00BCD4]" : "w-2 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPLORE MISSION-CRITICAL INDUSTRIES — PURE WHITE #FFFFFF INTERACTIVE EXPLORER */}
      {/* ========================================================================= */}
      <section id="industries-explorer" className="py-12 sm:py-14 bg-[#FFFFFF] text-[#101820] border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-5 sm:mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#087FA5]">
              COMPLETE DOMAIN CATALOG
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#101820] tracking-tight">
              Explore Mission-Critical Industries
            </h2>
            <p className="text-[#566171] text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect specialized architecture patterns, compliance frameworks, and benchmark metrics for your sector.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#F5F6F8] border border-slate-200 mb-5 space-y-2.5">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#566171]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by industry name, capability (e.g. 'FHIR', 'Fraud', 'ROAS', 'IoT'), or compliance..."
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-medium text-[#101820] placeholder:text-[#566171]/70 focus:outline-none focus:border-[#087FA5] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#566171] hover:text-[#101820] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-slate-200">
              <span className="text-[11px] font-bold text-[#566171] mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Category:
              </span>
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    if (cat === "All Industries") {
                      setShowAllIndustries(false);
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#101820] text-white shadow-xs"
                      : "bg-white hover:bg-slate-100 text-[#566171] border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Clean 3-Column Compact Responsive Grid with 6-card (desktop) / 4-card (mobile) initial preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4.5">
            {filteredIndustries.map((ind, idx) => {
              const IndIcon = ind.icon;
              // Visibility logic:
              // When user is searching or has filtered, show ALL matching cards.
              // When in default state (!isFiltering):
              // - indices 0..3: always visible
              // - indices 4..5: visible on desktop (sm:flex), hidden on mobile unless showAllIndustries
              // - indices 6+: hidden unless showAllIndustries
              const isInitiallyHiddenMobile = !isFiltering && !showAllIndustries && idx >= 4;
              const isInitiallyHiddenDesktop = !isFiltering && !showAllIndustries && idx >= 6;
              const visibilityClass = isFiltering
                ? "flex"
                : isInitiallyHiddenDesktop
                ? (showAllIndustries ? "flex" : "hidden")
                : isInitiallyHiddenMobile
                ? (showAllIndustries ? "flex" : "hidden sm:flex")
                : "flex";

              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: (idx % 6) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-xl bg-white border border-slate-200 p-5 shadow-2xs hover:shadow-md hover:border-[#00BCD4] transition-all duration-200 flex-col justify-between group hover:-translate-y-1 ${visibilityClass}`}
                >
                  <div className="space-y-3">
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-[#EBF9FC] text-[#087FA5] border border-[#00BCD4]/20 flex items-center justify-center group-hover:bg-[#087FA5] group-hover:text-white transition-colors duration-200">
                        <IndIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#087FA5] bg-[#EBF9FC] px-2 py-0.5 rounded-full border border-[#00BCD4]/25">
                        {ind.badge}
                      </span>
                    </div>

                    {/* Title + Desc */}
                    <div>
                      <h3 className="text-base font-bold text-[#101820] tracking-tight group-hover:text-[#087FA5] transition-colors duration-200">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-[#566171] mt-1 leading-relaxed line-clamp-2">
                        {ind.desc}
                      </p>
                    </div>

                    {/* Key Capabilities */}
                    <div className="space-y-1 pt-1.5 border-t border-slate-100">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Key Capabilities:
                      </span>
                      <ul className="space-y-0.5">
                        {ind.capabilities.slice(0, 3).map((cap) => (
                          <li key={cap} className="text-[11px] text-[#101820] flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#087FA5] shrink-0" />
                            <span className="truncate">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom: Outcome & Action Link */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[9px] uppercase font-bold text-[#566171]">Benchmark Impact</div>
                      <div className="text-xs font-black text-emerald-600">{ind.impact}</div>
                    </div>
                    <Link
                      href="/contact#contact-hero"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#101820] group-hover:text-[#087FA5] transition-colors duration-200"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Industries / Show Less Interactive Toggle Button */}
          {!isFiltering && filteredIndustries.length > 6 && (
            <div className="flex justify-center pt-7">
              <button
                onClick={() => setShowAllIndustries(!showAllIndustries)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#F5F6F8] text-[#101820] font-bold text-xs sm:text-sm border border-slate-300 hover:border-[#00BCD4] shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
                aria-expanded={showAllIndustries}
              >
                <span>{showAllIndustries ? "Show Less" : "View All Industries (16)"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showAllIndustries ? "rotate-180 text-[#087FA5]" : "text-[#566171]"
                  }`}
                />
              </button>
            </div>
          )}

          {filteredIndustries.length === 0 && (
            <div className="p-8 text-center rounded-xl bg-[#F5F6F8] border border-slate-200">
              <p className="text-[#566171] font-semibold text-xs sm:text-sm">
                No industries found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Industries");
                  setShowAllIndustries(false);
                }}
                className="mt-3 px-4 py-1.5 rounded-full bg-[#101820] text-white text-xs font-bold cursor-pointer hover:bg-black transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INDUSTRY ARCHITECTURE BLUEPRINTS — PURE BLACK #000000 COMPACT */}
      {/* ========================================================================= */}
      <section id="blueprints" className="py-12 sm:py-14 lg:py-16 bg-[#000000] border-b border-[#1B242B] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-7 sm:mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
              TECHNICAL BLUEPRINTS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-white tracking-tight">
              Industry Architecture Blueprints
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Inspect production-tested data flow diagrams from source ingestion to lakehouse, analytics marts, and AI copilots.
            </p>
          </div>

          {/* Blueprint Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7">
            {BLUEPRINTS.map((bp) => {
              const isActive = activeBlueprintId === bp.id;
              return (
                <button
                  key={bp.id}
                  onClick={() => setActiveBlueprintId(bp.id)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#00BCD4] text-[#050505] shadow-md shadow-[#00BCD4]/25"
                      : "bg-[#101214] hover:bg-[#101214]/80 text-slate-300 border border-[#1B242B]"
                  }`}
                >
                  <Workflow className="w-3.5 h-3.5" />
                  <span>{bp.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Blueprint Visualization Panel */}
          <div className="p-5 sm:p-7 rounded-[22px] bg-[#101214] border border-[#1B242B] shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1B242B]">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00BCD4]">
                  {activeBlueprint.domain} Architecture Specification
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {activeBlueprint.name}
                </h3>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  {activeBlueprint.badge}
                </span>
                <span className="text-xs font-mono text-white bg-[#000000] px-2.5 py-0.5 rounded-full border border-[#1B242B] font-bold">
                  {activeBlueprint.sla}
                </span>
              </div>
            </div>

            {/* Horizontal 5-Step Pipeline Flow */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {activeBlueprint.steps.map((step) => (
                <div
                  key={step.num}
                  className="p-4 rounded-xl bg-[#000000] border border-[#1B242B] hover:border-[#00BCD4]/50 transition-all flex flex-col justify-between space-y-2.5 relative group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-md bg-[#101214] text-[#00BCD4] font-mono text-xs font-black flex items-center justify-center border border-[#1B242B]">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        {step.tag}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00BCD4] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-[#A1AAB7] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#1B242B]">
                    <div className="text-[10px] font-mono text-[#00BCD4] font-semibold truncate">
                      {step.tech}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions in Blueprint */}
            <div className="pt-4 border-t border-[#1B242B] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#A1AAB7] text-center sm:text-left text-[11px] sm:text-xs">
                Ready to deploy this exact architecture in your private cloud environment?
              </span>
              <Link
                href="/contact#contact-hero"
                className="inline-flex items-center justify-center gap-1.5 px-5 h-9 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs shadow-md transition-all whitespace-nowrap active:scale-95 cursor-pointer"
              >
                <span>Request Full Architecture Spec</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CAPABILITIES & TECH STACKS — PURE WHITE #FFFFFF COMPACT ACCORDIONS */}
      {/* ========================================================================= */}
      <section id="capabilities" className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] text-[#101820] border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-8 sm:mb-9">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#087FA5]">
              SPECIALIZED PRACTICES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#101820] tracking-tight">
              Capabilities & Tech Stacks
            </h2>
            <p className="text-[#566171] text-sm sm:text-base leading-relaxed">
              Explore domain challenges, tailored solutions, specialized tech stacks, and quantified outcomes.
            </p>
          </div>

          {/* Clean Expandable Editorial Accordions */}
          <div className="max-w-4xl mx-auto divide-y divide-slate-200 border-t border-b border-slate-200">
            {DETAILED_SERVICES.map((svc) => {
              const SvcIcon = svc.icon;
              const isExpanded = expandedCapability === svc.id;

              return (
                <div key={svc.id} className="transition-colors">
                  {/* Header Row */}
                  <button
                    onClick={() => toggleCapability(svc.id)}
                    className="w-full py-4 sm:py-4.5 text-left flex items-start sm:items-center justify-between gap-3 cursor-pointer focus:outline-none group"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isExpanded ? "bg-[#101820] text-white" : "bg-[#F5F6F8] text-[#087FA5] group-hover:bg-[#101820] group-hover:text-white"
                      }`}>
                        <SvcIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#101820] tracking-tight">
                          {svc.name}
                        </h3>
                        <p className="text-xs text-[#566171] mt-0.5 line-clamp-1">
                          {svc.summary}
                        </p>
                      </div>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 bg-[#101820] text-white" : "bg-[#F5F6F8] text-[#101820] group-hover:bg-[#101820] group-hover:text-white"
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {/* Expanded Content Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pt-1.5 space-y-4">
                          {/* Domain Challenge */}
                          <div className="p-3.5 sm:p-4 rounded-xl bg-[#F5F6F8] border border-slate-200 space-y-1">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600">
                              Domain Challenge:
                            </span>
                            <p className="text-xs text-[#566171] leading-relaxed">
                              {svc.challenge}
                            </p>
                          </div>

                          {/* Engineered Solutions Grid */}
                          <div className="space-y-1.5">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                              Engineered Solutions:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {svc.solutions.map((sol) => (
                                <div key={sol} className="p-2.5 rounded-lg bg-[#F5F6F8] border border-slate-200 flex items-start gap-2 text-xs font-medium text-[#101820]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087FA5] shrink-0 mt-0.5" />
                                  <span>{sol}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack & Outcomes */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                            <div className="space-y-1.5">
                              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                                Tech Stack:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {svc.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-0.5 rounded-md bg-[#F5F6F8] border border-slate-200 text-[11px] font-mono font-bold text-[#101820]"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                                Quantified Outcomes:
                              </span>
                              <div className="space-y-1">
                                {svc.outcomes.map((out) => (
                                  <div key={out} className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                    <span>{out}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="pt-1">
                            <Link
                              href="/contact#contact-hero"
                              className="inline-flex items-center gap-1.5 px-5 h-9 rounded-full bg-[#101820] hover:bg-black text-white font-bold text-xs transition-all shadow-xs"
                            >
                              <span>Consult {svc.name} Practice Lead</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
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
      {/* 6. TRUST & BUSINESS IMPACT — PURE BLACK #000000 COMPACT SECTION */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#000000] border-b border-[#1B242B] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Part A: Ecosystem Trust Strip */}
          <div className="text-center space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
                PROVEN ENTERPRISE ECOSYSTEM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Trusted by Data-Driven Teams Across High-Stakes Industries
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
              {CLIENT_ECOSYSTEM.map((brand) => (
                <div
                  key={brand.name}
                  className="p-3 rounded-lg bg-[#101214] border border-[#1B242B] hover:border-[#00BCD4]/50 transition-colors text-center space-y-0.5"
                >
                  <div className="text-xs sm:text-sm font-black text-white">{brand.name}</div>
                  <div className="text-[10px] font-mono text-[#A1AAB7] truncate">{brand.tag}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Part B: Institutional Impact Metrics */}
          <div className="pt-8 sm:pt-10 border-t border-[#1B242B]">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-8 sm:mb-9">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
                MEASURED RETURN ON INVESTMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Enterprise Scale & Institutional Impact
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our deployments are measured in compressed query latency, eliminated downtime, and verified balance-sheet ROI.
              </p>
            </div>

            {/* Clean Horizontal Metrics Strip (2x2 on Mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <div className="p-5 rounded-xl bg-[#101214] border border-[#1B242B] text-center space-y-1.5">
                <div className="text-3xl sm:text-4xl font-mono font-black text-[#00BCD4]">100+</div>
                <div className="text-xs sm:text-sm font-bold text-white">Production Deployments</div>
                <p className="text-[11px] text-[#A1AAB7] leading-relaxed">Fixed-scope 2–4 week delivery sprints with zero downtime cutover.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#101214] border border-[#1B242B] text-center space-y-1.5">
                <div className="text-3xl sm:text-4xl font-mono font-black text-[#00BCD4]">95%</div>
                <div className="text-xs sm:text-sm font-bold text-white">Client Retention</div>
                <p className="text-[11px] text-[#A1AAB7] leading-relaxed">Long-term engineering partnerships across multi-year modernization roadmaps.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#101214] border border-[#1B242B] text-center space-y-1.5">
                <div className="text-3xl sm:text-4xl font-mono font-black text-[#00BCD4]">99.99%</div>
                <div className="text-xs sm:text-sm font-bold text-white">Verified SLA Guarantee</div>
                <p className="text-[11px] text-[#A1AAB7] leading-relaxed">High-availability streaming pipelines and air-gapped private VPC clusters.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#101214] border border-[#1B242B] text-center space-y-1.5">
                <div className="text-3xl sm:text-4xl font-mono font-black text-emerald-400">$140M+</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400">Client Value Unlocked</div>
                <p className="text-[11px] text-[#A1AAB7] leading-relaxed">Combined cloud infrastructure savings and operational margin growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INDUSTRY RESEARCH & ARCHITECTURE GUIDES — PURE WHITE #FFFFFF COMPACT */}
      {/* ========================================================================= */}
      <section id="research" className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] text-[#101820] border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-8 sm:mb-9">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#087FA5]">
              ENGINEERING PLAYBOOKS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#101820] tracking-tight">
              Industry Research & Architecture Guides
            </h2>
            <p className="text-[#566171] text-xs sm:text-sm leading-relaxed">
              Tactical playbooks and engineering whitepapers on sub-second data streaming and deterministic AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RESEARCH_PAPERS.map((paper) => (
              <div
                key={paper.title}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#00BCD4] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between space-y-3.5 group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#087FA5] bg-[#EBF9FC] px-2 py-0.5 rounded-full border border-[#00BCD4]/20 text-[10px]">
                      {paper.category}
                    </span>
                    <span className="text-[#566171] font-semibold text-[11px]">{paper.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#101820] leading-snug group-hover:text-[#087FA5] transition-colors">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-[#566171] leading-relaxed">
                    {paper.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/blog"
                    className="text-xs font-bold text-[#101820] group-hover:text-[#087FA5] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Whitepaper</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL CTA — PURE BLACK #000000 COMPACT */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#000000] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[28px] p-7 sm:p-10 lg:p-12 text-center overflow-hidden bg-[#101214] border border-[#1B242B] text-white shadow-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00BCD4]/10 text-[#00BCD4] border border-[#00BCD4]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#00BCD4]" /> Start Your 2–4 Week Industry Engagement
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black max-w-2xl mx-auto text-white tracking-tight leading-tight">
              Ready to Engineer Mission-Critical Systems for Your Domain?
            </h2>

            <p className="text-[#A1AAB7] text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Schedule a 30-minute technical architecture review directly with our Principal Engineers. We execute mutual NDAs upfront.
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact#contact-hero"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 h-11 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-sm shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 h-11 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm border border-[#1B242B] hover:border-white/25 transition-all"
              >
                <span>Explore Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
