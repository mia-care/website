import type { Metadata } from "next";
import { PillTag } from "@/components/common/PillTag";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { FeaturedPost } from "@/components/sections/blog/FeaturedPost";
import { BLOG_CATEGORIES } from "@/data/blog-categories";
import { getAllPosts } from "@/lib/blog";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Blog — Insights on SaMD, Compliance & MedTech | Mia-Care" },
  description:
    "Expert articles on Software as a Medical Device, IEC 62304, EU MDR, AI Act compliance, and modern MedTech engineering from the Mia-Care team.",
  alternates: {
    canonical: "/resources/blog",
    languages: localeAlternates("/resources/blog"),
  },
};

export default function BlogArchivePage() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts.find((p) => p.featured);
  const gridPosts = featuredPost ? allPosts.filter((p) => p.slug !== featuredPost.slug) : allPosts;

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          {featuredPost && <FeaturedPost post={featuredPost} />}
          <BlogGrid posts={gridPosts} categories={BLOG_CATEGORIES} />
        </div>
      </section>
    </>
  );
}
