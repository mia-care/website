import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { PillTag } from "@/components/common/PillTag";
import { CapabilitiesInvolved } from "@/components/sections/use-case/CapabilitiesInvolved";
import { CaseStudyBlock } from "@/components/sections/use-case/CaseStudyBlock";
import { UseCaseHero } from "@/components/sections/use-case/UseCaseHero";
import { SITE } from "@/data/site";
import { getUseCaseBySlug, useCases } from "@/data/use-cases";

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
    title: uc.seo.title,
    description: uc.seo.description,
    openGraph: {
      title: uc.seo.title,
      description: uc.seo.description,
    },
  };
}

function Section({
  tag,
  heading,
  body,
  bg,
}: {
  tag: string;
  heading: string;
  body: string;
  bg?: string;
}) {
  return (
    <section
      className="py-20"
      style={{ background: bg ?? "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-6">{tag}</PillTag>
        <h2
          className="font-display font-bold mb-6"
          style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-0.025em" }}
        >
          {heading}
        </h2>
        <div
          className="space-y-4 text-base"
          style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
        >
          {body.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) notFound();

  const useCaseSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: uc.name,
    description: uc.seo.description,
    url: `${SITE.url}/use-cases/${uc.slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.company.name,
    },
  };

  return (
    <>
      <JsonLd schema={useCaseSchema} />
      <UseCaseHero uc={uc} />
      <Section
        tag="The Problem"
        heading={uc.problem.heading}
        body={uc.problem.body}
        bg="var(--bg-surface)"
      />
      <Section tag="The Need" heading={uc.need.heading} body={uc.need.body} />
      <Section
        tag="The Solution"
        heading={uc.solution.heading}
        body={uc.solution.body}
        bg="var(--bg-surface)"
      />
      <CaseStudyBlock uc={uc} />
      <CapabilitiesInvolved uc={uc} />
      <CtaBanner />
    </>
  );
}
