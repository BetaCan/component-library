import { useState } from 'react'
import type { ReactElement } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Alert,
  Avatar,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Snackbar,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import type { ComponentItem } from '../types'

type PreviewComponent = ({ title }: { title: string }) => ReactElement
type PreviewRegistry = Record<ComponentItem['slug'], PreviewComponent | undefined>

function ProjectCardPreview({ title }: { title: string }) {
  return (
    <Card sx={{ maxWidth: 420, mx: 'auto' }}>
      <Box component="img" src={`${import.meta.env.BASE_URL}previews/project-card.svg`} alt="" sx={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }} />
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>{title}</Typography>
        <Typography color="text.secondary">A reusable project card with descriptive content.</Typography>
        <Stack direction="row" sx={{ gap: 1, mt: 2, flexWrap: 'wrap' }}>
          <Chip label="TypeScript" size="small" />
          <Chip label="Material UI" size="small" />
        </Stack>
      </CardContent>
    </Card>
  )
}

function NavigationPreview() {
  const [selected, setSelected] = useState('Home')
  const links = ['Home', 'Projects', 'About']

  return (
    <AppBar position="static" color="primary" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800 }}>Acme</Typography>
        <Stack direction="row" sx={{ gap: 0.5 }}>
          {links.map((link) => (
            <Button
              key={link}
              color="inherit"
              aria-current={selected === link ? 'page' : undefined}
              onClick={() => setSelected(link)}
              sx={{ fontWeight: selected === link ? 800 : 400 }}
            >
              {link}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

function FilterPreview() {
  const [selected, setSelected] = useState('All')
  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <Typography sx={{ fontWeight: 700 }}>Choose a category</Typography>
      <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
        {['All', 'Cards', 'Forms'].map((option) => (
          <Chip
            key={option}
            label={option}
            color={selected === option ? 'primary' : 'default'}
            variant={selected === option ? 'filled' : 'outlined'}
            onClick={() => setSelected(option)}
          />
        ))}
      </Stack>
      <Typography color="text.secondary">Showing {selected} components</Typography>
    </Stack>
  )
}

function FaqPreview() {
  const [expanded, setExpanded] = useState<string | false>('question-0')
  const questions = [
    ['How do I get started?', 'Choose a component, copy its usage example, and customise the props for your product.'],
    ['Can I use these components with my theme?', 'Yes. Each preview uses standard Material UI components and follows the active theme.'],
    ['Are the examples accessible?', 'The examples use labelled controls, semantic structure, and keyboard-friendly Material UI primitives.'],
  ]

  return (
    <Stack sx={{ width: '100%' }}>
      {questions.map(([question, answer], index) => {
        const id = `question-${index}`
        return (
          <Accordion
            key={id}
            expanded={expanded === id}
            onChange={(_, isExpanded) => setExpanded(isExpanded ? id : false)}
          >
            <AccordionSummary expandIcon="⌄" aria-controls={`${id}-content`} id={`${id}-header`}>
              <Typography sx={{ fontWeight: 700 }}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`${id}-content`}>
              <Typography color="text.secondary">{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </Stack>
  )
}

function PricingPreview({ title }: { title: string }) {
  const [selected, setSelected] = useState(false)

  return (
    <Card variant="outlined" sx={{ width: '100%', maxWidth: 360 }}>
      <CardContent>
        <Stack sx={{ gap: 2 }}>
          <Chip label="Most popular" color="primary" sx={{ alignSelf: 'flex-start' }} />
          <Typography variant="h5" sx={{ fontWeight: 800 }}>{title}</Typography>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>$19<Typography component="span" variant="body1" color="text.secondary"> / month</Typography></Typography>
          <Stack component="ul" sx={{ gap: 1, m: 0, pl: 2.5 }}>
            {['Unlimited projects', 'Priority support', 'Advanced analytics'].map((feature) => (
              <Typography component="li" key={feature}>{feature}</Typography>
            ))}
          </Stack>
          <Button variant="contained" onClick={() => setSelected(true)} disabled={selected}>
            {selected ? 'Plan selected' : 'Choose plan'}
          </Button>
          {selected && <Alert severity="success">Pro plan selected.</Alert>}
        </Stack>
      </CardContent>
    </Card>
  )
}

function SignInPreview() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <Stack
      component="form"
      spacing={2}
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
      sx={{ width: '100%', maxWidth: 380 }}
    >
      <Typography variant="h5" sx={{ fontWeight: 800 }}>Sign in</Typography>
      <TextField
        label="Email address"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" size="large">Sign in</Button>
      {submitted && <Alert severity="success">Sign-in details ready to submit.</Alert>}
    </Stack>
  )
}

function LoadingPreview() {
  const [loading, setLoading] = useState(false)
  const [complete, setComplete] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setComplete(false)
    window.setTimeout(() => {
      setLoading(false)
      setComplete(true)
    }, 900)
  }

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <Button variant="contained" disabled={loading} onClick={handleClick}>
        {loading ? <CircularProgress size={20} color="inherit" aria-label="Saving" /> : 'Save changes'}
      </Button>
      {complete && <Alert severity="success">Changes saved.</Alert>}
    </Stack>
  )
}

function ProfileMenuPreview() {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  const [action, setAction] = useState('')

  const closeMenu = (nextAction?: string) => {
    setAnchor(null)
    if (nextAction) setAction(nextAction)
  }

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <IconButton
        aria-label="Open profile menu"
        aria-controls={anchor ? 'profile-preview-menu' : undefined}
        aria-haspopup="menu"
        aria-expanded={anchor ? 'true' : undefined}
        onClick={(event) => setAnchor(event.currentTarget)}
      >
        <Avatar sx={{ bgcolor: 'secondary.main' }}>JD</Avatar>
      </IconButton>
      <Menu
        id="profile-preview-menu"
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => closeMenu()}
      >
        {['Profile', 'Settings', 'Sign out'].map((item) => (
          <MenuItem key={item} onClick={() => closeMenu(item)}>{item}</MenuItem>
        ))}
      </Menu>
      {action && <Typography color="text.secondary">{action} selected</Typography>}
    </Stack>
  )
}

function DataTablePreview() {
  const rows = [
    { name: 'Project Card', owner: 'Maya', status: 'Ready' },
    { name: 'FAQ Accordion', owner: 'Jordan', status: 'Draft' },
    { name: 'Search Field', owner: 'Sam', status: 'Ready' },
  ]

  return (
    <TableContainer component={Paper} sx={{ width: '100%' }}>
      <Table aria-label="Component status">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 800 }}>Component</TableCell>
            <TableCell sx={{ fontWeight: 800 }}>Owner</TableCell>
            <TableCell sx={{ fontWeight: 800 }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell><Chip label={row.status} color={row.status === 'Ready' ? 'success' : 'default'} size="small" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function BreadcrumbsPreview() {
  const [current, setCurrent] = useState('Components')
  const items = ['Home', 'Library', 'Components']
  const currentIndex = items.indexOf(current)

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <MuiBreadcrumbs aria-label="Breadcrumb">
        {items.slice(0, currentIndex).map((item) => (
          <Link
            key={item}
            href="#"
            onClick={(event) => {
              event.preventDefault()
              setCurrent(item)
            }}
          >
            {item}
          </Link>
        ))}
        <Typography color="text.primary">{current}</Typography>
      </MuiBreadcrumbs>
      <Typography color="text.secondary">Viewing {current}</Typography>
    </Stack>
  )
}

function AlertPreview() {
  const [visible, setVisible] = useState(true)
  return visible
    ? <Alert severity="success" onClose={() => setVisible(false)}>Your changes were saved.</Alert>
    : <Button onClick={() => setVisible(true)}>Show message again</Button>
}

function EmptyStatePreview({ title }: { title: string }) {
  const [created, setCreated] = useState(false)

  return created
    ? <Alert severity="success">Your first project is ready to configure.</Alert>
    : (
      <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>{title}</Typography>
        <Typography color="text.secondary">Create a project to organise your work and invite your team.</Typography>
        <Button variant="contained" onClick={() => setCreated(true)}>Create project</Button>
      </Stack>
    )
}

function SnackbarPreview() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>Save settings</Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Settings saved"
        action={<Button color="inherit" size="small" onClick={() => setOpen(false)}>Dismiss</Button>}
      />
    </>
  )
}

function StepperPreview() {
  const steps = ['Account', 'Preferences', 'Complete']
  const [activeStep, setActiveStep] = useState(0)
  const isComplete = activeStep === steps.length

  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => <Step key={step}><StepLabel>{step}</StepLabel></Step>)}
      </Stepper>
      {isComplete ? (
        <Alert severity="success">Setup complete.</Alert>
      ) : (
        <Typography color="text.secondary">Step {activeStep + 1}: {steps[activeStep]} details</Typography>
      )}
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Button disabled={activeStep === 0 || isComplete} onClick={() => setActiveStep((step) => step - 1)}>Back</Button>
        <Button
          variant="contained"
          onClick={() => setActiveStep((step) => step + 1)}
          disabled={isComplete}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
        </Button>
      </Stack>
      {isComplete && <Button onClick={() => setActiveStep(0)}>Start over</Button>}
    </Stack>
  )
}

function ImageUploadPreview() {
  const [fileName, setFileName] = useState('')

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <Button component="label" variant="outlined">
        Choose image
        <input
          hidden
          type="file"
          accept="image/*"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
        />
      </Button>
      <Typography color="text.secondary">
        {fileName || 'PNG, JPG, or GIF up to 10 MB'}
      </Typography>
      {fileName && <Button size="small" onClick={() => setFileName('')}>Remove selection</Button>}
    </Stack>
  )
}

function ListItemPreview({ title }: { title: string }) {
  const [selected, setSelected] = useState(false)

  return (
    <Stack spacing={2} sx={{ width: '100%', maxWidth: 420 }}>
      <List sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 2, p: 0 }}>
        <ListItemButton selected={selected} onClick={() => setSelected((value) => !value)}>
          <ListItemText
            primary={title}
            secondary="Updated today · 8 collaborators"
            slotProps={{ primary: { sx: { fontWeight: 700 } } }}
          />
          <Chip label={selected ? 'Selected' : 'Open'} color={selected ? 'primary' : 'default'} size="small" />
        </ListItemButton>
      </List>
      <Typography color="text.secondary">{selected ? 'Project selected' : 'Select the item to continue'}</Typography>
    </Stack>
  )
}

function DialogPreview() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>Delete project</Button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="preview-dialog-title">
        <DialogTitle id="preview-dialog-title">Delete this project?</DialogTitle>
        <DialogContent>This action cannot be undone.</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} color="error" variant="contained">Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

function TabsPreview() {
  const [selected, setSelected] = useState(0)
  const views = ['Overview', 'Activity', 'Settings']
  return (
    <Box>
      <Tabs value={selected} onChange={(_, value: number) => setSelected(value)} aria-label="Preview sections">
        {views.map((view) => <Tab key={view} label={view} />)}
      </Tabs>
      <Typography sx={{ p: 3 }}>Showing {views[selected]}</Typography>
    </Box>
  )
}

function SearchPreview() {
  const [query, setQuery] = useState('')
  return (
    <TextField
      fullWidth
      label="Search components"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      helperText={query ? `Searching for “${query}”` : 'Type to search'}
    />
  )
}

const previews: PreviewRegistry = {
  'project-card': ProjectCardPreview,
  'navigation-bar': NavigationPreview,
  'filter-chips': FilterPreview,
  'alert-banner': AlertPreview,
  'faq-accordion': FaqPreview,
  'pricing-card': PricingPreview,
  'sign-in-form': SignInPreview,
  'loading-button': LoadingPreview,
  'profile-menu': ProfileMenuPreview,
  'data-table': DataTablePreview,
  breadcrumbs: BreadcrumbsPreview,
  'confirmation-dialog': DialogPreview,
  'search-field': SearchPreview,
  'empty-state': EmptyStatePreview,
  'snackbar-notification': SnackbarPreview,
  'form-stepper': StepperPreview,
  'image-upload': ImageUploadPreview,
  'list-item': ListItemPreview,
  'tab-navigation': TabsPreview,
}

export function ComponentPreview({ item }: { item: ComponentItem }) {
  const Preview = previews[item.slug]

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, bgcolor: 'white', border: '1px solid #e7e1f0', borderRadius: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>Interactive preview</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Try this example before copying the code.
      </Typography>
      {Preview ? (
        <Box sx={{ minHeight: 150, display: 'grid', placeItems: 'center' }}>
          <Preview title={item.title} />
        </Box>
      ) : (
        <Stack spacing={1} sx={{ alignItems: 'center', py: 4 }}>
          <Typography sx={{ fontWeight: 700 }}>Preview coming soon</Typography>
          <Typography color="text.secondary">The implementation and usage code are available below.</Typography>
        </Stack>
      )}
    </Box>
  )
}
