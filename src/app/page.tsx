"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SHOW_INDUSTRIES } from "@/lib/featureFlags";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Plus,
  Minus,
  Bot,
  Code2,
  Database,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Building2,
  Users,
  Star,
  Search,
  Calendar,
  Clock,
  Layers,
  ChevronLeft,
  ChevronRight,
  Globe,
  TrendingUp,
} from "lucide-react";
import { ServicesMarquee } from "@/components/ServicesMarquee";
import { HeroTechnologyShowcase } from "@/components/HeroTechnologyShowcase";

// =========================================================================
// 1. DATA: FOUR CORE SERVICES (4-COLUMN STAGGERED SHOWCASE)
// =========================================================================
const SERVICES_DATA = [
  {
    num: "01",
    title: "AI & Automation",
    description:
      "Deploy intelligent AI agents, private RAG engines, and workflow automation that eliminate operational bottlenecks.",
    capabilities: [
      "AI Agents & Workflow Swarms",
      "Private RAG Knowledge Bases",
      "Process & Task Automation",
      "Document & Data Extraction",
    ],
    icon: Bot,
    href: "/services/ai-copilots",
  },
  {
    num: "02",
    title: "Software Development",
    description:
      "Build high-performance web apps, mobile applications, and multi-tenant SaaS platforms engineered for scale.",
    capabilities: [
      "Web & Mobile Applications",
      "Multi-Tenant SaaS Platforms",
      "Custom Enterprise Software",
      "High-Throughput APIs",
    ],
    icon: Code2,
    href: "/services/app-web-development",
  },
  {
    num: "03",
    title: "Data Analytics & Engineering",
    description:
      "Build reliable data foundations and turn complex information into actionable dashboards, KPI telemetry, and predictive insights.",
    capabilities: [
      "Automated ETL/ELT Pipelines",
      "Lakehouses & Data Warehouses",
      "Power BI, Tableau & Looker",
      "Predictive Analytics & Governance",
    ],
    icon: Database,
    href: "/services/data-platforms",
  },
  {
    num: "04",
    title: "Digital Marketing",
    description:
      "Grow your online presence and attract the right customers through search optimization, performance advertising, analytics, social media, and brand strategy.",
    capabilities: [
      "AEO & SEO",
      "Google Ads & Meta Ads",
      "Google Analytics & Tracking",
      "Social Media Management & Branding",
    ],
    icon: TrendingUp,
    href: "/services/digital-marketing",
  },
];

// =========================================================================
// 2. DATA: INDUSTRIES WE SERVE (6 FOCUSED CORE CATEGORIES)
// =========================================================================
const INDUSTRIES_DATA = [
  {
    title: "Ecommerce (D2C, B2B & B2C)",
    description:
      "Scalable storefront architectures, automated inventory reconciliation, and real-time customer lifetime value analytics.",
    icon: ShoppingBag,
    href: "/industries#ecommerce",
  },
  {
    title: "EdTech",
    description:
      "Multi-sided education marketplaces, live video classroom infrastructure, and comprehensive student lifecycle portals.",
    icon: GraduationCap,
    href: "/industries#edtech",
  },
  {
    title: "Insurance",
    description:
      "Digital policy management platforms, automated claims document extraction, and real-time actuarial risk modeling.",
    icon: ShieldCheck,
    href: "/industries#insurance",
  },
  {
    title: "Human Resources",
    description:
      "Centralized employee lifecycle portals, automated candidate screening pipelines, and executive workforce reporting.",
    icon: Users,
    href: "/industries#human-resources",
  },
  {
    title: "Healthcare",
    description:
      "HIPAA-compliant patient portals, automated appointment scheduling, and secure clinical telemetry workflows.",
    icon: HeartPulse,
    href: "/industries#healthcare",
  },
  {
    title: "Real Estate",
    description:
      "Property marketplace platforms, automated CRM lead capture workflows, and predictive market valuation tools.",
    icon: Building2,
    href: "/industries#real-estate",
  },
];

// =========================================================================
// 3. DATA: OUR DELIVERY PROCESS (4 CLEAR CONNECTED PHASES)
// =========================================================================
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover & Plan",
    description:
      "Technical audit, architecture blueprints, and sprint roadmapping aligned with clear business KPIs.",
  },
  {
    step: "02",
    title: "Design & Build",
    description:
      "High-velocity 2-week agile sprints delivering modular code, scalable microservices, and modern UX.",
  },
  {
    step: "03",
    title: "Test & Launch",
    description:
      "End-to-end security audits, load benchmarking, and automated zero-downtime production deployment.",
  },
  {
    step: "04",
    title: "Scale & Support",
    description:
      "24/7 proactive infrastructure telemetry, performance optimization, and continuous feature expansion.",
  },
];

// =========================================================================
// 4. DATA: CLIENT TESTIMONIALS (VERIFIED ENTERPRISE QUOTES)
// =========================================================================
const TESTIMONIALS_DATA = [
  {
    quote:
      "CodePlaced re-architected our core data platform in record time. Their engineering rigor, technical depth, and communication allowed us to ship months ahead of our internal timeline.",
    author: "Marcus Vance",
    role: "VP of Engineering, Enterprise SaaS",
    rating: 5,
    initials: "MV",
  },
  {
    quote:
      "The Tuitionstime marketplace launch required complex multi-sided payments, automated tutor scheduling, and absolute zero downtime. CodePlaced executed with flawless precision.",
    author: "Rohit Sharma",
    role: "Product Director, Tuitionstime",
    rating: 5,
    initials: "RS",
  },
  {
    quote:
      "Their AI copilot integration transformed how our analysts evaluate institutional market signals. Context retrieval is instantaneous, secure, and rigorously validated.",
    author: "Dr. Elena Rostova",
    role: "Chief Data Officer, FinTech Partners",
    rating: 5,
    initials: "ER",
  },
];

// =========================================================================
// 5. DATA: FREQUENTLY ASKED QUESTIONS
// =========================================================================
const FAQ_ITEMS = [
  {
    question: "What services does CodePlaced provide?",
    answer:
      "CodePlaced specializes in end-to-end technology engineering: custom full-stack software development, modern data engineering, business intelligence dashboards, and production enterprise AI & automation workflows.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Our agile engineering pods operate in rapid 2-week sprint cycles. Initial MVP deployments and targeted modules typically ship in 2 to 6 weeks, while large-scale enterprise platforms are rolled out through structured, milestone-driven phases.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer dedicated post-launch maintenance, 24/7 infrastructure telemetry, SLA uptime guarantees, security patching, and continuous feature iteration retainers.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes Next.js, React, Node.js, Python, TypeScript, AWS, Microsoft Azure, Google Cloud, Snowflake, Databricks, PostgreSQL, and state-of-the-art LLM orchestration frameworks.",
  },
  {
    question: "How do we get started?",
    answer:
      "You can schedule a complimentary 30-minute strategy call with our engineering leadership to review your technical architecture, requirements, and milestones. We typically provide a scoping proposal within 48 hours.",
  },
];

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  void prefersReducedMotion;
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    } else if (isRightSwipe) {
      setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const col4Ref = useRef<HTMLDivElement>(null);
  const servicesBtnRef = useRef<HTMLDivElement>(null);

  // =========================================================================
  // GSAP SCROLLTRIGGER: APPINVENTIV-INSPIRED STAIRCASE SERVICES ANIMATION
  // Phase A: Initial descending staircase (Col 1 at top, Col 2..Col 4 staggered)
  // Phase B (0.00 -> 0.72): Progressive column rising toward Column 1
  // Phase C (0.72 -> 0.90): Stationary hold of the fully aligned 4-column layout & CTA
  // Phase D (0.90 -> 1.00): Natural release into About CodePlaced
  // =========================================================================
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    const ctx = gsap.context(() => {
      const section = servicesSectionRef.current;
      if (!section) return;

      if (mediaQuery.matches) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const col2 = col2Ref.current;
        const col3 = col3Ref.current;
        const col4 = col4Ref.current;
        const btn = servicesBtnRef.current;
        if (!col2 || !col3 || !col4) return;

        // Viewport height calculation: ensure pinned section and stagger fit comfortably within viewport
        const navbarHeight = 80;
        const availableHeight = window.innerHeight - navbarHeight;
        if (availableHeight < 620) {
          gsap.set([col2, col3, col4], { y: 0 });
          if (btn) gsap.set(btn, { y: 0 });
          return;
        }

        // Proportioned 4-column staircase offsets on standard and compact viewports
        let staggerStep = 80;
        if (availableHeight >= 960) {
          staggerStep = 80;
        } else if (availableHeight >= 800) {
          staggerStep = 55;
        } else if (availableHeight >= 650) {
          staggerStep = 34;
        } else {
          staggerStep = 22;
        }

        const col2Offset = staggerStep;
        const col3Offset = staggerStep * 2;
        const col4Offset = staggerStep * 3;
        const btnOffset = col3Offset;

        gsap.set(col2, { y: col2Offset });
        gsap.set(col3, { y: col3Offset });
        gsap.set(col4, { y: col4Offset });
        if (btn) gsap.set(btn, { y: btnOffset });

        // Single coordinated ScrollTrigger timeline pinned right below the 80px navbar
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80px",
            end: "+=750",
            pin: true,
            pinSpacing: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 72% of scroll timeline (0.00 -> 0.72) for upward column alignment
        tl.to(col2, { y: 0, duration: 0.42, ease: "none" }, 0.00);
        tl.to(col3, { y: 0, duration: 0.46, ease: "none" }, 0.08);
        tl.to(col4, { y: 0, duration: 0.48, ease: "none" }, 0.16);

        // View All Services button rises in sync with Column 3 to arrive directly below the aligned cards
        if (btn) {
          tl.to(btn, { y: 0, duration: 0.46, ease: "none" }, 0.08);
        }

        // Remaining 28% of scroll timeline (0.72 -> 1.00): Hold fully aligned layout stationary
        tl.to({}, { duration: 0.28 }, 0.72);

        // Ensure ScrollTrigger measurements are freshly calculated
        ScrollTrigger.refresh();
      });

      mm.add("(max-width: 1023px)", () => {
        const col2 = col2Ref.current;
        const col3 = col3Ref.current;
        const col4 = col4Ref.current;
        const btn = servicesBtnRef.current;
        if (col2 && col3 && col4) {
          gsap.set([col2, col3, col4], { y: 0 });
        }
        if (btn) {
          gsap.set(btn, { y: 0 });
        }
      });
    }, servicesSectionRef);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      ctx.revert();
    };
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#000000] text-[#FFFFFF] font-sans antialiased selection:bg-[#00BCD4] selection:text-[#050505]">
      {/* ===================================================================== */}
      {/* SECTION 1: HERO SECTION — CODEPLACED BLACK & CYAN ORGANIC ECOSYSTEM   */}
      {/* ===================================================================== */}
      <section className="relative w-full lg:min-h-[100dvh] flex flex-col justify-between pt-[92px] sm:pt-[104px] lg:pt-[82px] bg-[#000000] overflow-hidden">
        {/* Ambient Cyber Grid & Cyan/Blue Glow Backdrop */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 188, 212, 0.25) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 188, 212, 0.25) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute -top-40 left-[12%] w-[520px] h-[520px] rounded-full bg-[#00BCD4]/[0.11] blur-[140px]" />
          <div className="absolute bottom-8 right-[8%] w-[500px] h-[500px] rounded-full bg-[#087FA5]/[0.12] blur-[150px]" />
          {/* Subtle Mobile-Only Ambient Particle Depth (< md) */}
          <div className="md:hidden">
            <span className="absolute top-24 right-8 w-1.5 h-1.5 rounded-full bg-[#00BCD4]/60 shadow-[0_0_8px_#00BCD4] animate-ambient-drift" />
            <span className="absolute top-40 right-16 w-1 h-1 rounded-full bg-[#22D3EE]/50 animate-ambient-drift" style={{ animationDelay: "-2s" }} />
            <span className="absolute top-32 left-[72%] w-1 h-1 rounded-full bg-[#00BCD4]/45 animate-ambient-drift" style={{ animationDelay: "-3.5s" }} />
            <span className="absolute bottom-24 right-10 w-1.5 h-1.5 rounded-full bg-[#087FA5]/60 animate-ambient-drift" style={{ animationDelay: "-1.5s" }} />
            <span className="absolute bottom-36 left-6 w-1 h-1 rounded-full bg-[#22D3EE]/40 animate-ambient-drift" style={{ animationDelay: "-4s" }} />
          </div>
        </div>

        {/* Hero Foreground Content — 1380px Max-Width, 45% Left / 55% Right Split */}
        <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-5 sm:py-8 lg:my-auto lg:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-0 md:gap-8 lg:gap-6 xl:gap-10 items-center">
            {/* Left Content (45% on lg+): Eyebrow, H1, Copy, CTAs, Sub-stats */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Glowing Monospace Eyebrow with Tiny Cyan Particle Accents */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5">
                <span className="relative flex items-center justify-center w-2 h-2 shrink-0" aria-hidden="true">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shadow-[0_0_10px_#00BCD4]" />
                  <span className="absolute -top-1 -right-1 w-1 h-1 rounded-full bg-[#22D3EE]/80" />
                </span>
                <span className="font-mono text-[10.5px] min-[375px]:text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#00BCD4] drop-shadow-[0_0_12px_rgba(0,188,212,0.45)]">
                  AI, DATA &amp; SOFTWARE ARCHITECTURE
                </span>
                <span className="w-1 h-1 rounded-full bg-[#00BCD4]/50 shrink-0" aria-hidden="true" />
              </div>

              {/* H1 in Tight, Bold Plus Jakarta Sans */}
              <h1 className="font-[family-name:var(--font-jakarta)] text-[30px] min-[375px]:text-[34px] sm:text-5xl lg:text-[42px] xl:text-[50px] 2xl:text-[54px] font-extrabold tracking-[-0.03em] text-white leading-[1.09]">
                Build AI &amp; Software Products That Drive{" "}
                <span className="text-[#00BCD4]">Business Growth.</span>
              </h1>

              {/* Supporting Description */}
              <p className="text-[13.5px] min-[375px]:text-sm sm:text-base lg:text-[15px] xl:text-base text-slate-300/90 leading-relaxed font-normal max-w-xl">
                We build custom AI, data engineering &amp; software solutions for high-growth companies. From strategic architecture to production systems, our senior engineering pods deliver with speed and precision.
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-4 pt-1">
                <Link
                  href="/contact#contact-hero"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-7 h-11 sm:h-12 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-[13px] min-[390px]:text-sm xl:text-[15px] tracking-tight transition-all duration-200 shadow-[0_0_24px_rgba(0,188,212,0.32)] hover:shadow-[0_0_36px_rgba(0,188,212,0.52)] hover:-translate-y-0.5 active:scale-95 text-center cursor-pointer shrink-0 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#20d7f5] focus-visible:outline-offset-2"
                >
                  <span>Send an Inquiry</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>

                <a
                  href="#featured-work"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-7 h-11 sm:h-12 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-[13px] min-[390px]:text-sm xl:text-[15px] border border-white/20 hover:border-[#00BCD4]/60 backdrop-blur-md transition-all duration-200 text-center cursor-pointer shrink-0 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#00BCD4] focus-visible:outline-offset-2"
                >
                  <span>Explore Work</span>
                </a>
              </div>

              {/* Sub-stats Row with Micro Cyan Cyber Icons (Compact 2-Col Grid on Mobile) */}
              <div className="pt-4 mt-1 border-t border-white/[0.09] grid grid-cols-2 md:flex md:flex-wrap md:items-center gap-3 sm:gap-5 md:gap-8">
                <div className="flex items-start sm:items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] shrink-0 mt-0.5 sm:mt-0">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] min-[375px]:text-xs sm:text-sm font-bold text-white block leading-tight">
                      Trusted by 20+ Clients
                    </span>
                    <span className="font-mono text-[9.5px] min-[375px]:text-[10px] sm:text-[11px] text-slate-400 block leading-snug">
                      High-growth ventures &amp; enterprises
                    </span>
                  </div>
                </div>

                <div className="hidden md:block h-7 w-[1px] bg-white/[0.1]" aria-hidden="true" />

                <div className="flex items-start sm:items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] shrink-0 mt-0.5 sm:mt-0">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] min-[375px]:text-xs sm:text-sm font-bold text-white block leading-tight">
                      Across 10+ Countries
                    </span>
                    <span className="font-mono text-[9.5px] min-[375px]:text-[10px] sm:text-[11px] text-slate-400 block leading-snug">
                      Global engineering delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Ecosystem (Desktop/Tablet md+ Only, Borderless Organic Network) */}
            <div className="hidden md:flex items-center justify-center w-full">
              <HeroTechnologyShowcase />
            </div>
          </div>
        </div>

        {/* Full-Width Original Capability & Tech Marquee Anchored at the Bottom */}
        <ServicesMarquee className="shrink-0 mt-1 sm:mt-2 lg:mt-0" />
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2: CLIENT TESTIMONIALS — COMPACT BLACK BACKGROUND (#000000) */}
      {/* ===================================================================== */}
      <section className="py-7 sm:py-8 lg:py-9 bg-[#000000] border-b border-[#292929] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-3 sm:mb-6 lg:mb-8 space-y-1 sm:space-y-1.5">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              CLIENT SUCCESS
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* DESKTOP (md: & above): 3-Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-3.5 sm:gap-5">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div
                key={idx}
                className="p-4.5 sm:p-5.5 rounded-2xl bg-[#0B0B0B] border border-[#292929] hover:border-[#00BCD4]/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg"
              >
                <div className="space-y-2.5">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  {/* Real Testimonial Quote */}
                  <p className="text-sm sm:text-base text-[#E5E7EB] leading-relaxed italic font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3.5 mt-3.5 border-t border-[#292929] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#161616] border border-[#292929] text-[#00BCD4] flex items-center justify-center font-bold text-xs">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.author}</div>
                    <div className="text-xs text-[#9CA3AF]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE (md:hidden): Compact Swipeable Carousel with Dots & Controls */}
          <div
            className="md:hidden select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="p-3.5 sm:p-5 rounded-xl bg-[#0B0B0B] border border-[#292929] hover:border-[#00BCD4]/40 transition-all duration-300 flex flex-col justify-between shadow-lg min-h-0">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(TESTIMONIALS_DATA[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9.5px] font-mono text-slate-400 font-bold bg-[#161616] px-2 py-0.5 rounded-full border border-white/10">
                    {activeTestimonial + 1} / {TESTIMONIALS_DATA.length}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-[#E5E7EB] leading-relaxed italic font-normal">
                  &ldquo;{TESTIMONIALS_DATA[activeTestimonial].quote}&rdquo;
                </p>
              </div>

              {/* Author Info + Carousel Navigation */}
              <div className="pt-2.5 mt-2.5 border-t border-[#292929] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#161616] border border-[#292929] text-[#00BCD4] flex items-center justify-center font-bold text-[10px] sm:text-xs shrink-0">
                    {TESTIMONIALS_DATA[activeTestimonial].initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-white truncate">
                      {TESTIMONIALS_DATA[activeTestimonial].author}
                    </div>
                    <div className="text-[9.5px] sm:text-xs text-[#9CA3AF] truncate">
                      {TESTIMONIALS_DATA[activeTestimonial].role}
                    </div>
                  </div>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() =>
                      setActiveTestimonial(
                        (prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
                      )
                    }
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#161616] border border-white/10 text-white hover:text-[#00BCD4] hover:border-[#00BCD4]/40 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length)
                    }
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#161616] border border-white/10 text-white hover:text-[#00BCD4] hover:border-[#00BCD4]/40 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTestimonial === i ? "w-5 bg-[#00BCD4]" : "w-1.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2: SERVICES — PINNED 3-PHASE GSAP SCROLL ANIMATION */}
      {/* ===================================================================== */}
      <section
        id="services"
        ref={servicesSectionRef}
        className="scroll-mt-0 w-full bg-[#FFFFFF] lg:min-h-[calc(100vh-80px)] flex flex-col justify-start py-7 sm:py-9 lg:py-4 xl:py-5.5 2xl:py-8 relative text-[#111827] z-20 border-b border-[#E5E7EB]"
      >
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative bg-white">
          {/* Centered Editorial Section Header with Clean Breathing Room */}
          <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-6 lg:mb-4 xl:mb-5.5 2xl:mb-8 space-y-1 sm:space-y-1.5 lg:space-y-2 2xl:space-y-2.5 shrink-0">
            <span className="text-[10.5px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              CORE CAPABILITIES
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[28px] xl:text-[36px] 2xl:text-[44px] font-extrabold tracking-tight text-[#111827] leading-[1.15] lg:leading-[1.12] max-w-[760px] xl:max-w-[820px] mx-auto">
              Everything You Need to Build and Scale to Market.
            </h2>
            <p className="text-xs sm:text-sm lg:text-[13px] xl:text-[14.5px] 2xl:text-[16px] text-[#56616B] leading-relaxed max-w-2xl mx-auto font-normal pt-0.5">
              End-to-end technical solutions designed for scale, performance, and measurable business impact — from rapid MVP builds to enterprise-grade architectures.
            </p>
          </div>

          {/* DESKTOP 4-COLUMN STAGGERED SCROLL-ALIGNED GRID */}
          <div className="hidden lg:block w-full relative">
            <div className="grid grid-cols-4 border-t border-[#E5E5E5] relative bg-white">
              {SERVICES_DATA.map((service, idx) => {
                const ServiceIcon = service.icon;
                const colRefs = [col1Ref, col2Ref, col3Ref, col4Ref];
                return (
                  <div
                    key={idx}
                    ref={colRefs[idx]}
                    className="p-3 xl:p-4 2xl:p-5.5 bg-white border-r border-[#E5E5E5] last:border-r-0 border-t border-[#E5E5E5] -mt-[1px] flex flex-col justify-between group transition-colors hover:bg-[#FAFAFA] min-h-[360px] xl:min-h-[395px] 2xl:min-h-[445px] will-change-transform shadow-xs"
                  >
                    <div className="space-y-1.5 xl:space-y-2 2xl:space-y-3">
                      {/* Top Row: Circular Service Icon with Cyan Dot Accent */}
                      <div className="w-8 h-8 xl:w-9 xl:h-9 2xl:w-10.5 2xl:h-10.5 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center text-[#101820] relative group-hover:border-[#00BCD4]/50 transition-colors shrink-0 mb-1 xl:mb-1.5 2xl:mb-2">
                        <ServiceIcon className="w-4 h-4 xl:w-4.5 xl:h-4.5 2xl:w-5 2xl:h-5 text-[#101820]" />
                        <span className="absolute bottom-0.5 right-0.5 xl:bottom-1 xl:right-1 w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-[#00BCD4]" />
                      </div>

                      {/* Service Title */}
                      <h3 className="text-[14.5px] xl:text-[16.5px] 2xl:text-[19px] font-bold text-[#101820] tracking-tight leading-snug min-h-[38px] xl:min-h-[44px] 2xl:min-h-[50px] flex items-center">
                        {service.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-[11px] xl:text-[12px] 2xl:text-[13px] text-[#56616B] leading-relaxed font-normal min-h-[54px] xl:min-h-[60px] 2xl:min-h-[66px]">
                        {service.description}
                      </p>

                      {/* Capabilities with Thin Dashed Separators */}
                      <div className="pt-1.5 xl:pt-2 border-t border-dashed border-[#E5E5E5]">
                        {service.capabilities.map((cap, cIdx) => (
                          <Link
                            key={cIdx}
                            href={service.href}
                            className="py-1 xl:py-1.25 2xl:py-1.5 border-b border-dashed border-[#E5E5E5] flex items-center justify-between text-[10.5px] xl:text-[11.5px] 2xl:text-[12.5px] font-medium text-[#101820] group/cap"
                          >
                            <span className="group-hover/cap:text-[#00BCD4] transition-colors leading-snug">
                              {cap}
                            </span>
                            <ArrowUpRight className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-slate-400 group-hover/cap:text-[#00BCD4] group-hover/cap:translate-x-0.5 group-hover/cap:-translate-y-0.5 transition-all shrink-0 ml-1" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Explore Service Link with Cyan Arrow */}
                    <div className="pt-2 xl:pt-2.5 2xl:pt-3 mt-auto">
                      <Link
                        href={service.href}
                        className="flex items-center justify-between text-[11.5px] xl:text-[13px] 2xl:text-[14px] font-bold text-[#101820] hover:text-[#00BCD4] group/link transition-colors pt-1.5 xl:pt-2 border-t border-[#E5E5E5]"
                      >
                        <span>Explore Service</span>
                        <div className="w-5.5 h-5.5 xl:w-6 xl:h-6 2xl:w-6.5 2xl:h-6.5 rounded-full bg-slate-100 group-hover/link:bg-[#00BCD4]/10 flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3.5 h-3.5 text-[#00BCD4] group-hover/link:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DESKTOP Centered 'View All Services' Button — Synchronized with Column 3 Rising */}
          <div ref={servicesBtnRef} className="hidden lg:block text-center mt-3.5 xl:mt-5 2xl:mt-8 will-change-transform">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 xl:px-8 2xl:px-9 h-10 xl:h-11 2xl:h-12 rounded-full bg-white border border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-[#050505] text-xs sm:text-sm 2xl:text-base font-extrabold tracking-tight transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-[#00BCD4]/20 group cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* TABLET & MOBILE COMPACT SERVICES GRID (lg:hidden) */}
          <div className="lg:hidden mt-4 sm:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 border-t border-b border-[#E5E5E5] py-3 sm:py-5">
              {SERVICES_DATA.map((service, idx) => {
                const ServiceIcon = service.icon;
                return (
                  <div
                    key={idx}
                    className={`p-3.5 sm:p-4.5 bg-white border border-[#E5E5E5] rounded-xl flex flex-col justify-between hover:border-[#00BCD4]/50 transition-all duration-200 shadow-xs group ${
                      idx === 3 ? "sm:col-span-1" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center text-[#101820] relative shrink-0 group-hover:border-[#00BCD4]/40 transition-colors">
                          <ServiceIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#101820]" />
                          <span className="absolute bottom-0.5 right-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#00BCD4]" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400">
                          {service.num}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-[#101820] tracking-tight leading-snug mt-2 sm:mt-2.5 group-hover:text-[#00BCD4] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs text-[#56616B] leading-relaxed mt-1 sm:mt-1.5 font-normal">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-2.5 mt-3 border-t border-[#E5E5E5]">
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-between w-full text-xs font-extrabold text-[#00BCD4] hover:text-[#101820] transition-colors group/link"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* TABLET & MOBILE Centered 'View All Services' Button */}
            <div className="text-center pt-3 sm:pt-6">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 sm:px-8 h-9 sm:h-12 rounded-full bg-white border border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-[#050505] text-xs sm:text-sm font-extrabold tracking-tight transition-all duration-200 shadow-xs group cursor-pointer"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 3: ABOUT CODEPLACED — COMPACT BLACK SECTION (#000000) */}
      {/* ===================================================================== */}
      <section className="py-7 sm:py-8 lg:py-9.5 bg-[#000000] border-b border-[#292929] text-white flex items-center">
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-3.5 sm:gap-6 lg:gap-12">
            {/* Left Column (45%): Team Photograph */}
            <div className="w-full lg:w-[45%] flex items-center">
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#292929] bg-[#0B0B0B] shadow-2xl h-[135px] xs:h-[155px] sm:h-[240px] lg:h-[390px] min-h-0 group">
                <Image
                  src="/images/cta-software-collaboration.jpg"
                  alt="CodePlaced senior engineering team collaborating in modern technology office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Right Column (55%): Company Content, Principles, Verified Stats & CTA */}
            <div className="w-full lg:w-[55%] flex flex-col justify-between space-y-2.5 sm:space-y-4 lg:pl-3">
              <div className="space-y-1 sm:space-y-2">
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
                  WHY CHOOSE CODEPLACED
                </span>
                <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-[36px] font-extrabold tracking-tight text-white leading-tight">
                  Built for Speed, Scale & Engineering Excellence.
                </h2>
                <div className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm md:text-base text-[#D1D5DB] leading-relaxed">
                  <p>
                    We combine deep technical expertise with rapid delivery to help high-growth companies build better products, faster.
                  </p>
                  <p className="hidden sm:block">
                    Our senior engineering pods take direct ownership from day one, delivering reliable software, clean data pipelines, and intelligent AI automation in fixed milestone sprints.
                  </p>
                </div>
              </div>

              {/* Two Rebalanced Value Highlights / Principles */}
              <div className="space-y-1 sm:space-y-2 pt-0.5">
                <h3 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Why High-Growth Companies Choose Us
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5">
                  {/* Highlight 1 */}
                  <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#0B0B0B] border border-[#292929] hover:border-[#00BCD4]/40 transition-colors flex items-center sm:block gap-2.5 sm:space-y-1.5">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] flex items-center justify-center shrink-0">
                      <Layers className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#00BCD4]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Fixed-Milestone Sprints</h4>
                      <p className="text-[10px] sm:text-xs text-slate-400 leading-tight mt-0.5">
                        Predictable 2–4 week delivery with continuous previews and zero scope drift.
                      </p>
                    </div>
                  </div>

                  {/* Highlight 2 */}
                  <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#0B0B0B] border border-[#292929] hover:border-[#00BCD4]/40 transition-colors flex items-center sm:block gap-2.5 sm:space-y-1.5">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] flex items-center justify-center shrink-0">
                      <Users className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#00BCD4]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Full IP Ownership</h4>
                      <p className="text-[10px] sm:text-xs text-slate-400 leading-tight mt-0.5">
                        Clean codebases, zero vendor lock-in, and reliable long-term production support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Approved Company Credibility Metrics: Clean 2-Column Layout */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-0.5 max-w-md">
                <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#0B0B0B] border border-[#292929] space-y-0.5 shadow-xs text-center sm:text-left">
                  <div className="text-base sm:text-xl lg:text-2xl font-black text-[#00BCD4] tracking-tight">20+</div>
                  <div className="text-[10px] sm:text-xs font-medium text-slate-300">Trusted Clients</div>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#0B0B0B] border border-[#292929] space-y-0.5 shadow-xs text-center sm:text-left">
                  <div className="text-base sm:text-xl lg:text-2xl font-black text-[#00BCD4] tracking-tight">10+</div>
                  <div className="text-[10px] sm:text-xs font-medium text-slate-300">Countries Reached</div>
                </div>
              </div>

              {/* Prominent Learn More CTA */}
              <div className="pt-0.5">
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 h-9 sm:h-11 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] text-xs sm:text-sm font-extrabold tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#00BCD4]/30 active:scale-95 group cursor-pointer"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 4: FEATURED CASE STUDY — COMPACT WHITE SECTION WITH BLACK CARD */}
      {/* ===================================================================== */}
      <section id="featured-work" className="py-7 sm:py-8 lg:py-9.5 bg-[#FFFFFF] border-b border-[#E5E7EB] text-[#111827]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Left-Aligned Title and Right-Aligned Link */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2.5 sm:gap-4 mb-3 sm:mb-6">
            <div className="space-y-1 max-w-2xl text-left">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
                FEATURED CLIENT WORK
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-[#111827] leading-tight">
                Real Project with Real ROI
              </h2>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-bold text-[#111827] hover:text-[#00AFC8] transition-colors group self-start md:self-end pb-1 border-b-2 border-[#111827]/20 hover:border-[#00AFC8]"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Premium Black Project Showcase Card */}
          <div className="group bg-[#000000] rounded-xl sm:rounded-[14px] border border-[#242424] hover:border-[#383838] p-3 sm:p-6 lg:p-8 text-white shadow-2xl relative overflow-hidden transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-7 lg:gap-9 items-center">
              {/* Left Column: Device Showcase with Authentic Tuitionstime Screens */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
                <div className="relative w-full flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-300 ease-out">
                  {/* Large MacBook Pro */}
                  <Image
                    src="/images/case-studies/tuitionstime/tuitionstime-photorealistic-laptop-hero.webp"
                    alt="Tuitionstime marketplace website interface on MacBook Pro"
                    width={1100}
                    height={730}
                    priority
                    className="w-full h-auto object-contain max-h-[160px] xs:max-h-[190px] sm:max-h-[280px] lg:max-h-[400px] drop-shadow-2xl"
                  />

                  {/* Photorealistic Black Titanium Smartphone Mockup */}
                  <div className="absolute -bottom-1.5 sm:-bottom-4 right-0 sm:right-3 md:right-5 lg:right-2 xl:right-5 w-[75px] xs:w-[90px] sm:w-[135px] md:w-[160px] lg:w-[170px] xl:w-[185px] z-10 pointer-events-none select-none transition-transform duration-300 group-hover:translate-y-[-2px]">
                    <Image
                      src="/images/case-studies/tuitionstime/tuitionstime-phone-photorealistic.webp"
                      alt="Tuitionstime mobile tutor discovery platform on premium smartphone"
                      width={690}
                      height={1285}
                      className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Project Information & Features */}
              <div className="lg:col-span-5 space-y-2 sm:space-y-3.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] text-[9.5px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                  EDTECH &bull; DIGITAL MARKETPLACE
                </div>

                <h3 className="text-base xs:text-lg sm:text-2xl lg:text-[28px] xl:text-[30px] font-extrabold text-white tracking-tight leading-tight">
                  Tuitionstime — A Complete EdTech Marketplace
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-[#D1D5DB] leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                  A comprehensive digital education marketplace unifying tutor discovery, interactive video classrooms, real-time scheduling, automated payments, and student learning analytics.
                </p>

                {/* Four Concise Platform Features */}
                <div className="grid grid-cols-2 gap-1 sm:gap-2 pt-0.5">
                  <div className="p-1.5 sm:p-2.5 rounded-md sm:rounded-xl bg-[#0B0B0B] border border-[#242424] flex items-center gap-1.5 sm:gap-2">
                    <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00BCD4] shrink-0" />
                    <span className="text-[10px] sm:text-[13px] font-semibold text-slate-200 line-clamp-1">
                      Tutor Discovery & Matching
                    </span>
                  </div>

                  <div className="p-1.5 sm:p-2.5 rounded-md sm:rounded-xl bg-[#0B0B0B] border border-[#242424] flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00BCD4] shrink-0" />
                    <span className="text-[10px] sm:text-[13px] font-semibold text-slate-200 line-clamp-1">
                      Online Class Booking
                    </span>
                  </div>

                  <div className="p-1.5 sm:p-2.5 rounded-md sm:rounded-xl bg-[#0B0B0B] border border-[#242424] flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00BCD4] shrink-0" />
                    <span className="text-[10px] sm:text-[13px] font-semibold text-slate-200 line-clamp-1">
                      Class & Schedule Management
                    </span>
                  </div>

                  <div className="p-1.5 sm:p-2.5 rounded-md sm:rounded-xl bg-[#0B0B0B] border border-[#242424] flex items-center gap-1.5 sm:gap-2">
                    <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00BCD4] shrink-0" />
                    <span className="text-[10px] sm:text-[13px] font-semibold text-slate-200 line-clamp-1">
                      Student & Tutor Experiences
                    </span>
                  </div>
                </div>

                {/* Verified Project Metrics in Clean Horizontal Row */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 pt-0.5">
                  <div className="p-1.5 sm:p-2.5 rounded-md sm:rounded-xl bg-[#0B0B0B] border border-[#242424] text-center space-y-0.5">
                    <div className="text-sm sm:text-xl font-black text-[#00BCD4]">10K+</div>
                    <div className="text-[9.5px] sm:text-xs text-slate-400 font-medium leading-tight">Active Students</div>
                  </div>

                  <div className="p-1.5 sm:p-2.5 rounded-md sm:rounded-xl bg-[#0B0B0B] border border-[#242424] text-center space-y-0.5">
                    <div className="text-sm sm:text-xl font-black text-[#00BCD4]">2K+</div>
                    <div className="text-[9.5px] sm:text-xs text-slate-400 font-medium leading-tight">Expert Tutors</div>
                  </div>

                  <div className="p-1.5 sm:p-2.5 rounded-md sm:rounded-xl bg-[#0B0B0B] border border-[#242424] text-center space-y-0.5">
                    <div className="text-sm sm:text-xl font-black text-[#00BCD4]">50K+</div>
                    <div className="text-[9.5px] sm:text-xs text-slate-400 font-medium leading-tight">Classes Completed</div>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-0.5">
                  <Link
                    href="/case-studies/tuitionstime"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-9 sm:h-11 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-base tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#00BCD4]/30 cursor-pointer text-center"
                  >
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 5: INDUSTRIES WE SERVE — PURE BLACK WITH WHITE HOVER CARDS */}
      {/* ===================================================================== */}
      {SHOW_INDUSTRIES && (
        <section className="py-7 sm:py-8 lg:py-9.5 bg-[#000000] border-b border-[#292929] text-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading & Supporting Text */}
            <div className="text-center max-w-2xl mx-auto mb-3 sm:mb-6 lg:mb-8 space-y-1 sm:space-y-1.5">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
                CROSS-INDUSTRY DOMAIN EXPERTISE
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Industries We Transform
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#D1D5DB] leading-relaxed">
                We bring targeted technical and data expertise to solve the complex operational and scale challenges of high-demand sectors.
              </p>
            </div>

            {/* 6 Structured Industry Cards: 2-Column on Mobile (3 Rows), 3-Column on lg: */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3.5 lg:gap-4.5">
              {INDUSTRIES_DATA.map((industry, idx) => {
                const IndIcon = industry.icon;
                return (
                  <Link
                    key={idx}
                    href={industry.href}
                    className="group p-2.5 sm:p-4 lg:p-5 rounded-lg sm:rounded-2xl bg-[#0B0B0B] hover:bg-[#FFFFFF] focus-visible:bg-[#FFFFFF] border border-[#262626] hover:border-[#E5E7EB] focus-visible:border-[#E5E7EB] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-xs flex flex-col justify-between h-full outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
                  >
                    <div className="space-y-1.5 sm:space-y-3">
                      <div className="flex items-center justify-between">
                        {/* Icon Container */}
                        <div className="w-6 h-6 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md sm:rounded-xl bg-[#161616] group-hover:bg-[#00BCD4]/10 group-focus-visible:bg-[#00BCD4]/10 border border-[#262626] group-hover:border-[#00BCD4]/30 flex items-center justify-center transition-colors duration-300">
                          <IndIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#00BCD4]" />
                        </div>
                        <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-slate-500 group-hover:text-[#00BCD4] group-focus-visible:text-[#00BCD4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      </div>

                      {/* Title */}
                      <h3 className="text-[11.5px] xs:text-xs sm:text-base lg:text-lg font-bold text-white group-hover:text-[#111111] group-focus-visible:text-[#111111] transition-colors duration-300 tracking-tight line-clamp-1 mt-1 sm:mt-3">
                        {industry.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[10px] xs:text-[10.5px] sm:text-xs lg:text-sm text-[#9CA3AF] group-hover:text-[#4B5563] group-focus-visible:text-[#4B5563] leading-snug line-clamp-2 mt-0.5 sm:mt-1.5 transition-colors duration-300">
                        {industry.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 6: OUR PROCESS — COMPACT WHITE SECTION (#FFFFFF) */}
      {/* ===================================================================== */}
      <section className="py-7 sm:py-8 lg:py-9 bg-[#FFFFFF] border-b border-[#E5E7EB] text-[#111827]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-3 sm:mb-6 lg:mb-8 space-y-1 sm:space-y-1.5">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              HOW WE WORK
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-[#111827] leading-tight">
              A Clear Path From Discovery to Scale.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#56616B] leading-relaxed font-normal">
              Our proven 4-stage delivery methodology ensures rapid velocity, technical rigor, and predictable milestones.
            </p>
          </div>

          {/* 4 Connected Phases: 2x2 Grid on Mobile, 4-Column on Desktop */}
          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-8 sm:top-9 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#00AFC8]/20 via-[#00AFC8]/50 to-[#00AFC8]/20 z-0" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5 lg:gap-5 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-2.5 sm:p-4 lg:p-5 rounded-lg sm:rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#00AFC8] transition-all duration-300 space-y-1.5 sm:space-y-3 group hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Cyan Outlined Circular Step Badge */}
                    <div className="w-6 h-6 sm:w-8.5 sm:h-8.5 lg:w-10 lg:h-10 rounded-full border-2 border-[#00AFC8] bg-[#FFFFFF] flex items-center justify-center text-[10px] sm:text-xs lg:text-sm font-mono font-extrabold text-[#00AFC8] group-hover:bg-[#00AFC8]/10 transition-colors shadow-xs">
                      {step.step}
                    </div>

                    <h3 className="text-[11.5px] xs:text-xs sm:text-base lg:text-lg font-bold text-[#111827] group-hover:text-[#00AFC8] transition-colors tracking-tight line-clamp-1 mt-1 sm:mt-2.5">
                      {step.title}
                    </h3>

                    <p className="text-[10px] xs:text-[10.5px] sm:text-xs lg:text-sm text-[#56616B] leading-snug font-normal line-clamp-2 sm:line-clamp-none mt-0.5 sm:mt-1.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================================== */}
      {/* SECTION 8: FAQ SECTION — COMPACT WHITE BACKGROUND (#FFFFFF) */}
      {/* ===================================================================== */}
      <section className="py-7 sm:py-8 lg:py-9.5 bg-[#FFFFFF] relative text-[#111827] border-b border-[#E5E7EB]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
                FAQS
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-[#111827] leading-tight">
                Got Questions? We&apos;ve Got Answers.
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#56616B] leading-relaxed font-normal">
                Find quick answers to common questions about our technical capabilities, engagement models, and delivery timelines.
              </p>

              <div className="pt-0.5 sm:pt-1.5">
                <div className="p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] space-y-0.5 sm:space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827]">Have a custom inquiry?</h4>
                  <p className="text-[10.5px] sm:text-xs md:text-sm text-[#56616B]">
                    Reach us out so we can build solutions to drive customers.{" "}
                    <a href="mailto:hello@codeplaced.com" className="text-[#00AFC8] hover:underline font-semibold">
                      hello@codeplaced.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Accordion with Clean Dividers & Cyan Active State) */}
            <div className="lg:col-span-7 space-y-1.5 sm:space-y-2.5">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-lg sm:rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] overflow-hidden transition-all duration-200 hover:border-[#00AFC8]/60"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-2.5 px-3 sm:p-3.5 lg:p-4 text-left flex items-center justify-between gap-2.5 cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm md:text-base font-bold text-[#111827] hover:text-[#00AFC8] transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <div className="w-5.5 h-5.5 sm:w-7 sm:h-7 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center shrink-0 text-[#00AFC8]">
                        {isOpen ? <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                          <div className="px-3 sm:px-4 pb-2.5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#E5E7EB]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
