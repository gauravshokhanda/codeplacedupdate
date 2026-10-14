"use client";

import React, { useState } from "react";
import {
  Search,
  Layers,
  Code2,
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

interface ProcessPhase {
  step: string;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  timeline: string;
}

const PROCESS_PHASES: ProcessPhase[] = [
  {
    step: "01",
    title: "Discovery & Alignment",
    category: "Phase 1: Blueprinting",
    icon: Search,
    description:
      "Deep-dive technical audits, domain schema modeling, API contract definition, and stakeholder alignment to de-risk delivery before writing production code.",
    deliverables: ["Architecture RFC Document", "Database Entity Schema", "Sprint Velocity Roadmap"],
    timeline: "Week 1",
  },
  {
    step: "02",
    title: "Solution Design",
    category: "Phase 2: Architecture",
    icon: Layers,
    description:
      "Designing multi-region VPCs, sub-millisecond cache layers, event bus pipelines, and SOC2/HIPAA compliance guardrails.",
    deliverables: ["Infrastructure as Code (Terraform)", "Security Threat Model", "API Specification"],
    timeline: "Week 2",
  },
  {
    step: "03",
    title: "Engineering & Development",
    category: "Phase 3: Production Code",
    icon: Code2,
    description:
      "Iterative 2-week sprints with automated PR previews, type-safe full-stack engineering, and continuous integration testing.",
    deliverables: ["Next.js Frontends", "Microservices & Lakehouse", "Automated dbt Pipelines"],
    timeline: "Weeks 3–8",
  },
  {
    step: "04",
    title: "Security & QA",
    category: "Phase 4: Verification",
    icon: ShieldCheck,
    description:
      "Rigorous penetration testing, chaos engineering, high-concurrency synthetic load testing, and accessibility/CWV audits.",
    deliverables: ["Penetration Audit Report", "100k+ Concurrency Test", "HIPAA/SOC2 Sign-off"],
    timeline: "Week 9",
  },
  {
    step: "05",
    title: "Deployment",
    category: "Phase 5: Rollout",
    icon: Zap,
    description:
      "Blue/green canary rollout, edge CDN caching warmup, automated database migration gates, and live traffic cutover.",
    deliverables: ["Canary Deployment", "CI/CD Auto-Rollback Gate", "Real-Time Telemetry Setup"],
    timeline: "Week 10",
  },
  {
    step: "06",
    title: "Optimization",
    category: "Phase 6: Continuous Scale",
    icon: TrendingUp,
    description:
      "Continuous query optimization, ML model benchmarking, SLA monitoring, and proactive architectural scaling.",
    deliverables: ["Live Datadog Dashboard", "P99 Latency SLA Guarantee", "Ongoing Sprint Support"],
    timeline: "Continuous",
  },
];

export function DeliveryProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Calculate connector line fill percentage
  const progressPercent = (activeStep / (PROCESS_PHASES.length - 1)) * 100;

  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#07090D] text-white border border-white/[0.08] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00C7E8]" />
              <span>THE CODEPLACED LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              How We Deliver Production Systems
            </h2>
            <p className="text-[#A1A1AA] text-base sm:text-lg">
              Hover over each phase to explore our disciplined, transparent engineering methodology.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#00C7E8] transition-colors group self-start md:self-auto"
          >
            <span>Learn About Our Methodology</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Visual Connected Timeline */}
        <div className="relative">
          {/* Base Horizontal Desktop Connection Line */}
          <div className="hidden lg:block absolute top-9 left-12 right-12 h-1 bg-white/10 -z-0 rounded-full" />

          {/* Dynamic Active Segment Glowing Connector Line */}
          <div
            className="hidden lg:block absolute top-9 left-12 h-1 transition-all duration-500 ease-out -z-0 rounded-full"
            style={{
              width: `calc(${progressPercent}% * 0.85)`,
              background: "linear-gradient(90deg, #087FA5, #00C7E8)",
              boxShadow: "0 0 12px rgba(0, 199, 232, 0.6)",
            }}
          />

          {/* 6 Interactive Hover Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 relative z-10">
            {PROCESS_PHASES.map((phase, idx) => {
              const Icon = phase.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={phase.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-[28px] transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? "bg-[#07090D] text-white border-[#00C7E8] shadow-[0_12px_40px_rgba(0,199,232,0.18)] -translate-y-2 scale-[1.02]"
                      : "bg-[#07090D]/80 border-white/[0.08] text-[#A1A1AA] hover:border-white/20 hover:-translate-y-1 hover:shadow-lg shadow-xs"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#00C7E8] text-black shadow-lg shadow-[#00C7E8]/30 scale-105 ring-2 ring-[#00C7E8]/50"
                            : "bg-[#050505] text-[#00C7E8] border border-white/[0.08]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-xs font-mono font-black transition-colors ${
                          isActive ? "text-[#00C7E8]" : "text-zinc-500"
                        }`}
                      >
                        {phase.step}
                      </span>
                    </div>

                    <div>
                      <span
                        className={`text-[10px] font-mono font-bold uppercase tracking-wider block transition-colors ${
                          isActive ? "text-[#00C7E8]" : "text-[#00C7E8]"
                        }`}
                      >
                        {phase.timeline}
                      </span>
                      <h3
                        className={`text-base font-black mt-1 leading-snug transition-colors ${
                          isActive ? "text-white" : "text-white"
                        }`}
                      >
                        {phase.title}
                      </h3>
                    </div>

                    <p
                      className={`text-xs leading-relaxed line-clamp-3 transition-colors ${
                        isActive ? "text-zinc-300" : "text-[#A1A1AA]"
                      }`}
                    >
                      {phase.description}
                    </p>
                  </div>

                  <div
                    className={`pt-4 mt-4 border-t space-y-1.5 text-[11px] transition-colors ${
                      isActive ? "border-white/15" : "border-white/[0.08]"
                    }`}
                  >
                    {phase.deliverables.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className={`flex items-center gap-1.5 transition-colors ${
                          isActive ? "text-zinc-200" : "text-[#A1A1AA]"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                            isActive ? "text-[#00C7E8]" : "text-emerald-400"
                          }`}
                        />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
