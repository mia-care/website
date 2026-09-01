---
title: "CRUD Encryption: proteggi la condivisione di dati sensibili in sanità"
slug: "crud-encryption-proteggi-la-condivisione-di-dati-sensibili-in-sanita"
description: "La condivisione di dati sanitari sensibili nel rispetto del GDPR richiede solide misure di protezione. Scopri come CRUD Encryption protegge le informazioni dei pazienti senza limitarne l'accesso."
seoTitle: "CRUD Encryption: Proteggere i Dati Sanitari"
date: "2023-01-17"
modified: "2023-03-06"
author: "dario-esposito"
categories: ["technology-application"]
featuredImage: "/blog/images/crud-encryption-protect-the-sharing-of-sensitive-data-in-healthcare.webp"
featuredImageAlt: "CRUD Encryption: proteggi la condivisione di dati sensibili in sanità"
excerpt: "Articolo pubblicato originariamente sul blog di Mia-Platform. Il tema della gestione e della protezione dei dati sensibili in sanità ha da sempre suscitato …"
---

*Articolo pubblicato originariamente sul [blog di Mia‑Platform](https://blog.mia-platform.eu/en/crud-encryption-protect-the-sharing-of-sensitive-data-in-healthcare).*

Il tema della gestione e della protezione dei dati sensibili in sanità ha da sempre suscitato l'interesse degli esperti, generando nel tempo alcune discussioni. L'imposizione di regole per **garantire la riservatezza delle informazioni personali** entra spesso in conflitto con l'urgenza dei medici di agire rapidamente per il benessere dei pazienti. Inoltre, avere a che fare con un sistema burocratico incline a creare inefficienze alza ulteriormente il livello di complessità.

È solo con la definizione e la diffusione del Regolamento Generale sulla Protezione dei Dati (GDPR), avvenuta nel 2016, che **la sicurezza e la privacy dei dati nell'Unione Europea sono cambiate radicalmente**. In questo contesto, i fornitori di servizi sanitari e gli ospedali hanno progressivamente iniziato a dare reale importanza al livello di riservatezza destinato ai pazienti.

Sebbene il GDPR non dedichi una sezione specifica alla gestione dei dati clinici, questi insiemi di informazioni sono classificati come dati sensibili e includono:

> I dati personali relativi alla salute fisica o mentale di una persona fisica, compresa la prestazione di servizi di assistenza sanitaria, che rivelano informazioni relative al suo stato di salute.
>
> (Art. 4, n. 15 – GDPR)

Con la diffusione delle tecnologie digitali a livello globale, che **favorisce la condivisione di grandi volumi di dati sensibili**, l'[articolo 35](https://gdpr-info.eu/art-35-gdpr/) del GDPR richiede alle aziende di condurre una valutazione d'impatto (o [DPIA](https://gdpr.eu/data-protection-impact-assessment-template/) – Data Protection Impact Assessment). Questo processo mira a **identificare e mitigare i rischi** derivanti da un uso errato delle nuove tecnologie nel trattamento dei dati personali.

Seguendo le direttive promosse dalla struttura generale del GDPR per la gestione del rischio, tra le aziende sanitarie è emersa la necessità di **definire best practice condivise** per valutare l'impatto delle nuove tecnologie quando sono coinvolti dati clinici personali. In questo contesto, una buona fonte di valore si trova nel modello di [Health Technology Assessment](https://www.salute.gov.it/portale/temi/p2_6.jsp?id=5199&area=dispositivi-medici&menu=tecnologie) (HTA), che include i requisiti definiti dal GDPR all'interno di un approccio multidisciplinare. Così, oltre alla privacy e alla protezione dei dati, viene monitorato **come le nuove tecnologie condizionano i percorsi di cura e l'efficacia dei trattamenti medici.**

Questo metodo aiuta a stimare come la tecnologia digitale condiziona direttamente l'organizzazione aziendale, i processi di business e l'adozione di nuove pratiche terapeutiche, superando la distanza tra la funzione IT e gli altri reparti dell'azienda. La valutazione include i [seguenti aspetti](https://www.riskcompliance.it/news/gli-aspetti-peculiari-di-una-dpia-in-ambito-sanitario/):

- Analisi del problema sanitario e delle caratteristiche della soluzione digitale;
- Sicurezza, non solo dal punto di vista tecnologico ma anche sanitario e organizzativo;
- Efficacia clinica;
- Protezione dei dati personali;
- Prospettiva del paziente;
- Aspetti economici;
- Aspetti organizzativi e integrazione di dati e processi;
- Aspetti socio-culturali, etici e legali.

## Cos'è la CRUD Encryption e come contribuisce alla protezione dei dati sensibili?

Mia‑Platform presta grande attenzione al feedback dei clienti per arricchire il prodotto con nuove funzionalità che riscuotono forte interesse sul mercato. Tra le richieste più discusse, due in particolare emergono: la protezione dei database da accessi non autorizzati e l'**oscuramento di specifici gruppi di informazioni per le persone prive di autorizzazione**.

Per questo motivo, [Mia‑Platform v8.0](https://blog.mia-platform.eu/en/facilitate-the-development-experience-with-mia-platform-v8.0) ha introdotto con successo un nuovo componente del servizio CRUD, che consente di gestire la privacy e le informazioni sensibili come descritto sopra. In che modo? Lavorando sui livelli di riservatezza e sulla visibilità dei dati raccolti all'interno dei sistemi di registrazione.

La **CRUD Encryption** può essere attivata su uno o più campi di un documento ed esegue la crittografia dei dati selezionati prima di inviarli ai database, bloccando la visibilità ai profili utente privi delle autorizzazioni necessarie per l'accesso.

Il flusso di informazioni che elabora i dati è semplice e può avvenire in scrittura (crittografia dei dati) e in lettura (decrittografia dei dati).

Vale la pena prestare attenzione al valore delle chiavi di crittografia nel processo, poiché la loro perdita renderebbe impossibile accedere ai dati salvati in precedenza. Infatti, per eseguire correttamente l'operazione, sono necessari due elementi:

- La **Master Key**, utilizzata per crittografare le varie chiavi di decrittografia;
- Le **Data Encryption Key**, generate per eseguire l'operazione di crittografia/decrittografia dei dati e salvate in una collezione creata sul database.

## L'utilizzo prezioso della CRUD Encryption nel settore sanitario: l'esperienza di Mia‑Care

Mia‑Care nasce come verticale di Mia‑Platform dedicato ai fornitori di servizi sanitari e ha ricevuto notevole attenzione e riconoscimenti dal mercato come uno dei provider tecnologici più innovativi.

Il team di Mia‑Care si confronta ogni giorno con richieste legate a una **gestione puntuale e sicura delle informazioni sensibili**. Dall'anagrafica, passando per l'identificazione di patologie croniche o acute, fino al processo di fatturazione, l'uso della CRUD Encryption riveste un'importanza strategica nei progetti attuali.

In questo contesto, il GDPR europeo suggerisce le best practice per gestire i dati con un duplice obiettivo: da un lato, proteggere il livello di riservatezza delle informazioni condivise, dall'altro, affrontare il rischio di violazioni dei dati.

In particolare, è interessante la distinzione tra **anonimizzazione e pseudonimizzazione dei dati**. Mentre le informazioni pseudonimizzate possono essere recuperate utilizzando una chiave di decrittografia, l'anonimizzazione dei dati è un processo irreversibile.

Per comprendere meglio i vantaggi offerti dalla CRUD Encryption, è utile considerare un esempio pratico.

All'interno di un progetto che abilita l'erogazione di servizi sanitari a cittadini privati, l'uso della funzione di decrittografia del servizio CRUD ha aiutato a definire i diversi livelli di sensibilità dei dati e a **decidere se crittografare o decrittografare le informazioni, a seconda di chi ne ha bisogno**. Questa funzionalità consente anche di attivare la pseudonimizzazione, scollegando le informazioni sanitarie dai dati personali.

Pertanto, se il medico richiede di visualizzare la storia clinica del paziente, l'informazione sarà in chiaro. Tuttavia, se la funzione amministrativa ha bisogno di dati come l'anagrafica, le informazioni cliniche (ad esempio la patologia o la terapia) saranno nascoste.

**Per lavorare in modo efficiente su utenti e autorizzazioni**, la CRUD Encryption interagisce con l'ACL Service (Access-control List) per fornire diversi livelli di visibilità in base al ruolo dell'utente. Questo microservizio applica regole di controllo degli accessi a un insieme di dati su due dimensioni: per riga, per visualizzare solo i documenti creati dall'utente; per colonna, limitando i campi che un utente può vedere in base al profilo assegnato.

In conclusione, le chiavi di decrittografia sono decentralizzate e gestite dal Key Manager, che opera come descritto in precedenza, garantendo il massimo livello di sicurezza. Se un soggetto esterno forzasse l'accesso ai database dell'azienda, non sarebbe possibile mettere in relazione le informazioni personali dei beneficiari con i documenti della storia clinica o i referti medici.

Vuoi approfondire gli aspetti tecnici dei [plugin](https://docs.mia-platform.eu/docs/runtime_suite/mia-platform-plugins) descritti per capire meglio come aggiungerli nella tua [architettura a microservizi](https://blog.mia-platform.eu/en/microservices-the-architectural-style-for-modern-applications)? Leggi la documentazione completa:

- [**CRUD Encryption**](https://docs.mia-platform.eu/docs/runtime_suite/crud-service/encryption_configuration);
- [**ACL Service**](https://docs.mia-platform.eu/docs/runtime_suite/mongodb-reader/acl).
