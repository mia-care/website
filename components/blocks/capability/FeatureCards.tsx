import type { Capability } from "@/data/capabilities";

export function FeatureCards({ cap }: { cap: Capability }) {
  return (
    <section className="bg-bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
            Key features
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cap.features.map((feat) => (
            <div
              key={feat.title}
              className="relative rounded-xl border border-bg-border bg-bg-base p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-brand-gradient"
                aria-hidden="true"
              />
              <p className="label-caps mb-3 text-brand-green">{feat.label}</p>
              <h3 className="font-display mb-3 text-base font-semibold text-text-primary">
                {feat.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
