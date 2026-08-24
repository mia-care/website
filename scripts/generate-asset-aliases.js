const fs = require("node:fs");
const path = require("node:path");

// Old WordPress media-library URLs that still get inbound links/crawl requests,
// pointed at the file that now serves the same content. Unlike page redirects
// (generate-redirects.js), a binary asset can't use a meta-refresh HTML page,
// so we place a real copy of the current file at the legacy path instead.
const aliases = JSON.parse(fs.readFileSync(path.join(__dirname, "asset-aliases.json"), "utf-8"));

const OUT_DIR = path.join(__dirname, "../out");

let count = 0;

for (const [legacyPath, currentPath] of Object.entries(aliases)) {
  const source = path.join(OUT_DIR, currentPath);
  const dest = path.join(OUT_DIR, legacyPath);

  if (!fs.existsSync(source)) {
    throw new Error(`asset-aliases.json: source file not found in export: ${currentPath}`);
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(source, dest);
  count++;
}

console.log(`Generated ${count} legacy asset aliases.`);
