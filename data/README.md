# Data catalog

[`tools.json`](tools.json) is the machine-readable companion to the repository README. It is intended for research workflows, integrations, and AI-assisted retrieval that need a stable list of the curated categories and official vendor URLs.

## Scope and interpretation

- `last_reviewed` is the date the catalog was last checked as a whole.
- `categories` defines the stable category IDs used by each tool entry. Each category also includes `workflow_stages`: a maintained, descriptive set of firm workflow stages the category is intended to help readers navigate. These are taxonomy labels, not product capabilities, requirements, or recommendations.
- Each item in `tools` contains a product or program name, exactly one category ID, and its official vendor or product URL.
- The official URL is the primary source for the corresponding README entry; consumers should verify current product capabilities, pricing, integrations, and suitability with that source.

The catalog intentionally does not assign rankings, scores, security certifications, compatibility claims, or recommendations. Inclusion reflects editorial relevance and verifiability, not endorsement.

## Update policy

The catalog is updated in the same commit as a README addition, removal, or category change. Consumers should use the repository history and [changelog](../CHANGELOG.md) to inspect material changes.

Catalog structure and README coverage are automatically checked on pull requests, qualifying updates to `main`, and weekly through the repository's **Catalog integrity** workflow. The check verifies JSON structure, category references, unique tool names, HTTPS URLs, and that every catalog entry also appears in the README. It does not certify that a vendor page is available, current, secure, or suitable for a firm's use.
