import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/common/CapabilitiesGrid";
import { ComplianceStrip } from "@/components/common/ComplianceStrip";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { LogoMarquee } from "@/components/common/LogoCarousel";
import { HeroBanner } from "@/components/sections/home/HeroBanner";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { StatsRow } from "@/components/sections/home/StatsRow";
import { UseCasesGrid } from "@/components/sections/home/UseCasesGrid";
import { WhoWeServe } from "@/components/sections/home/WhoWeServe";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "P4SaMD: Compliant SaMD Development Platform — Mia-Care",
  description:
    "P4SaMD embeds IEC 62304, EU MDR, EU AI Act, and GAMP 5 compliance directly into your SDLC. Build, certify, and evolve regulated medical software up to 3x faster.",
};

const organizationId = `${SITE.url}/#organization`;

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE.company.name,
      url: SITE.url,
      email: SITE.company.email,
      vatID: SITE.company.vat,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Leopardi 8",
        addressLocality: "Milan",
        postalCode: "20123",
        addressCountry: "IT",
      },
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/images/logo/Horizontal_Lockup_Primary.svg`,
      },
      sameAs: [SITE.social.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": organizationId },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd schema={homeSchema} />
      <HeroBanner />
      <LogoMarquee />
      <StatsRow />
      <ProblemSection />
      <CapabilitiesGrid />
      <ComplianceStrip />
      <UseCasesGrid />
      <WhoWeServe />
      <CtaBanner />
    </>
  );
}
