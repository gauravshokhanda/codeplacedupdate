export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  subtext: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  highlights: string[];
}

export interface EngagementStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  image: string;
  challenge: string;
  solution: string;
  impact: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  highlight: string;
  metricsResult: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  capabilities: string[];
  deliverables: string;
  badge: string;
}

export interface TechCategory {
  id: string;
  name: string;
  description: string;
  tools: {
    name: string;
    description: string;
    level: string;
    icon: string;
  }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  useCase: string;
  impactStat: string;
  compliance?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  content: string[];
  coverGradient: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface AuditFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  projectScope: string[];
  timeline: string;
  budget: string;
  message: string;
}
