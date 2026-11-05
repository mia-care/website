---
title: "Come costruire un fascicolo tecnico per un software come dispositivo medico (SaMD) già esistente"
slug: "come-costruire-un-fascicolo-tecnico-per-un-samd-gia-esistente"
description: "Leggi questa guida passo dopo passo per creare un fascicolo tecnico a partire da un SaMD esistente."
seoTitle: "Fascicolo tecnico per un SaMD esistente: guida passo dopo passo"
date: "2026-11-05"
featured: true
author: "dario-esposito"
categories: ["international-standards"]
featuredImage: "/blog/images/how-to-build-a-technical-file-for-software-as-a-medical-device-that-already-exists.webp"
featuredImageAlt: "Come costruire un fascicolo tecnico per un software come dispositivo medico (SaMD) già esistente"
excerpt: "Leggi questa guida passo dopo passo per creare un fascicolo tecnico a partire da un SaMD esistente."
---

Per creare un fascicolo tecnico per un software esistente, parti da ciò che richiede la normativa e mappalo a fronte delle evidenze di cui già disponi: destinazione d'uso e classificazione, le registrazioni del ciclo di vita del software richieste dalla norma IEC 62304, il fascicolo di gestione del rischio, la verifica e la validazione, la valutazione clinica e i piani post-commercializzazione. Poi ricostruisci solo le parti mancanti e imposta il tuo processo in modo che il fascicolo rimanga aggiornato a ogni release.

Molti team affrontano questo problema in ritardo. Il software è in uso da anni, all'interno di un ospedale, come parte di un dispositivo o come prodotto per il benessere la cui destinazione d'uso si è ampliata, e ora deve essere certificato come **Software as a Medical Device (SaMD)**. Il punto di partenza dipende dalla sua storia: un software già presente sul mercato come dispositivo medico può seguire un percorso legacy più leggero, mentre un software che non è mai stato un dispositivo medico ha bisogno che le sue evidenze siano ricostruite a fronte dei requisiti completi. In entrambi i casi, **l'istinto è quello di iniziare a scrivere documenti. Il modo migliore per iniziare è invece fare un inventario**.

## 1. Confermate che il software sia un dispositivo medico e la sua classe

Nell'UE, un software è un dispositivo medico quando ha una finalità medica ai sensi del [Regolamento sui Dispositivi Medici (MDR, Regolamento (UE) 2017/745)](https://eur-lex.europa.eu/eli/reg/2017/745/oj/eng) e fa qualcosa di più rispetto alla semplice archiviazione, conservazione, comunicazione o esecuzione di una ricerca di base sui dati. La linea guida del Medical Device Coordination Group, MDCG 2019-11 Rev.1 (giugno 2025), definisce questo test e spiega come applicarlo, compreso il caso di moduli integrati all'interno di sistemi più ampi. La classificazione segue la Regola 11 dell'Allegato VIII dell'MDR: i software che forniscono informazioni utilizzate per decisioni diagnostiche o terapeutiche sono di classe IIa o superiore, pertanto un organismo notificato (l'organizzazione indipendente che certifica i dispositivi nell'UE) esaminerà il vostro fascicolo.

Mettete questo punto per iscritto prima di tutto. La destinazione d'uso guida ogni altra parte del fascicolo.

## 2. Elencate cosa deve contenere il fascicolo tecnico

Gli Allegati II e III dell'MDR descrivono la documentazione tecnica. Per il software, essa include generalmente:

* Descrizione del dispositivo, destinazione d'uso e varianti;
* La checklist dei requisiti generali di sicurezza e prestazione, con un rimando alle evidenze per ciascuno di essi;
* Informazioni sulla progettazione e fabbricazione, incluse le registrazioni del ciclo di vita del software;
* Il fascicolo di gestione del rischio ([ISO 14971](https://www.iso.org/standard/72704.html));
* Verifica e validazione, inclusi i test del software e l'usabilità ([IEC 62366-1](https://www.iso.org/standard/63179.html));
* Documentazione sulla cybersecurity;
* Il rapporto di valutazione clinica (per il software, linea guida [MDCG 2020-1](https://health.ec.europa.eu/system/files/2020-09/md_mdcg_2020_1_guidance_clinic_eva_md_software_en_0.pdf)) e il piano di follow-up clinico post-commercializzazione;
* Il piano di sorveglianza post-commercializzazione, l'etichettatura e le istruzioni per l'uso.

## 3. Mappate le evidenze esistenti a fronte della norma IEC 62304

La norma [**IEC 62304**](https://mia-care.io/it/risorse/blog/iec-62304-una-guida-faq-completa) è lo standard di riferimento per il ciclo di vita del software per dispositivi medici. Essa richiede un piano di sviluppo, i requisiti del software, l'architettura, test al livello appropriato per la classe di sicurezza del software (A, B o C), la gestione della configurazione e la risoluzione dei problemi. Richiede inoltre di identificare ogni componente di terze parti o open source (SOUP, "software of unknown provenance", software di provenienza sconosciuta) e di riesaminarne le problematiche note.

Se il vostro software è già sul mercato come dispositivo medico, la norma IEC 62304 (clausola 4.4) offre un percorso per i software legacy: valutare i rischi del software così com'è, decidere quali lacune (gap) sono rilevanti per la sicurezza, colmarle e documentare le motivazioni. Se non è mai stato un dispositivo medico, quel percorso non è applicabile: dovrete ricostruire le evidenze retrospettivamente a fronte della norma completa. Non è comunque necessario riscrivere il codice. **Dovete dimostrare che soddisfa i requisiti**.

Consiglio pratico: create una tabella a tre colonne: requisito della norma, evidenza di cui disponete oggi, gap. Diventerà il vostro piano di rimedio (remediation plan).

## 4. Ricostruite le evidenze mancanti, nell'ordine corretto

I team riscontrano solitamente le stesse lacune:

1. **Requisiti redatti a posteriori.** Ricostruiteli a partire dalla destinazione d'uso, dall'interfaccia utente e dal codice, quindi sottoponeteli a revisione esattamente come nuovi requisiti.
2. **Analisi del rischio che non scende fino al software.** Collegate ogni elemento software ai pericoli a cui può contribuire, e ogni controllo del rischio a un test.
3. **Test privi di tracciabilità.** I test automatizzati esistenti costituiscono evidenze preziose una volta collegati ai requisiti e ai controlli del rischio.
4. **Un elenco di SOUP incompleto.** Generate una distinta base del software (SBOM, software bill of materials) dalla build e confrontatela con quanto dichiarato.

Colmate prima le lacune rilevanti per la sicurezza; la rifinitura della documentazione viene per ultima.

## 5. Mantenete vivo il fascicolo dopo la certificazione

Un fascicolo tecnico non è un deliverable una tantum. Ogni release modifica requisiti, rischi, test e componenti. Se le evidenze vengono prodotte come un progetto a parte prima di ciascun audit, il fascicolo diventa obsoleto tra un audit e l'altro. I team che gestiscono meglio la situazione mantengono collegati requisiti, rischi, test e rilasci durante lo sviluppo, cosicché il fascicolo sia una vista del loro lavoro anziché un documento da riscrivere.

## 6. Attenzione alle scadenze

* I termini transitori dell'MDR in vigore sono il 31 dicembre 2027 (classe III e classe IIb impiantabili) e il 31 dicembre 2028 (altre classi), alle condizioni stabilite dal Regolamento (UE) 2023/607. Queste date si applicano solo ai dispositivi già certificati ai sensi delle vecchie direttive: i software che non sono mai stati dispositivi medici devono conformarsi integralmente all'MDR prima di essere immessi sul mercato.
* [EUDAMED](https://ec.europa.eu/tools/eudamed/eudamed), la banca dati europea dei dispositivi medici: i moduli relativi ad attori, dispositivi, certificati e sorveglianza del mercato sono obbligatori dal 28 maggio 2026. Il modulo di vigilanza non diventerà obbligatorio prima del 2028, secondo quanto comunicato dalla Commissione Europea agli stakeholder il 22 ottobre 2026.
* È in corso di negoziazione una revisione dell'MDR; fino a quando non sarà adottata, l'attuale MDR si applica integralmente.

## In che modo una piattaforma può aiutare

È possibile fare tutto questo con documenti e fogli di calcolo; molti team lo fanno. Una piattaforma è d'aiuto nelle due fasi che richiedono più tempo: **l'analisi dei gap di ciò che già esiste e il mantenimento dei collegamenti tra le evidenze in seguito**.

**P4SaMD di Mia-Care**, una società di Mia-Platform, offre un'importazione guidata del software esistente con un'analisi automatica dei gap e un [piano di rimedio con priorità](https://mia-care.io/it/risorse/blog/valutazione-e-bonifica-brownfield-per-software-medicale-legacy), la gestione dei requisiti e dei rischi con tracciabilità bidirezionale, la [generazione di SBOM](https://www.mia-platform.eu/it/blog/che-valore-ha-la-sbom-per-ia) e la riconciliazione con i SOUP dichiarati, oltre a un Documentation Hub per esplorare ed esportare gli artefatti di conformità. Mia-Care è certificata [ISO 13485:2016](https://www.iso.org/standard/13485). P4SaMD aiuta i team a produrre e mantenere le evidenze; l'organismo notificato decide.

## Domande frequenti

### Dobbiamo riscrivere il software esistente per certificarlo?

Di solito no. Se è già sul mercato come dispositivo medico, la norma IEC 62304 offre un percorso legacy basato sulla valutazione del rischio e sulla chiusura documentata dei gap. In caso contrario, si ricostruiscono la documentazione e le evidenze retrospettivamente, ma il codice in sé raramente necessita di essere riscritto.

### Quanto tempo ci vuole?

Dipende dalla classe, dalle dimensioni del software e da quante evidenze esistono già. Iniziate con l'analisi dei gap: vi fornirà un piano realistico.

### Possiamo riutilizzare i nostri test esistenti?

Sì, una volta che sono stati collegati ai requisiti e ai controlli del rischio e che i relativi risultati sono stati registrati.

### Chi decide se il fascicolo tecnico è sufficiente?

L'organismo notificato nell'UE; l'FDA per le sottomissioni negli Stati Uniti.
