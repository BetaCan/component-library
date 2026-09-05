import type { ComponentItem } from '../types'

export function relevanceScore(source: ComponentItem, candidate: ComponentItem) {
  const sharedKeywords = candidate.keywords.filter((keyword) => source.keywords.includes(keyword)).length
  const sharedTechnologies = candidate.technologies.filter((technology) => source.technologies.includes(technology)).length
  const sameCategory = source.category === candidate.category ? 1 : 0
  return sharedKeywords + sharedTechnologies + sameCategory
}

export function getRelatedComponents(current: ComponentItem, items: ComponentItem[], limit = 3) {
  return items
    .filter((item) => item.slug !== current.slug)
    .sort((first, second) => relevanceScore(current, second) - relevanceScore(current, first))
    .slice(0, limit)
}
