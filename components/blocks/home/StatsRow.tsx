const STATS = [
  { value: "3×", label: "Faster Time-To-Market" },
  { value: "50%", label: "Development Cost Reduction" },
  { value: "100%", label: "Compliance" },
  { value: "90%", label: "Less Manual Documentation" },
];

export function StatsRow() {
  return (
    <section
      className="border-y py-10"
      style={{ borderColor: "var(--bg-border)", background: "var(--bg-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display font-bold text-brand-gradient mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
