// Sessione italiana del webinar "From Algorithm to Clinic", 30 nov 2026, 16:00 CET.
// Vedi data/webinar.ts per tipi, speaker e form HubSpot condivisi.
import { SPEAKER_ALESSANDRO, SPEAKER_MARZIO, type WebinarContent } from "@/data/webinar";

export const webinar: WebinarContent = {
  locale: "it",
  path: "/it/webinar/software-medicale-ai",
  thankYouPath: "/it/webinar/software-medicale-ai/thank-you",
  eyebrow: "Webinar live",
  title: "Dall'algoritmo alla clinica",
  subtitle: "Come portare a mercato un software medicale nell'era dell'IA",
  dateLabel: "30 novembre 2026",
  timeLabel: "16:00 - 17:00 CET",
  languageLabel: "Italiano",
  formatLabel: "Online, gratuito",
  startDate: "2026-11-30T16:00:00+01:00",
  endDate: "2026-11-30T17:00:00+01:00",
  abstract: [
    "Le nuove tecnologie, in primis l'IA, stanno rivoluzionando le potenzialità dei software medicali. Computer vision e deep learning analizzano radiografie, risonanze e TAC per individuare anomalie come tumori, fratture o emorragie. Natural language processing (NLP) e generative AI trasformano le conversazioni tra medico e paziente in cartelle cliniche elettroniche (EHR) strutturate e supportano le decisioni cliniche.",
    "Queste nuove possibilità sono inevitabilmente accompagnate da sfide complesse in termini di compliance. I modelli di IA dipendono fortemente dai dati di training, evolvono dopo il rilascio e richiedono una supervisione umana continua. La compliance sta cambiando rapidamente in tutto il mondo: in Europa MDR e IVDR si intrecciano ora con l'EU AI Act, mentre negli Stati Uniti la FDA spinge sui Predetermined Change Control Plans (PCCP) per i modelli di AI dinamici.",
    "Partecipa al nostro webinar per scoprire cosa serve per portare con successo sul mercato un software medicale basato sull'IA.",
  ],
  coverHeading: "Di cosa parleremo",
  coverItems: [
    "I trend principali e le sfide di governance per il software usato in ambito clinico e nei dispositivi medici nell'era dell'IA.",
    "La gestione end-to-end del ciclo di vita dell'AI con le capability di Mia-Care (P4SaMD e Master AI): dalla qualità dei dati e dal risk assessment fino alla validazione e al monitoraggio post-market.",
    "Un caso pratico: il Cardio Clinical LLM sviluppato da Aindo e dal Centro Cardiologico Monzino. Aindo racconta come i dati sintetici di livello clinico superano i limiti legati ai dati reali dei pazienti, mentre Mia-Care illustra il framework di compliance che protegge l'intero ciclo di vita del modello.",
  ],
  agendaHeading: "Programma",
  agenda: [
    {
      time: "16:00",
      title: "SaMD nell'era dell'IA: nuovi trend e nuove sfide per il software medicale",
      speaker: SPEAKER_MARZIO,
    },
    {
      time: "16:10",
      title:
        "Dall'algoritmo alla pratica clinica: gestire il ciclo di vita del software medicale con IA con P4SaMD",
      speaker: SPEAKER_MARZIO,
    },
    {
      time: "16:25",
      title:
        "Dati sintetici di livello clinico: addestrare i modelli senza aspettare i dati. Il caso di successo del Cardio Clinical LLM del Centro Cardiologico Monzino",
      speaker: SPEAKER_ALESSANDRO,
    },
    { time: "16:45", title: "Q&A" },
  ],
  speakersHeading: "Speaker",
  speakers: [SPEAKER_MARZIO, SPEAKER_ALESSANDRO],
  formHeading: "Prenota il tuo posto",
  formNote: "Sessione online gratuita. Riceverai via email il link per partecipare.",
  ctaLabel: "Iscriviti ora",
  hubspotFormId: "226b578c-327e-49a2-8797-3860590cc35f",
  labels: { date: "Data", time: "Orario", language: "Lingua", format: "Formato", at: "di" },
};
