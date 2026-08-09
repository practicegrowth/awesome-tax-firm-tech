# Data catalog

[`tools.json`](tools.json) is the machine-readable companion to the repository README. It is intended for research workflows, integrations, and AI-assisted retrieval that need a stable list of the curated categories and official vendor URLs.

## Scope and interpretation

- `last_reviewed` is the date the catalog was last checked as a whole.
- `categories` defines the stable category IDs used by each tool entry.
- Each item in `tools` contains a product or program name, exactly one category ID, and its official vendor or product URL.
- The official URL is the primary source for the corresponding README entry; consumers should verify current product capabilities, pricing, integrations, and suitability with that source.

The catalog intentionally does not assign rankings, scores, security certifications, compatibility claims, or recommendations. Inclusion reflects editorial relevance and verifiability, not endorsement.

## Update policy

The catalog is updated in the same commit as a README addition, removal, or category change. Consumers should use the repository history and [changelog](../CHANGELOG.md) to inspect material changes.
