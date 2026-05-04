import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const RESOURCES_DIR = path.join(process.cwd(), "content/resources");

export type ResourceType = "whitepaper" | "video" | "guide" | "case-study" | "report";

export type ResourceMeta = {
  slug: string;
  title: string;
  description: string;
  type: ResourceType;
  featuredImage?: string;
  portalId: string;
  formId: string;
  region: string;
};

export type ResourcePage = ResourceMeta & {
  contentHtml: string;
};

export type ThankYouPage = {
  slug: string;
  title: string;
  message: string;
  downloadUrl?: string;
  videoEmbedUrl?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  contentHtml: string;
};

function extractHubSpotIds(snippet: string): { portalId: string; formId: string; region: string } {
  const portalIdMatch = snippet.match(/portalId['":\s]+['"]?(\d+)['"]?/);
  const formIdMatch = snippet.match(/formId['":\s]+['"]?([a-f0-9-]{36})['"]?/);
  const regionMatch = snippet.match(/region['":\s]+['"]?([a-z0-9]+)['"]?/);
  return {
    portalId: portalIdMatch?.[1] ?? "",
    formId: formIdMatch?.[1] ?? "",
    region: regionMatch?.[1] ?? "eu1",
  };
}

function getAllSlugs(): string[] {
  if (!fs.existsSync(RESOURCES_DIR)) return [];
  return fs
    .readdirSync(RESOURCES_DIR)
    .filter(
      (name) => name !== "README.md" && fs.statSync(path.join(RESOURCES_DIR, name)).isDirectory(),
    );
}

function readIndexFrontmatter(slug: string): { data: Record<string, unknown> } | null {
  const indexPath = path.join(RESOURCES_DIR, slug, "index.md");
  if (!fs.existsSync(indexPath)) return null;
  const raw = fs.readFileSync(indexPath, "utf8");
  const { data } = matter(raw);
  return { data };
}

export function getAllResources(): ResourceMeta[] {
  return getAllSlugs()
    .map((slug) => getResourceMeta(slug))
    .filter((r): r is ResourceMeta => r !== null);
}

export function getResourceMeta(slug: string): ResourceMeta | null {
  const result = readIndexFrontmatter(slug);
  if (!result) return null;
  const { data } = result;

  if (data.published === false) return null;

  const { portalId, formId, region } = extractHubSpotIds((data.hubspotEmbed as string) ?? "");

  return {
    slug,
    title: (data.title as string) ?? "",
    description: (data.description as string) ?? "",
    type: (data.type as ResourceType) ?? "whitepaper",
    featuredImage: data.featuredImage as string | undefined,
    portalId,
    formId,
    region,
  };
}

export async function getResourcePage(slug: string): Promise<ResourcePage | null> {
  const indexPath = path.join(RESOURCES_DIR, slug, "index.md");
  if (!fs.existsSync(indexPath)) return null;

  const raw = fs.readFileSync(indexPath, "utf8");
  const { data, content } = matter(raw);

  if (data.published === false) return null;

  const { portalId, formId, region } = extractHubSpotIds((data.hubspotEmbed as string) ?? "");

  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);

  return {
    slug,
    title: (data.title as string) ?? "",
    description: (data.description as string) ?? "",
    type: (data.type as ResourceType) ?? "whitepaper",
    featuredImage: data.featuredImage as string | undefined,
    portalId,
    formId,
    region,
    contentHtml: processed.toString(),
  };
}

export async function getThankYouPage(slug: string): Promise<ThankYouPage | null> {
  const tyPath = path.join(RESOURCES_DIR, slug, "thank-you.md");
  if (!fs.existsSync(tyPath)) return null;

  const raw = fs.readFileSync(tyPath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);

  return {
    slug,
    title: (data.title as string) ?? "Thank you!",
    message: (data.message as string) ?? "",
    downloadUrl: data.downloadUrl as string | undefined,
    videoEmbedUrl: data.videoEmbedUrl as string | undefined,
    ctaLabel: data.ctaLabel as string | undefined,
    ctaUrl: data.ctaUrl as string | undefined,
    contentHtml: processed.toString(),
  };
}
