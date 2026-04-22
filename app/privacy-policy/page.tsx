import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Page() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="font-display mb-4 text-4xl font-bold text-text-primary">Privacy Policy</h1>
      <p className="text-base text-text-secondary">This page is coming soon.</p>
    </section>
  );
}
