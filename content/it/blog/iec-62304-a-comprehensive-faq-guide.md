---
title: "IEC 62304: Una Guida FAQ Completa"
slug: "iec-62304-una-guida-faq-completa"
description: "Il ciclo di vita software IEC 62304 può creare confusione. Questa guida FAQ risponde alle domande più comuni su classificazione, rischio e conformità."
seoTitle: "IEC 62304: Una Guida FAQ Completa"
date: "2025-12-04"
modified: "2025-12-23"
author: "dario-esposito"
categories: ["international-standards"]
featuredImage: "/blog/images/iec-62304-a-comprehensive-faq-guide.webp"
featuredImageAlt: "IEC 62304: Una Guida FAQ Completa"
excerpt: "Il ciclo di vita del software è lungo, spesso lento e intricato in tutte le sue fasi. Il ciclo di vita del software come …"
---

---

Il ciclo di vita del software è lungo, spesso lento e intricato in tutte le sue fasi. Il ciclo di vita del software come dispositivo medico (SaMD) e del software all'interno dei dispositivi medici (SiMD) è ancora più difficile da gestire a causa delle normative rigide che rendono necessaria un'analisi approfondita dei flussi di lavoro di sviluppo.

In particolare, lo IEC 62304 è uno standard fondamentale perché definisce tutti i requisiti che caratterizzano il ciclo di vita del SaMD, segnando il primo passo chiave per affrontare la conformità.

Fortunatamente, questo standard è armonizzato a livello internazionale, quindi gli sviluppatori possono considerarlo un riferimento unico per soddisfare i requisiti diversi dei vari mercati globali.

Ecco una guida approfondita con le domande più frequenti e discusse sull'argomento: entriamo nei dettagli dello IEC 62304.

## Domande generali su IEC 62304

### 1. **Cos'è lo IEC 62304?**

Lo IEC 62304 è lo standard internazionale della International Electrotechnical Commission (IEC), "Medical device software – Software life cycle processes". Definisce i requisiti del ciclo di vita (processi, attività e task) necessari per la progettazione e la manutenzione sicura del software per dispositivi medici. Si applica quando il software è esso stesso un dispositivo medico (SaMD) oppure una parte integrata/integrale di uno (SiMD).

### 2. **Come si confronta lo IEC 62304 con altri standard per dispositivi medici (come ISO 13485, IEC 82304-1, IEC 81001-5-1, ISO 14971, IEC 62366-1)?**

Lo IEC 62304 lavora in sinergia con altri standard che coprono funzioni complementari. La ISO 13485 stabilisce il Sistema di Gestione della Qualità per i produttori di dispositivi medici. Lo IEC 62304 estende la ISO 14971 per integrare la gestione del rischio nell'SDLC. La ISO 14971 affronta il rischio per l'intero dispositivo medico. La IEC 82304-1 si applica solo ai prodotti software sanitari e fa riferimento ai processi definiti nello IEC 62304, che si applica sia a SaMD sia a SiMD. La IEC 81001-5-1 e la IEC 62366-1 gestiscono rispettivamente la cybersecurity e l'usabilità.

### 3. **Esiste una certificazione IEC 62304?**

Lo IEC di per sé non fornisce certificazioni né attestazioni di conformità. La conformità viene determinata ispezionando la documentazione richiesta durante gli audit ISO 13485 e valutando i processi, le attività e i task svolti in base alla classe di sicurezza del software.

## Gestione del rischio [Clausole 4.2 e 7]

![IEC 62304 clause 4](/blog/images/iec-62304-a-comprehensive-faq-guide-1.webp)
![IEC 62304 clause 6 7 8 9](/blog/images/iec-62304-a-comprehensive-faq-guide-2.webp)

### 4. **Come si implementa il processo di gestione del rischio richiesto dallo IEC 62304?**

Il produttore deve applicare un processo di gestione del rischio conforme alla ISO 14971. Il processo di gestione del rischio software (Clausola 7) deve essere integrato nel processo di gestione del rischio del dispositivo previsto dalla ISO 14971. La Clausola 7 fornisce requisiti aggiuntivi per il controllo del rischio specifici per il software, come l'identificazione delle potenziali cause software che contribuiscono a situazioni pericolose.

### 5. **Cos'è la "Probabilità di Guasto" definita nello IEC 62304?**

Stabilire la Classificazione di Sicurezza del Software richiede un'attenta considerazione dei rischi. Tali rischi derivano dalla combinazione della probabilità di accadimento del danno e della gravità di tale danno, secondo la ISO 14971.

### 6. **Qual è l'impatto della regola del "100% di Probabilità di Guasto"?**

La regola si applica alla probabilità che un guasto software porti da un pericolo a una situazione pericolosa: questa probabilità P1 deve essere considerata pari al 100% (o 1), poiché non esiste un accordo su come misurare quantitativamente le probabilità di guasto del software. Questa stima nel caso peggiore è appropriata quando il software contribuisce a una sequenza di eventi che crea una situazione pericolosa. Al contrario, la probabilità che il danno P2 si verifichi a partire da quella situazione pericolosa può essere inferiore al 100%. Va notato che la probabilità complessiva di danno derivante da un guasto software non è fissata al 100%, quindi la valutazione del rischio e la conseguente classificazione di sicurezza del software pongono l'accento sulla gravità del danno risultante.

## Classificazione di sicurezza del software [Clausola 4.3]

### 7. **Cos'è la classificazione di sicurezza del software secondo IEC 62304?**

Classifica il software in tre tipi (A, B o C) in base al rischio di danno nel caso peggiore derivante da una situazione pericolosa a cui il software potrebbe contribuire. La Classe A implica che non è possibile alcun infortunio o danno alla salute; la Classe B, possibili lesioni non gravi; e la Classe C, possibile morte o lesioni gravi.

### 8. **Qual è la correlazione tra la Classificazione di Sicurezza del Software e la Classe del Dispositivo Medico secondo EU MDR o il Level of Concern secondo la classificazione FDA?**

Le due classificazioni servono scopi distinti e non hanno una correlazione diretta uno a uno. La Classe del Dispositivo Medico (MDR per l'Europa e FDA per gli USA) stabilisce il livello richiesto per la presentazione normativa, in base al rischio complessivo del dispositivo per il paziente e al livello di controllo normativo necessario. La Classificazione di Sicurezza del Software, invece, determina il livello di rigore di sviluppo richiesto durante l'SDLC per garantire la sicurezza del software. In sostanza, la Classificazione di Sicurezza del Software si concentra sull'SDLC in relazione specificamente al software, che è una delle componenti del dispositivo medico.

## Processo di sviluppo software e pianificazione [Clausola 5.1]

![IEC 62304 clause 5](/blog/images/iec-62304-a-comprehensive-faq-guide-3.webp)

### 9. **Lo IEC 62304 impone una metodologia di sviluppo software specifica (ad esempio Waterfall o Agile)?**

No, lo standard non prescrive un modello di ciclo di vita specifico; il produttore è responsabile della scelta di uno, come Waterfall, Incrementale o Evolutivo. Il produttore mappa i processi, le attività e i task richiesti dallo standard sul modello scelto.

## Analisi dei requisiti [Clausola 5.2]

### 10. **Qual è il ruolo della Matrice di Tracciabilità del Software nel dimostrare la conformità allo IEC 62304?**

I registri di tracciabilità stabiliscono la tracciabilità necessaria lungo tutto il ciclo di vita. Questo dimostra le relazioni tra i requisiti di sistema, i requisiti software, i test del sistema software e le misure di controllo del rischio implementate nel software. Questo collegamento garantisce che la verifica copra tutti i requisiti di sicurezza e funzionali.

### 11. **Quali informazioni è obbligatorio tracciare per l'analisi dei requisiti?**

La verifica dell'analisi dei requisiti deve confermare che i requisiti software implementino i requisiti di sistema/controllo del rischio, siano non contraddittori e siano espressi in modo univoco. È fondamentale che i requisiti siano formulati in modo tale da poter stabilire criteri di test, essere identificati univocamente ed essere tracciabili fino alla loro origine.

### 12. **Qual è la differenza chiave tra un requisito funzionale e un requisito di sicurezza?**

I requisiti funzionali definiscono le capacità e le prestazioni attese del software (ad esempio, tempistiche, caratteristiche, input/output). I requisiti di sicurezza sono nello specifico le misure di controllo del rischio definite durante il processo di gestione del rischio, che devono essere incluse nei requisiti software per controllare i rischi individuati.

## Progettazione del software [Clausole 5.3, 5.4]

### 13. **Qual è l'ambito della progettazione architetturale?**

L'ambito consiste nel definire i principali componenti strutturali del software e trasformare i requisiti in un'architettura documentata che identifica gli item software. Definisce le responsabilità chiave, le proprietà esterne, le relazioni tra i componenti e le architetture per le interfacce interne ed esterne.

### 14. **Come affronta lo IEC 62304 l'uso e la documentazione del Software of Unknown Provenance (SOUP)?**

Il SOUP (Software of Unknown Provenance) deve essere identificato in modo univoco tramite titolo, produttore e identificatore univoco (ad esempio numero di versione o di patch). I produttori devono specificare le sue caratteristiche funzionali/prestazionali richieste e l'hardware/software di supporto. I rischi legati al guasto del SOUP devono essere analizzati, valutando in particolare gli elenchi pubblicati di anomalie.

### 15. **La progettazione dettagliata è richiesta per tutti gli item software?**

No, la documentazione completa della progettazione dettagliata (che include la documentazione del design per ogni unità software e per le interfacce, e la verifica del design) è obbligatoria solo per gli Item Software classificati in Classe C. Il software viene suddiviso in unità software solo per le Classi B e C.

## Implementazione e verifica delle unità software [Clausola 5.5]

### 16. **Cos'è un Item Software?**

Un item software è qualsiasi parte identificabile di un programma per computer (codice sorgente, codice oggetto, dati di controllo o un insieme di questi). È un termine generale che comprende componenti a tutti i livelli di scomposizione, dal sistema software di livello più alto fino all'unità software di livello più basso.

### 17. **Posso usare il SOUP in un dispositivo medico?**

Sì, il SOUP può essere incorporato in un dispositivo medico. Tuttavia, il produttore si assume la responsabilità del componente acquisito (SOUP) e deve includerlo nella gestione complessiva del rischio del dispositivo medico. La sua integrazione e i rischi correlati devono essere affrontati nel piano di sviluppo del software.

### 18. **Qual è la differenza tra SOUP, OTS e COTS?**

Il SOUP (Software of Unknown Provenance) è un item software già sviluppato e generalmente disponibile, ma non sviluppato per essere incorporato nel dispositivo medico; sono anche noti come OTS. Il SOUP è definito anche come un item sviluppato in precedenza per il quale non sono disponibili registrazioni adeguate dei processi di sviluppo. Quest'ultima parte della definizione si applica anche agli item sviluppati in precedenza dallo stesso produttore. I COTS (Commercial Off-The-Shelf) si differenziano dagli OTS quando sono resi disponibili da fornitori commerciali.

## Test del software [Clausole 5.6, 5.7]

### 19. **Qual è la differenza tra il Test del Sistema Software e la Validazione?**

Il Test del Sistema Software verifica la funzionalità del software, confermando che tutti i requisiti software specificati sono stati implementati. La Validazione consiste nel dimostrare che il dispositivo medico nel suo complesso soddisfa i requisiti d'uso previsto. La validazione e il rilascio finale del dispositivo medico non rientrano nell'ambito dello IEC 62304.

### 20. **Come devono essere riassunti i risultati dei test e lo stato di verifica complessivo nel Rapporto di Test del Software?**

Il rapporto deve documentare il risultato del test (superato/non superato ed elenco delle anomalie) riscontrato, insieme a un riferimento alle procedure dei casi di test che mostrano i risultati attesi. Deve inoltre registrare la versione del software testato, le configurazioni hardware/software rilevanti utilizzate per il test, gli strumenti di test utilizzati, la data del test e l'identità del tester.

## Rilascio del software [Clausola 5.8]

### 21. **Il Rilascio del Software è diverso dal rilascio del prodotto?**

Sì. Il rilascio del software (Clausola 5.8) è il processo che rende il software disponibile per l'utilizzo a livello di sistema. Tuttavia, questo standard non copre la validazione e il rilascio finale del dispositivo medico nel suo complesso.

### 22. **Lo IEC 62304 indica le informazioni essenziali che devono essere documentate nella Nota di Rilascio del Software a supporto della presentazione del dispositivo?**

Sì, lo IEC 62304 definisce le informazioni essenziali da includere nella Nota di Rilascio del Software per la presentazione del dispositivo medico, anche se non impone un formato specifico per il documento. Il produttore deve documentare la versione rilasciata, tutte le anomalie residue note e la procedura/ambiente utilizzati per creare il software rilasciato (per le Classi B/C). Gli archivi di documentazione devono essere conservati per il periodo più lungo tra la vita del dispositivo e il tempo specificato dai requisiti normativi pertinenti.

## Manutenzione del software e processo di risoluzione dei problemi [Clausole 6, 9]

![IEC 62304 clause 6 7 8 9](/blog/images/iec-62304-a-comprehensive-faq-guide-4.webp)

### 23. **Qual è la differenza chiave tra il Processo di Manutenzione del Software (Clausola 6) e il Processo di Risoluzione dei Problemi del Software (Clausola 9)?**

La Manutenzione (Clausola 6) si concentra sulla risposta complessiva e adeguata ai feedback ricevuti dopo il rilascio, gestendo decisioni di alto livello riguardanti gli impatti sulla sicurezza e garantendo la conformità alle normative locali. La Risoluzione dei Problemi (Clausola 9) è il sistema di controllo interno (tracciamento dei difetti) utilizzato dal processo di manutenzione per analizzare i report specifici sui problemi e generare le richieste di modifica necessarie.

### 24. **Come regola lo standard il processo di rilevamento, valutazione e risoluzione dei Report sui Problemi Software post-market?**

Lo standard definisce il processo di Risoluzione dei Problemi per affrontare i possibili difetti software. Il feedback deve essere monitorato e documentato come report sul problema. Il report deve essere valutato per la sua rilevanza in termini di sicurezza utilizzando il processo di gestione del rischio del software. La risoluzione utilizza il processo di controllo delle modifiche (8.2) per approvare/implementare le richieste di modifica, e il produttore deve verificare le risoluzioni e informare le parti interessate.

## Gestione della configurazione [Clausola 8]

![IEC 62304 clause 6 7 8 9](/blog/images/iec-62304-a-comprehensive-faq-guide-5.webp)

### 25. **Cos'è un "Elemento di Configurazione"?**

Un elemento di configurazione è un'entità che può essere chiaramente identificata e tracciata in un momento specifico. Può rappresentare tutti gli elementi necessari per costruire il software, come file di build, codice sorgente, impostazioni del compilatore e documentazione. In sostanza, ogni elemento chiave per la creazione del software conta come elemento di configurazione.

### 26. **Perché è importante identificare e gestire gli Elementi di Configurazione?**

Identificare gli elementi di configurazione e le loro versioni è necessario per individuare quali parti compongono la configurazione del sistema software. La gestione della configurazione (Clausola 8) è fondamentale per ricreare un item software, identificarne le parti costitutive e fornire una cronologia delle modifiche apportate lungo l'intero ciclo di vita.

![IEC 62304 complete faq guide mapping](/blog/images/iec-62304-a-comprehensive-faq-guide-6.webp)

*Tabella: come P4SaMD supporta l'aderenza completa allo IEC 62304*.
