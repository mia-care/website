import type { Capability } from "@/data/capabilities";

export function RegulationsList({ cap }: { cap: Capability }) {
  return (
    <section className="bg-bg-base py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-bg-border bg-bg-surface p-10">
          <h2 className="font-display mb-8 text-2xl font-bold text-text-primary md:text-3xl">
            Built to satisfy the standards that matter most to your auditors.
          </h2>
          <div className="flex flex-wrap gap-3">
            {cap.regulations.map((reg) => (
              <span
                key={reg}
                className="rounded-pill border border-bg-border-strong bg-bg-raised px-5 py-2 text-sm font-medium text-text-primary"
              >
                {reg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
