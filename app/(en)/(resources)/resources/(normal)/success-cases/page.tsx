import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";
import { SuccessCaseCard } from "@/components/sections/success-cases/SuccessCaseCard";
import { localeAlternates } from "@/lib/seo";
import { getAllSuccessCases } from "@/lib/success-cases";

export const metadata: Metadata = {
  title: { absolute: "Success Cases | Mia-Care" },
  description:
    "Discover how healthcare organizations use Mia-Care to build compliant, high-quality medical software — faster.",
  alternates: {
    canonical: "/resources/success-cases",
    languages: localeAlternates("/resources/success-cases"),
  },
};

export default function SuccessCasesPage() {
  const cases = getAllSuccessCases();

  return (
    <>
      <section
        className="pt-20 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">Success Cases</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            Real teams. Certified software. Proven results.
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            See how healthcare organizations use Mia-Care to ship compliant medical software faster,
            with fewer risks and less overhead.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {cases.length === 0 ? (
            <p className="text-center py-24" style={{ color: "var(--text-secondary)" }}>
              No success cases published yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((item) => (
                <SuccessCaseCard key={item.slug} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
