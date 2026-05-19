const fs = require("node:fs");
const path = require("node:path");

const redirects = JSON.parse(fs.readFileSync(path.join(__dirname, "redirects.json"), "utf-8"));

const BASE_URL = "https://www.mia-care.io";

function buildRedirectHtml(destination) {
  const dest = destination.replace(/\/$/, "");
  const destUrl = dest.startsWith("http") ? dest : `${BASE_URL}${dest}`;
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0; url=${destUrl}">
  <link rel="canonical" href="${destUrl}">
</head>
<body>
  <p>This page has moved. <a href="${destUrl}">Click here</a> if you are not redirected automatically.</p>
</body>
</html>`;
}

let count = 0;

for (const [from, to] of Object.entries(redirects)) {
  const fromPath = from.endsWith("/") ? from : `${from}/`;
  const dir = path.join(__dirname, "../public", fromPath);

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), buildRedirectHtml(to));
  count++;
}

console.log(`Generated ${count} redirect pages.`);
