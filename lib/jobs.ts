import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Job } from "@/components/sections/careers/JobAccordion";

const JOBS_DIR = path.join(process.cwd(), "content/jobs");

type JobFrontmatter = {
  title: string;
  type: string;
  location: string;
  summary: string;
  applyEmail: string;
  order?: number;
  published?: boolean;
};

function parseJobBody(content: string): { role: string; sections: Job["sections"] } {
  const parts = content.split(/\n## /);
  const role = parts[0].trim();
  const sections = parts.slice(1).map((part) => {
    const lines = part.split("\n");
    const heading = lines[0].trim();
    const items = lines
      .slice(1)
      .filter((l) => l.trim().startsWith("- "))
      .map((l) => l.replace(/^-\s+/, "").trim());
    return { heading, items };
  });
  return { role, sections };
}

export function getAllJobs(): Job[] {
  if (!fs.existsSync(JOBS_DIR)) return [];

  return fs
    .readdirSync(JOBS_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((filename) => {
      const raw = fs.readFileSync(path.join(JOBS_DIR, filename), "utf8");
      const { data, content } = matter(raw);
      const fm = data as JobFrontmatter;

      if (fm.published === false) return null;

      const { role, sections } = parseJobBody(content);

      return {
        title: fm.title ?? "",
        type: fm.type ?? "",
        location: fm.location ?? "",
        summary: fm.summary ?? "",
        applyEmail: fm.applyEmail ?? "",
        role,
        sections,
        _order: fm.order ?? 999,
      };
    })
    .filter((j): j is NonNullable<typeof j> => j !== null)
    .sort((a, b) => a._order - b._order)
    .map(({ _order: _, ...job }) => job as Job);
}
