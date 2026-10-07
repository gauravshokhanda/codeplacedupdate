"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Sparkles,
  TrendingUp,
  Terminal,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface TechCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  title: string;
  description: string;
  technologies: { name: string; tag: string }[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend-mobile",
    name: "Frontend & Mobile",
    icon: Code,
    title: "Frontend & Mobile",
    description:
      "Modern component-driven frontends engineered for sub-second LCP, zero layout shifts, and native 60 FPS mobile performance.",
    technologies: [
      { name: "React", tag: "UI Framework" },
      { name: "Next.js", tag: "Full-Stack SSR" },
      { name: "Flutter", tag: "Mobile Multiplatform" },
      { name: "React Native", tag: "Native Engine" },
      { name: "TypeScript", tag: "Static Type Safety" },
      { name: "Angular", tag: "Enterprise SPA" },
      { name: "Vue.js", tag: "Progressive Framework" },
      { name: "Tailwind CSS", tag: "Design Token Engine" },
    ],
  },
  {
    id: "backend-cloud",
    name: "Backend & Cloud",
    icon: Server,
    title: "Backend & Cloud",
    description:
      "Scalable APIs, cloud-native infrastructure and enterprise backends.",
    technologies: [
      { name: "Node.js", tag: "Async Core" },
      { name: "NestJS", tag: "TypeScript Services" },
      { name: "Express", tag: "Microservices API" },
      { name: "Java", tag: "High-Concurrency" },
      { name: "Spring Boot", tag: "Enterprise Backend" },
      { name: "Python", tag: "Distributed Backend" },
      { name: "FastAPI", tag: "High-Speed Async" },
      { name: ".NET", tag: "C# Enterprise Tier" },
      { name: "AWS", tag: "Cloud Infrastructure" },
      { name: "Azure", tag: "Enterprise Hybrid" },
      { name: "Google Cloud", tag: "AI & Data VPC" },
      { name: "Docker", tag: "Containerization" },
      { name: "Kubernetes", tag: "Orchestration" },
    ],
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    icon: Database,
    title: "Data Engineering",
    description:
      "Modern analytics, lakehouses and real-time data platforms.",
    technologies: [
      { name: "Snowflake", tag: "Cloud Data Warehouse" },
      { name: "BigQuery", tag: "Petabyte Analytics" },
      { name: "Databricks", tag: "Spark Lakehouse" },
      { name: "Apache Spark", tag: "Distributed Compute" },
      { name: "Airflow", tag: "DAG Orchestration" },
      { name: "dbt", tag: "SQL Transformations" },
      { name: "Kafka", tag: "Event Streaming" },
      { name: "Power BI", tag: "Executive Telemetry" },
      { name: "Looker Studio", tag: "BI Dashboards" },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    icon: Sparkles,
    title: "AI & Automation",
    description:
      "Intelligent systems that automate business operations.",
    technologies: [
      { name: "OpenAI", tag: "LLM Reasoning" },
      { name: "Claude", tag: "Complex Document AI" },
      { name: "LangChain", tag: "Agent Framework" },
      { name: "CrewAI", tag: "Multi-Agent Systems" },
      { name: "Vector DBs", tag: "Pinecone / Qdrant" },
      { name: "RAG Systems", tag: "Private Retrieval" },
      { name: "AI Agents", tag: "Autonomous Workflows" },
      { name: "Workflow Automation", tag: "Zero Human Error" },
    ],
  },
  {
    id: "marketing-tech",
    name: "Marketing Technology",
    icon: TrendingUp,
    title: "Marketing Technology",
    description:
      "Growth systems built for acquisition, retention and attribution.",
    technologies: [
      { name: "Google Analytics", tag: "GA4 Telemetry" },
      { name: "Google Ads", tag: "High-ROAS Bidding" },
      { name: "Meta Ads", tag: "Dynamic Acquisition" },
      { name: "HubSpot", tag: "Marketing Automation" },
      { name: "SEO", tag: "Technical Dominance" },
      { name: "Marketing Automation", tag: "Lifecycle Flows" },
      { name: "Conversion Tracking", tag: "Multi-Attribution" },
      { name: "CRM Integrations", tag: "Pipeline Sync" },
    ],
  },
];

export function TechStackRadar() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend-mobile");

  const current =
    TECH_CATEGORIES.find((c) => c.id === activeCategory) || TECH_CATEGORIES[0];
  const IconComponent = current.icon;

  return (
    <section className="py-24 lg:py-32 bg-[#F7FBFF] text-[#0F2942] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#0D3B66] border border-[#06B6D4]/30 shadow-xs">
              <Terminal className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>PRODUCTION TECHNOLOGY STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2942]">
              Modern Engineering Ecosystem
            </h2>
            <p className="text-[#5B6B7C] text-base sm:text-lg">
              Hover over each category to preview our battle-tested enterprise technologies.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0D3B66] hover:text-[#06B6D4] transition-colors group self-start md:self-auto"
          >
            <span>Explore Architecture Specs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Tabs (Instant Hover Switching) */}
        <div className="flex flex-wrap gap-2.5 pb-2">
          {TECH_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const CatIcon = cat.icon;

            return (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat.id)}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-[#0F2942] text-white border-[#0F2942] shadow-[0_10px_30px_rgba(15,41,66,0.2)] scale-105"
                    : "bg-white text-[#5B6B7C] hover:text-[#0F2942] border-[#0F172A]/[0.08] hover:border-[#06B6D4]/60 hover:shadow-sm"
                }`}
              >
                <CatIcon className={`w-4 h-4 ${isActive ? "text-cyan-300" : "text-[#06B6D4]"}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Deep Dive Panel (Smooth Fade Transition) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-[36px] bg-white border border-[#0F172A]/[0.08] p-8 sm:p-10 lg:p-12 shadow-xl shadow-sky-950/5 space-y-8"
          >
            {/* Category Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#F4FAFC] border border-sky-100 flex items-center justify-center text-[#0D3B66] shadow-xs">
                  <IconComponent className="w-6 h-6 text-[#18B6D8]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F2B46]">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B7C] mt-0.5 font-normal">
                    {current.description}
                  </p>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-[#F4FAFC] border border-sky-100 text-xs font-mono font-bold text-[#0D3B66] self-start lg:self-auto">
                <span className="text-[#18B6D8] mr-1.5">Stack:</span>
                {current.technologies.length} Technologies
              </div>
            </div>

            {/* Technologies Grid (Elevated Light Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {current.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFD] hover:bg-white border border-[#E8EEF5] hover:border-cyan-400 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {tech.tag}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="text-base font-black text-[#0F2B46] mt-2 group-hover:text-[#0D3B66] transition-colors">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
