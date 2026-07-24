import { LOCALE_PAIRS } from "@/data/locale-pairs";

// Next.js shallow-merges metadata across segments, but replaces nested objects
// (like `alternates`) wholesale rather than merging their keys. Any page that
// sets its own `alternates.canonical` therefore silently drops the root
// layout's `alternates.languages` too. Look up hreflang pairs from the same
// source of truth as the language switcher so every page stays consistent.
export function localeAlternates(
  pathname: string,
): { en: string; it: string; "x-default": string } | undefined {
  const pair = LOCALE_PAIRS.find((p) => p.en === pathname || p.it === pathname);
  if (!pair) return undefined;
  return { en: pair.en, it: pair.it, "x-default": pair.en };
}
