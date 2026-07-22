import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { assetPath } from "./asset";

const HTML_ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&nbsp;": " ",
};

function decodeEntities(str: string): string {
  return str
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&[a-z]+;/gi, (entity) => HTML_ENTITIES[entity] ?? entity);
}

export type Locale = "en" | "it";

function contentDir(locale: Locale = "en"): string {
  return path.join(process.cwd(), locale === "it" ? "content/it/blog" : "content/blog");
}

function deriveExcerpt(frontmatterExcerpt: string, content: string): string {
  const isTruncated =
    frontmatterExcerpt.trimEnd().endsWith("…") || frontmatterExcerpt.trimEnd().endsWith("...");
  if (!isTruncated && frontmatterExcerpt.trim()) return frontmatterExcerpt;

  // Find first non-empty paragraph that isn't a heading, HR, or HTML tag
  const paragraphs = content.split(/\n\n+/);
  for (const raw of paragraphs) {
    const line = raw.trim();
    if (!line) continue;
    if (/^(#{1,6}\s|---|===|\*{3,}|_{3,}|<)/.test(line)) continue;
    // Strip inline markdown: links, bold, italic, code, images
    const clean = line
      .replace(/!\[.*?\]\(.*?\)/g, "")
      .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
      .replace(/`{1,3}[^`]+`{1,3}/g, "")
      .replace(/\*{1,3}([^*]+)\*{1,3}/g, "$1")
      .replace(/_{1,3}([^_]+)_{1,3}/g, "$1")
      .replace(/\n/g, " ")
      .trim();
    if (clean.length > 40) return clean;
  }

  return frontmatterExcerpt;
}

export type PostMeta = {
  title: string;
  slug: string;
  description: string;
  seoTitle?: string;
  date: string;
  modified?: string;
  author: string;
  categories: string[];
  featuredImage: string;
  featuredImageAlt: string;
  excerpt: string;
  readingTime: string;
  featured?: boolean;
};

export type Post = PostMeta & {
  content: string;
  contentHtml: string;
  headings: Heading[];
  faqs: Faq[];
};

export type Faq = { q: string; a: string };

export type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function getAllPostSlugs(locale: Locale = "en"): string[] {
  const dir = contentDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(locale: Locale = "en"): PostMeta[] {
  return getAllPostSlugs(locale)
    .map((slug) => getPostMeta(slug, locale))
    .filter(Boolean)
    .sort((a, b) => (a!.date < b!.date ? 1 : -1)) as PostMeta[];
}

export function getPostMeta(slug: string, locale: Locale = "en"): PostMeta | null {
  const fullPath = path.join(contentDir(locale), `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    title: decodeEntities(data.title ?? ""),
    slug: data.slug ?? slug,
    description: decodeEntities(data.description ?? ""),
    seoTitle: data.seoTitle ? decodeEntities(data.seoTitle) : undefined,
    date: data.date ?? "",
    modified: data.modified,
    author: data.author ?? "mia-care",
    categories: data.categories ?? [],
    featuredImage: data.featuredImage ?? "",
    featuredImageAlt: decodeEntities(data.featuredImageAlt ?? ""),
    excerpt: deriveExcerpt(decodeEntities(data.excerpt ?? ""), content),
    readingTime: stats.text,
    featured: data.featured ?? false,
  };
}

export async function getPost(slug: string, locale: Locale = "en"): Promise<Post | null> {
  const fullPath = path.join(contentDir(locale), `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);
  const contentHtml = processed
    .toString()
    .replace(/src="(\/[^"]*)"/g, (_, p) => `src="${assetPath(p)}"`)
    .replace(/<img /g, '<img loading="lazy" ');
  const headings = extractHeadings(content);
  const faqs = extractFaqs(content);

  return {
    title: decodeEntities(data.title ?? ""),
    slug: data.slug ?? slug,
    description: decodeEntities(data.description ?? ""),
    seoTitle: data.seoTitle ? decodeEntities(data.seoTitle) : undefined,
    date: data.date ?? "",
    modified: data.modified,
    author: data.author ?? "mia-care",
    categories: data.categories ?? [],
    featuredImage: data.featuredImage ?? "",
    featuredImageAlt: decodeEntities(data.featuredImageAlt ?? ""),
    excerpt: deriveExcerpt(decodeEntities(data.excerpt ?? ""), content),
    readingTime: stats.text,
    content,
    contentHtml,
    headings,
    faqs,
  };
}

export function getRelatedPosts(
  slug: string,
  categories: string[],
  limit = 3,
  locale: Locale = "en",
): PostMeta[] {
  return getAllPosts(locale)
    .filter((p) => p.slug !== slug && p.categories.some((c) => categories.includes(c)))
    .slice(0, limit);
}

// Resolves a public URL slug (frontmatter `slug`, may differ from the pairing-key
// filename — see "Localized slug" in CONTEXT.md) to its post, for a given locale.
export async function getPostBySlug(
  publicSlug: string,
  locale: Locale = "en",
): Promise<Post | null> {
  const pairingKey = getAllPostSlugs(locale).find((filename) => {
    const meta = getPostMeta(filename, locale);
    return meta?.slug === publicSlug;
  });
  return pairingKey ? getPost(pairingKey, locale) : null;
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/__(.+?)__/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .trim();
}

function extractHeadings(markdown: string): Heading[] {
  const lines = markdown.split("\n");
  const headings: Heading[] = [];
  for (const line of lines) {
    const h2 = line.match(/^## (.+)/);
    const h3 = line.match(/^### (.+)/);
    if (h2) {
      const text = stripInlineMarkdown(h2[1].trim());
      headings.push({ id: slugifyHeading(text), text, level: 2 });
    } else if (h3) {
      const text = stripInlineMarkdown(h3[1].trim());
      headings.push({ id: slugifyHeading(text), text, level: 3 });
    }
  }
  return headings;
}

// Extracts Q&A pairs from posts structured as "### N. **Question?**" followed by
// the answer paragraph(s) — the pattern used by FAQ-style guides (e.g. IEC 62304).
// Posts without this pattern simply yield an empty array.
function extractFaqs(markdown: string): Faq[] {
  const lines = markdown.split("\n");
  const faqs: Faq[] = [];
  let current: { q: string; answerLines: string[] } | null = null;

  const flush = () => {
    if (current) {
      const answer = stripInlineMarkdown(current.answerLines.join(" ").replace(/\s+/g, " ").trim());
      if (current.q && answer) faqs.push({ q: current.q, a: answer });
    }
    current = null;
  };

  for (const line of lines) {
    const question = line.match(/^### \d+\.\s+\*\*(.+?)\*\*\s*$/);
    if (question) {
      flush();
      current = { q: stripInlineMarkdown(question[1].trim()), answerLines: [] };
    } else if (/^#{1,6}\s/.test(line)) {
      flush();
    } else if (current) {
      current.answerLines.push(line.trim());
    }
  }
  flush();
  return faqs;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export { formatDate } from "./format";
