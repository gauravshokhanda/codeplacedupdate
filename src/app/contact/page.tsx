"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Mail,
  PhoneCall,
  Clock,
  CheckCircle2,
  Lock,
  Building2,
} from "lucide-react";
import confetti from "canvas-confetti";

const SCOPES = [
  "Data Platforms & Pipelines",
  "AI Copilots & Enterprise RAG",
  "Executive & Growth Dashboards",
  "Embedded Customer Analytics",
  "Cloud Modernization & FinOps",
  "Dedicated Engineering Pod",
];

const TIMELINES = [
  "Immediate (Next 1-2 weeks)",
  "Within 1 month",
  "Q4 Planning (1-3 months)",
  "Exploring Architectural Options",
];

export default function ContactPage() {
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    "Data Platforms & Pipelines",
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    timeline: TIMELINES[0],
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleScope = (scope: string) => {
    setSelectedScopes((prev) =>
      prev.includes(scope) ? prev.filter((s) => s !== scope) : [...prev, scope]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0B4F6C", "#0E7490", "#14B8A6", "#10B981"],
        });
      } catch {
        // Safe fallback
      }
    }, 700);
  };

  return (
    <AppShell>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF]/25 to-white pt-16 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/80 text-center">
          <div className="site-container max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" /> Direct Principal Access
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-[#082F49] leading-[1.1] mb-6">
              Schedule Your 30-Minute <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                Technical Architecture Audit
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-4">
              We sign bilateral NDAs upfront. Speak directly with a Principal Systems Architect about your data, AI, or SaaS initiative.
            </p>
          </div>
        </section>

        {/* Contact Form & Information Split Section */}
        <section className="section-py site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Info & Trust Badges */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-6">
                <h3 className="text-xl font-bold text-[#082F49]">
                  What Happens on the Call
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#082F49] block">Architectural Schema Dissection</strong>
                      We review your current database tables, pain points, and query latency constraints.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#082F49] block">Fixed 4-Week Milestone Proposal</strong>
                      You receive a concrete breakdown of deliverables, technology contracts, and SLA guarantees.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#082F49] block">No Sales Pressure</strong>
                      You speak directly with Principal Engineers who write code and architect systems.
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Mail className="w-4 h-4 text-[#0B4F6C]" />
                    <a href="mailto:hello@codeplaced.com" className="font-bold text-[#082F49] hover:text-[#0B4F6C]">
                      hello@codeplaced.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <span>Strict Mutual NDA Signed Upfront</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-cyan-600" />
                    <span>SOC2 Type II & HIPAA Certified Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Scoping Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5">
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-5">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-black text-[#082F49]">
                      Audit Request Confirmed!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      We have dispatched a calendar invitation and architecture intake questionnaire to{" "}
                      <strong className="text-[#082F49]">{formData.email}</strong>.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl bg-[#082F49] text-white text-xs font-bold"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                        Select Target Focus (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {SCOPES.map((scope) => {
                          const isSelected = selectedScopes.includes(scope);
                          return (
                            <button
                              key={scope}
                              type="button"
                              onClick={() => toggleScope(scope)}
                              className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                                isSelected
                                  ? "bg-[#ECFEFF] border-[#0B4F6C] text-[#082F49] shadow-2xs ring-1 ring-[#0B4F6C]"
                                  : "border-slate-200 hover:bg-slate-50 text-slate-700"
                              }`}
                            >
                              <span>{scope}</span>
                              <div
                                className={`w-4 h-4 rounded border flex items-center justify-center ${
                                  isSelected
                                    ? "bg-[#0B4F6C] border-[#0B4F6C] text-white"
                                    : "border-slate-300"
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Mercer"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Company Name / URL
                        </label>
                        <input
                          type="text"
                          placeholder="Acme Inc (acme.com)"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Launch Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C] bg-white"
                        >
                          {TIMELINES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Brief Architecture Context (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. We have fragmented Kafka & Postgres tables and need an executive telemetry dashboard and sub-second semantic AI search..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C]"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span>Average turnaround: <strong>4 business hours</strong></span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#0B4F6C]/25"
                      >
                        {isSubmitting ? "Locking In Audit..." : "Schedule Audit Call"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
