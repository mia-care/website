import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/common/CapabilitiesGrid";
import { ComplianceStrip } from "@/components/common/ComplianceStrip";
import { CtaBanner } from "@/components/common/CtaBanner";
import { LogoMarquee } from "@/components/common/LogoCarousel";
import { HeroBanner } from "@/components/sections/home/HeroBanner";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { StatsRow } from "@/components/sections/home/StatsRow";
import { UseCasesGrid } from "@/components/sections/home/UseCasesGrid";
import { WhoWeServe } from "@/components/sections/home/WhoWeServe";
import { LightThemeApplier } from "./LightThemeApplier";

export const metadata: Metadata = {
  title: "Light Theme PoC — Mia-Care",
  robots: { index: false, follow: false },
};

export default function LightPage() {
  return (
    <>
      <LightThemeApplier />
      <HeroBanner />
      <LogoMarquee />
      <StatsRow />
      <ProblemSection />
      <ComplianceStrip />
      <CapabilitiesGrid />
      <UseCasesGrid />
      <WhoWeServe />
      <CtaBanner />
    </>
  );
}
