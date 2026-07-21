# Mia-Care Website

The public marketing site for Mia-Care's P4SaMD platform — a statically exported Next.js site covering product, resources, blog, and careers content, published in English and (being restored) Italian.

## Language

**Locale**:
One of the site's two build-time editions — English (default, unprefixed) or Italian (`/it/` prefix). Fixed at build time; the site never detects or switches locale per-request.
_Avoid_: "language" (a locale is a site edition; the human language is just one property of it)

**Translation pair**:
An English page and its Italian counterpart that represent the same underlying content, linked via a pairing key and referenced from each other via hreflang.
_Avoid_: "duplicate", "version"

**Pairing key**:
The stable identifier linking the two halves of a translation pair — the shared filename across `content/blog/` and `content/it/blog/` (or the equivalent file/route position for other content types). Never shown in a URL, never localized.
_Avoid_: "slug" on its own (ambiguous with Localized slug)

**Localized slug**:
The public URL slug for one half of a translation pair, chosen for keyword relevance in that page's own language. Set via frontmatter `slug`; independent of the pairing key and independent of the other half's localized slug.
_Avoid_: "slug" on its own

## Terminology (do not translate)

On Italian pages, regulatory and technical English terms stay in English, even where an official Italian regulatory equivalent exists — the audience (compliance officers, health-tech buyers) already operates in this vocabulary, and substituting the Italian term adds no clarity. This is deliberate, not an untranslated gap to fix.

Examples: SaMD, Software as a Medical Device, EU MDR, IEC 62304, GAMP 5, FHIR, compliance, cloud native, P4SaMD.
_Avoid_: substituting official Italian regulatory terms (e.g. "dispositivo medico" for "Software as a Medical Device") — considered and rejected.
