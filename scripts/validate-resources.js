#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

function validateDir(label, resourcesDir) {
  if (!fs.existsSync(resourcesDir)) return { count: 0, hasErrors: false };

  const entries = fs
    .readdirSync(resourcesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  let hasErrors = false;

  for (const entry of entries) {
    const slug = entry.name;
    const folder = path.join(resourcesDir, slug);

    const missingFiles = ["index.md", "thank-you.md"].filter(
      (f) => !fs.existsSync(path.join(folder, f)),
    );

    if (missingFiles.length > 0) {
      console.error(`❌  ${label}/${slug}: missing ${missingFiles.join(", ")}`);
      hasErrors = true;
    }
  }

  return { count: entries.length, hasErrors };
}

const en = validateDir("resources", path.join(__dirname, "../content/resources"));
const it = validateDir("it/resources", path.join(__dirname, "../content/it/resources"));

if (en.hasErrors || it.hasErrors) {
  console.error("\nFix the errors above before publishing.");
  process.exit(1);
} else {
  console.log(`✅  All ${en.count} resources are valid (${it.count} with an Italian translation).`);
}
