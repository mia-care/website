import { LOCALE_PAIRS } from "@/data/locale-pairs";

// On GitHub Pages "/it" is also a directory (it holds every other Italian
// page), so a request to "/it" is redirected to "/it/" and "/it/" is the URL
// that actually serves the Italian homepage. hreflang and canonical must point
// at that served URL, otherwise crawlers report "no self-referencing hreflang".
// LOCALE_PAIRS keeps "/it" because the language switcher matches it against
// usePathname(), which returns the path without the trailing slash.
function servedUrl(path: string): string {
  return path === "/it" ? "/it/" : path;
}

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
  return { en: pair.en, it: servedUrl(pair.it), "x-default": pair.en };
}
