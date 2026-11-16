"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Database,
  BarChart3,
  Workflow,
  Layers,
  ShieldCheck,
  TrendingUp,
  Activity,
  LayoutGrid,
  Cpu,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";

const UNIFIED_PILLARS = [
  {
    title: "Data Engineering & Architecture",
    description:
      "End-to-end medallion architectures (Bronze, Silver, Gold) engineered for high reliability, clear provenance, and horizontal scalability.",
    icon: Layers,
  },
  {
    title: "Data Pipelines & ETL/ELT",
    description:
      "Automated batch and real-time CDC streaming ingestion via Apache Kafka and Airflow with dead-letter queues and schema enforcement.",
    icon: Workflow,
  },
  {
    title: "Data Warehouses & Data Lakes",
    description:
      "Cloud-native Snowflake, BigQuery, Databricks, and ClickHouse warehouses structured for sub-second analytical queries.",
    icon: Database,
  },
  {
    title: "Data Integration & Transformation",
    description:
      "Modular dbt SQL CI/CD pipelines unifying CRM, ERP, billing, advertising, and product telemetry sources with automated regression tests.",
    icon: Cpu,
  },
  {
    title: "Business Intelligence & Analytics",
    description:
      "Consistent KPI definitions, cohort retention models, and multi-touch attribution eliminating conflicting spreadsheet reports.",
    icon: Activity,
  },
  {
    title: "Power BI, Tableau & Looker Studio",
    description:
      "Interactive, mobile-friendly executive portals and self-service exploration layers tailored for leadership and operational teams.",
    icon: BarChart3,
  },
  {
    title: "Executive Dashboards & KPI Reporting",
    description:
      "Sub-second command centers surfacing real-time ARR, unit economics, funnel conversion, and automated Slack/email digests.",
    icon: LayoutGrid,
  },
  {
    title: "Predictive Analytics & Forecasting",
    description:
      "Customer lifetime value estimation, churn risk scoring, demand forecasting, and anomaly detection over clean historical data.",
    icon: TrendingUp,
  },
  {
    title: "Data Governance & Optimization",
    description:
      "Row-level access controls, SOC2/HIPAA audit lineage, automated clustering, and FinOps query tuning that cuts cloud compute waste.",
    icon: ShieldCheck,
  },
];

const DELIVERY_TIMELINE = [
  {
    week: "Week 1",
    title: "KPI & Schema Audit",
    desc: "Audit source databases, marketing/billing APIs, data quality gaps, and define a unified KPI dictionary.",
  },
  {
    week: "Week 2",
    title: "Pipelines & Lakehouse Ingestion",
    desc: "Deploy automated ETL/ELT connectors, CDC ingestion streams, and medallion tables via declarative IaC.",
  },
  {
    week: "Week 3",
    title: "dbt Modeling & Governance",
    desc: "Build tested SQL transformation marts, semantic business definitions, and role-based access policies.",
  },
  {
    week: "Week 4",
    title: "BI Dashboards & Production Cutover",
    desc: "Launch Power BI, Looker, or custom executive dashboards with SLA alerting, runbooks, and team enablement.",
  },
];

const TECH_STACK = [
  "Snowflake",
  "Google BigQuery",
  "Databricks",
  "ClickHouse",
  "dbt Core",
  "Apache Kafka",
  "Apache Airflow",
  "Power BI",
  "Tableau",
  "Looker Studio",
  "Segment CDP",
  "PostgreSQL",
  "Terraform IaC",
];

const FAQS = [
  {
    q: "How quickly can our data pipelines and executive dashboards go live?",
    a: "Most engagements move from initial schema and KPI discovery to production pipelines and live executive dashboards within 3 to 4 weeks, delivered in verifiable weekly milestones.",
  },
  {
    q: "Will syncing our production databases cause operational downtime?",
    a: "No. We use zero-impact Change Data Capture (CDC) and read replicas so analytical workloads never slow down or interrupt live customer applications.",
  },
  {
    q: "Can you unify scattered data across ads, billing, CRM, and product databases?",
    a: "Yes. We connect sources like Stripe, Razorpay, GA4, Google/Meta Ads, Salesforce, HubSpot, and Postgres/MySQL into one tested warehouse model so every team sees identical numbers.",
  },
  {
    q: "How do you prevent slow dashboards and unexpected cloud warehouse bills?",
    a: "We pre-aggregate business marts cleanly in dbt/ClickHouse/Snowflake, enforce partition pruning and clustering keys, and configure auto-suspend warehousing policies to keep latency low and costs predictable.",
  },
];

export default function DataAnalyticsEngineeringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#050505] text-white pt-28 pb-20 lg:pt-36 lg:pb-24 border-b border-[#1B242B]">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none -z-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,200,232,0.16), rgba(0,127,156,0.06), transparent 70%)",
          }}
        />

        <div className="site-container relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#07090D] text-[#00C8E8] border border-[#00C8E8]/40 shadow-xs mb-6">
            <Database className="w-3.5 h-3.5 text-[#00C8E8]" />
            <span>DATA ANALYTICS &amp; ENGINEERING</span>
          </div>

          <h1 className="text-[34px] sm:text-[50px] lg:text-[60px] font-black tracking-tight text-white leading-[1.1] mb-6">
            Scalable Data Platforms &amp;{" "}
            <span className="text-[#00C8E8]">Decision-Ready BI</span>
          </h1>

          <p className="text-base sm:text-xl text-[#A1AAB7] leading-relaxed max-w-2xl mx-auto mb-10">
            Turn fragmented operational data into reliable pipelines, modern cloud warehouses, sub-second executive dashboards, and predictive analytics engineered for clarity and scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#contact-hero"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00C8E8] hover:bg-[#00B4D2] text-black font-bold text-sm shadow-xl shadow-[#00C8E8]/20 flex items-center justify-center gap-2 transition-all"
            >
              <span>Scope Your Data Solution</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#101820] hover:bg-white/10 text-white font-bold text-sm border border-[#1B242B] shadow-2xs flex items-center justify-center transition-all"
            >
              <span>View Data Case Studies</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 mt-12 border-t border-white/10 text-left">
            {[
              { value: "1.4M/s", label: "Streaming Throughput" },
              { value: "< 100ms", label: "Dashboard Response" },
              { value: "18x", label: "Query Acceleration" },
              { value: "100%", label: "Audited Data Lineage" },
            ].map((metric) => (
              <div key={metric.label} className="p-4 rounded-xl bg-[#0B1117] border border-[#1B242B]">
                <div className="text-xl sm:text-2xl font-black font-mono text-[#00C8E8]">
                  {metric.value}
                </div>
                <div className="text-xs font-medium text-[#A1AAB7] mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution Overview */}
      <section className="section-py site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
              Why Siloed Pipelines and Slow BI Hold Teams Back
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Many organizations rely on brittle ingestion scripts, unaligned definitions across marketing and finance tools, and sluggish reports that force manual spreadsheet reconciliation before every leadership review.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Silent ingestion failures leaving stale or inconsistent metrics in reports",
                "Conflicting revenue, CAC, and retention numbers across disconnected tools",
                "Slow multi-terabyte scans inflating monthly cloud warehouse costs",
                "Manual CSV exports slowing executive visibility and forecasting",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 space-y-5 shadow-sm">
            <h3 className="text-xl font-bold text-[#082F49]">
              One Unified Data &amp; Analytics Standard
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We connect data platform engineering directly with executive analytics. Self-healing ETL/ELT pipelines feed governed warehouse marts, powering fast Power BI, Tableau, Looker Studio, and custom Next.js telemetry portals from one verified source of truth.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-2xl font-black text-[#0B4F6C]">Single Source</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Verified KPI Models</div>
                <div className="text-[11px] text-slate-400 mt-0.5">dbt tested semantic layer</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-2xl font-black text-emerald-600">FinOps Tuned</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Lean Cloud Compute</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Partitioned &amp; clustered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. End-to-End Capabilities */}
      <section className="section-py bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
              Comprehensive Data Engineering &amp; Analytics Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From resilient cloud lakehouses and automated ETL/ELT workflows to executive BI cockpits and predictive forecasting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UNIFIED_PILLARS.map((card) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#0B4F6C]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center mb-5 group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                    <CardIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 4-Week Execution Rhythm */}
      <section className="section-py site-container">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
            From Fragmented Sources to Live Intelligence in 4 Weeks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELIVERY_TIMELINE.map((step) => (
            <div key={step.week} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <span className="text-xs font-black text-[#0B4F6C] bg-[#ECFEFF] px-2.5 py-1 rounded-md border border-[#0B4F6C]/20 inline-block">
                {step.week}
              </span>
              <h3 className="text-base font-bold text-[#082F49]">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Technology Stack */}
      <section className="section-py bg-[#082F49] text-white">
        <div className="site-container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Production Data &amp; BI Technology Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-cyan-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="section-py site-container max-w-3xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono font-bold tracking-[0.16em] text-[#00AFC8] block">
            FAQs
          </span>
          <h2 className="text-3xl font-black text-[#082F49]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#F8FAFC] border border-slate-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#082F49] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0E7490] shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="bg-[#050505] border-t border-[#1B242B] text-white py-16 text-center">
        <div className="site-container max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">
            Ready To Unify Your Data &amp; Analytics?
          </h2>
          <p className="text-sm sm:text-base text-[#A1AAB7]">
            Speak with our engineers to scope your data pipelines, warehouse architecture, or executive reporting system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/contact#contact-hero"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#00C8E8] hover:bg-[#00B4D2] text-black font-extrabold text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>Send an Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-[#1B242B] transition-colors"
            >
              View Case Studies
            </Link>
          </div>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8E8]" /> Zero Production Downtime
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8E8]" /> Full Ownership
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

