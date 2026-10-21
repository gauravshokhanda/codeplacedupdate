"use client";

import React from "react";
import Link from "next/link";
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
    <div className="bg-white">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[#050505] text-white pt-28 pb-20 lg:pt-36 lg:pb-28">
          {/* Subtle radial glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none -z-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,200,232,0.12), rgba(0,127,156,0.06), transparent 70%)",
            }}
          />

          <div className="site-container relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#07090D] text-[#00C8E8] border border-[#00C8E8]/40 shadow-xs mb-6">
              <Cloud className="w-3.5 h-3.5 text-[#00C8E8]" /> Cloud Reliability & FinOps Optimization
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-white leading-[1.1] mb-6">
              Cloud Infrastructure <br />
              <span className="text-[#00C8E8]">
                Cut Bills 30–50% at Scale
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#A1AAB7] leading-relaxed max-w-2xl mx-auto mb-10">
              Modernize Kubernetes clusters, automate deployment gates with Terraform, and systematically eliminate cloud compute waste without sacrificing uptime.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00C8E8] hover:bg-[#00B4D2] text-black font-bold text-sm shadow-xl shadow-[#00C8E8]/20 flex items-center justify-center gap-2 transition-all"
              >
                <span>Scope Cloud Modernization</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#101820] hover:bg-white/10 text-white font-bold text-sm border border-[#1B242B] shadow-2xs flex items-center justify-center transition-all"
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
        <section className="bg-[#050505] border-t border-[#1B242B] text-white py-16 text-center">
          <div className="site-container max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              Ready to Optimize Your Cloud Infrastructure?
            </h2>
            <p className="text-[#A1AAB7] text-sm sm:text-base">
              Book a 30-minute scoping call with our Principal Cloud Architect.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00C8E8] hover:bg-[#00B4D2] text-black font-bold text-sm shadow-xl transition-all"
            >
              <span>Schedule Cloud Audit Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
  );
}
