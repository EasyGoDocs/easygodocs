import React from "react";
import { HeroSection } from "@/components/page-components/hero-section";
import AboutUsSection from "@/components/page-components/about-us-section";
import MvpPromoSection from "@/components/page-components/mvp-promo-section";

export default function page() {
  return (
    <>
      <HeroSection />
      <MvpPromoSection />
      <AboutUsSection />
    </>
  );
}
