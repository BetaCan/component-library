import type { ComponentFile } from '../types'

export const usageExamples: Record<string, ComponentFile> = {
  'project-card': {
    name: 'App.tsx',
    language: 'tsx',
    code: `import { ProjectCard } from './ProjectCard'

export function App() {
  return (
    <ProjectCard
      title="ShiftBoard"
      description="A shift scheduling web app."
      image="/shiftboard.png"
      tags={['React', 'TypeScript', 'Material UI']}
    />
  )
}`,
  },
  'navigation-bar': {
    name: 'App.tsx',
    language: 'tsx',
    code: `import { NavigationBar } from './NavigationBar'

export function App() {
  return (
    <>
      <NavigationBar
        brand="My website"
        links={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]}
      />
      <main>Your page content goes here.</main>
    </>
  )
}`,
  },
  'filter-chips': {
    name: 'ComponentFilters.tsx',
    language: 'tsx',
    code: `import { useState } from 'react'
import { FilterChips } from './FilterChips'

export function ComponentFilters() {
  const [selected, setSelected] = useState('All')
  return <FilterChips filters={['All', 'Cards', 'Navigation']} selected={selected} onChange={setSelected} />
}`,
  },
  'alert-banner': {
    name: 'SettingsPage.tsx',
    language: 'tsx',
    code: `import { AlertBanner } from './AlertBanner'

export function SettingsPage() {
  return (
    <AlertBanner
      severity="success"
      title="Saved successfully"
      message="Your changes are now live."
    />
  )
}`,
  },
  'faq-accordion': {
    name: 'HelpPage.tsx',
    language: 'tsx',
    code: `import { FaqAccordion } from './FaqAccordion'

export function HelpPage() {
  return <FaqAccordion items={[
    { question: 'What is this?', answer: 'A reusable FAQ component.' },
    { question: 'Can I customise it?', answer: 'Yes, pass your own questions and answers.' },
  ]} />
}`,
  },
  'pricing-card': {
    name: 'PricingPage.tsx',
    language: 'tsx',
    code: `import { PricingCard } from './PricingCard'

export function PricingPage() {
  return (
    <PricingCard
      name="Pro"
      price="$19 / month"
      features={['Unlimited projects', 'Priority support']}
      featured
      onChoose={() => console.log('Selected Pro plan')}
    />
  )
}`,
  },
  'sign-in-form': {
    name: 'LoginPage.tsx',
    language: 'tsx',
    code: `import { SignInForm } from './SignInForm'

export function LoginPage() {
  return <SignInForm onSubmit={(values) => console.log('Sign in', values)} />
}`,
  },
  'loading-button': {
    name: 'SaveSettings.tsx',
    language: 'tsx',
    code: `import { LoadingButton } from './LoadingButton'

export function SaveSettings({ saving }: { saving: boolean }) {
  return <LoadingButton loading={saving} label="Save changes" onClick={() => console.log('Save settings')} />
}`,
  },
  'profile-menu': {
    name: 'Header.tsx',
    language: 'tsx',
    code: `import { ProfileMenu } from './ProfileMenu'

export function Header() {
  return (
    <ProfileMenu
      initials="JD"
      actions={[
        { label: 'Profile', onSelect: () => console.log('Open profile') },
        { label: 'Settings', onSelect: () => console.log('Open settings') },
        { label: 'Sign out', onSelect: () => console.log('Sign out') },
      ]}
    />
}`,
  },
  'data-table': {
    name: 'Dashboard.tsx',
    language: 'tsx',
    code: `import { DataTable } from './DataTable'

export function Dashboard() {
  return <DataTable rows={[
    { id: 'project-card', name: 'Project Card', status: 'Ready' },
    { id: 'faq', name: 'FAQ', status: 'Draft' },
  ]} />
}`,
  },
  breadcrumbs: {
    name: 'ComponentsPage.tsx',
    language: 'tsx',
    code: `import { Breadcrumbs } from './Breadcrumbs'

export function ComponentsPage() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Home', href: '/' },
        { label: 'Components', href: '/components' },
        { label: 'Cards', href: '/components/cards' },
      ]}
    />
  )
}`,
  },
  'search-field': {
    name: 'ComponentSearch.tsx',
    language: 'tsx',
    code: `import { useState } from 'react'
import { SearchField } from './SearchField'

export function ComponentSearch() {
  const [query, setQuery] = useState('')
  return <SearchField value={query} onChange={setQuery} />
}`,
  },
  'empty-state': {
    name: 'ResultsPage.tsx',
    language: 'tsx',
    code: `import { EmptyState } from './EmptyState'

export function ResultsPage() {
  return (
    <EmptyState
      title="No projects yet"
      message="Create your first project to get started."
      action="Create project"
      onAction={() => console.log('Create project')}
    />
  )
}`,
  },
  'confirmation-dialog': {
    name: 'DeleteProject.tsx',
    language: 'tsx',
    code: `import { useState } from 'react'
import { Button } from '@mui/material'
import { ConfirmationDialog } from './ConfirmationDialog'

export function DeleteProject() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="error" onClick={() => setOpen(true)}>Delete project</Button>
      <ConfirmationDialog
        open={open}
        title="Delete this project?"
        message="This action cannot be undone."
        onCancel={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
      />
    </>
  )
}`,
  },
  'tab-navigation': {
    name: 'Dashboard.tsx',
    language: 'tsx',
    code: `import { useState } from 'react'
import { TabNavigation } from './TabNavigation'

export function Dashboard() {
  const [selected, setSelected] = useState(0)
  return <TabNavigation views={['Overview', 'Activity', 'Settings']} selected={selected} onChange={setSelected} />
}`,
  },
  'snackbar-notification': {
    name: 'SettingsPage.tsx',
    language: 'tsx',
    code: `import { useState } from 'react'
import { Button } from '@mui/material'
import { SnackbarNotification } from './SnackbarNotification'

export function SettingsPage() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Save settings</Button>
      <SnackbarNotification
        open={open}
        message="Settings saved"
        onClose={() => setOpen(false)}
      />
    </>
  )
}`,
  },
  'form-stepper': {
    name: 'OnboardingPage.tsx',
    language: 'tsx',
    code: `import { useState } from 'react'
import { FormStepper } from './FormStepper'

export function OnboardingPage() {
  const [activeStep, setActiveStep] = useState(0)
  return <FormStepper steps={['Account', 'Details', 'Review']} activeStep={activeStep} onChange={setActiveStep} />
}`,
  },
  'image-upload': {
    name: 'ProfileSettings.tsx',
    language: 'tsx',
    code: `import { ImageUpload } from './ImageUpload'

export function ProfileSettings() {
  return <ImageUpload onFileSelect={(file) => console.log('Selected file', file)} />
}`,
  },
  'list-item': {
    name: 'ProjectList.tsx',
    language: 'tsx',
    code: `import { List } from '@mui/material'
import { CollectionListItem } from './ListItem'

export function ProjectList() {
  return (
    <List>
      <CollectionListItem
        title="ShiftBoard"
        detail="Updated today"
        onOpen={() => console.log('Open project')}
      />
    </List>
  )
}`,
  },
}
