# Changelog

## 2026-09-05

### Added

- Added component version and last-updated metadata to every catalog entry.
- Added direct Material UI documentation links for each component.
- Added a typed preview registry backed by the catalog slug type.
- Added a dedicated 404 page for invalid routes and component URLs.
- Added related-component ranking tests for keyword, technology, category, exclusion, and result-limit behavior.
- Added visible clipboard failure messages when browser copy permissions are unavailable.

### Improved

- Strengthened catalog validation for:
  - Lowercase kebab-case and unique slugs
  - Duplicate component titles
  - Non-empty tags and keywords
  - Valid component statuses
  - Semantic versions and valid update dates
  - Local preview files
  - Matching usage examples and implementation imports
  - Matching props documentation entries
  - Valid Material UI documentation URLs
- Added catalog validation, linting, related-component tests, TypeScript checking, and the production build to the build pipeline.
- Updated the detail page to show component status, version, last-updated date, and the relevant Material UI documentation link.
- Removed the outdated About link and footer tagline.

