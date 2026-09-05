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
      <NavigationBar />
      <main>Your page content goes here.</main>
    </>
  )
}`,
  },
  'filter-chips': {
    name: 'ComponentFilters.tsx',
    language: 'tsx',
    code: `import { FilterChips } from './FilterChips'

export function ComponentFilters() {
  return <FilterChips />
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
  return <FaqAccordion />
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
    />
  )
}`,
  },
  'sign-in-form': {
    name: 'LoginPage.tsx',
    language: 'tsx',
    code: `import { SignInForm } from './SignInForm'

export function LoginPage() {
  return <SignInForm />
}`,
  },
  'loading-button': {
    name: 'SaveSettings.tsx',
    language: 'tsx',
    code: `import { LoadingButton } from './LoadingButton'

export function SaveSettings({ saving }: { saving: boolean }) {
  return <LoadingButton loading={saving} />
}`,
  },
  'profile-menu': {
    name: 'Header.tsx',
    language: 'tsx',
    code: `import { ProfileMenu } from './ProfileMenu'

export function Header() {
  return <ProfileMenu />
}`,
  },
  'data-table': {
    name: 'Dashboard.tsx',
    language: 'tsx',
    code: `import { DataTable } from './DataTable'

export function Dashboard() {
  return <DataTable />
}`,
  },
  breadcrumbs: {
    name: 'ComponentsPage.tsx',
    language: 'tsx',
    code: `import { Breadcrumbs } from './Breadcrumbs'

export function ComponentsPage() {
  return (
    <Breadcrumbs
      items={['Home', 'Components', 'Cards']}
    />
  )
}`,
  },
  'search-field': {
    name: 'ComponentSearch.tsx',
    language: 'tsx',
    code: `import { SearchField } from './SearchField'

export function ComponentSearch() {
  return <SearchField />
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
    code: `import { TabNavigation } from './TabNavigation'

export function Dashboard() {
  return <TabNavigation />
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
    code: `import { FormStepper } from './FormStepper'

export function OnboardingPage() {
  return <FormStepper />
}`,
  },
  'image-upload': {
    name: 'ProfileSettings.tsx',
    language: 'tsx',
    code: `import { ImageUpload } from './ImageUpload'

export function ProfileSettings() {
  return <ImageUpload />
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
