import type { ComponentProp } from '../types'

const prop = (name: string, type: string, required: boolean, description: string): ComponentProp => ({
  name,
  type,
  required,
  description,
})

export const propDocumentation: Record<string, ComponentProp[]> = {
  'project-card': [
    prop('title', 'string', true, 'The project name shown as the heading.'),
    prop('description', 'string', true, 'Short supporting text for the project.'),
    prop('image', 'string', true, 'Image URL or local asset path.'),
    prop('tags', 'string[]', true, 'Technology or topic labels shown on the card.'),
  ],
  'navigation-bar': [],
  'filter-chips': [],
  'alert-banner': [
    prop('severity', "'success' | 'info' | 'warning' | 'error'", true, 'Controls the message meaning and visual treatment.'),
    prop('title', 'string', true, 'Short heading for the message.'),
    prop('message', 'string', true, 'Supporting explanation shown below the title.'),
  ],
  'faq-accordion': [],
  'pricing-card': [
    prop('name', 'string', true, 'Name of the plan.'),
    prop('price', 'string', true, 'Formatted price displayed to the user.'),
    prop('features', 'string[]', true, 'Benefits included in the plan.'),
    prop('featured', 'boolean', false, 'Highlights the plan when true.'),
  ],
  'sign-in-form': [],
  'loading-button': [
    prop('loading', 'boolean', true, 'Shows progress and disables the button when true.'),
  ],
  'profile-menu': [],
  'data-table': [],
  breadcrumbs: [
    prop('items', 'string[]', true, 'Ordered labels from the root location to the current page.'),
  ],
  'search-field': [],
  'empty-state': [
    prop('title', 'string', true, 'Heading that explains the empty state.'),
    prop('message', 'string', true, 'Helpful explanation or next step.'),
    prop('action', 'string', true, 'Label for the primary action button.'),
  ],
  'confirmation-dialog': [
    prop('open', 'boolean', true, 'Controls whether the dialog is visible.'),
    prop('title', 'string', true, 'Question or action being confirmed.'),
    prop('message', 'string', true, 'Explains what will happen.'),
    prop('onCancel', '() => void', true, 'Called when the dialog is dismissed.'),
    prop('onConfirm', '() => void', true, 'Called when the user confirms.'),
  ],
  'tab-navigation': [],
  'snackbar-notification': [
    prop('open', 'boolean', true, 'Controls whether the notification is visible.'),
    prop('message', 'string', true, 'Short result message shown to the user.'),
    prop('onClose', '() => void', true, 'Called when the notification closes.'),
  ],
  'form-stepper': [],
  'image-upload': [],
  'list-item': [
    prop('title', 'string', true, 'Primary row label.'),
    prop('detail', 'string', true, 'Supporting row text.'),
    prop('onOpen', '() => void', true, 'Called when the row action is selected.'),
  ],
}
