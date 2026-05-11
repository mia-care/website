#!/usr/bin/env node
// Checks that every static, indexable page.tsx has a corresponding entry in sitemap.ts.
// Dynamic routes ([slug]) are skipped — they are handled programmatically in sitemap.ts.
// Pages with `robots: { index: false }` or `noIndex: true` are excluded.
// Run: npm run validate:sitemap

const fs = require("node:fs");
const path = require("node:path");

const appDir = path.join(__dirname, "../app");
const sitemapPath = path.join(__dirname, "../app/sitemap.ts");
const sitemapSource = fs.readFileSync(sitemapPath, "utf8");

function findPageFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findPageFiles(full, results);
    } else if (entry.name === "page.tsx") {
      results.push(full);
    }
  }
  return results;
}

function filePathToRoute(filePath) {
  const rel = path.relative(appDir, filePath);
  // Strip trailing /page.tsx
  const withoutSuffix = rel.replace(/\/page\.tsx$/, "").replace(/^page\.tsx$/, "");
  // Split into segments, remove route groups like (company), (normal), etc.
  const segments = withoutSuffix.split("/").filter((seg) => !/^\([^)]+\)$/.test(seg));
  const route = segments.join("/");
  return route ? `/${route}` : "/";
}

function isDynamic(route) {
  return route.includes("[");
}

function isNoIndex(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return (
    /robots\s*:\s*\{[^}]*index\s*:\s*false/.test(content) || /noIndex\s*:\s*true/.test(content)
  );
}

function isInSitemap(route) {
  // Check for the literal path in the sitemap source, either as a string or template literal
  const escaped = route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Matches: "/plans" or `${BASE}/plans` or BASE + "/plans"
  return (
    new RegExp(`["'\`]${escaped}["'\`]`).test(sitemapSource) ||
    new RegExp(`\\$\\{BASE\\}${escaped}`).test(sitemapSource)
  );
}

const pages = findPageFiles(appDir);
const missing = [];

for (const filePath of pages) {
  const route = filePathToRoute(filePath);
  if (isDynamic(route)) continue;
  if (isNoIndex(filePath)) continue;
  if (!isInSitemap(route)) {
    missing.push({ route, file: path.relative(path.join(__dirname, ".."), filePath) });
  }
}

if (missing.length > 0) {
  console.error("❌  The following pages are missing from sitemap.ts:\n");
  for (const { route, file } of missing) {
    console.error(`   ${route.padEnd(40)} ← ${file}`);
  }
  console.error("\nAdd them to sitemap.ts or mark them noindex with: robots: { index: false }");
  process.exit(1);
} else {
  console.log(`✅  All static indexable pages are covered by sitemap.ts.`);
}
