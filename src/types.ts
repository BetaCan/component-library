export type ComponentFile = {
  name: string
  language: string
  code: string
}

export type ComponentItem = {
  slug: string
  title: string
  description: string
  tags: string[]
  image: string
  category: string
  languages: string[]
  technologies: string[]
  keywords: string[]
  setup: string[]
  files: ComponentFile[]
}
