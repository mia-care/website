const fs = require("node:fs");
const path = require("node:path");

const OUT_DIR = path.join(__dirname, "../out");
const SKIP_BASENAMES = new Set(["index.html", "404.html"]);

// Pages whose canonical URL is the trailing-slash form (see servedUrl in
// lib/seo.ts). These are moved rather than copied: with only <path>/index.html
// left, GitHub Pages answers <path> with a 301 to <path>/ instead of serving a
// second 200 copy whose hreflang can't self-reference.
const SLASH_CANONICAL = new Set(["it.html"]);

function walk(dir, files) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith(".html") && !SKIP_BASENAMES.has(entry.name)) {
      files.push(fullPath);
    }
  }
}

const htmlFiles = [];
walk(OUT_DIR, htmlFiles);

let count = 0;
let moved = 0;

for (const file of htmlFiles) {
  const dir = path.dirname(file);
  const name = path.basename(file, ".html");
  const targetDir = path.join(dir, name);
  const targetFile = path.join(targetDir, "index.html");

  if (fs.existsSync(targetFile)) continue;

  fs.mkdirSync(targetDir, { recursive: true });
  if (SLASH_CANONICAL.has(path.relative(OUT_DIR, file))) {
    fs.renameSync(file, targetFile);
    moved++;
  } else {
    fs.copyFileSync(file, targetFile);
    count++;
  }
}

console.log(`Generated ${count} trailing-slash copies, moved ${moved} slash-canonical page(s).`);
