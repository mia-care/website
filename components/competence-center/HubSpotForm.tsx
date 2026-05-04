"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/asset";

type Props = {
  portalId: string;
  formId: string;
  region?: string;
  redirectUrl?: string;
  fileUrl?: string;
  videoEmbedUrl?: string;
};

export function HubSpotForm({
  portalId,
  formId,
  region = "eu1",
  redirectUrl,
  fileUrl,
  videoEmbedUrl,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const scriptId = "hs-forms-script";

    function createForm() {
      if (!containerRef.current) return;
      (window as unknown as Record<string, unknown>).hbspt &&
        (
          (window as unknown as Record<string, unknown>).hbspt as {
            forms: { create: (opts: object) => void };
          }
        ).forms.create({
          region,
          portalId,
          formId,
          target: "#hs-form-container",
          onFormSubmitted: () => {
            if (redirectUrl) {
              window.location.href = redirectUrl;
            } else {
              setSubmitted(true);
            }
          },
        });
    }

    if (document.getElementById(scriptId)) {
      createForm();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = createForm;
    document.head.appendChild(script);
  }, [portalId, formId, region, redirectUrl]);

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 text-center space-y-6"
        style={{ background: "rgba(0,240,150,0.05)", border: "1px solid rgba(0,240,150,0.2)" }}
      >
        <div
          className="mx-auto flex items-center justify-center w-14 h-14 rounded-full text-2xl"
          style={{ background: "rgba(0,240,150,0.12)", border: "1px solid rgba(0,240,150,0.25)" }}
        >
          ✓
        </div>
        <div>
          <p
            className="font-display font-bold text-xl mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Thank you!
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Your access has been confirmed. You can now download the resource below.
          </p>
        </div>

        {fileUrl && (
          <a
            href={assetPath(fileUrl)}
            download
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
            style={{
              background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
              color: "#0b0c10",
            }}
          >
            Download PDF ↓
          </a>
        )}

        {videoEmbedUrl && (
          <div className="mt-6 aspect-video w-full rounded-xl overflow-hidden">
            <iframe
              src={videoEmbedUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Video"
            />
          </div>
        )}

        {!fileUrl && !videoEmbedUrl && (
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            You will receive the resource in your inbox shortly.
          </p>
        )}
      </div>
    );
  }

  return <div id="hs-form-container" ref={containerRef} className="hs-form-wrapper" />;
}
