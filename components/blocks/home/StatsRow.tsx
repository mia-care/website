const stats = [
  { value: "3×", label: "Faster Time-To-Market" },
  { value: "50%", label: "Development Cost Reduction" },
  { value: "100%", label: "Compliance" },
  { value: "90%", label: "Less Manual Documentation" },
];

export function StatsRow() {
  return (
    <section className="border-y border-bg-border bg-bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center gap-2 text-center">
              <span className="font-display text-brand-gradient text-4xl font-bold md:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
