import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart3,
  Calendar,
  Zap,
  ArrowLeft,
  Server,
  Cloud,
  Lock,
  Database,
  Users,
  Quote,
  Check,
  Search,
  SlidersHorizontal,
  Target,
} from "lucide-react";
import { CASE_STUDIES_DATA, CaseStudyItem } from "@/lib/caseStudiesData";

export async function generateStaticParams() {
  return CASE_STUDIES_DATA.map((study) => ({
    slug: study.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  // 3 Related Case Studies (excluding current)
  const relatedStudies = CASE_STUDIES_DATA.filter((item) => item.slug !== study.slug).slice(0, 3);

  return (
    <div className="text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white font-sans min-h-screen relative">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-white/40 overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] pointer-events-none -z-0">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(19,191,234,0.14), rgba(11,79,108,0.05), transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Breadcrumbs & Back Link */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0f4c81] hover:text-[#00b7c2] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies</span>
            </Link>

            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20">
              {study.industry}
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="max-w-4xl space-y-4">
            <h1 className="text-[34px] sm:text-[48px] lg:text-[56px] font-[800] leading-[1.1] tracking-[-0.03em] text-[#082F49]">
              {study.title}
            </h1>
            <p className="text-lg sm:text-2xl text-slate-600 font-medium leading-relaxed">
              {study.tagline}
            </p>
          </div>

          {/* Key Outcome Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 max-w-4xl">
            {study.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-[22px] glass-panel-card shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#0f4c81] tracking-tight mb-1">
                  {m.value}
                </div>
                <div className="text-sm font-extrabold text-[#082F49] mb-0.5">
                  {m.label}
                </div>
                {m.detail && (
                  <div className="text-xs text-slate-500 font-medium">{m.detail}</div>
                )}
              </div>
            ))}
          </div>

          {/* Large Hero Visual Showcase */}
          <div className="mt-12 rounded-[32px] overflow-hidden card-shadow-subtle border-4 border-white bg-slate-900 h-[380px] sm:h-[500px] lg:h-[600px] relative">
            <img
              src={study.heroImage}
              alt={study.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white flex items-end justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#13BFEA] block mb-1">
                  ENTERPRISE DEPLOYMENT
                </span>
                <p className="text-xl sm:text-2xl font-bold">{study.clientType}</p>
              </div>

              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-bold text-cyan-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Production Audited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROJECT OVERVIEW, SCOPE & CHALLENGES */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-white/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Problem Statement & Goals */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20">
                  <Target className="w-3.5 h-3.5 text-[#00b7c2]" />
                  <span>PROJECT OVERVIEW</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082F49] tracking-tight">
                  The Problem & Business Context
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {study.problemStatement}
                </p>
              </div>

              {/* Business Goals */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xl font-bold text-[#082F49]">Core Business Goals</h3>
                <div className="space-y-3">
                  {study.businessGoals.map((goal, gIdx) => (
                    <div key={gIdx} className="flex items-start gap-3.5 p-4 rounded-2xl glass-panel-card shadow-xs">
                      <div className="w-6 h-6 rounded-full bg-[#ECFEFF] text-[#0f4c81] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                        {goal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Scope */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xl font-bold text-[#082F49]">Project Scope & Deliverables</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.projectScope.map((scope, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-2xl glass-panel-card shadow-xs text-sm text-slate-700 font-medium flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#00b7c2] mt-1.5 flex-shrink-0" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Key Challenges Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-[28px] bg-gradient-to-br from-[#082F49] to-[#041E2A] text-white space-y-6 shadow-xl border border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                  <span>CRITICAL CHALLENGES</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  Engineering Hurdles We Overcame
                </h3>

                <div className="space-y-4">
                  {study.challenges.map((challenge, cIdx) => (
                    <div key={cIdx} className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 text-sm text-slate-200 leading-relaxed flex items-start gap-3">
                      <span className="text-xs font-extrabold text-cyan-300 bg-white/10 px-2 py-0.5 rounded-md mt-0.5 flex-shrink-0">
                        0{cIdx + 1}
                      </span>
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Sprint Cycle: Fixed 2–4 Weeks</span>
                  <span className="text-emerald-400 font-bold">100% Resolved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SOLUTION & ARCHITECTURE */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-white/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20">
              <Cpu className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>THE ENGINEERING SOLUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082F49] tracking-tight">
              Architecture & Technical Execution
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {study.solution}
            </p>
          </div>

          {/* Solution Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.solutionHighlights.map((highlight, hIdx) => (
              <div
                key={hIdx}
                className="p-8 rounded-[24px] glass-panel-card shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#ECFEFF] text-[#0f4c81] flex items-center justify-center font-black text-lg">
                  0{hIdx + 1}
                </div>
                <h4 className="text-lg font-bold text-[#082F49] leading-snug">
                  {highlight}
                </h4>
                <div className="pt-3 border-t border-slate-200/60 text-xs font-bold text-[#00b7c2] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Production Validated</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack Grid */}
          <div className="p-8 sm:p-10 rounded-[28px] glass-panel-card shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0f4c81] block mb-1">
                  TECHNOLOGY BLUEPRINT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#082F49]">
                  Technologies & Frameworks Deployed
                </h3>
              </div>
              <span className="text-xs font-bold text-[#0f4c81] bg-[#ECFEFF] border border-[#00b7c2]/20 px-3 py-1 rounded-full w-fit">
                Enterprise Certified Stack
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {study.technologies.map((tech, tIdx) => (
                <div
                  key={tIdx}
                  className="px-5 py-3 rounded-xl bg-white/70 border border-slate-200/90 text-sm font-extrabold text-[#082F49] hover:border-[#00b7c2]/40 transition-colors shadow-2xs"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DELIVERY PROCESS (6-Step Roadmap) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-white/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20">
              <Zap className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>THE DELIVERY BLUEPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082F49] tracking-tight">
              How We Delivered This Solution
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A disciplined, milestone-driven 6-step engineering methodology that guaranteed reliable code and fixed timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {study.process.map((step, idx) => (
              <div
                key={step.step}
                className="p-6 rounded-[22px] glass-panel-card shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-xs font-black text-[#00b7c2] tracking-wider block mb-2">
                    STEP {step.step}
                  </span>
                  <h4 className="text-base font-extrabold text-[#082F49] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Gate Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VISUAL GALLERY & SYSTEM SCREENSHOTS */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-white/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20">
              <BarChart3 className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>VISUAL GALLERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082F49] tracking-tight">
              Interface & Architecture Gallery
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              High-concurrency user interfaces, executive command centers, and automated telemetry dashboards built for this implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.galleryImages.map((imgUrl, gIdx) => (
              <div
                key={gIdx}
                className="rounded-[24px] overflow-hidden shadow-lg border-2 border-white/80 bg-slate-900 h-[280px] sm:h-[340px] relative group"
              >
                <img
                  src={imgUrl}
                  alt={`${study.title} gallery screenshot ${gIdx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                  <span>System Screenshot 0{gIdx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUTCOME RESULTS & BUSINESS IMPACT */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-white/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20">
              <TrendingUp className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>MEASURABLE IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082F49] tracking-tight">
              Quantifiable Business Results
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {study.businessImpact}
            </p>
          </div>

          {/* 4 Outcome Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.results.map((res, rIdx) => (
              <div
                key={rIdx}
                className="p-7 sm:p-8 rounded-[24px] glass-panel-card shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    {res.title}
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-[#0f4c81] tracking-tight">
                    {res.value}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-200/80">
                  {res.description}
                </p>
              </div>
            ))}
          </div>

          {/* Executive Testimonial Block */}
          {study.testimonial && (
            <div className="p-8 sm:p-12 rounded-[28px] glass-panel-card border border-[#00b7c2]/30 shadow-md relative overflow-hidden">
              <Quote className="w-16 h-16 text-[#00b7c2]/15 absolute top-6 right-6 pointer-events-none" />
              <div className="max-w-3xl space-y-6 relative z-10">
                <p className="text-lg sm:text-2xl text-[#082F49] font-extrabold leading-relaxed italic">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="text-base font-black text-[#082F49]">
                    {study.testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {study.testimonial.role} • <span className="text-[#0f4c81] font-bold">{study.testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. MORE CASE STUDIES (Explore More Success Stories) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-white/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c81]">
                CONTINUE EXPLORING
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082F49] tracking-tight">
                Explore More Success Stories
              </h2>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0f4c81] hover:text-[#00b7c2] transition-colors"
            >
              <span>View All 6 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Related Large Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedStudies.map((rel) => (
              <Link
                key={rel.slug}
                href={`/case-studies/${rel.slug}`}
                className="rounded-[24px] glass-panel-card shadow-xs overflow-hidden hover:-translate-y-2 hover:border-[#13BFEA]/50 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10),0_30px_70px_rgba(15,23,42,0.08)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#0f4c81] shadow-xs">
                        {rel.industry}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-bold text-cyan-300 block mb-0.5">
                        {rel.metrics[0].value}
                      </span>
                      <h4 className="text-base font-bold line-clamp-1">{rel.title}</h4>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#0f4c81] group-hover:text-[#00b7c2] transition-colors">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL STRATEGY CTA */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#082F49] to-[#041E2A] text-white text-center relative overflow-hidden border-t border-white/10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none -z-0"
          style={{
            background: "radial-gradient(circle at center, rgba(0,183,194,0.18), transparent 70%)",
          }}
        />

        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ready To Create Your Next Success Story?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Speak directly with our technical leadership to scope your next initiative with fixed milestones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-[#38BDF8] hover:bg-[#0284C7] text-[#082F49] hover:text-white font-extrabold text-[15px] transition-all duration-300 shadow-xl shadow-[#38BDF8]/20 flex items-center justify-center gap-2.5 active:scale-95 group"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-[15px] border border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Capabilities</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>30-Min Strategy Call</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Bilateral NDA Upfront</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Senior Engineers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
