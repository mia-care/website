#!/usr/bin/env python3
"""
WordPress → Markdown migration script for mia-care.io blog.

Usage:
    python scripts/migrate.py

Requirements:
    pip install requests markdownify Pillow python-slugify

Output:
    - content/blog/{slug}.md       — Markdown files with frontmatter
    - public/blog/images/{slug}.webp  — Featured images (WebP)
    - public/blog/images/{slug}-{n}.webp  — Inline images (WebP)
    - scripts/redirects.json       — Map of old URL → new URL
"""

import html
import json
import os
import re
import sys
import textwrap
import time
from pathlib import Path
from typing import Optional
from urllib.parse import urlparse

import requests
from markdownify import markdownify as md
from PIL import Image
from io import BytesIO
from slugify import slugify

# ─── Configuration ────────────────────────────────────────────────────────────

WP_BASE = "https://mia-care.io/wp-json/wp/v2"
NEW_BASE = "https://www.mia-care.io/resources/blog"
AUTHOR_SLUG = "mia-care"

CONTENT_DIR = Path("content/blog")
IMAGES_DIR = Path("public/blog/images")
REDIRECTS_FILE = Path("scripts/redirects.json")

CONTENT_DIR.mkdir(parents=True, exist_ok=True)
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# Category ID → slug map (fetched from WP API)
WP_CATEGORY_MAP: dict[int, str] = {}

# ─── Slugs to migrate ─────────────────────────────────────────────────────────
# Add all your slugs here:

SLUGS = [
    "brownfield-assessment-remediation",
    "iec-62304-a-comprehensive-faq-guide",
    "top-5-upcoming-trends-2026-digital-health",
    "the-compliance-tax-in-samd-development",
    "how-to-speed-up-samd-development-with-compliance",
    "enabling-telehealth-platforms-with-cloud-native-technology",
    "the-ultimate-guide-building-a-scalable-telemedicine-app-with-microservices-architecture",
    "enhance-data-capture-with-structured-information-enabling-fhir-questionnaires",
    "the-role-of-artificial-intelligence-in-improving-care-quality",
    "5-remarkable-benefits-of-remote-patient-monitoring",
    "top-tech-predictions-in-healthcare-for-2024",
    "from-classification-to-compliance-a-comprehensive-guide-for-samd-development",
    "embracing-the-digital-transformation-with-composable-architectures-and-digital-health-platforms",
    "third-party-administrator-how-does-tpa-digitalize-health-operations-in-insurance",
    "cot-the-operational-exellence-for-italian-health-system",
    "5-questions-about-fhir-the-new-health-data-interoperability-standard",
    "crud-encryption-protect-the-sharing-of-sensitive-data-in-healthcare",
    "why-life-science-companies-need-a-digital-platform-now",
    "digitalize-your-patient-journey-by-leveraging-a-composable-software-suite",
    "key-insights-from-digital-innovation-observatories-congress-on-life-science",
    "the-power-of-saga-pattern-to-digitalize-healthcare-operations",
    "the-value-of-composable-technology-in-healthcare-watch-the-video",
    "the-rise-of-healthcare-digital-platforms",
    "the-power-of-saga-pattern-to-digitalize-healthcare-operations-2",
]

# ─── Helpers ──────────────────────────────────────────────────────────────────

def fetch_json(url: str, params: Optional[dict] = None) -> Optional[object]:
    try:
        r = requests.get(url, params=params, timeout=30)
        r.raise_for_status()
        return r.json()
    except Exception as e:
        print(f"  ERROR fetching {url}: {e}", file=sys.stderr)
        return None


def download_image(url: str, dest: Path) -> bool:
    """Download an image, convert to WebP (or keep SVG as-is), save to dest."""
    try:
        clean_url = re.sub(r"\?.*$", "", url)
        clean_url = re.sub(r"https://i\d+\.wp\.com/", "https://", clean_url)

        r = requests.get(clean_url, timeout=30)
        r.raise_for_status()

        dest.parent.mkdir(parents=True, exist_ok=True)

        # SVGs cannot be processed by Pillow — save as-is
        if clean_url.lower().endswith(".svg") or r.headers.get("content-type", "").startswith("image/svg"):
            svg_dest = dest.with_suffix(".svg")
            svg_dest.write_bytes(r.content)
            return True

        img = Image.open(BytesIO(r.content))
        img = img.convert("RGB")
        img.save(dest, "WEBP", quality=85, method=6)
        return True
    except Exception as e:
        print(f"  WARNING: could not download image {url}: {e}", file=sys.stderr)
        return False


def load_category_map() -> None:
    """Populate WP_CATEGORY_MAP from the API."""
    data = fetch_json(f"{WP_BASE}/categories", params={"per_page": 100})
    if not data:
        return
    for cat in data:
        WP_CATEGORY_MAP[cat["id"]] = cat["slug"]


def clean_html(html: str) -> str:
    """Strip Gutenberg-specific attributes and lightbox buttons before converting."""
    # Remove WordPress interactive block attributes
    html = re.sub(r'\s+data-wp-[^\s>]*="[^"]*"', "", html)
    html = re.sub(r'\s+data-recalc-dims="[^"]*"', "", html)
    # Remove lightbox trigger buttons
    html = re.sub(r"<button[^>]*class=\"lightbox-trigger\"[^>]*>.*?</button>", "", html, flags=re.DOTALL)
    # Remove empty paragraphs
    html = re.sub(r"<p[^>]*>\s*</p>", "", html)
    # Remove wp-block-separator (keep as <hr>)
    html = re.sub(r'<hr[^>]*class="wp-block-separator[^"]*"[^>]*/>', "\n---\n", html)
    return html


def html_to_markdown(html: str) -> str:
    cleaned = clean_html(html)
    result = md(
        cleaned,
        heading_style="ATX",
        bullets="-",
        strip=["figure", "button"],
    )
    # Collapse 3+ blank lines to 2
    result = re.sub(r"\n{3,}", "\n\n", result)
    return result.strip()


def process_inline_images(markdown: str, post_slug: str) -> tuple[str, list[str]]:
    """
    Find all image URLs in markdown, download them, replace with local paths.
    Returns updated markdown and list of downloaded paths.
    """
    downloaded: list[str] = []
    counter = [0]

    def replace_image(match: re.Match) -> str:
        alt = match.group(1)
        url = match.group(2)
        if not url.startswith("http"):
            return match.group(0)

        counter[0] += 1
        ext = Path(urlparse(url).path).suffix or ".webp"
        filename = f"{post_slug}-{counter[0]}.webp"
        dest = IMAGES_DIR / filename
        local_path = f"/blog/images/{filename}"

        if download_image(url, dest):
            downloaded.append(local_path)
            return f"![{alt}]({local_path})"
        return match.group(0)

    updated = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", replace_image, markdown)
    return updated, downloaded


def build_frontmatter(post: dict, category_slugs: list[str], featured_image_path: str, excerpt_text: str) -> str:
    title = post["title"]["rendered"]
    # Decode HTML entities
    title = title.replace("&amp;", "&").replace("&#8217;", "'").replace("&hellip;", "…")

    slug = post["slug"]
    date = post["date"][:10]
    modified = post["modified"][:10]

    # SEO title: max 60 chars
    seo_title = title if len(title) <= 60 else title[:57] + "…"

    # Description from Yoast if available, else truncate excerpt
    raw_excerpt = html.unescape(excerpt_text.strip())
    description = raw_excerpt[:155] if raw_excerpt else title[:155]

    # Clean excerpt for display (remove HTML, decode entities)
    clean_excerpt = re.sub(r"<[^>]+>", "", post["excerpt"]["rendered"]).strip()
    clean_excerpt = html.unescape(clean_excerpt)
    clean_excerpt = clean_excerpt[:200] if len(clean_excerpt) > 200 else clean_excerpt

    fm_categories = json.dumps(category_slugs)

    # Pre-escape quotes for YAML values (no backslash in f-string expressions)
    t = title.replace('"', '\\"')
    d = description.replace('"', '\\"')
    s = seo_title.replace('"', '\\"')
    e = clean_excerpt.replace('"', '\\"')

    return textwrap.dedent(f"""\
        ---
        title: "{t}"
        slug: "{slug}"
        description: "{d}"
        seoTitle: "{s}"
        date: "{date}"
        modified: "{modified}"
        author: "{AUTHOR_SLUG}"
        categories: {fm_categories}
        featuredImage: "{featured_image_path}"
        featuredImageAlt: "{t}"
        excerpt: "{e}"
        ---
    """)


def migrate_post(slug: str, redirects: dict) -> None:
    print(f"\n→ Migrating: {slug}")

    # Fetch post
    data = fetch_json(f"{WP_BASE}/posts", params={"slug": slug, "per_page": 1})
    if not data:
        print(f"  SKIP: not found")
        return
    post = data[0]

    post_id = post["id"]
    post_slug = post["slug"]
    original_url = post["link"]
    new_url = f"{NEW_BASE}/{post_slug}"

    # Resolve categories
    category_slugs = [
        WP_CATEGORY_MAP.get(cid, str(cid))
        for cid in post["categories"]
        if WP_CATEGORY_MAP.get(cid) != "senza-categoria"
    ]

    # Featured image
    featured_image_path = ""
    if post.get("featured_media"):
        media = fetch_json(f"{WP_BASE}/media/{post['featured_media']}")
        if media:
            img_url = media.get("source_url", "")
            if img_url:
                filename = f"{post_slug}.webp"
                dest = IMAGES_DIR / filename
                if download_image(img_url, dest):
                    featured_image_path = f"/blog/images/{filename}"
                    print(f"  ✓ Featured image: {filename}")

    # Convert content
    raw_html = post["content"]["rendered"]
    markdown_body = html_to_markdown(raw_html)
    markdown_body, _ = process_inline_images(markdown_body, post_slug)

    # Excerpt for description
    excerpt_html = post["excerpt"]["rendered"]
    excerpt_text = re.sub(r"<[^>]+>", "", excerpt_html).strip()

    # Build file
    frontmatter = build_frontmatter(post, category_slugs, featured_image_path, excerpt_text)
    output = frontmatter + "\n" + markdown_body + "\n"

    out_path = CONTENT_DIR / f"{post_slug}.md"
    out_path.write_text(output, encoding="utf-8")
    print(f"  ✓ Saved: {out_path}")

    # Register redirect
    redirects[original_url] = new_url
    print(f"  ✓ Redirect: {original_url} → {new_url}")

    time.sleep(0.5)  # be polite


# ─── Main ─────────────────────────────────────────────────────────────────────

def main() -> None:
    print("Loading category map...")
    load_category_map()
    print(f"  Found {len(WP_CATEGORY_MAP)} categories")

    redirects: dict[str, str] = {}

    for slug in SLUGS:
        migrate_post(slug, redirects)

    REDIRECTS_FILE.write_text(json.dumps(redirects, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"\n✓ Done. {len(redirects)} posts migrated.")
    print(f"✓ Redirects saved to {REDIRECTS_FILE}")


if __name__ == "__main__":
    main()
