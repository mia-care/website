#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

function validateDir(label, dir) {
  if (!fs.existsSync(dir)) return { count: 0, hasErrors: false };

  const entries = fs.readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory());

  let hasErrors = false;

  for (const entry of entries) {
    const slug = entry.name;
    const indexPath = path.join(dir, slug, "index.md");

    if (!fs.existsSync(indexPath)) {
      console.error(`❌  ${label}/${slug}: missing index.md`);
      hasErrors = true;
    }
  }

  return { count: entries.length, hasErrors };
}

const en = validateDir("success-cases", path.join(__dirname, "../content/success-cases"));
const it = validateDir("it/success-cases", path.join(__dirname, "../content/it/success-cases"));

if (en.hasErrors || it.hasErrors) {
  console.error("\nFix the errors above before publishing.");
  process.exit(1);
} else {
  console.log(
    `✅  All ${en.count} success cases are valid (${it.count} with an Italian translation).`,
  );
}
