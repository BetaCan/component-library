# Reuse component library

Reuse is a static component reference library for learning and reusing practical UI patterns. Each entry includes a preview, supported technology information, status, props documentation, implementation code, and an example showing how to call it.

The current catalog focuses on TypeScript, React, and Material UI. JavaScript and other frameworks can be added later when their implementations are ready.

## Technology

- React
- TypeScript
- Material UI
- Vite
- React Router with hash-based routes
- GitHub Pages and GitHub Actions

The site is fully static. It does not require a server or database.

## Running locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
public/
└── previews/                  Local SVG previews used by catalog cards

src/
├── catalog/
│   ├── componentCatalog.ts    Component content and implementation files
│   ├── propDocumentation.ts   Props tables shown on detail pages
│   ├── usageExamples.ts       Import-and-use examples
│   └── README.md              Catalog entry reference
├── components/
│   ├── CodeBlock.tsx
│   ├── CodeTabs.tsx
│   ├── ComponentPreview.tsx
│   ├── ComponentSearch.tsx
│   ├── ComponentStatus.tsx
│   ├── FilterGroup.tsx
│   ├── PropsTable.tsx
│   ├── RelatedComponents.tsx
│   ├── relatedComponents.ts
│   └── TechnologyChips.tsx
├── hooks/
│   └── useComponentFilters.ts
├── types.ts
└── App.tsx

.github/workflows/
└── deploy.yml                GitHub Pages build and deployment workflow
```

## Adding a component

1. Choose a unique URL-safe slug, such as `profile-card`.
2. Add the complete entry to `src/catalog/componentCatalog.ts`.
3. Add a matching import-and-use example to `src/catalog/usageExamples.ts`.
4. Add its props to `src/catalog/propDocumentation.ts`, or use an empty array when it has no custom props.
5. Add a local preview image under `public/previews/`.
6. Add an interactive preview to the registry in `src/components/ComponentPreview.tsx` when one is appropriate.
7. Use the same slug in every catalog file.
8. Run the build before committing.

Every catalog entry should include a title, description, tags, category, supported language and technologies, keywords, status, guide text, implementation files, a preview, and a usage example.

Entries also require a semantic `version`, a `lastUpdated` date in `YYYY-MM-DD` format, and a direct Material UI `documentationUrl`. If an entry does not have an interactive preview yet, its slug must still be declared in the typed preview registry.

Use only truthful technology metadata. Do not list a language or framework until the displayed code actually implements that version.

Before committing, run:

```bash
npm run validate:catalog
npm run lint
npm run test:related
npm run build
```

See [CHANGELOG.md](CHANGELOG.md) for a summary of project improvements.

## Code standards

- Keep page layout, catalog data, and reusable UI components separate.
- Prefer typed props over hardcoded content.
- Keep state ownership clear: parents own state that controls reusable children.
- Use composition and `children` when a component needs flexible content.
- Keep examples readable without comments by choosing descriptive names and small responsibilities.
- Give controls visible labels and meaningful accessible names.
- Use descriptive alt text for meaningful images and empty alt text for decorative images.

## Deployment

The site is deployed as a static Vite build through GitHub Pages. The workflow in `.github/workflows/deploy.yml`:

1. Runs when a commit is pushed to `main`
2. Installs dependencies with `npm ci`
3. Runs `npm run build`
4. Uploads the `dist` folder
5. Publishes the artifact to GitHub Pages

To deploy an update:

```bash
git add .
git commit -m "Describe the update"
git push origin main
```

In repository settings, GitHub Pages must use **GitHub Actions** as its source. The deployed URL is usually:

```text
https://YOUR_USERNAME.github.io/component-library/
```

The app uses hash routes, so detail pages remain compatible with static hosting:

```text
https://YOUR_USERNAME.github.io/component-library/#/components/project-card
```
