---
title: "Come aggiungere l'IA a un dispositivo medico già certificato"
slug: "aggiungere-funzionalita-ia-dispositivo-medico-certificato"
description: "Aggiungere l'IA a un dispositivo certificato è una modifica da valutare. MDR, AI Act e piani di controllo delle modifiche dell'FDA, passo dopo passo."
seoTitle: "Aggiungere IA a un dispositivo medico certificato: 5 passi"
date: "2026-11-16"
featured: true
author: "dario-esposito"
categories: ["international-standards"]
featuredImage: "/blog/images/add-ai-feature-certified-medical-device.webp"
featuredImageAlt: "Mano che tocca un'interfaccia olografica di IA con pannelli di dati, in toni verde acqua"
excerpt: "Aggiungere l'IA a un dispositivo certificato è una modifica da valutare. MDR, AI Act e piani di controllo delle modifiche dell'FDA, passo dopo passo."
---

**Aggiungere una funzionalità di IA a un dispositivo certificato è una modifica progettuale che deve essere valutata prima del rilascio.** Nell'UE, se influisce sulla sicurezza, sulle prestazioni o sulla destinazione d'uso, occorre notificarla al proprio organismo notificato e potrebbe essere necessaria una nuova valutazione; inoltre, la componente di IA comporta gli obblighi dell'AI Act a partire da agosto 2028 per i dispositivi che richiedono un organismo notificato. Negli Stati Uniti, si valuta se la modifica richieda una nuova sottomissione e si può utilizzare un Predetermined Change Control Plan (PCCP) per concordare in anticipo con l'FDA i futuri aggiornamenti del modello.

Non si riparte da zero con la certificazione. Si estendono le evidenze di cui si dispone già.

## Passaggio 1: Stabilire se l'IA modifica la destinazione d'uso o la classe

Partite dalla dichiarazione relativa alla destinazione d'uso. Una funzionalità di IA che si limita a velocizzare una funzione esistente è un caso diverso rispetto a una che aggiunge un nuovo output diagnostico o terapeutico.

Nell'UE, la classificazione del software segue la [Regola 11 del Regolamento sui Dispositivi Medici (MDR)](https://health.ec.europa.eu/document/download/b45335c5-1679-4c71-a91c-fc7a4d37f12b_en?filename=mdcg_2019_11_en.pdf): un software che fornisce informazioni utilizzate per prendere decisioni a fini diagnostici o terapeutici rientra almeno nella classe IIa, e in una classe superiore qualora una decisione errata possa causare un danno grave. Un nuovo output di IA può spostare il dispositivo in una classe superiore.

## Passaggio 2: Valutare la modifica nell'ambito della certificazione attuale

* **UE:** le modifiche alla progettazione o alla destinazione d'uso che incidono sulla sicurezza o sulle prestazioni devono essere notificate al vostro organismo notificato, che potrebbe valutarle. L'accordo sulla notifica delle modifiche stipulato con l'organismo notificato stabilisce le relative soglie. Raccomandiamo di conservare un breve **verbale decisionale firmato sulla significatività della modifica** che faccia riferimento al fascicolo di gestione del rischio.
* **Stati Uniti:** valutate la modifica rispetto alla linea guida dell'FDA su quando una [modifica software a un dispositivo esistente richiede una nuova procedura 510(k)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/deciding-when-submit-510k-software-change-existing-device). Una nuova funzione di IA spesso la richiede.

## Passaggio 3: Pianificare per l'AI Act (UE)

La maggior parte dei dispositivi medici basati sull'IA è considerata "ad alto rischio" ai sensi dell'[AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng), poiché rientra nell'ambito dell'MDR e necessita di un organismo notificato. A seguito dell'AI Omnibus (Regolamento (UE) 2026/1744), tali obblighi si applicano a partire dal **2 agosto 2028**.

La linea guida congiunta MDCG 2025-6 stabilisce che occorre preparare **un unico fascicolo di documentazione tecnica e un'unica valutazione della conformità** attraverso il percorso MDR, integrando al suo interno i requisiti dell'AI Act. Anche il vostro organismo notificato deve soddisfare i requisiti dell'AI Act previsti per gli organismi notificati. Requisiti da pianificare: gestione del rischio lungo l'intero ciclo di vita dell'IA, governance dei dati per i dataset di addestramento e di test, registrazione automatica degli eventi (logging), trasparenza, sorveglianza umana, nonché accuratezza e robustezza dichiarate.

Una proposta di revisione dell'MDR (dicembre 2025) potrebbe cambiare le modalità di applicazione dell'AI Act ai dispositivi, ma non è legge. Pianificate in base alle norme in vigore.

Altre due date dell'AI Act sono rilevanti. Se la vostra funzionalità di IA genera testo, audio, immagini o video, si applicano già le norme sulla **trasparenza** dell'**Articolo 50(2)**: i sistemi immessi sul mercato prima del 2 agosto 2026 devono contrassegnare i propri output come generati dall'IA entro il **2 dicembre 2026**, data in cui termina il periodo di tolleranza. Inoltre, dal **2 dicembre 2027**, gli obblighi per i sistemi ad alto rischio si applicano ai sistemi di IA stand-alone elencati nell'Allegato III, come i sistemi di triage d'emergenza che non sono dispositivi medici.

## Passaggio 4: Pianificare in anticipo i futuri aggiornamenti del modello (PCCP statunitense, AI Act dell'UE)

I modelli di IA cambiano dopo il rilascio. Un PCCP consente di descrivere le modifiche pianificate nella sottomissione per l'immissione in commercio e, una volta autorizzate, di apportarle senza dover presentare una nuova sottomissione ogni volta, a condizione di attenersi al piano. Si compone di tre parti:

1. una descrizione delle modifiche pianificate;
2. un protocollo di modifica: come ciascuna modifica viene realizzata, testata e rilasciata;
3. una valutazione d'impatto dei benefici e dei rischi.

Il 20 ottobre 2026, l'FDA ha pubblicato [due esempi ipotetici di PCCP](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/novel-medical-devices-predetermined-change-control-plans-hypothetical-case-examples) per software di machine learning: un sistema di allerta per la sepsi adattato localmente in ciascun ospedale e un modello di rilevamento delle aritmie riaddestrato periodicamente.

**Nell'UE**, l'AI Act prevede una norma analoga. Le modifiche a un sistema di IA in grado di apprendere che vengono definite in anticipo e documentate nel fascicolo tecnico non costituiscono una "modifica sostanziale" (Articolo 43(4)), pertanto non richiedono una nuova valutazione della conformità. Per i dispositivi MDR ciò si applica dal 2 agosto 2028. Fino ad allora, e per quanto riguarda gli aspetti MDR, concordate le modifiche pianificate con il vostro organismo notificato.

## Passaggio 5: Estendere le evidenze, non ricostruirle

Cosa aggiungere al fascicolo esistente:

* requisiti nuovi e modificati, con i relativi rischi e controlli;
* registrazioni sulla gestione dei dati per i set di addestramento, validazione e test;
* verifica e validazione della funzionalità di IA, collegate a tali requisiti;
* un'analisi del rischio aggiornata ai sensi della norma [ISO 14971](https://www.iso.org/standard/72704.html) (lo standard per la gestione del rischio);
* sorveglianza post-commercializzazione aggiornata per le prestazioni del modello.

Il lavoro è più semplice quando requisiti, rischi e test sono già collegati, perché consente di vedere su cosa incide la funzionalità di IA.

## In che modo P4SaMD supporta questo processo

**P4SaMD**, la piattaforma di conformità per Software as a Medical Device (SaMD) di Mia-Care, una società di Mia-Platform, mantiene requisiti, rischi, richieste di modifica e test collegati con tracciabilità bidirezionale, gestisce le versioni in linea con la norma [IEC 62304](https://mia-care.io/it/risorse/blog/iec-62304-una-guida-faq-completa) (lo standard per il ciclo di vita del software per dispositivi medici) e utilizza una matrice del rischio allineata alla ISO 14971. Ciò offre la visione d'impatto necessaria per una valutazione delle modifiche, inclusi i [rischi legati all'IA](https://mia-care.io/it/use-cases/high-risk-ai-cdss). Per le funzionalità di IA, [P4SaMD sta aggiungendo capability lungo tutto il ciclo di vita dell'IA](https://mia-care.io/it/risorse/blog/governare-lia-per-la-conformita-samd): registrazione e classificazione di ciascun sistema di IA, controllo dei dati di addestramento, blocco di una versione del modello che non soddisfa i criteri di accettazione e tracciamento dei modelli in produzione rispetto al piano di modifica concordato. P4SaMD supporta la compliance; l'organismo notificato o l'FDA decidono.

Volete vederlo in azione? Il 30 novembre, Mia-Care ospita il webinar gratuito "From Algorithm to Clinic: AI Medical Software to Market", con un caso di studio a cura di Aindo: [mia-care.io/it/webinar/software-medicale-ai](https://mia-care.io/it/webinar/software-medicale-ai).

## Domande frequenti

### 1. **Dobbiamo ricertificare un dispositivo per aggiungere l'IA?**

Non necessariamente da zero. Si valuta la modifica; se influisce sulla sicurezza, sulle prestazioni o sulla destinazione d'uso, l'organismo notificato (UE) o l'FDA (Stati Uniti) potrebbero doverla esaminare.

### 2. **Quando si applicano le norme dell'AI Act ai dispositivi medici basati sull'IA?**

Dal 2 agosto 2028 per i dispositivi rientranti nell'ambito dell'MDR o dell'IVDR che necessitano di un organismo notificato. Se il dispositivo genera testo, audio, immagini o video, si applicano già le norme sulla trasparenza dell'Articolo 50(2): i sistemi immessi sul mercato prima del 2 agosto 2026 devono contrassegnare i propri output come generati dall'IA entro il 2 dicembre 2026.

### 3. **È necessario un fascicolo tecnico separato per l'AI Act?**

No. La linea guida MDCG 2025-6 descrive un unico fascicolo di documentazione tecnica tramite il percorso MDR.

### 4. **Che cos'è un PCCP?**

Un meccanismo dell'FDA per pre-autorizzare, nella sottomissione originale, un insieme definito di modifiche future, come il riaddestramento del modello.
