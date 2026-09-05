export type ComponentFile = {
  name: string
  language: string
  code: string
}

export type ComponentProp = {
  name: string
  type: string
  required: boolean
  description: string
}

export type ComponentItem = {
  slug: string
  title: string
  description: string
  tags: string[]
  image: string
  category: string
  status: 'Stable' | 'Experimental' | 'Needs testing'
  languages: string[]
  technologies: string[]
  keywords: string[]
  guide: {
    whatItDoes: string
    howToUse: string
    importantCode: string[]
  }
  files: ComponentFile[]
  optionalFiles?: ComponentFile[]
}

export type PreviewProps = {
  title: string
}
