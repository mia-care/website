import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type Locale = "en" | "it";

function successCasesDir(locale: Locale = "en"): string {
  return path.join(
    process.cwd(),
    locale === "it" ? "content/it/success-cases" : "content/success-cases",
  );
}

export type SuccessCaseMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  client?: string;
  industry?: string;
  clientLogo?: string;
  featuredImage?: string;
  metrics?: string[];
  quote?: string;
  quoteAuthor?: string;
  quoteAuthorImage?: string;
};

export type SuccessCasePage = SuccessCaseMeta & {
  contentHtml: string;
};

function getAllSlugs(locale: Locale = "en"): string[] {
  const dir = successCasesDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((name) => fs.statSync(path.join(dir, name)).isDirectory());
}

export function getAllSuccessCases(locale: Locale = "en"): SuccessCaseMeta[] {
  return getAllSlugs(locale)
    .map((slug) => getSuccessCaseMeta(slug, locale))
    .filter((s): s is SuccessCaseMeta => s !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getSuccessCaseMeta(slug: string, locale: Locale = "en"): SuccessCaseMeta | null {
  const indexPath = path.join(successCasesDir(locale), slug, "index.md");
  if (!fs.existsSync(indexPath)) return null;

  const raw = fs.readFileSync(indexPath, "utf8");
  const { data } = matter(raw);

  if (data.published === false) return null;

  return {
    slug,
    title: (data.title as string) ?? "",
    description: (data.description as string) ?? "",
    date: (data.date as string) ?? "",
    client: data.client as string | undefined,
    industry: data.industry as string | undefined,
    clientLogo: data.clientLogo as string | undefined,
    featuredImage: data.featuredImage as string | undefined,
    metrics: data.metrics as string[] | undefined,
    quote: data.quote as string | undefined,
    quoteAuthor: data.quoteAuthor as string | undefined,
    quoteAuthorImage: data.quoteAuthorImage as string | undefined,
  };
}

export async function getSuccessCasePage(
  slug: string,
  locale: Locale = "en",
): Promise<SuccessCasePage | null> {
  const indexPath = path.join(successCasesDir(locale), slug, "index.md");
  if (!fs.existsSync(indexPath)) return null;

  const raw = fs.readFileSync(indexPath, "utf8");
  const { data, content } = matter(raw);

  if (data.published === false) return null;

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    slug,
    title: (data.title as string) ?? "",
    description: (data.description as string) ?? "",
    date: (data.date as string) ?? "",
    client: data.client as string | undefined,
    industry: data.industry as string | undefined,
    clientLogo: data.clientLogo as string | undefined,
    featuredImage: data.featuredImage as string | undefined,
    metrics: data.metrics as string[] | undefined,
    quote: data.quote as string | undefined,
    quoteAuthor: data.quoteAuthor as string | undefined,
    quoteAuthorImage: data.quoteAuthorImage as string | undefined,
    contentHtml: processed.toString(),
  };
}
