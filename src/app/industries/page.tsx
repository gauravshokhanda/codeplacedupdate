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
  ShoppingBag,
  Building2,
  GraduationCap,
  Users,
  CheckCircle2,
  Workflow,
  ChevronRight,
  Search,
  ChevronLeft,
  Filter,
  Check,
  ArrowUpRight,
} from "lucide-react";

// =========================================================================
// 1. TRUST METRICS RIBBON (Hero Verified Stats)
// =========================================================================
const TRUST_METRICS = [
  { value: "100+", label: "Enterprise Deployments", sub: "Across 6 core verticals" },
  { value: "95%", label: "Client Retention Rate", sub: "Multi-year partnerships" },
  { value: "2–4 Wks", label: "Average Delivery Sprint", sub: "From audit to production" },
  { value: "99.99%", label: "Guaranteed SLA", sub: "Mission-critical reliability" },
];

// =========================================================================
// 2. FEATURED INDUSTRY SOLUTIONS CAROUSEL DATA (6 FOCUSED CORE INDUSTRIES)
// =========================================================================
const FEATURED_SOLUTIONS = [
  {
    id: "ecommerce",
    industry: "Ecommerce (D2C, B2B & B2C)",
    title: "Scalable Storefronts & Operations Automation",
    metric: "+18%",
    metricLabel: "Gross Margin Expansion",
    desc: "Helping ecommerce businesses build scalable online stores, streamline operations, automate workflows, and turn customer and sales data into actionable insights.",
    tech: ["Shopify Plus", "Next.js", "Snowflake", "dbt", "PostgreSQL", "Stripe"],
    badge: "Omnichannel Scale",
    highlight: "14% blended customer CAC reduction and automated inventory reconciliation across multi-channel stores.",
    architecture: "Multi-Store Ingest → Streamlined Workflows → Sales Data Lakehouse → Inventory ML → Analytics Cockpit",
  },
  {
    id: "edtech",
    industry: "EdTech",
    title: "Learning Platforms & Education Marketplaces",
    metric: "3.2x",
    metricLabel: "Student Engagement Lift",
    desc: "Building learning platforms, education marketplaces, student management systems, and data-driven solutions that improve learning experiences and operational efficiency.",
    tech: ["Next.js", "React Native", "Node.js", "PostgreSQL", "BigQuery", "WebRTC"],
    badge: "Learning Systems",
    highlight: "Connecting students, parents, and tutors with automated scheduling, payments, and real-time learning analytics.",
    architecture: "Tutor & Student Portals → Live Class Streaming → Postgres Core → Student Retention BI → Learning Cockpit",
  },
  {
    id: "insurance",
    industry: "Insurance",
    title: "Digital Policy Management & Claims Automation",
    metric: "74%",
    metricLabel: "Faster Claims Workflows",
    desc: "Developing digital insurance solutions that simplify policy management, automate claims workflows, improve customer experiences, and support data-driven decision-making.",
    tech: ["Snowflake", "Python", "FastAPI", "React", "Looker Studio", "OCR AI"],
    badge: "Policy Automation",
    highlight: "Automated claims intake and underwriting validation with real-time actuarial risk modeling.",
    architecture: "Policyholder Submissions → Automated Claims OCR → Snowflake Data Mart → Actuarial Risk Engine → Underwriter Dashboard",
  },
  {
    id: "human-resources",
    industry: "Human Resources",
    title: "Workforce Portals & Talent Automation Platform",
    metric: "65%",
    metricLabel: "Hiring Cycle Reduction",
    desc: "Creating HR management systems, recruitment platforms, employee portals, and automation solutions that simplify hiring, workforce management, and reporting.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis", "Looker Studio"],
    badge: "Workforce Systems",
    highlight: "Unified employee lifecycle management, automated applicant tracking, and executive workforce headcount reporting.",
    architecture: "Applicant Streams → Automated Screening Pipeline → Employee Portal → Postgres DB → Workforce Headcount BI",
  },
  {
    id: "healthcare",
    industry: "Healthcare",
    title: "Patient Platforms & Secure Clinical Workflows",
    metric: "4.8x",
    metricLabel: "Faster Patient Intake",
    desc: "Building healthcare platforms, patient management systems, appointment solutions, and secure digital workflows that improve operational efficiency and patient experiences.",
    tech: ["FHIR", "HL7", "BigQuery", "Looker Studio", "Python", "FastAPI"],
    badge: "HIPAA Compliant",
    highlight: "18,000+ clinical hours saved annually with automated intake, appointment scheduling, and encrypted telemetry.",
    architecture: "EHR Silos → Kafka Ingest → BigQuery Lakehouse → Encrypted FHIR API → Provider Cockpit",
  },
  {
    id: "real-estate",
    industry: "Real Estate",
    title: "Property Marketplaces & CRM Solutions",
    metric: "80%",
    metricLabel: "Faster Lead Matching",
    desc: "Developing property marketplaces, listing platforms, CRM systems, and analytics solutions that streamline property management, lead tracking, and customer engagement.",
    tech: ["Next.js", "PostgreSQL", "React", "Looker Studio", "Mapbox", "Tailwind CSS"],
    badge: "PropTech Scale",
    highlight: "Automated lead tracking, digital lease pipelines, and portfolio valuation dashboards across multi-property networks.",
    architecture: "Property Listings → Real-Time Search API → Lead CRM Pipeline → Postgres Lakehouse → Portfolio Valuation BI",
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
    id: "ecommerce",
    name: "Ecommerce (D2C, B2B & B2C)",
    category: "Ecommerce",
    icon: ShoppingBag,
    badge: "Omnichannel Scale",
    desc: "Helping ecommerce businesses build scalable online stores, streamline operations, automate workflows, and turn customer and sales data into actionable insights.",
    impact: "+18% gross margin lift",
    capabilities: ["Scalable Online Storefronts", "Operations & Workflow Automation", "Sales & Customer Data BI"],
    tech: ["Shopify Plus", "Next.js", "Snowflake", "Stripe"],
    compliance: "PCI-DSS, SOC 2, GDPR",
  },
  {
    id: "edtech",
    name: "EdTech",
    category: "EdTech",
    icon: GraduationCap,
    badge: "Learning Systems",
    desc: "Building learning platforms, education marketplaces, student management systems, and data-driven solutions that improve learning experiences and operational efficiency.",
    impact: "3.2x engagement lift",
    capabilities: ["Education Marketplaces", "Student Management Systems", "Learning Experience Analytics"],
    tech: ["Next.js", "React Native", "PostgreSQL", "BigQuery"],
    compliance: "FERPA, COPPA, ADA Title III",
  },
  {
    id: "insurance",
    name: "Insurance",
    category: "Insurance",
    icon: ShieldCheck,
    badge: "Policy Automation",
    desc: "Developing digital insurance solutions that simplify policy management, automate claims workflows, improve customer experiences, and support data-driven decision-making.",
    impact: "74% faster claims",
    capabilities: ["Digital Policy Management", "Automated Claims Workflows", "Data-Driven Underwriting BI"],
    tech: ["Snowflake", "Python", "FastAPI", "Looker Studio"],
    compliance: "NAIC, SOC 2 Type II, HIPAA",
  },
  {
    id: "human-resources",
    name: "Human Resources",
    category: "Human Resources",
    icon: Users,
    badge: "Workforce Systems",
    desc: "Creating HR management systems, recruitment platforms, employee portals, and automation solutions that simplify hiring, workforce management, and reporting.",
    impact: "65% hiring cycle reduction",
    capabilities: ["HR Management Systems", "Recruitment & Hiring Automation", "Employee Portals & Headcount BI"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    compliance: "SOC 2, GDPR, EEOC Reporting",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    category: "Healthcare",
    icon: HeartPulse,
    badge: "HIPAA Compliant",
    desc: "Building healthcare platforms, patient management systems, appointment solutions, and secure digital workflows that improve operational efficiency and patient experiences.",
    impact: "4.8x faster intake",
    capabilities: ["Patient Management Systems", "Appointment & Scheduling Solutions", "Secure Digital Telemetry"],
    tech: ["FHIR", "HL7", "BigQuery", "Looker Studio"],
    compliance: "HIPAA, HITRUST, SOC 2",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    category: "Real Estate",
    icon: Building2,
    badge: "PropTech Scale",
    desc: "Developing property marketplaces, listing platforms, CRM systems, and analytics solutions that streamline property management, lead tracking, and customer engagement.",
    impact: "80% faster lead review",
    capabilities: ["Property Marketplaces & Listings", "Lead Tracking CRM Systems", "Property Analytics & BI"],
    tech: ["Next.js", "PostgreSQL", "Mapbox", "Looker Studio"],
    compliance: "SOC 2, Fair Housing Act",
  },
];

const FILTER_CATEGORIES = [
  "All Industries",
  "Ecommerce",
  "EdTech",
  "Insurance",
  "Human Resources",
  "Healthcare",
  "Real Estate",
];

// =========================================================================
// 4. ARCHITECTURE BLUEPRINTS INTERACTIVE SECTION DATA
// =========================================================================
const BLUEPRINTS = [
  {
    id: "ecommerce-blueprint",
    name: "Omnichannel Commerce Lakehouse",
    domain: "Ecommerce",
    badge: "Sub-Second OLAP",
    sla: "99.99% Availability",
    steps: [
      { num: "01", title: "Multi-Store Ingest", desc: "Shopify Plus, Amazon Seller, Stripe webhooks, and warehouse ERP feeds.", tech: "CDC Pipeline Sync", tag: "Zero Event Loss" },
      { num: "02", title: "Event Streaming", desc: "High-throughput Kafka cluster handling order queues and inventory reconciliation.", tech: "Apache Kafka Cluster", tag: "Sub-Minute Sync" },
      { num: "03", title: "Sales Lakehouse", desc: "Snowflake columnar lakehouse with automated dbt rollup margin models.", tech: "Snowflake + dbt Cloud", tag: "Clean Data Mart" },
      { num: "04", title: "Inventory & LTV ML", desc: "Predictive stockout warning models and unified customer lifetime value analytics.", tech: "Python ML Pipeline", tag: "Margin Protection" },
      { num: "05", title: "Executive Cockpit", desc: "Real-time blended ROAS, inventory turns, and executive margin dashboard.", tech: "Looker Studio / Next.js", tag: "Executive Agility" },
    ],
  },
  {
    id: "edtech-blueprint",
    name: "Learning Platform Lakehouse",
    domain: "EdTech",
    badge: "FERPA & COPPA Ready",
    sla: "Sub-20ms Video Telemetry",
    steps: [
      { num: "01", title: "Student & Tutor Feeds", desc: "Marketplace discovery, session booking, payment gateways, and messaging.", tech: "Next.js + WebRTC", tag: "Real-Time Sync" },
      { num: "02", title: "Telemetry Ingestion", desc: "Class attendance streams, lesson completion markers, and tutor reviews.", tech: "Kafka Event Streams", tag: "Live Telemetry" },
      { num: "03", title: "Learning Warehouse", desc: "BigQuery core database with student progress models and automated dbt DAGs.", tech: "BigQuery Lakehouse", tag: "Deterministic Data" },
      { num: "04", title: "Retention Engine", desc: "Student dropout risk scoring, personalized tutor matching, and feedback analytics.", tech: "Predictive Scoring", tag: "3.2x Engagement" },
      { num: "05", title: "Administrative Portal", desc: "Executive parent-teacher portals, payout ledgers, and academic cockpits.", tech: "Snappy Next.js UI", tag: "Full Visibility" },
    ],
  },
  {
    id: "insurance-blueprint",
    name: "Policy & Claims OCR Engine",
    domain: "Insurance",
    badge: "SOC 2 & NAIC Ready",
    sla: "74% Faster Claims",
    steps: [
      { num: "01", title: "First Notice of Loss", desc: "Policyholder digital portals, mobile FNOL uploads, and broker submissions.", tech: "Encrypted Ingest API", tag: "Zero Paperwork" },
      { num: "02", title: "Automated OCR", desc: "AI document OCR extracting damage reports, medical bills, and police records.", tech: "Document AI / OCR", tag: "PHI Scrubbing" },
      { num: "03", title: "Underwriting Mart", desc: "Snowflake actuarial data mart storing policy histories and loss logs.", tech: "Snowflake Data Mart", tag: "Actuarial Core" },
      { num: "04", title: "Actuarial Risk Engine", desc: "Automated claims triage, reserve calculations, and real-time fraud scoring.", tech: "Python Risk DAGs", tag: "99.9% Accuracy" },
      { num: "05", title: "Adjuster Cockpit", desc: "C-suite loss ratio telemetry, adjuster work queues, and regulatory audit feeds.", tech: "Looker Studio Portal", tag: "Instant Adjudication" },
    ],
  },
  {
    id: "healthcare-blueprint",
    name: "Healthcare EHR Lakehouse",
    domain: "Healthcare",
    badge: "HIPAA Air-Gapped",
    sla: "99.99% Availability",
    steps: [
      { num: "01", title: "Data Sources", desc: "Epic, Cerner, FHIR APIs, PACS DICOM images, and legacy SQL clinical silos.", tech: "FHIR / HL7 CDC", tag: "Encrypted Ingest" },
      { num: "02", title: "Ingestion & Security", desc: "De-identification pipeline with HIPAA Safe Harbor hashing and Kafka streams.", tech: "Kafka + Air-Gapped VPC", tag: "PHI Scrubbing" },
      { num: "03", title: "Lakehouse Core", desc: "BigQuery / Databricks Delta lake with automated dbt clinical testing.", tech: "Delta Lake + dbt Core", tag: "Deterministic Data" },
      { num: "04", title: "AI Clinical Copilot", desc: "LangGraph deterministic reasoning agent with medical citation guardrails.", tech: "Hybrid RAG + Vector DB", tag: "Zero Hallucinations" },
      { num: "05", title: "Provider Cockpit", desc: "Next.js WebGL & Looker Studio cockpits for ICU occupancy and doctor workflows.", tech: "Looker Studio / Next.js", tag: "< 18ms Queries" },
    ],
  },
  {
    id: "human-resources-blueprint",
    name: "Workforce Intelligence Engine",
    domain: "Human Resources",
    badge: "SOC 2 & GDPR Ready",
    sla: "65% Hiring Reduction",
    steps: [
      { num: "01", title: "Talent Streams", desc: "ATS applicant feeds, job board scrapers, payroll systems, and HRIS logs.", tech: "CDC Sync Pipelines", tag: "Unified Streams" },
      { num: "02", title: "Automated Screening", desc: "Intelligent candidate matching, resume parsing, and interview scheduling DAGs.", tech: "Automated Workflows", tag: "10x Faster Screening" },
      { num: "03", title: "Workforce Mart", desc: "PostgreSQL operational database with consolidated employee lifecycle models.", tech: "PostgreSQL + Redis", tag: "Consolidated Core" },
      { num: "04", title: "Attrition & Parity ML", desc: "Predictive flight risk modeling, compensation parity audits, and headcount forecasting.", tech: "Predictive ML DAGs", tag: "Proactive Retention" },
      { num: "05", title: "Executive HR Cockpit", desc: "C-suite headcount dashboards, time-to-hire telemetry, and EEOC audit reporting.", tech: "Looker Studio BI", tag: "Executive Clarity" },
    ],
  },
  {
    id: "real-estate-blueprint",
    name: "PropTech MLS & Lead Pipeline",
    domain: "Real Estate",
    badge: "Sub-25ms Map FPS",
    sla: "80% Faster Lead Match",
    steps: [
      { num: "01", title: "MLS Listing Feeds", desc: "RETS / RESO Web APIs, syndication feeds, 3D tours, and GIS boundary data.", tech: "RESO Web API Sync", tag: "Sub-Minute Sync" },
      { num: "02", title: "Geospatial Index", desc: "Mapbox vector tiles and PostGIS spatial indexing for instant geographic search.", tech: "PostGIS Spatial Index", tag: "High Concurrency" },
      { num: "03", title: "Property Data Mart", desc: "Unified listing, valuation, and transaction database with automated data hygiene.", tech: "PostgreSQL Lakehouse", tag: "Clean Data Core" },
      { num: "04", title: "Lead CRM DAGs", desc: "Predictive buyer intent scoring, automated SMS tour booking, and lead routing.", tech: "CRM Automation DAGs", tag: "Instant Nurturing" },
      { num: "05", title: "Brokerage Cockpit", desc: "Portfolio NOI telemetry, agent commission accounting, and valuation dashboards.", tech: "Next.js + Mapbox UI", tag: "Portfolio Agility" },
    ],
  },
];

// =========================================================================
// 5. INDUSTRY CAPABILITIES & TECH STACKS DATA (6 CORE INDUSTRIES)
// =========================================================================
const DETAILED_SERVICES = [
  {
    id: "ecommerce",
    name: "Ecommerce (D2C, B2B & B2C)",
    icon: ShoppingBag,
    summary: "Scalable online stores, streamlined operations, automated workflows, and sales data analytics.",
    challenge: "Fragmented customer data, manual order processing, and slow storefront performance reduce conversion and limit scale across retail channels.",
    solutions: [
      "Scalable Next.js & Shopify Plus storefronts with headless architecture",
      "Automated inventory sync & ERP fulfillment workflows across channels",
      "Sales data lakehouses & unified customer lifetime value (LTV) analytics",
      "Dynamic pricing and conversion rate optimization (CRO) telemetry",
    ],
    techStack: ["Next.js", "Shopify Plus", "Snowflake", "dbt", "PostgreSQL", "Stripe API"],
    outcomes: ["+18% gross margin lift", "Zero stockout sync errors", "Sub-second storefront speed"],
  },
  {
    id: "edtech",
    name: "EdTech",
    icon: GraduationCap,
    summary: "Learning platforms, education marketplaces, student management systems, and data-driven solutions.",
    challenge: "Disconnected classroom tools, manual scheduling, and poor visibility into student progress create operational overhead and hinder retention.",
    solutions: [
      "Connected tutor discovery, booking, and class scheduling marketplaces",
      "Interactive live learning platforms with video and real-time collaboration",
      "Student progress tracking, retention modeling, and administrative BI",
      "Automated lesson billing, subscription payments, and tutor payouts",
    ],
    techStack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "BigQuery", "WebRTC"],
    outcomes: ["3.2x student engagement lift", "50K+ classes supported", "100% FERPA compliance"],
  },
  {
    id: "insurance",
    name: "Insurance",
    icon: ShieldCheck,
    summary: "Digital insurance solutions, policy management, claims workflows, and risk decision engines.",
    challenge: "Paper-heavy policy intake and manual claims reviews result in slow turnaround times, higher claim handling costs, and poor customer retention.",
    solutions: [
      "Digital policy management portals and self-service policyholder portals",
      "Automated claims workflows with intelligent document OCR and triage",
      "Actuarial risk scoring and data-driven underwriting decision engines",
      "Executive loss ratio, fraud detection, and regulatory compliance dashboards",
    ],
    techStack: ["Snowflake", "Python", "FastAPI", "React", "Looker Studio", "OCR AI"],
    outcomes: ["74% faster claims workflows", "99.9% policy data accuracy", "Full regulatory audit readiness"],
  },
  {
    id: "human-resources",
    name: "Human Resources",
    icon: Users,
    summary: "HR management systems, recruitment platforms, employee portals, and workforce automation.",
    challenge: "Disjointed HR tools, manual hiring tracking, and fragmented employee records delay hiring cycles and create compliance bottlenecks.",
    solutions: [
      "Modern HR management systems (HRIS) and employee self-service portals",
      "Automated recruitment pipelines with applicant tracking and interview flows",
      "Workforce onboarding, document compliance, and performance tracking",
      "Headcount reporting, compensation analytics, and retention dashboards",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis", "Looker Studio"],
    outcomes: ["65% hiring cycle reduction", "90% faster onboarding", "Consolidated employee telemetry"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    summary: "Healthcare platforms, patient management systems, appointment tools, and secure digital workflows.",
    challenge: "Fragmented clinical data silos, manual intake paperwork, and cumbersome appointment scheduling lead to long wait times and provider burnout.",
    solutions: [
      "HIPAA-compliant patient portals with online scheduling and telehealth intake",
      "Electronic Health Record (EHR) data lakehouses with encrypted FHIR/HL7 sync",
      "Provider productivity, bed occupancy, and clinic operations cockpits",
      "Secure digital messaging, prescription workflows, and telemetry pipelines",
    ],
    techStack: ["FHIR", "HL7", "BigQuery", "Looker Studio", "Python", "FastAPI", "GCP Healthcare"],
    outcomes: ["4.8x faster patient intake", "18,000+ clinical hours saved", "100% HIPAA audit compliance"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building2,
    summary: "Property marketplaces, listing platforms, CRM systems, and real estate analytics solutions.",
    challenge: "Scattered property listings, manual lead tracking, and opaque valuation reporting slow deal velocity and complicate property management.",
    solutions: [
      "High-performance property marketplaces and interactive map listing platforms",
      "Real estate CRM systems for automated lead tracking, nurturing, and tours",
      "Tenant portals with automated lease processing, rent collection, and maintenance",
      "Portfolio Net Operating Income (NOI) analytics and property valuation models",
    ],
    techStack: ["Next.js", "PostgreSQL", "React", "Looker Studio", "Mapbox", "Tailwind CSS"],
    outcomes: ["80% faster lead review", "Sub-25ms property search", "Unified portfolio visibility"],
  },
];

// =========================================================================
// 6. INDUSTRY RESEARCH & ARCHITECTURE GUIDES DATA
// =========================================================================
const RESEARCH_PAPERS = [
  {
    title: "Healthcare Analytics Blueprint: HIPAA Lakehouses & Clinical Workflows",
    category: "Healthcare",
    readTime: "8 min read",
    image: "/images/industries-multi-domain-hero.jpg",
    desc: "A tactical guide to eliminating data fragmentation in clinical operations using encrypted FHIR data pipelines, automated patient intake, and strict HIPAA guardrails.",
    href: "/case-studies",
  },
  {
    title: "Digital Insurance & Claims Framework: Sub-Second Financial Telemetry",
    category: "Insurance",
    readTime: "10 min read",
    image: "/images/cta-office-collab.jpg",
    desc: "Architectural blueprint for sub-second policy telemetry, automated document OCR for First Notice of Loss, and actuarial risk scoring models in Snowflake.",
    href: "/case-studies/progress-partners",
  },
  {
    title: "Omnichannel Commerce & Multi-Tenant Platforms at Scale",
    category: "Ecommerce & EdTech",
    readTime: "7 min read",
    image: "/images/hero-team-consulting-v2.jpg",
    desc: "How high-growth commerce and education platforms architect real-time inventory synchronization, sub-second search indexing, and automated student-tutor matching.",
    href: "/case-studies/tuitionstime",
  },
];

export default function IndustriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Industries");
  const [activeBlueprintId, setActiveBlueprintId] = useState("ecommerce-blueprint");
  const [solutionIndex, setSolutionIndex] = useState(0);
  const [selectedCapabilityId, setSelectedCapabilityId] = useState("ecommerce");

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

  const activeCapability = useMemo(() => {
    return (
      DETAILED_SERVICES.find((s) => s.id === selectedCapabilityId) ||
      DETAILED_SERVICES[0]
    );
  }, [selectedCapabilityId]);

  const handleNextSolution = () => {
    setSolutionIndex((prev) => (prev + 1) % FEATURED_SOLUTIONS.length);
  };

  const handlePrevSolution = () => {
    setSolutionIndex((prev) => (prev - 1 + FEATURED_SOLUTIONS.length) % FEATURED_SOLUTIONS.length);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#000000] text-[#FFFFFF] font-sans antialiased selection:bg-[#00BCD4] selection:text-[#050505]">
      {/* ========================================================================= */}
      {/* 1. HERO — INDUSTRIES WE TRANSFORM (PURE BLACK #000000 54/46 SPLIT WITH PHOTO) */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 bg-[#000000] border-b border-[#1B242B] overflow-hidden">
        {/* Subtle Cyan Decorative Glow Behind Image */}
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-25 -z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 188, 212, 0.22) 0%, rgba(8, 127, 165, 0.08) 45%, transparent 70%)",
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00BCD4]/40 bg-[#101214] text-[#00BCD4] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                  ENTERPRISE DOMAIN INTELLIGENCE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
                Digital Transformation<br />
                Across <span className="text-[#00BCD4]">Critical Industries.</span>
              </h1>

              {/* Subheadline Description */}
              <p className="text-base sm:text-[17px] text-slate-300 leading-relaxed font-normal max-w-2xl">
                We engineer scalable digital platforms, modern cloud architectures, automated workflows, and data-driven systems tailored to the compliance, operational velocity, and growth demands of mission-critical industries.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
                <Link
                  href="/contact#contact-hero"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 h-12 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-lg shadow-[#00BCD4]/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 text-center cursor-pointer"
                >
                  <span>Schedule Strategy Call</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm sm:text-base border border-white/15 hover:border-[#00BCD4]/60 transition-all duration-200 text-center"
                >
                  <span>Explore Case Studies</span>
                </Link>
              </div>

              {/* 4-Metric Trust Ribbon */}
              <div className="pt-5 sm:pt-6 border-t border-[#1B242B] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
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
              </div>
            </motion.div>

            {/* Right 46% Column: Prominent High-Quality Industry Visual with Subtle Cyan Aura */}
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Subtle Cyan Decorative Curve Glow */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#00BCD4]/20 via-transparent to-[#00BCD4]/10 -z-10 blur-xl opacity-70" />

              <div className="relative w-full h-[280px] sm:h-[340px] md:h-[390px] lg:h-[430px] rounded-2xl overflow-hidden border border-[#00BCD4]/30 shadow-2xl bg-[#101214]">
                <Image
                  src="/images/industries-multi-domain-hero.jpg"
                  alt="CodePlaced digital transformation engineering across critical enterprise industries"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Subtle dark gradient overlay to blend seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent pointer-events-none" />

                {/* Verified badge pill */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#000000]/85 backdrop-blur-md border border-[#00BCD4]/40 text-white text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                  <span>One Technology Partner &bull; 6 Core Industries</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED INDUSTRY SOLUTIONS — PURE BLACK #000000 CAROUSEL */}
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

          {/* Active Solution Card (Dark Gray #101214 with Thin Cyan Border) */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#101214] border border-[#00BCD4]/30 hover:border-[#00BCD4]/50 shadow-2xl p-6 sm:p-8 lg:p-9 transition-colors">
            <AnimatePresence mode="wait">
              <motion.div
                key={FEATURED_SOLUTIONS[solutionIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
              >
                {/* Left 7 Columns: Project Details */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00BCD4] bg-[#000000] px-3 py-1 rounded-full border border-[#00BCD4]/30">
                      {FEATURED_SOLUTIONS[solutionIndex].industry}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
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
                    <span className="text-[#00BCD4] font-bold">Data Flow: </span>
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
                      <span>Read Case Studies</span>
                    </Link>
                  </div>
                </div>

                {/* Right 5 Columns: Verified Result Card */}
                <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#000000] border border-[#00BCD4]/25 text-white shadow-xl space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00BCD4]">
                      Quantified Business Result
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
      {/* 3. EXPLORE MISSION-CRITICAL INDUSTRIES — PURE WHITE #FFFFFF WITH DARK CARDS */}
      {/* ========================================================================= */}
      <section id="industries-explorer" className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] text-[#111111] border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-6 sm:mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#087FA5]">
              COMPLETE DOMAIN CATALOG
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#111111] tracking-tight">
              Explore Mission-Critical Industries
            </h2>
            <p className="text-[#566171] text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect specialized architecture patterns, compliance frameworks, and benchmark metrics across our 6 core sectors.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#F5F6F8] border border-slate-200 mb-6 space-y-2.5">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#566171]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by industry name, capability, or tech..."
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-medium text-[#111111] placeholder:text-[#566171]/70 focus:outline-none focus:border-[#087FA5] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#566171] hover:text-[#111111] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-slate-200">
              <span className="text-[11px] font-bold text-[#566171] mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Category:
              </span>
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
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

          {/* 3-Column x 2-Row Grid on Desktop: Black/Dark-Gray (#101214) Cards with Thin Cyan Borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredIndustries.map((ind, idx) => {
              const IndIcon = ind.icon;

              return (
                <motion.div
                  key={ind.id}
                  id={ind.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                  className="rounded-2xl bg-[#101214] border border-[#00BCD4]/25 hover:border-[#00BCD4] p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 scroll-mt-28 text-white"
                >
                  <div className="space-y-3.5">
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#000000] text-[#00BCD4] border border-[#00BCD4]/30 flex items-center justify-center group-hover:bg-[#00BCD4] group-hover:text-[#050505] transition-colors duration-200">
                        <IndIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#00BCD4] bg-[#000000] px-2.5 py-0.5 rounded-full border border-[#00BCD4]/30">
                        {ind.badge}
                      </span>
                    </div>

                    {/* Title + Desc */}
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight group-hover:text-[#00BCD4] transition-colors duration-200">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-3">
                        {ind.desc}
                      </p>
                    </div>

                    {/* Key Capabilities */}
                    <div className="space-y-1.5 pt-2 border-t border-[#1B242B]">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Core Capabilities:
                      </span>
                      <ul className="space-y-1">
                        {ind.capabilities.slice(0, 3).map((cap) => (
                          <li key={cap} className="text-[11px] text-slate-200 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0" />
                            <span className="truncate">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom: Outcome & Action Link with Circular Arrow */}
                  <div className="mt-5 pt-3.5 border-t border-[#1B242B] flex items-center justify-between">
                    <div>
                      <div className="text-[9px] uppercase font-bold text-slate-400">Benchmark Impact</div>
                      <div className="text-xs font-mono font-black text-emerald-400">{ind.impact}</div>
                    </div>
                    <Link
                      href="/contact#contact-hero"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#00BCD4] hover:text-[#20d7f5] transition-colors group/link"
                    >
                      <span>Explore Industry</span>
                      <div className="w-6 h-6 rounded-full bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center group-hover/link:bg-[#00BCD4] group-hover/link:text-[#050505] transition-all">
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredIndustries.length === 0 && (
            <div className="p-8 text-center rounded-xl bg-[#F5F6F8] border border-slate-200 mt-6">
              <p className="text-[#566171] font-semibold text-xs sm:text-sm">
                No industries found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Industries");
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
      {/* 4. INDUSTRY ARCHITECTURE BLUEPRINTS — PURE BLACK #000000 */}
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
              Inspect production-tested data flow diagrams from source ingestion to lakehouse, analytics marts, and executive dashboards.
            </p>
          </div>

          {/* Blueprint Selector Tabs with Cyan Active State */}
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
                  <span>{bp.domain}</span>
                </button>
              );
            })}
          </div>

          {/* Active Blueprint Visualization Panel */}
          <div className="p-5 sm:p-7 rounded-[22px] bg-[#101214] border border-[#00BCD4]/25 shadow-xl space-y-6">
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

            {/* Horizontal 5-Step Pipeline Flow with Cyan Connecting Arrows */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {activeBlueprint.steps.map((step, idx) => (
                <div
                  key={step.num}
                  className="p-4 rounded-xl bg-[#000000] border border-[#1B242B] hover:border-[#00BCD4]/50 transition-all flex flex-col justify-between space-y-2.5 relative group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-md bg-[#101214] text-[#00BCD4] font-mono text-xs font-black flex items-center justify-center border border-[#00BCD4]/30">
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

                  {/* Desktop connecting arrow to next step */}
                  {idx < activeBlueprint.steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-[#101214] border border-[#00BCD4]/50 items-center justify-center text-[#00BCD4] shadow-xs pointer-events-none">
                      <ChevronRight className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Actions in Blueprint */}
            <div className="pt-4 border-t border-[#1B242B] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#A1AAB7] text-center sm:text-left text-[11px] sm:text-xs">
                Need this exact architecture tailored to your cloud environment?
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
      {/* 5. CAPABILITIES & TECH STACKS — PURE WHITE #FFFFFF TWO-COLUMN LAYOUT */}
      {/* ========================================================================= */}
      <section id="capabilities" className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] text-[#111111] border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-8 sm:mb-9">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#087FA5]">
              SPECIALIZED PRACTICES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#111111] tracking-tight">
              Capabilities & Tech Stacks
            </h2>
            <p className="text-[#566171] text-sm sm:text-base leading-relaxed">
              Explore domain challenges, tailored solutions, specialized tech stacks, and quantified outcomes.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column (~33%): Vertical List of 6 Industries */}
            <div className="lg:col-span-4 space-y-2">
              {DETAILED_SERVICES.map((svc) => {
                const isSelected = selectedCapabilityId === svc.id;
                const SvcIcon = svc.icon;

                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedCapabilityId(svc.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl flex items-center justify-between transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? "bg-[#EBF9FC] border-l-4 border-[#00BCD4] border-t-slate-200 border-r-slate-200 border-b-slate-200 text-[#101820] shadow-xs"
                        : "bg-white hover:bg-slate-50 border-slate-200 text-[#566171] hover:text-[#111111]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-[#00BCD4] text-[#050505]"
                            : "bg-[#F5F6F8] text-[#087FA5]"
                        }`}
                      >
                        <SvcIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#111111]">
                          {svc.name}
                        </div>
                        <div className="text-[11px] text-[#566171] truncate max-w-[200px]">
                          {svc.summary}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-[#087FA5] translate-x-1" : "text-slate-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column (~67%): Large Capability Information Panel */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-6">
              {/* Panel Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#087FA5]">
                    Specialized Industry Practice
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#111111] mt-0.5">
                    {activeCapability.name}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Production Ready
                </div>
              </div>

              {/* Domain Challenge Box */}
              <div className="p-4 rounded-xl bg-white border border-rose-100 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600">
                  Industry Challenge:
                </span>
                <p className="text-xs sm:text-sm text-[#566171] leading-relaxed">
                  {activeCapability.challenge}
                </p>
              </div>

              {/* Engineered Solutions in 2-Column Subgrid */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  Engineered Solutions:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCapability.solutions.map((sol) => (
                    <div
                      key={sol}
                      className="p-3 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5 text-xs font-semibold text-[#111111] shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Quantified Outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-slate-200">
                {/* Tech Stack */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Production Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCapability.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-bold text-[#111111] shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Quantified Client Outcomes:
                  </span>
                  <div className="space-y-1.5">
                    {activeCapability.outcomes.map((out) => (
                      <div key={out} className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#566171]">
                  Speak with our domain engineers specializing in {activeCapability.name}.
                </span>
                <Link
                  href="/contact#contact-hero"
                  className="inline-flex items-center justify-center gap-1.5 px-6 h-10 rounded-full bg-[#101820] hover:bg-black text-white font-bold text-xs transition-all shadow-xs shrink-0 cursor-pointer"
                >
                  <span>Consult Practice Lead</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TRUSTED INDUSTRIES & ENTERPRISE IMPACT — PURE BLACK #000000 */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#000000] border-b border-[#1B242B] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Top: 6 Compact Industry Cards in a Horizontal Row */}
          <div className="space-y-4 text-center">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
                TRUSTED DOMAINS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Engineered for High-Stakes Sectors
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {INDUSTRIES_LIST.map((ind) => {
                const IndIcon = ind.icon;
                return (
                  <a
                    key={ind.id}
                    href={`#${ind.id}`}
                    className="p-4 rounded-xl bg-[#101214] border border-[#1B242B] hover:border-[#00BCD4]/60 transition-all text-center flex flex-col items-center justify-center gap-2 group cursor-pointer shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#000000] border border-[#1B242B] group-hover:border-[#00BCD4]/40 flex items-center justify-center text-[#00BCD4]">
                      <IndIcon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white group-hover:text-[#00BCD4] transition-colors leading-tight">
                      {ind.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom: 4 Impact Metrics in Equal-Sized Cards */}
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

            {/* Clean 4-Metric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <div className="p-6 rounded-2xl bg-[#101214] border border-[#00BCD4]/25 text-center space-y-1.5 shadow-xl">
                <div className="text-3xl sm:text-4xl font-mono font-black text-[#00BCD4]">100+</div>
                <div className="text-xs sm:text-sm font-bold text-white">Production Deployments</div>
                <p className="text-[11px] text-[#A1AAB7] leading-relaxed">Fixed-scope 2–4 week delivery sprints with zero downtime cutover.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#101214] border border-[#00BCD4]/25 text-center space-y-1.5 shadow-xl">
                <div className="text-3xl sm:text-4xl font-mono font-black text-[#00BCD4]">95%</div>
                <div className="text-xs sm:text-sm font-bold text-white">Client Retention</div>
                <p className="text-[11px] text-[#A1AAB7] leading-relaxed">Long-term engineering partnerships across multi-year modernization roadmaps.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#101214] border border-[#00BCD4]/25 text-center space-y-1.5 shadow-xl">
                <div className="text-3xl sm:text-4xl font-mono font-black text-[#00BCD4]">99.99%</div>
                <div className="text-xs sm:text-sm font-bold text-white">Verified SLA Guarantee</div>
                <p className="text-[11px] text-[#A1AAB7] leading-relaxed">High-availability streaming pipelines and private cloud configurations.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#101214] border border-[#00BCD4]/25 text-center space-y-1.5 shadow-xl">
                <div className="text-3xl sm:text-4xl font-mono font-black text-emerald-400">$140M+</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400">Client Value Unlocked</div>
                <p className="text-[11px] text-[#A1AAB7] leading-relaxed">Combined cloud infrastructure savings and operational margin growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INDUSTRY RESEARCH & ARCHITECTURE GUIDES — PURE WHITE #FFFFFF */}
      {/* ========================================================================= */}
      <section id="research" className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] text-[#111111] border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-8 sm:mb-9">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#087FA5]">
              ENGINEERING PLAYBOOKS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#111111] tracking-tight">
              Industry Research & Architecture Guides
            </h2>
            <p className="text-[#566171] text-xs sm:text-sm leading-relaxed">
              Tactical playbooks and engineering whitepapers on digital transformation, sub-second telemetry, and compliance frameworks.
            </p>
          </div>

          {/* 3-Column Article Card Design with Photo on Top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESEARCH_PAPERS.map((paper) => (
              <div
                key={paper.title}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#00BCD4] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo on Top */}
                  <div className="relative w-full h-44 bg-slate-900 overflow-hidden">
                    <Image
                      src={paper.image}
                      alt={paper.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <span className="absolute top-3 left-3 font-mono font-bold text-[#00BCD4] bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] border border-[#00BCD4]/30">
                      {paper.category}
                    </span>
                    <span className="absolute bottom-3 right-3 text-white text-[11px] font-mono bg-black/70 px-2 py-0.5 rounded">
                      {paper.readTime}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-extrabold text-[#111111] leading-snug group-hover:text-[#087FA5] transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-xs text-[#566171] leading-relaxed">
                      {paper.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-100">
                  <Link
                    href={paper.href}
                    className="text-xs font-bold text-[#087FA5] group-hover:text-[#00BCD4] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read the Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL CTA BANNER — WHITE SECTION BACKGROUND WITH BLACK CARD BANNER */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[28px] p-7 sm:p-10 lg:p-12 text-center overflow-hidden bg-[#000000] border border-[#00BCD4]/30 text-white shadow-2xl space-y-5">
            {/* Subtle Cyan Aura / Curve */}
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-20 -z-0"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0, 188, 212, 0.4) 0%, transparent 70%)",
              }}
            />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00BCD4]/10 text-[#00BCD4] border border-[#00BCD4]/30 relative z-10">
              <Sparkles className="w-3.5 h-3.5 text-[#00BCD4]" /> Start Your 2–4 Week Industry Engagement
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black max-w-2xl mx-auto text-white tracking-tight leading-tight relative z-10">
              Ready to Engineer Mission-Critical Systems for Your Industry?
            </h2>

            <p className="text-[#A1AAB7] text-xs sm:text-sm leading-relaxed max-w-xl mx-auto relative z-10">
              Schedule a 30-minute technical architecture review directly with our Principal Engineers. We execute mutual NDAs upfront.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
              <Link
                href="/contact#contact-hero"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 h-11 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-sm shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 h-11 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm border border-[#1B242B] hover:border-[#00BCD4]/50 transition-all"
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
