import { PillTag } from "@/components/common/PillTag";

const SEGMENTS = [
  {
    title: "MedTech Giants",
    description:
      "Enterprise organizations modernizing fragmented legacy software estates into a unified, compliant digital health platform.",
  },
  {
    title: "Life Sciences Enterprises",
    description:
      "Global pharma and biotech companies launching digital companions and Patient Support Programs alongside drug releases.",
  },
  {
    title: "AI-Native Scaleups",
    description:
      "Series B to IPO-stage companies building and continuously improving clinical AI models without sacrificing engineering velocity.",
  },
  {
    title: "Pre-Market Startups",
    description:
      "Seed-to-Series A teams building their Design History File and first regulated product on the path to FDA clearance.",
  },
];

export function WhoWeServe() {
  return (
    <section className="py-24" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <PillTag className="mb-6">Who We Serve</PillTag>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
          >
            Every company carries the weight of regulated software.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEGMENTS.map((seg) => (
            <div
              key={seg.title}
              className="rounded-card p-6"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
              }}
            >
              <h3
                className="font-display font-semibold text-base mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {seg.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {seg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
