import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/common/CapabilitiesGrid";
import { ComplianceStrip } from "@/components/common/ComplianceStrip";
import { CtaBanner } from "@/components/common/CtaBanner";
import { LogoPlaceholder } from "@/components/common/LogoCarousel";
import { HeroBanner } from "@/components/sections/home/HeroBanner";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { StatsRow } from "@/components/sections/home/StatsRow";
import { UseCasesGrid } from "@/components/sections/home/UseCasesGrid";
import { WhoWeServe } from "@/components/sections/home/WhoWeServe";

export const metadata: Metadata = {
  title: "P4SaMD: Compliant SaMD Development Platform — Mia-Care",
  description:
    "P4SaMD embeds IEC 62304, EU MDR, EU AI Act, and GAMP 5 compliance directly into your SDLC. Build, certify, and evolve regulated medical software up to 3x faster.",
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <LogoPlaceholder />
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
