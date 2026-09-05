import { useMemo, useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material'
import { HashRouter, Link as RouterLink, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { CodeBlock } from './components/CodeBlock'
import type { ComponentItem } from './types'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`

const components: ComponentItem[] = [
  {
    slug: 'project-card',
    title: 'Project Card',
    description: 'A flexible card for showing a project, its stack, and useful links.',
    tags: ['React', 'TypeScript', 'Material UI'],
    image: assetPath('previews/project-card.svg'),
    category: 'Cards',
    languages: ['TypeScript', 'JavaScript', 'Python'],
    technologies: ['React', 'Material UI', 'Flask'],
    keywords: ['responsive', 'project showcase', 'tags', 'image', 'links'],
    setup: [
      'Create a Card component and decide which information it should accept as props.',
      'Use CardMedia for the preview image, then CardContent for the title, description, and tags.',
      'Wrap the card in CardActionArea when the entire preview should be clickable.',
    ],
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
    languages: ['TypeScript', 'JavaScript', 'Python'],
    technologies: ['React', 'Material UI', 'Flask'],
    keywords: ['header', 'responsive navigation', 'routing', 'mobile menu', 'links'],
    setup: [
      'Add an AppBar at the top of your page and place your brand inside a Toolbar.',
      'Use a small-screen menu button and show your full navigation links on larger screens.',
      'Connect each link to a route so users can move through your website.',
    ],
    files: [
      { name: 'NavigationBar.tsx', language: 'tsx', code: `import { AppBar, Button, Toolbar, Typography } from '@mui/material'\n\nexport function NavigationBar() {\n  return (\n    <AppBar position="static">\n      <Toolbar>\n        <Typography sx={{ flexGrow: 1 }}>My website</Typography>\n        <Button color="inherit">Home</Button>\n        <Button color="inherit">About</Button>\n      </Toolbar>\n    </AppBar>\n  )\n}` },
      { name: 'App.tsx', language: 'tsx', code: `<NavigationBar />\n<main>Your page content goes here.</main>` },
    ],
  },
  {
    slug: 'filter-chips',
    title: 'Filter Chips',
    description: 'Small controls that let people quickly filter a collection of content.',
    tags: ['Chips', 'State', 'Filtering'],
    image: assetPath('previews/filter-chips.svg'),
    category: 'Inputs',
    languages: ['TypeScript', 'JavaScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['filtering', 'selection', 'state', 'categories', 'interactive'],
    setup: [
      'Keep the selected category in React state with useState.',
      'Render one Chip for each available category and style the selected item.',
      'Filter the component data before rendering the grid.',
    ],
    files: [
      { name: 'FilterChips.tsx', language: 'tsx', code: `import { Chip, Stack } from '@mui/material'\nimport { useState } from 'react'\n\nexport function FilterChips() {\n  const [selected, setSelected] = useState('All')\n  const filters = ['All', 'Cards', 'Navigation']\n\n  return (\n    <Stack direction="row" spacing={1}>\n      {filters.map((filter) => (\n        <Chip\n          key={filter}\n          label={filter}\n          color={selected === filter ? 'primary' : 'default'}\n          onClick={() => setSelected(filter)}\n        />\n      ))}\n    </Stack>\n  )\n}` },
    ],
  },
  {
    slug: 'alert-banner',
    title: 'Alert Banner',
    description: 'A clear status message for success, warnings, errors, and important updates.',
    tags: ['Feedback', 'Accessibility', 'Status'],
    image: assetPath('previews/feedback.svg'),
    category: 'Feedback',
    languages: ['TypeScript', 'JavaScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['notification', 'success message', 'warning', 'error state', 'dismissible'],
    setup: [
      'Choose an Alert severity that matches the meaning of the message.',
      'Keep the message short and make the action clear for the user.',
      'Add an accessible close button when the message can be dismissed.',
    ],
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
    languages: ['TypeScript', 'JavaScript', 'Python'],
    technologies: ['React', 'Material UI', 'Django'],
    keywords: ['frequently asked questions', 'expandable', 'help centre', 'documentation', 'disclosure'],
    setup: [
      'Store each question and answer as an item in an array.',
      'Render an Accordion for every item and use AccordionSummary for the question.',
      'Keep answers concise, with links to more detailed documentation when needed.',
    ],
    files: [
      { name: 'FaqAccordion.tsx', language: 'tsx', code: `import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'\n\nconst questions = [\n  { question: 'What is this?', answer: 'A reusable FAQ component.' },\n  { question: 'Can I customise it?', answer: 'Yes, pass your own questions and answers.' },\n]\n\nexport function FaqAccordion() {\n  return questions.map((item) => (\n    <Accordion key={item.question}>\n      <AccordionSummary expandIcon="⌄">\n        <Typography fontWeight={700}>{item.question}</Typography>\n      </AccordionSummary>\n      <AccordionDetails>{item.answer}</AccordionDetails>\n    </Accordion>\n  ))\n}` },
    ],
  },
  {
    slug: 'pricing-card',
    title: 'Pricing Card',
    description: 'A plan comparison card with a clear price, feature list, and call to action.',
    tags: ['Card', 'Call to action', 'Plans'],
    image: assetPath('previews/pricing.svg'),
    category: 'Cards',
    languages: ['TypeScript', 'JavaScript', 'Python'],
    technologies: ['React', 'Material UI', 'Django', 'Flask'],
    keywords: ['subscription', 'product pricing', 'feature list', 'CTA', 'comparison'],
    setup: [
      'Create a plan object containing the name, price, features, and action label.',
      'Use CardContent to keep the plan information grouped and easy to compare.',
      'Make the primary plan visually distinct, but keep every action accessible.',
    ],
    files: [
      { name: 'PricingCard.tsx', language: 'tsx', code: `import { Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'\n\ntype PricingCardProps = {\n  name: string\n  price: string\n  features: string[]\n  featured?: boolean\n}\n\nexport function PricingCard({ name, price, features, featured }: PricingCardProps) {\n  return (\n    <Card variant={featured ? 'elevation' : 'outlined'}>\n      <CardContent>\n        {featured && <Chip label="Most popular" color="primary" />}\n        <Typography variant="h5" sx={{ mt: 2 }}>{name}</Typography>\n        <Typography variant="h3" sx={{ my: 2 }}>{price}</Typography>\n        <Stack spacing={1} sx={{ mb: 3 }}>\n          {features.map((feature) => <Typography key={feature}>✓ {feature}</Typography>)}\n        </Stack>\n        <Button variant="contained" fullWidth>Choose plan</Button>\n      </CardContent>\n    </Card>\n  )\n}` },
    ],
  },
  {
    slug: 'sign-in-form',
    title: 'Sign-in Form',
    description: 'A focused sign-in form with validation-friendly fields and a clear action.',
    tags: ['Form', 'Inputs', 'Authentication'],
    image: assetPath('previews/sign-in.svg'),
    category: 'Forms',
    languages: ['TypeScript', 'JavaScript', 'Python'],
    technologies: ['React', 'Material UI', 'Django', 'Flask'],
    keywords: ['login', 'authentication', 'email', 'password', 'validation'],
    setup: [
      'Create controlled fields for the email and password values.',
      'Validate the fields before sending credentials to your backend.',
      'Show a useful error message without revealing sensitive authentication details.',
    ],
    files: [
      { name: 'SignInForm.tsx', language: 'tsx', code: `import { Button, Stack, TextField, Typography } from '@mui/material'\n\nexport function SignInForm() {\n  return (\n    <Stack component="form" spacing={2} sx={{ maxWidth: 420 }}>\n      <Typography variant="h4">Sign in</Typography>\n      <TextField label="Email address" type="email" required />\n      <TextField label="Password" type="password" required />\n      <Button type="submit" variant="contained" size="large">Sign in</Button>\n    </Stack>\n  )\n}` },
      { name: 'App.tsx', language: 'tsx', code: `<SignInForm />` },
    ],
  },
  {
    slug: 'loading-button',
    title: 'Loading Button',
    description: 'A button that communicates progress while an action is being completed.',
    tags: ['Button', 'Feedback', 'Async'],
    image: assetPath('previews/loading-button.svg'),
    category: 'Feedback',
    languages: ['TypeScript', 'JavaScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['submit', 'loading state', 'async action', 'progress'],
    setup: ['Track whether the action is running with a loading state.', 'Disable the button while the request is in progress.', 'Restore the button after the request succeeds or fails.'],
    files: [{ name: 'LoadingButton.tsx', language: 'tsx', code: `import { Button, CircularProgress } from '@mui/material'\n\nexport function LoadingButton({ loading }: { loading: boolean }) {\n  return (\n    <Button variant="contained" disabled={loading}>\n      {loading ? <CircularProgress size={20} color="inherit" /> : 'Save changes'}\n    </Button>\n  )\n}` }],
  },
  {
    slug: 'profile-menu',
    title: 'Profile Menu',
    description: 'A compact account menu for profile actions, settings, and signing out.',
    tags: ['Menu', 'Account', 'Navigation'],
    image: assetPath('previews/profile-menu.svg'),
    category: 'Navigation',
    languages: ['TypeScript', 'JavaScript'],
    technologies: ['React', 'Material UI'],
    keywords: ['account', 'avatar', 'settings', 'user menu'],
    setup: ['Use an IconButton or Avatar as the menu trigger.', 'Anchor the Menu to the trigger so it works across screen sizes.', 'Keep account actions short and easy to scan.'],
    files: [{ name: 'ProfileMenu.tsx', language: 'tsx', code: `import { Avatar, Menu, MenuItem } from '@mui/material'\nimport { useState } from 'react'\n\nexport function ProfileMenu() {\n  const [anchor, setAnchor] = useState<null | HTMLElement>(null)\n  return (\n    <>\n      <Avatar onClick={(event) => setAnchor(event.currentTarget)}>JD</Avatar>\n      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>\n        <MenuItem>Profile</MenuItem>\n        <MenuItem>Settings</MenuItem>\n        <MenuItem>Sign out</MenuItem>\n      </Menu>\n    </>\n  )\n}` }],
  },
  {
    slug: 'data-table',
    title: 'Data Table',
    description: 'A structured table for presenting rows of data with clear headings.',
    tags: ['Table', 'Data', 'Responsive'],
    image: assetPath('previews/data-table.svg'),
    category: 'Data display',
    languages: ['TypeScript', 'JavaScript', 'Python'],
    technologies: ['React', 'Material UI', 'Django', 'Flask'],
    keywords: ['rows', 'columns', 'dashboard', 'records', 'status'],
    setup: ['Define the table columns and row data separately.', 'Use a stable key for every row.', 'On small screens, allow horizontal scrolling rather than shrinking text too far.'],
    files: [{ name: 'DataTable.tsx', language: 'tsx', code: `import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'\n\nexport function DataTable() {\n  const rows = [{ name: 'Project Card', status: 'Ready' }, { name: 'FAQ', status: 'Draft' }]\n  return (\n    <Paper sx={{ overflowX: 'auto' }}>\n      <Table>\n        <TableHead><TableRow><TableCell>Name</TableCell><TableCell>Status</TableCell></TableRow></TableHead>\n        <TableBody>{rows.map((row) => <TableRow key={row.name}><TableCell>{row.name}</TableCell><TableCell>{row.status}</TableCell></TableRow>)}</TableBody>\n      </Table>\n    </Paper>\n  )\n}` }],
  },
]

const theme = createTheme({
  palette: {
    primary: { main: '#6750a4' },
    background: { default: '#faf8ff', paper: '#ffffff' },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.04em' },
    h2: { fontWeight: 800, letterSpacing: '-0.03em' },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
})

function Header({ onMenu }: { onMenu: () => void }) {
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #ebe7f2', bgcolor: 'rgba(250,248,255,.9)', backdropFilter: 'blur(12px)' }}>
      <Toolbar sx={{ maxWidth: 1180, width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <IconButton onClick={onMenu} sx={{ display: { md: 'none' }, mr: 1 }} aria-label="Open navigation" aria-haspopup="true">
          <Box component="span" sx={{ fontSize: 24, lineHeight: 1 }}>☰</Box>
        </IconButton>
        <Typography component={RouterLink} to="/" variant="h6" sx={{ textDecoration: 'none', color: 'text.primary', fontWeight: 900, mr: 5 }}>
          <Box component="span" sx={{ color: 'primary.main' }}>re</Box>use
        </Typography>
        <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link component={RouterLink} to="/" underline="none" color="text.primary" sx={{ fontWeight: 700 }}>Components</Link>
          <Link href="#about" underline="none" color="text.secondary">About</Link>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Button component={Link} href="https://github.com" target="_blank" startIcon="◇" color="inherit" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
          GitHub
        </Button>
      </Toolbar>
    </AppBar>
  )
}

function ComponentCard({ item }: { item: ComponentItem }) {
  return (
    <Card elevation={0} sx={{ height: '100%', border: '1px solid #e7e1f0', transition: 'transform .2s, box-shadow .2s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 14px 30px rgba(61, 38, 91, .12)' } }}>
      <CardActionArea component={RouterLink} to={`/components/${item.slug}`} sx={{ height: '100%', display: 'flex', alignItems: 'stretch', flexDirection: 'column' }}>
        <Box component="img" src={item.image} alt={`${item.title} preview`} sx={{ width: '100%', height: 210, objectFit: 'cover', objectPosition: 'top', bgcolor: '#17151c' }} />
        <CardContent sx={{ p: 3, flexGrow: 1 }}>
          <Typography variant="overline" color="primary.main" sx={{ fontWeight: 800 }}>{item.category}</Typography>
          <Typography variant="h5" sx={{ mt: .5, mb: 1, fontWeight: 800 }}>{item.title}</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>{item.description}</Typography>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {item.tags.map((tag) => <Chip key={tag} label={tag} size="small" variant="outlined" />)}
          </Stack>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: .75, mt: 1.5 }}>
            {item.languages.map((language) => <Chip key={language} label={language} size="small" color="primary" variant="outlined" />)}
            {item.technologies.map((technology) => <Chip key={technology} label={technology} size="small" variant="outlined" />)}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

function Gallery() {
  const [language, setLanguage] = useState('All languages')
  const [technology, setTechnology] = useState('All technologies')
  const [category, setCategory] = useState('All categories')
  const languages = ['All languages', ...new Set(components.flatMap((item) => item.languages))]
  const technologies = ['All technologies', ...new Set(components.flatMap((item) => item.technologies))]
  const categories = ['All categories', ...new Set(components.map((item) => item.category))]
  const visible = useMemo(() => components.filter((item) =>
    (language === 'All languages' || item.languages.includes(language)) &&
    (technology === 'All technologies' || item.technologies.includes(technology)) &&
    (category === 'All categories' || item.category === category),
  ), [category, language, technology])

  return (
    <>
      <Box sx={{ bgcolor: '#eee9fa', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="primary.main" sx={{ fontWeight: 900, letterSpacing: '.14em' }}>A growing collection</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, maxWidth: 760, mt: 1, mb: 2 }}>Reusable components, ready to use.</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 630, fontWeight: 400, lineHeight: 1.6 }}>
            Browse practical React and Material UI components. Open any card to see how it works and copy the setup into your next project.
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: 2, mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>Browse components</Typography>
          <Typography color="text.secondary">Choose the language and tools you are using.</Typography>
        </Stack>
        <Stack spacing={2} sx={{ mb: 5 }}>
          <FilterGroup label="Language" options={languages} value={language} onChange={setLanguage} />
          <FilterGroup label="Framework / library" options={technologies} value={technology} onChange={setTechnology} />
          <FilterGroup label="Component type" options={categories} value={category} onChange={setCategory} />
        </Stack>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
          {visible.map((item) => <ComponentCard key={item.slug} item={item} />)}
        </Box>
        {visible.length === 0 && <Typography color="text.secondary" sx={{ py: 6, textAlign: 'center' }}>No components match those filters yet.</Typography>}
      </Container>
    </>
  )
}

function FilterGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 1, alignItems: { sm: 'center' } }}>
      <Typography sx={{ minWidth: 150, fontWeight: 700 }}>{label}</Typography>
      <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
        {options.map((option) => <Chip key={option} label={option} onClick={() => onChange(option)} color={value === option ? 'primary' : 'default'} variant={value === option ? 'filled' : 'outlined'} />)}
      </Stack>
    </Stack>
  )
}

function DetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const item = components.find((component) => component.slug === slug)
  if (!item) return <Container sx={{ py: 10 }}><Typography variant="h3">Component not found</Typography></Container>

  return (
    <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
      <Button startIcon="←" onClick={() => navigate('/')} sx={{ mb: 5 }}>Back to components</Button>
      <Typography variant="overline" component="div" color="primary.main" sx={{ fontWeight: 900, textAlign: 'left' }}>{item.category}</Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, mt: 1 }}>{item.title}</Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mt: 2, mb: 4, fontWeight: 400 }}>{item.description}</Typography>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>How to set it up</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>Follow these steps to add this component to your own TypeScript and Material UI project.</Typography>
      <Stack spacing={2}>
        {item.setup.map((step, index) => (
          <Stack key={step} direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
            <Box sx={{ minWidth: 34, height: 34, borderRadius: '50%', bgcolor: 'primary.main', color: 'white', display: 'grid', placeItems: 'center', fontWeight: 800 }}>{index + 1}</Box>
            <Typography sx={{ pt: .5, lineHeight: 1.7 }}>{step}</Typography>
          </Stack>
        ))}
      </Stack>
      <Divider sx={{ my: 6 }} />
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Code</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>Copy each file into your project. Some components need more than one file to work.</Typography>
      <Stack spacing={3}>
        {item.files.map((file) => <CodeBlock key={file.name} file={file} />)}
      </Stack>
      <Button variant="contained" href="https://mui.com/material-ui/" target="_blank" sx={{ mt: 4 }}>Read the Material UI docs ↗</Button>
    </Container>
  )
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Header onMenu={() => setDrawerOpen(true)} />
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 260, p: 2 }} role="presentation">
            <Typography variant="h6" sx={{ fontWeight: 900, p: 2 }}><Box component="span" color="primary.main">re</Box>use</Typography>
            <List>
              <ListItemButton component={RouterLink} to="/" onClick={() => setDrawerOpen(false)}>
                <ListItemText primary="Components" secondary="Browse the library" />
              </ListItemButton>
              <ListItemButton component="a" href="#about" onClick={() => setDrawerOpen(false)}>
                <ListItemText primary="About" secondary="What is reuse?" />
              </ListItemButton>
              <ListItemButton component="a" href="https://github.com" target="_blank" rel="noreferrer" onClick={() => setDrawerOpen(false)}>
                <ListItemText primary="GitHub" secondary="View the source" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/components/:slug" element={<DetailPage />} />
        </Routes>
        <Box component="footer" id="about" sx={{ borderTop: '1px solid #ebe7f2', py: 4, mt: 4 }}>
          <Container maxWidth="lg"><Typography color="text.secondary">Built for learning, sharing, and reusing great UI.</Typography></Container>
        </Box>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
