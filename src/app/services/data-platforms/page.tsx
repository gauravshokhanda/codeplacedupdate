"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppShell } from "@/components/AppShell";
import {
  Database,
  Workflow,
  Layers,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Server,
  Zap,
  Cpu,
  BarChart2,
  ChevronDown,
} from "lucide-react";

export default function DataPlatformsPage() {
  return (
    <AppShell>
      <div className="bg-white">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF]/25 to-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200/80">
          <div className="site-container relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <Database className="w-3.5 h-3.5 text-[#0E7490]" /> Modern Data Platforms & Lakehouses
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-[#082F49] leading-[1.1] mb-6">
              Data Platforms <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                Built For Petabyte Scale
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Stop fighting silent pipeline crashes and stale warehouse models. We engineer automated streaming ingestion, dbt transformations, and zero-loss lakehouse architectures in 2–4 weeks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#082F49] hover:bg-[#0B4F6C] text-white font-bold text-sm shadow-xl shadow-[#082F49]/15 flex items-center justify-center gap-2 transition-all"
              >
                <span>Scope Your Data Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#082F49] font-bold text-sm border border-slate-200 shadow-2xs flex items-center justify-center transition-all"
              >
                <span>View Lakehouse Case Studies</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Problem Statement */}
        <section className="section-py site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                The Enterprise Bottleneck
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
                Why Legacy Data Pipelines Break Under Modern Demands
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Most mid-market data teams inherit brittle cron scripts, disconnected SQL models, and massive cloud bills that scale linearly with query volume. When data schemas drift, pipelines fail silently, leaving executives blind and AI systems hallucinating.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Silent ingestion failures leaving corrupted rows in production",
                  "Unindexed multi-terabyte scans causing $30,000+ monthly cloud overruns",
                  "Schema drift breaking downstream BI dashboards without alerts",
                  "Over 48 hours of manual reconciliation to close monthly books",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                    <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 space-y-5 shadow-sm">
              <h3 className="text-xl font-bold text-[#082F49]">
                The CodePlaced Reliability Guarantee
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We replace fragile pipelines with self-healing, auditable data contracts. Every ingestion stream is tested for zero-loss throughput and verified against strict schema assertions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-2xl font-black text-[#0B4F6C]">100%</div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">Data Lineage & Audit</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">End-to-end provenance</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-2xl font-black text-emerald-600">&lt; 35ms</div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">Query Latency p99</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">ClickHouse / Snowflake</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Capabilities */}
        <section className="section-py bg-[#F8FAFC] border-y border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                Core Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
                Architectural Capabilities
              </h2>
              <p className="text-slate-600 text-base">
                Production-grade data engineering built for zero downtime and petabyte throughput.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Data Platform & Pipelines",
                  description: "Streaming Kafka and batch event ingestion designed for 150,000 req/sec without dropped frames.",
                  icon: Workflow,
                },
                {
                  title: "Cloud Lakehousing",
                  description: "Unified columnar warehouses (ClickHouse, Snowflake, Databricks) optimized for instant analytical queries.",
                  icon: Database,
                },
                {
                  title: "Data Integration & Connectors",
                  description: "Seamless integration across Salesforce, Stripe, HubSpot, on-prem SQL, and custom ERP APIs.",
                  icon: Layers,
                },
                {
                  title: "Automated Governance & QA",
                  description: "dbt automated testing, real-time schema validation, and cryptographically verified audit trails.",
                  icon: ShieldCheck,
                },
              ].map((card) => {
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
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. 4-Week Delivery Methodology */}
        <section className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              Execution Rhythm
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
              From Discovery to Live Lakehouse in 4 Weeks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                week: "Week 1",
                title: "Deep Schema Audit",
                desc: "Dissect existing data sources, error rates, and security posture. Deliver target lakehouse topology contract.",
              },
              {
                week: "Week 2",
                title: "Pipeline Infrastructure",
                desc: "Deploy automated ingestion connectors, Kafka event brokers, and staging tables via Terraform IaC.",
              },
              {
                week: "Week 3",
                title: "dbt Transformations",
                desc: "Write modular SQL transformation models with automated regression tests and schema assertion gates.",
              },
              {
                week: "Week 4",
                title: "Cutover & Telemetry",
                desc: "Zero-downtime blue/green cutover to your cloud environment with 24/7 SLA monitoring and team runbooks.",
              },
            ].map((step, idx) => (
              <div key={step.week} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative">
                <span className="text-xs font-black text-[#0B4F6C] bg-[#ECFEFF] px-2.5 py-1 rounded-md border border-[#0B4F6C]/20">
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
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                Battle-Tested Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
                Production Data Stack
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Snowflake",
                "ClickHouse",
                "Apache Kafka",
                "dbt Core",
                "Databricks",
                "PostgreSQL / pgvector",
                "AWS EKS / GKE",
                "Terraform IaC",
                "Apache Airflow",
                "Qdrant",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-slate-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ Section */}
        <section className="section-py site-container max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-black text-[#082F49]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can you migrate our legacy relational database without downtime?",
                a: "Yes. We implement Change Data Capture (CDC) with Debezium or managed replication streams, syncing changes in real-time until final zero-downtime cutover.",
              },
              {
                q: "Do you build inside our cloud account or manage it externally?",
                a: "We deploy directly into your private AWS, GCP, or Azure accounts using auditable Terraform IaC. You maintain 100% code, data, and infrastructure ownership.",
              },
              {
                q: "How do you guarantee data accuracy?",
                a: "Every pipeline includes automated dbt unit tests, schema assertion checks, and volume reconciliation alerts before downstream consumers receive data.",
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-[#082F49]">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Bottom CTA */}
        <section className="bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white py-16 text-center">
          <div className="site-container max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              Ready to Upgrade Your Data Platform?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Book a 30-minute scoping call with a Principal Data Architect.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl transition-all border border-[#14B8A6]/30"
            >
              <span>Schedule Scoping Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
