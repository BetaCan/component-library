import type { ComponentItem } from '../types'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const componentCatalog: ComponentItem[] = [
  {
    slug: 'project-card',
    title: 'Project Card',
    description: 'A flexible card for showing a project, its stack, and useful links.',
    tags: ['React', 'TypeScript', 'Material UI'],
    image: assetPath('previews/project-card.svg'),
    category: 'Cards',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-card/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['responsive', 'project showcase', 'tags', 'image', 'links'],
    guide: { whatItDoes: 'Presents a project as a consistent visual card with an image, description, and technology tags.', howToUse: 'Pass project-specific values as props so the same card can display many projects without changing its layout.', importantCode: ['The props type defines the data the component needs.', 'The tags array is rendered with map, so the number of tags can change.', 'CardMedia and CardContent separate visual media from readable content.'] },
    files: [
      { name: 'ProjectCard.tsx', language: 'tsx', code: `import { Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'\n\ntype ProjectCardProps = {\n  title: string\n  description: string\n  image: string\n  tags: string[]\n}\n\nexport function ProjectCard({ title, description, image, tags }: ProjectCardProps) {\n  return (\n    <Card>\n      <CardMedia component="img" height="180" image={image} alt={title} />\n      <CardContent>\n        <Typography variant="h5">{title}</Typography>\n        <Typography color="text.secondary">{description}</Typography>\n        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>\n          {tags.map((tag) => <Chip key={tag} label={tag} size="small" />)}\n        </Stack>\n      </CardContent>\n    </Card>\n  )\n}` },
      { name: 'App.tsx', language: 'tsx', code: `<ProjectCard\n  title="ShiftBoard"\n  description="A shift scheduling web app."\n  image="/shiftboard.png"\n  tags={['React', 'TypeScript', 'Material UI']}\n/>` },
    ],
  },
  {
    slug: 'navigation-bar',
    title: 'Navigation Bar',
    description: 'A clean responsive header for moving around your application.',
    tags: ['AppBar', 'Responsive', 'Navigation'],
    image: assetPath('previews/navigation-bar.svg'),
    category: 'Navigation',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-app-bar/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['header', 'responsive navigation', 'routing', 'mobile menu', 'links'],
    guide: { whatItDoes: 'Provides a consistent header for branding and links between the main areas of an application.', howToUse: 'Place it near the top of your page and replace the example links with routes from your application.', importantCode: ['Toolbar provides the horizontal layout.', 'flexGrow pushes the navigation links to the right.', 'Button and Typography receive their visible content as children.'] },
    files: [
      { name: 'NavigationBar.tsx', language: 'tsx', code: `import { AppBar, Button, Toolbar, Typography } from '@mui/material'\n\ntype NavigationLink = {\n  label: string\n  href: string\n}\n\ntype NavigationBarProps = {\n  brand: string\n  links: NavigationLink[]\n}\n\nexport function NavigationBar({ brand, links }: NavigationBarProps) {\n  return (\n    <AppBar position="static">\n      <Toolbar>\n        <Typography sx={{ flexGrow: 1 }}>{brand}</Typography>\n        {links.map((link) => <Button key={link.href} color="inherit" href={link.href}>{link.label}</Button>)}\n      </Toolbar>\n    </AppBar>\n  )\n}` },
      { name: 'App.tsx', language: 'tsx', code: `import { NavigationBar } from './NavigationBar'\n\nexport function App() {\n  return (\n    <>\n      <NavigationBar\n        brand="My website"\n        links={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]}\n      />\n      <main>Your page content goes here.</main>\n    </>\n  )\n}` },
    ],
  },
  {
    slug: 'filter-chips',
    title: 'Filter Chips',
    description: 'Small controls that let people quickly filter a collection of content.',
    tags: ['Chips', 'State', 'Filtering'],
    image: assetPath('previews/filter-chips.svg'),
    category: 'Inputs',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-chip/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['filtering', 'selection', 'state', 'categories', 'interactive'],
    guide: { whatItDoes: 'Lets users choose one category and gives immediate visual feedback for the selected value.', howToUse: 'Pass the available filter labels into a reusable version and use the selected value to filter the content shown elsewhere.', importantCode: ['useState stores the selected filter.', 'map creates one Chip for every option.', 'The selected value controls both the Chip appearance and the filtering decision.'] },
    files: [
      { name: 'FilterChips.tsx', language: 'tsx', code: `import { Chip, Stack } from '@mui/material'\n\ntype FilterChipsProps = {\n  filters: string[]\n  selected: string\n  onChange: (filter: string) => void\n}\n\nexport function FilterChips({ filters, selected, onChange }: FilterChipsProps) {\n  return (\n    <Stack direction="row" spacing={1}>\n      {filters.map((filter) => (\n        <Chip\n          key={filter}\n          label={filter}\n          color={selected === filter ? 'primary' : 'default'}\n          onClick={() => onChange(filter)}\n        />\n      ))}\n    </Stack>\n  )\n}` },
    ],
  },
  {
    slug: 'alert-banner',
    title: 'Alert Banner',
    description: 'A clear status message for success, warnings, errors, and important updates.',
    tags: ['Feedback', 'Accessibility', 'Status'],
    image: assetPath('previews/feedback.svg'),
    category: 'Feedback',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-alert/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['notification', 'success message', 'warning', 'error state', 'dismissible'],
    guide: { whatItDoes: 'Communicates success, information, warnings, or errors without interrupting the user flow.', howToUse: 'Choose a severity and provide a short title and message at the point where feedback is needed.', importantCode: ['The severity union type prevents unsupported values.', 'Props keep the message content separate from the alert layout.', 'AlertTitle gives the message a clear visual hierarchy.'] },
    files: [
      { name: 'AlertBanner.tsx', language: 'tsx', code: `import { Alert, AlertTitle } from '@mui/material'\n\ntype AlertBannerProps = {\n  severity: 'success' | 'info' | 'warning' | 'error'\n  title: string\n  message: string\n}\n\nexport function AlertBanner({ severity, title, message }: AlertBannerProps) {\n  return (\n    <Alert severity={severity}>\n      <AlertTitle>{title}</AlertTitle>\n      {message}\n    </Alert>\n  )\n}` },
      { name: 'App.tsx', language: 'tsx', code: `<AlertBanner\n  severity="success"\n  title="Saved successfully"\n  message="Your changes are now live."\n/>` },
    ],
  },
  {
    slug: 'faq-accordion',
    title: 'FAQ Accordion',
    description: 'Expandable questions that keep help content tidy and easy to scan.',
    tags: ['Accordion', 'Content', 'Responsive'],
    image: assetPath('previews/faq.svg'),
    category: 'Content',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-accordion/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['frequently asked questions', 'expandable', 'help centre', 'documentation', 'disclosure'],
    guide: { whatItDoes: 'Shows questions and answers in expandable sections so users can scan help content quickly.', howToUse: 'Replace the questions array with content from your product or pass it in as a prop when the data changes.', importantCode: ['The question and answer objects keep content separate from layout.', 'map creates a consistent Accordion for each question.', 'AccordionSummary is the visible control and AccordionDetails contains the revealed answer.'] },
    files: [
      { name: 'FaqAccordion.tsx', language: 'tsx', code: `import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'\n\ntype FaqItem = {\n  question: string\n  answer: string\n}\n\ntype FaqAccordionProps = {\n  items: FaqItem[]\n}\n\nexport function FaqAccordion({ items }: FaqAccordionProps) {\n  return items.map((item) => (\n    <Accordion key={item.question}>\n      <AccordionSummary expandIcon="⌄">\n        <Typography sx={{ fontWeight: 700 }}>{item.question}</Typography>\n      </AccordionSummary>\n      <AccordionDetails>{item.answer}</AccordionDetails>\n    </Accordion>\n  ))\n}` },
    ],
  },
  {
    slug: 'pricing-card',
    title: 'Pricing Card',
    description: 'A plan comparison card with a clear price, feature list, and call to action.',
    tags: ['Card', 'Call to action', 'Plans'],
    image: assetPath('previews/pricing.svg'),
    category: 'Cards',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-card/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['subscription', 'product pricing', 'feature list', 'CTA', 'comparison'],
    guide: { whatItDoes: 'Summarises a product plan with its price, benefits, and primary action.', howToUse: 'Render one card for each plan and pass a different name, price, and features array to each one.', importantCode: ['features is an array so the list is data-driven.', 'featured is optional, allowing the highlighted style to be turned on only when needed.', 'The action remains the same component while the plan content changes through props.'] },
    files: [
      { name: 'PricingCard.tsx', language: 'tsx', code: `import { Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'\n\ntype PricingCardProps = {\n  name: string\n  price: string\n  features: string[]\n  featured?: boolean\n  onChoose: () => void\n}\n\nexport function PricingCard({ name, price, features, featured, onChoose }: PricingCardProps) {\n  return (\n    <Card variant={featured ? 'elevation' : 'outlined'}>\n      <CardContent>\n        {featured && <Chip label="Most popular" color="primary" />}\n        <Typography variant="h5" sx={{ mt: 2 }}>{name}</Typography>\n        <Typography variant="h3" sx={{ my: 2 }}>{price}</Typography>\n        <Stack spacing={1} sx={{ mb: 3 }}>\n          {features.map((feature) => <Typography key={feature}>✓ {feature}</Typography>)}\n        </Stack>\n        <Button variant="contained" fullWidth onClick={onChoose}>Choose plan</Button>\n      </CardContent>\n    </Card>\n  )\n}` },
    ],
  },
  {
    slug: 'sign-in-form',
    title: 'Sign-in Form',
    description: 'A focused sign-in form with validation-friendly fields and a clear action.',
    tags: ['Form', 'Inputs', 'Authentication'],
    image: assetPath('previews/sign-in.svg'),
    category: 'Forms',
    status: 'Needs testing',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-text-field/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['login', 'authentication', 'email', 'password', 'validation'],
    guide: { whatItDoes: 'Collects the two values commonly needed to start an authentication request.', howToUse: 'Place it on a sign-in page and connect the form submit handler to your authentication service.', importantCode: ['type="email" gives the browser an appropriate input mode.', 'type="password" keeps the password hidden while typing.', 'The form should be connected to validation and a backend before being used in production.'] },
    files: [
      { name: 'SignInForm.tsx', language: 'tsx', code: `import { Button, Stack, TextField, Typography } from '@mui/material'\n\ntype SignInFormProps = {\n  onSubmit: (values: { email: string; password: string }) => void\n}\n\nexport function SignInForm({ onSubmit }: SignInFormProps) {\n  return (\n    <Stack component="form" spacing={2} sx={{ maxWidth: 420 }} onSubmit={(event) => {\n      event.preventDefault()\n      const form = new FormData(event.currentTarget)\n      onSubmit({ email: String(form.get('email')), password: String(form.get('password')) })\n    }}>\n      <Typography variant="h4">Sign in</Typography>\n      <TextField name="email" label="Email address" type="email" required />\n      <TextField name="password" label="Password" type="password" required />\n      <Button type="submit" variant="contained" size="large">Sign in</Button>\n    </Stack>\n  )\n}` },
      { name: 'App.tsx', language: 'tsx', code: `import { SignInForm } from './SignInForm'\n\nexport function LoginPage() {\n  return <SignInForm onSubmit={(values) => console.log('Sign in', values)} />\n}` },
    ],
  },
  {
    slug: 'loading-button',
    title: 'Loading Button',
    description: 'A button that communicates progress while an action is being completed.',
    tags: ['Button', 'Feedback', 'Async'],
    image: assetPath('previews/loading-button.svg'),
    category: 'Feedback',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-button/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['submit', 'loading state', 'async action', 'progress'],
    guide: { whatItDoes: 'Shows that an asynchronous action is still running and prevents duplicate submissions.', howToUse: 'Pass loading from the parent that owns the request state and switch it off when the request finishes.', importantCode: ['The loading prop makes the component controlled by its parent.', 'disabled prevents repeated clicks.', 'CircularProgress replaces the label without changing the button size.'] },
    files: [{ name: 'LoadingButton.tsx', language: 'tsx', code: `import { Button, CircularProgress } from '@mui/material'\n\ntype LoadingButtonProps = {\n  loading: boolean\n  label: string\n  onClick: () => void\n}\n\nexport function LoadingButton({ loading, label, onClick }: LoadingButtonProps) {\n  return (\n    <Button variant="contained" disabled={loading} onClick={onClick}>\n      {loading ? <CircularProgress size={20} color="inherit" aria-label="Loading" /> : label}\n    </Button>\n  )\n}` }],
  },
  {
    slug: 'profile-menu',
    title: 'Profile Menu',
    description: 'A compact account menu for profile actions, settings, and signing out.',
    tags: ['Menu', 'Account', 'Navigation'],
    image: assetPath('previews/profile-menu.svg'),
    category: 'Navigation',
    status: 'Experimental',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-menu/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['account', 'avatar', 'settings', 'user menu'],
    guide: { whatItDoes: 'Groups account actions such as viewing a profile, changing settings, and signing out.', howToUse: 'Place the avatar in your header and replace the example menu items with actions from your application.', importantCode: ['anchor stores the element that opened the menu.', 'Boolean(anchor) determines whether the menu is open.', 'onClose clears the anchor and closes the menu.'] },
    files: [{ name: 'ProfileMenu.tsx', language: 'tsx', code: `import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'\nimport { useState } from 'react'\n\ntype ProfileAction = {\n  label: string\n  onSelect: () => void\n}\n\ntype ProfileMenuProps = {\n  initials: string\n  actions: ProfileAction[]\n}\n\nexport function ProfileMenu({ initials, actions }: ProfileMenuProps) {\n  const [anchor, setAnchor] = useState<null | HTMLElement>(null)\n  return (\n    <>\n      <IconButton aria-label="Open profile menu" onClick={(event) => setAnchor(event.currentTarget)}>\n        <Avatar>{initials}</Avatar>\n      </IconButton>\n      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>\n        {actions.map((action) => <MenuItem key={action.label} onClick={() => { action.onSelect(); setAnchor(null) }}>{action.label}</MenuItem>)}\n      </Menu>\n    </>\n  )\n}` }],
  },
  {
    slug: 'data-table',
    title: 'Data Table',
    description: 'A structured table for presenting rows of data with clear headings.',
    tags: ['Table', 'Data', 'Responsive'],
    image: assetPath('previews/data-table.svg'),
    category: 'Data display',
    status: 'Needs testing',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-table/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['rows', 'columns', 'dashboard', 'records', 'status'],
    guide: { whatItDoes: 'Displays records in rows and columns so related values can be compared quickly.', howToUse: 'Replace rows with data from your application and add TableCell elements for the columns your users need.', importantCode: ['rows is separate from the table structure.', 'map converts each record into a TableRow.', 'A stable row key helps React update the correct record.'] },
    files: [{ name: 'DataTable.tsx', language: 'tsx', code: `import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'\n\ntype DataRow = {\n  id: string\n  name: string\n  status: string\n}\n\ntype DataTableProps = {\n  rows: DataRow[]\n}\n\nexport function DataTable({ rows }: DataTableProps) {\n  return (\n    <Paper sx={{ overflowX: 'auto' }}>\n      <Table>\n        <TableHead><TableRow><TableCell>Name</TableCell><TableCell>Status</TableCell></TableRow></TableHead>\n        <TableBody>{rows.map((row) => <TableRow key={row.id}><TableCell>{row.name}</TableCell><TableCell>{row.status}</TableCell></TableRow>)}</TableBody>\n      </Table>\n    </Paper>\n  )\n}` }],
  },
  {
    slug: 'breadcrumbs',
    title: 'Breadcrumbs',
    description: 'A compact way to show where a user is within a page hierarchy.',
    tags: ['Navigation', 'Hierarchy', 'Links'],
    image: assetPath('previews/breadcrumbs.svg'),
    category: 'Navigation',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-breadcrumbs/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['current page', 'nested routes', 'navigation trail', 'links'],
    guide: { whatItDoes: 'Shows the user where they are inside a nested page or route hierarchy.', howToUse: 'Pass the page path in order and make every item except the current page navigate to its parent location.', importantCode: ['slice removes the current page from the links.', 'at(-1) selects the current page label.', 'The current page is Typography rather than a link.'] },
    files: [{ name: 'Breadcrumbs.tsx', language: 'tsx', code: `import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material'\n\ntype BreadcrumbItem = {\n  label: string\n  href: string\n}\n\ntype BreadcrumbsProps = {\n  items: BreadcrumbItem[]\n}\n\nexport function Breadcrumbs({ items }: BreadcrumbsProps) {\n  return (\n    <MuiBreadcrumbs aria-label="Breadcrumb">\n      {items.slice(0, -1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}\n      <Typography color="text.primary">{items.at(-1)?.label}</Typography>\n    </MuiBreadcrumbs>\n  )\n}` }],
  },
  {
    slug: 'search-field',
    title: 'Search Field',
    description: 'A focused search input for finding items in a collection.',
    tags: ['Search', 'Input', 'Filtering'],
    image: assetPath('previews/search-field.svg'),
    category: 'Inputs',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-text-field/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['query', 'search results', 'filtering', 'text input'],
    guide: { whatItDoes: 'Collects a search query that can be used to narrow a list of content.', howToUse: 'Keep the query in the parent or connect the change handler to the filtering function for your collection.', importantCode: ['value and onChange make the input controlled.', 'useState stores the current query.', 'InputAdornment adds a visual search cue without changing the input value.'] },
    files: [{ name: 'SearchField.tsx', language: 'tsx', code: `import { InputAdornment, TextField } from '@mui/material'\n\ntype SearchFieldProps = {\n  value: string\n  onChange: (value: string) => void\n}\n\nexport function SearchField({ value, onChange }: SearchFieldProps) {\n  return (\n    <TextField\n      label="Search components"\n      value={value}\n      onChange={(event) => onChange(event.target.value)}\n      placeholder="Search components"\n      slotProps={{ input: { startAdornment: <InputAdornment position="start">⌕</InputAdornment> } }}\n    />\n  )\n}` }],
  },
  {
    slug: 'empty-state',
    title: 'Empty State',
    description: 'A helpful message for pages and searches that have no content yet.',
    tags: ['Feedback', 'Content', 'Call to action'],
    image: assetPath('previews/empty-state.svg'),
    category: 'Feedback',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-paper/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['no results', 'first use', 'guidance', 'action', 'helpful feedback'],
    guide: { whatItDoes: 'Explains why a page has no content and gives the user a useful next action.', howToUse: 'Render it when a collection is empty or a search produces no matches, passing a message that fits the situation.', importantCode: ['Props make the title, message, and action reusable.', 'children are not needed because the component has a focused content contract.', 'Stack handles the vertical spacing and alignment consistently.'] },
    files: [{ name: 'EmptyState.tsx', language: 'tsx', code: `import { Button, Stack, Typography } from '@mui/material'\n\ntype EmptyStateProps = {\n  title: string\n  message: string\n  action: string\n  onAction: () => void\n}\n\nexport function EmptyState({ title, message, action, onAction }: EmptyStateProps) {\n  return (\n    <Stack sx={{ alignItems: 'center', spacing: 2, py: 8, textAlign: 'center' }}>\n      <Typography variant="h5">{title}</Typography>\n      <Typography color="text.secondary">{message}</Typography>\n      <Button variant="contained" onClick={onAction}>{action}</Button>\n    </Stack>\n  )\n}` }],
  },
  {
    slug: 'confirmation-dialog',
    title: 'Confirmation Dialog',
    description: 'A focused decision prompt for actions that need confirmation before continuing.',
    tags: ['Dialog', 'Confirmation', 'Actions'],
    image: assetPath('previews/confirmation-dialog.svg'),
    category: 'Feedback',
    status: 'Needs testing',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-dialog/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['confirm', 'modal', 'destructive action', 'cancel', 'submit'],
    guide: {
      whatItDoes: 'Pauses an important action and asks the user to confirm or cancel it.',
      howToUse: 'Keep the open state in the parent and provide callbacks for the cancel and confirm actions.',
      importantCode: ['open controls whether the dialog is visible.', 'onClose handles dismissing the dialog.', 'Actions are explicit buttons so the user understands the consequence.'],
    },
    files: [{
      name: 'ConfirmationDialog.tsx',
      language: 'tsx',
      code: `import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

type ConfirmationDialogProps = {
  open: boolean
  title: string
  message: string
  onCancel: () => void
  onConfirm: () => void
}

export function ConfirmationDialog({ open, title, message, onCancel, onConfirm }: ConfirmationDialogProps) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onConfirm} variant="contained">Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}`,
    }],
  },
  {
    slug: 'tab-navigation',
    title: 'Tab Navigation',
    description: 'A compact way to switch between related views without leaving the page.',
    tags: ['Tabs', 'Navigation', 'Views'],
    image: assetPath('previews/tab-navigation.svg'),
    category: 'Navigation',
    status: 'Experimental',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-tabs/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['sections', 'active view', 'switching', 'dashboard', 'navigation'],
    guide: {
      whatItDoes: 'Lets users switch between related sections while keeping the surrounding page context.',
      howToUse: 'Store the active tab in state and render the matching content below the tab list.',
      importantCode: ['value identifies the active tab.', 'onChange updates state when a user selects another tab.', 'Tab labels should describe the content users will see.'],
    },
    files: [{
      name: 'TabNavigation.tsx',
      language: 'tsx',
      code: `import { Box, Tab, Tabs, Typography } from '@mui/material'

type TabNavigationProps = {
  views: string[]
  selected: number
  onChange: (nextValue: number) => void
}

export function TabNavigation({ views, selected, onChange }: TabNavigationProps) {

  return (
    <Box>
      <Tabs value={selected} onChange={(_, nextValue) => onChange(nextValue)}>
        {views.map((view) => <Tab key={view} label={view} />)}
      </Tabs>
      <Typography sx={{ p: 3 }}>Showing {views[selected]}</Typography>
    </Box>
  )
}`,
    }],
  },
  {
    slug: 'snackbar-notification',
    title: 'Snackbar Notification',
    description: 'A brief, non-blocking message that confirms an action or reports a result.',
    tags: ['Snackbar', 'Feedback', 'Notification'],
    image: assetPath('previews/snackbar-notification.svg'),
    category: 'Feedback',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-snackbar/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['toast', 'success', 'dismissible', 'temporary message'],
    guide: {
      whatItDoes: 'Shows a short-lived message near the edge of the screen without interrupting the current task.',
      howToUse: 'Keep the open state and message in the parent, then open the Snackbar after an action completes.',
      importantCode: ['open controls whether the notification is visible.', 'autoHideDuration removes it after a set period.', 'onClose lets the parent clear the notification state.'],
    },
    files: [{
      name: 'SnackbarNotification.tsx',
      language: 'tsx',
      code: `import { Alert, Snackbar } from '@mui/material'

type SnackbarNotificationProps = {
  open: boolean
  message: string
  onClose: () => void
}

export function SnackbarNotification({ open, message, onClose }: SnackbarNotificationProps) {
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
      <Alert onClose={onClose} severity="success" variant="filled">
        {message}
      </Alert>
    </Snackbar>
  )
}`,
    }],
  },
  {
    slug: 'form-stepper',
    title: 'Form Stepper',
    description: 'A clear progress indicator for forms and workflows split across multiple steps.',
    tags: ['Stepper', 'Forms', 'Progress'],
    image: assetPath('previews/form-stepper.svg'),
    category: 'Forms',
    status: 'Needs testing',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-stepper/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['multi-step form', 'progress', 'wizard', 'checkout', 'workflow'],
    guide: {
      whatItDoes: 'Shows progress through a sequence of related steps, such as onboarding or checkout.',
      howToUse: 'Store the active step in state and render the fields or content that belong to that step.',
      importantCode: ['activeStep identifies the current step.', 'Stepper renders the sequence from the steps array.', 'StepLabel gives each position a readable name.'],
    },
    files: [{
      name: 'FormStepper.tsx',
      language: 'tsx',
      code: `import { Step, StepLabel, Stepper } from '@mui/material'

type FormStepperProps = {
  steps: string[]
  activeStep: number
  onChange: (nextStep: number) => void
}

export function FormStepper({ steps, activeStep, onChange }: FormStepperProps) {

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step key={step} onClick={() => onChange(index)}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}`,
    }],
  },
  {
    slug: 'image-upload',
    title: 'Image Upload',
    description: 'A simple file input that gives users a clear way to choose an image.',
    tags: ['Upload', 'Form', 'Files'],
    image: assetPath('previews/image-upload.svg'),
    category: 'Forms',
    status: 'Needs testing',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-button/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['file input', 'preview', 'avatar', 'media', 'validation'],
    guide: {
      whatItDoes: 'Provides a styled control for selecting an image file from the user’s device.',
      howToUse: 'Use the selected File object to create a preview or send it to your upload endpoint.',
      importantCode: ['accept limits the picker to image files.', 'The change event provides the selected File object.', 'The browser input should be validated before uploading.'],
    },
    files: [{
      name: 'ImageUpload.tsx',
      language: 'tsx',
      code: `import { Button, Stack, Typography } from '@mui/material'

type ImageUploadProps = {
  onFileSelect: (file: File | undefined) => void
}

export function ImageUpload({ onFileSelect }: ImageUploadProps) {

  return (
    <Stack spacing={2}>
      <Button component="label" variant="outlined">
        Choose image
        <input
          hidden
          type="file"
          accept="image/*"
          onChange={(event) => onFileSelect(event.target.files?.[0])}
        />
      </Button>
      <Typography color="text.secondary">Choose an image to send it to your upload handler.</Typography>
    </Stack>
  )
}`,
    }],
  },
  {
    slug: 'list-item',
    title: 'List Item',
    description: 'A reusable row for displaying a title, supporting detail, and an optional action.',
    tags: ['List', 'Content', 'Actions'],
    image: assetPath('previews/list-item.svg'),
    category: 'Data display',
    status: 'Stable',
    version: '1.0.0',
    lastUpdated: '2026-09-05',
    documentationUrl: 'https://mui.com/material-ui/react-list/',
    languages: ['TypeScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['row', 'collection', 'avatar', 'secondary text', 'action'],
    guide: {
      whatItDoes: 'Presents one item in a collection with a predictable layout and an optional trailing action.',
      howToUse: 'Render it repeatedly from an array of records and pass the content for each row as props.',
      importantCode: ['ListItemText separates the primary and secondary content.', 'ListItemAvatar gives every row a consistent visual anchor.', 'ListItemSecondaryAction keeps actions aligned at the end of the row.'],
    },
    files: [{
      name: 'ListItem.tsx',
      language: 'tsx',
      code: `import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@mui/material'

type ListItemProps = {
  title: string
  detail: string
  onOpen: () => void
}

export function CollectionListItem({ title, detail, onOpen }: ListItemProps) {
  return (
    <ListItem>
      <ListItemAvatar><Avatar>{title[0]}</Avatar></ListItemAvatar>
      <ListItemText primary={title} secondary={detail} />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={onOpen} aria-label={\`Open \${title}\`}>→</IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}`,
    }],
  },
]

export function getComponentBySlug(slug: string) {
  return componentCatalog.find((component) => component.slug === slug)
}
