import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/blocks/home/CtaBanner";
import { CapabilitiesInvolved } from "@/components/blocks/use-case/CapabilitiesInvolved";
import { CaseStudyBlock } from "@/components/blocks/use-case/CaseStudyBlock";
import { UseCaseHero } from "@/components/blocks/use-case/UseCaseHero";
import { getUseCaseBySlug, useCases } from "@/data/use-cases";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) return {};
  return {
    title: uc.seo.title,
    description: uc.seo.description,
  };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) notFound();

  const sections = [
    { label: "The Problem", heading: uc.problem.heading, body: uc.problem.body },
    { label: "The Need", heading: uc.need.heading, body: uc.need.body },
    { label: "The Solution", heading: uc.solution.heading, body: uc.solution.body },
  ];

  return (
    <>
      <UseCaseHero uc={uc} />

      {sections.map((section) => (
        <section key={section.label} className="bg-bg-base py-16 odd:bg-bg-surface">
          <div className="mx-auto max-w-4xl px-6">
            <p className="label-caps mb-4 text-brand-green">{section.label}</p>
            <h2 className="font-display mb-6 text-2xl font-bold text-text-primary md:text-3xl">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.body.split("\n\n").map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-base leading-relaxed text-text-secondary"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CaseStudyBlock uc={uc} />
      <CapabilitiesInvolved uc={uc} />

      <section className="bg-bg-base py-10 text-center">
        <p className="mx-auto max-w-2xl px-6 text-base font-medium text-text-secondary">
          {uc.ctaHeading}
        </p>
      </section>

      <CtaBanner />
    </>
  );
}
