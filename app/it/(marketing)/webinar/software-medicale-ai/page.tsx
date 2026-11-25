import type { Metadata } from "next";
import { WebinarPage } from "@/components/sections/webinar/WebinarPage";
import { webinar } from "@/data/webinar.it";
import { localeAlternates } from "@/lib/seo";

const TITLE = "Webinar: Dall'algoritmo alla clinica, software medicale nell'era dell'IA";
const DESCRIPTION =
  "Webinar gratuito il 30 novembre 2026 alle 16:00. Come portare a mercato un software medicale nell'era dell'IA tra EU MDR, IVDR, EU AI Act e FDA PCCP, con il caso Aindo.";
const OG_IMAGE = {
  url: webinar.ogImage ?? "",
  width: 1200,
  height: 675,
  alt: "Dall'algoritmo alla clinica: webinar live di Mia-Care e Aindo, 30 novembre",
};

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Mia-Care` },
  description: DESCRIPTION,
  alternates: { canonical: webinar.path, languages: localeAlternates(webinar.path) },
  openGraph: {
    type: "website",
    siteName: "Mia-Care P4SaMD",
    locale: "it_IT",
    title: TITLE,
    description: DESCRIPTION,
    url: webinar.path,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function WebinarSoftwareMedicaleAiPage() {
  return <WebinarPage webinar={webinar} />;
}
