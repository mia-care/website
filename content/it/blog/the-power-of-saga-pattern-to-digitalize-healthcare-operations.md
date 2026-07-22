---
title: "Il Potenziale del Saga Pattern per la Digitalizzazione delle Operazioni Sanitarie"
slug: "il-potenziale-del-saga-pattern-per-la-digitalizzazione-delle-operazioni-sanitarie"
description: "Le transazioni distribuite hanno bisogno di coerenza in ogni punto di contatto. Scopri come il Saga Pattern aiuta le piattaforme sanitarie a gestire errori e flussi di dati."
seoTitle: "Il Potenziale del Saga Pattern nelle Operazioni Sanitarie"
date: "2022-07-15"
modified: "2023-02-16"
author: "dario-esposito"
categories: ["technology-application"]
featuredImage: "/blog/images/the-power-of-saga-pattern-to-digitalize-healthcare-operations.webp"
featuredImageAlt: "Il Potenziale del Saga Pattern per la Digitalizzazione delle Operazioni Sanitarie"
excerpt: "Sfruttare le architetture basate su cloud è il prossimo grande passo quando si tratta di gestire servizi sanitari digitali. Le nuove soluzioni di cura …"
---

Sfruttare le architetture basate su cloud è il prossimo grande passo quando si tratta di gestire servizi sanitari digitali. Le nuove soluzioni di cura rendono le persone più consapevoli e le supportano nello scegliere le decisioni migliori possibili sui percorsi di cura, migliorando il loro stato di salute attuale. Più semplice è il coinvolgimento, più alta è la qualità della cura fornita.

Una delle sfide principali per le aziende sanitarie è **garantire l'allineamento delle informazioni tra i diversi punti di contatto** e **offrire ai pazienti un'esperienza impeccabile**, così che possano interagire facilmente con i fornitori di cure.

Come raggiungere questo obiettivo? Perseguendo la coerenza dei dati durante tutte le transazioni del processo (ovvero una singola unità logica o più unità che operano insieme e che hanno successo o falliscono come un'unica entità).

Nelle architetture multiservizio, le transazioni multiple richiedono una strategia di gestione delle transazioni cross-service focalizzata sulla coerenza dei dati.

## Cos'è il Saga Pattern e perché è necessario affrontare la coerenza dei dati?

La coerenza dei dati permette ai servizi di interagire senza soluzione di continuità tra loro, poiché tutte le informazioni in esecuzione corrispondono perfettamente. In genere, il team incaricato di gestire tutti i dati aziendali, spesso guidato dal Chief Data Officer, deve concentrarsi principalmente su due punti di attenzione:

- **garantire la coerenza dei dati in un'operazione distribuita tra sistemi diversi**, per assicurare un ordine preciso nell'esecuzione del flusso delle operazioni di microservizi;
- **garantire la sicurezza dagli errori**, creando meccanismi di remediation che ripristinano la situazione corretta in caso di errori.

Il Saga Pattern aiuta esattamente a soddisfare queste esigenze, garantendo stabilità e un basso tasso di errore sulle transazioni distribuite tra molti microservizi. Ma cos'è esattamente una Saga? Una Saga è la gestione delle transazioni distribuite dall'inizio alla fine.

Ci sono due strategie per affrontare il Saga Pattern:

- eventi/coreografia: i servizi portano avanti la saga lavorando insieme, senza che nessuno li controlli;
- comandi/orchestrazione: la saga è gestita da un orchestratore centralizzato.

Ogni approccio ha [vantaggi e limiti](https://blog.mia-platform.eu/en/saga-pattern-how-to-manage-distributed-transactions-with-microservices), e naturalmente non esiste una regola universale che stabilisca quale sia il più adatto. L'implementazione del progetto definisce quale sia la soluzione migliore per quella specifica situazione.

## Il Flow Manager: il plugin Saga Pattern sviluppato da Mia-Platform

Durante lo sviluppo della soluzione Mia-Platform, il team R&D ha deciso di creare un componente generico che agisse da orchestratore, optando per l'approccio comandi/orchestrazione. Questo orchestratore, chiamato **Flow Manager**, è stato costruito per garantire il pieno controllo sul processo, oltre a flessibilità e facilità di implementazione.

Il risultato finale è **un microservizio che gestisce le saghe seguendo il flusso imposto da una macchina a stati finiti event-driven**, in cui le transazioni sono innescate da messaggi. Questi messaggi sono eventi scambiati in modo asincrono tramite un event bus (ad esempio [Apache Kafka](https://www.confluent.io/what-is-apache-kafka)).

Poiché l'orchestratore [Flow Manager](https://blog.mia-platform.eu/en/flow-manager-the-saga-orchestrator-of-mia-platform) è stato sviluppato come servizio pronto all'uso, i vantaggi sono immediatamente evidenti per gli utenti. Per soddisfare le esigenze specifiche di un progetto, è sufficiente definire il diagramma a stati finiti che descrive i possibili flussi di interazione e tradurlo in un semplice file di configurazione.

## Come sfruttare il Flow Manager nell'ecosistema sanitario? L'esperienza di sviluppo del team Mia-Care

Non appena Mia-Care ha avviato la sua attività di sviluppo sui progetti digitali, il team ha ottenuto un notevole slancio dall'uso del Flow Manager come orchestratore del Saga Pattern. Il plugin permette ai team di **ridurre i tempi di sviluppo** e **creare flussi automatizzati** senza dover scrivere nuovo codice da zero.

Attualmente, in Mia-Care abbiamo applicato questo strumento a strutture sanitarie che adottano un **patient journey digitale**, e ad aziende di salute digitale che offrono servizi di primary care virtuale.

Approfondiamo questi due casi d'uso per dare un esempio più chiaro del valore fornito dal Flow Manager.

### Patient Journey Digitale per gli Ospedali

Il team Mia-Care è stato coinvolto nella [digitalizzazione di un Patient Journey](https://mia-care.io/technology-application/digitalize-your-patient-journey-by-leveraging-a-composable-software-suite/) per offrire **un'esperienza impeccabile alle persone che devono prenotare una visita o un follow-up all'interno di una struttura ospedaliera**, unificando il mondo digitale a quello fisico.

Una volta atterrato sulla piattaforma di prenotazione ospedaliera, se già registrato, il paziente può selezionare la prestazione clinica necessaria, il giorno preferito e la sede (tra le diverse strutture di cura). Il sistema mostra le disponibilità degli specialisti già associati al paziente, incrociandole con i loro calendari. Alla fine, l'utente può selezionare una fascia oraria adatta e proseguire selezionando il metodo di pagamento ("*paga ora per saltare la coda*" o "*paga dopo la visita*").

Se non ci sono problemi, il paziente può accedere al servizio tramite un codice QR se la visita è fisica, oppure tramite un link email se viene svolta a distanza dal medico. Abbiamo già visto come il Flow Manager rappresenti un grande vantaggio nella gestione degli errori grazie al processo di remediation. In questo caso, quando si verifica un errore (fascia oraria non più disponibile o codice fiscale errato), il plugin reindirizza l'utente al portale di prenotazione inviando un messaggio di "*errore*" che viene mostrato prima del reindirizzamento alla pagina principale.

Quali sono gli aspetti interessanti implementati all'interno di questo progetto?

- Una volta che i pazienti prenotano online o modificano un evento, ricevono **notifiche e promemoria automatici**;
- Il paziente può accedere alla visita **tramite un codice QR o un link** (per le visite a distanza);
- SMS o notifiche push chiedono al paziente di attendere **a distanza per mantenere il distanziamento sociale**;
- Il portale del paziente e l'app per smartphone forniscono una **situazione della coda in tempo reale**, così le persone non devono attendere fisicamente.

E i vantaggi?

- Semplificazione dei percorsi del paziente;
- Riduzione del tempo perso e del tasso di no-show;
- Aumento dell'efficienza del personale.

### E-commerce Farmaceutico per il Servizio di Primary Care Virtuale

Lo scorso anno abbiamo guidato un progetto digitale per creare una **piattaforma di primary care virtuale**, alimentata da un [e-commerce per farmacie](https://docs.mia-platform.eu/docs/runtime_suite/pharma-e-commerce-backend/overview) e da un workflow per il monitoraggio dell'aderenza terapeutica.

Poiché era difficile garantire la coerenza dei dati ed evitare errori lungo la catena del valore, il Flow Manager è stato lo strumento perfetto da utilizzare, dato che **gestisce in modo efficiente l'intero processo di ordinazione e acquisto**, arrivando a innescare notifiche e avvisi durante la consegna dell'ultimo miglio.

Nello specifico, il processo di transazione dell'ordine svolgerà le seguenti attività:

- L'utente entra nell'e-commerce;
- L'utente seleziona l'articolo dalla farmacia più vicina;
- L'utente clicca su "Ordina";
- L'ordine viene creato;
- L'Order Service notifica la farmacia;
- La farmacia conferma e inserisce un orario per il ritiro;
- Il servizio di pagamento permette all'utente di pagare l'ordine;
- L'utente paga l'ordine;
- Il servizio di pagamento aggiorna l'ordine;
- Il servizio di consegna notifica la farmacia e il rider;
- Il rider ritira l'ordine e lo consegna;
- L'ordine viene chiuso.

Naturalmente, anche in questo caso si attiverebbe un processo di remediation se il processo restituisse errori. Ad esempio, quando l'utente fornisce informazioni errate relative al conto bancario o all'indirizzo di consegna, il sistema blocca l'ordine e obbliga l'utente a risolvere il problema. Un altro esempio rilevante è rappresentato dal caso di "*esaurimento scorte*". Il cliente finale può essere bloccato dalla mancanza di disponibilità della farmacia più vicina e reindirizzato alla pagina dell'ordine, che mostra una farmacia diversa in grado di fornire il farmaco.

## Conclusioni

Per garantire la coerenza dei dati, è indispensabile occuparsi di diverse complessità assicurando sempre la sicurezza dagli errori. Per questo motivo, Mia-Care si affida al **performante Flow Manager per gestire i processi basati su eventi**.

Mentre gli ospedali possono ottimizzare i processi e ridurre i costi operativi abbassando il tasso di no-show, la startup di salute digitale focalizzata sulla primary care potrebbe sfruttare il Flow Manager per offrire ai pazienti una soluzione e-commerce facile da usare e aumentare il volume degli acquisti.

Questi erano solo due esempi del grande potenziale del Flow Manager. Infatti, questo potente strumento permette di gestire potenzialmente qualsiasi saga, non importa quanto sia complessa, e aiuta anche a visualizzarla grazie al [Flow Manager Visualizer](https://docs.mia-platform.eu/docs/development_suite/api-console/api-design/flow-manager-visualizer). Questa rappresentazione grafica permette sia agli sviluppatori sia alle persone non tecniche di comprendere chiaramente l'intera saga, senza alcun bisogno di progettarla manualmente, perché Mia-Platform Console fa tutto il lavoro al posto tuo.

Immagina quanto tempo puoi risparmiare personalizzando questo strumento pronto all'uso in base alle esigenze del tuo ospedale, invece di partire da zero.
