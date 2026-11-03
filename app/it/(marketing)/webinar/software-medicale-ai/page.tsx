import type { Metadata } from "next";
import { WebinarPage } from "@/components/sections/webinar/WebinarPage";
import { webinar } from "@/data/webinar.it";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Webinar: dall'algoritmo alla clinica, software medicale con AI | Mia-Care" },
  description:
    "Webinar gratuito il 30 novembre 2026 alle 16:00. Come portare sul mercato un software medicale con AI tra EU MDR, IVDR, EU AI Act e FDA PCCP, con il caso Aindo.",
  alternates: { canonical: webinar.path, languages: localeAlternates(webinar.path) },
};

export default function WebinarSoftwareMedicaleAiPage() {
  return <WebinarPage webinar={webinar} />;
}
