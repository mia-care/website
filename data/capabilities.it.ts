import type { Capability } from "./capabilities";

export const capabilities: Capability[] = [
  {
    slug: "sdlc-orchestrator",
    code: "01 — SDLC",
    name: "SDLC Workflow Orchestrator",
    tagline: "Una piattaforma. Ogni strumento. Un'unica fonte di verità.",
    description:
      "Collega repository Git, ALM, eQMS e la tua Internal Developer Platform in un unico workspace unificato. Nessun rip-and-replace. Solo compliance, integrata nel modo in cui il tuo team già lavora.",
    whatItDoes: {
      heading: "I tuoi strumenti, connessi. I tuoi dati, unificati.",
      body: "I team di engineering lavorano già con gli strumenti di cui si fidano: Git per il codice, Jira per i task, gli ALM per le specifiche, un eQMS per i record di qualità. Il problema è che questi strumenti conservano i dati in silo, e nessun sistema unico ha il quadro completo.\n\nP4SaMD si posiziona al centro, acquisendo dati da ogni strumento connesso e mantenendo un record live e unificato dell'intero ciclo di vita dello sviluppo. Ogni modifica, approvazione e artefatto catturato in un unico posto, sempre sincronizzato. Struttura di workflow conforme a IEC 62304 integrata, senza interrompere il modo in cui il tuo team lavora.",
    },
    features: [
      {
        label: "Tool Orchestration",
        title: "Connetti senza migrare",
        description:
          "P4SaMD si integra con i tuoi repository Git, strumenti ALM ed eQMS esistenti senza migrazione verso un sistema proprietario. Il tuo team mantiene i propri strumenti. La piattaforma aggiunge lo strato di compliance.",
      },
      {
        label: "Guided SDLC Workflow",
        title: "Template di workflow IEC 62304",
        description:
          "Workflow conformi a IEC 62304 integrati per ogni classe di sicurezza (A, B, C) guidano i team attraverso le fasi corrette e gli artefatti richiesti. Ogni team sa cosa fare dopo. Gli auditor trovano sempre ciò che si aspettano.",
      },
      {
        label: "Single Source of Truth",
        title: "Tutti i tuoi dati, in un unico posto",
        description:
          "P4SaMD acquisisce continuamente dati dai tuoi strumenti connessi e mantiene un record live di ogni requisito, rischio, output di design, modifica al codice e approvazione. Un quadro coerente del progetto, indipendentemente dallo strumento che l'ha generato.",
      },
      {
        label: "Seamless Integration",
        title: "Nessun rip-and-replace",
        description:
          "P4SaMD funziona insieme al tuo stack di strumenti esistente con connettori leggeri. Nessuna migrazione forzata, nessuna riqualificazione, nessuna interruzione ai rilasci già in corso.",
      },
    ],
    regulations: ["IEC 62304", "ISO 13485", "EU MDR 2017/745", "ISO 14971", "FDA"],
    relatedUseCases: ["legacy-remediation", "greenfield-samd", "high-risk-ai-cdss"],
    seo: {
      title: "SDLC Workflow Orchestrator | Capability P4SaMD | Mia-Care",
      description:
        "Collega Git, ALM ed eQMS in un unico workflow SDLC conforme a IEC 62304. Nessun rip-and-replace. Compliance integrata nel modo in cui il tuo team già lavora.",
    },
  },
  {
    slug: "artt-traceability",
    code: "02 — ARTT",
    name: "Automated Real-time Traceability",
    tagline: "Ogni requisito. Ogni rischio. Ogni artefatto. Connessi.",
    description:
      "ARTT garantisce la tracciabilità end-to-end da requisiti e rischi a design, implementazione e verifica in tempo reale, attraverso sistemi ALM, fonti esterne e file. La tracciabilità guida lo sviluppo, fa emergere le lacune prima che diventino non conformità e assembla continuamente un Technical File completo.",
    whatItDoes: {
      heading: "Tracciabilità che si costruisce da sola, continuamente.",
      body: "La tracciabilità manuale e frammentata è il rischio nascosto dei progetti software regolamentati. Inizia come un foglio di calcolo e finisce come un rischio in audit. Quando il progetto è pronto per la review, la matrice è già obsoleta e lo sforzo di riconciliazione ritarda il rilascio.\n\nARTT si integra direttamente con il tuo ALM, i repository Git e la toolchain di risk management per mappare ogni requisito al suo output di design, ogni output di design alla sua implementazione, e ogni implementazione alla sua evidenza di verifica, in tempo reale. Il grafo di tracciabilità rileva le lacune non appena si aprono, mantenendo i team concentrati su design e delivery piuttosto che sulla manutenzione documentale.\n\nLe matrici di tracciabilità sono costantemente allineate a IEC 62304, ISO 14971 e alle tue SOP di qualità, fornendo un Technical File completo in ogni punto del ciclo di vita.",
    },
    features: [
      {
        label: "Real-time Mapping",
        title: "Collegamento automatico mentre il lavoro avviene",
        description:
          "I requisiti sono collegati a commit di codice, casi di test e controlli di rischio nel momento stesso in cui vengono creati o modificati. Il grafo di tracciabilità è sempre un passo avanti.",
      },
      {
        label: "Living Traceability Matrix",
        title: "Sempre aggiornata, sempre pronta per l'audit",
        description:
          "La matrice di tracciabilità del DHF è mantenuta automaticamente in ogni momento. Nessuno sprint di riconciliazione prima degli audit: la matrice non è mai obsoleta.",
      },
      {
        label: "Risk Integration",
        title: "Elementi di rischio ISO 14971 collegati alle mitigazioni",
        description:
          "Ogni elemento di rischio è automaticamente collegato ai software item che lo mitigano e alla corrispondente evidenza di verifica, creando la catena di rischio a ciclo chiuso richiesta dagli auditor.",
      },
      {
        label: "Gap Detection",
        title: "Collegamenti mancanti emersi durante lo sviluppo, non solo prima degli audit",
        description:
          "ARTT monitora continuamente il grafo di tracciabilità e fa emergere le lacune non appena si aprono: un requisito senza verifica, un rischio non controllato, una modifica senza impact assessment. Lo sviluppo resta sui binari invece di scoprire i problemi al momento dell'audit.",
      },
    ],
    regulations: ["IEC 62304", "ISO 14971", "EU MDR 2017/745", "FDA", "ISO 13485"],
    relatedUseCases: ["legacy-remediation", "high-risk-ai-cdss", "greenfield-samd"],
    seo: {
      title: "Automated Real-time Traceability (ARTT) | P4SaMD | Mia-Care",
      description:
        "Tracciabilità end-to-end dai requisiti al codice, mantenuta automaticamente in tempo reale. Nessuno sprint di riconciliazione. Nessuna lacuna prima degli audit.",
    },
  },
  {
    slug: "documentation-engine",
    code: "03 — DOCS",
    name: "Documentation Engine",
    tagline: "Il tuo pacchetto di audit, assemblato automaticamente.",
    description:
      "P4SaMD genera automaticamente Technical File, record DHF, evidenze di rischio, report di verifica e audit trail, ed è sempre pronto per l'audit dal primo commit al rilascio finale.",
    whatItDoes: {
      heading: "Documentazione che si scrive da sola, a partire dal tuo lavoro.",
      body: "Il Documentation Engine permette al tuo team SaMD di concentrarsi su ciò che sa fare meglio: costruire ottimo software. Collegato direttamente ai tuoi strumenti SDLC, acquisisce dati di sviluppo live in tempo reale e compila continuamente il Technical File, il DHF e tutte le evidenze regolatorie richieste. I tuoi template, la tua terminologia, pronti per la submission in qualsiasi momento del ciclo.",
    },
    features: [
      {
        label: "Technical File & DHF",
        title: "Compilazione continua di Technical File e DHF",
        description:
          "Il Technical File e il DHF sono compilati continuamente a partire dai dati di sviluppo live (requisiti, rischi, design, implementazione e verifica) e riflettono sempre lo stato attuale del sistema.",
      },
      {
        label: "Technical File Generation",
        title: "Technical File EU MDR pronti per la submission",
        description:
          "Produce technical file pronti per la submission regolatoria usando i tuoi template e il tuo branding, e copre automaticamente tutti i requisiti a partire dai dati strutturati della piattaforma.",
      },
      {
        label: "Release Notes",
        title: "Release notes conformi, in automatico",
        description:
          "Ogni rilascio genera automaticamente il pacchetto documentale completo: SRS, Test Report, Risk Management File e Matrice di Tracciabilità, con change log, impact assessment e riepilogo di verifica.",
      },
      {
        label: "Audit Trail",
        title: "Record immutabile di ogni decisione e modifica",
        description:
          "Un log con timestamp e a prova di manomissione di ogni decisione, modifica e approvazione lungo l'intero SDLC, che risponde a 'chi ha deciso cosa, e quando?' istantaneamente, per qualsiasi punto del ciclo di vita del prodotto.",
      },
    ],
    regulations: ["ISO 13485", "EU MDR 2017/745", "FDA", "21 CFR Part 820", "IEC 62304"],
    relatedUseCases: ["legacy-remediation", "high-risk-ai-cdss", "greenfield-samd"],
    seo: {
      title: "Documentation Engine | Capability P4SaMD | Mia-Care",
      description:
        "Genera automaticamente record DHF, Technical File e audit trail a partire dai dati di sviluppo live. Documentazione pronta per l'audit senza sforzo manuale.",
    },
  },
  {
    slug: "smart-assistant",
    code: "04 — WHISPER",
    name: "Smart Assistant (Whisper)",
    tagline: "Competenza regolatoria, sempre disponibile nel tuo workflow.",
    description:
      "Motore di regole deterministico più motore di policy basato su LLM per la compliance regolatoria. Allineato a MDR, IEC 62304, ISO 14971, FDA, EU AI Act, GMLP e PCCP. Intelligenza di compliance attiva integrata in ogni fase dell'SDLC.",
    whatItDoes: {
      heading: "Competenza regolatoria nel punto stesso dell'engineering.",
      body: "Il modello tradizionale concentra tutta la competenza regolatoria in un piccolo team di specialisti RA/QA che dovrebbero coprire in tempo reale ogni decisione di engineering. A una certa scala, questo modello smette di funzionare.\n\nWhisper è un motore di intelligenza regolatoria allineato a MDR, ISO 13485, IEC 62304, ISO 14971, FDA, EU AI Act, GMLP e PCCP. Applica regole rigide, valuta policy di compliance più sfumate e fa emergere i punti ciechi prima che diventino non conformità in audit. Le decisioni di routine vengono gestite nel punto stesso dell'engineering. I team RA/QA restano concentrati dove la loro competenza ha il maggiore impatto.",
    },
    features: [
      {
        label: "Deterministic Rule Enforcement",
        title: "Nessuna ambiguità, nessuna lacuna",
        description:
          "Whisper applica un ruleset regolatorio curato e versionato in cui ogni azione di enforcement è tracciabile a un requisito specifico. Controlli di compliance binari, confini di classificazione del software, trigger di documentazione obbligatoria, tutti gestiti in modo coerente, ogni volta.",
      },
      {
        label: "Directive Evaluation",
        title: "Giudizio di compliance per decisioni complesse",
        description:
          "Oltre alle regole rigide, Whisper valuta policy di compliance complesse che richiedono analisi contestuale, facendo emergere raccomandazioni strutturate e tracciabili così il tuo team prende decisioni informate invece di supposizioni.",
      },
      {
        label: "Proactive Suggestions",
        title: "Intercetta i problemi prima che diventino non conformità",
        description:
          "Whisper comprende il contesto completo di ciò che si sta costruendo: identifica i rischi a valle, segnala opportunità di ottimizzazione e raccomanda azioni per ridurre il debito di compliance prima che si accumuli.",
      },
      {
        label: "Contextual Guidance",
        title: "La guida giusta al momento giusto",
        description:
          "Whisper fa emergere enforcement e suggerimenti in base a ciò su cui lo sviluppatore sta lavorando in quel momento. Implementare un software item di Classe B attiva la guida IEC 62304 specifica per quella classe di sicurezza, non un promemoria generico.",
      },
    ],
    regulations: [
      "ISO 13485",
      "IEC 62304",
      "ISO 14971",
      "EU MDR 2017/745",
      "FDA",
      "EU AI Act",
      "GMLP",
    ],
    relatedUseCases: ["high-risk-ai-cdss", "greenfield-samd", "legacy-remediation"],
    seo: {
      title: "Smart Assistant Whisper | Capability P4SaMD | Mia-Care",
      description:
        "Guida regolatoria deterministica integrata nel tuo SDLC. Whisper applica regole di compliance e segnala suggerimenti proattivi allineati a IEC 62304, MDR, FDA ed EU AI Act.",
    },
  },
  {
    slug: "ai-compliance",
    code: "05 — AI",
    name: "Master AI for Compliance",
    tagline: "Distribuisci software medicale abilitato dall'AI con piena chiarezza regolatoria.",
    description:
      "Un set di funzionalità dedicato per SaMD abilitati dall'AI che applica requisiti di trasparenza, spiegabilità, audit record e qualità dei dati lungo l'intero ciclo di vita di compliance di componenti, agenti e modelli AI.",
    whatItDoes: {
      heading: "L'infrastruttura di compliance per SaMD abilitati dall'AI.",
      body: "Componenti, agenti e modelli AI stanno trasformando i prodotti SaMD: abilitano diagnostica più intelligente, workflow adattivi e migliori risultati per i pazienti. Ma introducono una complessità regolatoria che i sistemi QMS standard non sono mai stati progettati per gestire: i framework EU AI Act, FDA GMLP e PCCP richiedono trasparenza, spiegabilità, audit record e controlli sulla qualità dei dati che vanno ben oltre la compliance software tradizionale.\n\nMaster AI for Compliance aggiunge uno strato dedicato all'interno di P4SaMD che gestisce l'intero ciclo di vita di compliance dei componenti AI, dagli input di design e la review regolatoria fino all'adesione all'implementazione, il quality assurance e la documentazione. Applica requisiti di trasparenza, spiegabilità e audit record, e supporta la documentazione strutturata dei dati di training AI, delle versioni dei modelli, delle metriche di performance e dei piani di change control PCCP.",
    },
    features: [
      {
        label: "AI Transparency Framework",
        title: "Requisiti EU AI Act Annex IV, applicati",
        description:
          "Genera e mantiene automaticamente la documentazione di trasparenza dei sistemi AI richiesta dall'EU AI Act Annex IV, incluse finalità d'uso, metriche di performance, valutazioni della qualità dei dati e disposizioni di human oversight.",
      },
      {
        label: "PCCP Support",
        title: "Aggiornamenti dei modelli senza nuova submission completa",
        description:
          "Supporto strutturato per i Predetermined Change Control Plan della FDA, che permette ai team di pianificare ed eseguire aggiornamenti dei modelli entro confini pre-approvati. Nessuna nuova submission regolatoria per ogni iterazione dell'algoritmo.",
      },
      {
        label: "AI Component Audit Records",
        title: "Tracciamento automatico di ogni stato del modello",
        description:
          "Audit record automatizzati tracciano l'intero ciclo di vita di ogni componente, agente e modello AI: caratteristiche dei dati di training, storico delle versioni, benchmark di performance, risultati di validazione e valutazioni di bias. Il record continuo richiesto da regolatori e organismi notificati.",
      },
      {
        label: "AI Risk Management",
        title: "ISO 14971 estesa per i failure mode dell'AI",
        description:
          "Estende il framework di risk management ISO 14971 per coprire failure mode specifici dell'AI inclusi data drift, distribution shift, bias algoritmico e degrado di performance nel tempo.",
      },
    ],
    regulations: ["EU AI Act", "GMLP", "PCCP", "EU MDR 2017/745", "FDA"],
    relatedUseCases: ["high-risk-ai-cdss", "greenfield-samd", "legacy-remediation"],
    seo: {
      title: "Master AI for Compliance | Capability P4SaMD | Mia-Care",
      description:
        "Applica i requisiti EU AI Act, GMLP e FDA PCCP per SaMD abilitati dall'AI. Audit record automatizzati, report di trasparenza e change management allineato al PCCP.",
    },
  },
  {
    slug: "brownfield-remediator",
    code: "06 — BROWNFIELD",
    name: "Brownfield Remediator",
    tagline: "Certifica ciò che hai già costruito, senza ricostruirlo.",
    description:
      "Acquisisce l'intero estate software legacy (documentazione e asset tecnici), esegue una gap analysis automatizzata rispetto a IEC 62304 e EU MDR, e genera un piano di remediation prioritizzato. Nessuno sviluppo completo da zero richiesto.",
    whatItDoes: {
      heading: "Da software legacy a evidenza pronta per l'audit.",
      body: "Milioni di righe di software per dispositivi medici sono state scritte prima ancora che esistesse lo standard IEC 62304 e prima dell'entrata in vigore dell'EU MDR. Questo software funziona ancora e crea valore, ma non può essere certificato, aggiornato o portato su nuovi mercati senza soddisfare framework regolatori successivi alla sua scrittura.\n\nIl Brownfield Remediator acquisisce l'intero estate legacy indipendentemente da formato, linguaggio o maturità della documentazione. Automatizza la gap analysis rispetto al framework regolatorio scelto, mappa ciò che esiste rispetto a ciò che è richiesto, e genera una task list strutturata e prioritizzata. Un archivio legacy disperso diventa un record di compliance pronto per l'audit.",
    },
    features: [
      {
        label: "Automated Ingestion",
        title: "Importa qualsiasi documentazione, qualsiasi asset tecnico",
        description:
          "Acquisisce l'intero estate legacy nel modello di compliance unificato di P4SaMD: documentazione (analisi dei requisiti, specifiche, architettura, piani di test, report di test) e asset tecnici (codice sorgente, schemi DB, SBOM, file di configurazione). Nessuna migrazione manuale richiesta.",
      },
      {
        label: "Gap Analysis",
        title: "Lacune rispetto al framework regolatorio applicabile, emerse automaticamente",
        description:
          "Il Compliance Engine di P4SaMD mappa gli artefatti esistenti rispetto al framework regolatorio scelto (IEC 62304, ISO 13485, EU MDR, FDA, ISO 14971) e identifica ogni lacuna: cosa manca, è incompleto o non conforme, con stime di sforzo di remediation prioritizzate.",
      },
      {
        label: "Legacy Remediation",
        title: "Dalle lacune di compliance all'evidenza pronta per l'audit",
        description:
          "Traduce l'output della gap analysis in un percorso di remediation strutturato: la documentazione mancante viene abbozzata, gli artefatti non conformi segnalati con azioni correttive, e la tracciabilità parziale estesa. Il pacchetto di evidenza richiesto da auditor e organismi notificati.",
      },
      {
        label: "Remediation Planning",
        title: "Task list strutturata e prioritizzata per la remediation di compliance",
        description:
          "Genera una task list di remediation strutturata e prioritizzata per priorità regolatoria e sforzo, che i team possono importare in qualsiasi strumento ALM e iniziare a eseguire immediatamente.",
      },
    ],
    regulations: [
      "IEC 62304",
      "ISO 13485",
      "ISO 14971",
      "EU MDR 2017/745",
      "FDA",
      "Custom Frameworks",
    ],
    relatedUseCases: ["legacy-remediation", "high-risk-ai-cdss", "greenfield-samd"],
    seo: {
      title: "Brownfield Remediator | Capability P4SaMD | Mia-Care",
      description:
        "Certifica software medicale legacy senza ricostruirlo. Gap analysis automatizzata, acquisizione completa dell'estate e piani di remediation prioritizzati per IEC 62304, EU MDR e altro.",
    },
  },
  {
    slug: "software-development",
    code: "07 — DEV",
    name: "Secure Software Development",
    tagline: "Sicuro by design. Dalla prima riga di codice.",
    description:
      "Controllo di design completo dalla specifica al codice, verifica continua dell'implementazione e gestione della supply chain software tramite controllo delle dipendenze e vulnerability management secondo IEC 81001-5-1.",
    whatItDoes: {
      heading: "Sicurezza e compliance integrate nella toolchain di sviluppo.",
      body: "Il software medicale è una superficie di attacco sempre più presa di mira. Una vulnerabilità in un componente software di un dispositivo è un evento di patient safety e un fallimento regolatorio, non solo un incidente di sicurezza. IEC 81001-5-1 stabilisce lo standard per la cybersecurity del software sanitario, ma soddisfarlo richiede molto più di un audit di sicurezza al momento del rilascio.\n\nControlli di sicurezza e compliance integrati direttamente nel workflow: allineamento del design, rilevamento delle anomalie e gestione completa del ciclo di vita di dipendenze e vulnerabilità, dal rilevamento all'approvazione e alla documentazione.",
    },
    features: [
      {
        label: "Implementation Verification",
        title: "Controlli continui dell'implementazione rispetto alle specifiche software",
        description:
          "Controlli automatici verificano l'implementazione rispetto alle specifiche software a ogni livello (file di design, codice e artefatti di test): le anomalie vengono rilevate prima di propagarsi nel record di compliance.",
      },
      {
        label: "SBOM Management",
        title: "Rilevamento, approvazione e documentazione delle dipendenze",
        description:
          "Il rilevamento plug-and-play delle dipendenze genera e mantiene automaticamente il Software Bill of Materials per ogni software item. Ogni dipendenza è tracciata, approvata e documentata: i team hanno piena visibilità sulla propria supply chain software con una configurazione minima.",
      },
      {
        label: "Vulnerability Management",
        title: "Rilevamento CVE automatizzato con risk impact assessment",
        description:
          "Copre l'intero ciclo di vita delle vulnerabilità: rilevamento automatizzato, pianificazione della mitigazione basata sul rischio, workflow di approvazione e documentazione. Distingue tra un aggiornamento minore di una dipendenza e una non conformità che richiede una risposta immediata di risk management IEC 81001-5-1.",
      },
      {
        label: "Secure Development Guardrails",
        title: "Impedisce l'ingresso di codice vulnerabile nella build",
        description:
          "Applica standard di codifica sicura e blocca l'introduzione nel codebase di dipendenze con vulnerabilità critiche note: il percorso non sicuro resta strutturalmente indisponibile durante lo sviluppo.",
      },
    ],
    regulations: ["IEC 81001-5-1", "IEC 62304", "ISO 13485"],
    relatedUseCases: ["greenfield-samd", "legacy-remediation", "high-risk-ai-cdss"],
    seo: {
      title: "Secure Software Development | Capability P4SaMD | Mia-Care",
      description:
        "Integra la compliance cybersecurity IEC 81001-5-1 nel tuo SDLC per dispositivi medici. Verifica dell'implementazione, controllo delle dipendenze e gestione completa del ciclo di vita delle vulnerabilità.",
    },
  },
  {
    slug: "guided-workflows",
    code: "08 — GUIDED",
    name: "Guided Workflows",
    tagline: "Guardrail di compliance per ogni sviluppatore del tuo team.",
    description:
      "Guida passo dopo passo ai workflow e un assistente AI conversazionale per la compliance in ogni fase dell'SDLC, combinando l'indicizzazione dei framework regolatori con dati di progetto in tempo reale. Nessuna competenza regolatoria approfondita richiesta.",
    whatItDoes: {
      heading: "La struttura che mantiene sui binari lo sviluppo conforme.",
      body: "Anche i team di engineering più esperti che costruiscono SaMD affrontano lo stesso rischio strutturale: senza guardrail chiari, i processi conformi tendono a deragliare. I passaggi vengono saltati sotto la pressione della delivery. Gli artefatti vengono documentati a posteriori.\n\nGuided Workflows fornisce una struttura contestuale, passo dopo passo, attraverso ogni fase del ciclo di vita IEC 62304 e mantiene i team sul percorso corretto indipendentemente dal loro background regolatorio. Un assistente di compliance specializzato è il nucleo di conoscenza del progetto: combina l'indicizzazione dei framework regolatori con l'accesso in tempo reale a documentazione caricata, strumenti integrati e dati di implementazione. Workflow specifici per ruolo fanno emergere l'ambito giusto per ogni contributore.",
    },
    features: [
      {
        label: "Step-by-step Process Guidance",
        title: "Percorri ogni fase del ciclo di vita",
        description:
          "Guida i team attraverso ogni fase del ciclo di vita SDLC con istruzioni contestuali, prompt decisionali e checklist degli artefatti richiesti, così il processo corretto è sempre il percorso di minor resistenza.",
      },
      {
        label: "Compliance Assistant",
        title: "Intelligenza di compliance consapevole del progetto, sempre nel contesto",
        description:
          "Un motore AI conversazionale che combina l'indicizzazione dei framework regolatori (IEC 62304, MDR, ISO 14971) con l'accesso in tempo reale ai dati di progetto: documentazione caricata, strumenti integrati e implementazione. Fornisce guida specifica per il contesto per garantire coerenza e compliance a livello di progetto.",
      },
      {
        label: "Role-based Guidance",
        title: "Workflow personalizzati per ruolo e responsabilità",
        description:
          "I workflow per sviluppatori, QA e regulatory affairs fanno emergere ciascuno l'ambito e la profondità appropriati. Gli sviluppatori vedono la guida a livello implementativo, il QA vede i requisiti di verifica, RA vede i task di documentazione a livello di submission.",
      },
      {
        label: "Onboarding Accelerator",
        title: "Da zero conoscenza SaMD a delivery conforme",
        description:
          "Percorso di onboarding strutturato per team nuovi allo sviluppo SaMD, che comprime la curva di apprendimento da mesi a giorni attraverso sequenze di task guidate, spiegazioni contestuali della normativa e checklist per milestone.",
      },
    ],
    regulations: ["ISO 13485", "IEC 62304", "EU MDR 2017/745", "FDA"],
    relatedUseCases: ["greenfield-samd", "high-risk-ai-cdss", "legacy-remediation"],
    seo: {
      title: "Guided Workflows | Capability P4SaMD | Mia-Care",
      description:
        "Guida alla compliance passo dopo passo per ogni sviluppatore, indipendentemente dal background regolatorio. Workflow basati sul ruolo allineati a IEC 62304 e ISO 13485.",
    },
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
