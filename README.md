# Mia-Care Website

> **P4SaMD** — The compliance platform for Software as a Medical Device.

[![Deploy to GitHub Pages](https://github.com/mia-care/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/mia-care/website/actions/workflows/deploy.yml)
[![Live](https://img.shields.io/badge/live-mia--care.github.io%2Fwebsite-blue)](https://mia-care.github.io/website/)

---

## What is Mia-Care?

Mia-Care builds **P4SaMD** (Platform for Software as a Medical Device) — an end-to-end compliance orchestration platform that lets engineering teams build, certify, and maintain regulated medical software without sacrificing development velocity.

Traditional SaMD development treats compliance as a phase that happens *after* engineering. P4SaMD makes it a continuous, automatic output of the way your team already works — from the first commit to the final submission package.

---

## Platform Capabilities

| # | Capability | What it does |
|---|-----------|-------------|
| 01 | **SDLC Workflow Orchestrator** | Connects Git, ALM, and eQMS into a single IEC 62304-compliant workflow. No rip-and-replace. |
| 02 | **Automated Real-time Traceability (ARTT)** | Maps every requirement, risk, code commit, and test automatically. The traceability matrix is always current. |
| 03 | **Documentation Engine** | Continuously assembles DHF, Technical Files, and audit packages from live development data. |
| 04 | **Smart Assistant (Whisper)** | In-workflow regulatory intelligence aligned with MDR, IEC 62304, FDA, and EU AI Act. |
| 05 | **Master AI for Compliance** | EU AI Act Annex IV, GMLP, and FDA PCCP enforcement for AI-enabled SaMD — model logbooks, bias reports, and PCCP change control built in. |
| 06 | **Brownfield Remediator** | Ingests any legacy codebase, runs automated gap analysis, and generates a sprint-ready remediation backlog. |
| 07 | **Secure Software Development** | Continuous SBOM management, CVE scanning, and IEC 81001-5-1 guardrails embedded in the development toolchain. |
| 08 | **Guided Workflows** | Step-by-step compliance guardrails for every developer — no deep regulatory expertise required. |

---

## Use Cases

### Pre-Market Startups & Scaleups — Greenfield SaMD
Build a SaMD from scratch with compliance from the first line of code. Eliminate the 3–6 month documentation sprint before launch. One digital health startup went from zero to a fully compliant MVP in **1 month**, with **zero** manual traceability effort.

### AI-Native SaMD Enterprises — High-Risk AI / CDSS
Ship AI-enabled clinical software across **MDR + EU AI Act + GMLP** from a single platform. Automated model cards, bias assessments, and PCCP change control mean model updates never block a release. Customers have achieved **50% reduction** in time-to-compliance for new AI feature releases.

### MedTech Giants & Life Sciences — Legacy Remediation
Turn regulatory debt into a structured certification path without rebuilding. P4SaMD ingests existing codebases in any language, reconstructs traceability via ARTT, and generates audit-ready documentation. Results include **60% reduction** in remediation effort and **90% reduction** in Technical File generation time.

---

## Regulatory Coverage

```
IEC 62304   ·   ISO 13485   ·   EU MDR 2017/745   ·   ISO 14971
FDA 21 CFR Part 820   ·   IEC 81001-5-1   ·   EU AI Act   ·   GMLP   ·   PCCP
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, static export) |
| UI | React 19, Tailwind CSS v4, shadcn/ui |
| Language | TypeScript |
| Linting / Formatting | [Biome](https://biomejs.dev) |
| Deployment | GitHub Pages (via GitHub Actions) |

---

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000/website](http://localhost:3000/website).

```bash
# Type-check
npm run type-check

# Lint
npm run lint

# Format
npm run format
```

---

## Deployment

Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml):

```
push to main → next build → upload out/ → deploy to GitHub Pages
```

Live at: **https://mia-care.github.io/website/**

The site is a fully static export (`output: 'export'`). No server required.

---

## Project Structure

```
app/                        # Next.js App Router pages
  page.tsx                  # Homepage (/)
  (marketing)/              # Conversion pages — pricing, request-demo
  (platform)/               # Product pages — product, capabilities/[slug], use-cases/[slug]
  (company)/                # Company pages — about-us, careers, newsroom, certifications, sustainability
  (resources)/              # Knowledge hub — blog, competence-center, docs, events, faq
  (legal)/                  # Legal — privacy-policy, cookie-policy

components/
  layout/                   # Global shell — Navbar, Footer, MobileMenu
  common/                   # Reusable across 2+ pages — CtaBanner, ComplianceStrip, PillTag…
  sections/                 # Page-specific sections
    home/                   # Homepage sections — HeroBanner, StatsRow, ProblemSection…
    capability/             # Capability detail — CapabilityHero, FeatureCards…
    use-case/               # Use-case detail — UseCaseHero, CaseStudyBlock…
  ui/                       # shadcn/ui primitives — button, card, badge…

data/                       # TypeScript content files — capabilities, use-cases, nav, site
lib/                        # Utility functions
public/                     # Static assets (fonts, images, robots.txt)

docs/
  content/                  # Copy and information architecture
  design/                   # Visual identity, branding, Styrene fonts
  specs/                    # Technical and feature specifications
```

---

## License

Copyright © Mia-Care. See [LICENSE](LICENSE).
