---
title: "The Power Of Saga Pattern To Digitalize Healthcare Operations"
slug: "the-power-of-saga-pattern-to-digitalize-healthcare-operations"
description: "Leveraging cloud-based architectures is the next big step when it is time to manage digital health services. New care solutions …"
seoTitle: "The Power Of Saga Pattern To Digitalize Healthcare Operat…"
date: "2022-07-15"
modified: "2023-02-16"
author: "mia-care"
categories: ["technology-application"]
featuredImage: "/blog/images/the-power-of-saga-pattern-to-digitalize-healthcare-operations.webp"
featuredImageAlt: "The Power Of Saga Pattern To Digitalize Healthcare Operations"
excerpt: "Leveraging cloud-based architectures is the next big step when it is time to manage digital health services. New care solutions …"
---

Leveraging cloud-based architectures is the next big step when it is time to manage digital health services. New care solutions make people more aware and support them in choosing the best possible decisions on care paths and improving their current health status. The easier the engagement, the higher the quality of the care provided.

One of the main challenges for healthcare companies is **ensuring information alignment among different touchpoints** and **providing patients with a flawless experience** so they can easily interact with care providers.

How achieve it? By pursuing data consistency during all the process transactions (i.e., a single unit of logic or multiple units that operate together and that succeed or fail as a unit).

In multiservice architectures, multiple transactions require a cross-service transaction management strategy that focuses on data consistency.

## What is Saga Pattern and why addressing Data Consistency is necessary?

Data consistency allows services to interact seamlessly with each other since all the running information matches perfectly. Generally, the team in charge of managing all the company data, often led by the Chief Data Officer, have to focus mainly on two points of attention:

- **ensuring data consistency in a distributed operation among different systems**, in order to ensure a precise order for the flow execution of microservices operations;
- **guaranteeing error safety**, by creating remediation mechanisms that restore the right situation in case of mistakes.

Saga Pattern helps exactly in fulfilling these needs by guaranteeing stability and a low error rate on distributed transactions among many microservices. But, what is exactly a Saga? A Saga is the management of distributed transactions from start to finish.

Two are the strategy to approach Saga Pattern:

- events/choreography: the services carry on the saga by working together, without having someone to control them;
- commands/orchestration: the saga is managed by a centralized orchestrator.

Each approach has both [benefits and limitations](https://blog.mia-platform.eu/en/saga-pattern-how-to-manage-distributed-transactions-with-microservices), and, of course, there is no universal rule that establishes which is the most suitable. The project implementation defines which is the best fit for that particular situation.

## The Flow Manager: the Saga Pattern plugin developed by Mia-Platform

During the development of the Mia-Platform solution, the R&D Team decided to create a generic component acting as an orchestrator, opting for the commands/orchestration approach. This orchestrator, called **Flow Manager**, was built to ensure full control over the process, as well as flexibility and ease of implementation.

The final output is **a microservice that manages the sagas following the flow imposed by an event-driven finite-state machine**, in which the transactions are triggered by messages. These messages are events exchanged asynchronously via an event bus (e.g. [Apache Kafka](https://www.confluent.io/what-is-apache-kafka)).

Since the [Flow Manager](https://blog.mia-platform.eu/en/flow-manager-the-saga-orchestrator-of-mia-platform) orchestrator was developed as a ready-to-use service, advantages are immediately evident for users. To meet specific project needs, it is sufficient to define the finite state diagram that describes the possible flows of interactions and translate it into a simple configuration file.

## How to leverage Flow Manager in the healthcare ecosystem? The developing experience of the Mia-Care Team

As soon as Mia-Care started its development activity on digital projects, the team gained a significant boost from using the Flow Manager as Saga Pattern orchestrator. The plugin enables Teams to **decrease development time** and **create automated flows** without writing new code from scratch.

Currently, in Mia-Care we have applied this tool to healthcare structures adopting a **digital patient journey**, and to digital health companies that offer virtual primary care services.

Let’s dig into these two use cases to give a brighter example of the value provided by the Flow Manager.

### Digital Patient Journey for Hospitals

Mia-Care Team was involved in the [digitalization of a Patient Journey](https://mia-care.io/technology-application/digitalize-your-patient-journey-by-leveraging-a-composable-software-suite/) to provide a **flawless experience to people that need to book a visit or a follow-up within a hospital structure** by unifying the digital to the physical world.

Once landed on the hospital booking platform, if already registered, the patient can select the clinical performance needed, the favorite day, and the location (among different care structures). The system shows the availabilities of doctor specialists already related to the patient by matching with their calendars. In the end, the user can select a suitable time slot and go next by selecting the payment method (“*pay now to skip the queue*” or “*pay after the visit*”).

If there are no issues, the patient can access the service through a QR code if the visit is physical or through an email link if it is run remotely by the doctor. We previously understood how Flow Manager is quite a boost for managing errors through the remediation process. In this case, when an error occurs (time-slot no more available or wrong fiscal code), the plugin redirects the user to the booking portal sending an “*error*” message that is displayed before being redirected to the main page.

What are the cool things implemented within this project?

- Once patients book online or modify an event, they receive **automatic notifications and reminders**;
- The patient can enter the visit **via a QR code or link** (for remote visiting);
- SMS or push notifications ask the patient to wait **remotely to keep social distancing**;
- The patient portal and smartphone app give a **real-time queue situation**, so people do not have to wait physically.

And the advantages?

- Streamline patient journeys;
- Reduction of wasting time and no-show rate;
- Increase staff efficiency.

### Pharmacy E-commerce for Virtual Primary Care Service

Last year we led a digital project to create a **virtual primary care platform**, powered by [e-commerce for pharmacie](https://docs.mia-platform.eu/docs/runtime_suite/pharma-e-commerce-backend/overview)s and a workflow for therapy adherence monitoring.

Since it was difficult to ensure data consistency and avoid errors along the value chain, the Flow Manager was the perfect tool to use, since it **efficiently manages the whole ordering and purchasing process**, arriving to trigger notifications and alerts during the last-mile delivery.

In specific, the order transaction process will perform the following activities:

- The user enters the e-commerce;
- The user selects the item from the closest pharmacy;
- The user clicks on “Order”;
- The order is created;
- The Order Service notifies the pharmacy;
- The pharmacy confirms and enters a time for collection;
- The payment service enables the user to pay for the order;
- The user pays for the order;
- The payment service updates the order;
- The delivery service notifies the pharmacy and the biker;
- The biker picks up the order and delivers it;
- The order is closed.

Of course, even in this case, a remediation process would occur if the process gives errors back. For example, when the user provides wrong information related to the bank account or delivery address, the system blocks the order and forces the user to solve the issue. Another relevant example is represented by the “*out of stock*” case. The final customer can be stopped by a lack of availability from the closest pharmacy and redirected to the order page that shows a different pharmacy that would provide the medicine.

## Conclusions

In order to guarantee data consistency, it is mandatory to take care of several complexities by always assuring error safety. Therefore, Mia-Care relies on the **performant Flow Manager to handle event-based processes**.

While hospitals can optimize processes and reduce operations costs by lowering the show rate, the digital health startup focused on primary care could leverage the Flow Manager to provide patients with an easy-to-use e-commerce solution and increase the purchasing volume.

These were just two examples of the great potential of the Flow Manager. In fact, this powerful tool allows you to handle potentially every saga, no matter how complex it is, and it also helps you visualize the saga thanks to the [Flow Manager Visualizer](https://docs.mia-platform.eu/docs/development_suite/api-console/api-design/flow-manager-visualizer). This graphic representation allows both developers and non-technical people to clearly understand the full saga, without any need to manually design it because Mia-Platform Console does all the work for you.

Imagine how much time you can save customizing this ready-to-use tool according to your hospital requirements, instead of starting from scratch.

[![](https://mia-care.io/wp-content/uploads/2023/02/Paper_DPJ_Banner.svg)](https://mia-care.io/paper/the-digitization-of-patient-journey-with-a-microservices-based-platform/)
