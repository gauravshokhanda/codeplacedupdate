"use client";

import React, { useState } from "react";
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface DiscoveryCallBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  websiteUrl: string;
  auditReference: string;
}

// Generate next 5 business days dynamically
const getAvailableBusinessDays = () => {
  const days: { dateStr: string; label: string; weekday: string }[] = [];
  const now = new Date();
  const candidate = new Date(now);

  while (days.length < 5) {
    candidate.setDate(candidate.getDate() + 1);
    const dayOfWeek = candidate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Mon-Fri
      const dateStr = candidate.toISOString().split("T")[0];
      const weekday = candidate.toLocaleDateString("en-US", { weekday: "short" });
      const label = candidate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      days.push({ dateStr, label, weekday });
    }
  }
  return days;
};

const TIME_SLOTS = [
  "09:30 AM EST",
  "11:00 AM EST",
  "01:30 PM EST",
  "03:00 PM EST",
  "04:30 PM EST",
];

export function DiscoveryCallBookingModal({
  isOpen,
  onClose,
  websiteUrl,
  auditReference,
}: DiscoveryCallBookingModalProps) {
  const availableDays = getAvailableBusinessDays();
  const [selectedDate, setSelectedDate] = useState(availableDays[0]?.dateStr || "");
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState(websiteUrl);
  const [requirements, setRequirements] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please provide a valid work email address.");
      return;
    }
    if (!selectedDate || !selectedSlot) {
      setError("Please select an available date and time slot.");
      return;
    }

    setError(null);
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setFullName("");
    setEmail("");
    setRequirements("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#090C10] border border-[#00BCD4]/40 p-6 sm:p-8 text-left space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(0,188,212,0.15)] my-8">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <>
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4]">
                <CalendarIcon className="w-3 h-3 text-[#00BCD4]" />
                <span>EXPERT STRATEGY SESSION</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Would You Rather Discuss These Opportunities With an Expert?
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Connect with the CodePlaced team to review your findings, discuss your business requirements and identify the right next steps.
              </p>
            </div>

            {/* Audit Reference Badge */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300 flex items-center justify-between">
              <span>Domain: {url || websiteUrl}</span>
              <span className="text-[#00BCD4]">Audit Ref: {auditReference}</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step 1: Select Date */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-[#00BCD4]" />
                  <span>1. Select Date</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {availableDays.map((day) => (
                    <button
                      key={day.dateStr}
                      type="button"
                      onClick={() => setSelectedDate(day.dateStr)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDate === day.dateStr
                          ? "bg-[#00BCD4] text-[#06151C] border-[#00BCD4] font-bold shadow-md"
                          : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-[#00BCD4]/40"
                      }`}
                    >
                      <div className="text-[10px] font-mono uppercase">{day.weekday}</div>
                      <div className="text-xs font-bold mt-0.5">{day.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Time Slot */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00BCD4]" />
                  <span>2. Select Time Slot (30 Mins)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 px-3 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                        selectedSlot === slot
                          ? "bg-[#00BCD4]/15 border-[#00BCD4] text-[#00BCD4] font-bold"
                          : "bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Contact & Project Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="space-y-1">
                  <label
                    htmlFor="bookFullName"
                    className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300"
                  >
                    Full Name *
                  </label>
                  <input
                    id="bookFullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00BCD4] transition-all font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="bookEmail"
                    className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300"
                  >
                    Work Email *
                  </label>
                  <input
                    id="bookEmail"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00BCD4] transition-all font-sans"
                  />
                </div>
              </div>

              {/* Website URL */}
              <div className="space-y-1">
                <label
                  htmlFor="bookUrl"
                  className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300"
                >
                  Website URL
                </label>
                <input
                  id="bookUrl"
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="e.g. company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00BCD4] transition-all font-mono"
                />
              </div>

              {/* Brief Requirements */}
              <div className="space-y-1">
                <label
                  htmlFor="requirements"
                  className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300"
                >
                  Brief Project Requirements (Optional)
                </label>
                <textarea
                  id="requirements"
                  rows={2}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Tell us what you'd like to prioritize (e.g. complete redesign, SEO gap fixes, conversion optimization)..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00BCD4] transition-all font-sans resize-none"
                />
              </div>

              {error && (
                <div className="text-xs text-rose-400 font-mono">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#06151C] font-extrabold text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#00BCD4]/30 flex items-center justify-center gap-2 cursor-pointer mt-3"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          /* Confirmation Screen */
          <div className="py-6 space-y-5 text-center">
            <div className="w-12 h-12 rounded-full bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] mx-auto">
              <CheckCircle2 className="w-6 h-6 text-[#00BCD4]" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white">
                Discovery Call Reserved!
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                Call request for <strong>{selectedDate} at {selectedSlot}</strong> registered for {fullName} ({email}).
              </p>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-mono text-[#00BCD4] max-w-sm mx-auto">
                Retained Audit Ref: {auditReference}
              </div>
            </div>

            {/* Direct Notice */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11.5px] text-slate-400 leading-relaxed text-left flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
              <span>
                <strong>CRM Hook Staged:</strong> The selected analysis reference and booking details are packaged for submission into our scheduling calendar service upon live endpoint activation.
              </span>
            </div>

            <button
              onClick={handleReset}
              className="py-2.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-semibold transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
