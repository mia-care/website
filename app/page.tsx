import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/blocks/home/CapabilitiesGrid";
import { ComplianceStrip } from "@/components/blocks/home/ComplianceStrip";
import { CtaBanner } from "@/components/blocks/home/CtaBanner";
import { HeroBanner } from "@/components/blocks/home/HeroBanner";
import { ProblemSection } from "@/components/blocks/home/ProblemSection";
import { StatsRow } from "@/components/blocks/home/StatsRow";
import { UseCasesGrid } from "@/components/blocks/home/UseCasesGrid";
import { WhoWeServe } from "@/components/blocks/home/WhoWeServe";
import { LogoPlaceholder } from "@/components/blocks/shared/LogoPlaceholder";

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
