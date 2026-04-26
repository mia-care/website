import type { Metadata } from "next";
import { PillTag } from "@/components/common/PillTag";

export const metadata: Metadata = {
  title: "Privacy Policy — Mia-Care",
  robots: { index: false, follow: false },
};

const h2Class = "font-display font-semibold text-base mt-10 mb-3";
const h3Class = "font-display font-semibold text-sm mt-6 mb-2";
const h2Style = { color: "var(--text-primary)", fontSize: "1rem" };
const h3Style = { color: "var(--text-primary)" };
const mutedLink = { color: "var(--brand-green)" };

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-6">Legal</PillTag>
        <h1
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.03em" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
          Information notice pursuant to articles 13 and 14 of EU Regulation no. 2016/679 on the use
          of personal data of Users visiting www.mia-care.io
        </p>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          Latest Update: 23/02/2021
        </p>

        <div
          className="space-y-4 text-sm"
          style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
        >
          <p>
            MIA CARE s.r.l. (hereinafter MIA CARE) processes the personal data of Users visiting
            www.mia-care.io in compliance with EU Regulation no. 2016/679 (hereinafter GDPR) on the
            protection and processing of personal data. Pursuant to articles 13 and 14 of the GDPR,
            information is given below on the processing of Users' data when browsing
            www.mia-care.io and its subdomains and any other data sent voluntarily by Users when
            using the chat service and/or sending emails to the addresses published on the
            aforementioned website.
          </p>

          {/* 1. Definitions */}
          <h2 className={h2Class} style={h2Style}>
            1. Definitions
          </h2>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Personal Data:</strong> means any
            information relating to an identified or identifiable natural person ('data subject');
            an identifiable natural person is one who can be identified, directly or indirectly, in
            particular by reference to an identifier such as a name, an identification number,
            location data, an online identifier or to one or more factors specific to the physical,
            physiological, genetic, mental, economic, cultural or social identity of that natural
            person (EU Regulation no. 2016/679 art. 4 no. 1). Personal data are a macro-category
            that includes the following sub-categories:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Common data (e.g.: identifying data such as name, surname, address, tax code);</li>
            <li>
              Special personal data and personal data relating to criminal convictions or offences
              (pursuant to articles 9 and 10 GDPR: data revealing "racial or ethnic origin,
              political opinions, religious or philosophical beliefs, or trade union membership, as
              well as genetic data, biometric data for the purpose of uniquely identifying a natural
              person, data concerning health or data concerning a natural person's sex life or
              sexual orientation; data relating to criminal convictions and offences").
            </li>
          </ul>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Browsing Data:</strong> these data fall
            within the sub-category of common personal data. More precisely, reference is made to
            personal data which are acquired by the IT systems and software procedures in charge of
            operating this website during the normal course of operation, and which are technically
            essential to ensure the functioning and security of sessions and the anonymous
            statistical processing of corresponding accesses. This type of information is not
            collected to be associated with any identified data subjects, but because of its very
            nature could enable the identification of users through processing and association with
            data held by third parties. Examples of browsing data include: IP addresses or domain
            names of the computers used by users who connect to the site, URI (Uniform Resource
            Identifier) addresses of the resources requested, the time of the request, the method
            used to submit the request to the server, the numerical code indicating the status of
            the response from the server (successful outcome, error, etc.) and other parameters
            related to the user's operating system and IT environment.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>User:</strong> means the natural person
            to whom the browsing data on www.mia-care.io and its subdomains, and any other personal
            information released on such website as a result of sending emails and/or using the chat
            service, refer to.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Processing:</strong> means any
            operation or set of operations which is performed, whether or not by electronic means,
            concerning the collection, recording, organisation, structuring, storage, processing,
            adaptation, alteration, retrieval, use, consultation, disclosure by transmission,
            dissemination or otherwise making available, alignment, combination, restriction,
            erasure or destruction of personal data, even if such data are not recorded in a
            database.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>
              Data Controller (hereinafter "Controller"):
            </strong>{" "}
            means the person that determines the purposes, means of processing and the instruments
            used, including the security profile.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Data Processor:</strong> means the
            person that performs certain processing activities acting on the instructions of the
            Data Controller.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>
              Person in charge of Data Processing:
            </strong>{" "}
            means the single employee and/or associate authorised to process data on the basis of
            instructions received from the Controller.
          </p>

          {/* 2. Who handles the Data */}
          <h2 className={h2Class} style={h2Style}>
            2. Who handles the Data
          </h2>
          <p>
            MIA CARE s.r.l., VAT No. 11504530962, with registered office in Milan, Via Carroccio 16,
            is the Data Controller. Some of the processing operations specified under art. 3 are
            entrusted to Data Processors, as detailed under art. 5. The list of Persons in charge of
            Data Processing authorised by the Data Controller under art. 3 and the relevant
            sub-lists, for the purposes specified in this information notice may be viewed at the
            Data Controller's offices, following submission of an email to{" "}
            <a href="mailto:privacy@mia-care.io" style={mutedLink}>
              privacy@mia-care.io
            </a>
            .
          </p>

          {/* 3. What kind of personal data we collect */}
          <h2 className={h2Class} style={h2Style}>
            3. What kind of personal data we collect
          </h2>
          <p>
            MIA CARE collects and uses certain personal data of the Users, as specified below
            depending on the type of service used by Users while browsing our website.
          </p>

          <h3 className={h3Class} style={h3Style}>
            3.1 Browsing data
          </h3>
          <p>
            When Users access www.mia-care.io, MIA CARE collects certain information to make it safe
            for Users to browse its website, on which web analysis services are used. For more
            details, please refer to the Section on cookies.
          </p>

          <h3 className={h3Class} style={h3Style}>
            3.2 Forms
          </h3>
          <p>
            When filling out the forms available on www.mia-care.io to use the contact services, to
            download technical documents for free or to use any other services appearing on the
            header of the form, Users agree to the use of their personal data by MIA CARE for the
            purpose of providing the above services. MIA CARE always asks Users for their email
            address, which is regarded as common personal data. MIA CARE may also request additional
            common personal data such as:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Surname;</li>
            <li>Name;</li>
            <li>Mobile telephone number;</li>
            <li>Company;</li>
            <li>Job position;</li>
            <li>Any other personal data included in the message sent.</li>
          </ul>

          <h3 className={h3Class} style={h3Style}>
            3.3 Newsletter
          </h3>
          <p>
            Please refer to the Section containing information about the processing of personal data
            for the newsletter service.
          </p>

          <h3 className={h3Class} style={h3Style}>
            3.4 Emails
          </h3>
          <p>
            When Users contact MIA CARE voluntarily for any information about the company's
            activities or for sending spontaneous applications for a job position by email to one of
            the following email addresses provided on www.mia-care.io (
            <a href="mailto:career@mia-care.io" style={mutedLink}>
              career@mia-care.io
            </a>
            ;{" "}
            <a href="mailto:info@mia-care.io" style={mutedLink}>
              info@mia-care.io
            </a>
            ) MIA CARE collects and processes the following common personal data:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email address;</li>
            <li>Surname;</li>
            <li>Name;</li>
            <li>Any other personal data included in the message sent.</li>
          </ul>

          <h3 className={h3Class} style={h3Style}>
            3.5 Chat
          </h3>
          <p>
            When Users use the instant messaging tool available on www.mia-care.io to contact MIA
            CARE quickly, MIA CARE collects and processes the following common personal data:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name;</li>
            <li>Surname;</li>
            <li>Any other personal data included in the message sent.</li>
          </ul>

          {/* 4. How personal data are used */}
          <h2 className={h2Class} style={h2Style}>
            4. How personal data are used
          </h2>
          <p>
            MIA CARE processes the browsing data referred to in art. 3.1 pursuant to art. 6,
            paragraph I, letter f) (MIA CARE's legitimate interest) of the GDPR. These data allow
            Users to use the website safely.
          </p>
          <p>
            MIA CARE processes the personal data referred to in art. 3.2, 3.3, 3.4 and 3.5 pursuant
            to art. 6, paragraph I, letter a) (User's consent), b) (performance of the service
            agreement by MIA CARE), f) (MIA CARE's legitimate interest) of the GDPR. The data are
            used for processing requests sent by Users either by filling out a form, subscribing to
            the newsletter service and/or sending an e-mail or a chat message. Specifically, MIA
            CARE shall use Users' data for:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Research, market analysis and product development purposes;</li>
            <li>Providing the newsletter service;</li>
            <li>Answering questions and/or sending any requested information;</li>
            <li>Considering Users' spontaneous applications for job positions.</li>
          </ul>
          <p>
            In any case, MIA CARE shall not use the data for sending advertising material or
            offering discounts or invitations to join promotional campaigns of any kind, unless it
            has received the User's explicit consent acquired separately at a later date.
          </p>
          <p>
            The collection of data and subsequent recording, submission, rectification and/or
            erasure thereof shall take place by computerised means. MIA CARE warrants that the
            personal data acquired shall be processed by taking appropriate technical and
            organisational measures to ensure the safe performance of the above operations.
          </p>

          {/* 5. Data Processors */}
          <h2 className={h2Class} style={h2Style}>
            5. Data Processors
          </h2>
          <p>
            In providing its services, MIA CARE uses Data Processors pursuant to art. 28 no. 4 of
            the GDPR, i.e. external parties entrusted with certain data processing activities.
            Namely MIA CARE uses the services of:
          </p>
          <ul className="list-none pl-0 space-y-2">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                A) Google Workspace (formally GSuite) by Google Ireland Ltd.
              </strong>{" "}
              to: back-up the data received by email on Google Cloud; send and receive emails using
              the Gmail business service.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>B) HubSpot by HubSpot Inc.</strong>{" "}
              to: provide the newsletter service; provide the instant messaging service; store
              Users' personal data.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>C) MIA s.r.l.</strong> to: manage
              marketing and communication services.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                D) Aut O'Mattic A8C Ireland Ltd
              </strong>{" "}
              to: create and manage the website on wordpress.com.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>E) QZR s.r.l.</strong> to: manage
              www.mia-care.io as system administrator.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>F) ICTandStrategy s.r.l.</strong> to:
              manage some HubSpot functions as system administrator.
            </li>
          </ul>
          <p>
            For further information, please send an email to{" "}
            <a href="mailto:privacy@mia-care.io" style={mutedLink}>
              privacy@mia-care.io
            </a>
            .
          </p>

          {/* 6. Storage period */}
          <h2 className={h2Class} style={h2Style}>
            6. Storage period for personal data
          </h2>
          <p>
            The personal data referred to in art. 3 and listed below are stored for the period of
            time detailed below. A distinction is made between:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Browsing data:</strong> stored for a
              maximum period of twenty-six (26) months and then immediately erased. For further
              information, please refer to the Cookies Section.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                Use of forms (for the free download of technical documents):
              </strong>{" "}
              data shall be stored until the purpose for which they were provided has been achieved
              or for a maximum period of twelve (12) months since the User's most recent interaction
              with MIA CARE.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                Request for information (by email or instant messaging service):
              </strong>{" "}
              data shall be stored until the purpose for which they were provided has been achieved
              or for a maximum period of thirty (30) days since the User's most recent interaction
              with MIA CARE.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                Spontaneous application for a job position:
              </strong>{" "}
              data shall be stored until the purpose for which they were provided has been achieved
              or for a maximum period of one (1) year from the date of receipt of the CV by MIA
              CARE.
            </li>
          </ul>
          <p>
            Data are stored on servers located within the European Union. For operating reasons of
            some Data processors, Data may be transferred outside the European Union. For further
            information on this subject, please send an e-mail to{" "}
            <a href="mailto:privacy@mia-care.io" style={mutedLink}>
              privacy@mia-care.io
            </a>
            . MIA CARE ensures the definitive erasure of the aforementioned data.
          </p>

          {/* 7. Social Media */}
          <h2 className={h2Class} style={h2Style}>
            7. Social Media and links to other sites
          </h2>
          <p>
            MIA CARE uses certain social media channels to communicate with the public: LinkedIn,
            Instagram and Vimeo. Users can find the button for sharing content on these social
            networks on www.mia-care.io. Social platforms such as LinkedIn, Instagram and Vimeo may
            save Users' data in cloud on servers that may be located outside the European Union and
            use their own cookies to recognise Users who are browsing after having logged into their
            accounts.
          </p>
          <p>
            MIA CARE has made no agreements with the companies that run the aforementioned platforms
            and has no control over how the data of Users who have logged in are used. Therefore,
            MIA CARE invites Users to read the privacy policy adopted by LinkedIn, Instagram and
            Vimeo.
          </p>
          <p>
            Users are informed that certain Vimeo videos may be viewed directly on the MIA website.
            In this case, cookies or other tracking systems may be used. To avoid tracking, Users
            may change their preferences at any time by clicking on the Cookies button on the
            www.mia-care.io footer.
          </p>

          {/* 8. Cookies */}
          <h2 className={h2Class} style={h2Style}>
            8. Cookies
          </h2>
          <p>Please refer to the Section on the use of cookies below.</p>

          {/* 9. Erasure and rights */}
          <h2 className={h2Class} style={h2Style}>
            9. Erasure and other User rights pursuant to the GDPR
          </h2>
          <p>Users, at any time, may exercise the right to:</p>
          <ul className="list-[upper-alpha] pl-6 space-y-2">
            <li>
              Obtain confirmation as to whether or not personal data concerning them are being
              processed;
            </li>
            <li>
              Obtain information about the purposes of the processing, the categories of personal
              data concerned, the recipients or categories of recipient to whom the personal data
              have been or shall be disclosed and, where possible, the period of storage;
            </li>
            <li>
              Request from the Data Controller access to personal data and the rectification or
              erasure of personal data or restriction of processing of personal data concerning them
              or to object to such processing, as well as the right to data portability;
            </li>
            <li>Lodge a complaint with the supervisory authority.</li>
          </ul>
          <p>
            In order to exercise the aforementioned rights, Users shall send a written request to{" "}
            <a href="mailto:privacy@mia-care.io" style={mutedLink}>
              privacy@mia-care.io
            </a>
            . The request shall be processed within thirty (30) business days from its receipt.
          </p>

          {/* 10. DPO */}
          <h2 className={h2Class} style={h2Style}>
            10. Data Protection Officer
          </h2>
          <p>
            It is possible to contact the Data Protection Officer appointed by MIA CARE s.r.l. by
            sending an e-mail to:{" "}
            <a href="mailto:privacy@mia-platform.eu" style={mutedLink}>
              privacy@mia-platform.eu
            </a>
          </p>

          {/* ── COOKIES SECTION ── */}
          <div
            id="cookies"
            className="mt-14 pt-10 border-t"
            style={{ borderColor: "var(--bg-border)" }}
          >
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}
            >
              Cookies
            </h2>
            <p>
              As Data Controller, MIA CARE uses cookies for the correct operation of its website
              www.mia-care.io and its subsections (blog, resources and documentation) and to make it
              easy for Users to browse its website. MIA CARE processes the data collected by cookies
              according to art. 6 paragraph I letter a) (consent from Users to enable them); (b)
              (performance of a contract); (f) (MIA CARE's legitimate interest) of the GDPR. The
              period of storage for such data is shown in the Cookies Table or in the information
              notice on third party cookies which may be accessed by clicking on the relevant
              hyperlink. By browsing the website and based on the consent given, Users agree that
              certain personal data regarding them which have been collected may be transferred
              outside the European Union.
            </p>

            <h3 className={h3Class} style={h3Style}>
              1. What are cookies?
            </h3>
            <p>
              Cookies are portions of code installed in the browser that help MIA CARE provide
              browsing services on www.mia-care.io according to the purposes described in this
              Information notice in the above Section. Some of the purposes for which Cookies are
              installed may also require the User's consent: in this case, the User's consent may be
              withdrawn freely at any time by clicking on the Cookies button on the website footer.
            </p>

            <h3 className={h3Class} style={h3Style}>
              2. What type of cookies does the MIA CARE website use?
            </h3>
            <p>This website uses the following cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Technical cookies:</strong> they
                ensure the correct use of website content.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Performance cookies:</strong> tool
                for the anonymous and aggregate analysis of Users' behaviour on the website.
                Although these cookies do not identify the User, they are able to detect, for
                example, if the same User logs in again at a different time.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Profiling cookies:</strong> used to
                promote offers in line with Users' needs.
              </li>
            </ul>
            <p className="mt-3">
              Some of the cookies on this website are third-party cookies, as shown in the Cookies
              Table below.
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
                      Flag
                    </th>
                    <th
                      className="border px-3 py-2 text-left font-semibold"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Type of cookies
                    </th>
                    <th
                      className="border px-3 py-2 text-left font-semibold"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Data Processor
                    </th>
                    <th
                      className="border px-3 py-2 text-left font-semibold"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Period of storage
                    </th>
                    <th
                      className="border px-3 py-2 text-left font-semibold"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Purposes
                    </th>
                  </tr>
                </thead>
                <tbody style={{ color: "var(--text-secondary)" }}>
                  <tr>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Compulsory
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Technical cookies
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
                      Session
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Ensuring correct operation of website.
                    </td>
                  </tr>
                  <tr style={{ background: "var(--bg-raised)" }}>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Optional
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Performance cookies
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
                      Variable
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Optimising the website and User's browsing experience.
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Optional
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Profiling cookies
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
                      Variable
                    </td>
                    <td
                      className="border px-3 py-2 align-top"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      Sharing website content with other users (social media);
                      <br />
                      Proposing advertising messages in line with Users' on-line behaviour and
                      interests;
                      <br />
                      Proposing personalised content and information on specific Users' preferences.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={h3Class} style={h3Style}>
              3. Enabling and disabling cookies
            </h3>
            <p>
              Since some of the performance cookies and profiling cookies of MIA CARE and/or third
              parties are not essential for the proper operation of the website, Users who have
              given their consent to enable the optional cookies specified above may, at any time,
              change or withdraw their consent to the use of optional (own or third-party) cookies
              by clicking on the Cookies button on the www.mia-care.io footer.
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
              Information is given below on the processing of personal data that you have
              voluntarily disclosed to us online in the form available on www.mia-care.io or at an
              event you personally attended, which is essential for providing the newsletter service
              to you.
            </p>

            <h3 className={h3Class} style={h3Style}>
              1. What data do we ask you for?
            </h3>
            <p>
              MIA CARE always asks you for your email address, which is common personal data. MIA
              CARE may also request the following additional common personal data from you:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name;</li>
              <li>Surname;</li>
              <li>Job position;</li>
              <li>Company.</li>
            </ul>

            <h3 className={h3Class} style={h3Style}>
              2. How do we use your data?
            </h3>
            <p>
              MIA CARE processes all your personal data specified above in accordance with art. 6,
              paragraph 1, letters a), b), f) of the GDPR. Your data are used to send you our
              e-newsletter periodically and to keep you fully updated on: MIA CARE software product
              developments; news about our activities; training events; deeper insights that can be
              downloaded (PDF file) free of charge. MIA CARE shall not use your data to send you any
              advertising material or to offer you any discounts or invite you to join any
              promotional campaigns of any kind.
            </p>
            <p>
              We inform you that your personal data may be collected manually (by filling out a
              paper form) or using computerised means. Subsequent recording, submission,
              rectification and erasure operations shall be carried out using computerised means.
              MIA CARE warrants that the personal data you provide shall be processed by taking
              appropriate technical and organisational measures to ensure safe operations: for
              further information, please write to{" "}
              <a href="mailto:privacy@mia-care.io" style={mutedLink}>
                privacy@mia-care.io
              </a>
              .
            </p>

            <h3 className={h3Class} style={h3Style}>
              3. Who helps us to process your data?
            </h3>
            <p>
              MIA CARE uses Data Processors to provide this service, pursuant to art. 28 of the
              GDPR, that is, external parties to whom we entrust certain activities relating to the
              processing of your data. In this regard, we would like to point out that our
              newsletter service is managed on HubSpot, a marketing platform also used to send
              newsletters, owned by HubSpot Ireland Ltd, a subsidiary of HubSpot Inc., based in the
              United States of America.
            </p>
            <p>
              HubSpot allows us to receive information about who opens the newsletters and clicks on
              the links. MIA CARE uses this information for the sole purpose of understanding which
              content is of greatest interest to Users receiving the newsletters.
            </p>
            <p>
              By agreeing to receive our newsletter, you agree to the storage of your email address
              on HubSpot Ireland Ltd's Servers and to the transfer of your data referred to in art.
              3 above to the United States of America based on HubSpot Inc.'s Standard Contractual
              Clauses.
            </p>
            <p>
              In addition, MIA uses the Google Workspace (formally GSuite) services of Google
              Ireland Ltd, to: back-up your data on Google Cloud; send and receive emails using the
              Gmail business service. For further information, please send an email to{" "}
              <a href="mailto:privacy@mia-care.io" style={mutedLink}>
                privacy@mia-care.io
              </a>
              .
            </p>

            <h3 className={h3Class} style={h3Style}>
              4. For how long and where do we store your data?
            </h3>
            <p>
              Your data shall be stored as long as you decide to continue to receive our newsletter.
              We remind you that you can unsubscribe at any time by clicking on the Unsubscribe
              button at the bottom of any e-mail sent. Subject to the provisions set out in art. 3 —
              potential transfer of data to the USA via HubSpot — your data shall be stored on
              servers located within the European Union: for further information on this subject,
              please send an email to{" "}
              <a href="mailto:privacy@mia-care.io" style={mutedLink}>
                privacy@mia-care.io
              </a>
              . When you unsubscribe, HubSpot shall inform MIA CARE that the newsletter has been
              unsubscribed successfully.
            </p>

            <h3 className={h3Class} style={h3Style}>
              5. Erasure and your other rights under the GDPR
            </h3>
            <p>
              Pursuant to articles 15–22 of the GDPR, you may exercise the following rights at any
              time:
            </p>
            <ul className="list-[upper-alpha] pl-6 space-y-2">
              <li>
                The right to obtain confirmation as to whether or not personal data concerning you
                are being processed;
              </li>
              <li>
                The right to obtain information about the purposes of the processing, the categories
                of personal data concerned, the recipients or categories of recipient to whom the
                personal data have been or shall be disclosed and, where possible, the period for
                which the data shall be stored;
              </li>
              <li>
                The right to request from the Data Controller access to the personal data and the
                rectification or erasure of personal data or restriction of processing concerning
                you or to object to such processing, as well as the right to data portability;
              </li>
              <li>
                The right to object at any time to processing of personal data, including for direct
                marketing purposes;
              </li>
              <li>
                The right to object to an automated decision-making process concerning individuals,
                including profiling;
              </li>
              <li>
                The right to withdraw your consent at any time without affecting the lawfulness of
                processing based on consent before its withdrawal;
              </li>
              <li>The right to lodge a complaint with a supervisory authority.</li>
            </ul>
            <p>
              You may exercise your rights by sending a written request to:{" "}
              <a href="mailto:privacy@mia-care.io" style={mutedLink}>
                privacy@mia-care.io
              </a>
              . Your request shall be processed within thirty (30) working days from its receipt.
            </p>

            <h3 className={h3Class} style={h3Style}>
              6. Links to other sites
            </h3>
            <p>
              MIA CARE informs you that this information notice does not apply to other websites and
              on-line pages or services that can be reached via hyperlink published at the bottom of
              the newsletter. We invite you, therefore, to view the privacy policy of these linked
              sites.
            </p>

            <h3 className={h3Class} style={h3Style}>
              7. Data Protection Officer
            </h3>
            <p>
              It is possible to contact the Data Protection Officer appointed by MIA CARE s.r.l. by
              sending an e-mail to:{" "}
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
