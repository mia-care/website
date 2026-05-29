# Certification Documents

PDF certificates displayed on the [/certifications](https://www.mia-care.io/certifications) page live here.

## Why this folder

`/public/downloads/` is excluded from search engine indexing via the `Disallow: /downloads/` rule in `public/robots.txt`. This prevents PDFs from appearing in Google results as standalone documents while still making them accessible via direct link.

Do **not** move files to `/public/certifications/` — that path is listed in `.gitignore` because Next.js writes static export output there.

## Adding or updating a certificate

1. Drop the PDF here with a descriptive filename (e.g. `Certificate XXXXXX - MIA CARE S.R.L - ISOXXXXX.pdf`)
2. Update the `pdf` field of the matching entry in `app/(company)/certifications/page.tsx`
3. For the UNI/PdR 125 Gender Equality certificate, update the `href` in the dedicated section at the bottom of the same file
