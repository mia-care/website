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
];

export function getCounterpartPath(pathname: string, target: "en" | "it"): string | null {
  const pair = LOCALE_PAIRS.find((p) => p.en === pathname || p.it === pathname);
  if (!pair) return null;
  return target === "en" ? pair.en : pair.it;
}
