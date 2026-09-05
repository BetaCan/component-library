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
  'navigation-bar': [
    prop('brand', 'string', true, 'Text shown at the start of the navigation bar.'),
    prop('links', '{ label: string; href: string }[]', true, 'Navigation links rendered across the header.'),
  ],
  'filter-chips': [
    prop('filters', 'string[]', true, 'Labels shown as selectable filter chips.'),
    prop('selected', 'string', true, 'Currently selected filter label.'),
    prop('onChange', '(filter: string) => void', true, 'Called when a filter is selected.'),
  ],
  'alert-banner': [
    prop('severity', "'success' | 'info' | 'warning' | 'error'", true, 'Controls the message meaning and visual treatment.'),
    prop('title', 'string', true, 'Short heading for the message.'),
    prop('message', 'string', true, 'Supporting explanation shown below the title.'),
  ],
  'faq-accordion': [
    prop('items', '{ question: string; answer: string }[]', true, 'Questions and answers rendered as expandable sections.'),
  ],
  'pricing-card': [
    prop('name', 'string', true, 'Name of the plan.'),
    prop('price', 'string', true, 'Formatted price displayed to the user.'),
    prop('features', 'string[]', true, 'Benefits included in the plan.'),
    prop('featured', 'boolean', false, 'Highlights the plan when true.'),
    prop('onChoose', '() => void', true, 'Called when the user chooses the plan.'),
  ],
  'sign-in-form': [
    prop('onSubmit', '(values: { email: string; password: string }) => void', true, 'Called with the submitted sign-in values.'),
  ],
  'loading-button': [
    prop('loading', 'boolean', true, 'Shows progress and disables the button when true.'),
    prop('label', 'string', true, 'Text shown when the button is not loading.'),
    prop('onClick', '() => void', true, 'Called when the button is clicked.'),
  ],
  'profile-menu': [
    prop('initials', 'string', true, 'Initials shown inside the avatar.'),
    prop('actions', '{ label: string; onSelect: () => void }[]', true, 'Menu actions displayed when the avatar is opened.'),
  ],
  'data-table': [
    prop('rows', '{ id: string; name: string; status: string }[]', true, 'Records rendered as table rows.'),
  ],
  breadcrumbs: [
    prop('items', '{ label: string; href: string }[]', true, 'Ordered breadcrumb labels and destinations.'),
  ],
  'search-field': [
    prop('value', 'string', true, 'Current search text controlled by the parent.'),
    prop('onChange', '(value: string) => void', true, 'Called whenever the search text changes.'),
  ],
  'empty-state': [
    prop('title', 'string', true, 'Heading that explains the empty state.'),
    prop('message', 'string', true, 'Helpful explanation or next step.'),
    prop('action', 'string', true, 'Label for the primary action button.'),
    prop('onAction', '() => void', true, 'Called when the primary action is selected.'),
  ],
  'confirmation-dialog': [
    prop('open', 'boolean', true, 'Controls whether the dialog is visible.'),
    prop('title', 'string', true, 'Question or action being confirmed.'),
    prop('message', 'string', true, 'Explains what will happen.'),
    prop('onCancel', '() => void', true, 'Called when the dialog is dismissed.'),
    prop('onConfirm', '() => void', true, 'Called when the user confirms.'),
  ],
  'tab-navigation': [
    prop('views', 'string[]', true, 'Labels displayed in the tab navigation.'),
    prop('selected', 'number', true, 'Index of the currently selected tab.'),
    prop('onChange', '(nextValue: number) => void', true, 'Called when a different tab is selected.'),
  ],
  'snackbar-notification': [
    prop('open', 'boolean', true, 'Controls whether the notification is visible.'),
    prop('message', 'string', true, 'Short result message shown to the user.'),
    prop('onClose', '() => void', true, 'Called when the notification closes.'),
  ],
  'form-stepper': [
    prop('steps', 'string[]', true, 'Labels displayed in the workflow stepper.'),
    prop('activeStep', 'number', true, 'Index of the current step.'),
    prop('onChange', '(nextStep: number) => void', true, 'Called when a step is selected.'),
  ],
  'image-upload': [
    prop('onFileSelect', '(file: File | undefined) => void', true, 'Receives the selected image file so the parent can preview or upload it.'),
  ],
  'list-item': [
    prop('title', 'string', true, 'Primary row label.'),
    prop('detail', 'string', true, 'Supporting row text.'),
    prop('onOpen', '() => void', true, 'Called when the row action is selected.'),
  ],
}
