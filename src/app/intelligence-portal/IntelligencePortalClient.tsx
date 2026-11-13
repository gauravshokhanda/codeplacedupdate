"use client";

import React, { useState, useRef } from "react";
import { PortalHero } from "@/components/intelligence-portal/PortalHero";
import { AnalysisForm } from "@/components/intelligence-portal/AnalysisForm";
import { AnalysisProgressView } from "@/components/intelligence-portal/AnalysisProgressView";
import { ComparisonDashboard } from "@/components/intelligence-portal/ComparisonDashboard";
import { ComparisonTable } from "@/components/intelligence-portal/ComparisonTable";
import { MissingOpportunitiesSection } from "@/components/intelligence-portal/MissingOpportunitiesSection";
import { ConversionOptionsSection } from "@/components/intelligence-portal/ConversionOptionsSection";

import {
  WebsiteAnalysisSubmission,
  CompetitorData,
  WebsiteOverviewData,
} from "@/types/intelligencePortal";

import {
  SAMPLE_VISITOR_OVERVIEW,
  SAMPLE_COMPETITORS,
  SAMPLE_COMPARISON_ROWS,
  SAMPLE_MISSING_OPPORTUNITIES,
} from "@/lib/intelligencePortalSampleData";

export function IntelligencePortalClient() {
  const formRef = useRef<HTMLDivElement>(null);

  // Portal State
  const [status, setStatus] = useState<"idle" | "analyzing" | "completed">("idle");
  const [isSampleActive, setIsSampleActive] = useState(true);
  const [submittedUrl, setSubmittedUrl] = useState("https://yourwebsite.com");
  const [auditReference, setAuditReference] = useState("CP-AUDIT-2026");

  // Data states
  const [overview, setOverview] = useState<WebsiteOverviewData>(SAMPLE_VISITOR_OVERVIEW);
  const [competitors, setCompetitors] = useState<CompetitorData[]>(SAMPLE_COMPETITORS);

  // Smooth scroll to form when clicking "Analyze My Website"
  const handleScrollToForm = () => {
    const el = document.getElementById("analyze-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Submission handler
  const handleFormSubmit = (data: WebsiteAnalysisSubmission) => {
    setSubmittedUrl(data.websiteUrl);
    const cleanDomain = data.websiteUrl
      .replace(/^https?:\/\//i, "")
      .replace(/\/.*$/, "");
    const generatedRef = `CP-${Math.floor(1000 + Math.random() * 9000)}-${cleanDomain
      .slice(0, 4)
      .toUpperCase()}`;
    setAuditReference(generatedRef);

    // Enter progress simulation
    setStatus("analyzing");
    setIsSampleActive(false);

    // Scroll to progress
    const el = document.getElementById("analysis-progress");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Called when progress animation completes
  const handleProgressComplete = () => {
    setStatus("completed");
    const domainName = submittedUrl
      .replace(/^https?:\/\//i, "")
      .replace(/\/.*$/, "");

    setOverview({
      ...SAMPLE_VISITOR_OVERVIEW,
      domain: domainName,
      title: `${domainName} — Competitive Analysis Audit`,
    });
    setCompetitors(SAMPLE_COMPETITORS);
    setIsSampleActive(true);

    // Scroll to dashboard
    setTimeout(() => {
      const el = document.getElementById("benchmark-results");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  // Cancel analysis
  const handleProgressCancel = () => {
    setStatus("idle");
  };

  // Reset or reload sample template
  const handleLoadSampleTemplate = () => {
    setSubmittedUrl("https://yourwebsite.com");
    setAuditReference("CP-AUDIT-2026");
    setOverview(SAMPLE_VISITOR_OVERVIEW);
    setCompetitors(SAMPLE_COMPETITORS);
    setIsSampleActive(true);
    setStatus("idle");

    // Scroll to dashboard
    const el = document.getElementById("benchmark-results");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handler for replacing a competitor card
  const handleReplaceCompetitor = (
    competitorId: string,
    newDomainOrName: string
  ) => {
    const cleanDomain = newDomainOrName
      .replace(/^https?:\/\//i, "")
      .replace(/\/.*$/, "");

    setCompetitors((prev) =>
      prev.map((c) => {
        if (c.id === competitorId) {
          return {
            ...c,
            name: newDomainOrName.includes(".")
              ? cleanDomain
                  .split(".")[0]
                  .charAt(0)
                  .toUpperCase() + cleanDomain.split(".")[0].slice(1)
              : newDomainOrName,
            domain: cleanDomain,
            websiteUrl: newDomainOrName.startsWith("http")
              ? newDomainOrName
              : `https://${cleanDomain}`,
            isCustomAdded: true,
          };
        }
        return c;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#00D5E5] selection:text-black">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — BLACK BACKGROUND (#000000)                              */}
      {/* ========================================================================= */}
      <PortalHero
        onAnalyzeClick={handleScrollToForm}
        onSeeHowItWorksClick={handleScrollToForm}
      />

      {/* ========================================================================= */}
      {/* 2. COMPETITIVE BENCHMARK FORM — WHITE BACKGROUND (#FFFFFF)                 */}
      {/* ========================================================================= */}
      <div ref={formRef}>
        <AnalysisForm
          onSubmit={handleFormSubmit}
          isLoading={status === "analyzing"}
          onLoadSampleTemplate={handleLoadSampleTemplate}
          isSampleActive={isSampleActive}
        />
      </div>

      {/* Progress State View (when analyzing) */}
      {status === "analyzing" && (
        <div id="analysis-progress" className="w-full bg-[#000000] py-12 border-b border-white/[0.08]">
          <AnalysisProgressView
            websiteUrl={submittedUrl}
            onComplete={handleProgressComplete}
            onCancel={handleProgressCancel}
          />
        </div>
      )}

      {/* Benchmark Results Container */}
      {(status === "completed" || isSampleActive) && (
        <div id="benchmark-results">
          {/* ===================================================================== */}
          {/* 3. WEBSITE COMPARISON DASHBOARD — BLACK BACKGROUND (#000000)          */}
          {/* ===================================================================== */}
          <ComparisonDashboard
            overview={overview}
            competitors={competitors}
            isSampleActive={isSampleActive}
            onReplaceCompetitor={handleReplaceCompetitor}
          />

          {/* ===================================================================== */}
          {/* 4. SIDE-BY-SIDE COMPARISON — WHITE BACKGROUND (#FFFFFF)               */}
          {/* ===================================================================== */}
          <ComparisonTable
            rows={SAMPLE_COMPARISON_ROWS}
            visitorDomain={overview.domain}
          />

          {/* ===================================================================== */}
          {/* 5. WHAT ARE YOU MISSING? — BLACK BACKGROUND (#000000)                 */}
          {/* ===================================================================== */}
          <MissingOpportunitiesSection
            opportunities={SAMPLE_MISSING_OPPORTUNITIES}
          />

          {/* ===================================================================== */}
          {/* 6. TAKE ACTION ON YOUR FINDINGS — WHITE BACKGROUND (#FFFFFF)          */}
          {/* ===================================================================== */}
          <ConversionOptionsSection
            websiteUrl={overview.domain}
            auditReference={auditReference}
          />
        </div>
      )}
    </div>
  );
}
