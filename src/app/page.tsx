import React from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { CreationsGallery } from "@/components/creations-gallery";
import { CustomOrderSection } from "@/components/custom-order-section";
import { MakerSection } from "@/components/maker-section";
import { ProcessSection } from "@/components/process-section";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3E9] text-[#24231F]">
      {/* Sticky / Top Navigation */}
      <SiteHeader />

      {/* Main Page Flow */}
      <main className="flex-1">
        <HeroSection />
        <CreationsGallery />
        <CustomOrderSection />
        <MakerSection />
        <ProcessSection />
        <FinalCta />
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
