import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { PillTag } from "@/components/common/PillTag";
import { HubSpotForm } from "@/components/sections/competence-center/HubSpotForm";
import { SITE } from "@/data/site";
import { assetPath } from "@/lib/asset";
import { getAllResources, getResourcePage } from "@/lib/resources";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return getAllResources("it").map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = await getResourcePage(slug, "it");
  if (!resource) return {};
  return {
    title: `${resource.title} | Mia-Care`,
    description: resource.description,
    alternates: {
      canonical: `/it/risorse/${slug}`,
      languages: localeAlternates(`/it/risorse/${slug}`),
    },
  };
}

const TYPE_LABELS: Record<string, string> = {
  whitepaper: "Whitepaper",
  video: "Video",
  guide: "Guida",
  "case-study": "Case Study",
  report: "Report",
};

export default async function ResourcePageIt({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = await getResourcePage(slug, "it");
  if (!resource) notFound();

  const typeLabel = TYPE_LABELS[resource.type] ?? resource.type;
  const isVideo = resource.type === "video";
  const resourceUrl = `${SITE.url}/it/risorse/${resource.slug}`;
  const coverImageUrl = resource.featuredImage ? `${SITE.url}${resource.featuredImage}` : undefined;
  const thankYouUrl = `/it/risorse/${resource.slug}/thank-you`;

  const resourceSchema = isVideo
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: resource.title,
        description: resource.description,
        uploadDate: resource.date,
        url: resourceUrl,
        thumbnailUrl: coverImageUrl,
        publisher: {
          "@type": "Organization",
          "@id": `${SITE.url}/#organization`,
          name: SITE.company.name,
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "DigitalDocument",
        name: resource.title,
        description: resource.description,
        url: resourceUrl,
        image: coverImageUrl,
        publisher: {
          "@type": "Organization",
          "@id": `${SITE.url}/#organization`,
          name: SITE.company.name,
        },
      };

  return (
    <>
      <JsonLd schema={resourceSchema} />
      <Breadcrumb
        items={[{ label: "Risorse", href: "/it/risorse" }, { label: resource.title }]}
        locale="it"
      />
      <section
        className="pt-20 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">{typeLabel}</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em" }}
          >
            {resource.title}
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            {resource.description}
          </p>
        </div>
      </section>

      <section className="py-16" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Cover image + body content */}
            <div className="lg:col-span-2 space-y-6">
              {resource.featuredImage && (
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: "3/4",
                    background: "var(--bg-raised)",
                    border: "1px solid var(--bg-border)",
                  }}
                >
                  <Image
                    src={assetPath(resource.featuredImage)}
                    alt={resource.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              {resource.contentHtml && (
                <div
                  className="prose prose-sm prose-invert max-w-none"
                  style={{ color: "var(--text-secondary)" }}
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown from trusted filesystem
                  dangerouslySetInnerHTML={{ __html: resource.contentHtml }}
                />
              )}
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--bg-border)",
                }}
              >
                <p
                  className="font-display font-bold text-lg mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {isVideo ? "Guarda il video" : "Scarica la risorsa"}
                </p>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                  Compila il modulo per ottenere l'accesso gratuito.
                </p>
                <HubSpotForm
                  portalId={resource.portalId}
                  formId={resource.formId}
                  region={resource.region}
                  redirectUrl={thankYouUrl}
                  locale="it"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner locale="it" />
    </>
  );
}
