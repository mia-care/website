#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const resourcesDir = path.join(__dirname, "../content/resources");

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
    console.error(`❌  resources/${slug}: missing ${missingFiles.join(", ")}`);
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error("\nFix the errors above before publishing.");
  process.exit(1);
} else {
  console.log(`✅  All ${entries.length} resources are valid.`);
}
