#!/usr/bin/env node
// Checks that every link/button on the built site points somewhere real, and that
// scripts/redirects.json never loops back on itself.
//
// - Internal links (page or asset) missing from the static export → blocking failure.
// - Redirect loops / redirects pointing nowhere → blocking failure.
// - Corrupt PDFs in the static export → blocking failure.
// - External links returning an error → warning only (third-party sites are out of our control).
//
// Requires a static export in ../out (run `npm run build` first).
// Run: npm run validate:links

const fs = require("node:fs");
const path = require("node:path");
const cheerio = require("cheerio");

const OUT_DIR = path.join(__dirname, "../out");
const REDIRECTS_PATH = path.join(__dirname, "redirects.json");
const SITE_HOSTS = new Set(["mia-care.io", "www.mia-care.io"]);
const INTERNAL_BASE_HOST = "__internal__";
const EXTERNAL_TIMEOUT_MS = 10_000;
const EXTERNAL_CONCURRENCY = 8;
const EXTERNAL_USER_AGENT =
  "Mozilla/5.0 (compatible; mia-care-link-checker/1.0; +https://mia-care.io)";

if (!fs.existsSync(OUT_DIR)) {
  console.error("❌  out/ not found. Run `npm run build` before `npm run validate:links`.");
  process.exit(1);
}

// ---------- Collect every real file the export produced ----------

function collectFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(full, results);
    } else {
      results.push(full);
    }
  }
  return results;
}

function normalizePath(pathname) {
  const decoded = decodeURIComponent(pathname);
  if (decoded.length > 1 && decoded.endsWith("/")) return decoded.slice(0, -1);
  return decoded === "" ? "/" : decoded;
}

const allFiles = collectFiles(OUT_DIR);
const validPaths = new Set();
const htmlFiles = [];

for (const file of allFiles) {
  const rel = `/${path.relative(OUT_DIR, file).replace(/\\/g, "/")}`;
  validPaths.add(normalizePath(rel)); // raw asset (image, pdf, txt, ...)
  if (file.endsWith(".html")) {
    htmlFiles.push(file);
    const route = rel.replace(/\.html$/, "").replace(/\/index$/, "") || "/";
    validPaths.add(normalizePath(route));
  }
}

// ---------- PDF integrity check ----------

const PDF_HEADER = "%PDF-";
const EOF_SCAN_WINDOW_BYTES = 1024; // %%EOF is expected near the end of a well-formed PDF

function isCorruptPdf(buffer) {
  if (buffer.length < PDF_HEADER.length) return true;
  if (!buffer.subarray(0, PDF_HEADER.length).toString("latin1").startsWith(PDF_HEADER)) {
    return true;
  }
  const tail = buffer
    .subarray(Math.max(0, buffer.length - EOF_SCAN_WINDOW_BYTES))
    .toString("latin1");
  return !tail.includes("%%EOF");
}

const corruptPdfs = [];
for (const file of allFiles) {
  if (!file.endsWith(".pdf")) continue;
  if (isCorruptPdf(fs.readFileSync(file))) {
    corruptPdfs.push(`/${path.relative(OUT_DIR, file).replace(/\\/g, "/")}`);
  }
}

// ---------- Resolve an href found on a page ----------

function resolveHref(href, sourceRoute) {
  try {
    return new URL(href, `http://${INTERNAL_BASE_HOST}${sourceRoute}`);
  } catch {
    return null;
  }
}

function isInternalHost(hostname) {
  return hostname === INTERNAL_BASE_HOST || SITE_HOSTS.has(hostname);
}

// ---------- Walk every page and classify its links ----------

const brokenInternal = []; // { source, href }
const externalLinks = new Map(); // absolute URL -> [{ source, href }]

for (const file of htmlFiles) {
  const sourceRoute = normalizePath(
    "/" +
      path
        .relative(OUT_DIR, file)
        .replace(/\\/g, "/")
        .replace(/\.html$/, "")
        .replace(/\/index$/, ""),
  );
  const html = fs.readFileSync(file, "utf8");
  const $ = cheerio.load(html);

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href").trim();
    if (
      href === "" ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:")
    ) {
      return;
    }

    const resolved = resolveHref(href, sourceRoute);
    if (!resolved) {
      brokenInternal.push({ source: sourceRoute, href, reason: "malformed URL" });
      return;
    }

    if (isInternalHost(resolved.hostname)) {
      const target = normalizePath(resolved.pathname);
      if (!validPaths.has(target)) {
        brokenInternal.push({ source: sourceRoute, href, reason: `no page/file at ${target}` });
      }
    } else {
      const key = resolved.href;
      if (!externalLinks.has(key)) externalLinks.set(key, []);
      externalLinks.get(key).push({ source: sourceRoute, href });
    }
  });
}

// ---------- Redirect graph: loop detection + dangling targets ----------

const redirects = JSON.parse(fs.readFileSync(REDIRECTS_PATH, "utf8"));
const redirectEdges = new Map(); // exact source pathname -> { to, toKey, toIsExternal }

// Graph node identity uses the *exact* pathname (trailing slash preserved), matching how
// generate-redirects.js keys its output directories. Do NOT strip trailing slashes here:
// "/product/" (a redirect source) and "/product" (its real target page) must stay distinct
// nodes, or every redirect-to-canonical-URL would look like a self-loop.
for (const [from, to] of Object.entries(redirects)) {
  const fromKey = new URL(from, `http://${INTERNAL_BASE_HOST}`).pathname;
  const toResolved = new URL(to, `http://${INTERNAL_BASE_HOST}`);
  const toIsExternal = !isInternalHost(toResolved.hostname);
  const toKey = toIsExternal ? null : toResolved.pathname;
  redirectEdges.set(fromKey, { to, toKey, toIsExternal });
}

const redirectCycles = [];
const visiting = new Set();
const visited = new Set();

function dfs(node, chain) {
  if (visiting.has(node)) {
    const start = chain.indexOf(node);
    redirectCycles.push([...chain.slice(start), node]);
    return;
  }
  if (visited.has(node)) return;
  visiting.add(node);
  const edge = redirectEdges.get(node);
  if (edge && !edge.toIsExternal && redirectEdges.has(edge.toKey)) {
    dfs(edge.toKey, [...chain, node]);
  }
  visiting.delete(node);
  visited.add(node);
}

for (const node of redirectEdges.keys()) dfs(node, []);

const danglingRedirects = [];
for (const [from, edge] of redirectEdges.entries()) {
  if (edge.toIsExternal) continue;
  const targetExists = validPaths.has(normalizePath(edge.toKey)) || redirectEdges.has(edge.toKey);
  if (!targetExists) {
    danglingRedirects.push({ from, to: edge.to });
  }
}

// ---------- External link check (warning only) ----------

async function checkExternalUrl(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), EXTERNAL_TIMEOUT_MS);
      const res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "User-Agent": EXTERNAL_USER_AGENT },
      });
      clearTimeout(timeout);
      if (res.status === 403 || res.status === 429) {
        return { status: "unverified", code: res.status };
      }
      if (res.status >= 400) {
        return { status: "broken", code: res.status };
      }
      return { status: "ok" };
    } catch (err) {
      if (attempt === 1) {
        return { status: "broken", code: err.name === "AbortError" ? "timeout" : err.message };
      }
    }
  }
  return { status: "broken", code: "unknown" };
}

async function checkExternalLinks(urls) {
  const results = new Map();
  let cursor = 0;
  async function worker() {
    while (cursor < urls.length) {
      const url = urls[cursor++];
      results.set(url, await checkExternalUrl(url));
    }
  }
  await Promise.all(Array.from({ length: Math.min(EXTERNAL_CONCURRENCY, urls.length) }, worker));
  return results;
}

// ---------- Report ----------

async function main() {
  const externalUrls = [...externalLinks.keys()];
  const externalResults = await checkExternalLinks(externalUrls);

  const brokenExternal = [];
  const unverifiedExternal = [];
  for (const [url, result] of externalResults) {
    if (result.status === "broken") {
      brokenExternal.push({ url, code: result.code, occurrences: externalLinks.get(url) });
    } else if (result.status === "unverified") {
      unverifiedExternal.push({ url, code: result.code, occurrences: externalLinks.get(url) });
    }
  }

  let hasBlockingErrors = false;

  if (brokenInternal.length > 0) {
    hasBlockingErrors = true;
    console.error(`❌  ${brokenInternal.length} broken internal link(s):\n`);
    for (const { source, href, reason } of brokenInternal) {
      console.error(`   ${source}  →  ${href}  (${reason})`);
    }
    console.error("");
  }

  if (redirectCycles.length > 0) {
    hasBlockingErrors = true;
    console.error(`❌  ${redirectCycles.length} redirect loop(s) in scripts/redirects.json:\n`);
    for (const cycle of redirectCycles) {
      console.error(`   ${cycle.join("  →  ")}`);
    }
    console.error("");
  }

  if (danglingRedirects.length > 0) {
    hasBlockingErrors = true;
    console.error(
      `❌  ${danglingRedirects.length} redirect(s) pointing to a page that doesn't exist:\n`,
    );
    for (const { from, to } of danglingRedirects) {
      console.error(`   ${from}  →  ${to}`);
    }
    console.error("");
  }

  if (corruptPdfs.length > 0) {
    hasBlockingErrors = true;
    console.error(`❌  ${corruptPdfs.length} corrupt PDF(s):\n`);
    for (const pdf of corruptPdfs) {
      console.error(`   ${pdf}`);
    }
    console.error("");
  }

  if (brokenExternal.length > 0) {
    console.warn(
      `⚠️   ${brokenExternal.length} external link(s) returned an error (non-blocking):\n`,
    );
    for (const { url, code, occurrences } of brokenExternal) {
      console.warn(`   ${url}  (${code})`);
      for (const { source } of occurrences) console.warn(`      ← ${source}`);
    }
    console.warn("");
  }

  if (unverifiedExternal.length > 0) {
    console.warn(
      `⚠️   ${unverifiedExternal.length} external link(s) could not be verified (blocked bots, non-blocking):\n`,
    );
    for (const { url, code } of unverifiedExternal) {
      console.warn(`   ${url}  (${code})`);
    }
    console.warn("");
  }

  if (!hasBlockingErrors) {
    console.log(
      `✅  All internal links/buttons resolve, scripts/redirects.json has no loops or dangling targets, and all PDFs are intact.`,
    );
  }

  process.exit(hasBlockingErrors ? 1 : 0);
}

main();
