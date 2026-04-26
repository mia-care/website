# Changelog

All notable changes to the Mia-Care P4SaMD website are documented here.

---

## [Unreleased] — 2026-04-26

### Added

#### Blog system
- `content/blog/` — 24 Markdown articles covering SaMD compliance, IEC 62304, FHIR, digital health, brownfield remediation, and more
- `lib/blog.ts` — Markdown parser using `gray-matter`, `remark`, and `reading-time`; exposes `getAllPosts`, `getPostBySlug`, `getRelatedPosts`
- `data/authors.ts` — author registry with name, role, and avatar path
- `data/blog-categories.ts` — category taxonomy (Compliance, Technology, Healthcare, etc.)
- `app/(resources)/resources/blog/[slug]/page.tsx` — static dynamic route for individual blog posts
- `components/blog/BlogCard.tsx` — article preview card with cover image, category badge, reading time
- `components/blog/BlogGrid.tsx` — responsive grid layout for blog listing
- `components/blog/RelatedPosts.tsx` — "You may also like" section at the bottom of articles
- `components/blog/TableOfContents.tsx` — floating ToC derived from H2/H3 headings

#### Competence Center
- `data/competence-center.ts` — resource registry (whitepapers, guides, webinars)
- `app/(resources)/resources/competence-center/[slug]/page.tsx` — individual resource detail page
- `components/competence-center/ResourceGrid.tsx` — card grid for downloadable resources
- `components/competence-center/HubSpotForm.tsx` — gated download form via HubSpot embed
- `public/competence-center/` — cover images for competence center resources
- `public/downloads/` — downloadable PDF assets

#### Hero animated mockup
- `components/sections/home/HomepageMockup.tsx` — replaced static SVG image with a fully inline animated SVG dashboard mockup; features staggered row slide-ins, floating metric cards, badge pop-in animations, a shimmer skeleton row, and a pulsing activity dot
- `public/images/mockup/` — mockup image assets

#### Careers section
- `components/sections/careers/JobAccordion.tsx` — expandable job listing accordion
- `app/(company)/careers/page.tsx` — full careers page with open positions and culture section

#### Navigation & layout
- `data/nav.ts` — typed nav structure (`NavItem`, `NavDropdownItem`) with dropdown definitions for Product (8 capabilities), Use Cases, Resources, Company
- `components/layout/Navbar.tsx` — mega-menu desktop navbar with keyboard-accessible dropdowns
- `components/layout/MobileMenu.tsx` — slide-out mobile nav with accordion groups

#### SEO & structured data
- `components/common/JsonLd.tsx` — reusable JSON-LD injector for `Organization`, `WebPage`, `Article` schemas
- `app/sitemap.ts` — expanded sitemap including all blog slugs and competence-center slugs
- `public/robots.txt` — robots directives updated

#### Utility libraries
- `lib/asset.ts` — `basePath()` helper for GitHub Pages static-export compatibility
- `lib/format.ts` — `formatDate`, `formatReadingTime` helpers

#### UI primitives (shadcn/ui)
- `components/ui/badge.tsx`
- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/ui/input.tsx`
- `components/ui/separator.tsx`
- `components/ui/sheet.tsx`

#### New pages — full content
- `app/(company)/about-us/page.tsx` — company story, leadership, values
- `app/(company)/certifications/page.tsx` — ISO 13485, MDR, IEC 62304 certification cards
- `app/(company)/sustainability/page.tsx` — ESG commitments
- `app/(legal)/privacy-policy/page.tsx` — full GDPR-compliant privacy policy
- `app/(legal)/cookie-policy/page.tsx` — cookie categories and consent details

#### Assets
- `public/blog/` — cover images for blog articles
- `public/images/clients/` — client logo images for the logo carousel
- `scripts/migrate.py` — one-off content migration script from the old CMS
- `scripts/redirects.json` — legacy URL redirect map

### Changed

#### Homepage
- `app/page.tsx` — integrated `HomepageMockup`, `ProblemSection`, `StatsRow`, `WhoWeServe`, `UseCasesGrid`, `CtaBanner`
- `components/sections/home/HeroBanner.tsx` — new headline copy, two-CTA layout, `clamp()`-based responsive font sizing

#### Navigation
- `data/nav.ts` — added `COMPLIANCE_STANDARDS` array (15 standards) used in the compliance strip
- Navbar and MobileMenu updated to consume typed `navItems` from `data/nav.ts`

#### Common components
- `components/common/LogoCarousel.tsx` — replaced placeholder with real client logos from `public/images/clients/`
- `components/common/CookieBanner.tsx` — linked to `/cookie-policy`, added Google Consent Mode v2 event dispatch

#### Styles
- `app/globals.css` — added `animate-fade-in-up`, `animate-pulse-dot`, `text-brand-gradient`, `bg-brand-gradient` utilities; CSS custom properties for `--brand-green`, `--text-primary`, `--text-secondary`, `--bg-border-strong`

#### Layout
- `app/layout.tsx` — added `JsonLd` for `Organization` schema, canonical `<link>`, Open Graph meta tags

#### Packages added
- `gray-matter` — YAML front-matter parsing for Markdown blog posts
- `remark` + `remark-html` — Markdown → HTML pipeline
- `reading-time` — estimated reading time for articles
- `lucide-react` — icon set used across UI components
