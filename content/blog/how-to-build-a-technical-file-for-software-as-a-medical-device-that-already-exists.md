---
title: "How To Build A Technical File For Software As A Medical Device That Already Exists"
slug: "how-to-build-a-technical-file-for-software-as-a-medical-device-that-already-exists"
description: "Read this step-by-step guide to build a technical file starting from existing SaMD."
seoTitle: "Build a Technical File for Existing SaMD: Step-by-Step Guide"
date: "2026-11-05"
author: "dario-esposito"
categories: ["international-standards"]
featuredImage: "/blog/images/how-to-build-a-technical-file-for-software-as-a-medical-device-that-already-exists.webp"
featuredImageAlt: "How To Build A Technical File For Software As A Medical Device That Already Exists"
excerpt: "Read this step-by-step guide to build a technical file starting from existing SaMD."
---

To build a technical file for existing software, start from what the regulation requires and map it against the evidence you already have: intended purpose and classification, the software life-cycle records required by IEC 62304, the risk management file, verification and validation, clinical evaluation and post-market plans. Then rebuild only the missing pieces, and set up your process so the file stays current with every release.

Many teams meet this question late. The software has been in use for years, inside a hospital, as part of a device, or as a wellness product whose intended purpose has grown, and now it must be certified as **Software as a Medical Device (SaMD)**. Where you start depends on its history: software already on the market as a medical device can follow a lighter legacy route, while software that has never been a medical device needs its evidence rebuilt against the full requirements. Either way, **the instinct is to start writing documents. The better start is an inventory**.

## 1. Confirm that the software is a medical device, and its class

In the EU, software is a medical device when it has a medical purpose under the [Medical Device Regulation (MDR, Regulation (EU) 2017/745)](https://eur-lex.europa.eu/eli/reg/2017/745/oj/eng) and does more than store, archive, communicate or perform a simple search on data. Guidance from the Medical Device Coordination Group, MDCG 2019-11 Rev.1 (June 2025), sets out this test and explains how to apply it, including for modules inside larger systems. Classification follows Rule 11 of MDR Annex VIII: software that provides information used for diagnostic or therapeutic decisions is class IIa or higher, so a notified body (the independent organisation that certifies devices in the EU) will review your file.

Write this down first. The intended purpose drives every other part of the file.

## 2. List what the technical file must contain

MDR Annexes II and III describe the technical documentation. For software, it typically includes:

* Device description, intended purpose and variants;
* The general safety and performance requirements checklist, with a pointer to the evidence for each;
* Design and manufacturing information, including the software life-cycle records;
* The risk management file ([ISO 14971](https://www.iso.org/standard/72704.html));
* Verification and validation, including software testing and usability ([IEC 62366-1](https://www.iso.org/standard/63179.html));
* Cybersecurity documentation;
* The clinical evaluation report (for software, guidance [MDCG 2020-1](https://health.ec.europa.eu/system/files/2020-09/md_mdcg_2020_1_guidance_clinic_eva_md_software_en_0.pdf)) and the post-market clinical follow-up plan;
* The post-market surveillance plan, labelling and instructions for use.

## 3. Map your existing evidence against IEC 62304

[**IEC 62304**](https://mia-care.io/resources/blog/iec-62304-a-comprehensive-faq-guide) is the standard for the medical device software life cycle. It asks for a development plan, software requirements, architecture, testing at the right level for the software safety class (A, B or C), configuration management and problem resolution. It also asks you to identify every third-party or open-source component (SOUP, "software of unknown provenance") and to review its known problems.

If your software is already on the market as a medical device, IEC 62304 (clause 4.4) offers a route for legacy software: assess the risks of the software as it is, decide which gaps matter for safety, close them, and document your rationale. If it has never been a medical device, that route does not apply: you rebuild the evidence retrospectively against the full standard. You still do not have to rewrite the code. **You need to show that it meets the requirements**.

Practical tip: make one table with three columns: requirement of the standard, evidence you have today, gap. It becomes your remediation plan.

## 4. Rebuild the evidence that is missing, in the right order

Teams usually find the same gaps:

1. **Requirements written after the fact.** Reconstruct them from the intended purpose, the user interface and the code, then have them reviewed like new requirements.
2. **Risk analysis that does not reach the software.** Link each software item to the hazards it can contribute to, and each risk control to a test.
3. **Tests without traceability.** Existing automated tests are valuable evidence once they are linked to requirements and risk controls.
4. **An incomplete SOUP list.** Generate a software bill of materials (SBOM) from the build and compare it with what was declared.

Close the safety-relevant gaps first; documentation polish comes last.

## 5. Keep the file alive after certification

A technical file is not a one-time deliverable. Every release changes requirements, risks, tests and components. If the evidence is produced as a separate project before each audit, the file drifts out of date between audits. The teams that cope best keep requirements, risks, tests and releases linked while they develop, so the file is a view of their work rather than a document they rewrite.

## 6. Mind the dates

* The MDR transition deadlines in force are 31 December 2027 (class III and class IIb implantables) and 31 December 2028 (other classes), under conditions set by Regulation (EU) 2023/607. These dates apply only to devices already certified under the old directives: software that has never been a medical device must comply with the MDR in full before it is placed on the market.
* [EUDAMED](https://ec.europa.eu/tools/eudamed/eudamed), the EU device database: actor, device, certificate and market-surveillance modules have been mandatory since 28 May 2026. The vigilance module will not become mandatory before 2028, the European Commission told stakeholders on 22 October 2026.
* A revision of the MDR is being negotiated; until it is adopted, the current MDR applies in full.

## Where a platform helps

You can do all of this with documents and spreadsheets; many teams do. A platform helps with the two steps that take longest: **the gap analysis of what already exists, and keeping the evidence linked afterwards**.

**P4SaMD by Mia-Care**, a Mia-Platform company, offers a guided import of existing software with an automated gap analysis and a [prioritised remediation plan](https://mia-care.io/resources/blog/brownfield-assessment-remediation), requirements and risk management with two-way traceability, [SBOM generation](https://www.mia-platform.eu/blog/what-does-an-sbom-mean-for-ai) and reconciliation with declared SOUP, and a Documentation Hub to browse and export compliance artifacts. Mia-Care is certified [ISO 13485:2016](https://www.iso.org/standard/13485). P4SaMD helps teams produce and maintain the evidence; the notified body decides.

## Frequently asked questions

### Do we have to rewrite existing software to certify it?

Usually not. If it is already on the market as a medical device, IEC 62304 offers a legacy route based on risk assessment and documented gap closure. If not, you rebuild the documentation and evidence retrospectively, but the code itself rarely needs rewriting.

### How long does it take?

It depends on the class, the size of the software and how much evidence exists. Start with the gap analysis: it gives you a realistic plan.

### Can we reuse our existing tests?

Yes, once they are linked to requirements and risk controls and their results are recorded.

### Who decides whether the technical file is sufficient?

The notified body in the EU; the FDA for US submissions.
