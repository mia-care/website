export function ProblemSection() {
  return (
    <section className="bg-bg-base py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display mb-6 text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
              The gap between engineering and compliance is costing you.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-text-secondary">
              <p>
                Most organizations still rely on a fragmented "tool soup": Jira or any ALMs for
                tasks, Word for documentation, Excel for traceability, GitHub for code… Every
                handoff between these disconnected systems is a manual, error-prone process that
                costs days and gradually increases audit risk.
              </p>
              <p>
                The result: compliance becomes a last-minute effort rather than an ongoing
                discipline, and product launches slip by months.
              </p>
              <p>
                The hidden cost goes beyond time. It shows up as developer burnout, unexpected
                regulatory rejections, and audit findings that only emerge after inconsistency has
                been building for months.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full rounded-2xl border border-bg-border-strong bg-bg-surface p-8">
              <div
                className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-brand-gradient"
                aria-hidden="true"
              />
              <p className="label-caps mb-6 text-center text-text-muted">The "Tool Soup" Problem</p>
              <div className="grid grid-cols-3 gap-3">
                {["Jira / ALM", "Word Docs", "Excel Sheets", "GitHub", "Email", "QMS"].map(
                  (tool) => (
                    <div
                      key={tool}
                      className="rounded-lg border border-bg-border bg-bg-raised px-3 py-2.5 text-center text-xs font-medium text-text-secondary"
                    >
                      {tool}
                    </div>
                  ),
                )}
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className="rounded-lg border border-brand-green/20 bg-brand-green/6 px-4 py-2.5 text-center text-sm font-semibold text-brand-green">
                  P4SaMD: One Platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
