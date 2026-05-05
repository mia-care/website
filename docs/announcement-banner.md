# Announcement Banner

Striscia di comunicazione non invasiva che appare sopra la navbar. Si nasconde allo scroll e può essere chiusa dall'utente (riappare dopo 15 giorni).

## Come si gestisce

Il file di configurazione è **`data/announcement.ts`**.

```ts
export const announcement = {
  enabled: false,          // true = visibile, false = nascosto
  icon: "🎉",              // opzionale — emoji o stringa
  message: "Testo del messaggio",
  link: {                  // opzionale — rimuovi l'intero blocco se non serve
    label: "Scopri di più",
    href: "/resources/events",
    external: false,       // true = apre in nuova scheda
  },
};
```

## Attivare il banner

1. Apri `data/announcement.ts`
2. Imposta `enabled: true`
3. Scrivi il messaggio in `message`
4. (Opzionale) Aggiungi un'emoji in `icon`
5. (Opzionale) Aggiungi un link in `link`
6. Fai deploy

## Disattivare il banner

Imposta `enabled: false` e fai deploy. Il banner sparisce immediatamente per tutti.

## Esempi

**Evento:**
```ts
enabled: true,
icon: "📅",
message: "Siamo al DevDay 2025 — vieni a trovarci.",
link: { label: "Dettagli", href: "/resources/events" },
```

**Nuova funzionalità:**
```ts
enabled: true,
icon: "✨",
message: "Nuovo: AI Compliance Assistant ora disponibile.",
link: { label: "Scopri di più", href: "/product" },
```

**Solo testo (nessun link):**
```ts
enabled: true,
icon: "🔧",
message: "Manutenzione programmata sabato 10 maggio dalle 22:00.",
```

**Link esterno:**
```ts
enabled: true,
icon: "🎙️",
message: "Ascolta il nostro intervento al podcast MedTech Leaders.",
link: { label: "Ascolta", href: "https://...", external: true },
```

## Comportamento utente

- Il banner si nasconde automaticamente quando l'utente scrolla verso il basso
- Riappare quando l'utente torna in cima alla pagina
- Se l'utente clicca la ✕, il banner viene chiuso e non riappare per **15 giorni**
- Dopo 15 giorni, il banner riappare automaticamente (se ancora `enabled: true`)

## Note tecniche

- Il banner non appare sulle pagine gated (`/resources/[slug]`)
- La navbar si sposta verso il basso di 40px quando il banner è visibile (zero layout shift grazie al CSS variable `--banner-h` impostato server-side)
- Non richiede deploy per cambiare testo — basta modificare `data/announcement.ts` e fare build
