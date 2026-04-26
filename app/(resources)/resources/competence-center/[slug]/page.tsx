import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { PillTag } from "@/components/common/PillTag";
import { HubSpotForm } from "@/components/competence-center/HubSpotForm";
import { getResourceBySlug, RESOURCES } from "@/data/competence-center";
import { SITE } from "@/data/site";
import { assetPath } from "@/lib/asset";

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return {
    title: `${resource.title} | Mia-Care`,
    description: resource.description,
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const categoryLabel = resource.category === "video" ? "Video" : "Whitepaper";
  const resourceUrl = `${SITE.url}/resources/competence-center/${resource.slug}`;
  const coverImageUrl = resource.coverImage ? `${SITE.url}${resource.coverImage}` : undefined;

  const resourceSchema =
    resource.category === "video"
      ? {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: resource.title,
          description: resource.description,
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
      <section
        className="pt-20 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">{categoryLabel}</PillTag>
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
            {/* Cover image */}
            <div className="lg:col-span-2">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  background: "var(--bg-raised)",
                  border: "1px solid var(--bg-border)",
                }}
              >
                <Image
                  src={assetPath(resource.coverImage)}
                  alt=""
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
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
                  {resource.category === "video" ? "Watch the video" : "Download the whitepaper"}
                </p>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                  Fill in the form to get free access.
                </p>
                <HubSpotForm
                  portalId={resource.portalId}
                  formId={resource.formId}
                  fileUrl={resource.fileUrl}
                  videoEmbedUrl={resource.videoEmbedUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
