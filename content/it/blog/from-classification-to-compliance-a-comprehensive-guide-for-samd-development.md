---
title: "Dalla Classificazione alla Certificazione: Guida Completa per lo Sviluppo di SaMD"
slug: "dalla-classificazione-alla-certificazione-guida-completa-per-lo-sviluppo-di-samd"
description: "Lo sviluppo di SaMD parte dalla classificazione e arriva alla certificazione. Questa guida illustra i passaggi chiave, dallo IEC 62304 alle classi EU MDR."
seoTitle: "Dalla Classificazione alla Certificazione: Guida SaMD"
date: "2023-09-15"
modified: "2024-06-04"
author: "dario-esposito"
categories: ["technology-application"]
featuredImage: "/blog/images/from-classification-to-compliance-a-comprehensive-guide-for-samd-development.webp"
featuredImageAlt: "Dalla Classificazione alla Certificazione: Guida Completa per lo Sviluppo di SaMD"
excerpt: "Sviluppare Software as a Medical Device (SaMD) richiede un approccio ben strutturato che inizia con la classificazione e si estende attraverso un complesso …"
---

Sviluppare Software as a Medical Device (SaMD) richiede un approccio ben strutturato che inizia con la classificazione e si estende attraverso un complesso processo di certificazione. Questo articolo esplora **i passaggi chiave e le considerazioni per lo sviluppo di SaMD, dalla comprensione delle normative alla gestione della compliance**.

## Come vengono classificati i dispositivi medici: una breve panoramica

Comprendere la classificazione SaMD è fondamentale per aderire ai quadri normativi. I produttori e i fornitori di SaMD devono conoscere gli standard internazionali principali, come lo IEC 62304, e il loro ruolo nel definire i processi del ciclo di vita del software per dispositivi medici. Secondo [IEC 62304](https://www.iso.org/standard/38421.html), i dispositivi standard vengono classificati in base al rischio come segue:

- Classe A: nessun infortunio o danno alla salute possibile;
- Classe B: possibili lesioni non gravi;
- Classe C: possibile morte o lesioni gravi.

Detto questo, vediamo ora come vengono classificati SaMD e dispositivi medici secondo [EU MDR](https://eumdr.com/). **Esistono diversi percorsi di valutazione per ottenere la marcatura CE per il proprio prodotto**, e il percorso da seguire dipende dalla classe di rischio del dispositivo secondo l'MDR.

- **Classe I:** i dispositivi di Classe I rappresentano il livello di rischio più basso. Non possono essere invasivi e non devono avere contatto diretto con il paziente;
- **Classe II:** la Classe II si suddivide ulteriormente in Classe IIa e IIb. La Classe IIa comprende dispositivi a rischio moderato, mentre la Classe IIb riguarda quelli con profili di rischio da moderato ad alto. I dispositivi di Classe II possono essere utilizzati direttamente sui pazienti e servono a scopi diagnostici, terapeutici o di monitoraggio;
- **Classe III:** i dispositivi classificati come Classe III comportano il livello di rischio più elevato. Questa categoria include dispositivi che interagiscono direttamente con il sistema circolatorio centrale o nervoso, oppure incorporano un prodotto medicinale, come un pacemaker o protesi articolari.

## La roadmap di sviluppo SaMD: passaggi fondamentali per il successo

Intraprendere lo sviluppo di un SaMD comporta decisioni critiche, dai dilemmi "Make or Buy" alle valutazioni di readiness. **Le aziende MedTech devono valutare attentamente l'avvio dei progetti legati allo sviluppo di SaMD e ponderare i compromessi tra costruire da zero e acquistare soluzioni già pronte.** Raccolgono informazioni sui prodotti disponibili sul mercato e valutano i limiti di time-to-market e il posizionamento competitivo.

**Affrontare lo sviluppo di un SaMD da zero può risultare particolarmente costoso a causa di possibili lacune nella classificazione del rischio e nella competenza in materia di compliance.** Identificare in modo errato la classificazione SaMD appropriata, o trascurare di definire una classificazione target fin dalle prime fasi di progettazione e sviluppo, può avere gravi implicazioni finanziarie.

Di seguito sono riportate alcune linee guida essenziali per garantire una classificazione SaMD accurata ed evitare pericolose insidie:

1. **Valutare la readiness organizzativa**: a livello organizzativo, valutare quali classificazioni l'azienda è realmente attrezzata ed esperta per perseguire. **Le classificazioni SaMD più elevate richiedono documentazione, validazione e sistemi di gestione della qualità (QMS) più estesi;**
2. **Valutare il time-to-market**: considerare l'urgenza dell'ingresso sul mercato e **la priorità di ottenere un vantaggio competitivo.** Questo significa optare per una classificazione meno stringente o cercare esenzioni dalle normative SaMD per semplificare l'onere normativo;
3. **Analizzare il posizionamento sul mercato e il vantaggio competitivo**: comprendere a fondo la posizione del proprio prodotto nel mercato e sfruttare i propri punti di forza distintivi. Analizzare le esigenze, le motivazioni, le abitudini e i comportamenti dei clienti per allineare lo sviluppo SaMD alle loro necessità.

## Abbracciare l'applicazione componibile e l'Agile per il successo del SaMD

Le [metodologie Agile](https://blog.mia-platform.eu/en/agile-the-key-for-digital-transformation-and-companys-growth) stabiliscono un quadro favorevole per lo sviluppo software, consentendo ai team di dare priorità a una consegna incrementale e rapida. Sebbene **questo approccio offra vantaggi significativi, allinearlo alle rigide normative che regolano il software per dispositivi medici introduce alcune sfide.** In particolare, armonizzare un ambiente Agile con le molteplici richieste definite dallo IEC 62304, che vanno dalla gestione del rischio ai protocolli di risoluzione dei problemi, pone complessità specifiche.

Inoltre, sfruttare la [Composable Architecture](https://blog.mia-platform.eu/en/composable-architecture-all-the-flexibility-your-software-needs) rafforza il concetto di modularità che si adatta perfettamente al percorso di certificazione che ogni azienda MedTech che lavora con SaMD deve intraprendere. **Nuovi moduli possono essere aggiunti e quelli esistenti possono essere aggiornati**, senza compromettere il resto del sistema, e le funzionalità diventate obsolete possono essere rimosse, tutto con facilità.

Questo sistema si basa sul concetto di piattaforma di sviluppo basata su microservizi che supporta applicazioni cloud native combinando e assemblando diversi moduli per supportare più processi di business. Concentrandosi sulla logica di sviluppo legata ai requisiti di business, i [Feature Team](https://blog.mia-platform.eu/en/empower-your-feature-teams-with-developer-portals) possono **creare soluzioni personalizzate in modo rapido e sicuro**, con la garanzia di poter controllare la propria scalabilità nel tempo.

## Mia-Care guida verso un processo di certificazione sicuro per il SaMD

Per lanciare con successo un SaMD, è necessario un prodotto conforme e una documentazione di supporto alla qualità approvata dagli enti regolatori competenti.

Sulla base degli obiettivi precedentemente stabiliti, è chiaro che non esiste un elenco definitivo di passaggi necessari per ottenere la certificazione. Piuttosto, il **processo di qualità può essere integrato in un ambiente Agile per adattarsi ai frequenti cambiamenti dei requisiti**. Per sfruttare la capacità di rispondere rapidamente ai cambiamenti del software e costruire componenti software pronti per essere certificati come SaMD, le organizzazioni possono utilizzare [Mia-Platform Console](https://mia-platform.eu/platform/console/), un **portale di sviluppo interno**, e il [Mia-Care Marketplace](https://mia-care.io/accelerators/), **un ampio catalogo di servizi** composto da moduli software conformi e riutilizzabili.

La suite software di Mia-Care aiuta a padroneggiare:

1. **Il sistema di controllo versione**, che migliora costantemente la tracciabilità dei componenti e degli elementi software;
2. **La gestione del rischio**, con procedure di controllo sicure che facilitano la gestione del rischio durante l'intero ciclo di vita del prodotto;
3. **Le metodologie Agile per il ciclo di vita dello sviluppo software**, che consentono personalizzazione e scalabilità in un ambiente regolamentato;
4. **La gestione della documentazione tecnica**, grazie a processi automatizzati integrati nella suite software di Mia-Care.

## Conclusioni

Intraprendere il percorso di sviluppo di Software as a Medical Device (SaMD) richiede un approccio strategico e ben strutturato. Come abbiamo esplorato i passaggi chiave e le considerazioni principali, è evidente che il percorso di certificazione è tanto complesso quanto essenziale. **Le sfide legate alla costruzione di un SaMD da zero, o alla transizione da sistemi monolitici a un'architettura a microservizi, sono significative**, e spesso comportano ritardi e complessità legate ai processi di certificazione e all'implementazione Agile.  
La tecnologia Mia-Care emerge come una soluzione fondamentale, offrendo alle aziende MedTech un ambiente certificato e regolamentato che semplifica lo sviluppo software, garantisce una tracciabilità completa delle funzionalità del prodotto, automatizza i processi ricorrenti e consente una scalabilità rapida e sicura. Mentre navighiamo in questo panorama dinamico, abbracciare tecnologie innovative può aprire la strada al successo del SaMD, a beneficio ultimo di pazienti e operatori sanitari.
