# Italian locale via `/it/` subdirectory with mirrored root layouts

The site launched English-only after the 2026 redesign (`docs/specs/2026-04-22-website-design.md:316`), which caused a slow, steady organic traffic decline as the old WordPress site's Italian rankings decayed — legacy `/it/*` URLs were mapped to English-equivalent pages via meta-refresh redirects (`scripts/redirects.json`), not real Italian content. We're restoring an Italian version to recover that traffic.

**Decision**: Italian pages live under a `/it/` subdirectory (`mia-care.io/it/...`), not a subdomain or ccTLD, and are implemented as a second top-level route group with its own root layout (Next.js "multiple root layouts" pattern), mirroring the existing English route groups rather than introducing an `app/[locale]/` dynamic segment.

**Why**:
- Subdirectory keeps all Italian pages under the domain's existing authority and matches the old WordPress URL shape, so the legacy redirect map can finally point at real equivalents instead of English pages or generic hubs. A subdomain would start from zero authority; a ccTLD would fragment the domain entirely — neither fits a single brand serving two language markets from one static-export site on GitHub Pages.
- Mirrored root layouts (moving existing EN route groups under an `(en)` group, adding a sibling `(it)` group) let each locale set its own `<html lang>` correctly in the initial static HTML, with zero change to existing EN URLs (route groups don't affect the URL) — critical since the EN URLs are the asset we're protecting. A single shared layout would need a client-side script to fix `lang` post-mount, which is unreliable for a signal crawlers read from the initial markup. A full `[locale]` segment refactor (moving EN under it too) is the more scalable long-term shape but touches every existing route, which is far riskier for a 2-locale, speed-prioritized effort.

## Considered Options

- Subdomain (`it.mia-care.io`) — rejected: builds domain authority from zero.
- ccTLD (`mia-care.it`) — rejected: fragments authority, fits multi-entity brands, not this case.
- Single root layout + client-side `lang` swap — rejected: unreliable for a crawler-facing signal.
- `app/[locale]/...` covering both locales — rejected for now: more scalable for 3+ languages, but much larger and riskier refactor than the 2-locale need justifies.

## Consequences

- Adding a third language later means adding one more mirrored top-level group (same pattern, not a rewrite) — cheap to extend, not automatically config-driven.
- The static-export/GitHub Pages constraint (no middleware, no server redirects) still applies to the `/it/` tree — locale switching stays a manual link, not automatic Accept-Language detection.
