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

Keep shared presentation in `src/components` and keep stateful, reusable logic in `src/hooks`. Catalog entries should describe a component rather than contain page layout logic.
