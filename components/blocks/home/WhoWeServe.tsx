const segments = [
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
    <section className="bg-bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="label-caps mb-3 text-text-muted">Who We Serve</p>
          <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            Every company carries the weight of{" "}
            <span className="text-brand-gradient">regulated software.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((seg) => (
            <div
              key={seg.title}
              className="relative rounded-xl border border-bg-border bg-bg-base p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-brand-gradient"
                aria-hidden="true"
              />
              <h3 className="font-display mb-3 text-base font-semibold text-text-primary">
                {seg.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">{seg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
