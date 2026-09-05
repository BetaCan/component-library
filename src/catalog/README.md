# Component catalog

Add new library entries in `componentCatalog.ts`.

Each entry should provide:

- `slug`: unique URL-safe identifier
- `title` and `description`: the card and detail-page copy
- `tags`: short labels shown on the card
- `image`: a local preview under `public/previews`
- `category`: the component grouping
- `languages`: supported programming languages
- `technologies`: frameworks and libraries
- `keywords`: searchable concepts for future catalog features
- `guide`: what the component does, how it is used, and important code ideas
- `files`: copyable source files
- `version`: semantic version for the component example
- `lastUpdated`: date of the latest catalog update in `YYYY-MM-DD` format
- `documentationUrl`: direct link to the relevant Material UI documentation

Add the matching import-and-render example in `usageExamples.ts`. Keep implementation code and calling code separate so users can understand both parts.

Add a matching key to `propDocumentation.ts`. Use an empty array only when the implementation genuinely has no public custom props; do not invent props that the implementation does not accept.

Usage examples should include the import, a small parent component, and realistic values. Keep internal sample data clearly identified in the guide when the component does not yet accept that data through props.

Keep shared presentation in `src/components` and keep stateful, reusable logic in `src/hooks`. Catalog entries should describe a component rather than contain page layout logic.
