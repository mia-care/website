import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { PillTag } from "@/components/common/PillTag";
import { PlansBanner } from "@/components/common/PlansBanner";
import { CapabilityHero } from "@/components/sections/capability/CapabilityHero";
import { FeatureCards } from "@/components/sections/capability/FeatureCards";
import { RegulationsList } from "@/components/sections/capability/RegulationsList";
import { RelatedUseCases } from "@/components/sections/capability/RelatedUseCases";
import { capabilities, getCapabilityBySlug } from "@/data/capabilities";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return capabilities.map((cap) => ({ slug: cap.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) return {};
  return {
    title: cap.seo.title,
    description: cap.seo.description,
    openGraph: {
      title: cap.seo.title,
      description: cap.seo.description,
    },
  };
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) notFound();

  const capabilitySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cap.name,
    description: cap.description,
    url: `${SITE.url}/capabilities/${cap.slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.company.name,
    },
  };

  return (
    <>
      <JsonLd schema={capabilitySchema} />
      <CapabilityHero cap={cap} />

      {/* What it does */}
      <section
        className="py-20"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">What It Does</PillTag>
          <h2
            className="font-display font-bold mb-6"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
          >
            {cap.whatItDoes.heading}
          </h2>
          <div
            className="space-y-4 text-base"
            style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
          >
            {cap.whatItDoes.body.split("\n\n").map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <FeatureCards cap={cap} />
      <RegulationsList cap={cap} />
      <RelatedUseCases cap={cap} />
      <PlansBanner />
      <CtaBanner />
    </>
  );
}
