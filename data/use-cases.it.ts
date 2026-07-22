import type { UseCase } from "./use-cases";

export const useCases: UseCase[] = [
  {
    slug: "greenfield-samd",
    segment: "Per Startup e Scaleup Pre-Market",
    name: "Sviluppo SaMD Greenfield",
    tagline:
      "Costruire un SaMD da zero significa affrontare due sfide simultanee: scrivere il software e soddisfare il regolatore. P4SaMD le rende la stessa fase.",
    problem: {
      heading: "Lo sprint documentale di 3-6 mesi che uccide lo slancio del lancio.",
      body: "Engineering e documentazione seguono timeline disconnesse: quando i team di qualità iniziano a documentare, la tracciabilità è già rotta e il sistema è cambiato. Il risultato è uno sprint documentale di 3-6 mesi che ritarda i ricavi e mette pressione sul team di qualità per ricostruire artefatti che non sono mai stati catturati in modo incrementale.",
    },
    need: {
      heading: "Compliance come output continuo del normale lavoro di engineering.",
      body: "Un framework che elimina l'attrito tra velocità di engineering e requisiti regolatori, integrando la compliance direttamente nell'SDLC così i team costruiscono software pronto per l'audit a ogni incremento, non solo al traguardo finale.",
    },
    solution: {
      heading: "Dal primo commit all'MVP conforme, in un unico movimento.",
      body: "P4SaMD abilita l'orchestrazione continua della compliance monitorando l'ambiente di sviluppo in tempo reale. Man mano che il codice evolve, la documentazione di qualità viene sincronizzata automaticamente.\n\nIl team costruisce il proprio prodotto. P4SaMD costruisce il fascicolo regolatorio in parallelo, rendendo l'audit-readiness l'output predefinito del normale lavoro di engineering.",
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
    segment: "Per Enterprise SaMD AI-Native",
    name: "Costruire Software AI ad Alto Rischio (CDSS)",
    tagline:
      "Il software clinico basato su AI evolve dinamicamente, ma i modelli di compliance tradizionali assumono che i requisiti siano statici. P4SaMD disaccoppia la tua velocità di engineering dalla rigidità regolatoria.",
    problem: {
      heading: "AI illeggibile, compliance non tracciabile.",
      body: "Il software clinico basato su AI evolve dinamicamente, eppure i modelli di compliance tradizionali assumono che i requisiti siano statici fin dall'inizio. Ogni aggiornamento a un modello AI rischia di innescare una cascata complessa di rework su risk management file, documenti di verifica e submission regolatorie, creando un freno alla compliance che rallenta l'innovazione fino a fermarla.\n\nProvare che un algoritmo opaco è sicuro per decisioni life-critical richiede un nuovo tipo di evidenza: report di trasparenza, valutazioni del bias, audit record e documentazione PCCP che la maggior parte dei sistemi QMS non è mai stata progettata per generare.",
    },
    need: {
      heading: "Compliance che sta al passo con gli aggiornamenti dei tuoi modelli.",
      body: "Rendere a prova di futuro i dispositivi medici abilitati dall'AI sincronizzando il rigore regolatorio con lo sviluppo tecnico ad alta velocità. Un framework che gestisce le sfide uniche della compliance AI (trasparenza, spiegabilità, bias dei dati, PCCP) senza richiedere un nuovo 510(k) per ogni iterazione del modello.",
    },
    solution: {
      heading: "Compliance multi-framework. Un'unica piattaforma.",
      body: "Mia-Care P4SaMD gestisce la compliance AI nella sua interezza (trasparenza, spiegabilità, sicurezza, audit record) attraverso MDR, EU AI Act e GMLP in un unico sistema. Il tuo team distribuisce miglioramenti al modello senza dover scegliere tra velocità e postura di compliance.",
    },
    caseStudy: {
      label: "Case Study // Fornitore CDSS",
      quote:
        "Un fornitore CDSS leader che utilizza Generative AI e dati sintetici ad alta fedeltà per supportare i clinici con diagnostica di precisione e strategie terapeutiche su misura.",
      scope: [
        "Gestione della compliance multi-framework: MDR + EU AI Act + GMLP in un unico sistema unificato",
        "Rilevamento delle lacune in tempo reale via Compliance Engine su tutti e tre i framework regolatori",
        "Model card e report di valutazione del bias automatizzati per ogni versione del modello",
        "Change management allineato al PCCP che abilita aggiornamenti dei modelli senza nuova submission completa",
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
        "Distribuisci software clinico abilitato dall'AI con compliance EU AI Act, GMLP e MDR in un'unica piattaforma. Audit record automatizzati, supporto PCCP e rilevamento lacune multi-framework.",
    },
  },
  {
    slug: "legacy-remediation",
    segment: "Per Grandi Gruppi MedTech e Life Sciences Enterprise",
    name: "Remediation di Software Legacy Regolamentato",
    tagline:
      "Il debito regolatorio sta bloccando il tuo software legacy. P4SaMD libera il percorso verso la certificazione, senza ricostruire da zero.",
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
      body: "Mia-Care P4SaMD acquisisce codebase in qualsiasi linguaggio e documentazione esistente, poi utilizza AI agentica per automatizzare le valutazioni legacy e identificare le lacune rispetto a IEC 62304, ISO 13485 ed EU MDR / FDA.\n\nLa piattaforma genera piani di remediation personalizzati e produce documentazione pronta per l'audit nei tuoi template. Ciò che tipicamente richiede anni di sforzo manuale viene compresso in una task list strutturata e prioritizzata che il tuo team di engineering può eseguire immediatamente.",
    },
    caseStudy: {
      label: "Case Study // Enterprise Consumer Health",
      quote:
        "Un leader globale nel settore consumer health e lifestyle, con ricavi che superano diversi miliardi di euro e operazioni in numerosi paesi attraverso marchi consumer riconosciuti a livello internazionale.",
      scope: [
        "Acquisizione automatizzata di workitem eterogenei: requisiti, rischi, test e codice esistente",
        "Gap analysis rispetto a MDR e IEC 62304, con generazione di un pacchetto completo di evidenza di compliance con task di remediation prioritizzate",
        "Generazione dinamica di Technical File MDR pronti per l'audit usando i template del cliente",
      ],
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
    seo: {
      title: "Remediation di Software Legacy Regolamentato | Use Case | Mia-Care P4SaMD",
      description:
        "Certifica software medicale legacy senza ricostruirlo. Gap analysis automatizzata, ricostruzione della tracciabilità e Technical File MDR pronti per l'audit per IEC 62304 ed EU MDR.",
    },
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
