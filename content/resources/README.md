# Gestione delle risorse gated — Guida Marketing

Questa cartella contiene le landing page delle risorse gated (whitepaper, video, guide, ecc.). Ogni sottocartella corrisponde a una risorsa e genera automaticamente due pagine sul sito:

- **`/resources/[nome-cartella]`** — la landing page con il form
- **`/resources/[nome-cartella]/thank-you`** — la pagina di ringraziamento dopo la compilazione

Non è necessario toccare nessun file di codice: basta aggiungere o modificare le cartelle qui dentro.

---

## Come è fatta una risorsa

Ogni risorsa è una cartella con due file:

```
content/resources/
  ebook-ai-sanita/
    index.md        ← landing page
    thank-you.md    ← pagina di ringraziamento
```

---

### File `index.md` — Landing page

```
---
title: "Scarica l'Ebook: AI in Sanità"
description: "Scopri come l'AI sta trasformando la sanità digitale. Scarica la guida gratuita."
type: whitepaper
published: true
featuredImage: /images/resources/ebook-ai-sanita.jpg
hubspotEmbed: |
  <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
  <script>
    hbspt.forms.create({
      region: "eu1",
      portalId: "5308597",
      formId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    });
  </script>
---

Testo della landing page. Descrivi la risorsa, il suo valore, e perché l'utente dovrebbe scaricarla.

Puoi usare **grassetto**, _corsivo_, e liste:

- Punto chiave 1
- Punto chiave 2
- Punto chiave 3
```

| Campo | Obbligatorio | Descrizione |
|-------|-------------|-------------|
| `title` | sì | Titolo della pagina (H1) |
| `description` | sì | Descrizione SEO (max 160 caratteri) |
| `type` | sì | Tipo di risorsa: `whitepaper`, `video`, `guide`, `case-study`, `report` |
| `published` | no | `true` = visibile, `false` = nascosto. Default: visibile |
| `featuredImage` | no | Percorso all'immagine hero della pagina |
| `hubspotEmbed` | sì | Snippet di codice copiato da HubSpot (vedi sotto) |

---

### File `thank-you.md` — Pagina di ringraziamento

```
---
title: "Grazie! Il tuo ebook è in arrivo."
message: "Controlla la tua email — ti abbiamo inviato il link per scaricare l'ebook."
downloadUrl: /files/ebook-ai-sanita.pdf
ctaLabel: "Scopri la piattaforma"
ctaUrl: /product
---

Testo aggiuntivo opzionale. Puoi suggerire contenuti correlati o spiegare i prossimi passi.
```

| Campo | Obbligatorio | Descrizione |
|-------|-------------|-------------|
| `title` | sì | Titolo della thank-you page (H1) |
| `message` | sì | Messaggio principale mostrato dopo la compilazione |
| `downloadUrl` | no | Percorso al file da scaricare (PDF, ZIP, ecc.) — mostra un pulsante di download |
| `videoEmbedUrl` | no | URL di embed di un video (YouTube, Vimeo) — mostra il video nella pagina |
| `ctaLabel` | no | Testo del pulsante CTA secondario (es. "Scopri la piattaforma") |
| `ctaUrl` | no | URL del pulsante CTA secondario |

---

## Come ottenere lo snippet HubSpot

1. Accedere a HubSpot → **Marketing → Forms**
2. Aprire il form da usare (o crearne uno nuovo)
3. Cliccare **Actions → Share** (o **Embed**)
4. Copiare lo snippet di codice mostrato
5. Incollarlo nel campo `hubspotEmbed` del file `index.md`, mantenendo il rientro con due spazi

> **Attenzione alla formattazione:** ogni riga dello snippet deve essere rientrata di almeno due spazi rispetto a `hubspotEmbed: |`. Se il rientro manca, il file non viene letto correttamente.

---

## Operazioni comuni

### Aggiungere una nuova risorsa

1. Aprire la cartella `content/resources/` su GitHub
2. Cliccare **Add file → Create new file**
3. Nel campo nome file scrivere: `nome-risorsa/index.md` (GitHub crea automaticamente la sottocartella)
4. Copiare il template di `index.md` qui sotto e compilare i campi
5. Cliccare **Commit changes**
6. Ripetere i passaggi 2–5 per creare `nome-risorsa/thank-you.md`

**Template `index.md`:**
```
---
title: "Titolo della risorsa"
description: "Descrizione SEO della pagina (max 160 caratteri)."
type: whitepaper
published: true
featuredImage: /images/resources/nome-risorsa.jpg
hubspotEmbed: |
  <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
  <script>
    hbspt.forms.create({
      region: "eu1",
      portalId: "5308597",
      formId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    });
  </script>
---

Descrizione della risorsa. Spiega perché vale la pena scaricarla e cosa troverà l'utente.

## Cosa troverai inside

- Punto 1
- Punto 2
- Punto 3
```

**Template `thank-you.md`:**
```
---
title: "Grazie! La tua risorsa è in arrivo."
message: "Controlla la tua email — ti abbiamo inviato il link."
downloadUrl: /files/nome-risorsa.pdf
ctaLabel: "Scopri la piattaforma"
ctaUrl: /product
---
```

---

### Nascondere una risorsa (senza cancellarla)

1. Aprire il file `index.md` della risorsa su GitHub
2. Cliccare l'icona della matita (Edit)
3. Cambiare `published: true` in `published: false`
4. Cliccare **Commit changes**

La risorsa sparisce dal sito e dall'archivio, ma il file rimane disponibile per riabilitarla in futuro.

---

### Modificare una risorsa esistente

1. Aprire il file `index.md` o `thank-you.md` su GitHub
2. Cliccare l'icona della matita (Edit)
3. Modificare i campi desiderati
4. Cliccare **Commit changes**

---

### Aggiornare il form HubSpot

1. Ottenere il nuovo snippet da HubSpot (vedi sezione sopra)
2. Aprire `index.md` della risorsa su GitHub
3. Sostituire il contenuto del campo `hubspotEmbed` con il nuovo snippet
4. Cliccare **Commit changes**

---

## Note

- Il nome della cartella diventa l'URL della risorsa: `ebook-ai-sanita` → `/resources/ebook-ai-sanita`. Usare solo lettere minuscole, numeri e trattini.
- Le modifiche sono visibili sul sito dopo alcuni minuti dal commit (tempo di build).
- La `featuredImage` deve essere caricata nella cartella `public/images/resources/` prima di essere referenziata.
- Se `downloadUrl` non è specificato nella thank-you page, il messaggio invita l'utente a controllare l'email.
- La risorsa appare nell'archivio `/resources` con un filtro per `type` — scegliere il tipo corretto per aiutare gli utenti a trovare i contenuti.
