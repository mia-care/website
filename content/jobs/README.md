# Gestione delle posizioni aperte — Guida HR

Questa cartella contiene le posizioni lavorative aperte sul sito. Ogni file `.md` corrisponde a un annuncio di lavoro. Non è necessario toccare nessun file di codice: basta modificare, aggiungere o disattivare i file qui dentro.

---

## Come è fatto un file

Ogni file ha due parti:

**1. L'intestazione (frontmatter)** — i metadati del ruolo, racchiusi tra i `---`:

```
---
title: "Nome del ruolo"
type: "Full time"
location: "Milan"
summary: "Una riga di descrizione visibile nella lista."
applyEmail: "info@mia-care.io"
order: 1
published: true
---
```

| Campo | Obbligatorio | Descrizione |
|-------|-------------|-------------|
| `title` | sì | Nome del ruolo (es. "Software Engineer") |
| `type` | sì | Tipo contratto (es. "Full time", "Part time") |
| `location` | sì | Sede (es. "Milan", "Remote") |
| `summary` | sì | Frase breve visibile nella card chiusa |
| `applyEmail` | sì | Email a cui arriveranno le candidature |
| `order` | no | Numero per controllare l'ordine (1 = primo). Default: in fondo |
| `published` | no | `true` = visibile, `false` = nascosto. Default: visibile |

**2. Il corpo del file** — il contenuto dell'annuncio:

```
Paragrafo descrittivo del ruolo (testo libero, senza titolo).

## Nome Sezione
- Voce 1
- Voce 2
- Voce 3

## Altra Sezione
- Voce 1
```

Il testo prima del primo `##` diventa la descrizione del ruolo.
Ogni `##` crea una sezione con la sua lista di voci.

---

## Operazioni comuni

### Aggiungere una nuova posizione

1. Aprire la cartella `content/jobs/` su GitHub
2. Cliccare **Add file → Create new file**
3. Dare un nome al file in formato `nome-ruolo.md` (es. `data-analyst.md`)
4. Copiare il template qui sotto e compilare i campi
5. Cliccare **Commit changes**

**Template:**
```
---
title: "Titolo Ruolo"
type: "Full time"
location: "Milan"
summary: "Una frase che descrive brevemente il ruolo."
applyEmail: "info@mia-care.io"
order: 5
published: true
---

Descrizione del ruolo in testo libero. Spiegare cosa farà la persona, in quale contesto lavora, qual è la missione del ruolo.

## Attività
- Prima attività
- Seconda attività

## Requisiti
- Primo requisito
- Secondo requisito

## We Offer
- Hybrid workplace — 50% smart working, 50% in-office
- Inclusive environment with a strong DE&I commitment
- Training path and access to Mia-Platform learning hub
- Creative and agile work environment
- Team building events and company perks
- Ticket restaurants
- Corporate benefits: gyms, travel, technology, language courses
```

---

### Chiudere una posizione (senza cancellarla)

1. Aprire il file della posizione su GitHub
2. Cliccare l'icona della matita (Edit)
3. Cambiare `published: true` in `published: false`
4. Cliccare **Commit changes**

La posizione sparisce dal sito ma il file rimane disponibile per riaprirla in futuro.

---

### Riaprire una posizione

Stesso procedimento del punto sopra, ma cambiare `published: false` in `published: true`.

---

### Cambiare l'ordine di visualizzazione

Modificare il valore `order` nei file interessati: i ruoli vengono mostrati dal numero più basso al più alto.

Esempio: per far apparire "Data Analyst" prima di "Software Engineer", assegnare `order: 1` al primo e `order: 2` al secondo.

---

### Modificare una posizione esistente

1. Aprire il file su GitHub
2. Cliccare l'icona della matita (Edit)
3. Modificare il testo
4. Cliccare **Commit changes**

---

## Note

- Il nome del file non viene mostrato sul sito — può essere qualsiasi cosa in minuscolo con trattini (es. `senior-developer.md`).
- Le sezioni `##` possono avere qualsiasi nome e possono essere quante si vuole.
- La sezione "We Offer" è opzionale: se non viene inclusa, non appare nell'annuncio.
- Le modifiche sono visibili sul sito dopo alcuni minuti dal commit (tempo di build).
