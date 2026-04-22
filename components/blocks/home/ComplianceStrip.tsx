const standards = [
  "EU MDR 2017/745",
  "IVDR 2017/746",
  "FDA",
  "ISO 13485",
  "ISO 14971",
  "21 CFR Part 820",
  "IEC 62304",
  "IEC 82304-1",
  "IEC 62366-1",
  "IEC 81001-5-1",
  "EU AI Act",
  "GMLP",
  "PCCP",
  "GDPR",
  "HIPAA",
];

export function ComplianceStrip() {
  return (
    <section className="bg-bg-base py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="label-caps mb-8 text-center text-text-muted">Compliant with</p>
        <div className="flex flex-wrap justify-center gap-3">
          {standards.map((standard) => (
            <span
              key={standard}
              className="rounded-pill border border-bg-border bg-bg-surface px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-brand-green/30 hover:text-text-primary"
            >
              {standard}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
