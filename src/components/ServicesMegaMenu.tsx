"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Smartphone,
  Layers,
  Boxes,
  Palette,
  ShieldCheck,
  Bot,
  Sparkles,
  Database,
  BarChart3,
  LineChart,
  Cloud,
  Workflow,
  Terminal,
  Cpu,
  ArrowRight,
  Zap,
} from "lucide-react";

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookAudit?: (scope?: string) => void;
  isDarkTheme?: boolean;
}

interface ServiceLink {
  title: string;
  desc: string;
  href: string;
  icon: React.ElementType;
}

interface ServiceCategory {
  title: string;
  categoryHref: string;
  items: ServiceLink[];
}

export const SERVICE_COLUMNS: ServiceCategory[] = [
  {
    title: "App & Web Development",
    categoryHref: "/services/app-web-development",
    items: [
      {
        title: "Mobile App Development",
        desc: "Native iOS & Android high-performance applications",
        href: "/services/app-web-development",
        icon: Smartphone,
      },
      {
        title: "Web & Custom Web Apps",
        desc: "Modern Next.js, React & full-stack web platforms",
        href: "/services/app-web-development",
        icon: Code2,
      },
      {
        title: "SaaS Development",
        desc: "Multi-tenant platforms, RBAC & subscription systems",
        href: "/services/app-web-development",
        icon: Boxes,
      },
      {
        title: "Cloud Modernization & FinOps",
        desc: "AWS, GCP & Kubernetes autoscaling architectures",
        href: "/services/cloud-infrastructure",
        icon: Cloud,
      },
      {
        title: "APIs & Integrations",
        desc: "High-throughput FastAPI microservices & REST/GraphQL",
        href: "/services/app-web-development",
        icon: Terminal,
      },
      {
        title: "Enterprise Maintenance & SLA",
        desc: "Proactive uptime monitoring, security & zero downtime",
        href: "/services/app-web-development",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "Data Engineering & Analytics",
    categoryHref: "/services/data-engineering-analytics",
    items: [
      {
        title: "Data Engineering & ETL",
        desc: "Automated lakehouse pipelines & real-time streaming",
        href: "/services/data-platforms",
        icon: Database,
      },
      {
        title: "Data Warehouses & Lakes",
        desc: "Snowflake, BigQuery & medallion architecture schemas",
        href: "/services/data-platforms",
        icon: Cloud,
      },
      {
        title: "Executive BI Dashboards",
        desc: "Executive command centers & automated KPI reporting",
        href: "/services/executive-dashboards",
        icon: BarChart3,
      },
      {
        title: "Power BI & Looker Studio",
        desc: "Visual business analytics & interactive drilldowns",
        href: "/services/executive-dashboards",
        icon: BarChart3,
      },
      {
        title: "Embedded Analytics",
        desc: "Customer-facing analytical widgets & data portals",
        href: "/services/embedded-analytics",
        icon: LineChart,
      },
      {
        title: "Predictive Analytics",
        desc: "Demand forecasting, churn predictors & ML modeling",
        href: "/services/data-engineering-analytics",
        icon: Sparkles,
      },
    ],
  },
  {
    title: "AI Services & Agents",
    categoryHref: "/services/ai-services",
    items: [
      {
        title: "AI Copilots & Enterprise RAG",
        desc: "Context-aware assistants with verified internal citations",
        href: "/services/ai-copilots",
        icon: Bot,
      },
      {
        title: "Autonomous Agent Swarms",
        desc: "Multi-agent tool-calling workflows & automated reasoning",
        href: "/services/ai-services",
        icon: Workflow,
      },
      {
        title: "Private Vector Intelligence",
        desc: "Sub-50ms hybrid semantic search with zero data leaks",
        href: "/services/ai-services",
        icon: Cpu,
      },
      {
        title: "LLM Integration & Tuning",
        desc: "Domain-adapted model fine-tuning & evaluation benchmarks",
        href: "/services/ai-services",
        icon: Sparkles,
      },
      {
        title: "Document AI & Extraction",
        desc: "Automated OCR, invoice processing & contract parsing",
        href: "/services/ai-services",
        icon: Layers,
      },
      {
        title: "Zero-Leak AI Guardrails",
        desc: "Strict PII scrubbing, HIPAA compliance & defense",
        href: "/services/ai-services",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "Digital & Social Marketing",
    categoryHref: "/services/digital-social-marketing",
    items: [
      {
        title: "Social Media Management",
        desc: "End-to-end channel strategy & community engagement",
        href: "/services/digital-social-marketing",
        icon: Bot,
      },
      {
        title: "Content Strategy & Creation",
        desc: "High-impact storytelling & brand narrative assets",
        href: "/services/digital-social-marketing",
        icon: Palette,
      },
      {
        title: "Graphic Design & Copywriting",
        desc: "Conversion-optimized visuals & technical copywriting",
        href: "/services/digital-social-marketing",
        icon: Palette,
      },
      {
        title: "Reels & Short-Form Videos",
        desc: "Engaging video production & viral format editing",
        href: "/services/digital-social-marketing",
        icon: Sparkles,
      },
      {
        title: "Paid Ads & Programmatic SEO",
        desc: "Meta, Google Ads, programmatic SEO & AEO authority",
        href: "/services/digital-social-marketing",
        icon: Zap,
      },
      {
        title: "Marketing Analytics & Attribution",
        desc: "Segment CDP, multi-touch CAC & closed-loop revenue ROI",
        href: "/services/digital-social-marketing",
        icon: LineChart,
      },
    ],
  },
];

export function ServicesMegaMenu({
  isOpen,
  onClose,
  onOpenBookAudit,
  isDarkTheme = true,
}: ServicesMegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={`absolute top-full left-0 right-0 w-full z-[1000] border-t backdrop-blur-2xl rounded-b-[24px] max-h-[calc(100vh-90px)] overflow-y-auto transition-colors duration-200 ${
            isDarkTheme
              ? "bg-[#07090D]/98 border-white/[0.08] border-b border-x shadow-[0_24px_60px_rgba(0,0,0,0.85)] text-white"
              : "bg-white border-slate-200/90 border-b border-x shadow-[0_20px_50px_rgba(15,23,42,0.12)] text-[#062B38]"
          }`}
        >
          {/* Main 4-Column Categorized Grid */}
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
              {SERVICE_COLUMNS.map((col, cIdx) => (
                <div key={cIdx} className="space-y-4">
                  {/* Column Header */}
                  <div
                    className={`pb-3 border-b ${
                      isDarkTheme ? "border-white/[0.08]" : "border-slate-100"
                    }`}
                  >
                    <Link
                      href={col.categoryHref}
                      onClick={onClose}
                      className={`text-[13px] font-extrabold uppercase tracking-wider transition-colors inline-block ${
                        isDarkTheme
                          ? "text-white hover:text-emerald-400"
                          : "text-[#082F49] hover:text-[#06b6d4]"
                      }`}
                    >
                      {col.title}
                    </Link>
                  </div>

                  {/* Services List */}
                  <div className="space-y-1">
                    {col.items.map((item, iIdx) => {
                      const ItemIcon = item.icon;
                      return (
                        <Link
                          key={iIdx}
                          href={item.href}
                          onClick={onClose}
                          className={`group p-2.5 -mx-2.5 rounded-xl transition-all duration-150 flex items-start gap-3 block border border-transparent ${
                            isDarkTheme
                              ? "hover:bg-gradient-to-r hover:from-[rgba(16,185,129,0.08)] hover:to-[rgba(0,199,232,0.08)] hover:border-emerald-500/20"
                              : "hover:bg-gradient-to-r hover:from-[rgba(6,182,212,0.08)] hover:to-[rgba(14,165,233,0.08)] hover:border-slate-100"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-150 mt-0.5 ${
                              isDarkTheme
                                ? "bg-[#050505] border border-white/[0.08] text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 group-hover:border-emerald-500/40"
                                : "bg-slate-100 group-hover:bg-[#06b6d4] text-[#06b6d4] group-hover:text-white"
                            }`}
                          >
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span
                              className={`text-[13px] font-bold transition-colors block leading-snug ${
                                isDarkTheme
                                  ? "text-white group-hover:text-emerald-400"
                                  : "text-[#12344A] group-hover:text-[#0f4c81]"
                              }`}
                            >
                              {item.title}
                            </span>
                            <span
                              className={`text-[11px] transition-colors block truncate leading-normal mt-0.5 ${
                                isDarkTheme
                                  ? "text-[#A1A1AA] group-hover:text-[#E2E8F0]"
                                  : "text-slate-400 group-hover:text-slate-600"
                              }`}
                            >
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Bar */}
          <div
            className={`border-t px-6 sm:px-8 py-4 sm:py-5 ${
              isDarkTheme
                ? "bg-[#050505] border-white/[0.08]"
                : "border-slate-200/80"
            }`}
            style={{
              background: isDarkTheme
                ? "linear-gradient(90deg, rgba(16,185,129,0.04), rgba(0,199,232,0.04))"
                : "linear-gradient(90deg, rgba(6,182,212,0.06), rgba(14,165,233,0.06))",
            }}
          >
            <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4
                  className={`text-sm font-extrabold ${
                    isDarkTheme ? "text-white" : "text-[#082F49]"
                  }`}
                >
                  Need an enterprise engineering solution?
                </h4>
                <p
                  className={`text-xs font-medium mt-0.5 ${
                    isDarkTheme ? "text-[#A1A1AA]" : "text-slate-600"
                  }`}
                >
                  Tell us your business goals and our principal engineers will recommend the optimal architecture.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                {onOpenBookAudit ? (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBookAudit("Schedule Strategy Call");
                    }}
                    className="inline-flex items-center gap-2 px-6 h-[40px] rounded-full text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 cursor-pointer"
                    style={{
                      background: isDarkTheme
                        ? "linear-gradient(135deg, #087FA5 0%, #00C7E8 100%)"
                        : "linear-gradient(90deg, #0f4c81, #00b7c2)",
                    }}
                  >
                    <span>Schedule Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-6 h-[40px] rounded-full text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 cursor-pointer"
                    style={{
                      background: isDarkTheme
                        ? "linear-gradient(135deg, #087FA5 0%, #00C7E8 100%)"
                        : "linear-gradient(90deg, #0f4c81, #00b7c2)",
                    }}
                  >
                    <span>Schedule Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
