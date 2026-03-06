"use client";

import { useEffect } from "react";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustSection from "@/components/sections/TrustSection";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

export default function Home() {
  useEffect(() => {
    trackEvent(AnalyticsEvents.VIEW_HOME);
  }, []);

  return (
    <main className="min-h-screen bg-black text-gray-100">
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <CTASection />
    </main>
  );
}
