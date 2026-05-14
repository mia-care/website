# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Ask if you have doubts
When uncertain about intent, scope, or approach, ask a clarifying question before proceeding. Do not assume.

# Content pages: extra checks
When adding or updating a page in blog, resources, or jobs, run these checks before finishing:
- All required frontmatter/data fields are present and non-empty (title, date, slug, description, etc.)
- Internal links and referenced images/files actually exist in the repo
- The new entry appears correctly in the related listing page (index/feed)
- No duplicate slugs conflict with existing entries
- Ask if should be indexed or not indexed

# New static pages: sitemap is mandatory
When adding a new static page (`page.tsx` without dynamic segments):
- If the page should be indexed: add it to `PAGE_DATES` and the `staticPages` array in `app/sitemap.ts`
- If the page should NOT be indexed (redirects, gated, internal): add `export const metadata: Metadata = { robots: { index: false, follow: false } }` to the file
- Run `npm run validate:sitemap` to verify — it will fail if a static page is missing from both sitemap.ts and a noindex declaration

# Resources: thank-you.md is mandatory
Every resource folder in `content/resources/[slug]/` MUST contain both `index.md` and `thank-you.md` before the resource is published. Run `npm run validate:resources` to verify.
- Ask if should be indexed or not indexed

# Website copy guidelines
Avoid em dashes. Write in a natural, human tone — steer clear of patterns that sound AI-generated.