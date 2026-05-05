import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { CookieBanner } from "@/components/common/CookieBanner";
import { announcement } from "@/data/announcement";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const styreneA = localFont({
  src: [
    { path: "../public/fonts/StyreneA-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/StyreneA-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/StyreneA-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-sa",
  display: "swap",
});

const styreneB = localFont({
  src: [
    { path: "../public/fonts/StyreneB-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/StyreneB-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-sb",
  display: "swap",
});

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
    // TODO: replace with a proper 1200×630 PNG at /images/og-default.png
    // SVG is used as a stopgap because og-default.png doesn't exist yet.
    // Some scrapers (Twitter/X, WhatsApp) do not render SVG OG images.
    images: [
      {
        url: "/images/logo/Horizontal_Lockup_Primary.svg",
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
    <html
      lang="en"
      className={`h-full ${styreneA.variable} ${styreneB.variable} ${inter.variable}`}
    >
      <head>
        {/* Set --banner-h before first paint to prevent layout shift */}
        <style>{`:root { --banner-h: ${announcement.enabled ? "40px" : "0px"}; }`}</style>
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:bg-brand-green focus:text-bg-base"
        >
          Skip to main content
        </a>
        <main
          id="main-content"
          className="flex-1"
          style={{ paddingTop: "calc(var(--banner-h, 0px) + 4rem)" }}
        >
          {children}
        </main>
        <CookieBanner />
      </body>
    </html>
  );
}
