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
  // Blog posts: EN and IT localized slugs differ on purpose (see CONTEXT.md),
  // so each pair is listed explicitly rather than derived from a shared slug.
  {
    en: "/resources/blog/5-questions-about-fhir-the-new-health-data-interoperability-standard",
    it: "/it/risorse/blog/5-domande-sul-fhir-il-nuovo-standard-di-interoperabilita-nella-sanita",
  },
  {
    en: "/resources/blog/5-remarkable-benefits-of-remote-patient-monitoring",
    it: "/it/risorse/blog/5-benefici-del-monitoraggio-remoto-dei-pazienti",
  },
  {
    en: "/resources/blog/brownfield-assessment-remediation",
    it: "/it/risorse/blog/valutazione-e-bonifica-brownfield-per-software-medicale-legacy",
  },
  {
    en: "/resources/blog/cot-the-operational-exellence-for-italian-health-system",
    it: "/it/risorse/blog/centrali-operative-territoriali-cot-il-futuro-della-sanita-italiana",
  },
  {
    en: "/resources/blog/crud-encryption-protect-the-sharing-of-sensitive-data-in-healthcare",
    it: "/it/risorse/blog/crud-encryption-proteggi-la-condivisione-di-dati-sensibili-in-sanita",
  },
  {
    en: "/resources/blog/digitalize-your-patient-journey-by-leveraging-a-composable-software-suite",
    it: "/it/risorse/blog/digitalizzare-il-patient-journey-sfruttando-una-software-suite-componibile",
  },
  {
    en: "/resources/blog/embracing-the-digital-transformation-with-composable-architectures-and-digital-health-platforms",
    it: "/it/risorse/blog/la-trasformazione-digitale-in-sanita-grazie-ad-architetture-componibili-e-digital-health-platform",
  },
  {
    en: "/resources/blog/enabling-telehealth-platforms-with-cloud-native-technology",
    it: "/it/risorse/blog/sviluppa-piattaforme-digitali-per-la-sanita-con-la-tecnologia-cloud-native",
  },
  {
    en: "/resources/blog/enhance-data-capture-with-structured-information-enabling-fhir-questionnaires",
    it: "/it/risorse/blog/migliorare-lacquisizione-di-dati-sanitari-con-le-informazioni-strutturate-grazie-a-questionari-basati-su-fhir",
  },
  {
    en: "/resources/blog/from-classification-to-compliance-a-comprehensive-guide-for-samd-development",
    it: "/it/risorse/blog/dalla-classificazione-alla-certificazione-guida-completa-per-lo-sviluppo-di-samd",
  },
  {
    en: "/resources/blog/how-to-speed-up-samd-development-with-compliance",
    it: "/it/risorse/blog/come-accelerare-sviluppo-samd-con-conformita",
  },
  {
    en: "/resources/blog/iec-62304-a-comprehensive-faq-guide",
    it: "/it/risorse/blog/iec-62304-una-guida-faq-completa",
  },
  {
    en: "/resources/blog/key-insights-from-digital-innovation-observatories-congress-on-life-science",
    it: "/it/risorse/blog/nuove-tecnologie-digitali-che-rivoluzionano-il-settore-life-science",
  },
  {
    en: "/resources/blog/the-compliance-tax-in-samd-development",
    it: "/it/risorse/blog/compliance-tax-nello-sviluppo-samd",
  },
  {
    en: "/resources/blog/the-power-of-saga-pattern-to-digitalize-healthcare-operations",
    it: "/it/risorse/blog/il-potenziale-del-saga-pattern-per-la-digitalizzazione-delle-operazioni-sanitarie",
  },
  {
    en: "/resources/blog/the-power-of-saga-pattern-to-digitalize-healthcare-operations-2",
    it: "/it/risorse/blog/realta-aumentata-e-piattaforme-cloud-per-la-sanita-4-0",
  },
  {
    en: "/resources/blog/the-rise-of-healthcare-digital-platforms",
    it: "/it/risorse/blog/piattaforme-digitali-in-sanita",
  },
  {
    en: "/resources/blog/the-role-of-artificial-intelligence-in-improving-care-quality",
    it: "/it/risorse/blog/il-ruolo-dellintelligenza-artificiale-in-sanita",
  },
  {
    en: "/resources/blog/the-ultimate-guide-building-a-scalable-telemedicine-app-with-microservices-architecture",
    it: "/it/risorse/blog/la-guida-definitiva-costruire-unapplicazione-di-telemedicina-con-larchitettura-a-microservizi",
  },
  {
    en: "/resources/blog/the-value-of-composable-technology-in-healthcare-watch-the-video",
    it: "/it/risorse/blog/il-valore-dell-adozione-di-architetture-componibili-guarda-il-video",
  },
  {
    en: "/resources/blog/third-party-administrator-how-does-tpa-digitalize-health-operations-in-insurance",
    it: "/it/risorse/blog/third-party-administrator-in-che-modo-i-tpa-digitalizzano-la-gestione-delle-pratiche-sanitarie-nelle-assicurazioni",
  },
  {
    en: "/resources/blog/top-5-upcoming-trends-2026-digital-health",
    it: "/it/risorse/blog/principali-tendenze-2026-digital-health",
  },
  {
    en: "/resources/blog/top-tech-predictions-in-healthcare-for-2024",
    it: "/it/risorse/blog/i-trend-tecnologici-del-2024-nel-settore-sanitario",
  },
  {
    en: "/resources/blog/why-life-science-companies-need-a-digital-platform-now",
    it: "/it/risorse/blog/perche-il-life-science-ha-bisogno-di-una-piattaforma-digitale-componibile",
  },
];

export function getCounterpartPath(pathname: string, target: "en" | "it"): string | null {
  const pair = LOCALE_PAIRS.find((p) => p.en === pathname || p.it === pathname);
  if (!pair) return null;
  return target === "en" ? pair.en : pair.it;
}
