# Refactor Recap — 2026-04-23

Riepilogo delle modifiche apportate al codebase rispetto al commit di sync (`1a28306`).

---

## 1. Riorganizzazione delle route — App Router route groups

Le pagine precedentemente piatte sotto `app/` sono state raggruppate in **route groups** (cartelle `(nome)`) per separare i concern logici senza alterare gli URL pubblici.

| Gruppo | Pagine | URL invariato |
|---|---|---|
| `app/(company)/` | about-us, careers, certifications, newsroom, sustainability | `/about-us`, `/careers`, ecc. |
| `app/(legal)/` | cookie-policy, privacy-policy | `/cookie-policy`, `/privacy-policy` |
| `app/(marketing)/` | pricing, request-demo | `/pricing`, `/request-demo` |
| `app/(platform)/` | product, capabilities/[slug], use-cases/[slug] | `/product`, `/capabilities/:slug`, `/use-cases/:slug` |
| `app/(resources)/` | resources/blog, /competence-center, /docs, /events, /faq | `/resources/...` |

Tutti gli import interni nelle page files sono stati aggiornati di conseguenza.

---

## 2. Riorganizzazione dei componenti

La struttura `components/blocks/` (flat, con sottocartelle eterogenee) è stata sostituita con tre livelli semantici:

```
components/
  layout/       ← elementi strutturali globali (Navbar, Footer, MobileMenu)
  common/       ← elementi riutilizzabili su più pagine
  sections/     ← sezioni specifiche per pagina
    home/
    capability/
    use-case/
```

### Spostamenti notevoli

| Origine | Destinazione | Note |
|---|---|---|
| `blocks/layout/*` | `layout/` | Nessuna modifica al codice |
| `blocks/shared/PillTag`, `GradientText`, `HelixSvg`, `HubSpotForm`, `CookieBanner`, `PlaceholderPage` | `common/` | Nessuna modifica al codice |
| `blocks/home/CapabilitiesGrid`, `ComplianceStrip`, `CtaBanner` | `common/` | Promossi a `common/` perché usati anche fuori dalla home |
| `blocks/home/HeroBanner`, `ProblemSection`, `StatsRow`, `UseCasesGrid`, `WhoWeServe` | `sections/home/` | Sezioni specifiche della home |
| `blocks/capability/*` | `sections/capability/` | Sezioni specifiche delle capability pages |
| `blocks/use-case/*` | `sections/use-case/` | Sezioni specifiche delle use case pages |
| `blocks/shared/LogoPlaceholder.tsx` | `common/LogoCarousel.tsx` | **Rinominato** per riflettere meglio il ruolo |

---

## 3. `app/layout.tsx` — GTM e Consent Mode v2

### GTM ID hardcoded
```ts
// prima
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-XXXXXXX";

// dopo
const GTM_ID = "GTM-5N5DWRS";
```
Il container GTM è stato identificato e non richiede più una variabile d'ambiente.

### Consent Mode v2
È stato aggiunto un blocco `<Script id="consent-defaults" strategy="beforeInteractive">` che imposta le impostazioni di consenso predefinite **prima** del caricamento di GTM:

```js
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
```

Questo garantisce la conformità GDPR/ePrivacy: GTM si avvia ma nessun tag di tracking viene eseguito finché l'utente non acconsente. La logica condizionale `hasGtm()` è stata rimossa (ora GTM è sempre presente).

---

## 4. `app/globals.css` — Refactor strutturale

Il file è stato riorganizzato in **5 sezioni numerate** con commenti separatori standardizzati (`/* ===...=== */`):

1. **Imports** — `@import` directives
2. **Variants** — `@custom-variant`
3. **Fonts** — `@font-face` declarations
4. **Design Tokens** — variabili CSS `:root`, suddivise in sottosezioni (`4a` Backgrounds, `4b` Brand colors, `4c` Testo, `4d` Glow, `4e` Shadcn tokens)
5. **Tailwind Theme** — `@theme inline` bindings

Variazioni minori al contenuto:
- Aggiunta `--glow-cyan: rgba(0,240,240,0.1)` (token mancante nella spec originale)
- `--radius` spostato prima dei `--chart-*` token per raggruppamento logico

---

## 5. `lib/utils.ts` — Costante `BASE_PATH`

```ts
/** Must match `basePath` in next.config.ts */
export const BASE_PATH = "/website";
```

Aggiunta per centralizzare il `basePath` usato nel deployment su GitHub Pages (`/website`). Utilizzata nei componenti che costruiscono URL assoluti per asset (es. logo in `Navbar`).

---

## 6. Riorganizzazione della documentazione

| Prima | Dopo |
|---|---|
| `docs/Branding (2)/` | `docs/design/branding/` |
| `docs/Styrene/` | `docs/design/styrene/` |
| `docs/Mia-Care Visual Identity.pdf` | `docs/design/visual-identity.pdf` |
| `docs/MC - Website Content 2026.md` | `docs/content/website-content-2026.md` |
| `docs/MC - Architettura Informazione 2026.xlsx` | `docs/content/information-architecture-2026.xlsx` |
| `docs/Frontend Stack Validation...md` | `docs/specs/frontend-stack-validation.md` |
| `docs/superpowers/specs/2026-04-22-mia-care-website-design.md` | `docs/specs/2026-04-22-website-design.md` |

La struttura `docs/` ora segue tre aree: `content/` (testi e IA), `design/` (brand assets e font), `specs/` (specifiche tecniche).

---

## File non modificati nel contenuto

I seguenti file hanno subito solo aggiornamenti degli **import path** (da `blocks/...` ai nuovi path) senza modifiche alla logica o al markup:

- Tutte le `page.tsx` nei route groups
- `app/page.tsx` (homepage)
- `app/not-found.tsx`
