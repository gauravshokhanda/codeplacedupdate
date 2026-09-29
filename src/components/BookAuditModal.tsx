"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, ShieldCheck, ArrowRight, Sparkles, Clock, Lock } from "lucide-react";
import confetti from "canvas-confetti";

interface BookAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultScope?: string;
}

const SCOPES = [
  "AI Native Development & RAG",
  "Enterprise Data Pipelines & dbt",
  "Executive & Growth Dashboards",
  "Cloud Architecture & FinOps",
  "Agentic Workflows & RPA",
  "Dedicated Engineering Pod",
];

const TIMELINES = [
  "Immediate (Next 1-2 weeks)",
  "Within 1 month",
  "Q4 Planning (1-3 months)",
  "Exploring Architectural Options",
];

const BUDGETS = [
  "$10k - $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k+",
];

export function BookAuditModal({ isOpen, onClose, defaultScope }: BookAuditModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedScopes, setSelectedScopes] = useState<string[]>(
    defaultScope ? [defaultScope] : ["AI Native Development & RAG"]
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    timeline: TIMELINES[0],
    budget: BUDGETS[1],
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleScope = (scope: string) => {
    setSelectedScopes((prev) =>
      prev.includes(scope) ? prev.filter((s) => s !== scope) : [...prev, scope]
    );
  };

  const handleScopeNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedScopes.length === 0) return;
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      // Fire celebration confetti
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

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-[#082F49]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10"
        >
          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white p-6 sm:p-7 border-b border-cyan-900/50">
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" /> Free 30-Min Technical Audit
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {step === 1 && "What system are you looking to build or scale?"}
              {step === 2 && "Where should our Principal Architect send the audit plan?"}
              {step === 3 && "Audit Call Request Confirmed!"}
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-lg">
              {step === 1 && "Select the core domains where your team needs engineering velocity."}
              {step === 2 && "We sign NDAs upfront. No junior reps—speak directly with technical leaders."}
              {step === 3 && "We've reserved your slot. An architect will review your submission shortly."}
            </p>

            {/* Step Indicators */}
            <div className="flex items-center gap-2 mt-5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    s <= step ? "bg-[#14B8A6]" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            {step === 1 && (
              <form onSubmit={handleScopeNext} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Select Target Capabilities (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SCOPES.map((scope) => {
                      const isSelected = selectedScopes.includes(scope);
                      return (
                        <button
                          key={scope}
                          type="button"
                          onClick={() => toggleScope(scope)}
                          className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-sm font-medium transition-all duration-200 ${
                            isSelected
                              ? "bg-[#ECFEFF] border-[#0B4F6C] text-[#082F49] shadow-sm ring-1 ring-[#0B4F6C]"
                              : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 text-slate-700"
                          }`}
                        >
                          <span>{scope}</span>
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                              isSelected
                                ? "bg-[#0B4F6C] border-[#0B4F6C] text-white"
                                : "border-slate-300"
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Average turnaround: <strong>4 business hours</strong></span>
                  </div>

                  <button
                    type="submit"
                    disabled={selectedScopes.length === 0}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#082F49] hover:bg-[#0B4F6C] disabled:opacity-50 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-[#0B4F6C]/25"
                  >
                    Continue to Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company Name / URL
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp (acme.com)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Target Launch Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C] bg-white"
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Brief Notes or Primary Obstacle (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g., We have 10TB of siloed Postgres & Stripe data and need an executive dashboard plus AI search co-pilot..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C]"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-medium text-slate-500 hover:text-slate-900"
                  >
                    ← Back to Scope
                  </button>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:flex items-center gap-1 text-xs text-slate-400">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" /> Confidential & Encrypted
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] disabled:opacity-60 text-white font-semibold text-sm transition-all shadow-md shadow-[#0B4F6C]/30"
                    >
                      {isSubmitting ? "Locking In Audit..." : "Schedule Audit Call Now"}
                    </button>
                  </div>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-4 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    You are confirmed, {formData.name || "friend"}!
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                    We have dispatched a calendar invitation and introductory architecture intake checklist to{" "}
                    <span className="font-semibold text-slate-900">{formData.email}</span>.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-200 text-xs text-slate-600 space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-500">Selected Focus:</span>
                    <span className="font-semibold text-slate-900 truncate max-w-[200px]">
                      {selectedScopes.join(", ")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-500">Target Timeline:</span>
                    <span className="font-semibold text-slate-900">{formData.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-500">Assigned Architect:</span>
                    <span className="font-semibold text-[#0B4F6C]">Principal Systems Engineer</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={resetAndClose}
                    className="px-8 py-3 rounded-xl bg-[#082F49] hover:bg-[#0B4F6C] text-white font-semibold text-sm transition-colors"
                  >
                    Done & Return to Site
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
