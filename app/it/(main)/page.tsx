import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/common/CapabilitiesGrid";
import { ComplianceStrip } from "@/components/common/ComplianceStrip";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { LogoMarquee } from "@/components/common/LogoCarousel";
import { PlansBanner } from "@/components/common/PlansBanner";
import { HeroBanner } from "@/components/sections/home/HeroBanner";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { SolutionSection } from "@/components/sections/home/SolutionSection";
import { StatsRow } from "@/components/sections/home/StatsRow";
import { UseCasesGrid } from "@/components/sections/home/UseCasesGrid";
import { WhoWeServe } from "@/components/sections/home/WhoWeServe";
import { SITE } from "@/data/site";
import { SITE as SITE_IT } from "@/data/site.it";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "P4SaMD: Piattaforma di Sviluppo SaMD Conforme — Mia-Care" },
  description:
    "P4SaMD integra la conformità a IEC 62304, EU MDR, EU AI Act e GAMP 5 nel tuo SDLC. Costruisci e certifica software medicale fino a 3x più velocemente.",
  alternates: {
    canonical: "/it",
    languages: localeAlternates("/it"),
  },
};

// Same Organization entity as the EN homepage — the @id must stay identical
// across locales so search engines don't treat it as two separate companies.
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
        streetAddress: "Via Imbonati 18, MAC7",
        addressLocality: "Milan",
        postalCode: "20159",
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
      "@id": `${SITE_IT.url}/#website`,
      url: SITE_IT.url,
      name: SITE_IT.name,
      inLanguage: "it",
      publisher: { "@id": organizationId },
    },
  ],
};

export default function HomePageIt() {
  return (
    <>
      {/* Preload LCP image so the browser can fetch it before JS hydration */}
      <link
        rel="preload"
        href="/images/capability-svgs/heroHomepage.svg"
        as="image"
        // @ts-expect-error fetchpriority is valid HTML but not yet in TS types
        fetchpriority="high"
      />
      <JsonLd schema={homeSchema} />
      <HeroBanner locale="it" />
      <LogoMarquee locale="it" />
      <StatsRow locale="it" />
      <ProblemSection locale="it" />
      <SolutionSection locale="it" />
      <CapabilitiesGrid locale="it" />
      <ComplianceStrip locale="it" />
      <UseCasesGrid locale="it" />
      <WhoWeServe locale="it" />
      <PlansBanner locale="it" />
      <CtaBanner locale="it" />
    </>
  );
}
