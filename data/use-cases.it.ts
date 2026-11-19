import type { UseCase } from "./use-cases";

export const useCases: UseCase[] = [
  {
    slug: "greenfield-samd",
    segment: "Per startup e scaleup pre-market",
    name: "Sviluppo SaMD Greenfield",
    tagline:
      "Costruire un SaMD da zero significa affrontare due sfide simultanee: scrivere il software e soddisfare il regolatore. P4SaMD le rende la stessa fase.",
    problem: {
      heading: "Lo sprint documentale di 3-6 mesi che uccide lo slancio del lancio.",
      body: "Engineering e documentazione seguono timeline disconnesse: quando i team di qualità iniziano a documentare, la tracciabilità è già rotta e il sistema è cambiato. Il risultato è uno sprint documentale di 3-6 mesi che ritarda i ricavi e mette sotto pressione il team di qualità, costretto a ricostruire artefatti che non sono mai stati catturati in modo incrementale.",
    },
    need: {
      heading: "Compliance come output continuo del normale lavoro di engineering.",
      body: "Un framework che elimina l'attrito tra velocità di engineering e requisiti regolatori, integrando la compliance direttamente nell'SDLC così i team costruiscono software pronto per l'audit a ogni incremento, non solo al traguardo finale.",
    },
    solution: {
      heading: "Dal primo commit all'MVP conforme, in un solo passaggio.",
      body: "P4SaMD orchestra la compliance in continuo, monitorando l'ambiente di sviluppo in tempo reale. Man mano che il codice evolve, la documentazione di qualità viene sincronizzata automaticamente.\n\nIl team costruisce il proprio prodotto. P4SaMD costruisce il fascicolo regolatorio in parallelo: l'audit-readiness diventa così l'output predefinito del normale lavoro di engineering.",
    },
    caseStudy: {
      label: "Case Study // Startup Digital Health",
      quote:
        "Una startup Digital Health focalizzata sulla gestione personalizzata della salute metabolica e su piattaforme di supporto clinico, che combina competenza medica e tecnologia avanzata.",
      scope: [
        "API sviluppata su P4SaMD connessa a un EHR regionale",
        "Sviluppo SaMD greenfield completo con orchestrazione continua della compliance dal primo giorno",
        "Matrice di tracciabilità automatizzata mantenuta con zero sforzo manuale durante tutto lo sviluppo",
        "Design History File completo generato continuamente in parallelo al lavoro di engineering",
      ],
      results: [
        {
          metric: "1 Mese",
          label: "da zero a un MVP completamente conforme su infrastruttura sovrana",
        },
        {
          metric: "0",
          label:
            "sforzo manuale richiesto per la manutenzione della matrice di tracciabilità durante lo sviluppo",
        },
        {
          metric: "100%",
          label:
            "Compliance-by-Design: eliminando il tipico sprint documentale di 3-6 mesi prima del lancio",
        },
      ],
    },
    capabilities: [
      "sdlc-orchestrator",
      "guided-workflows",
      "documentation-engine",
      "smart-assistant",
    ],
    seo: {
      title: "Sviluppo SaMD Greenfield | Use Case | Mia-Care P4SaMD",
      description:
        "Costruisci il tuo primo SaMD con la compliance integrata dalla prima riga di codice. Elimina lo sprint documentale pre-lancio. Distribuisci un MVP conforme in settimane, non mesi.",
    },
  },
  {
    slug: "high-risk-ai-cdss",
    segment: "Per enterprise SaMD AI-native",
    name: "Costruire software AI ad alto rischio (CDSS)",
    tagline:
      "Il software clinico basato su AI evolve dinamicamente, ma i modelli di compliance tradizionali assumono che i requisiti siano statici. P4SaMD disaccoppia la tua velocità di engineering dalla rigidità regolatoria.",
    problem: {
      heading: "AI illeggibile, compliance non tracciabile.",
      body: "Il software clinico basato su AI evolve dinamicamente, eppure i modelli di compliance tradizionali assumono che i requisiti siano statici fin dall'inizio. Ogni aggiornamento a un modello AI rischia di innescare una cascata complessa di rework su risk management file, documenti di verifica e submission regolatorie. Il risultato è un freno alla compliance: nei casi peggiori, l'innovazione si ferma del tutto.\n\nProvare che un algoritmo opaco è sicuro per decisioni life-critical richiede un nuovo tipo di evidenza: report di trasparenza, valutazioni del bias, audit record e documentazione PCCP che la maggior parte dei sistemi QMS non è mai stata progettata per generare.",
    },
    need: {
      heading: "Compliance che sta al passo con gli aggiornamenti dei tuoi modelli.",
      body: "Rendi i dispositivi medici basati su AI pronti al futuro, allineando il rigore regolatorio allo sviluppo tecnico ad alta velocità. Un framework che gestisce le sfide uniche della compliance AI (trasparenza, spiegabilità, bias dei dati, PCCP) senza richiedere un nuovo 510(k) per ogni iterazione del modello.",
    },
    solution: {
      heading: "Compliance multi-framework. Un'unica piattaforma.",
      body: "Mia-Care P4SaMD gestisce la compliance AI nella sua interezza (trasparenza, spiegabilità, sicurezza, audit record) attraverso MDR, EU AI Act e GMLP in un unico sistema. Il tuo team distribuisce miglioramenti al modello senza dover scegliere tra velocità e postura di compliance.",
    },
    caseStudy: {
      label: "Case Study // Fornitore CDSS",
      quote:
        "Un fornitore CDSS che utilizza Generative AI e dati sintetici ad alta fedeltà per supportare i clinici con diagnostica di precisione e terapie personalizzate.",
      scope: [
        "Gestione della compliance multi-framework: MDR + EU AI Act + GMLP in un unico sistema unificato",
        "Rilevamento delle lacune in tempo reale via Compliance Engine su tutti e tre i framework regolatori",
        "Model card e report di valutazione del bias automatizzati per ogni versione del modello",
        "Change management allineato al PCCP che permette aggiornamenti dei modelli senza nuova submission completa",
      ],
      results: [
        {
          metric: "50%",
          label: "Riduzione del time-to-compliance per i nuovi rilasci di feature AI",
        },
        {
          metric: "3",
          label:
            "Framework regolatori gestiti in un unico sistema unificato (MDR, EU AI Act, GMLP)",
        },
        { metric: "0", label: "Ritardi di deployment causati da colli di bottiglia documentali" },
      ],
    },
    capabilities: ["ai-compliance", "artt-traceability", "documentation-engine", "smart-assistant"],
    seo: {
      title: "Costruire Software AI ad Alto Rischio (CDSS) | Use Case | Mia-Care P4SaMD",
      description:
        "Distribuisci software clinico basato su AI con compliance EU AI Act, GMLP e MDR in un'unica piattaforma. Audit record automatizzati, supporto PCCP e rilevamento lacune multi-framework.",
    },
  },
  {
    slug: "legacy-remediation",
    segment: "Per grandi gruppi MedTech e Life Sciences enterprise",
    name: "Remediation di software legacy regolamentato",
    tagline:
      "Il debito regolatorio sta bloccando il tuo software legacy. P4SaMD libera il percorso verso la certificazione, senza ricostruire da zero.",
    intro: [
      "I tool di legacy software remediation aiutano i produttori di dispositivi medici a portare il software già sul mercato, o già sviluppato, in linea con le attuali aspettative regolatorie senza riscriverlo: valutano il codice e la documentazione esistenti rispetto a standard come IEC 62304 e ai requisiti FDA, elencano le lacune e aiutano a ricostruire l'evidenza mancante. P4SaMD di Mia-Care, una società Mia-Platform, lo fa con il Brownfield Remediator, il nostro assessment del software legacy: un'importazione guidata del tuo software esistente, una gap analysis automatizzata e un piano di remediation prioritizzato.",
      "Una riscrittura è raramente il primo passo. [IEC 62304](/it/risorse/blog/iec-62304-una-guida-faq-completa) (lo standard internazionale per il ciclo di vita del software dei dispositivi medici) prevede un percorso specifico per il software legacy, e gran parte del lavoro riguarda l'evidenza, non il codice: requisiti, controlli del rischio, test e un registro dei componenti di terze parti.",
    ],
    datePublished: "2026-04-22",
    lastUpdated: "2026-11-19",
    problem: {
      heading: "Software di valore, bloccato dal debito regolatorio.",
      body: "Molte organizzazioni possiedono software legacy di valore non progettato secondo un QMS ISO 13485 o in linea con IEC 62304. Spesso, questi sistemi affrontano anche obsolescenza tecnica. I tentativi di remediation manuale sono costosi, lenti e spesso non superano la review di audit perché mancano di una ricostruzione sistematica della tracciabilità.\n\nL'istinto di ricostruire da zero è costoso e richiede tempo. Ma senza un percorso di remediation strutturato, il software legacy resta bloccato, incapace di essere aggiornato, ricertificato o distribuito legalmente come dispositivo medico su nuovi mercati.",
    },
    need: {
      heading: "Un percorso verso la certificazione che non parte da zero.",
      body: "Una soluzione che acquisisce e valuta i sistemi legacy, stabilisce un percorso di certificazione chiaro senza sviluppo completo su vasta scala, e fornisce un piano di remediation strutturato e basato sull'evidenza che mappa le lacune rispetto a standard specifici.",
    },
    solution: {
      heading: "Da legacy a pronto per l'audit. Senza ricostruire.",
      body: "Mia-Care P4SaMD acquisisce codebase in qualsiasi linguaggio e documentazione esistente, poi utilizza AI agentica per automatizzare le valutazioni legacy e identificare le lacune rispetto a IEC 62304, ISO 13485 ed EU MDR / FDA.\n\nLa piattaforma genera piani di remediation personalizzati e produce documentazione pronta per l'audit nei tuoi template. Ciò che può richiedere mesi di sforzo manuale viene compresso in una task list strutturata e prioritizzata che il tuo team di engineering può eseguire immediatamente.",
    },
    sections: [
      {
        heading: "Lacune di compliance e lacune di cybersecurity: un unico progetto di remediation",
        body: [
          "Quando i team cercano «legacy remediation», dietro la stessa parola si nascondono spesso due problemi:",
          [
            "**La lacuna di compliance.** Il software funziona, ma la documentazione che un organismo notificato o la FDA si aspettano (requisiti tracciati ai rischi, rischi ai controlli, controlli ai test) manca o è obsoleta.",
            "**La lacuna di cybersecurity.** Il software si appoggia a componenti di terze parti e open source (SOUP, «software of unknown provenance», cioè software di provenienza sconosciuta) che nessuno ha elencato né verificato rispetto a vulnerabilità note. Negli Stati Uniti, la sezione 524B del FD&C Act richiede che i dispositivi con software che si connettono a reti («cyber device») abbiano una software bill of materials (SBOM), un piano per monitorare e gestire le vulnerabilità e un processo per aggiornamenti e patch; la guidance finale della FDA sulla cybersecurity premarket (febbraio 2026, allineata alla QMSR) spiega cosa presentare, incluso un threat model. Nell'UE, la MDCG 2019-16 definisce le aspettative di cybersecurity ai sensi dell'MDR.",
          ],
          "Trattare i due aspetti separatamente raddoppia il lavoro: entrambi partono dallo stesso inventario di ciò che il software contiene e di ciò che fa. Un unico piano di remediation copre entrambi.",
        ],
      },
      {
        heading: "Cosa fa oggi P4SaMD per il software legacy",
        body: [
          [
            "**Importazione guidata e gap analysis automatizzata.** Un'importazione in sei passaggi del tuo software esistente produce una gap analysis e un piano di remediation prioritizzato (P4SaMD 3.0, maggio 2026).",
            "**Framework USA.** Dalla versione 3.7 di P4SaMD (19 ott 2026) l'assessment copre anche dieci framework di orientamento statunitense, tra cui FDA medical device reporting, percorsi premarket, sistemi di qualità, unique device identification e direttive federali sulla cybersecurity.",
            "**Cybersecurity UE.** Dalla versione 3.7.5 di P4SaMD (30 ott 2026) la gap analysis MDR valuta anche rispetto alla MDCG 2019-16, la guidance UE sulla cybersecurity dei dispositivi medici.",
            "**SBOM e SOUP.** P4SaMD genera una SBOM CycloneDX (3.4, ago 2026) e la riconcilia con i componenti SOUP che hai dichiarato, segnalando ciò che manca o è obsoleto (3.6, set 2026).",
            "**Tracciabilità da qui in avanti.** Requisiti, rischi (matrice 5×5 ISO 14971, 3.5) e test restano collegati, e le versioni rilasciate vengono bloccate in linea con IEC 62304. Il Documentation Hub (3.7) raccoglie in un unico posto ogni artefatto di compliance, e la matrice di tracciabilità completa da requisito a evidenza può essere scaricata in formato CSV (3.8).",
            "**AI che suggerisce, persone che decidono.** L'assistente Whisper (beta, su richiesta) propone riscontri di compliance con riferimenti normativi; nulla cambia senza approvazione.",
          ],
          "P4SaMD sta inoltre aggiungendo più automazione lungo l'intero ciclo di vita del software, come un orchestratore di workflow SDLC. P4SaMD aiuta i team a produrre e mantenere l'evidenza; la certificazione è decisa dall'organismo notificato o dalla FDA.",
        ],
      },
    ],
    caseStudy: {
      label: "Case Study // Enterprise Consumer Health",
      quote:
        "Una grande azienda internazionale nel settore consumer health e lifestyle, con ricavi che superano diversi miliardi di euro e marchi noti in numerosi paesi.",
      scope: [
        "Acquisizione automatizzata di workitem eterogenei: requisiti, rischi, test e codice esistente",
        "Gap analysis rispetto a MDR e IEC 62304, con generazione di un pacchetto completo di evidenza di compliance con task di remediation prioritizzate",
        "Generazione dinamica di Technical File MDR pronti per l'audit usando i template del cliente",
      ],
      outcomesHeading: "Risultati misurati su questo progetto cliente.",
      outcomesNote: "Dati misurati su un progetto cliente reale.",
      results: [
        {
          metric: "60%",
          label:
            "Riduzione dello sforzo di remediation identificata ed eseguita nella prima sprint review",
        },
        {
          metric: "90%",
          label:
            "Riduzione del tempo di generazione della documentazione per i Technical File obbligatori",
        },
      ],
    },
    capabilities: [
      "brownfield-remediator",
      "artt-traceability",
      "documentation-engine",
      "sdlc-orchestrator",
    ],
    upcomingCapabilities: ["sdlc-orchestrator"],
    capabilityNotes: {
      "brownfield-remediator": "Il nostro assessment del software legacy",
      "documentation-engine": "Ora disponibile come Documentation Hub",
    },
    faq: {
      heading: "FAQ: remediation del software legacy per dispositivi medici",
      items: [
        {
          q: "Cosa sono i tool di legacy software remediation per dispositivi medici?",
          a: "Strumenti che valutano il software esistente di un dispositivo medico rispetto a standard e normative attuali, elencano le lacune e aiutano a ricostruire l'evidenza mancante, così che il software possa essere certificato o mantenuto conforme senza una riscrittura.",
        },
        {
          q: "Dobbiamo riscrivere il software legacy per essere conformi a IEC 62304?",
          a: "Di solito no. IEC 62304 include un percorso per il software legacy: valutare i rischi, colmare le lacune rilevanti per la sicurezza e documentare la motivazione. Una riscrittura è una decisione di engineering che si prende dopo la gap analysis, non un requisito regolatorio.",
        },
        {
          q: "La legacy remediation riguarda anche la cybersecurity?",
          a: "Sì. Il software più datato contiene spesso componenti di terze parti non elencati né monitorati. Una SBOM e una revisione delle vulnerabilità note rientrano nello stesso piano di remediation.",
        },
        {
          q: "Cosa contiene un piano di remediation?",
          a: "L'elenco delle lacune per ciascun requisito dello standard o della normativa, la loro priorità, l'evidenza da produrre per ciascuna e chi se ne occupa.",
        },
        {
          q: "Uno strumento può certificare il nostro software legacy?",
          a: "No. Uno strumento può produrre e organizzare l'evidenza; la certificazione è decisa da un organismo notificato (UE) o dalla FDA (USA).",
        },
      ],
    },
    seo: {
      title: "Remediation di Software Legacy Regolamentato | Use Case | Mia-Care P4SaMD",
      description:
        "Remediation del software legacy per dispositivi medici: valuta il software rispetto a IEC 62304 e FDA, colma le lacune di compliance e cybersecurity, senza riscrittura.",
    },
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
