import { useMemo, useState } from 'react'
import type { ComponentItem } from '../types'

const allLanguages = 'All languages'
const allTechnologies = 'All technologies'
const allCategories = 'All categories'

export function useComponentFilters(items: ComponentItem[]) {
  const [language, setLanguage] = useState(allLanguages)
  const [technology, setTechnology] = useState(allTechnologies)
  const [category, setCategory] = useState(allCategories)

  const options = useMemo(() => ({
    languages: [allLanguages, ...new Set(items.flatMap((item) => item.languages))],
    technologies: [allTechnologies, ...new Set(items.flatMap((item) => item.technologies))],
    categories: [allCategories, ...new Set(items.map((item) => item.category))],
  }), [items])

  const filteredItems = useMemo(() => items.filter((item) =>
    (language === allLanguages || item.languages.includes(language)) &&
    (technology === allTechnologies || item.technologies.includes(technology)) &&
    (category === allCategories || item.category === category),
  ), [category, items, language, technology])

  return {
    ...options,
    filteredItems,
    filters: { language, technology, category },
    setLanguage,
    setTechnology,
    setCategory,
  }
}
