import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { CookieBanner } from "@/components/common/CookieBanner";
import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { announcement } from "@/data/announcement.it";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const styreneA = localFont({
  src: [
    { path: "../../public/fonts/StyreneA-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/StyreneA-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/StyreneA-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-sa",
  display: "swap",
});

const styreneB = localFont({
  src: [
    { path: "../../public/fonts/StyreneB-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/StyreneB-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-sb",
  display: "swap",
});

const GTM_ID = "GTM-5N5DWRS";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mia-care.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "P4SaMD: Piattaforma di Sviluppo SaMD Conforme — Mia-Care",
    template: "%s | Mia-Care P4SaMD",
  },
  description:
    "P4SaMD integra la conformità a IEC 62304, EU MDR, EU AI Act e GAMP 5 direttamente nel tuo SDLC. Costruisci, certifica ed evolvi software medicale regolamentato fino a 3 volte più velocemente.",
  applicationName: "Mia-Care P4SaMD",
  authors: [{ name: "Mia Care" }],
  robots: { index: true, follow: true },
  alternates: {
    languages: {
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Mia-Care P4SaMD",
    title: "P4SaMD — Piattaforma di Sviluppo SaMD Conforme",
    description: "Piattaforma AI-native che integra la conformità regolatoria nel tuo SDLC.",
    url: `${SITE_URL}/it`,
    images: [
      {
        url: "/images/logo/Horizontal_Lockup_Primary.svg",
        alt: "Mia-Care P4SaMD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P4SaMD — Piattaforma di Sviluppo SaMD Conforme",
    description:
      "Compliance by design per Software as a Medical Device. EU MDR, FDA, ISO 13485, IEC 62304, EU AI Act.",
  },
};

export default function ItalianRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`h-full ${styreneA.variable} ${styreneB.variable} ${inter.variable}`}
    >
      <head>
        {/* Set --banner-h before first paint to prevent layout shift */}
        <style>{`:root { --banner-h: ${announcement.enabled ? "40px" : "0px"}; }`}</style>
        <Script id="gtm-init" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-bg-base text-text-primary"
      >
        {/* Consent Mode v2 defaults — beforeInteractive must be in <body> in App Router */}
        <Script id="consent-defaults" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          });
        `}</Script>
        <noscript>
          <iframe
            title="gtm"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:bg-brand-green focus:text-bg-base"
        >
          Salta al contenuto principale
        </a>
        <AnnouncementBanner config={announcement} />
        <Navbar locale="it" />
        <main
          id="main-content"
          className="flex-1"
          style={{ paddingTop: "calc(var(--banner-h, 0px) + 4rem)" }}
        >
          {children}
        </main>
        <Footer locale="it" />
        <CookieBanner locale="it" />
      </body>
    </html>
  );
}
