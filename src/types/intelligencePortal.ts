/**
 * CodePlaced Intelligence Portal — Typed Data Interfaces & API Contracts
 * Prepared for future Backend AI Analysis Engine and CRM Integration
 */

export interface WebsiteAnalysisSubmission {
  websiteUrl: string;
  industryCategory?: string;
  industry?: string;
  targetMarket?: string;
  competitorCount?: number;
}

export type AnalysisStageId =
  | "validating"
  | "structure"
  | "competitors"
  | "features"
  | "insights";

export interface AnalysisStage {
  id: AnalysisStageId;
  label: string;
  description: string;
  status: "pending" | "in_progress" | "completed" | "error";
}

export interface WebsiteOverviewData {
  domain: string;
  title: string;
  summary: string;
  estimatedHealthScore?: number;
  strengths: string[];
  whatItDoesWell: string[];
  missingElements: string[];
  seoContentGaps: string[];
  uxOpportunities: string[];
  conversionOpportunities: string[];
  isAvailable: boolean;
}

export interface CompetitorData {
  id: string;
  name: string;
  websiteUrl: string;
  domain: string;
  strengths: string[];
  servicePositioning: string;
  websiteExperience: string;
  seoContentPractices: string;
  conversionStrategies: string;
  advantagesComparedWithVisitor: string[];
  isCustomAdded?: boolean;
  isAvailable: boolean;
}

export type ComparisonDimensionKey =
  | "Homepage messaging"
  | "Service presentation"
  | "Lead generation"
  | "Content strategy"
  | "Trust signals"
  | "SEO"
  | "User experience"
  | "Conversion opportunities"
  | "Homepage Messaging"
  | "Service Presentation"
  | "Lead Generation"
  | "Content Strategy"
  | "Trust Signals"
  | "User Experience"
  | "Conversion Opportunities";

export interface ComparisonDimensionRow {
  dimension: ComparisonDimensionKey;
  visitorStatus: "strong" | "moderate" | "gap" | "unavailable";
  visitorDetail: string;
  competitorStatus: "strong" | "moderate" | "gap" | "unavailable";
  competitorDetail: string;
  keyDifferentiator: string;
  impactLevel: "Critical" | "High" | "Moderate";
}

export interface MissingOpportunityData {
  id: string;
  title: string;
  category: string;
  impactLevel: "Critical" | "High" | "Moderate";
  whatIsMissing: string;
  whatCompetitorsDoDifferently: string;
  whyItMatters: string;
  whatCanBeImproved: string;
}

export interface ReportRequestPayload {
  fullName: string;
  email: string;
  marketingConsent: boolean;
  auditReference: string;
  websiteUrl: string;
}

export interface DiscoveryCallBookingPayload {
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  websiteUrl: string;
  briefProjectRequirements: string;
  auditReference: string;
}

export interface ReplaceCompetitorPayload {
  competitorIdToReplace: string;
  customCompetitorUrlOrName: string;
  auditReference: string;
}

