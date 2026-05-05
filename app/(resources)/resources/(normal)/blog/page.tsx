import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { PillTag } from "@/components/common/PillTag";
import { BLOG_CATEGORIES } from "@/data/blog-categories";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Insights on SaMD, Compliance & MedTech",
  description:
    "Expert articles on Software as a Medical Device, IEC 62304, EU MDR, AI Act compliance, and modern MedTech engineering from the Mia-Care team.",
};

export default function BlogArchivePage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="py-20" style={{ borderBottom: "1px solid var(--bg-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">Resources</PillTag>
          <h1
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em" }}
          >
            Blog
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
          >
            Insights on SaMD compliance, MedTech engineering, and the regulatory landscape, from the
            team building P4SaMD.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogGrid posts={posts} categories={BLOG_CATEGORIES} />
        </div>
      </section>
    </>
  );
}
