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