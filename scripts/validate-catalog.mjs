import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const catalogPath = resolve(root, 'src/catalog/componentCatalog.ts')
const usagePath = resolve(root, 'src/catalog/usageExamples.ts')
const catalogSource = readFileSync(catalogPath, 'utf8')
const usageSource = readFileSync(usagePath, 'utf8')
const propsSource = readFileSync(resolve(root, 'src/catalog/propDocumentation.ts'), 'utf8')
const entryMatches = [...catalogSource.matchAll(/\{\n    slug: '([^']+)',([\s\S]*?)(?=\n  \},\n  \{|\n\]\n)/g)]
const errors = []
const slugs = entryMatches.map((match) => match[1])
const titles = entryMatches.map((match) => match[2].match(/title: '([^']+)'/)?.[1])
const usageSlugs = new Set([...usageSource.matchAll(/^\s*['"]?([a-z0-9-]+)['"]?:\s*\{/gm)].map((match) => match[1]))
const propsSlugs = new Set([...propsSource.matchAll(/^\s*['"]?([a-z0-9-]+)['"]?:\s*\[/gm)].map((match) => match[1]))
const propEntries = [...propsSource.matchAll(/prop\('([^']+)',\s*'([^']+)',\s*(true|false),\s*'([^']+)'\)/g)]

const getStringArray = (entry, field) => {
  const match = entry.match(new RegExp(`${field}: \\[([^\\]]*)\\]`))
  if (!match) {
    return null
  }

  return [...match[1].matchAll(/'([^']*)'|"([^"]*)"/g)].map((item) => item[1] ?? item[2])
}

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
  const tags = getStringArray(entry, 'tags')
  const keywords = getStringArray(entry, 'keywords')
  const statusMatch = entry.match(/status: '(Stable|Experimental|Needs testing)'/)
  const versionMatch = entry.match(/version: '(\d+\.\d+\.\d+)'/)
  const lastUpdatedMatch = entry.match(/lastUpdated: '(\d{4}-\d{2}-\d{2})'/)
  const documentationUrlMatch = entry.match(/documentationUrl: '(https:\/\/mui\.com\/[^']+)'/)
  const implementationMatch = entry.match(/files:\s*\[\s*\{\s*name:\s*'([^']+)'/)
  const usageMatch = usageSource.match(new RegExp(`['"]?${slug}['"]?:\\s*\\{([\\s\\S]*?)(?=\\n\\s*['"]?[a-z0-9-]+['"]?:\\s*\\{|\\n\\s*\\})`, 'm'))

  if (!imageMatch) {
    errors.push(`${slug}: preview must use a local assetPath(...) file.`)
  } else if (
    imageMatch[1].startsWith('/') ||
    /^(?:https?:)?\/\//.test(imageMatch[1]) ||
    imageMatch[1].split('/').includes('..') ||
    !existsSync(resolve(root, 'public', imageMatch[1]))
  ) {
    errors.push(`${slug}: preview must be a local file that exists under public/.`)
  }
  if (!languagesMatch || !languagesMatch[1].trim()) {
    errors.push(`${slug}: at least one supported language is required.`)
  }
  if (!tags || tags.length === 0 || tags.some((tag) => !tag.trim())) {
    errors.push(`${slug}: tags must contain at least one non-empty value.`)
  }
  if (!keywords || keywords.length === 0 || keywords.some((keyword) => !keyword.trim())) {
    errors.push(`${slug}: keywords must contain at least one non-empty value.`)
  }
  if (!statusMatch) {
    errors.push(`${slug}: status must be Stable, Experimental, or Needs testing.`)
  }
  if (!versionMatch) {
    errors.push(`${slug}: version must use semantic versioning such as 1.0.0.`)
  }
  if (!lastUpdatedMatch || Number.isNaN(Date.parse(`${lastUpdatedMatch[1]}T00:00:00Z`))) {
    errors.push(`${slug}: lastUpdated must use a valid YYYY-MM-DD date.`)
  }
  if (!documentationUrlMatch) {
    errors.push(`${slug}: documentationUrl must be a valid HTTPS Material UI documentation link.`)
  }
  if (!filesMatch || !entry.includes('name:') || !entry.includes('code:')) {
    errors.push(`${slug}: at least one implementation file with code is required.`)
  }
  if (!guideMatch) {
    errors.push(`${slug}: guide must include whatItDoes, howToUse, and importantCode.`)
  } else if ([...entry.matchAll(/(?:whatItDoes|howToUse): '([^']*)'/g)].some((guideField) => !guideField[1].trim())) {
    errors.push(`${slug}: guide text must not be empty.`)
  }
  if (!usageSlugs.has(slug) || !usageMatch) {
    errors.push(`${slug}: usage example is missing from usageExamples.ts.`)
  } else if (!implementationMatch) {
    errors.push(`${slug}: implementation file is missing.`)
  } else {
    const implementationName = implementationMatch[1].replace(/\.[^.]+$/, '')
    const importMatch = usageMatch[1].match(
      /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]\.\/([^'"]+)['"]/,
    )
    const importedNames = importMatch?.[1].split(',').map((name) => name.trim()) ?? []
    const importedPath = importMatch?.[2]

    if (!importMatch || !importedNames.length || importedPath !== implementationName || !importedNames.some((name) => entry.includes(`export function ${name}`))) {
      errors.push(`${slug}: usage example must import its implementation from ./${implementationName}.`)
    }
  }
  if (!propsSlugs.has(slug)) {
    errors.push(`${slug}: props documentation is missing from propDocumentation.ts.`)
  } else {
    const propsEntry = propsSource.match(new RegExp(`['"]?${slug}['"]?:\\s*\\[([\\s\\S]*?)\\n\\s*\\],`, 'm'))
    const documentedProps = propsEntry
      ? [...propsEntry[1].matchAll(/prop\('([^']+)'/g)].map((propMatch) => propMatch[1])
      : []
    if (documentedProps.some((propName) => !usageMatch?.[1].includes(propName))) {
      errors.push(`${slug}: usage example must demonstrate every documented prop.`)
    }
  }
}

if (propEntries.some(([, , , description]) => !description.trim())) {
  errors.push('Every documented prop must have a non-empty description.')
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
