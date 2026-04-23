import type { Metadata } from "next";
import Script from "next/script";
import { CookieBanner } from "@/components/common/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const GTM_ID = "GTM-5N5DWRS";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mia-care.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "P4SaMD: Compliant SaMD Development Platform — Mia-Care",
    template: "%s | Mia-Care P4SaMD",
  },
  description:
    "P4SaMD embeds IEC 62304, EU MDR, EU AI Act, and GAMP 5 compliance directly into your SDLC. Build, certify, and evolve regulated medical software up to 3x faster.",
  applicationName: "Mia-Care P4SaMD",
  authors: [{ name: "Mia Care" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Mia-Care P4SaMD",
    title: "P4SaMD — Compliant SaMD Development Platform",
    description: "AI-native platform that embeds regulatory compliance directly into your SDLC.",
    url: SITE_URL,
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Mia-Care P4SaMD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P4SaMD — Compliant SaMD Development Platform",
    description:
      "Compliance by design for Software as a Medical Device. EU MDR, FDA, ISO 13485, IEC 62304, EU AI Act.",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Consent Mode v2 defaults — must run before GTM so tags start in denied state */}
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
        <Script id="gtm-init" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col bg-bg-base text-text-primary">
        <noscript>
          <iframe
            title="gtm"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
