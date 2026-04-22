import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="label-caps mb-4 text-brand-green">404</p>
      <h1 className="font-display mb-4 text-4xl font-bold text-text-primary md:text-5xl">
        Page not found.
      </h1>
      <p className="mb-8 text-base text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-6 py-3 text-sm font-semibold text-bg-base transition-opacity hover:opacity-90"
      >
        Back to home →
      </Link>
    </section>
  );
}
