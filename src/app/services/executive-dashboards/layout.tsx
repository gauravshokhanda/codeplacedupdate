import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analytics & Business Intelligence — Executive Dashboards",
  description:
    "Executive dashboards, KPI architecture, product telemetry, and predictive business intelligence built for fast, confident decision-making.",
};

export default function ExecutiveDashboardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

