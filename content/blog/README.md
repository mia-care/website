# Guida SEO — Blog Mia-Care

Tutto quello che serve sapere per pubblicare o aggiornare un articolo in modo corretto dal punto di vista SEO. Nessuno sviluppatore necessario.

---

## Struttura del file

Ogni articolo è un file `.md` in questa cartella. Il nome del file non ha importanza per l'URL — quello che conta è il campo `slug` nel frontmatter.

```
content/blog/
  nome-del-file.md   ← il nome è libero, usa lo slug per chiarezza
  altro-articolo.md
```

---

## Frontmatter — campo per campo

Il frontmatter è il blocco tra `---` all'inizio del file. Ogni campo è descritto qui sotto.

```yaml
---
title: "Titolo dell'articolo"
slug: "url-dell-articolo"
description: "Descrizione per i motori di ricerca (max 160 caratteri)"
seoTitle: "Titolo SEO alternativo (opzionale)"
date: "2026-04-26"
modified: "2026-04-26"
author: "mia-care"
categories: ["technology-application"]
featuredImage: "/blog/images/nome-immagine.webp"
featuredImageAlt: "Descrizione testuale dell'immagine"
excerpt: "Breve anteprima mostrata nelle card del blog (1-2 frasi)"
---
```

---

### `title`
Il titolo dell'articolo, mostrato come `<h1>` nella pagina. Usato anche come titolo della tab del browser se `seoTitle` non è specificato.

- Lunghezza ideale: **50–70 caratteri**
- Deve essere descrittivo e contenere la parola chiave principale
- Non troncare con `…`

---

### `slug`
L'URL dell'articolo. Esempio: `slug: "iec-62304-compliance-guide"` → `mia-care.io/resources/blog/iec-62304-compliance-guide`

- Solo lettere minuscole, numeri e trattini (`-`)
- Niente spazi, underscore o caratteri speciali
- **Non cambiare mai lo slug dopo la pubblicazione** — romperebbe i link esistenti e danneggerebbe il posizionamento
- Deve riflettere la parola chiave principale

---

### `description`
La meta description: il testo che Google mostra sotto il titolo nei risultati di ricerca. Appare anche quando l'articolo viene condiviso su LinkedIn, Slack, ecc.

- Lunghezza ideale: **120–160 caratteri** (oltre vengono troncati da Google)
- Deve essere un testo completo e leggibile, non una lista di keyword
- Deve includere la parola chiave principale e invitare al clic
- **Non copiare** le prime righe dell'articolo — scrivi qualcosa di specifico

---

### `seoTitle` _(opzionale)_
Titolo alternativo usato solo nei tag `<title>` e Open Graph, non visibile nella pagina. Utile quando il `title` dell'articolo è lungo o non ottimale per la SERP.

- Se non specificato, viene usato `title`
- Lunghezza ideale: **50–60 caratteri**
- Esempio: titolo articolo "5 domande su FHIR: il nuovo standard di interoperabilità sanitaria" → seoTitle "5 domande su FHIR: standard di interoperabilità sanitaria"

---

### `date`
Data di **prima pubblicazione**. Non va mai modificata dopo che l'articolo è online.

- Formato: `"YYYY-MM-DD"` (es. `"2026-04-26"`)
- Usata da Google per determinare la freschezza del contenuto
- Appare nella pagina come data di pubblicazione

---

### `modified` _(opzionale)_
Data dell'**ultimo aggiornamento significativo**. Va aggiunta (o aggiornata) quando si rielabora il contenuto in modo sostanziale: nuove sezioni, dati aggiornati, riscrittura di paragrafi importanti.

- Formato: `"YYYY-MM-DD"`
- **Non aggiornare** per correzioni ortografiche o piccoli ritocchi
- Quando presente, è la data usata nella sitemap XML (Google la usa per decidere quando ri-crawlare)
- Se non presente, Google usa `date`

**Regola pratica**: aggiungi `modified` solo quando diresti a un lettore "questo articolo è stato aggiornato".

---

### `author`
Lo slug dell'autore, definito in `data/authors.ts`. Attualmente disponibile:

| Slug | Nome mostrato |
|------|---------------|
| `mia-care` | Mia-Care Editorial Team |

Per aggiungere un nuovo autore, chiedere a un developer di aggiungere una entry in `data/authors.ts`.

---

### `categories`
Array di una o più categorie. Valori disponibili:

| Slug | Label mostrata |
|------|----------------|
| `technology-application` | Technology Application |
| `industry-key-insights` | Industry Key Insights |
| `composable-technology` | Composable Technology |
| `international-standards` | International Standards |
| `partners-collaboration` | Partners Collaboration |

Esempio con una categoria: `categories: ["international-standards"]`
Esempio con più categorie: `categories: ["technology-application", "international-standards"]`

Per aggiungere nuove categorie, chiedere a un developer di aggiungere una entry in `data/blog-categories.ts`.

---

### `featuredImage`
Percorso dell'immagine di copertina. Il file deve essere caricato in `public/blog/images/`.

- Formato consigliato: **WebP** (miglior rapporto qualità/peso)
- Dimensioni consigliate: **1200×630 px** (funziona sia come copertina articolo che come OG image per i social)
- Il percorso deve iniziare con `/blog/images/`
- Esempio: `featuredImage: "/blog/images/nome-articolo.webp"`

> L'immagine di copertina viene usata automaticamente come **Open Graph image** quando l'articolo viene condiviso su LinkedIn, Twitter/X, Slack, ecc. Vale la pena curarne la qualità visiva.

---

### `featuredImageAlt`
Testo alternativo dell'immagine di copertina. Serve per l'accessibilità e per i motori di ricerca.

- Descrivere cosa c'è nell'immagine in modo concreto
- Non iniziare con "Immagine di…" o "Foto di…"
- Lunghezza ideale: **80–120 caratteri**
- Non deve essere identico al `title`

---

### `excerpt`
Testo di anteprima mostrato nelle card del blog e nella lista articoli. Diverso dalla `description` (quella è per Google, questa è per i lettori del sito).

- Lunghezza ideale: **1-2 frasi**, circa 100-150 caratteri
- Deve invogliare a leggere l'articolo completo

---

## Checklist pubblicazione nuovo articolo

Prima di pubblicare, verificare che:

- [ ] `slug` è in minuscolo con trattini, senza caratteri speciali
- [ ] `title` è tra 50 e 70 caratteri
- [ ] `description` è tra 120 e 160 caratteri e non è troncata con `…`
- [ ] `date` è nel formato `YYYY-MM-DD`
- [ ] `modified` non è presente (si aggiunge solo in caso di aggiornamento futuro)
- [ ] `featuredImage` punta a un file che esiste in `public/blog/images/`
- [ ] `featuredImageAlt` descrive l'immagine in modo specifico
- [ ] `categories` usa uno degli slug della tabella qui sopra
- [ ] Il corpo dell'articolo ha un solo `## Heading 2` principale per sezione (non saltare livelli)

---

## Checklist aggiornamento articolo esistente

Quando si aggiorna un articolo già pubblicato:

- [ ] **Non modificare** `slug` — romperebbe i link esistenti
- [ ] **Non modificare** `date` — è la data di prima pubblicazione
- [ ] **Aggiornare** `modified` con la data odierna se le modifiche sono sostanziali
- [ ] Aggiornare `description` se il focus dell'articolo è cambiato
- [ ] Aggiornare `excerpt` se l'apertura dell'articolo è cambiata

---

## Convenzioni per il contenuto markdown

### Heading
- `# H1` — non usarlo nel corpo, c'è già il `title` del frontmatter
- `## H2` — sezioni principali dell'articolo
- `### H3` — sottosezioni
- Non saltare livelli (es. da H2 direttamente a H4)

### Link interni
Preferire link relativi a pagine del sito dove possibile. Aiutano il crawl budget e il link juice interno:
```markdown
[Scopri le nostre capabilities](/capabilities/sdlc-orchestrator)
```

### Immagini nel corpo dell'articolo
```markdown
![Descrizione alt dell'immagine](/blog/images/nome-immagine.webp)
```
Le immagini nel corpo vanno caricate in `public/blog/images/` come la featured image.
