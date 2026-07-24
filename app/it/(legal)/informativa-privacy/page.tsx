import type { Metadata } from "next";
import { PillTag } from "@/components/common/PillTag";

// AI-drafted translation of the EN privacy policy — requires formal legal
// sign-off (GDPR-specific content) before this page is published. See the
// Batch 1 legal-review step agreed alongside docs/adr/0001-*.md.
export const metadata: Metadata = {
  title: "Informativa Privacy — Mia-Care",
  robots: { index: false, follow: false },
};

const h2Class = "font-display font-semibold text-base mt-10 mb-3";
const h3Class = "font-display font-semibold text-sm mt-6 mb-2";
const h2Style = { color: "var(--text-primary)", fontSize: "1rem" };
const h3Style = { color: "var(--text-primary)" };
const mutedLink = { color: "var(--brand-green)" };

export default function PrivacyPolicyPageIt() {
  return (
    <section className="py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-6">Legale</PillTag>
        <h1
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.03em" }}
        >
          Informativa Privacy
        </h1>
        <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
          Informativa ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 sul trattamento
          dei dati personali degli Utenti che visitano www.mia-care.io
        </p>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          Ultimo Aggiornamento: 23/02/2021
        </p>

        <div
          className="space-y-4 text-sm"
          style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
        >
          <p>
            MIA CARE s.r.l. (di seguito MIA CARE) tratta i dati personali degli Utenti che visitano
            www.mia-care.io in conformità al Regolamento (UE) 2016/679 (di seguito GDPR) sulla
            protezione e il trattamento dei dati personali. Ai sensi degli articoli 13 e 14 del
            GDPR, di seguito sono fornite informazioni sul trattamento dei dati degli Utenti durante
            la navigazione su www.mia-care.io e sui suoi sottodomini, e su qualsiasi altro dato
            inviato volontariamente dagli Utenti tramite il servizio di chat e/o l'invio di email
            agli indirizzi pubblicati sul suddetto sito web.
          </p>

          {/* 1. Definitions */}
          <h2 className={h2Class} style={h2Style}>
            1. Definizioni
          </h2>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Dati Personali:</strong> qualsiasi
            informazione riguardante una persona fisica identificata o identificabile
            (l'"interessato"); si considera identificabile la persona fisica che può essere
            identificata, direttamente o indirettamente, con particolare riferimento a un
            identificativo come il nome, un numero di identificazione, dati relativi all'ubicazione,
            un identificativo online o a uno o più elementi caratteristici dell'identità fisica,
            fisiologica, genetica, psichica, economica, culturale o sociale di detta persona fisica
            (Regolamento (UE) 2016/679, art. 4 n. 1). I dati personali sono una macro-categoria che
            comprende le seguenti sottocategorie:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Dati comuni (es.: dati identificativi come nome, cognome, indirizzo, codice fiscale);
            </li>
            <li>
              Dati personali particolari e dati personali relativi a condanne penali o reati (ai
              sensi degli articoli 9 e 10 del GDPR: dati che rivelano "l'origine razziale o etnica,
              le opinioni politiche, le convinzioni religiose o filosofiche, o l'appartenenza
              sindacale, nonché dati genetici, dati biometrici intesi a identificare in modo univoco
              una persona fisica, dati relativi alla salute o alla vita sessuale o all'orientamento
              sessuale della persona; dati relativi a condanne penali e reati").
            </li>
          </ul>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Dati di Navigazione:</strong> questi
            dati rientrano nella sottocategoria dei dati personali comuni. Più precisamente, si fa
            riferimento a dati personali acquisiti dai sistemi informatici e dalle procedure
            software preposte al funzionamento di questo sito web durante il normale funzionamento,
            e che sono tecnicamente indispensabili per garantire il funzionamento e la sicurezza
            delle sessioni e l'elaborazione statistica anonima degli accessi corrispondenti. Questo
            tipo di informazione non viene raccolto per essere associato a interessati identificati,
            ma per sua stessa natura potrebbe consentire l'identificazione degli utenti attraverso
            elaborazioni e associazioni con dati detenuti da terzi. Esempi di dati di navigazione
            includono: indirizzi IP o nomi di dominio dei computer utilizzati dagli utenti che si
            connettono al sito, indirizzi URI (Uniform Resource Identifier) delle risorse richieste,
            l'orario della richiesta, il metodo utilizzato per sottoporre la richiesta al server, il
            codice numerico indicante lo stato della risposta data dal server (buon fine, errore,
            ecc.) e altri parametri relativi al sistema operativo e all'ambiente informatico
            dell'utente.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Utente:</strong> la persona fisica cui
            si riferiscono i dati di navigazione su www.mia-care.io e sui suoi sottodomini, e
            qualsiasi altra informazione personale rilasciata su tale sito web a seguito dell'invio
            di email e/o dell'utilizzo del servizio di chat.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Trattamento:</strong> qualsiasi
            operazione o insieme di operazioni, compiute con o senza l'ausilio di processi
            automatizzati e applicate a dati personali o insiemi di dati personali, come la
            raccolta, la registrazione, l'organizzazione, la strutturazione, la conservazione,
            l'adattamento o la modifica, l'estrazione, la consultazione, l'uso, la comunicazione
            mediante trasmissione, diffusione o qualsiasi altra forma di messa a disposizione, il
            raffronto o l'interconnessione, la limitazione, la cancellazione o la distruzione, anche
            se tali dati non sono registrati in una banca dati.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>
              Titolare del Trattamento (di seguito "Titolare"):
            </strong>{" "}
            la persona che determina le finalità, i mezzi del trattamento e gli strumenti
            utilizzati, incluso il profilo di sicurezza.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Responsabile del Trattamento:</strong>{" "}
            la persona che svolge determinate attività di trattamento agendo per conto del Titolare
            del Trattamento.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>
              Persona autorizzata al trattamento:
            </strong>{" "}
            il singolo dipendente e/o collaboratore autorizzato a trattare i dati sulla base delle
            istruzioni ricevute dal Titolare.
          </p>

          {/* 2. Who handles the Data */}
          <h2 className={h2Class} style={h2Style}>
            2. Chi tratta i Dati
          </h2>
          <p>
            MIA CARE s.r.l., P.IVA 11504530962, con sede legale a Milano, Via Carroccio 16, è il
            Titolare del Trattamento. Alcune delle operazioni di trattamento specificate all'art. 3
            sono affidate a Responsabili del Trattamento, come indicato all'art. 5. L'elenco delle
            Persone autorizzate al trattamento designate dal Titolare ai sensi dell'art. 3 e i
            relativi sotto-elenchi, per le finalità specificate nella presente informativa, possono
            essere consultati presso la sede del Titolare, previo invio di un'email a{" "}
            <a href="mailto:privacy@mia-care.io" style={mutedLink}>
              privacy@mia-care.io
            </a>
            .
          </p>

          {/* 3. What kind of personal data we collect */}
          <h2 className={h2Class} style={h2Style}>
            3. Quali dati personali raccogliamo
          </h2>
          <p>
            MIA CARE raccoglie e utilizza determinati dati personali degli Utenti, come specificato
            di seguito in base al tipo di servizio utilizzato dagli Utenti durante la navigazione
            sul nostro sito web.
          </p>

          <h3 className={h3Class} style={h3Style}>
            3.1 Dati di navigazione
          </h3>
          <p>
            Quando gli Utenti accedono a www.mia-care.io, MIA CARE raccoglie alcune informazioni per
            rendere sicura la navigazione sul proprio sito web, sul quale sono utilizzati servizi di
            web analytics. Per maggiori dettagli, si rinvia alla Sezione sui cookie.
          </p>

          <h3 className={h3Class} style={h3Style}>
            3.2 Moduli (form)
          </h3>
          <p>
            Compilando i moduli disponibili su www.mia-care.io per utilizzare i servizi di contatto,
            scaricare gratuitamente documenti tecnici o utilizzare qualsiasi altro servizio presente
            nell'intestazione del modulo, gli Utenti accettano l'utilizzo dei propri dati personali
            da parte di MIA CARE per la finalità di fornire i servizi sopra indicati. MIA CARE
            richiede sempre agli Utenti il proprio indirizzo email, considerato un dato personale
            comune. MIA CARE può inoltre richiedere ulteriori dati personali comuni quali:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cognome;</li>
            <li>Nome;</li>
            <li>Numero di telefono cellulare;</li>
            <li>Azienda;</li>
            <li>Ruolo professionale;</li>
            <li>Qualsiasi altro dato personale incluso nel messaggio inviato.</li>
          </ul>

          <h3 className={h3Class} style={h3Style}>
            3.3 Newsletter
          </h3>
          <p>
            Si rinvia alla Sezione contenente informazioni sul trattamento dei dati personali per il
            servizio di newsletter.
          </p>

          <h3 className={h3Class} style={h3Style}>
            3.4 Email
          </h3>
          <p>
            Quando gli Utenti contattano volontariamente MIA CARE per qualsiasi informazione sulle
            attività dell'azienda o per inviare candidature spontanee per una posizione lavorativa
            via email a uno dei seguenti indirizzi pubblicati su www.mia-care.io (
            <a href="mailto:career@mia-care.io" style={mutedLink}>
              career@mia-care.io
            </a>
            ;{" "}
            <a href="mailto:info@mia-care.io" style={mutedLink}>
              info@mia-care.io
            </a>
            ) MIA CARE raccoglie e tratta i seguenti dati personali comuni:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Indirizzo email;</li>
            <li>Cognome;</li>
            <li>Nome;</li>
            <li>Qualsiasi altro dato personale incluso nel messaggio inviato.</li>
          </ul>

          <h3 className={h3Class} style={h3Style}>
            3.5 Chat
          </h3>
          <p>
            Quando gli Utenti utilizzano lo strumento di messaggistica istantanea disponibile su
            www.mia-care.io per contattare rapidamente MIA CARE, MIA CARE raccoglie e tratta i
            seguenti dati personali comuni:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nome;</li>
            <li>Cognome;</li>
            <li>Qualsiasi altro dato personale incluso nel messaggio inviato.</li>
          </ul>

          {/* 4. How personal data are used */}
          <h2 className={h2Class} style={h2Style}>
            4. Come vengono utilizzati i dati personali
          </h2>
          <p>
            MIA CARE tratta i dati di navigazione di cui all'art. 3.1 ai sensi dell'art. 6,
            paragrafo I, lettera f) (legittimo interesse di MIA CARE) del GDPR. Questi dati
            consentono agli Utenti di utilizzare il sito web in sicurezza.
          </p>
          <p>
            MIA CARE tratta i dati personali di cui agli artt. 3.2, 3.3, 3.4 e 3.5 ai sensi
            dell'art. 6, paragrafo I, lettere a) (consenso dell'Utente), b) (esecuzione del
            contratto di servizio da parte di MIA CARE), f) (legittimo interesse di MIA CARE) del
            GDPR. I dati sono utilizzati per elaborare le richieste inviate dagli Utenti tramite la
            compilazione di un modulo, l'iscrizione al servizio di newsletter e/o l'invio di
            un'email o di un messaggio in chat. In particolare, MIA CARE utilizza i dati degli
            Utenti per:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Finalità di ricerca, analisi di mercato e sviluppo prodotto;</li>
            <li>Fornire il servizio di newsletter;</li>
            <li>Rispondere a domande e/o inviare le informazioni richieste;</li>
            <li>Valutare le candidature spontanee degli Utenti per posizioni lavorative.</li>
          </ul>
          <p>
            In ogni caso, MIA CARE non utilizzerà i dati per l'invio di materiale pubblicitario o
            per offrire sconti o inviti a partecipare a campagne promozionali di alcun tipo, salvo
            che abbia ricevuto il consenso esplicito dell'Utente, acquisito separatamente in un
            momento successivo.
          </p>
          <p>
            La raccolta dei dati e le successive operazioni di registrazione, comunicazione,
            rettifica e/o cancellazione avvengono con strumenti informatici. MIA CARE garantisce che
            i dati personali acquisiti saranno trattati adottando misure tecniche e organizzative
            adeguate a garantire lo svolgimento sicuro delle suddette operazioni.
          </p>

          {/* 5. Data Processors */}
          <h2 className={h2Class} style={h2Style}>
            5. Responsabili del Trattamento
          </h2>
          <p>
            Nell'erogazione dei propri servizi, MIA CARE si affida a Responsabili del Trattamento ai
            sensi dell'art. 28 n. 4 del GDPR, ossia soggetti esterni ai quali sono affidate
            determinate attività di trattamento dei dati. In particolare, MIA CARE si serve dei
            servizi di:
          </p>
          <ul className="list-none pl-0 space-y-2">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                A) Google Workspace (già GSuite) di Google Ireland Ltd.
              </strong>{" "}
              per: eseguire il back-up dei dati ricevuti via email su Google Cloud; inviare e
              ricevere email tramite il servizio business Gmail.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>B) HubSpot di HubSpot Inc.</strong>{" "}
              per: fornire il servizio di newsletter; fornire il servizio di messaggistica
              istantanea; conservare i dati personali degli Utenti.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>C) MIA s.r.l.</strong> per: gestire i
              servizi di marketing e comunicazione.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                D) Aut O'Mattic A8C Ireland Ltd
              </strong>{" "}
              per: creare e gestire il sito web su wordpress.com.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>E) QZR s.r.l.</strong> per: gestire
              www.mia-care.io in qualità di amministratore di sistema.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>F) ICTandStrategy s.r.l.</strong>{" "}
              per: gestire alcune funzionalità di HubSpot in qualità di amministratore di sistema.
            </li>
          </ul>
          <p>
            Per ulteriori informazioni, si prega di inviare un'email a{" "}
            <a href="mailto:privacy@mia-care.io" style={mutedLink}>
              privacy@mia-care.io
            </a>
            .
          </p>

          {/* 6. Storage period */}
          <h2 className={h2Class} style={h2Style}>
            6. Periodo di conservazione dei dati personali
          </h2>
          <p>
            I dati personali di cui all'art. 3 ed elencati di seguito sono conservati per il periodo
            di tempo indicato di seguito. Si distingue tra:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Dati di navigazione:</strong>{" "}
              conservati per un periodo massimo di ventisei (26) mesi e successivamente cancellati
              immediatamente. Per ulteriori informazioni, si rinvia alla Sezione sui cookie.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                Utilizzo dei moduli (per il download gratuito di documenti tecnici):
              </strong>{" "}
              i dati sono conservati fino al raggiungimento della finalità per cui sono stati
              forniti o per un periodo massimo di dodici (12) mesi dall'ultima interazione
              dell'Utente con MIA CARE.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                Richiesta di informazioni (via email o servizio di messaggistica istantanea):
              </strong>{" "}
              i dati sono conservati fino al raggiungimento della finalità per cui sono stati
              forniti o per un periodo massimo di trenta (30) giorni dall'ultima interazione
              dell'Utente con MIA CARE.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                Candidatura spontanea per una posizione lavorativa:
              </strong>{" "}
              i dati sono conservati fino al raggiungimento della finalità per cui sono stati
              forniti o per un periodo massimo di un (1) anno dalla data di ricezione del CV da
              parte di MIA CARE.
            </li>
          </ul>
          <p>
            I dati sono conservati su server situati all'interno dell'Unione Europea. Per ragioni
            operative di alcuni Responsabili del Trattamento, i dati potrebbero essere trasferiti
            fuori dall'Unione Europea. Per maggiori informazioni su questo argomento, si prega di
            inviare un'email a{" "}
            <a href="mailto:privacy@mia-care.io" style={mutedLink}>
              privacy@mia-care.io
            </a>
            . MIA CARE garantisce la cancellazione definitiva dei suddetti dati.
          </p>

          {/* 7. Social Media */}
          <h2 className={h2Class} style={h2Style}>
            7. Social Media e link ad altri siti
          </h2>
          <p>
            MIA CARE utilizza alcuni canali social per comunicare con il pubblico: LinkedIn,
            Instagram e Vimeo. Gli Utenti possono trovare il pulsante per condividere contenuti su
            questi social network su www.mia-care.io. Piattaforme social come LinkedIn, Instagram e
            Vimeo potrebbero salvare i dati degli Utenti su cloud, su server che potrebbero trovarsi
            fuori dall'Unione Europea, e utilizzare propri cookie per riconoscere gli Utenti che
            navigano dopo aver effettuato l'accesso ai propri account.
          </p>
          <p>
            MIA CARE non ha stipulato accordi con le società che gestiscono le suddette piattaforme
            e non ha alcun controllo su come vengono utilizzati i dati degli Utenti che hanno
            effettuato l'accesso. Pertanto, MIA CARE invita gli Utenti a leggere l'informativa
            privacy adottata da LinkedIn, Instagram e Vimeo.
          </p>
          <p>
            Si informano gli Utenti che alcuni video Vimeo possono essere visualizzati direttamente
            sul sito MIA. In questo caso, potrebbero essere utilizzati cookie o altri sistemi di
            tracciamento. Per evitare il tracciamento, gli Utenti possono modificare le proprie
            preferenze in qualsiasi momento facendo clic sul pulsante Cookie nel footer di
            www.mia-care.io.
          </p>

          {/* 8. Cookies */}
          <h2 className={h2Class} style={h2Style}>
            8. Cookie
          </h2>
          <p>Si rinvia alla Sezione sull'uso dei cookie riportata di seguito.</p>

          {/* 9. Erasure and rights */}
          <h2 className={h2Class} style={h2Style}>
            9. Cancellazione e altri diritti dell'Utente ai sensi del GDPR
          </h2>
          <p>Gli Utenti possono, in qualsiasi momento, esercitare il diritto di:</p>
          <ul className="list-[upper-alpha] pl-6 space-y-2">
            <li>
              Ottenere la conferma dell'esistenza o meno di un trattamento di dati personali che li
              riguardano;
            </li>
            <li>
              Ottenere informazioni sulle finalità del trattamento, le categorie di dati personali
              interessate, i destinatari o le categorie di destinatari a cui i dati personali sono
              stati o saranno comunicati e, se possibile, il periodo di conservazione;
            </li>
            <li>
              Richiedere al Titolare del Trattamento l'accesso ai dati personali e la rettifica o la
              cancellazione dei dati personali o la limitazione del trattamento dei dati personali
              che li riguardano, oppure opporsi a tale trattamento, nonché il diritto alla
              portabilità dei dati;
            </li>
            <li>Presentare un reclamo all'autorità di controllo.</li>
          </ul>
          <p>
            Per esercitare i suddetti diritti, gli Utenti devono inviare una richiesta scritta a{" "}
            <a href="mailto:privacy@mia-care.io" style={mutedLink}>
              privacy@mia-care.io
            </a>
            . La richiesta sarà elaborata entro trenta (30) giorni lavorativi dal suo ricevimento.
          </p>

          {/* 10. DPO */}
          <h2 className={h2Class} style={h2Style}>
            10. Responsabile della Protezione dei Dati (DPO)
          </h2>
          <p>
            È possibile contattare il Responsabile della Protezione dei Dati nominato da MIA CARE
            s.r.l. inviando un'email a:{" "}
            <a href="mailto:privacy@mia-platform.eu" style={mutedLink}>
              privacy@mia-platform.eu
            </a>
          </p>

          {/* ── COOKIES SECTION ── */}
          <div
            id="cookie"
            className="mt-14 pt-10 border-t"
            style={{ borderColor: "var(--bg-border)" }}
          >
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}
            >
              Cookie
            </h2>
            <p>
              In qualità di Titolare del Trattamento, MIA CARE utilizza cookie per il corretto
              funzionamento del proprio sito web www.mia-care.io e delle sue sottosezioni (blog,
              risorse e documentazione) e per facilitare la navigazione degli Utenti sul sito. MIA
              CARE tratta i dati raccolti tramite cookie ai sensi dell'art. 6 paragrafo I lettera a)
              (consenso degli Utenti per abilitarli); (b) (esecuzione di un contratto); (f)
              (legittimo interesse di MIA CARE) del GDPR. Il periodo di conservazione di tali dati è
              indicato nella Tabella dei Cookie o nell'informativa sui cookie di terze parti,
              accessibile facendo clic sul relativo collegamento ipertestuale. Navigando il sito web
              e sulla base del consenso fornito, gli Utenti accettano che alcuni dati personali che
              li riguardano, una volta raccolti, possano essere trasferiti fuori dall'Unione
              Europea.
            </p>

            <h3 className={h3Class} style={h3Style}>
              1. Cosa sono i cookie?
            </h3>
            <p>
              I cookie sono porzioni di codice installate nel browser che aiutano MIA CARE a fornire
              i servizi di navigazione su www.mia-care.io secondo le finalità descritte nella
              presente informativa nella Sezione precedente. Alcune delle finalità per cui i cookie
              vengono installati possono richiedere anche il consenso dell'Utente: in questo caso,
              il consenso dell'Utente può essere revocato liberamente in qualsiasi momento facendo
              clic sul pulsante Cookie nel footer del sito.
            </p>

            <h3 className={h3Class} style={h3Style}>
              2. Che tipo di cookie utilizza il sito web di MIA CARE?
            </h3>
            <p>Questo sito web utilizza i seguenti cookie:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Cookie tecnici:</strong>{" "}
                garantiscono il corretto utilizzo dei contenuti del sito web.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Cookie di performance:</strong>{" "}
                strumento per l'analisi anonima e aggregata del comportamento degli Utenti sul sito
                web. Sebbene questi cookie non identifichino l'Utente, sono in grado di rilevare, ad
                esempio, se lo stesso Utente effettua nuovamente l'accesso in un momento diverso.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Cookie di profilazione:</strong>{" "}
                utilizzati per promuovere offerte in linea con le esigenze degli Utenti.
              </li>
            </ul>
            <p className="mt-3">
              Alcuni dei cookie presenti su questo sito web sono cookie di terze parti, come
              indicato nella Tabella dei Cookie riportata di seguito.
            </p>

            {/* Cookies table */}
            <div className="mt-4 overflow-x-auto">
              <table
                className="w-full text-xs border-collapse"
                style={{ borderColor: "var(--bg-border)" }}
              >
                <thead>
                  <tr style={{ background: "var(--bg-raised)", color: "var(--text-primary)" }}>
                    <th
                      className="border px-3 py-2 text-left font-semibold"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Tipologia
                    </th>
                    <th
                      className="border px-3 py-2 text-left font-semibold"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Tipo di cookie
                    </th>
                    <th
                      className="border px-3 py-2 text-left font-semibold"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Responsabile del Trattamento
                    </th>
                    <th
                      className="border px-3 py-2 text-left font-semibold"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Periodo di conservazione
                    </th>
                    <th
                      className="border px-3 py-2 text-left font-semibold"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Finalità
                    </th>
                  </tr>
                </thead>
                <tbody style={{ color: "var(--text-secondary)" }}>
                  <tr>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Obbligatorio
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Cookie tecnici
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      MIA Care srl
                      <br />
                      QZR srl
                      <br />
                      Wordpress.com
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Sessione
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Garantire il corretto funzionamento del sito web.
                    </td>
                  </tr>
                  <tr style={{ background: "var(--bg-raised)" }}>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Opzionale
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Cookie di performance
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      MIA Care srl
                      <br />
                      QZR srl
                      <br />
                      Google LLC
                      <br />
                      Wordpress.com
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Variabile
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Ottimizzare il sito web e l'esperienza di navigazione dell'Utente.
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Opzionale
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Cookie di profilazione
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      MIA Care srl
                      <br />
                      QZR srl
                      <br />
                      Google LLC
                      <br />
                      Hubspot Inc
                      <br />
                      Linkedin
                      <br />
                      Vimeo Inc
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Variabile
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Condivisione dei contenuti del sito web con altri utenti (social media);
                      <br />
                      Proporre messaggi pubblicitari in linea con il comportamento online e gli
                      interessi degli Utenti;
                      <br />
                      Proporre contenuti e informazioni personalizzati sulle preferenze specifiche
                      degli Utenti.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={h3Class} style={h3Style}>
              3. Attivazione e disattivazione dei cookie
            </h3>
            <p>
              Poiché alcuni dei cookie di performance e di profilazione di MIA CARE e/o di terze
              parti non sono essenziali per il corretto funzionamento del sito web, gli Utenti che
              hanno fornito il proprio consenso all'attivazione dei cookie opzionali sopra indicati
              possono, in qualsiasi momento, modificare o revocare il proprio consenso all'uso dei
              cookie opzionali (propri o di terze parti) facendo clic sul pulsante Cookie nel footer
              di www.mia-care.io.
            </p>
          </div>

          {/* ── NEWSLETTER SECTION ── */}
          <div className="mt-14 pt-10 border-t" style={{ borderColor: "var(--bg-border)" }}>
            <h2
              className="font-display font-bold mb-4"
              style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}
            >
              Newsletter
            </h2>
            <p>
              Di seguito sono fornite informazioni sul trattamento dei dati personali che ci hai
              volontariamente comunicato online tramite il modulo disponibile su www.mia-care.io o
              durante un evento a cui hai partecipato personalmente, essenziali per fornirti il
              servizio di newsletter.
            </p>

            <h3 className={h3Class} style={h3Style}>
              1. Quali dati ti chiediamo?
            </h3>
            <p>
              MIA CARE ti chiede sempre il tuo indirizzo email, che è un dato personale comune. MIA
              CARE può inoltre richiederti i seguenti ulteriori dati personali comuni:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nome;</li>
              <li>Cognome;</li>
              <li>Ruolo professionale;</li>
              <li>Azienda.</li>
            </ul>

            <h3 className={h3Class} style={h3Style}>
              2. Come utilizziamo i tuoi dati?
            </h3>
            <p>
              MIA CARE tratta tutti i tuoi dati personali sopra indicati in conformità all'art. 6,
              paragrafo 1, lettere a), b), f) del GDPR. I tuoi dati sono utilizzati per inviarti
              periodicamente la nostra e-newsletter e per tenerti aggiornato su: sviluppi dei
              prodotti software di MIA CARE; novità sulle nostre attività; eventi formativi;
              approfondimenti scaricabili gratuitamente (file PDF). MIA CARE non utilizzerà i tuoi
              dati per inviarti materiale pubblicitario o per offrirti sconti o inviti a partecipare
              a campagne promozionali di alcun tipo.
            </p>
            <p>
              Ti informiamo che i tuoi dati personali potrebbero essere raccolti manualmente
              (compilando un modulo cartaceo) o tramite strumenti informatici. Le successive
              operazioni di registrazione, comunicazione, rettifica e cancellazione saranno
              effettuate con strumenti informatici. MIA CARE garantisce che i dati personali forniti
              saranno trattati adottando misure tecniche e organizzative adeguate a garantire
              operazioni sicure: per ulteriori informazioni, si prega di scrivere a{" "}
              <a href="mailto:privacy@mia-care.io" style={mutedLink}>
                privacy@mia-care.io
              </a>
              .
            </p>

            <h3 className={h3Class} style={h3Style}>
              3. Chi ci aiuta a trattare i tuoi dati?
            </h3>
            <p>
              MIA CARE si avvale di Responsabili del Trattamento per fornire questo servizio, ai
              sensi dell'art. 28 del GDPR, ossia soggetti esterni ai quali affidiamo determinate
              attività relative al trattamento dei tuoi dati. A questo proposito, ti segnaliamo che
              il nostro servizio di newsletter è gestito su HubSpot, una piattaforma di marketing
              utilizzata anche per l'invio di newsletter, di proprietà di HubSpot Ireland Ltd, una
              filiale di HubSpot Inc., con sede negli Stati Uniti d'America.
            </p>
            <p>
              HubSpot ci permette di ricevere informazioni su chi apre le newsletter e clicca sui
              link. MIA CARE utilizza queste informazioni con l'unico scopo di comprendere quali
              contenuti risultano di maggiore interesse per gli Utenti che ricevono le newsletter.
            </p>
            <p>
              Acconsentendo a ricevere la nostra newsletter, accetti la conservazione del tuo
              indirizzo email sui server di HubSpot Ireland Ltd e il trasferimento dei tuoi dati di
              cui all'art. 3 sopra citato verso gli Stati Uniti d'America sulla base delle Clausole
              Contrattuali Standard di HubSpot Inc.
            </p>
            <p>
              Inoltre, MIA utilizza i servizi Google Workspace (già GSuite) di Google Ireland Ltd,
              per: eseguire il back-up dei tuoi dati su Google Cloud; inviare e ricevere email
              tramite il servizio business Gmail. Per ulteriori informazioni, si prega di inviare
              un'email a{" "}
              <a href="mailto:privacy@mia-care.io" style={mutedLink}>
                privacy@mia-care.io
              </a>
              .
            </p>

            <h3 className={h3Class} style={h3Style}>
              4. Per quanto tempo e dove conserviamo i tuoi dati?
            </h3>
            <p>
              I tuoi dati saranno conservati finché deciderai di continuare a ricevere la nostra
              newsletter. Ti ricordiamo che puoi annullare l'iscrizione in qualsiasi momento facendo
              clic sul pulsante di disiscrizione in fondo a qualsiasi email inviata. Fatto salvo
              quanto previsto all'art. 3 — possibile trasferimento di dati verso gli USA tramite
              HubSpot — i tuoi dati saranno conservati su server situati all'interno dell'Unione
              Europea: per ulteriori informazioni su questo argomento, si prega di inviare un'email
              a{" "}
              <a href="mailto:privacy@mia-care.io" style={mutedLink}>
                privacy@mia-care.io
              </a>
              . Quando annulli l'iscrizione, HubSpot informerà MIA CARE che la disiscrizione dalla
              newsletter è avvenuta con successo.
            </p>

            <h3 className={h3Class} style={h3Style}>
              5. Cancellazione e altri tuoi diritti ai sensi del GDPR
            </h3>
            <p>
              Ai sensi degli articoli 15–22 del GDPR, puoi esercitare in qualsiasi momento i
              seguenti diritti:
            </p>
            <ul className="list-[upper-alpha] pl-6 space-y-2">
              <li>
                Il diritto di ottenere la conferma dell'esistenza o meno di un trattamento di dati
                personali che ti riguardano;
              </li>
              <li>
                Il diritto di ottenere informazioni sulle finalità del trattamento, le categorie di
                dati personali interessate, i destinatari o le categorie di destinatari a cui i dati
                personali sono stati o saranno comunicati e, se possibile, il periodo per cui i dati
                saranno conservati;
              </li>
              <li>
                Il diritto di richiedere al Titolare del Trattamento l'accesso ai dati personali e
                la rettifica o la cancellazione dei dati personali o la limitazione del trattamento
                che ti riguarda, oppure di opporti a tale trattamento, nonché il diritto alla
                portabilità dei dati;
              </li>
              <li>
                Il diritto di opporti in qualsiasi momento al trattamento dei dati personali, anche
                per finalità di marketing diretto;
              </li>
              <li>
                Il diritto di opporti a un processo decisionale automatizzato riguardante le persone
                fisiche, inclusa la profilazione;
              </li>
              <li>
                Il diritto di revocare il tuo consenso in qualsiasi momento, senza pregiudicare la
                liceità del trattamento basata sul consenso prima della revoca;
              </li>
              <li>Il diritto di presentare un reclamo a un'autorità di controllo.</li>
            </ul>
            <p>
              Puoi esercitare i tuoi diritti inviando una richiesta scritta a:{" "}
              <a href="mailto:privacy@mia-care.io" style={mutedLink}>
                privacy@mia-care.io
              </a>
              . La tua richiesta sarà elaborata entro trenta (30) giorni lavorativi dal suo
              ricevimento.
            </p>

            <h3 className={h3Class} style={h3Style}>
              6. Link ad altri siti
            </h3>
            <p>
              MIA CARE ti informa che questa informativa non si applica ad altri siti web o pagine
              online o servizi raggiungibili tramite i collegamenti ipertestuali pubblicati in fondo
              alla newsletter. Ti invitiamo pertanto a consultare l'informativa privacy di questi
              siti collegati.
            </p>

            <h3 className={h3Class} style={h3Style}>
              7. Responsabile della Protezione dei Dati (DPO)
            </h3>
            <p>
              È possibile contattare il Responsabile della Protezione dei Dati nominato da MIA CARE
              s.r.l. inviando un'email a:{" "}
              <a href="mailto:privacy@mia-platform.eu" style={mutedLink}>
                privacy@mia-platform.eu
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
