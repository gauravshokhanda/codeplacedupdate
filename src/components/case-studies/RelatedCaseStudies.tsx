"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  Gamepad2,
  BarChart3,
  Database,
  Users,
  Layers,
  Globe2,
  Cpu,
  Bot,
  Target,
  Code2,
  Building2,
  Workflow,
} from "lucide-react";
import { CaseStudyCard, CaseStudyData } from "@/components/case-studies/CaseStudyCard";

export type CaseStudySlug = "tuitionstime" | "hoopwrld" | "progress-partners" | "topplaced-ai" | "collectiq";

type RelatedCaseStudyItem = CaseStudyData;

const ALL_CASE_STUDIES: RelatedCaseStudyItem[] = [
  {
    id: "tuitionstime",
    slug: "tuitionstime",
    category: "EDTECH & SAAS PLATFORM",
    brand: "Tuitionstime",
    brandIcon: GraduationCap,
    titlePrefix: "Engineering a Complete ",
    highlightWord: "EdTech Marketplace",
    description:
      "From tutor discovery to demos, classes, meetings, payments, learning resources and analytics — a connected digital platform built for scale.",
    image: "/images/case-studies/tuitionstime-featured-flagship.webp",
    mobileImage: "/images/case-studies/tuitionstime/tuitionstime-photorealistic-laptop-hero.webp",
    imageAlt: "Tuitionstime EdTech Marketplace Platform by CodePlaced",
    techTags: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Razorpay", "Twilio"],
    metrics: [
      { value: "10K+", label: "Active Students", icon: Users },
      { value: "2K+", label: "Expert Tutors", icon: GraduationCap },
      { value: "50K+", label: "Classes Completed", icon: Layers },
    ],
  },
  {
    id: "hoopwrld",
    slug: "hoopwrld",
    category: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
    brand: "Hoopwrld",
    brandIcon: Gamepad2,
    brandLogoUrl: "/images/case-studies/hoopwrld-logo-badge.png",
    titlePrefix: "Turning Gameplay Data Into ",
    highlightWord: "Reliable Player Analytics",
    description:
      "A unified reporting solution that helps Hoopwrld understand player activity, game completion, retention, and acquisition performance.",
    image: "/images/case-studies/hoopwrld-hero-basketball-laptop-perfect.webp",
    mobileImage: "/images/case-studies/hoopwrld-after-laptop-front.webp",
    imageAlt: "Hoopwrld Player Analytics & Business Intelligence Dashboard",
    techTags: ["Looker Studio", "PostgreSQL", "GA4", "Clerk", "Google Ads"],
    metrics: [
      { value: "5 Sources", label: "Data Sources Integrated", icon: Database },
      { value: "Daily Pulse", label: "Mobile-First Daily Checks", icon: BarChart3 },
      { value: "Multi-Platform", label: "Web + Media Reporting", icon: Globe2 },
    ],
  },
  {
    id: "progress-partners",
    slug: "progress-partners",
    category: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
    brand: "Progress Partners",
    brandIcon: BarChart3,
    titlePrefix: "Turning Complex Data Into ",
    highlightWord: "Clearer Growth Decisions",
    description:
      "We helped Progress Partners turn complex marketing, subscription and payment data into reliable KPIs for tracking revenue growth, customer retention and advertising performance.",
    image: "/images/case-studies/progress-partners/hero-dashboard.webp",
    mobileImage: "/images/case-studies/progress-partners/hero-dashboard.webp",
    imageAlt: "Progress Partners Business Intelligence & Revenue Analytics Dashboard",
    techTags: ["BigQuery", "SQL", "Preset", "GA4", "Stripe", "Solidgate", "Amplitude", "AnyTrack"],
    metrics: [
      { value: "8 Sources", label: "Data Sources Unified", icon: Database },
      { value: "Daily KPIs", label: "Daily Dashboard Usage", icon: BarChart3 },
      { value: "LTV + Churn", label: "Customer Retention Insights", icon: Users },
    ],
  },
  {
    id: "topplaced-ai",
    slug: "topplaced-ai",
    category: "AI INTERVIEW INTELLIGENCE / SAAS",
    brand: "TopPlaced AI",
    brandIcon: Cpu,
    titlePrefix: "Building an AI-Powered ",
    highlightWord: "Interview Simulation Platform",
    description:
      "An interview simulator that adapts, evaluates, and monitors the complete candidate journey. TopPlaced AI combines voice-led mock interviews, role-specific assessments, integrated coding tools, configurable evaluation rubrics, and multi-signal proctoring into one candidate-facing experience.",
    image: "/images/case-studies/topplaced-ai/topplaced-card-live-interview.webp",
    mobileImage: "/images/case-studies/topplaced-ai/topplaced-card-live-interview.webp",
    imageAlt: "TopPlaced AI - AI-Powered Interview Simulation Platform",
    techTags: ["Voice AI", "STAR Rubrics", "Proctoring", "Code Sandbox", "WebRTC"],
    metrics: [
      { value: "Voice-Led", label: "Voice-Led Interviews", icon: Bot },
      { value: "Role-Specific", label: "Role-Specific Assessments", icon: Target },
      { value: "Coding Tools", label: "Integrated Coding Tools", icon: Code2 },
    ],
  },
  {
    id: "collectiq",
    slug: "collectiq",
    category: "SAAS / AI AUTOMATION / FINTECH OPERATIONS",
    brand: "CollectIQ",
    brandIcon: Building2,
    titlePrefix: "Building an AI-Powered ",
    highlightWord: "Collections Operating System",
    description:
      "A connected SaaS platform bringing together consumer debt collections, commercial receivables, intelligent workflows, account management, and collection intelligence in one operational ecosystem.",
    image: "/images/case-studies/collectiq/collectiq-hero-showcase.webp",
    mobileImage: "/images/case-studies/collectiq/collectiq-hero-showcase.webp",
    imageAlt: "CollectIQ - AI-Powered Collections Operating System",
    techTags: ["SaaS Architecture", "Workflow Builder", "AI Assistant", "CRM Operations", "Multi-Tenant"],
    metrics: [
      { value: "Collections", label: "Collections Management", icon: Building2 },
      { value: "Workflows", label: "Workflow Automation", icon: Workflow },
      { value: "AI Insights", label: "AI-Powered Insights", icon: Bot },
    ],
  },
];

interface RelatedCaseStudiesProps {
  currentSlug: CaseStudySlug | string;
  className?: string;
}

export function RelatedCaseStudies({ currentSlug, className = "" }: RelatedCaseStudiesProps) {
  // Normalize slug to match canonical keys
  const normalizedSlug = currentSlug.toLowerCase().trim();

  // Exclude current case study, preserving canonical order of the other two
  const relatedStudies = ALL_CASE_STUDIES.filter(
    (study) => study.id !== normalizedSlug && study.slug !== normalizedSlug
  );

  return (
    <section
      className={`bg-[#000000] text-white py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] ${className}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl text-left">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
            EXPLORE MORE CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore More Case Studies.
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Discover how we turn complex business challenges into practical reporting and digital solutions across real-world projects.
          </p>
        </div>

        {/* Vertically Stacked Full-Width Cards */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 pt-2">
          {relatedStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

