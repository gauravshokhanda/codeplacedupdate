import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES_DATA, ServiceDetailItem } from "@/lib/servicesData";
import { ServiceDetailClient } from "./ServiceDetailClient";

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | CodePlaced",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | CodePlaced Engineering Services`,
    description: service.positioning,
    openGraph: {
      title: `${service.title} | CodePlaced`,
      description: service.positioning,
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES_DATA.filter((item) => item.slug !== service.slug);

  return <ServiceDetailClient service={service} otherServices={otherServices} />;
}
