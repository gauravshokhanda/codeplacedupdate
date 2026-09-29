"use client";

import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import {
  BarChart3,
  TrendingUp,
  Activity,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Zap,
  LayoutGrid,
  PieChart,
} from "lucide-react";

export default function ExecutiveDashboardsPage() {
  return (
    <AppShell>
      <div className="bg-white">
        {/* 1. Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF]/25 to-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200/80">
          <div className="site-container relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <BarChart3 className="w-3.5 h-3.5 text-[#0E7490]" /> Real-Time Executive Command Centers
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-[#082F49] leading-[1.1] mb-6">
              Executive Dashboards <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                Sub-Second Telemetry
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Replace sluggish BI sheets with ultra-responsive, beautiful web analytics portals tailored for C-suite decision-makers and board presentations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#082F49] hover:bg-[#0B4F6C] text-white font-bold text-sm shadow-xl shadow-[#082F49]/15 flex items-center justify-center gap-2 transition-all"
              >
                <span>Scope Executive Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#082F49] font-bold text-sm border border-slate-200 shadow-2xs flex items-center justify-center transition-all"
              >
                <span>View Dashboard Previews</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Problem Statement */}
        <section className="section-py site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                The Executive Dilemma
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
                Why Standard BI Tools Frustrate Executive Leadership
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Traditional BI platforms take 15–30 seconds to render large datasets, lack mobile responsiveness, and rely on manual CSV exports. Leadership deserves a unified single source of truth that renders immediately on any screen.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "10+ second page loading times on Tableau and PowerBI dashboards",
                  "Inconsistent metrics across marketing, sales, and finance systems",
                  "Broken UI layouts on mobile and tablet executive briefings",
                  "Lack of predictive anomaly detection or automated alert digests",
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
                The CodePlaced Telemetry Standard
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We engineer bespoke React and Next.js analytics applications powered by ClickHouse columnar aggregates. Load hundreds of millions of events in under 100 milliseconds.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-2xl font-black text-[#0B4F6C]">&lt; 100ms</div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">Interactive Render</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">60fps silky smooth</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-2xl font-black text-emerald-600">Unified</div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">Growth & CAC Attribution</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Single source of truth</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Capabilities */}
        <section className="section-py bg-[#F8FAFC] border-y border-slate-200/80">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
                Core Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
                Architectural Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Unified Growth & CAC Views",
                  description: "Real-time blended customer acquisition cost, retention cohorts, and LTV projections.",
                  icon: TrendingUp,
                },
                {
                  title: "Financial & Revenue Health",
                  description: "Live Stripe telemetry, burn rate runaways, and automated ARR/MRR waterfall breakdowns.",
                  icon: BarChart3,
                },
                {
                  title: "Operational Telemetry Panels",
                  description: "Fleet tracking, server uptime, API throughput, and warehouse inventory monitoring.",
                  icon: Activity,
                },
                {
                  title: "Automated Executive Digests",
                  description: "Scheduled Slack and email digests delivering key variance alerts straight to leadership.",
                  icon: LayoutGrid,
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

        {/* 4. Delivery Process */}
        <section className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              Execution Rhythm
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
              Executive Dashboard in 3 Weeks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                week: "Week 1",
                title: "KPI & Schema Mapping",
                desc: "Identify top 5 core metrics, audit database tables, and create interactive Figma prototype.",
              },
              {
                week: "Week 2",
                title: "Query Aggregation & API",
                desc: "Build optimized ClickHouse / Postgres aggregation layers and sub-100ms REST endpoints.",
              },
              {
                week: "Week 3",
                title: "UI Polish & Production Launch",
                desc: "Deploy Next.js 15 dashboard with role-based access, mobile optimization, and team onboarding.",
              },
            ].map((step) => (
              <div key={step.week} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                <span className="text-xs font-black text-[#0B4F6C] bg-[#ECFEFF] px-2.5 py-1 rounded-md border border-[#0B4F6C]/20">
                  {step.week}
                </span>
                <h3 className="text-base font-bold text-[#082F49]">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Bottom CTA */}
        <section className="bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white py-16 text-center">
          <div className="site-container max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              Ready for Sub-Second Executive Visibility?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Book a 30-minute scoping call with our Principal Dashboard Engineer.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl transition-all border border-[#14B8A6]/30"
            >
              <span>Schedule Dashboard Scoping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
