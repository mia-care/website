import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { LogoMarquee } from "@/components/common/LogoCarousel";
import { CapabilitiesInvolved } from "@/components/sections/use-case/CapabilitiesInvolved";
import { CaseStudyBlock } from "@/components/sections/use-case/CaseStudyBlock";
import { NarrativeStory } from "@/components/sections/use-case/NarrativeStory";
import { OtherUseCases } from "@/components/sections/use-case/OtherUseCases";
import { StickyDemoPill } from "@/components/sections/use-case/StickyDemoPill";
import { UseCaseHero } from "@/components/sections/use-case/UseCaseHero";
import { SITE } from "@/data/site";
import { getUseCaseBySlug, useCases } from "@/data/use-cases.it";

export function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) return {};
  return {
    title: { absolute: uc.seo.title },
    description: uc.seo.description,
    alternates: { canonical: `/it/use-cases/${uc.slug}` },
    openGraph: {
      title: uc.seo.title,
      description: uc.seo.description,
    },
  };
}

export default async function UseCasePageIt({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) notFound();

  const useCaseSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: uc.name,
    description: uc.seo.description,
    url: `${SITE.url}/it/use-cases/${uc.slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.company.name,
    },
  };

  return (
    <>
      <JsonLd schema={useCaseSchema} />
      <Breadcrumb
        locale="it"
        items={[{ label: "Casi d'Uso", href: "/it/#use-cases" }, { label: uc.name }]}
      />
      <UseCaseHero uc={uc} />
      <LogoMarquee locale="it" />
      <NarrativeStory uc={uc} locale="it" />
      <CaseStudyBlock uc={uc} locale="it" />
      <CapabilitiesInvolved uc={uc} locale="it" />
      <OtherUseCases currentSlug={uc.slug} locale="it" />
      <CtaBanner locale="it" />
      <StickyDemoPill locale="it" />
    </>
  );
}
