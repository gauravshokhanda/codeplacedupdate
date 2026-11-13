import {
  WebsiteOverviewData,
  CompetitorData,
  ComparisonDimensionRow,
  MissingOpportunityData,
} from "@/types/intelligencePortal";

export const SAMPLE_VISITOR_OVERVIEW: WebsiteOverviewData = {
  domain: "yourwebsite.com",
  title: "Modern Solutions for Your Business",
  summary:
    "A clean design with straightforward navigation, but presenting limited service depth, fewer trust signals, and basic lead capture mechanisms.",
  estimatedHealthScore: 72,
  strengths: [
    "Clean design and clear navigation.",
  ],
  whatItDoesWell: [
    "Clean design and clear navigation.",
  ],
  missingElements: [
    "Limited service depth and fewer trust signals.",
  ],
  seoContentGaps: [
    "Limited service page depth and unindexed technical topics.",
  ],
  uxOpportunities: [
    "Add detailed service pages and stronger conversion CTAs.",
  ],
  conversionOpportunities: [
    "Add detailed service pages, case studies and stronger conversion CTAs.",
  ],
  isAvailable: true,
};

export const SAMPLE_COMPETITORS: CompetitorData[] = [
  {
    id: "comp-1",
    name: "Apex Digital",
    domain: "apexdigital.com",
    websiteUrl: "https://apexdigital.com",
    strengths: [
      "Clear service positioning",
      "Multiple conversion points",
      "Strong case study section",
    ],
    servicePositioning: "High-growth digital consulting with outcome-oriented positioning.",
    websiteExperience: "Modern responsive layout with interactive case studies and clear nav.",
    seoContentPractices: "Broad keyword targeting and topical content silos.",
    conversionStrategies: "Multiple strategic CTAs across all primary entry pages.",
    advantagesComparedWithVisitor: [
      "Clear service positioning",
      "Multiple conversion points",
      "Strong case study section",
    ],
    isAvailable: true,
  },
  {
    id: "comp-2",
    name: "Vertex Solutions",
    domain: "vertexsolutions.com",
    websiteUrl: "https://vertexsolutions.com",
    strengths: [
      "Comprehensive service pages",
      "Educational content strategy",
      "Strong trust and social proof",
    ],
    servicePositioning: "Enterprise architectural engineering and consulting services.",
    websiteExperience: "Deep service architecture documentation and whitepaper library.",
    seoContentPractices: "Educational guides ranking for high-intent industry queries.",
    conversionStrategies: "Direct consultation booking and gated architecture guides.",
    advantagesComparedWithVisitor: [
      "Comprehensive service pages",
      "Educational content strategy",
      "Strong trust and social proof",
    ],
    isAvailable: true,
  },
  {
    id: "comp-3",
    name: "Nexora Tech",
    domain: "nexoratech.com",
    websiteUrl: "https://nexoratech.com",
    strengths: [
      "Clear value proposition",
      "Better SEO content coverage",
      "Industry-focused resources",
    ],
    servicePositioning: "SaaS engineering and cloud product acceleration.",
    websiteExperience: "Interactive code demonstrations and clean visual hierarchy.",
    seoContentPractices: "Topical landing pages targeting niche vertical searches.",
    conversionStrategies: "Interactive product demo and rapid project estimation.",
    advantagesComparedWithVisitor: [
      "Clear value proposition",
      "Better SEO content coverage",
      "Industry-focused resources",
    ],
    isAvailable: true,
  },
  {
    id: "comp-4",
    name: "CloudFrame",
    domain: "cloudframe.com",
    websiteUrl: "https://cloudframe.com",
    strengths: [
      "Modern user experience",
      "Detailed solution pages",
      "Lead capture throughout",
    ],
    servicePositioning: "Cloud migration and modernization infrastructure studio.",
    websiteExperience: "Sub-second transitions, interactive diagrams, and dark mode UI.",
    seoContentPractices: "Structured schema and comparison documentation.",
    conversionStrategies: "Contextual sticky lead capture and instant booking.",
    advantagesComparedWithVisitor: [
      "Modern user experience",
      "Detailed solution pages",
      "Lead capture throughout",
    ],
    isAvailable: true,
  },
];

export const SAMPLE_COMPARISON_ROWS: ComparisonDimensionRow[] = [
  {
    dimension: "Homepage Messaging",
    visitorStatus: "moderate",
    visitorDetail: "General positioning",
    competitorStatus: "strong",
    competitorDetail: "Clear, benefit-driven value proposition",
    keyDifferentiator: "Benefit-driven value proposition",
    impactLevel: "High",
  },
  {
    dimension: "Service Presentation",
    visitorStatus: "gap",
    visitorDetail: "Limited service details",
    competitorStatus: "strong",
    competitorDetail: "Dedicated service pages with deeper information",
    keyDifferentiator: "Dedicated in-depth service sub-pages",
    impactLevel: "Critical",
  },
  {
    dimension: "Lead Generation",
    visitorStatus: "gap",
    visitorDetail: "Basic contact form",
    competitorStatus: "strong",
    competitorDetail: "Multiple CTAs (demo, quote, consultation)",
    keyDifferentiator: "Multiple progressive CTAs",
    impactLevel: "Critical",
  },
  {
    dimension: "Content Strategy",
    visitorStatus: "gap",
    visitorDetail: "Limited resources",
    competitorStatus: "strong",
    competitorDetail: "Regular blogs and educational content",
    keyDifferentiator: "Topical authority blogs & guides",
    impactLevel: "Moderate",
  },
  {
    dimension: "Trust Signals",
    visitorStatus: "gap",
    visitorDetail: "Few testimonials",
    competitorStatus: "strong",
    competitorDetail: "Case studies, client logos and detailed reviews",
    keyDifferentiator: "Case studies and verified reviews",
    impactLevel: "High",
  },
  {
    dimension: "SEO",
    visitorStatus: "gap",
    visitorDetail: "Basic optimization",
    competitorStatus: "strong",
    competitorDetail: "Stronger keyword coverage and content depth",
    keyDifferentiator: "Keyword coverage and technical schemas",
    impactLevel: "High",
  },
  {
    dimension: "User Experience",
    visitorStatus: "strong",
    visitorDetail: "Good navigation",
    competitorStatus: "strong",
    competitorDetail: "More engaging and conversion-focused journeys",
    keyDifferentiator: "Conversion-focused user journeys",
    impactLevel: "Moderate",
  },
  {
    dimension: "Conversion Opportunities",
    visitorStatus: "gap",
    visitorDetail: "Some opportunities",
    competitorStatus: "strong",
    competitorDetail: "Clearer CTAs, stronger social proof and service focus",
    keyDifferentiator: "Clear CTAs with social proof",
    impactLevel: "Critical",
  },
];

export const SAMPLE_MISSING_OPPORTUNITIES: MissingOpportunityData[] = [
  {
    id: "opp-1",
    title: "Strengthen Your Service Presentation",
    category: "TOP OPPORTUNITY",
    impactLevel: "Critical",
    whatIsMissing:
      "Your competitors provide dedicated, in-depth service pages that clearly explain their offerings, benefits and industry use cases.",
    whatCompetitorsDoDifferently:
      "Dedicated multi-tier service hubs with clear deliverables, tech stacks, and outcome metrics.",
    whyItMatters:
      "Visitors looking for specific services leave if they cannot quickly confirm technical capabilities and deliverables.",
    whatCanBeImproved:
      "Deploy dedicated in-depth service pages with clear benefit breakdowns, deliverables, and industry use cases.",
  },
  {
    id: "opp-2",
    title: "Add Trust & Credibility",
    category: "Trust & Proof",
    impactLevel: "High",
    whatIsMissing:
      "Include client testimonials, case studies and measurable results.",
    whatCompetitorsDoDifferently:
      "Highlight verified Clutch reviews, client logos, and quantified case study metrics.",
    whyItMatters:
      "Trust signals reduce perceived risk and significantly elevate conversion rates for high-value enterprise prospects.",
    whatCanBeImproved:
      "Include client testimonials, case studies and measurable results.",
  },
  {
    id: "opp-3",
    title: "Improve Content Coverage",
    category: "SEO & Education",
    impactLevel: "High",
    whatIsMissing:
      "Create relevant educational content to build authority and SEO visibility.",
    whatCompetitorsDoDifferently:
      "Publish weekly technical teardowns and topic clusters capturing high-intent search queries.",
    whyItMatters:
      "Educational content establishes domain authority and brings steady organic traffic from prospective buyers.",
    whatCanBeImproved:
      "Create relevant educational content to build authority and SEO visibility.",
  },
  {
    id: "opp-4",
    title: "Enhance Lead Capture",
    category: "Conversion Strategy",
    impactLevel: "High",
    whatIsMissing:
      "Use stronger, well-placed CTAs across key pages.",
    whatCompetitorsDoDifferently:
      "Deploy secondary low-friction conversion paths, interactive estimators, and contextual CTAs.",
    whyItMatters:
      "A single generic contact form loses 70%+ of prospects who aren't ready to immediately submit a full RFP.",
    whatCanBeImproved:
      "Use stronger, well-placed CTAs across key pages.",
  },
];
