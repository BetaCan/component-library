import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const catalogPath = resolve(root, 'src/catalog/componentCatalog.ts')
const usagePath = resolve(root, 'src/catalog/usageExamples.ts')
const catalogSource = readFileSync(catalogPath, 'utf8')
const usageSource = readFileSync(usagePath, 'utf8')
const entryMatches = [...catalogSource.matchAll(/\{\n    slug: '([^']+)',([\s\S]*?)(?=\n  \},\n  \{|\n\]\n)/g)]
const errors = []
const slugs = entryMatches.map((match) => match[1])
const titles = entryMatches.map((match) => match[2].match(/title: '([^']+)'/)?.[1])

if (new Set(slugs).size !== slugs.length) {
  errors.push('Every catalog slug must be unique.')
}
if (slugs.some((slug) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))) {
  errors.push('Every catalog slug must use lowercase kebab-case.')
}
if (new Set(titles).size !== titles.length) {
  errors.push('Every catalog title must be unique.')
}

for (const match of entryMatches) {
  const [, slug, entry] = match
  const imageMatch = entry.match(/image: assetPath\('([^']+)'\)/)
  const languagesMatch = entry.match(/languages: \[([^\]]*)\]/)
  const filesMatch = entry.match(/files:\s*\[[\s\S]*?code:/)
  const guideMatch = entry.match(/guide:\s*\{[\s\S]*?whatItDoes:[\s\S]*?howToUse:[\s\S]*?importantCode:/)
  const tagsMatch = entry.match(/tags: \[([^\]]*)\]/)
  const keywordsMatch = entry.match(/keywords: \[([^\]]*)\]/)
  const statusMatch = entry.match(/status: '(Stable|Experimental|Needs testing)'/)

  if (!imageMatch || !existsSync(resolve(root, 'public', imageMatch[1]))) {
    errors.push(`${slug}: preview image is missing from public/.`)
  }
  if (!languagesMatch || !languagesMatch[1].trim()) {
    errors.push(`${slug}: at least one supported language is required.`)
  }
  if (!tagsMatch || !tagsMatch[1].trim()) {
    errors.push(`${slug}: at least one tag is required.`)
  }
  if (!keywordsMatch || !keywordsMatch[1].trim()) {
    errors.push(`${slug}: at least one keyword is required.`)
  }
  if (!statusMatch) {
    errors.push(`${slug}: status must be Stable, Experimental, or Needs testing.`)
  }
  if (!filesMatch || !entry.includes('name:') || !entry.includes('code:')) {
    errors.push(`${slug}: at least one implementation file with code is required.`)
  }
  if (!guideMatch) {
    errors.push(`${slug}: guide must include whatItDoes, howToUse, and importantCode.`)
  }
  const usageKey = new RegExp(`(?:['"]?${slug}['"]?):`)
  if (!usageKey.test(usageSource)) {
    errors.push(`${slug}: usage example is missing from usageExamples.ts.`)
  }
}

if (entryMatches.length === 0) {
  errors.push('No catalog entries were found.')
}

if (errors.length > 0) {
  console.error('Catalog validation failed:')
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log(`Catalog validation passed: ${slugs.length} entries checked.`)
