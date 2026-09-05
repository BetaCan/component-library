# Reuse component library

Reuse is a static React, TypeScript, and Material UI reference library. Each entry explains a practical component, documents its props, and includes implementation and usage code.

## Running locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Project structure

```text
src/
├── catalog/
│   ├── componentCatalog.ts
│   ├── propDocumentation.ts
│   └── usageExamples.ts
├── components/
│   ├── CodeBlock.tsx
│   ├── ComponentSearch.tsx
│   ├── FilterGroup.tsx
│   ├── PropsTable.tsx
│   ├── TechnologyChips.tsx
│   └── UsageExample.tsx
├── hooks/
│   └── useComponentFilters.ts
├── types.ts
└── App.tsx
```

## Adding a component

1. Add a complete entry to `src/catalog/componentCatalog.ts`.
2. Add a matching usage example to `src/catalog/usageExamples.ts`.
3. Add its props to `src/catalog/propDocumentation.ts`, or use an empty array when it has no custom props.
4. Add a local preview image under `public/previews/`.
5. Use the same slug in all three catalog files.
6. Run `npm run build` before committing.

Every catalog entry should include a title, description, tags, category, supported language and technologies, keywords, guide text, implementation files, a preview, and a usage example.

## Code standards

- Keep page layout, catalog data, and reusable UI components separate.
- Prefer typed props over hardcoded content.
- Keep state ownership clear: parents own state that controls reusable children.
- Use composition and `children` when a component needs flexible content.
- Keep examples readable without comments by choosing descriptive names and small responsibilities.
- Do not label an entry as supporting a language or framework unless its displayed code actually uses it.

## Deployment

The site is deployed as a static Vite build through GitHub Pages. Pushing to `main` runs `.github/workflows/deploy.yml`, builds `dist`, and publishes it.
