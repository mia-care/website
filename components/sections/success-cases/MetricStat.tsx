// Splits metrics like "-90% documentation time" into a big stat + a caption.
// Metrics without a leading numeric value (e.g. "First certified LLM in Europe")
// fall back to a plain single-line chip.
const STAT_PATTERN = /^([+-]?\d[\d.,]*[a-zA-Z%]{0,3})\s+(.+)$/;

function parseMetric(metric: string): { value: string; label: string } | null {
  const match = metric.match(STAT_PATTERN);
  if (!match) return null;
  return { value: match[1], label: match[2] };
}

export function MetricStat({ metric }: { metric: string }) {
  const parsed = parseMetric(metric);

  if (!parsed) {
    return (
      <div
        className="flex items-center px-5 py-3 rounded-xl"
        style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          {metric}
        </span>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-1 px-5 py-4 rounded-xl min-w-[9rem]"
      style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
    >
      <span
        className="font-display font-bold leading-none"
        style={{
          fontSize: "clamp(22px, 2.2vw, 28px)",
          color: "var(--brand-green)",
          letterSpacing: "-0.02em",
        }}
      >
        {parsed.value}
      </span>
      <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
        {parsed.label}
      </span>
    </div>
  );
}
