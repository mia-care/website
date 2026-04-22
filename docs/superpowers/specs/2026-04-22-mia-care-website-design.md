# Mia-Care P4SaMD Website — Design Spec
**Date:** 2026-04-22  
**Status:** Approved  
**Visual Direction:** Aurora v2 (Cortex-inspired, Mia-Care brand identity)

---

## 1. Visual Language

### Color System

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `#0B0C10` | Main canvas — dark charcoal with blue tint, not pure black |
| `--bg-surface` | `#111318` | Cards, elevated sections |
| `--bg-raised` | `#181A22` | Hover states, tooltips |
| `--bg-border` | `rgba(255,255,255,0.07)` | Default borders |
| `--bg-border-strong` | `rgba(255,255,255,0.12)` | Prominent borders |
| `--green` | `#00F096` | Primary accent, headlines gradient start |
| `--cyan` | `#00F0F0` | Secondary accent, gradient end |
| `--grad` | `linear-gradient(90deg, #00F096, #00F0F0)` | CTA buttons, stat numbers, key highlights |
| `--text-primary` | `#F0F0F2` | Headlines, body |
| `--text-secondary` | `rgba(240,240,242,0.55)` | Subtext, card descriptions |
| `--text-muted` | `rgba(240,240,242,0.30)` | Labels, footer, placeholders |
| `--glow-green` | `rgba(0,240,150,0.12)` | Radial glow in hero / CTA sections |

### Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / H1 | Styrene A | 700 | `clamp(44px, 5.2vw, 72px)`, tracking `-0.035em` |
| H2 section | Styrene A | 700 | `clamp(32px, 4vw, 52px)`, tracking `-0.03em` |
| H3 card | Styrene A | 600 | `14–18px` |
| Body | Styrene B | 400 | `15–17px`, line-height `1.75` |
| Labels / caps | Styrene B | 600 | `10–12px`, tracking `0.1em`, uppercase |
| Nav / UI | Styrene B | 400–600 | `13–14px` |

Fonts loaded from `public/fonts/` via `@font-face` in `globals.css`. No Google Fonts dependency.

### Graphic Elements

- **Double helix SVG** — two sinusoidal paths in `#00F096` and `#00F0F0`, used as decorative overlay in hero and CTA sections at low opacity (`0.06–0.12`)
- **Radial glow** — CSS `radial-gradient` backgrounds in hero and use-cases sections, never full-bleed gradient fills
- **Gradient accent line** — 1–2px `linear-gradient(90deg, var(--green), var(--cyan))` used as top border on elevated cards and CTA section
- **Pill tags** — `background: rgba(0,240,150,0.08)`, `border: 1px solid rgba(0,240,150,0.18)`, `border-radius: 100px`, green text — used for section labels
- **Animated badge dot** — 6px circle, CSS `@keyframes` opacity pulse, used in hero eyebrow badge

---

## 2. Navigation

**Structure (desktop):**
```
Logo | Product · Use Cases · Pricing · Resources · Company | Log in · [Request a Demo →]
```

- Fixed, `height: 64px`, `backdrop-filter: blur(20px)`, `background: rgba(11,12,16,0.75)`
- "Request a Demo" = primary CTA, gradient background, `border-radius: 8px`
- Dropdowns on Product (Overview + 8 Capabilities) and Resources (Competence Center, Blog, Docs, Events, FAQ)
- Mobile: hamburger → full-screen overlay, all links visible

---

## 3. Sitemap & URL Structure

### Static pages (App Router)
```
app/
  page.tsx                                    → /
  request-demo/page.tsx                       → /request-demo
  product/page.tsx                            → /product
  capabilities/[slug]/page.tsx                → /capabilities/:slug
  use-cases/[slug]/page.tsx                   → /use-cases/:slug
  pricing/page.tsx                            → /pricing
  about-us/page.tsx                           → /about-us
  newsroom/page.tsx                           → /newsroom  (placeholder*)
  careers/page.tsx                            → /careers   (placeholder*)
  certifications/page.tsx                     → /certifications (placeholder*)
  sustainability/page.tsx                     → /sustainability (placeholder*)
  resources/
    competence-center/page.tsx               → /resources/competence-center (placeholder*)
    blog/page.tsx                            → /resources/blog (placeholder*)
    docs/page.tsx                            → /resources/docs (placeholder*)
    events/page.tsx                          → /resources/events (placeholder*)
    faq/page.tsx                             → /resources/faq (placeholder*)
  privacy-policy/page.tsx                    → /privacy-policy
  cookie-policy/page.tsx                     → /cookie-policy
  not-found.tsx                              → /404 (custom)
```

### Dynamic slugs (via `generateStaticParams`)

**Capabilities** (`data/capabilities.ts`):
| Slug | Name |
|---|---|
| `sdlc-orchestrator` | SDLC Workflow Orchestrator |
| `artt-traceability` | Automated Real-time Traceability |
| `documentation-engine` | Documentation Engine |
| `smart-assistant` | Smart Assistant (Whisper) |
| `ai-compliance` | Master AI for Compliance |
| `brownfield-remediator` | Brownfield Remediator |
| `software-development` | Secure Software Development |
| `guided-workflows` | Guided Workflows |

**Use Cases** (`data/use-cases.ts`):
| Slug | Name |
|---|---|
| `greenfield-samd` | SaMD Greenfield Development |
| `high-risk-ai-cdss` | Building High-Risk AI Software (CDSS) |
| `legacy-remediation` | Legacy Regulated Software Remediation |

---

## 4. Component Architecture

```
components/
  ui/               ← shadcn/ui source files (Button, Card, Badge, Input, Form,
  │                    Dialog, Table, Sidebar, Tabs, Separator, Sheet)
  blocks/
    layout/
      Navbar.tsx          ← fixed nav with dropdown menus
      Footer.tsx          ← 5-column footer with legal info
      MobileMenu.tsx      ← sheet overlay for mobile
    home/
      HeroBanner.tsx      ← hero with product UI mockup
      StatsRow.tsx        ← 4-column gradient metrics
      ProblemSection.tsx  ← split layout with tool-soup visual
      CapabilitiesGrid.tsx← 4×2 card grid
      UseCasesGrid.tsx    ← 3-column use case cards
      ComplianceStrip.tsx ← compliance tag cloud
      CtaBanner.tsx       ← full-width CTA with gradient border
    capability/
      CapabilityHero.tsx  ← reusable capability page hero
      FeatureCards.tsx    ← key features grid
      RegulationsList.tsx ← standards addressed
      RelatedUseCases.tsx ← 3 related use case cards
    use-case/
      UseCaseHero.tsx     ← reusable use case page hero
      CaseStudyBlock.tsx  ← problem / need / solution / results
      CapabilitiesInvolved.tsx
    shared/
      PillTag.tsx         ← green pill section label
      HelixSvg.tsx        ← reusable double helix decorative SVG
      GradientText.tsx    ← span with brand gradient text
      HubSpotForm.tsx     ← client-side HubSpot embed component
      CookieBanner.tsx    ← cookie consent placeholder
      LogoPlaceholder.tsx ← client logo placeholder strip
```

---

## 5. Data Architecture

Content for dynamic pages lives in typed TypeScript data files — no CMS, no MDX.

```ts
// data/capabilities.ts
export type Capability = {
  slug: string
  code: string          // e.g. "01 — SDLC"
  name: string
  tagline: string
  description: string
  whatItDoes: string
  features: { title: string; label: string; description: string }[]
  regulations: string[]
  relatedUseCases: string[]  // slugs
  seo: { title: string; description: string }
}

// data/use-cases.ts
export type UseCase = {
  slug: string
  segment: string       // target audience
  name: string
  tagline: string
  problem: { heading: string; body: string }
  need: { heading: string; body: string }
  solution: { heading: string; body: string }
  caseStudy: { label: string; quote: string; scope: string[]; results: { metric: string; label: string }[] }
  capabilities: string[]  // slugs
  seo: { title: string; description: string }
}
```

SEO meta titles and descriptions are sourced from `docs/MC - Architettura Informazione 2026.xlsx` (already extracted).

> **Placeholder\* definition:** A page with Navbar + Footer + a hero section containing the page title and a "Coming soon" message styled on-brand. Company sub-pages (About Us, Newsroom, Careers, Certifications, Sustainability) use content extracted from the current mia-care.io. Resource pages are true placeholders with no content yet.

---

## 6. Key Page Designs

### Homepage `/`
1. `<Navbar />`
2. `<HeroBanner />` — badge + H1 gradient + subtext + CTAs + product UI mockup (right) + radial glow
3. Client logo strip (placeholder)
4. `<StatsRow />` — 3× · 50% · 100% · 90%
5. `<ProblemSection />` — split: copy left, tool-soup visual right
6. Compliance badges (scrolling or static)
7. `<CapabilitiesGrid />` — "Eight capabilities. One platform." header + 4×2 grid
8. `<UseCasesGrid />` — 3 use case cards with metrics
9. Who We Serve — 4 audience segment cards
10. `<CtaBanner />` — "Ready to ship compliant software faster?"
11. `<Footer />`

### Capability page `/capabilities/[slug]`
Identical template for all 8:
1. Hero: code + name + tagline + description + pill tag
2. "What it does" — 2-column text section
3. Key features — 4-column card grid
4. Standards addressed — tag list
5. Related use cases — 3 cards
6. CTA banner
7. Footer

### Use Case page `/use-cases/[slug]`
Identical template for all 3:
1. Hero: segment label + name + tagline
2. Problem → Need → Solution — 3 sequential sections
3. Case Study block with results metrics
4. Capabilities involved — card row
5. CTA banner
6. Footer

### Pricing `/pricing`
3-tier model (assumptions):

| Tier | Name | Target | Price | Key inclusions |
|---|---|---|---|---|
| Starter | **Essentials** | Pre-market startups | Contact us | SDLC Orchestrator, ARTT, Guided Workflows, up to 2 projects |
| Growth | **Professional** | Scaleups / Series B+ | Contact us | All 8 capabilities, up to 10 projects, dedicated onboarding |
| Enterprise | **Enterprise** | MedTech / Life Sciences | Custom | Unlimited projects, custom integrations, SLA, dedicated CSM |

All tiers show "Contact us" — no self-serve pricing. CTA on each card links to `/request-demo`.
FAQ section below the pricing table addresses common objections.

### Request a Demo `/request-demo`
- Left column: value props + standards list + social proof (Lorem Ipsum quote)
- Right column: HubSpot form embed (Portal ID `5308597`, Form ID `67e26712-013f-4707-95f6-c46a9bdce0ff`, region `eu1`)
- `HubSpotForm` is a `'use client'` component that loads the HubSpot script via `useEffect`

---

## 7. Integrations & Infrastructure

### HubSpot Form
- Component: `components/blocks/shared/HubSpotForm.tsx` (`'use client'`)
- Loads `//js-eu1.hsforms.net/forms/embed/v2.js` on mount via `useEffect`
- Calls `hbspt.forms.create({ portalId: "5308597", formId: "67e26712-...", region: "eu1" })`

### GTM / Analytics
- `app/layout.tsx` includes `<Script id="gtm" strategy="afterInteractive">` with GTM snippet
- GTM container ID to be provided — placeholder `GTM-XXXXXXX` in `.env.local`
- `CookieBanner` component placeholder — blocks no tags yet, ready for Cookiebot/Osano integration

### Fonts
- `public/fonts/StyreneA-Medium.otf`, `StyreneA-Bold.otf`, `StyreneB-Regular.otf`, `StyreneB-Medium.otf`
- Loaded via `@font-face` in `app/globals.css`
- `next/font/local` not used (OTF files, custom setup)

### SEO Infrastructure
- `app/layout.tsx` exports `metadata` with global defaults
- Each page exports its own `generateMetadata` (or static `metadata`) from `data/` files
- `public/robots.txt` — allow all, reference sitemap
- `public/llms.txt` — site description for AI crawlers
- `app/sitemap.ts` — Next.js `MetadataRoute.Sitemap` auto-generates XML sitemap
- Schema.org JSON-LD on homepage and capability pages (Organization + SoftwareApplication)

### Logo & Assets
- SVG logos in `public/images/logo/` (copied from `docs/Branding (2)/`)
- `Horizontal_Lockup_Primary.svg` used in nav and footer
- `Vertical_Lockup_Primary.svg` used in OG image

---

## 8. Design Tokens → Tailwind Config

```js
// tailwind.config.ts (key mappings)
theme: {
  extend: {
    colors: {
      'brand-green':  '#00F096',
      'brand-cyan':   '#00F0F0',
      'bg-base':      '#0B0C10',
      'bg-surface':   '#111318',
      'bg-raised':    '#181A22',
      'text-primary': '#F0F0F2',
    },
    backgroundImage: {
      'brand-gradient': 'linear-gradient(90deg, #00F096, #00F0F0)',
      'brand-gradient-135': 'linear-gradient(135deg, #00F096, #00F0F0)',
    },
    fontFamily: {
      'styrene-a': ['StyreneA', 'sans-serif'],
      'styrene-b': ['StyreneB', 'sans-serif'],
    },
    borderRadius: {
      'card': '12px',
      'pill': '100px',
    },
  }
}
```

CSS variables defined in `globals.css` are mapped into Tailwind — Tailwind utility classes (`bg-brand-green`, `text-text-primary`, etc.) are the only way to apply styles. No inline styles, no arbitrary values.

---

## 9. Technical Constraints

- **Deployment**: neutral (no Vercel-specific features, no `output: 'export'`)
- **Animations**: CSS/Tailwind only — no Framer Motion, no Lottie
- **Language**: English only — no i18n setup
- **Forms**: HubSpot embed only — no API routes for form submission
- **Images**: Static assets in `public/` — Next.js `<Image>` with `width`/`height` props
- **shadcn/ui**: Source in `components/ui/` — never imported from npm at runtime
- **No CMS**: All content in `data/*.ts` typed files
