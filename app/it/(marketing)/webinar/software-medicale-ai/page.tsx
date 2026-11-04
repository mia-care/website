import type { Metadata } from "next";
import { WebinarPage } from "@/components/sections/webinar/WebinarPage";
import { webinar } from "@/data/webinar.it";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Webinar: Dall'algoritmo alla clinica, software medicale nell'era dell'IA | Mia-Care",
  },
  description:
    "Webinar gratuito il 30 novembre 2026 alle 16:00. Come portare a mercato un software medicale nell'era dell'IA tra EU MDR, IVDR, EU AI Act e FDA PCCP, con il caso Aindo.",
  alternates: { canonical: webinar.path, languages: localeAlternates(webinar.path) },
};

export default function WebinarSoftwareMedicaleAiPage() {
  return <WebinarPage webinar={webinar} />;
}
