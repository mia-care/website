---
title: "5 Questions about FHIR: the new health data interoperability standard"
slug: "5-questions-about-fhir-the-new-health-data-interoperability-standard"
description: "In a world more interconnected and digitalized, the value of an ecosystem that enables interaction among stakeholders is unprecedently relevant. …"
seoTitle: "5 Questions about FHIR: the new health data interoperabil…"
date: "2023-03-06"
modified: "2023-09-05"
author: "mia-care"
categories: ["technology-application"]
featuredImage: "/blog/images/5-questions-about-fhir-the-new-health-data-interoperability-standard.webp"
featuredImageAlt: "5 Questions about FHIR: the new health data interoperability standard"
excerpt: "In a world more interconnected and digitalized, the value of an ecosystem that enables interaction among stakeholders is unprecedently relevant. …"
---

In a world more interconnected and digitalized, the value of an ecosystem that enables interaction among stakeholders is unprecedently relevant. Of course, the industries that would gain more from digitalization are the most traditional ones. Speaking about healthcare, doctors, clinicians, and patients need to be correctly engaged to enable the correct representation of clinical information shared between clinical systems.

## What is FHIR?

**FHIR** ([Fast Healthcare Interoperability Resources](https://build.fhir.org/summary.html)) **is a standard for data interoperability and exchange**. It was developed by Health Level Seven International ([HL7)](https://www.hl7.org/), a not-for-profit organization focused on creating standards for the exchange, management, and integration of electronic health information. The development of FHIR began in 2011, to create **a modern, web-based standard that would be easier to implement and more effective at exchanging healthcare information** than previous standards such as HL7 v2, HL7 v3, and [CDA](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7). FHIR is based on the latest web standards and technologies, such as RESTful APIs and JSON, which makes it more accessible and easier to implement than previous standards. The first version of FHIR was released in 2014 and it is currently on its fifth version.

**FHIR solutions are built from modular components called “resources”** that can be assembled to solve communication problems between clinical and administrative functions at an affordable price, stimulating worldwide adoption.

## What are the challenges and burdens of FHIR adoption?

Adopting and managing the FHIR standard can be difficult for healthcare companies that still have to develop the expertise over FHIR and lack experience in development using cloud technologies. While FHIR has many benefits and is designed to be easily implemented, there can be challenges and burdens for a company that decides to develop its FHIR-based architecture.

- Technical challenges: **Developing a FHIR-based architecture can be technically challenging,** especially for companies that are not familiar with the latest web standards and technologies. It may require significant time and resources to train developers and implement the technology.
- Data mapping: Mapping existing data systems to the FHIR data model can be difficult and time-consuming.
- Validation and testing: Implementing **FHIR requires extensive testing and validation** to ensure that the system is functioning correctly and is compliant with the standard.
- Security and privacy: FHIR-based systems handle sensitive patient information, so **companies must ensure that the system is secure** and complies with all relevant regulations and standards.
- Maintenance and Upgradation: FHIR is a constantly evolving standard, so companies will have to keep their systems up-to-date and maintain them accordingly.

## What are the tangible benefits of implementing FHIR-based architectures?

Overall, FHIR is a powerful technology, but it does require a significant investment of time and resources to implement it correctly. It’s not a plug-and-play solution, it requires a proper understanding of the standard, the implementation of the standard, and a good amount of testing and validation. Many companies prefer to partner with a vendor or a consultant with expertise in FHIR to help them implement the standard in their systems.

**Mia-Care supports healthcare providers to define and develop FHIR-based architectures by starting from ready-to-use microservices already configured to address challenges and business needs**. Moreover, the solution provides [encryption and decryption schemas](https://mia-care.io/technology-application/crud-encryption-protect-the-sharing-of-sensitive-data-in-healthcare/?_thumbnail_id=3333) that could be applied to several FHIR-enabled solutions and digital touchpoints. Surely, by adopting or developing a new data framework based on FHIR you’d gain massive benefits:

- **Interoperability and Accessibility:** FHIR facilitates the exchange of healthcare information between different systems, allowing for more efficient and effective care by enabling easy access and sharing of personal health data;
- **Scalability**: FHIR is designed to be flexible, extensible, and modular, making it easily adaptable to different use cases and environments;
- **Cost-effective:** FHIR is based on open standards and does not require licensing fees, making it a cost-effective solution for healthcare organizations;
- **Improved patient outcomes:** By facilitating the flow of information between different systems, FHIR can help healthcare providers make more informed decisions and improve patient outcomes;
- **Improved clinical workflows:** By enabling electronic prescribing, clinical decision support, and medication management, FHIR can help improve clinical workflows.

## How to implement FHIR in the Italian healthcare system?

The FHIR data model can be adopted both by public and private healthcare organizations in Italy as a new way to improve the exchange of electronic health information and support interoperability between different systems. The European Union is [promoting the use of FHIR](https://healthmanagement.org/c/healthmanagement/issuearticle/hospitals-on-fhir-preparing-hospitals-for-european-health-data-space#:~:text=Experts%2C%20industry%2C%20and%20EU%2D,Record%20and%20its%20Exchange%20Format.) around member states by issuing guidelines and recommendations for its implementation. However, **it is not clear how this new digital way of data exchange will be massively adopted**, mainly due to the high technical complexity.

Italy has a very bureaucratic framework around public health, and the technical difficulties to work with FHIR sum up the long and **slow procurement process** that characterizes the healthcare system. However, there are a few examples of smart implementations that surely would enrich the quality of healthcare service provision:

- Regional and provincial systems can leverage FHIR to **improve data sharing and interoperability** between different regional systems;
- Private care structures can also implement FHIR-based solutions to improve their services and support interoperability with the National Health System;
- Hospitals and clinics can FHIR-based solutions to **improve their clinical workflows** and support data sharing with other healthcare providers;
- Nursing homes and extended care facilities can build a FHIR-based EHR to **receive structured clinical documents and patient medical history** from external visits from doctor specialists.

Overall, it seems that FHIR is gaining traction in Italy as a way to improve interoperability and support the exchange of electronic health information. With the growing adoption of electronic health records, the FHIR standard is expected to play a key role in the future of the Italian healthcare system.

In the next paragraph, the focus will be on the main example of FHIR use in Italy: the Fascicolo Sanitario Elettronico (FSE 2.0).

## How does the FHIR data model enable the diffusion of FSE 2.0?

The Fascicolo Sanitario Elettronico 2.0 ([FSE 2.0](https://www.gazzettaufficiale.it/eli/id/2022/07/11/22A03961/sg)) is a public electronic health record (EHR) platform. It uses FHIR to support the exchange of electronic health information between different healthcare systems, with the idea to create a master clinical anagraphic for Italian citizens.

After the failure of the first version of the platform that was used just by a bunch of organizations, in May 2022, the Italian government decided to move on and create FSE 2.0. **The idea behind it is to rework the whole IT architecture to redefine interactions among different actors and digital touchpoints by leveraging FHIR as the common ground.** Indeed the FHIR will be used to create a centralized repository of patient health information that can be accessed and shared by authorized healthcare providers. **The platform gathers fragmented clinical information in one single place and leverages** [RESTful API](https://blog.mia-platform.eu/en/api-economy-using-apis-to-open-new-sales-channels) **to enable data sharing between different systems** such as EHRs, clinical decision support systems, and other healthcare-related applications.  
Security and privacy compliance rely on FHIR capabilities to ensure that patient information is protected and only accessible to authorized users, as well as to let patients control access to their data, and can share or revoke access as needed.

## Conclusions

It is undoubtedly clear the direction towards which the industry is evolving. The digitalization wave coming from other relevant sectors such as banking, insurance, and transportation will soon run over healthcare. Institutions, **organizations, and providers must be ready to surf the wave as the demand from citizens for omnichannel services will increase massively.** One of the main pillars of this strategy will surely be data interoperability. Namely, leveraging the FHIR data model standard as the main technology for data exchange: in Italy, as well as all over Europe.

[![](https://mia-care.io/wp-content/uploads/2023/03/Paper_FHIR_Banner.svg)](https://mia-care.io/paper/enable-fhir-based-digital-services-for-data-interoperability/)
