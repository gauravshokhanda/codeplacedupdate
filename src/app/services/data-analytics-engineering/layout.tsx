import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analytics & Engineering — Pipelines, Warehouses & BI",
  description:
    "Unify complex enterprise data with automated ETL/ELT pipelines, modern lakehouse warehousing, Power BI & Looker executive dashboards, and predictive analytics.",
};

export default function DataAnalyticsEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

