import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilityHero } from "@/components/blocks/capability/CapabilityHero";
import { FeatureCards } from "@/components/blocks/capability/FeatureCards";
import { RegulationsList } from "@/components/blocks/capability/RegulationsList";
import { RelatedUseCases } from "@/components/blocks/capability/RelatedUseCases";
import { CtaBanner } from "@/components/blocks/home/CtaBanner";
import { capabilities, getCapabilityBySlug } from "@/data/capabilities";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) return {};
  return {
    title: cap.seo.title,
    description: cap.seo.description,
  };
}

export default async function CapabilityPage({ params }: Props) {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) notFound();

  return (
    <>
      <CapabilityHero cap={cap} />

      <section className="bg-bg-base py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display mb-6 text-2xl font-bold text-text-primary md:text-3xl">
            {cap.whatItDoes.heading}
          </h2>
          <div className="space-y-4">
            {cap.whatItDoes.body.split("\n\n").map((para) => (
              <p key={para.slice(0, 40)} className="text-base leading-relaxed text-text-secondary">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <FeatureCards cap={cap} />
      <RegulationsList cap={cap} />
      <RelatedUseCases cap={cap} />

      <section className="bg-bg-base py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-8 text-lg font-medium text-text-secondary">{cap.ctaHeading}</p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
