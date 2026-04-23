"use client";

import { useEffect, useRef } from "react";
import { SITE } from "@/data/site";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
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
