---
date: 2026-05-05
scope: Hero section & site-wide layout
---

# Hero section — floating product UI & word repulsion

## What changed

### Hero section (`HeroBanner.tsx`)
- Split layout into two columns on desktop: copy left, product panel right (`lg:flex-row`)
- Added H1 word-level cursor repulsion: each word ("The", "compliance", "bottleneck", "ends", "here.") is an independent `inline-block` span that deflects away from the cursor (radius 130 px, max 22 px, elastic spring-back on leave)
- "ends here." gradient preserved by applying `background-clip: text` + `--brand-gradient` directly on each word span

### Floating product cards (`HeroProductFloating.tsx`) — new file
Four draggable, floating UI cards that mimic the real P4SaMD interface:
1. **StatBar** — 4 KPI counters (Total Req 18, Draft 5, Closed 6, In Progress 7)
2. **RiskRow** — "Incorrect arrhythmia classification leading to missed diagnosis" with MCRISK-001, ALARP / Acceptable / Controlled badges and ⊙2⊙1 risk counter
3. **RequirementRow** — "ID to link patient & ECGs" with version, priority, category and status tags
4. **ComplianceCard** — AI Diagnostic Tool, animated 78% compliance progress bar, Class A / EU MDR tags

Each card:
- Floats via `@keyframes heroFloat` (separate inner div — no CSS conflict with drag transform)
- Is fully draggable via `setPointerCapture` (outer div handles `translate`)
- Fades in on mount via React state + CSS `opacity` transition (no `animation` conflict)

### Fonts (`layout.tsx`)
- Added **Inter** via `next/font/google` (`--font-inter` CSS variable), applied to all product cards to match the Figma design spec

### CSS (`globals.css`)
- Added `@keyframes heroFloat` (translateY 0 → -14 px → 0, 6 s)

### Supporting assets
- `public/images/capability-svgs/heroHomepage.svg` — 908×908 product screenshot (Figma export) used as reference for card content and layout

## Files touched
| File | Change |
|------|--------|
| `components/sections/home/HeroBanner.tsx` | Modified — client component, split layout, word repulsion |
| `components/sections/home/HeroProductFloating.tsx` | New — 4 floating draggable product cards |
| `components/sections/home/HeroProductPreview.tsx` | New — browser-chrome tilt preview (unused, kept for reference) |
| `components/sections/home/CapabilitySwitcher.tsx` | New — tab switcher prototype (unused, kept for reference) |
| `app/layout.tsx` | Modified — Inter font added |
| `app/globals.css` | Modified — heroFloat keyframe |
| `public/images/capability-svgs/heroHomepage.svg` | New — product screenshot asset |
