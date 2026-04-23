const PLACEHOLDER_LOGOS = [
  "MedTech Co",
  "LifeSciences AG",
  "ClinicalAI Inc",
  "DeviceGroup",
  "HealthTech EU",
  "BioSoft GmbH",
];

export function LogoPlaceholder() {
  return (
    <div className="w-full overflow-hidden border-y" style={{ borderColor: "var(--bg-border)" }}>
      <div className="flex items-center gap-12 py-6 px-8 max-w-6xl mx-auto flex-wrap justify-center">
        {PLACEHOLDER_LOGOS.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center h-8 px-4 rounded"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              minWidth: 120,
            }}
          >
            <span
              className="font-semibold text-sm tracking-wide"
              style={{ color: "var(--text-muted)" }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
