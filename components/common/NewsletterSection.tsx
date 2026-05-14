"use client";

import { useState } from "react";

const PORTAL_ID = "5308597";
const FORM_ID = "f5443532-3e6a-4079-b988-2e4df2f77163";

async function submitToHubSpot(email: string, pageUri: string): Promise<void> {
  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [{ name: "email", value: email }],
        context: { pageUri },
      }),
    },
  );
  if (!res.ok) throw new Error("Submission failed");
}

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await submitToHubSpot(email, window.location.href);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className="rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center gap-8"
        style={{
          background: "var(--bg-raised)",
          border: "1px solid var(--bg-border)",
        }}
      >
        {/* Copy */}
        <div className="flex-1 min-w-0">
          <p
            className="font-display font-bold text-lg mb-1"
            style={{ color: "var(--text-primary)" }}
          >
            Stay in the loop
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Product updates, new resources, and insights on building certified medical software.
          </p>
        </div>

        {/* Form */}
        <div className="w-full sm:w-auto sm:min-w-[360px]">
          {status === "success" ? (
            <div
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium"
              style={{
                background: "rgba(0,240,150,0.08)",
                border: "1px solid rgba(0,240,150,0.25)",
                color: "var(--brand-green)",
              }}
            >
              <span aria-hidden="true">✓</span>
              Thanks — you're on the list.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--bg-border-strong)",
                  color: "var(--text-primary)",
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px disabled:opacity-60"
                style={{
                  background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
                  color: "#0b0c10",
                }}
              >
                {status === "loading" ? "…" : "Subscribe"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
              Something went wrong — try again or email us directly.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
