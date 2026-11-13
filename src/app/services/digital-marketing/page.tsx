import React from "react";
import type { Metadata } from "next";
import { DigitalMarketingClient } from "./DigitalMarketingClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO, AEO, Ads & Analytics | CodePlaced",
  description:
    "Explore CodePlaced digital marketing services including SEO, AEO, Google Ads, Meta Ads, Google Analytics, social media management, and branding.",
  alternates: {
    canonical: "https://codeplaced.com/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />;
}
