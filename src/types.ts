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

export type ComponentSlug =
  | 'project-card'
  | 'navigation-bar'
  | 'filter-chips'
  | 'alert-banner'
  | 'faq-accordion'
  | 'pricing-card'
  | 'sign-in-form'
  | 'loading-button'
  | 'profile-menu'
  | 'data-table'
  | 'breadcrumbs'
  | 'search-field'
  | 'empty-state'
  | 'confirmation-dialog'
  | 'tab-navigation'
  | 'snackbar-notification'
  | 'form-stepper'
  | 'image-upload'
  | 'list-item'

export type ComponentItem = {
  slug: ComponentSlug
  title: string
  description: string
  tags: string[]
  image: string
  category: string
  status: 'Stable' | 'Experimental' | 'Needs testing'
  version: string
  lastUpdated: string
  documentationUrl: string
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
