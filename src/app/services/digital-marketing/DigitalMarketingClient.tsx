"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Search,
  MousePointerClick,
  Megaphone,
  BarChart3,
  Share2,
  CheckCircle2,
  TrendingUp,
  Layers,
  Target,
  Activity,
  Sparkles,
  ChevronDown,
  Globe,
  FileCode2,
  LineChart,
  Compass,
  Sliders,
  Rocket,
  Eye,
  Calendar,
  MessageSquare,
  Palette,
  ShieldCheck,
} from "lucide-react";

// ============================================================================
// DATA DEFINITIONS FOR ALL 11 SECTIONS
// ============================================================================

const EXPERTISE_CARDS = [
  {
    num: "01",
    badge: "Answer Engine Optimization (AEO)",
    title: "Be Discoverable in AI-Powered Search.",
    description:
      "People increasingly ask AI tools and answer engines for recommendations, comparisons, and solutions. We structure your website content, service pages, FAQs, and entity information so your business can be clearly understood and surfaced across modern search experiences.",
    capabilities: [
      "AI search content structuring",
      "Question-and-answer page optimization",
      "Entity clarity and topical authority",
      "Structured data and schema implementation",
      "Conversational query optimization",
      "Service and brand discoverability improvements",
    ],
    icon: Bot,
  },
  {
    num: "02",
    badge: "Search Engine Optimization (SEO)",
    title: "Improve Search Visibility and Organic Growth.",
    description:
      "We help your website rank for high-intent searches through technical improvements, keyword strategy, content optimization, and site structure enhancements.",
    capabilities: [
      "Technical SEO audits and fixes",
      "On-page SEO optimization",
      "Keyword research and search intent mapping",
      "Service page and content optimization",
      "Internal linking and site architecture",
      "Core Web Vitals and performance alignment",
    ],
    icon: Search,
  },
  {
    num: "03",
    badge: "Google Ads",
    title: "Reach High-Intent Customers at the Right Moment.",
    description:
      "We plan, launch, and optimize Google Ads campaigns designed to capture demand from people actively searching for your products or services.",
    capabilities: [
      "Search campaign setup and management",
      "Display and remarketing campaigns",
      "Keyword and audience targeting",
      "Ad copy creation and testing",
      "Landing page alignment",
      "Conversion tracking and budget optimization",
    ],
    icon: MousePointerClick,
  },
  {
    num: "04",
    badge: "Meta Ads",
    title: "Turn Audience Attention Into Business Opportunities.",
    description:
      "We create and manage targeted ad campaigns across Facebook and Instagram to build awareness, retarget interested visitors, and generate leads.",
    capabilities: [
      "Audience research and segmentation",
      "Creative ad campaign planning",
      "Lead generation and conversion campaigns",
      "Retargeting and lookalike audiences",
      "A/B testing for creatives and messaging",
      "Campaign performance optimization",
    ],
    icon: Megaphone,
  },
  {
    num: "05",
    badge: "Google Analytics",
    title: "Understand Performance. Make Better Decisions.",
    description:
      "Marketing works best when every action is measurable. We set up and configure Google Analytics and tracking systems so you can clearly see where visitors come from, how they behave, and what drives conversions.",
    capabilities: [
      "Google Analytics 4 (GA4) setup and configuration",
      "Conversion and event tracking",
      "Funnel and user journey analysis",
      "Traffic source and campaign attribution",
      "Custom marketing performance dashboards",
      "Insightful reporting for decision-making",
    ],
    icon: BarChart3,
  },
  {
    num: "06",
    badge: "Social Media Management & Branding",
    title: "Build a Brand People Recognize and Trust.",
    description:
      "We help businesses maintain a consistent, professional digital identity across social platforms and brand touchpoints.",
    capabilities: [
      "Social media strategy and content planning",
      "Platform-specific post creation and scheduling",
      "Brand voice and visual consistency",
      "Audience engagement and community presence",
      "Campaign creative direction",
      "Brand positioning and messaging refinement",
    ],
    icon: Share2,
  },
];

const CONNECTED_WORKFLOW_STAGES = [
  {
    step: "01",
    stage: "Discover",
    channels: "SEO + AEO",
    summary:
      "Ensure high-intent buyers and AI answer engines find your business when searching for solutions, comparisons, and expertise.",
    deliverables: [
      "Technical SEO & Core Web Vitals",
      "Schema.org entity & FAQ markup",
      "Search-intent content architecture",
    ],
    icon: Search,
  },
  {
    step: "02",
    stage: "Attract",
    channels: "Google Ads + Meta Ads",
    summary:
      "Capture active search demand through Google Ads while reaching segmented, high-fit audiences on Facebook and Instagram.",
    deliverables: [
      "High-intent search & display campaigns",
      "Segmented paid social audiences",
      "Multi-variant creative & copy testing",
    ],
    icon: Target,
  },
  {
    step: "03",
    stage: "Engage",
    channels: "Social Media + Branding",
    summary:
      "Reinforce credibility with a cohesive visual identity, clear brand messaging, and consistent social content.",
    deliverables: [
      "Unified brand voice & visual guidelines",
      "Platform-tailored content calendars",
      "Consistent community & brand presence",
    ],
    icon: Share2,
  },
  {
    step: "04",
    stage: "Convert",
    channels: "Campaign & Landing Page Optimization",
    summary:
      "Align ad messaging with fast, structured landing experiences designed to turn visitor interest into qualified inquiries.",
    deliverables: [
      "Message-matched landing page structure",
      "Clear inquiry & lead capture flows",
      "Frictionless mobile & desktop UX",
    ],
    icon: MousePointerClick,
  },
  {
    step: "05",
    stage: "Measure",
    channels: "GA4 + Conversion Tracking",
    summary:
      "Track every interaction, traffic source, and conversion event with clean Google Analytics 4 instrumentation.",
    deliverables: [
      "GA4 custom event & goal configuration",
      "Cross-channel UTM & source attribution",
      "Funnel drop-off & user path tracking",
    ],
    icon: BarChart3,
  },
  {
    step: "06",
    stage: "Optimize",
    channels: "Reporting & Performance Insights",
    summary:
      "Feed real performance data back into search strategy, ad budgets, and creative direction for continuous improvement.",
    deliverables: [
      "Executive performance dashboards",
      "Budget & bid reallocation insights",
      "Iterative content & creative refinement",
    ],
    icon: TrendingUp,
  },
];

const ANALYTICS_HIGHLIGHTS = [
  "End-to-end campaign tracking",
  "Attribution clarity across channels",
  "User behavior and conversion insights",
  "Performance reporting dashboards",
  "ROI-focused optimization",
  "Data-backed marketing decisions",
];

const PAID_ADS_CAPABILITIES = [
  "Campaign strategy and setup",
  "Audience and keyword targeting",
  "Ad creative and copy development",
  "Landing page alignment",
  "Budget and bid management",
  "Continuous conversion optimization",
];

const SOCIAL_BRAND_FEATURES = [
  {
    title: "Social Media Strategy",
    desc: "Channel selection, audience pillars, and publishing cadences tailored to your business goals.",
    icon: Compass,
  },
  {
    title: "Content Planning",
    desc: "Structured editorial calendars balancing educational insights, product value, and brand stories.",
    icon: Calendar,
  },
  {
    title: "Brand Positioning",
    desc: "Clear value propositions, visual standards, and messaging guidelines across every touchpoint.",
    icon: Palette,
  },
  {
    title: "Creative Campaigns",
    desc: "Coordinated visual and copy assets built for organic social engagement and paid promotion.",
    icon: Sparkles,
  },
  {
    title: "Audience Engagement",
    desc: "Consistent community management and responsive communication that strengthens brand trust.",
    icon: MessageSquare,
  },
  {
    title: "Performance Insights",
    desc: "Clear tracking of content reach, engagement trends, and social referral traffic in GA4.",
    icon: LineChart,
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "Understand your business goals, audience, current digital presence, and opportunities.",
    icon: Search,
  },
  {
    num: "02",
    title: "Strategy & Planning",
    desc: "Define the right mix of channels, messaging, targeting, and priorities.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Setup & Implementation",
    desc: "Configure analytics, tracking, SEO/AEO foundations, campaigns, and content workflows.",
    icon: Sliders,
  },
  {
    num: "04",
    title: "Campaign Execution",
    desc: "Launch search, ad, content, and social initiatives with clear quality standards.",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Performance Monitoring",
    desc: "Track traffic, engagement, leads, and campaign performance in real time.",
    icon: Eye,
  },
  {
    num: "06",
    title: "Continuous Optimization",
    desc: "Refine targeting, content, creatives, and strategy based on real data.",
    icon: TrendingUp,
  },
];

const WHY_CHOOSE_CARDS = [
  {
    title: "Technology-Driven Execution",
    desc: "Strong website, performance, and technical foundations behind every campaign.",
    icon: FileCode2,
  },
  {
    title: "Analytics-First Approach",
    desc: "Clear tracking and reporting so you always understand what is working.",
    icon: BarChart3,
  },
  {
    title: "Connected Digital Strategy",
    desc: "SEO, AEO, paid ads, social media, and branding working together as one system.",
    icon: Layers,
  },
  {
    title: "Business-Focused Recommendations",
    desc: "Practical strategies tailored to your goals, audience, and growth stage.",
    icon: ShieldCheck,
  },
];

const FAQ_ITEMS = [
  {
    q: "What is Answer Engine Optimization (AEO), and how is it different from SEO?",
    a: "Traditional SEO focuses on helping your web pages rank in standard search engine results through technical health, keywords, and site structure. Answer Engine Optimization (AEO) complements SEO by structuring your content, FAQs, service definitions, and schema markup so AI-powered search tools and answer engines can clearly interpret your business and surface accurate answers when users ask conversational questions.",
  },
  {
    q: "Can we choose specific digital marketing services, or do we need a full package?",
    a: "You can start with the specific services that match your immediate priorities—such as an SEO & AEO overhaul, Google Ads management, or GA4 tracking setup—or combine multiple disciplines into an integrated growth program. We tailor the scope to your goals and current stage.",
  },
  {
    q: "How do Google Ads and Meta Ads work together?",
    a: "Google Ads captures high-intent demand from people actively searching for your services right now, while Meta Ads (Facebook and Instagram) builds awareness among targeted audiences and retargets previous website visitors. Running both in a coordinated system keeps your pipeline supplied with both immediate searchers and nurtured prospects.",
  },
  {
    q: "Do you set up Google Analytics and conversion tracking?",
    a: "Yes. Every marketing engagement can include full Google Analytics 4 (GA4) configuration, custom event and conversion tracking, UTM attribution standards, and reporting dashboards so you can see how each channel contributes to inquiries and business outcomes.",
  },
  {
    q: "How long does it take to see results from SEO and paid advertising?",
    a: "Paid advertising channels like Google Ads and Meta Ads begin generating traffic and performance data as soon as campaigns launch, with targeting and conversion efficiency improving through ongoing optimization. SEO and AEO build compounding organic visibility over several months as technical fixes, structured content, and topical authority take effect.",
  },
  {
    q: "Do you also handle social media content and branding?",
    a: "Yes. We provide social media strategy, content calendar planning, platform-specific post creation, and brand positioning so your visual identity and messaging stay cohesive across organic social channels, paid campaigns, and your website.",
  },
  {
    q: "Can you optimize our existing website for SEO and AEO?",
    a: "Absolutely. Because CodePlaced is also a software and web engineering company, we can audit and optimize your existing site's technical SEO, Core Web Vitals, page hierarchy, internal linking, structured schema data, and answer-ready content directly.",
  },
  {
    q: "How do we get started with CodePlaced's digital marketing services?",
    a: "Click 'Send an Inquiry' to share your business goals, website, and areas of interest. Our team will review your current digital presence and outline a clear, practical plan covering the channels and tracking setup that fit your objectives.",
  },
];

// ============================================================================
// MAIN CLIENT COMPONENT
// ============================================================================

export function DigitalMarketingClient() {
  const [activeStage, setActiveStage] = useState(0);
  const [isStagePaused, setIsStagePaused] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Subtle auto-progression through the 6 connected workflow stages unless hovered/interacted
  useEffect(() => {
    if (isStagePaused) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % CONNECTED_WORKFLOW_STAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isStagePaused]);

  const currentWorkflow = CONNECTED_WORKFLOW_STAGES[activeStage];

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#00BCD4] selection:text-black overflow-x-clip">
      {/* ===================================================================== */}
      {/* SECTION 1 — HERO SECTION (PURE BLACK #000000)                         */}
      {/* ===================================================================== */}
      <section className="relative bg-[#000000] border-b border-[#222222] text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Subtle Cyan Ambient Glow */}
        <div
          className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[560px] h-[560px] pointer-events-none opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(0,188,212,0.28) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[480px] h-[480px] pointer-events-none opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(2,132,199,0.24) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Side: Eyebrow, Main Headline, Supporting Description, Single CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase bg-[#0E131B] text-[#00BCD4] border border-[#00BCD4]/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00BCD4]" />
                <span>DIGITAL MARKETING SERVICES</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
                className="text-[30px] xs:text-[34px] sm:text-5xl lg:text-[52px] xl:text-[58px] font-black tracking-tight text-white leading-[1.08]"
              >
                Digital Marketing That Drives Real{" "}
                <span className="text-[#00BCD4]">Business Growth.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
                className="text-sm sm:text-base lg:text-[17px] text-neutral-300 max-w-xl leading-relaxed font-normal"
              >
                From search visibility and paid advertising to social media, analytics, and brand
                positioning, we help businesses reach the right audience, generate qualified leads,
                and turn digital engagement into measurable growth.
              </motion.p>

              {/* Single Primary CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
                className="pt-1"
              >
                <Link
                  href="/contact#contact-hero"
                  className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-8 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-base tracking-tight shadow-[0_0_25px_rgba(0,188,212,0.3)] hover:shadow-[0_0_35px_rgba(0,188,212,0.5)] transition-all active:scale-95 group"
                >
                  <span>Send an Inquiry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Core Discipline Pills */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
                className="pt-3 sm:pt-4 border-t border-[#1F242D] flex flex-wrap items-center gap-2"
              >
                {[
                  "AEO & AI Search",
                  "Technical & Content SEO",
                  "Google Ads",
                  "Meta Ads",
                  "Google Analytics 4",
                  "Social Media & Branding",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="px-2.5 py-1 rounded-md bg-[#0D1117] border border-[#222934] text-[11px] font-mono text-neutral-300"
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Side — Animated Digital Marketing Intelligence Dashboard Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-6 w-full"
            >
              <div className="relative rounded-2xl bg-gradient-to-b from-[#111722] to-[#090D14] border border-[#222C3C] p-4 sm:p-5 shadow-[0_24px_60px_rgba(0,0,0,0.65)] overflow-hidden">
                {/* Top Window Bar */}
                <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-[11px] font-mono font-bold text-neutral-200 tracking-wide">
                      MARKETING INTELLIGENCE COCKPIT
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9.5px] font-mono text-neutral-400 uppercase tracking-wider">
                    Illustrative Sample View
                  </span>
                </div>

                {/* Top Row: Search Visibility Trend + Active Ad Channels */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 mb-3.5">
                  {/* Search & Answer Visibility Trend Chart (7 cols) */}
                  <div className="sm:col-span-7 rounded-xl bg-[#0D121B] border border-white/10 p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#00BCD4] font-bold">
                          SEARCH &amp; AEO VISIBILITY
                        </div>
                        <div className="text-xs font-bold text-white mt-0.5">
                          Organic + AI Answer Surface Trend
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
                        SEO + AEO Active
                      </span>
                    </div>

                    {/* Animated SVG Area Line Chart */}
                    <div className="h-24 w-full pt-1">
                      <svg viewBox="0 0 280 80" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="dmHeroGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00BCD4" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#00BCD4" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="280" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                        <line x1="0" y1="45" x2="280" y2="45" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                        <line x1="0" y1="70" x2="280" y2="70" stroke="rgba(255,255,255,0.06)" />
                        {/* Area */}
                        <path
                          d="M0,64 C40,58 70,50 110,42 C150,34 185,26 225,16 C250,11 265,9 280,6 L280,74 L0,74 Z"
                          fill="url(#dmHeroGrad)"
                        />
                        {/* Secondary dashed line (AEO Answer Queries) */}
                        <path
                          d="M0,68 C45,63 85,56 130,48 C175,39 220,28 280,18"
                          fill="none"
                          stroke="#38BDF8"
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                        />
                        {/* Primary solid line (Organic Search Visibility) */}
                        <motion.path
                          d="M0,64 C40,58 70,50 110,42 C150,34 185,26 225,16 C250,11 265,9 280,6"
                          fill="none"
                          stroke="#00BCD4"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.4, ease: "easeOut" }}
                        />
                        <circle cx="280" cy="6" r="4" fill="#00BCD4" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1 border-t border-white/5">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#00BCD4]" />
                        Organic Search
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-0.5 bg-sky-400" />
                        AI Answer Queries (AEO)
                      </span>
                    </div>
                  </div>

                  {/* Active Paid & Social Channels Card (5 cols) */}
                  <div className="sm:col-span-5 rounded-xl bg-[#0D121B] border border-white/10 p-3.5 flex flex-col justify-between space-y-2.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#00BCD4] font-bold">
                      ACTIVE CHANNEL MIX
                    </div>
                    <div className="space-y-2">
                      {[
                        { name: "Google Ads", detail: "High-Intent Search & Remarketing", status: "Optimized" },
                        { name: "Meta Ads", detail: "Paid Social & Retargeting", status: "Active" },
                        { name: "GA4 Telemetry", detail: "Event & Funnel Attribution", status: "Synced" },
                      ].map((ch) => (
                        <div
                          key={ch.name}
                          className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-white truncate">{ch.name}</div>
                            <div className="text-[9.5px] text-neutral-400 truncate">{ch.detail}</div>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-[#00BCD4]/15 border border-[#00BCD4]/30 text-[9px] font-mono font-bold text-[#00BCD4] shrink-0">
                            {ch.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle Row: Traffic Acquisition Breakdown + Conversion Funnel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Traffic Acquisition Channels */}
                  <div className="rounded-xl bg-[#0D121B] border border-white/10 p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 font-bold">
                        TRAFFIC ACQUISITION MIX
                      </span>
                      <span className="text-[9.5px] font-mono text-[#00BCD4]">Multi-Channel</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "Organic Search (SEO)", pct: 78, color: "bg-[#00BCD4]" },
                        { label: "AI Answer Engines (AEO)", pct: 64, color: "bg-sky-400" },
                        { label: "Google & Meta Paid Ads", pct: 72, color: "bg-emerald-400" },
                        { label: "Social & Brand Direct", pct: 56, color: "bg-indigo-400" },
                      ].map((bar) => (
                        <div key={bar.label} className="space-y-1">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-neutral-300 font-medium">{bar.label}</span>
                            <span className="font-mono text-neutral-400">Tracked</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${bar.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${bar.pct}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Full-Funnel Conversion Stage Progression */}
                  <div className="rounded-xl bg-[#0D121B] border border-white/10 p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 font-bold">
                        CONVERSION FUNNEL ARCHITECTURE
                      </span>
                      <span className="text-[9.5px] font-mono text-emerald-400">GA4 Verified</span>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { stage: "1. Search & Ad Impressions", width: "w-full", tone: "bg-[#00BCD4]/25 border-[#00BCD4]/40" },
                        { stage: "2. Engaged Landing Visits", width: "w-[86%]", tone: "bg-[#00BCD4]/35 border-[#00BCD4]/50" },
                        { stage: "3. Qualified Lead Inquiries", width: "w-[72%]", tone: "bg-[#00BCD4]/50 border-[#00BCD4]/60" },
                        { stage: "4. Attributed Conversions", width: "w-[58%]", tone: "bg-[#00BCD4] text-black font-bold border-[#00BCD4]" },
                      ].map((step) => (
                        <div key={step.stage} className="w-full">
                          <div
                            className={`${step.width} px-2.5 py-1 rounded-md border text-[10px] font-mono truncate ${
                              step.stage.startsWith("4.") ? step.tone : `${step.tone} text-neutral-200`
                            }`}
                          >
                            {step.stage}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2 — OUR DIGITAL MARKETING EXPERTISE (PURE WHITE #FFFFFF)      */}
      {/* ===================================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              WHAT WE OFFER
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              Everything You Need to Grow Your Digital Presence.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
              A connected approach to visibility, advertising, content, and analytics that helps
              businesses attract, engage, and convert their ideal customers.
            </p>
          </div>

          {/* 6 Expertise Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
            {EXPERTISE_CARDS.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
                  className="rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#00BCD4]/70 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon & Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-center justify-center text-neutral-900 relative group-hover:bg-[#00BCD4]/10 group-hover:border-[#00BCD4]/40 group-hover:text-[#00BCD4] transition-colors shrink-0">
                        <CardIcon className="w-5 h-5" />
                        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-[#00BCD4] px-2.5 py-1 rounded-md bg-[#F7F8FA] border border-[#E5E7EB] transition-colors">
                        {card.num}
                      </span>
                    </div>

                    {/* Discipline Badge + Heading + Description */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00AFC8] block">
                        {card.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-[#00AFC8] transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* 6 Capabilities List */}
                  <ul className="mt-5 pt-4 border-t border-[#E5E7EB] space-y-2">
                    {card.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-xs sm:text-[13px] text-neutral-700 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00BCD4] shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 3 — HOW OUR DIGITAL MARKETING SERVICES WORK TOGETHER (BLACK)  */}
      {/* ===================================================================== */}
      <section
        className="py-12 sm:py-16 lg:py-24 bg-[#000000] border-b border-[#222222] text-white"
        onMouseEnter={() => setIsStagePaused(true)}
        onMouseLeave={() => setIsStagePaused(false)}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              CONNECTED GROWTH SYSTEM
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              One Connected Strategy. Better Business Outcomes.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed font-normal max-w-2xl mx-auto">
              Every channel works stronger when connected. Discoverability, paid acquisition, brand
              trust, conversion optimization, and analytics operate as one continuous system.
            </p>
          </div>

          {/* 6-Stage Interactive Connected Workflow (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="relative">
            {/* Desktop Horizontal Connector Line */}
            <div className="hidden lg:block absolute top-11 left-[8%] right-[8%] h-[2px] bg-[#1F2733] z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00BCD4] to-sky-400"
                animate={{
                  width: `${(activeStage / (CONNECTED_WORKFLOW_STAGES.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
              {CONNECTED_WORKFLOW_STAGES.map((item, idx) => {
                const StageIcon = item.icon;
                const isSelected = activeStage === idx;
                const isPassed = idx <= activeStage;
                return (
                  <button
                    key={item.stage}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    onMouseEnter={() => setActiveStage(idx)}
                    className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#0E1622] border-[#00BCD4] shadow-[0_0_25px_rgba(0,188,212,0.18)]"
                        : "bg-[#0B0E14] border-[#1F2632] hover:border-[#00BCD4]/40"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                            isSelected
                              ? "bg-[#00BCD4] text-black border-[#00BCD4]"
                              : isPassed
                              ? "bg-[#00BCD4]/15 text-[#00BCD4] border-[#00BCD4]/40"
                              : "bg-[#121721] text-neutral-400 border-[#232B38]"
                          }`}
                        >
                          <StageIcon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-xs font-mono font-bold ${
                            isSelected ? "text-[#00BCD4]" : "text-neutral-500"
                          }`}
                        >
                          {item.step}
                        </span>
                      </div>

                      <div>
                        <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                          {item.stage}
                        </div>
                        <div className="text-xs font-mono font-semibold text-[#00BCD4] mt-1 leading-snug">
                          {item.channels}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span>{isSelected ? "Active Stage" : "Inspect Stage"}</span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isSelected ? "text-[#00BCD4] translate-x-0.5" : "text-neutral-500"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Workflow Stage Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWorkflow.stage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-2xl bg-[#0B0F17] border border-[#222B38] p-5 sm:p-7 lg:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-2.5">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00BCD4] uppercase tracking-wider">
                    <span>STAGE {currentWorkflow.step}</span>
                    <span>•</span>
                    <span>{currentWorkflow.stage.toUpperCase()}</span>
                    <span>→</span>
                    <span className="text-white">{currentWorkflow.channels}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    How {currentWorkflow.stage} Connects to the Growth Loop
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-neutral-300 leading-relaxed">
                    {currentWorkflow.summary}
                  </p>
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 gap-2.5">
                  {currentWorkflow.deliverables.map((deliv) => (
                    <div
                      key={deliv}
                      className="p-3 rounded-xl bg-[#111722] border border-white/10 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00BCD4] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 4 — PERFORMANCE MARKETING & ANALYTICS (WHITE #FFFFFF)         */}
      {/* ===================================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Side: Marketing Analytics Dashboard Visual */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl bg-[#0B0F17] border border-[#222B38] p-4 sm:p-6 text-white shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#00BCD4]" />
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                      GA4 &amp; ATTRIBUTION DASHBOARD
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9.5px] font-mono text-neutral-400 uppercase">
                    Illustrative Sample View
                  </span>
                </div>

                {/* KPI Summary Row */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: "Event Tracking", val: "GA4 Synced", note: "Form, Call & CTA Events" },
                    { label: "Channel Attribution", val: "Multi-Touch", note: "UTM & Source Clarity" },
                    { label: "Funnel Visibility", val: "End-to-End", note: "Visit to Lead Stage" },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="p-3 rounded-xl bg-[#121824] border border-white/10 space-y-0.5"
                    >
                      <div className="text-[10px] font-mono text-neutral-400">{kpi.label}</div>
                      <div className="text-xs sm:text-sm font-black font-mono text-[#00BCD4]">
                        {kpi.val}
                      </div>
                      <div className="text-[9.5px] text-neutral-400 truncate">{kpi.note}</div>
                    </div>
                  ))}
                </div>

                {/* Traffic Trend & Channel Performance Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Channel Performance Comparison */}
                  <div className="p-3.5 rounded-xl bg-[#121824] border border-white/10 space-y-2.5">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-300">
                      CHANNEL CONVERSION CONTRIBUTION
                    </div>
                    {[
                      { ch: "Organic Search (SEO)", w: "82%", c: "bg-[#00BCD4]" },
                      { ch: "Google Search Ads", w: "76%", c: "bg-sky-400" },
                      { ch: "Meta Retargeting", w: "64%", c: "bg-emerald-400" },
                      { ch: "AI Answer Referrals", w: "58%", c: "bg-indigo-400" },
                    ].map((row) => (
                      <div key={row.ch} className="space-y-1">
                        <div className="flex justify-between text-[10px] text-neutral-300">
                          <span>{row.ch}</span>
                          <span className="font-mono text-neutral-400">Attributed</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                          <div className={`h-full rounded-full ${row.c}`} style={{ width: row.w }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* User Journey Funnel */}
                  <div className="p-3.5 rounded-xl bg-[#121824] border border-white/10 space-y-2.5">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-300">
                      USER JOURNEY &amp; FUNNEL ANALYSIS
                    </div>
                    <div className="space-y-2">
                      {[
                        { step: "Landing Page View", status: "Tracked via GA4" },
                        { step: "Service Page Engagement", status: "Scroll & Time Event" },
                        { step: "Inquiry Form Initiation", status: "Funnel Step Event" },
                        { step: "Completed Lead Submission", status: "Primary Conversion" },
                      ].map((f, i) => (
                        <div
                          key={f.step}
                          className="flex items-center justify-between p-1.5 rounded bg-white/[0.03] border border-white/5 text-[10px]"
                        >
                          <span className="text-neutral-200 font-medium">
                            {i + 1}. {f.step}
                          </span>
                          <span className="font-mono text-[#00BCD4] text-[9px]">{f.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Explanation & Capability Highlights */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
                PERFORMANCE MARKETING &amp; ANALYTICS
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-neutral-900 leading-tight">
                Turn Marketing Data Into Actionable Decisions.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                We combine marketing execution with technical tracking and analytics engineering.
                Every campaign, landing page, and organic initiative is connected to Google
                Analytics 4 and structured event tracking—giving your team a clear view of visitor
                behavior, channel attribution, and lead quality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {ANALYTICS_HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-xl bg-[#F7F9FB] border border-[#E5E7EB] flex items-center gap-2.5 text-xs sm:text-sm font-bold text-neutral-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00BCD4] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 5 — SEO, AEO & SEARCH VISIBILITY (BLACK #000000)              */}
      {/* ===================================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              ORGANIC &amp; AI DISCOVERABILITY
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              Get Found Where Your Customers Search.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed font-normal">
              Modern buyers search on Google and ask AI answer engines for direct recommendations.
              We prepare your website to perform across both traditional search results and
              AI-powered discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Two Balanced Feature Areas (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Feature Area 1: SEO */}
              <div className="rounded-2xl bg-[#0D1117] border border-[#222934] p-6 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4]">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                    SEARCH ENGINE OPTIMIZATION
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    SEO — Search Engine Visibility
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Build durable organic rankings with clean technical architecture, high-intent
                    keyword alignment, and authoritative service content.
                  </p>
                </div>

                <ul className="pt-4 border-t border-white/10 space-y-2.5">
                  {[
                    "Technical website health",
                    "Search-friendly page structure",
                    "Keyword and content strategy",
                    "Organic ranking growth",
                  ].map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#00BCD4] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature Area 2: AEO */}
              <div className="rounded-2xl bg-[#0D1117] border border-[#222934] p-6 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                    ANSWER ENGINE OPTIMIZATION
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    AEO — AI-Powered Discovery
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Structure your pages, FAQs, and entity signals so AI assistants and answer
                    engines can accurately understand and surface your services.
                  </p>
                </div>

                <ul className="pt-4 border-t border-white/10 space-y-2.5">
                  {[
                    "Structured, answer-ready content",
                    "Clear service and topic definitions",
                    "Schema and entity optimization",
                    "Better visibility in modern AI search experiences",
                  ].map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#00BCD4] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Search Visibility Interface Graphic (5 Cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-[#0B0F17] border border-[#222B38] p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#00BCD4]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    SEARCH &amp; ENTITY VISIBILITY INSPECTOR
                  </span>
                </div>
                <span className="text-[9.5px] font-mono text-neutral-400">Sample View</span>
              </div>

              {/* Structured Content & Schema Preview */}
              <div className="p-3.5 rounded-xl bg-[#111722] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#00BCD4] font-bold">STRUCTURED ENTITY &amp; SCHEMA</span>
                  <span className="text-emerald-400">Validated JSON-LD</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Organization", "Service", "FAQPage", "BreadcrumbList", "WebPage"].map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-neutral-300"
                    >
                      @{s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Search Query Intent & Content Readiness */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                  QUERY INTENT &amp; CONTENT OPTIMIZATION SIGNALS
                </div>
                {[
                  { query: "Commercial Service Intent", status: "On-Page & Schema Aligned" },
                  { query: "Conversational Question & FAQ", status: "Answer-Ready Structure" },
                  { query: "Technical Crawl & Core Web Vitals", status: "Indexable & Fast" },
                ].map((q) => (
                  <div
                    key={q.query}
                    className="p-2.5 rounded-lg bg-[#111722] border border-white/5 flex items-center justify-between gap-2 text-xs"
                  >
                    <span className="text-neutral-200 font-medium">{q.query}</span>
                    <span className="px-2 py-0.5 rounded bg-[#00BCD4]/15 text-[#00BCD4] font-mono text-[10px] shrink-0">
                      {q.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 6 — PAID ADVERTISING & LEAD GENERATION (WHITE #FFFFFF)        */}
      {/* ===================================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              PAID MEDIA &amp; ACQUISITION
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              Reach the Right Audience. Generate Better Opportunities.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-normal">
              We run Google Ads and Meta Ads as complementary acquisition channels—capturing active
              search demand while building targeted awareness and retargeting funnels across social.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Google Ads + Meta Ads Complementary Cards + 6 Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Google Ads Card */}
                <div className="rounded-2xl bg-[#F7F9FB] border border-[#E5E7EB] p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#00AFC8]">
                      <MousePointerClick className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#00BCD4]/10 text-[#00838F]">
                      HIGH-INTENT DEMAND
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Google Ads</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    High-intent search, display, remarketing, and conversion-focused campaigns that
                    connect your business with buyers actively searching for your solutions.
                  </p>
                </div>

                {/* Meta Ads Card */}
                <div className="rounded-2xl bg-[#F7F9FB] border border-[#E5E7EB] p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#00AFC8]">
                      <Megaphone className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#00BCD4]/10 text-[#00838F]">
                      AUDIENCE &amp; RETARGETING
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Meta Ads</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Targeted Facebook and Instagram campaigns, audience segmentation, creative
                    testing, and retargeting flows that turn attention into qualified leads.
                  </p>
                </div>
              </div>

              {/* 6 Paid Advertising Capabilities */}
              <div className="rounded-2xl bg-white border border-[#E5E7EB] p-6 space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                  PAID CAMPAIGN MANAGEMENT CAPABILITIES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PAID_ADS_CAPABILITIES.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-neutral-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00BCD4] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Campaign Management Interface Visualization */}
            <div className="lg:col-span-5 rounded-2xl bg-[#0B0F17] border border-[#222B38] p-5 sm:p-6 text-white space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00BCD4]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    CAMPAIGN ARCHITECTURE MATRIX
                  </span>
                </div>
                <span className="text-[9.5px] font-mono text-neutral-400">Sample View</span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    channel: "Google Search — High-Intent Keywords",
                    role: "Capture bottom-of-funnel searchers",
                    stage: "Direct Inquiry Landing Page",
                    badge: "Search Intent",
                  },
                  {
                    channel: "Meta Ads — Segmented Prospecting",
                    role: "Introduce capabilities to target decision-makers",
                    stage: "Creative Hook + Value Proposition",
                    badge: "Paid Social",
                  },
                  {
                    channel: "Cross-Channel Remarketing",
                    role: "Re-engage site visitors who didn't convert",
                    stage: "Case Study & Proof Touchpoints",
                    badge: "Retargeting",
                  },
                ].map((campaign) => (
                  <div
                    key={campaign.channel}
                    className="p-3.5 rounded-xl bg-[#121824] border border-white/10 space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-white">{campaign.channel}</span>
                      <span className="px-2 py-0.5 rounded bg-[#00BCD4]/15 text-[#00BCD4] font-mono text-[9.5px] shrink-0">
                        {campaign.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400">{campaign.role}</p>
                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-neutral-300 border-t border-white/5">
                      <span>Destination: {campaign.stage}</span>
                      <span className="text-emerald-400">Conversion Tracked</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 7 — SOCIAL MEDIA & BRAND GROWTH (BLACK #000000)               */}
      {/* ===================================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 Cols: Heading, Description, and 6 Feature Areas */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
                  SOCIAL MEDIA &amp; BRANDING
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight">
                  Build a Stronger Brand Across Every Digital Touchpoint.
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  A strong brand makes every marketing channel perform better. We help businesses
                  create a clear, consistent presence that builds trust and keeps their audience
                  engaged.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SOCIAL_BRAND_FEATURES.map((feat) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="p-4 sm:p-5 rounded-xl bg-[#0D1117] border border-[#222934] hover:border-[#00BCD4]/40 transition-colors space-y-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] shrink-0">
                          <FeatIcon className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white">{feat.title}</h3>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Cols: Coordinated Brand Campaign & Content Calendar Presentation */}
            <div className="lg:col-span-5 rounded-2xl bg-[#0B0F17] border border-[#222B38] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#00BCD4]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    BRAND &amp; CONTENT SYSTEM PREVIEW
                  </span>
                </div>
                <span className="text-[9.5px] font-mono text-[#00BCD4]">Unified Identity</span>
              </div>

              {/* Brand Pillars Strip */}
              <div className="p-3.5 rounded-xl bg-[#111722] border border-white/10 space-y-2">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                  BRAND POSITIONING &amp; VOICE PILLARS
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { title: "Visual Identity", sub: "Cohesive Design" },
                    { title: "Tone of Voice", sub: "Clear & Authoritative" },
                    { title: "Content Pillars", sub: "Value-Driven" },
                  ].map((p) => (
                    <div
                      key={p.title}
                      className="p-2 rounded-lg bg-black/50 border border-white/5 text-center"
                    >
                      <div className="text-[11px] font-bold text-white">{p.title}</div>
                      <div className="text-[9.5px] text-[#00BCD4] font-mono mt-0.5">{p.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordinated Social & Campaign Calendar Cards */}
              <div className="space-y-2.5">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                  MULTI-PLATFORM CONTENT CADENCE
                </div>
                {[
                  {
                    pillar: "Thought Leadership & Expertise",
                    format: "LinkedIn & Editorial Carousel",
                    goal: "Authority & Trust",
                  },
                  {
                    pillar: "Product & Service Spotlights",
                    format: "Instagram, Facebook & Web Visuals",
                    goal: "Solution Awareness",
                  },
                  {
                    pillar: "Customer Questions & Insights",
                    format: "Short-Form Social & FAQ Series",
                    goal: "Audience Engagement",
                  },
                ].map((post) => (
                  <div
                    key={post.pillar}
                    className="p-3 rounded-xl bg-[#111722] border border-white/10 flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{post.pillar}</div>
                      <div className="text-[10.5px] text-neutral-400 mt-0.5">{post.format}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9.5px] font-mono text-neutral-300 shrink-0">
                      {post.goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 8 — OUR DIGITAL MARKETING PROCESS (WHITE #FFFFFF)             */}
      {/* ===================================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              From Strategy to Measurable Growth.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-normal">
              A structured six-step workflow that connects initial audit and strategy with
              disciplined execution and continuous optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {PROCESS_STEPS.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: sIdx * 0.05, ease: "easeOut" }}
                  className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#00BCD4]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black font-mono text-[#00BCD4]">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#F7F9FB] border border-[#E5E7EB] flex items-center justify-center text-neutral-800 group-hover:text-[#00BCD4] group-hover:border-[#00BCD4]/40 transition-colors">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#00AFC8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 9 — WHY CHOOSE CODEPLACED FOR DIGITAL MARKETING (BLACK)       */}
      {/* ===================================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#000000] border-b border-[#222222] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              WHY CHOOSE CODEPLACED
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              Marketing Backed by Technology and Data.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed font-normal">
              We bring software engineering, analytics architecture, and digital marketing together
              so your campaigns are built on fast websites, clean tracking, and connected strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {WHY_CHOOSE_CARDS.map((card) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl bg-[#0D1117] border border-[#222934] hover:border-[#00BCD4]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4]">
                      <CardIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#00BCD4] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 10 — FREQUENTLY ASKED QUESTIONS (WHITE #FFFFFF)               */}
      {/* ===================================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] text-neutral-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              Questions About Our Digital Marketing Services
            </h2>
            <p className="text-xs sm:text-base text-neutral-600 leading-relaxed">
              Clear answers on how we plan, execute, track, and optimize digital marketing programs.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className="rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#00BCD4]/50 transition-all duration-200 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-base font-bold text-neutral-900 pr-2 leading-snug">
                      {item.q}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#00BCD4] text-black"
                          : "bg-[#F7F9FB] text-neutral-500 border border-[#E5E7EB]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-[#F0F2F5]">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 11 — FINAL CTA SECTION (BLACK #000000)                        */}
      {/* ===================================================================== */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#000000] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(circle at center, rgba(0,188,212,0.25) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#0E131B] text-[#00BCD4] border border-[#00BCD4]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#00BCD4]" />
            <span>START YOUR GROWTH STRATEGY</span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-white leading-tight">
            Ready to Grow Your Digital Presence?
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Tell us about your business goals, and let&apos;s explore how the right digital
            marketing strategy can help you reach your audience and create new opportunities.
          </p>

          <div className="pt-2">
            <Link
              href="/contact#contact-hero"
              className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-8 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-base tracking-tight shadow-[0_0_25px_rgba(0,188,212,0.3)] hover:shadow-[0_0_35px_rgba(0,188,212,0.5)] transition-all active:scale-95 group"
            >
              <span>Send an Inquiry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

