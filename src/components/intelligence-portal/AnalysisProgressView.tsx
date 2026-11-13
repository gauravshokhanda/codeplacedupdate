"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Circle, AlertCircle } from "lucide-react";
import { AnalysisStage } from "@/types/intelligencePortal";

interface AnalysisProgressViewProps {
  websiteUrl: string;
  onComplete: () => void;
  onCancel: () => void;
}

const DEFAULT_STAGES: AnalysisStage[] = [
  {
    id: "validating",
    label: "Validating Website",
    description: "Checking DNS resolution, HTTP status codes, security certificates, and response times.",
    status: "pending",
  },
  {
    id: "structure",
    label: "Reviewing Website Structure",
    description: "Parsing DOM hierarchy, navigation depth, schema markup, and meta viewport tags.",
    status: "pending",
  },
  {
    id: "competitors",
    label: "Discovering Competitors",
    description: "Scanning target industry classification, overlapping keyword clusters, and market peers.",
    status: "pending",
  },
  {
    id: "features",
    label: "Comparing Website Features",
    description: "Contrasting messaging hooks, CTA friction, trust signals, and service matrices.",
    status: "pending",
  },
  {
    id: "insights",
    label: "Preparing Insights",
    description: "Synthesizing high-impact gaps, conversion opportunities, and benchmarking report.",
    status: "pending",
  },
];

export function AnalysisProgressView({
  websiteUrl,
  onComplete,
  onCancel,
}: AnalysisProgressViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Derive stage status from currentIndex
  const stages: AnalysisStage[] = DEFAULT_STAGES.map((stage, idx) => {
    if (idx < currentIndex) return { ...stage, status: "completed" };
    if (idx === currentIndex) return { ...stage, status: "in_progress" };
    return { ...stage, status: "pending" };
  });

  // Realistic step progression for preview/staging
  useEffect(() => {
    if (currentIndex >= DEFAULT_STAGES.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(timer);
    }

    const stepDuration = 900 + Math.random() * 500;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, stepDuration);

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  return (
    <div className="py-12 px-4 sm:px-6 max-w-2xl mx-auto text-left">
      <div className="p-6 sm:p-8 rounded-2xl bg-[#090C10] border border-[#00BCD4]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(0,188,212,0.1)] space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00BCD4]">
              LIVE AUDIT PIPELINE • IN PROGRESS
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Analyzing {websiteUrl.replace(/^https?:\/\//i, "")}
            </h3>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-xs font-mono font-bold text-[#00BCD4] flex items-center gap-1.5">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>
              {Math.min(
                100,
                Math.round(((currentIndex + 1) / DEFAULT_STAGES.length) * 100)
              )}
              %
            </span>
          </div>
        </div>

        {/* 5 Stages List */}
        <div className="space-y-4 pt-1">
          {stages.map((stage, idx) => {
            const isDone = stage.status === "completed";
            const isCurrent = stage.status === "in_progress";

            return (
              <div
                key={stage.id}
                className={`p-3.5 rounded-xl border transition-all duration-300 ${
                  isCurrent
                    ? "bg-[#00BCD4]/[0.08] border-[#00BCD4]/50 shadow-[0_0_20px_rgba(0,188,212,0.1)]"
                    : isDone
                    ? "bg-white/[0.02] border-white/10"
                    : "bg-transparent border-white/[0.04] opacity-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-[#00BCD4]" />
                    ) : isCurrent ? (
                      <Loader2 className="w-4 h-4 text-[#00BCD4] animate-spin" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-600" />
                    )}
                  </div>

                  <div className="space-y-0.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono font-bold tracking-wider uppercase ${
                          isCurrent
                            ? "text-[#00BCD4]"
                            : isDone
                            ? "text-white"
                            : "text-slate-400"
                        }`}
                      >
                        0{idx + 1} • {stage.label}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {isDone
                          ? "COMPLETED"
                          : isCurrent
                          ? "PROCESSING"
                          : "QUEUED"}
                      </span>
                    </div>
                    <p className="text-[12px] text-slate-400 leading-relaxed font-sans">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Note */}
        <div className="pt-2 border-t border-white/[0.08] flex items-start gap-2.5 text-[11px] text-slate-400">
          <AlertCircle className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
          <span>
            Pipeline stages simulate real-time lifecycle tracking. Once the API endpoint is connected, WebSocket or SSE events will advance each state based on live server telemetry.
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onCancel}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Cancel Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
