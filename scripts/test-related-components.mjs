import assert from 'node:assert/strict'
import test from 'node:test'
import { getRelatedComponents, relevanceScore } from '../src/components/relatedComponents.ts'

const component = (slug, category, keywords, technologies = ['React', 'Material UI']) => ({
  slug,
  category,
  keywords,
  technologies,
})

test('ranks components with shared keywords ahead of category-only matches', () => {
  const current = component('project-card', 'Cards', ['responsive', 'image'])
  const keywordMatch = component('image-upload', 'Forms', ['image'])
  const categoryMatch = component('pricing-card', 'Cards', ['billing'], ['Vue', 'Vuetify'])

  assert.deepEqual(
    getRelatedComponents(current, [current, categoryMatch, keywordMatch]).map((item) => item.slug),
    ['image-upload', 'pricing-card'],
  )
})

test('does not recommend an unrelated component when stronger matches are available', () => {
  const current = component('project-card', 'Cards', ['responsive', 'image'])
  const related = component('image-upload', 'Forms', ['image'])
  const unrelated = component('faq-accordion', 'Content', ['questions'], ['Vue', 'Vuetify'])

  assert.deepEqual(
    getRelatedComponents(current, [current, related, unrelated]).map((item) => item.slug),
    ['image-upload', 'faq-accordion'],
  )
  assert.ok(relevanceScore(current, related) > relevanceScore(current, unrelated))
})

test('excludes the current component and respects the result limit', () => {
  const current = component('project-card', 'Cards', ['responsive'])
  const first = component('navigation-bar', 'Navigation', ['responsive'])
  const second = component('pricing-card', 'Cards', ['billing'])
  const third = component('list-item', 'Lists', ['rows'])

  assert.deepEqual(
    getRelatedComponents(current, [current, first, second, third], 2).map((item) => item.slug),
    ['navigation-bar', 'pricing-card'],
  )
})
