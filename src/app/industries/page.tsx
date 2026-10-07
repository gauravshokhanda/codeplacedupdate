"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
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
  Database,
  BrainCircuit,
  BarChart3,
  Cloud,
  Layers,
  Cpu,
  Workflow,
  Lock,
  Server,
  Activity,
  ChevronRight,
  TrendingUp,
  FileText,
  Users,
  Search,
  Code2,
  Globe,
  SlidersHorizontal,
  ChevronDown,
  Clock,
  LineChart,
  Bot,
  Wrench,
  Flame,
  Shield,
  Gauge,
  Rocket,
  Check,
  ChevronLeft,
  Filter,
  Layers2,
  Boxes,
  Terminal,
  Download,
  Share2,
  PhoneCall,
  Star,
  RefreshCw,
} from "lucide-react";

// =========================================================================
// 1. TRUST METRICS RIBBON
// =========================================================================
const TRUST_METRICS = [
  { value: "100+", label: "Enterprise Deployments", sub: "Across 16+ verticals" },
  { value: "95%", label: "Client Retention Rate", sub: "Multi-year partnerships" },
  { value: "2–4 Wks", label: "Average Delivery Sprint", sub: "From audit to production" },
  { value: "99.99%", label: "Guaranteed SLA", sub: "Mission-critical reliability" },
];

// =========================================================================
// 2. FEATURED INDUSTRY SOLUTIONS CAROUSEL (Horizontal Slider)
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
    accent: "from-[#083A5B] to-[#0D6E8A]",
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
    accent: "from-[#052B45] to-[#083A5B]",
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
    accent: "from-[#0D6E8A] to-[#052B45]",
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
    accent: "from-[#083A5B] to-[#0D6E8A]",
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
    accent: "from-[#052B45] to-[#0D6E8A]",
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
    accent: "from-[#083A5B] to-[#052B45]",
    badge: "Industry 4.0",
    highlight: "$4.5M prevented annual downtime across 8 automated assembly facilities.",
    architecture: "Edge SCADA Sensors → MQTT Broker → Kafka Stream → TimeScaleDB → Maintenance Dispatch Alerts",
  },
];

// =========================================================================
// 3. 16 MISSION-CRITICAL INDUSTRIES EXPLORER
// =========================================================================
interface IndustryExplorerItem {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  badge: string;
  desc: string;
  impact: string;
  solutions: string[];
  tech: string[];
  compliance: string;
  anchor: string;
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
    solutions: ["HIPAA Data Platforms", "Clinical Triage Copilots", "EHR Ingestion DAGs", "Physician Productivity BI"],
    tech: ["FHIR", "HL7", "BigQuery", "Looker Studio", "Python"],
    compliance: "HIPAA, HITRUST, SOC 2",
    anchor: "healthcare",
  },
  {
    id: "fintech",
    name: "Finance & FinTech",
    category: "Finance & Banking",
    icon: Landmark,
    badge: "SOC 2 & SEC",
    desc: "Real-time ledger reconciliations, automated SEC reporting, fraud risk ML, and portfolio cockpits.",
    impact: "99.999% ledger accuracy",
    solutions: ["Real-Time SEC Reporting", "Sub-Second Risk Analytics", "Fraud Detection ML", "Liquidity Telemetry"],
    tech: ["Snowflake", "dbt Core", "Kafka", "ClickHouse", "Spring Boot"],
    compliance: "SEC, FINRA, SOC 2 Type II",
    anchor: "finance",
  },
  {
    id: "saas",
    name: "SaaS & Cloud Tech",
    category: "SaaS & Tech",
    icon: MonitorSmartphone,
    badge: "Multi-Tenant",
    desc: "Embedded customer analytics, multi-tenant lakehouse isolation, usage billing, and in-app AI copilots.",
    impact: "32% ARR expansion",
    solutions: ["Embedded Analytics", "Tenant Vector Isolation", "In-App AI Copilots", "Stripe Usage Telemetry"],
    tech: ["React", "Next.js", "ClickHouse", "OpenAI", "Postgres"],
    compliance: "SOC 2, GDPR, CCPA",
    anchor: "saas",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    category: "Commerce & Media",
    icon: ShoppingBag,
    badge: "ROAS ML",
    desc: "Multi-touch marketing attribution, inventory stockout forecasting, and dynamic pricing algorithms.",
    impact: "18% gross margin lift",
    solutions: ["Multi-Touch ROAS", "Dynamic Pricing Engine", "Inventory Forecasting", "Customer Data Platform"],
    tech: ["Snowflake", "dbt", "Looker Studio", "Python", "FastAPI"],
    compliance: "PCI-DSS, GDPR",
    anchor: "retail",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    category: "Supply Chain & IoT",
    icon: Truck,
    badge: "Sub-25ms GPS",
    desc: "Fleet telematics lakehouses, weather-adjusted route forecasting, and automated bill-of-lading OCR.",
    impact: "24% cost reduction",
    solutions: ["Fleet Telematics Stream", "Route Optimization ML", "Automated BOL OCR", "Carrier Delay Prediction"],
    tech: ["Kafka", "Databricks", "Apache Spark", "Power BI", "Node.js"],
    compliance: "DOT, ELD Mandate, SOC 2",
    anchor: "logistics",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    category: "Supply Chain & IoT",
    icon: Factory,
    badge: "Industry 4.0",
    desc: "Sensor streaming lakehouses, predictive vibration anomaly detection, and plant OEE telemetry.",
    impact: "35% less downtime",
    solutions: ["Predictive Maintenance ML", "Plant OEE Dashboards", "SCADA Historian Lakehouse", "Computer Vision Defect QA"],
    tech: ["TimeScaleDB", "Kafka", "Python", "Power BI", "FastAPI"],
    compliance: "ISO 9001, ISA-95, OSHA",
    anchor: "manufacturing",
  },
  {
    id: "insurance",
    name: "Insurance & Underwriting",
    category: "Finance & Banking",
    icon: ShieldCheck,
    badge: "Risk Intelligence",
    desc: "Automated policy extraction, first-notice-of-loss claims triage, and actuarial loss modeling.",
    impact: "74% faster claims",
    solutions: ["Claims Triage OCR", "Actuarial Risk Models", "Fraud Scoring Engine", "Policy Lifecycle BI"],
    tech: ["Snowflake", "LangChain", "Python", "Looker Studio", "FastAPI"],
    compliance: "NAIC, HIPAA, SOC 2",
    anchor: "insurance",
  },
  {
    id: "realestate",
    name: "Real Estate & PropTech",
    category: "Commerce & Media",
    icon: Building2,
    badge: "Doc AI",
    desc: "Commercial lease abstraction OCR, automated NOI waterfall modeling, and valuation ML.",
    impact: "80% faster review",
    solutions: ["Lease Abstraction OCR", "Portfolio NOI Modeling", "Tenant Churn Forecasting", "Valuation Lakehouse"],
    tech: ["OpenAI", "PostgreSQL", "React", "Next.js", "Python"],
    compliance: "SOC 2, Fair Housing Act",
    anchor: "realestate",
  },
  {
    id: "education",
    name: "Education & EdTech",
    category: "Public & Regulated",
    icon: GraduationCap,
    badge: "FERPA Ready",
    desc: "Adaptive AI tutoring copilots, automated rubric grading, and student retention telemetry.",
    impact: "3.2x engagement",
    solutions: ["Adaptive Learning Copilot", "Student Retention BI", "Automated Rubric Grader", "LMS Telemetry Lakehouse"],
    tech: ["Node.js", "Python", "OpenAI", "BigQuery", "React"],
    compliance: "FERPA, COPPA, ADA Title III",
    anchor: "education",
  },
  {
    id: "hospitality",
    name: "Hospitality & Travel",
    category: "Commerce & Media",
    icon: Plane,
    badge: "Yield ML",
    desc: "Dynamic room pricing ML, RevPAR intelligence cockpits, and guest sentiment graph analytics.",
    impact: "15% RevPAR lift",
    solutions: ["Dynamic Yield Engine", "RevPAR BI Cockpit", "Guest Sentiment AI", "Direct Booking CDP"],
    tech: ["Snowflake", "ClickHouse", "Python", "Tableau", "FastAPI"],
    compliance: "PCI-DSS, GDPR",
    anchor: "hospitality",
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    category: "Supply Chain & IoT",
    icon: Zap,
    badge: "Grid Analytics",
    desc: "Smart meter Kafka streams, peak grid load forecasting ML, and automated ESG carbon compliance.",
    impact: "28% peak savings",
    solutions: ["Smart Meter Streaming", "Grid Load Forecast ML", "ESG Carbon Telemetry", "Substation Anomaly Radar"],
    tech: ["Kafka", "Apache Spark", "Databricks", "Power BI", "Python"],
    compliance: "NERC CIP, FERC, ISO 14001",
    anchor: "energy",
  },
  {
    id: "government",
    name: "Government & Public Sector",
    category: "Public & Regulated",
    icon: Building,
    badge: "FedRAMP Ready",
    desc: "FedRAMP & CJIS compliant data environments, citizen telemetry portals, and automated case document indexing.",
    impact: "100% audit pass",
    solutions: ["FedRAMP Data Lakehouse", "Citizen Portal Telemetry", "Case Document Indexing", "Budget Transparency BI"],
    tech: ["AWS GovCloud", "PostgreSQL", "React", "Python", "Terraform"],
    compliance: "FedRAMP, CJIS, FISMA",
    anchor: "government",
  },
  {
    id: "telecom",
    name: "Telecommunications",
    category: "SaaS & Tech",
    icon: Radio,
    badge: "Sub-10ms Queries",
    desc: "Real-time 5G network telemetry, subscriber churn prediction ML, and high-concurrency billing analytics.",
    impact: "Sub-10ms queries",
    solutions: ["5G Telemetry Ingestion", "Subscriber Churn ML", "CDR Billing Lakehouse", "Network Outage Radar"],
    tech: ["ClickHouse", "Kafka", "Go", "Looker Studio", "Python"],
    compliance: "FCC, CALEA, SOC 2",
    anchor: "telecom",
  },
  {
    id: "construction",
    name: "Construction & Engineering",
    category: "Supply Chain & IoT",
    icon: HardHat,
    badge: "IoT Telemetry",
    desc: "Jobsite sensor streaming, subcontractor risk modeling, and automated project cost forecasting DAGs.",
    impact: "22% margin protect",
    solutions: ["Jobsite Sensor Telemetry", "Subcontractor Risk ML", "Cost Variance DAGs", "Safety Incident Radar"],
    tech: ["Python", "FastAPI", "PostgreSQL", "Power BI", "AWS"],
    compliance: "OSHA, Procore Sync",
    anchor: "construction",
  },
  {
    id: "media",
    name: "Media & Advertising",
    category: "Commerce & Media",
    icon: Film,
    badge: "Real-Time Attribution",
    desc: "Programmatic ad yield optimization, content recommendation graphs, and real-time impression analytics.",
    impact: "42% higher yield",
    solutions: ["Programmatic Yield Engine", "Content Recommendation Graph", "Impression Streaming OLAP", "Audience CDP"],
    tech: ["ClickHouse", "Kafka", "Python", "React", "FastAPI"],
    compliance: "GDPR, COPPA, IAB TCF",
    anchor: "media",
  },
  {
    id: "professional-services",
    name: "Professional & Legal Services",
    category: "Public & Regulated",
    icon: Briefcase,
    badge: "Practice BI",
    desc: "Resource utilization telemetry, automated client billing attribution, and contract knowledge copilots.",
    impact: "20+ hrs/wk saved",
    solutions: ["Contract Review Copilot", "Utilization Telemetry", "Automated Billing Sync", "Knowledge Search RAG"],
    tech: ["LangChain", "OpenAI", "PostgreSQL", "React", "Next.js"],
    compliance: "ABA Model Rules, SOC 2",
    anchor: "professional-services",
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
// 4. ARCHITECTURE BLUEPRINTS INTERACTIVE SECTION
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
      { num: "02", title: "Ingestion & Security Layer", desc: "De-identification pipeline with HIPAA Safe Harbor hashing and automated Kafka streams.", tech: "Kafka + Air-Gapped VPC", tag: "PHI Scrubbing" },
      { num: "03", title: "Lakehouse Core", desc: "BigQuery / Databricks Delta lake with automated dbt clinical testing and data quality checks.", tech: "Delta Lake + dbt Core", tag: "Deterministic Data" },
      { num: "04", title: "AI Clinical Copilot", desc: "LangGraph deterministic reasoning agent with medical citation guardrails and vector index.", tech: "Hybrid RAG + Vector DB", tag: "Zero Hallucinations" },
      { num: "05", title: "Provider Dashboard", desc: "Snappy Next.js WebGL & Looker Studio cockpits for ICU occupancy, triage, and doctor workflows.", tech: "Looker Studio / Next.js", tag: "< 18ms Queries" },
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
      { num: "04", title: "Fraud & Reconciliation ML", desc: "Continuous ledger reconciliation DAGs and real-time transaction anomaly detection models.", tech: "dbt Tests + Scikit-Learn", tag: "99.999% Accuracy" },
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
      { num: "02", title: "Row-Level Security Layer", desc: "Cryptographic tenant isolation with automatic tenant routing and partitioned schemas.", tech: "Tenant Routing Layer", tag: "100% Data Isolation" },
      { num: "03", title: "Analytical Warehouse", desc: "Snowflake / ClickHouse data mart with automated dbt rollup models for tenant usage telemetry.", tech: "Snowflake + dbt Cloud", tag: "Cost Optimized" },
      { num: "04", title: "In-App AI Copilot", desc: "Contextual RAG assistant answering customer questions using tenant-specific knowledge bases.", tech: "OpenAI GPT-4o + pgvector", tag: "Isolated Vector DB" },
      { num: "05", title: "Embedded User Analytics", desc: "Native embedded React analytics components with custom SQL query sandbox and PDF export.", tech: "React + Tailwind + WebGL", tag: "White-Labeled UI" },
    ],
  },
  {
    id: "logistics-blueprint",
    name: "Supply Chain IoT Command",
    domain: "Logistics & Fleet",
    badge: "Sub-25ms GPS Sync",
    sla: "24/7 Zero Downtime",
    steps: [
      { num: "01", title: "Fleet Telematics & Sensors", desc: "ELD GPS pings, OBD-II engine diagnostics, temperature sensors, and warehouse RFID readers.", tech: "IoT Edge Gateways", tag: "1.2M Pings/Sec" },
      { num: "02", title: "Stream Processing Core", desc: "Apache Spark Structured Streaming consuming Kafka topics with geospatial geofence filtering.", tech: "Spark + Kafka Cluster", tag: "Real-Time Stream" },
      { num: "03", title: "Historian Lakehouse", desc: "Databricks Delta Lake storing billions of historical vehicle trips with Z-order indexing.", tech: "Databricks Delta Lake", tag: "Petabyte Scalable" },
      { num: "04", title: "Route Optimization ML", desc: "Weather-adjusted predictive arrival models and automated dynamic route re-dispatching.", tech: "Python Fast Route DAGs", tag: "24% Cost Saved" },
      { num: "05", title: "Dispatch Command Portal", desc: "Interactive map view with live driver routing, detention alert triggers, and BOL OCR indexing.", tech: "Next.js + Mapbox + Power BI", tag: "Sub-25ms Map FPS" },
    ],
  },
];

// =========================================================================
// 5. INDUSTRY-SPECIFIC SERVICES DEEP BREAKDOWN
// =========================================================================
const DETAILED_SERVICES = [
  {
    id: "healthcare",
    name: "Healthcare & MedTech",
    icon: HeartPulse,
    challenge: "Fragmented EHR silos and manual intake forms cause 45-minute average wait times, physician burnout, and compliance vulnerabilities across hospital networks.",
    solutions: [
      "HIPAA-Shielded Data Lakehouses (FHIR / HL7 Ingest)",
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
        ind.solutions.some((s) => s.toLowerCase().includes(query)) ||
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

  return (
    <div className="text-[#0B2035] selection:bg-[#083A5B] selection:text-white font-sans relative">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-200/60">
        {/* Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none -z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(13,110,138,0.1), rgba(19,181,234,0.05), transparent 70%)",
          }}
        />

        <div className="site-container relative z-10 max-w-5xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#083A5B] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#083A5B] font-bold">Industries Discovery Hub</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#083A5B] border border-[#083A5B]/20 shadow-2xs mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#13B5EA]" />
            <span>ENTERPRISE DOMAIN INTELLIGENCE</span>
          </div>

          {/* Outcome-focused Headline */}
          <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-[900] leading-[1.03] tracking-tight text-[#052B45] mb-6 [text-wrap:balance]">
            Digital Transformation Fuelled Growth Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#052B45] via-[#0D6E8A] to-[#13B5EA]">
              Critical Industries
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            We engineer production lakehouses, sub-second OLAP marts, deterministic AI copilots, and C-suite analytics cockpits tailored to your industry’s compliance guardrails and latency SLAs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#solutions-carousel"
              className="w-full sm:w-auto h-[54px] px-8 rounded-[16px] bg-[#052B45] hover:bg-[#083A5B] text-white font-bold text-sm shadow-xl shadow-[#052B45]/20 flex items-center justify-center gap-2.5 transition-all border border-[#13B5EA]/30 active:scale-95"
            >
              <span>Explore Featured Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[54px] px-8 rounded-[16px] bg-white hover:bg-slate-50 text-[#052B45] font-bold text-sm border border-[#D9E6EF] shadow-xs flex items-center justify-center transition-all"
            >
              <span>Schedule Domain Review</span>
            </Link>
          </div>

          {/* 4-Metric Trust Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-[24px] glass-panel-card shadow-md text-left">
            {TRUST_METRICS.map((metric, i) => (
              <div key={metric.label} className={i !== 0 ? "border-l border-slate-200/60 pl-4" : "pl-2"}>
                <div className="text-2xl sm:text-3xl font-black text-[#052B45] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-[#083A5B] mt-0.5">{metric.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED INDUSTRY SOLUTIONS CAROUSEL (Horizontal Slider) */}
      {/* ========================================================================= */}
      <section id="solutions-carousel" className="section-py border-b border-slate-200/60">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0D6E8A]">
                FLAGSHIP SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#052B45] tracking-tight">
                Featured Industry Solutions
              </h2>
              <p className="text-slate-600 text-base max-w-2xl">
                Deep-dive into battle-tested architectures solving high-impact domain challenges with measurable client outcomes.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={handlePrevSolution}
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#052B45] bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all shadow-xs"
                aria-label="Previous solution"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextSolution}
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#052B45] bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all shadow-xs"
                aria-label="Next solution"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Active Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-sky-100 shadow-xl shadow-sky-950/5 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left 7 Cols */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B66] bg-[#F4FAFC] px-3.5 py-1 rounded-full border border-sky-100">
                    {FEATURED_SOLUTIONS[solutionIndex].industry}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {FEATURED_SOLUTIONS[solutionIndex].badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black leading-tight text-[#0F2B46]">
                  {FEATURED_SOLUTIONS[solutionIndex].title}
                </h3>

                <p className="text-[#5B6B7C] text-sm sm:text-base leading-relaxed">
                  {FEATURED_SOLUTIONS[solutionIndex].desc}
                </p>

                <div className="p-4 rounded-2xl bg-[#F4FAFC] border border-sky-100 space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#18B6D8]">
                    Proven Impact:
                  </div>
                  <div className="text-sm font-semibold text-[#0F2B46]">
                    {FEATURED_SOLUTIONS[solutionIndex].highlight}
                  </div>
                </div>

                {/* Architecture Data Flow String */}
                <div className="text-xs text-[#0F2B46] font-mono bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 overflow-x-auto whitespace-nowrap">
                  <span className="text-[#18B6D8] font-bold">Data Flow: </span>
                  {FEATURED_SOLUTIONS[solutionIndex].architecture}
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Technology Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {FEATURED_SOLUTIONS[solutionIndex].tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-[#F4FAFC] border border-sky-100 text-xs font-bold text-[#0F2B46]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Highlight Metric & Quick Action */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0F2B46] to-[#0D3B66] text-white shadow-lg space-y-6">
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                    Quantified Result
                  </span>
                  <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                    {FEATURED_SOLUTIONS[solutionIndex].metric}
                  </div>
                  <div className="text-sm font-bold text-slate-200">
                    {FEATURED_SOLUTIONS[solutionIndex].metricLabel}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="w-full h-12 rounded-xl bg-white hover:bg-slate-100 text-[#0F2B46] font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>Deploy Similar Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="w-full h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center border border-white/20 transition-all"
                  >
                    <span>Read Complete Case Study</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {FEATURED_SOLUTIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSolutionIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    solutionIndex === i ? "w-8 bg-[#1CC8E5]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INDUSTRY EXPLORER GRID (16 Industries with Search + Filter) */}
      {/* ========================================================================= */}
      <section id="industries-explorer" className="section-py site-container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0D6E8A]">
            COMPLETE DOMAIN CATALOG
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#052B45] tracking-tight">
            Explore 16 Mission-Critical Industries
          </h2>
          <p className="text-slate-600 text-base">
            Select your industry vertical to inspect specialized architecture patterns, compliance frameworks, and benchmark metrics.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 sm:p-6 rounded-[24px] glass-panel-card shadow-sm mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by industry name, capability (e.g. 'FHIR', 'Fraud', 'ROAS', 'IoT'), or compliance..."
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/80 border border-slate-200/80 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#083A5B] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/40">
            <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${selectedCategory === cat
                    ? "bg-[#052B45] text-white shadow-xs"
                    : "bg-white/70 hover:bg-white text-slate-600 border border-slate-200/70"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 16 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredIndustries.map((ind, idx) => {
            const IndIcon = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="rounded-[24px] glass-panel-card p-6 shadow-2xs hover:shadow-xl hover:border-[#0D6E8A]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Header: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[rgba(5,43,69,0.08)] text-[#052B45] flex items-center justify-center group-hover:bg-[#052B45] group-hover:text-white transition-colors shadow-2xs">
                      <IndIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {ind.badge}
                    </span>
                  </div>

                  {/* Title + Desc */}
                  <div>
                    <h3 className="text-base font-bold text-[#052B45] group-hover:text-[#0D6E8A] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  {/* Solutions List */}
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Delivered Solutions:
                    </span>
                    <ul className="space-y-1">
                      {ind.solutions.slice(0, 3).map((sol) => (
                        <li key={sol} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0D6E8A]" />
                          <span className="truncate">{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {ind.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Impact & Scope Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[9px] uppercase font-bold text-slate-400">Target Outcome</div>
                    <div className="text-xs font-black text-emerald-600">{ind.impact}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 group-hover:bg-[#052B45] text-slate-700 group-hover:text-white text-xs font-bold transition-all flex items-center gap-1"
                  >
                    <span>Scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredIndustries.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white border border-slate-200">
            <p className="text-slate-500 font-semibold text-sm">
              No industries found matching &ldquo;{searchQuery}&rdquo;. Try another search term or clear the filter.
            </p>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 4. INDUSTRY ARCHITECTURE BLUEPRINTS */}
      {/* ========================================================================= */}
      <section className="section-py border-y border-slate-200/60">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#18B6D8]">
              TECHNICAL BLUEPRINTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B46] tracking-tight">
              Industry Architecture Blueprints
            </h2>
            <p className="text-[#5B6B7C] text-base">
              Inspect production-tested data flow diagrams from source ingestion to lakehouse, analytics marts, and AI copilots.
            </p>
          </div>

          {/* Blueprint Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {BLUEPRINTS.map((bp) => {
              const isActive = activeBlueprintId === bp.id;
              return (
                <button
                  key={bp.id}
                  onClick={() => setActiveBlueprintId(bp.id)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${isActive
                      ? "bg-[#0F2B46] text-white shadow-md shadow-[#0F2B46]/20"
                      : "bg-white/80 hover:bg-white text-[#0F2B46] border border-sky-100 shadow-xs"
                    }`}
                >
                  <Workflow className="w-4 h-4 text-[#1CC8E5]" />
                  <span>{bp.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Blueprint Visualization Box */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-sky-100 shadow-xl shadow-sky-950/5 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#18B6D8]">
                  {activeBlueprint.domain} Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0F2B46] mt-1">
                  {activeBlueprint.name}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {activeBlueprint.badge}
                </span>
                <span className="text-xs font-mono text-[#0F2B46] bg-[#F4FAFC] px-3 py-1 rounded-full border border-sky-100 font-bold">
                  {activeBlueprint.sla}
                </span>
              </div>
            </div>

            {/* 5-Step Pipeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {activeBlueprint.steps.map((step) => (
                <div
                  key={step.num}
                  className="p-5 rounded-2xl bg-[#F4FAFC] border border-sky-100 hover:border-[#1CC8E5]/50 hover:bg-white transition-all flex flex-col justify-between space-y-3 relative group shadow-2xs hover:shadow-md"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-lg bg-[#0F2B46] text-[#1CC8E5] font-mono text-xs font-black flex items-center justify-center">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                        {step.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#0F2B46] group-hover:text-[#18B6D8] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-[#5B6B7C] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60">
                    <div className="text-[10px] font-mono text-[#0D3B66] font-semibold truncate">
                      {step.tech}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions in Blueprint */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-[#5B6B7C]">
                Ready to deploy this exact architecture in your private cloud environment?
              </span>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-[#0F2B46] hover:bg-[#0D3B66] text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Request Full Architecture Spec</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1CC8E5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INDUSTRY-SPECIFIC SERVICES MATRIX */}
      {/* ========================================================================= */}
      <section className="section-py site-container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#18B6D8]">
            SERVICES MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B46] tracking-tight">
            Industry-Specific Capabilities & Tech Stacks
          </h2>
          <p className="text-[#5B6B7C] text-base">
            A comprehensive breakdown of domain challenges, tailored solutions, specialized tech stacks, and quantified outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DETAILED_SERVICES.map((svc) => {
            const SvcIcon = svc.icon;
            return (
              <div
                key={svc.id}
                className="p-8 rounded-[28px] bg-white border border-sky-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#F4FAFC] text-[#0F2B46] border border-sky-100 flex items-center justify-center font-bold">
                        <SvcIcon className="w-6 h-6 text-[#18B6D8]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-[#0F2B46]">{svc.name}</h3>
                        <span className="text-[11px] font-bold text-[#18B6D8]">Specialized Practice</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="px-4 py-2 rounded-xl bg-[#0F2B46] hover:bg-[#0D3B66] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      Engage Pod
                    </Link>
                  </div>

                  {/* Challenge */}
                  <div className="p-4 rounded-xl bg-[#F4FAFC] border border-sky-100 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                      The Domain Challenge:
                    </span>
                    <p className="text-xs text-[#5B6B7C] leading-relaxed">{svc.challenge}</p>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F2B46]">
                      Engineered Solutions:
                    </span>
                    <ul className="space-y-1.5">
                      {svc.solutions.map((s) => (
                        <li key={s} className="text-xs text-[#0F2B46] flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#18B6D8] flex-shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.techStack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-[#F4FAFC] border border-sky-100 text-xs font-bold text-[#0F2B46]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcomes Ribbon */}
                <div className="pt-4 border-t border-slate-100 bg-[#F4FAFC] -mx-8 -mb-8 p-6 rounded-b-[28px] flex flex-wrap items-center justify-between gap-2">
                  {svc.outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-1.5 text-xs font-bold text-[#0F2B46]">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CLIENT LOGO WALL & ECOSYSTEM */}
      {/* ========================================================================= */}
      <section className="section-py border-y border-slate-200/60">
        <div className="site-container text-center">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#18B6D8]">
            PROVEN ENTERPRISE ECOSYSTEM
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B46] tracking-tight mt-2 mb-10">
            Trusted by Data-Driven Teams Across High-Stakes Industries
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {CLIENT_ECOSYSTEM.map((brand) => (
              <div
                key={brand.name}
                className="p-4 rounded-2xl bg-white border border-sky-100 hover:border-[#1CC8E5]/50 transition-colors text-center space-y-1 shadow-2xs"
              >
                <div className="text-sm font-black text-[#0F2B46]">{brand.name}</div>
                <div className="text-[10px] text-[#5B6B7C] truncate">{brand.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. IMPACT METRICS SECTION */}
      {/* ========================================================================= */}
      <section className="section-py site-container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#18B6D8]">
            PROVEN RETURN ON INVESTMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B46] tracking-tight">
            Enterprise Scale & Institutional Impact
          </h2>
          <p className="text-[#5B6B7C] text-base">
            Our deployments are measured in compressed query latency, eliminated downtime, and measurable balance-sheet ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-[24px] bg-white border border-sky-100 shadow-sm text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-[#0F2B46]">100+</div>
            <div className="text-sm font-bold text-[#18B6D8]">Production Deployments</div>
            <p className="text-xs text-[#5B6B7C]">Fixed-scope 2–4 week delivery sprints with zero downtime cutover.</p>
          </div>

          <div className="p-8 rounded-[24px] bg-white border border-sky-100 shadow-sm text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-[#0F2B46]">95%</div>
            <div className="text-sm font-bold text-[#18B6D8]">Client Retention</div>
            <p className="text-xs text-[#5B6B7C]">Long-term engineering partnerships across multi-year modernization roadmaps.</p>
          </div>

          <div className="p-8 rounded-[24px] bg-white border border-sky-100 shadow-sm text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-[#0F2B46]">99.99%</div>
            <div className="text-sm font-bold text-[#18B6D8]">Verified SLA Guarantee</div>
            <p className="text-xs text-[#5B6B7C]">High-availability streaming pipelines and air-gapped private VPC clusters.</p>
          </div>

          <div className="p-8 rounded-[24px] bg-white border border-sky-100 shadow-sm text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-emerald-600">$140M+</div>
            <div className="text-sm font-bold text-emerald-700">Client Value Unlocked</div>
            <p className="text-xs text-[#5B6B7C]">Combined cloud infrastructure savings and operational margin growth.</p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. RESEARCH & INDUSTRY INSIGHTS */}
      {/* ========================================================================= */}
      <section className="section-py border-t border-slate-200/60">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#18B6D8]">
              ENGINEERING PLAYBOOKS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B46] tracking-tight">
              Industry Research & Architecture Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESEARCH_PAPERS.map((paper) => (
              <div
                key={paper.title}
                className="p-8 rounded-[24px] bg-white border border-sky-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0F2B46] bg-[#F4FAFC] px-2.5 py-0.5 rounded-full border border-sky-100">
                      {paper.category}
                    </span>
                    <span className="text-slate-400 font-semibold">{paper.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F2B46] leading-snug">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-[#5B6B7C] leading-relaxed">
                    {paper.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/blog"
                    className="text-xs font-bold text-[#0F2B46] hover:text-[#18B6D8] inline-flex items-center gap-1.5"
                  >
                    <span>Read Whitepaper</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1CC8E5]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24">
        <div className="site-container">
          <div className="relative rounded-[32px] p-8 sm:p-14 text-center overflow-hidden bg-gradient-to-r from-[#0F2B46] via-[#0D3B66] to-[#1CC8E5] text-white shadow-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-200 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" /> Start Your 2–4 Week Industry Engagement
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black max-w-2xl mx-auto">
              Ready to Engineer Mission-Critical Systems for Your Domain?
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Schedule a 30-minute technical architecture review directly with our Principal Engineers. We execute mutual NDAs upfront.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0F2B46] font-bold text-sm shadow-xl transition-all"
              >
                <span>Book Architecture Call</span>
                <ArrowRight className="w-4 h-4 text-[#18B6D8]" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
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
