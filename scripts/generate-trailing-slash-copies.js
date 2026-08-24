const fs = require("node:fs");
const path = require("node:path");

const OUT_DIR = path.join(__dirname, "../out");
const SKIP_BASENAMES = new Set(["index.html", "404.html"]);

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

for (const file of htmlFiles) {
  const dir = path.dirname(file);
  const name = path.basename(file, ".html");
  const targetDir = path.join(dir, name);
  const targetFile = path.join(targetDir, "index.html");

  if (fs.existsSync(targetFile)) continue;

  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(file, targetFile);
  count++;
}

console.log(`Generated ${count} trailing-slash copies.`);
