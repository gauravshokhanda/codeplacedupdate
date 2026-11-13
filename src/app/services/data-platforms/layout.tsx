import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Engineering — Scalable Data Platforms & Pipelines",
  description:
    "Modern lakehouse architectures, automated ETL/ELT pipelines, Snowflake & BigQuery warehouses, and streaming data platforms engineered for scale.",
};

export default function DataPlatformsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

