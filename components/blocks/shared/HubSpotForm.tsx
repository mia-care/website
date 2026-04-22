"use client";

import { useEffect, useRef } from "react";

interface HubSpotFormProps {
  portalId?: string;
  formId?: string;
  region?: string;
}

export function HubSpotForm({
  portalId = "5308597",
  formId = "67e26712-013f-4707-95f6-c46a9bdce0ff",
  region = "eu1",
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      type HbsptWindow = { hbspt?: { forms: { create: (cfg: object) => void } } };
      const w = window as unknown as HbsptWindow;
      if (w.hbspt) {
        w.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: "#hubspot-form-container",
        });
      }
    };
    document.head.appendChild(script);
  }, [portalId, formId, region]);

  return (
    <div
      id="hubspot-form-container"
      ref={containerRef}
      className="[&_.hs-form]:space-y-4 [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-bg-border [&_input]:bg-bg-surface [&_input]:px-4 [&_input]:py-3 [&_input]:text-text-primary [&_input]:outline-none [&_input:focus-visible]:border-brand-green [&_input:focus-visible]:ring-2 [&_input:focus-visible]:ring-brand-green [&_input:focus-visible]:ring-offset-1 [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-bg-border [&_select]:bg-bg-surface [&_select]:px-4 [&_select]:py-3 [&_select]:text-text-primary [&_select]:outline-none [&_select:focus-visible]:border-brand-green [&_select:focus-visible]:ring-2 [&_select:focus-visible]:ring-brand-green [&_textarea]:w-full [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-bg-border [&_textarea]:bg-bg-surface [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:text-text-primary [&_textarea]:outline-none [&_textarea:focus-visible]:border-brand-green [&_textarea:focus-visible]:ring-2 [&_textarea:focus-visible]:ring-brand-green [&_label]:label-caps [&_label]:mb-1 [&_label]:block [&_label]:text-text-muted"
    />
  );
}
