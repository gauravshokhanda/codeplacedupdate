"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Layers,
  Factory,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  image: string;
  challenge: string;
  solution: string;
  metric: { value: string; label: string };
  badge: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "HIPAA-compliant data lakehouses, clinical triage AI, and telemetry.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    challenge: "Fragmented EHR data silos & severe clinical triage charting latency.",
    solution: "Private RAG clinical summarization and real-time FHIR data ingestion lakehouse.",
    metric: { value: "18,000 hrs/yr", label: "Saved Clinical Time" },
    badge: "HIPAA & SOC2 Compliant",
  },
  {
    id: "fintech",
    name: "Fintech & Banking",
    tagline: "Automated ledger reconciliation, risk analytics, and real-time audit trails.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    challenge: "High-volume ledger discrepancies and 48-hour manual reconciliation cycles.",
    solution: "Autonomous financial ledger engine reconciling 450,000+ monthly journal entries.",
    metric: { value: "85%", label: "Manual Audit Reduction" },
    badge: "PCI-DSS & SOC2 Type II",
  },
  {
    id: "retail",
    name: "Retail & Omnichannel Commerce",
    tagline: "Sub-second multi-channel inventory sync, headless Shopify Plus, and recommendation engines.",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    challenge: "ERP-to-marketplace stockout errors during high-velocity flash sales.",
    solution: "Sub-50ms event streaming pipeline syncing 3.2M SKU updates across 12 channels.",
    metric: { value: "Zero", label: "Stockout Errors at Peak" },
    badge: "Enterprise E-Commerce",
  },
  {
    id: "logistics",
    name: "Logistics & Fleet Operations",
    tagline: "IoT telematics streaming, autonomous dispatch, and predictive route optimization.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    challenge: "High deadhead miles, delayed route dispatching, and opaque shipment tracking.",
    solution: "Real-time Kafka telematics telemetry engine with AI route scheduling.",
    metric: { value: "31%", label: "Fuel & Route Cost Reduction" },
    badge: "IoT Telemetry Scale",
  },
  {
    id: "saas",
    name: "B2B SaaS & Cloud Platforms",
    tagline: "Multi-tenant Next.js architectures, edge billing engines, and enterprise security.",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    challenge: "Scaling multi-tenant architecture while keeping sub-50ms p99 response times.",
    solution: "Edge-rendered Next.js micro-frontends with auto-scaling VPC database clusters.",
    metric: { value: "< 25ms", label: "Global Edge Latency" },
    badge: "High Concurrency",
  },
  {
    id: "manufacturing",
    name: "Smart Manufacturing & IoT",
    tagline: "Predictive machine maintenance, visual defect detection, and ERP automation.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    challenge: "Unplanned assembly line downtime and delayed defect identification.",
    solution: "Edge ML computer vision pipelines and sensor telemetry predictive models.",
    metric: { value: "99.8%", label: "Defect Detection Accuracy" },
    badge: "Industrial IoT",
  },
];

export function IndustriesHorizon() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-sky-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F4FAFC] text-[#0D3B66] border border-[#1CC8E5]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#18B6D8]" />
              <span>DOMAIN SPECIALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2B46]">
              Industries Engineered For Scale
            </h2>
            <p className="text-[#5B6B7C] text-base sm:text-lg">
              We bring deep domain blueprints, regulatory compliance expertise, and battle-tested data pipelines to mission-critical sectors.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={scrollPrev}
              aria-label="Previous industry"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#0F2B46] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next industry"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#0F2B46] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Industry Cards Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;

            return (
              <div
                key={ind.id}
                className="w-[85vw] sm:w-[380px] lg:w-[420px] shrink-0 snap-start rounded-[32px] bg-[#F4FAFC] border border-sky-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-950/8 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Header Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46] via-[#0F2B46]/40 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-[#0D3B66] shadow-xs">
                      {ind.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center text-cyan-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-base font-bold tracking-tight text-white">
                        {ind.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
                      {ind.tagline}
                    </p>

                    <div className="space-y-2 pt-1 text-xs">
                      <div>
                        <span className="font-bold text-[#0F2B46] block">Challenge:</span>
                        <span className="text-[#5B6B7C]">{ind.challenge}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#0D3B66] block">Engineered Solution:</span>
                        <span className="text-[#5B6B7C]">{ind.solution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact Metric & Link */}
                  <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-black text-[#0F2B46]">
                        {ind.metric.value}
                      </div>
                      <div className="text-[10px] font-bold text-slate-400">
                        {ind.metric.label}
                      </div>
                    </div>

                    <Link
                      href="/industries"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D3B66] group-hover:text-[#1CC8E5] transition-colors"
                    >
                      <span>Explore Sector</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
