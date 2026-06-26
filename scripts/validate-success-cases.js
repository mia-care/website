#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const dir = path.join(__dirname, "../content/success-cases");

if (!fs.existsSync(dir)) {
  console.log("⚠️  content/success-cases directory not found — skipping validation.");
  process.exit(0);
}

const entries = fs.readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory());

let hasErrors = false;

for (const entry of entries) {
  const slug = entry.name;
  const indexPath = path.join(dir, slug, "index.md");

  if (!fs.existsSync(indexPath)) {
    console.error(`❌  success-cases/${slug}: missing index.md`);
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error("\nFix the errors above before publishing.");
  process.exit(1);
} else {
  console.log(`✅  All ${entries.length} success cases are valid.`);
}
