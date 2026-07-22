// Explicit EN <-> IT path pairs for static pages that exist in BOTH locales.
// Add a pair here only once the actual page exists on both sides — see
// docs/adr/0001-italian-locale-subdirectory-mirrored-layouts.md and the
// "no link if missing" rule in CONTEXT.md.
export const LOCALE_PAIRS: { en: string; it: string }[] = [
  { en: "/", it: "/it" },
  { en: "/product", it: "/it/prodotto" },
  { en: "/about-us", it: "/it/chi-siamo" },
  { en: "/certifications", it: "/it/certificazioni" },
  { en: "/sustainability", it: "/it/sostenibilita" },
  { en: "/plans", it: "/it/piani" },
  { en: "/request-demo", it: "/it/richiedi-demo" },
  { en: "/privacy-policy", it: "/it/informativa-privacy" },
  { en: "/cookie-policy", it: "/it/informativa-cookie" },
  { en: "/careers", it: "/it/lavora-con-noi" },
  // Capabilities and use cases share the same slug across locales (decision
  // deferred in Batch 1b — see CONTEXT.md); only the /it/ prefix changes.
  { en: "/capabilities/sdlc-orchestrator", it: "/it/capabilities/sdlc-orchestrator" },
  { en: "/capabilities/artt-traceability", it: "/it/capabilities/artt-traceability" },
  { en: "/capabilities/documentation-engine", it: "/it/capabilities/documentation-engine" },
  { en: "/capabilities/smart-assistant", it: "/it/capabilities/smart-assistant" },
  { en: "/capabilities/ai-compliance", it: "/it/capabilities/ai-compliance" },
  { en: "/capabilities/brownfield-remediator", it: "/it/capabilities/brownfield-remediator" },
  { en: "/capabilities/software-development", it: "/it/capabilities/software-development" },
  { en: "/capabilities/guided-workflows", it: "/it/capabilities/guided-workflows" },
  { en: "/use-cases/greenfield-samd", it: "/it/use-cases/greenfield-samd" },
  { en: "/use-cases/high-risk-ai-cdss", it: "/it/use-cases/high-risk-ai-cdss" },
  { en: "/use-cases/legacy-remediation", it: "/it/use-cases/legacy-remediation" },
];

export function getCounterpartPath(pathname: string, target: "en" | "it"): string | null {
  const pair = LOCALE_PAIRS.find((p) => p.en === pathname || p.it === pathname);
  if (!pair) return null;
  return target === "en" ? pair.en : pair.it;
}
