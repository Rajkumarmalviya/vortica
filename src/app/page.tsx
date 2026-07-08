"use client";

import { useEffect } from "react";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import QualitySection from "@/components/sections/QualitySection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustSection from "@/components/sections/TrustSection";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

export default function Home() {
  useEffect(() => {
    trackEvent(AnalyticsEvents.VIEW_HOME);
  }, []);

  return (
    <main className="min-h-screen text-white/75">
      <HeroSection />
      <ServicesSection />
      {/* <WorkPreviewSection /> */}
      <QualitySection />
      <TrustSection />
      <CTASection />
    </main>
  );
}
