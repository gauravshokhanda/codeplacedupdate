"use client";

import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import {
  Cloud,
  CloudCog,
  Terminal,
  LineChart,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Server,
  ShieldCheck,
} from "lucide-react";

export default function CloudInfrastructurePage() {
  return (
    <AppShell>
      <div className="bg-white">
        {/* 1. Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF]/25 to-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200/80">
          <div className="site-container relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <Cloud className="w-3.5 h-3.5 text-[#0E7490]" /> Cloud Reliability & FinOps Optimization
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-[#082F49] leading-[1.1] mb-6">
              Cloud Infrastructure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                Cut Bills 30–50% at Scale
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Modernize Kubernetes clusters, automate deployment gates with Terraform, and systematically eliminate cloud compute waste without sacrificing uptime.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#082F49] hover:bg-[#0B4F6C] text-white font-bold text-sm shadow-xl shadow-[#082F49]/15 flex items-center justify-center gap-2 transition-all"
              >
                <span>Scope Cloud Modernization</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#082F49] font-bold text-sm border border-slate-200 shadow-2xs flex items-center justify-center transition-all"
              >
                <span>View FinOps Case Studies</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Capabilities */}
        <section className="section-py site-container">
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
                title: "Zero-Downtime Cloud Migration",
                description: "Migrate legacy VMs, on-prem SQL, and monolithic servers to modern containerized microservices.",
                icon: CloudCog,
              },
              {
                title: "Terraform Infrastructure as Code",
                description: "Auditable declarative infrastructure repositories with automated CI/CD deployment gates.",
                icon: Terminal,
              },
              {
                title: "Telemetry & APM Observability",
                description: "Real-time Datadog, Grafana, and Prometheus monitoring with intelligent anomaly alerts.",
                icon: LineChart,
              },
              {
                title: "FinOps Cost Optimization",
                description: "Spot orchestration, intelligent compute autoscaling, and storage tier rightsizing cutting 30-50% in waste.",
                icon: ShieldCheck,
              },
            ].map((card) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#0B4F6C]/40 transition-all group"
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
        </section>

        {/* 3. Bottom CTA */}
        <section className="bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white py-16 text-center">
          <div className="site-container max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              Ready to Optimize Your Cloud Infrastructure?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Book a 30-minute scoping call with our Principal Cloud Architect.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl transition-all border border-[#14B8A6]/30"
            >
              <span>Schedule Cloud Audit Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
