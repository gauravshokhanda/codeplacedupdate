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
}: ServicesMegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 w-full z-[1000] border-t border-b border-x border-[#E5EAF0] bg-white rounded-b-[16px] max-h-[calc(100vh-90px)] overflow-y-auto shadow-[0_25px_60px_rgba(0,0,0,0.12)] text-[#101820] transition-colors duration-200"
        >
          {/* Main 4-Column Categorized Grid */}
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
              {SERVICE_COLUMNS.map((col, cIdx) => (
                <div key={cIdx} className="space-y-4">
                  {/* Column Header */}
                  <div className="pb-3 border-b border-[#E5EAF0]">
                    <Link
                      href={col.categoryHref}
                      onClick={onClose}
                      className="text-[13px] font-extrabold uppercase tracking-wider text-[#101820] hover:text-[#007F9C] transition-colors inline-block"
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
                          className="group p-2.5 -mx-2.5 rounded-xl transition-all duration-150 flex items-start gap-3 block border border-transparent hover:bg-[#EBF9FC] hover:border-[#00C8E8]/25"
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-150 mt-0.5 bg-[#F7F9FB] border border-[#E5EAF0] text-[#007F9C] group-hover:bg-[#00C8E8] group-hover:text-black group-hover:border-[#00C8E8]">
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[13px] font-bold text-[#101820] group-hover:text-[#007F9C] transition-colors block leading-snug">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-[#566171] group-hover:text-[#101820] transition-colors block truncate leading-normal mt-0.5">
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
          <div className="border-t border-[#E5EAF0] px-6 sm:px-8 py-4 sm:py-5 bg-[#F7F9FB]">
            <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-sm font-extrabold text-[#101820]">
                  Need an enterprise engineering solution?
                </h4>
                <p className="text-xs font-medium text-[#566171] mt-0.5">
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
                    className="inline-flex items-center gap-2 px-6 h-[40px] rounded-full text-black font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-[#00C8E8] hover:bg-[#00B4D2]"
                  >
                    <span>Schedule Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-6 h-[40px] rounded-full text-black font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-[#00C8E8] hover:bg-[#00B4D2]"
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
