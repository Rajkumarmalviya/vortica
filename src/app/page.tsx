"use client";

import { useEffect } from "react";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustSection from "@/components/sections/TrustSection";
import WorkPreviewSection from "@/components/sections/WorkPreviewSection";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

export default function Home() {
  useEffect(() => {
    trackEvent(AnalyticsEvents.VIEW_HOME);
  }, []);

  return (
    <main className="min-h-screen text-[#a1a1aa]">
      <HeroSection />
      <ServicesSection />
      <WorkPreviewSection />
      <TrustSection />
      <CTASection />
    </main>
  );
}
