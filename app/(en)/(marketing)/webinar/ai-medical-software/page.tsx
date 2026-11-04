import type { Metadata } from "next";
import { WebinarPage } from "@/components/sections/webinar/WebinarPage";
import { webinar } from "@/data/webinar";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Webinar: From Algorithm to Clinic, AI Medical Software to Market | Mia-Care",
  },
  description:
    "Free webinar on November 30, 2026, 17:30 CET. How to bring AI medical software to market under EU MDR, IVDR, EU AI Act and FDA PCCP, with a case study by Aindo.",
  alternates: { canonical: webinar.path, languages: localeAlternates(webinar.path) },
};

export default function WebinarAiMedicalSoftwarePage() {
  return <WebinarPage webinar={webinar} />;
}
