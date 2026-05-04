"use client";

import { useEffect, useRef } from "react";
import { SITE } from "@/data/site";

// Injected directly into the HubSpot iframe via cssRequired —
// parent-page CSS cannot reach cross-origin iframes.
const IFRAME_CSS = `
  body { background: transparent; font-family: system-ui, sans-serif; }
  *, *::before, *::after { box-sizing: border-box; color: #f0f0f2 !important; }
  h1, h2, h3, h4, h5, h6 { color: #f0f0f2 !important; }
  p, span, div { color: #f0f0f2 !important; }
  label { color: rgba(240,240,242,0.75) !important; font-size: 0.8125rem; font-weight: 600; }
  input, select, textarea {
    background: #181a22 !important;
    color: #f0f0f2 !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 0.5rem;
    padding: 0.625rem 0.875rem;
    width: 100%;
  }
  input:focus, select:focus, textarea:focus {
    outline: 2px solid #00f096 !important;
    outline-offset: 2px;
    border-color: #00f096 !important;
  }
  input::placeholder, textarea::placeholder { color: rgba(240,240,242,0.35) !important; }
  .hs-button {
    background: linear-gradient(90deg, #00f096, #00f0f0) !important;
    color: #0b0c10 !important;
    border: none !important;
    border-radius: 0.5rem !important;
    font-weight: 600 !important;
    cursor: pointer;
    width: 100%;
    padding: 0.75rem 1.5rem;
  }
  .hs-button:hover { opacity: 0.9; }
  .hs-error-msgs, .hs-error-msg { color: #f87171 !important; font-size: 0.75rem; list-style: none; padding: 0; margin-top: 0.25rem; }
  .legal-consent-container, .legal-consent-container * { color: rgba(240,240,242,0.65) !important; font-size: 0.75rem; }
  .legal-consent-container a { color: #00f096 !important; text-decoration: underline; }
  fieldset { max-width: 100% !important; border: none; padding: 0; }
  .hs-form-field { margin-bottom: 1rem; }
  .inputs-list { list-style: none; padding: 0; margin: 0; }
`;

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
          cssRequired?: string;
        }) => void;
      };
    };
  }
}

type Props = {
  portalId?: string;
  formId?: string;
  region?: string;
};

export function HubSpotForm({
  portalId = SITE.hubspot.portalId,
  formId = SITE.hubspot.formId,
  region = SITE.hubspot.region,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const targetId = `hs-form-${formId}`;
    if (containerRef.current) {
      containerRef.current.id = targetId;
    }

    const initForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${targetId}`,
          cssRequired: IFRAME_CSS,
        });
      }
    };

    if (window.hbspt) {
      initForm();
      return;
    }

    const script = document.createElement("script");
    script.src = `//js-${region}.hsforms.net/forms/embed/v2.js`;
    script.async = true;
    script.onload = initForm;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [portalId, formId, region]);

  return <div ref={containerRef} className="hs-form-wrapper" style={{ minHeight: 400 }} />;
}
