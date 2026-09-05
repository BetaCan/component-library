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
  Paper,
  Link,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material'
import { HashRouter, Link as RouterLink, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { CodeBlock } from './components/CodeBlock'
import { ComponentSearch } from './components/ComponentSearch'
import { FilterGroup } from './components/FilterGroup'
import { PropsTable } from './components/PropsTable'
import { TechnologyChips } from './components/TechnologyChips'
import { UsageExample } from './components/UsageExample'
import { useComponentFilters } from './hooks/useComponentFilters'
import { componentCatalog, getComponentBySlug } from './catalog/componentCatalog'
import { usageExamples } from './catalog/usageExamples'
import { propDocumentation } from './catalog/propDocumentation'

const components = componentCatalog

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

function Header() {
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #ebe7f2', bgcolor: 'rgba(250,248,255,.9)', backdropFilter: 'blur(12px)' }}>
      <Toolbar sx={{ maxWidth: 1180, width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
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

function ComponentCard({ item }: { item: (typeof componentCatalog)[number] }) {
  return (
    <Card elevation={0} sx={{ height: '100%', border: '1px solid #e7e1f0', transition: 'transform .2s, box-shadow .2s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 14px 30px rgba(61, 38, 91, .12)' } }}>
      <CardActionArea component={RouterLink} to={`/components/${item.slug}`} sx={{ height: '100%', display: 'flex', alignItems: 'stretch', flexDirection: 'column' }}>
        <Box
          component="img"
          src={item.image}
          alt={`${item.title} preview`}
          sx={{
            display: 'block',
            width: '100%',
            aspectRatio: '16 / 9',
            objectFit: 'cover',
            objectPosition: 'center',
            bgcolor: '#f7f4fc',
          }}
        />
        <CardContent sx={{ p: 3, flexGrow: 1 }}>
          <Typography variant="overline" color="primary.main" sx={{ fontWeight: 800 }}>{item.category}</Typography>
          <Typography variant="h5" sx={{ mt: .5, mb: 1, fontWeight: 800 }}>{item.title}</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>{item.description}</Typography>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {item.tags.map((tag) => <Chip key={tag} label={tag} size="small" variant="outlined" />)}
          </Stack>
          <TechnologyChips languages={item.languages} technologies={item.technologies} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

function Gallery() {
  const {
    languages,
    technologies,
    categories,
    filteredItems,
    filters,
    setSearch,
    setLanguage,
    setTechnology,
    setCategory,
  } = useComponentFilters(components)
  const hasActiveFilters = Boolean(filters.search) || filters.language !== 'All languages' || filters.technology !== 'All technologies' || filters.category !== 'All categories'

  return (
    <>
      <Box sx={{ bgcolor: '#eee9fa', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="primary.main" sx={{ fontWeight: 900, letterSpacing: '.14em' }}>A growing collection</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, maxWidth: 760, mt: 1, mb: 2 }}>Reusable components, ready to use.</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 630, fontWeight: 400, lineHeight: 1.6 }}>
            Browse practical React and Material UI components. Open any card to understand how it works and copy the code into your next project.
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: 2, mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>Browse components</Typography>
        </Stack>
        <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, mb: 5, borderColor: '#e7e1f0', bgcolor: 'rgba(255,255,255,.7)' }}>
          <Stack spacing={3}>
            <ComponentSearch value={filters.search} onChange={setSearch} resultCount={filteredItems.length} />
            <Stack spacing={2} sx={{ pt: 2, borderTop: '1px solid #eeeaf4' }}>
              <FilterGroup label="Language" options={languages} value={filters.language} onChange={setLanguage} />
              <FilterGroup label="Framework / library" options={technologies} value={filters.technology} onChange={setTechnology} />
              <FilterGroup label="Component type" options={categories} value={filters.category} onChange={setCategory} />
            </Stack>
          </Stack>
          {hasActiveFilters && (
            <Button
              size="small"
              onClick={() => {
                setSearch('')
                setLanguage('All languages')
                setTechnology('All technologies')
                setCategory('All categories')
              }}
              sx={{ mt: 2, px: 0 }}
            >
              Clear filters
            </Button>
          )}
        </Paper>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
          {filteredItems.map((item) => <ComponentCard key={item.slug} item={item} />)}
        </Box>
        {filteredItems.length === 0 && <Typography color="text.secondary" sx={{ py: 6, textAlign: 'center' }}>No components match those filters yet.</Typography>}
      </Container>
    </>
  )
}

function DetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const item = slug ? getComponentBySlug(slug) : undefined
  if (!item) return <Container sx={{ py: 10 }}><Typography variant="h3">Component not found</Typography></Container>
  const usageExample = slug ? usageExamples[slug] : undefined
  const props = slug ? propDocumentation[slug] ?? [] : []

  return (
    <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
      <Button startIcon="←" onClick={() => navigate('/')} sx={{ mb: 5 }}>Back to components</Button>
      <Typography variant="overline" component="div" color="primary.main" sx={{ fontWeight: 900, textAlign: 'left' }}>{item.category}</Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, mt: 1 }}>{item.title}</Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mt: 2, mb: 4, fontWeight: 400 }}>{item.description}</Typography>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>What it does</Typography>
      <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>{item.guide.whatItDoes}</Typography>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>How it is used</Typography>
      <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>{item.guide.howToUse}</Typography>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Important code ideas</Typography>
      <Stack spacing={1.5} sx={{ mb: 2 }}>
        {item.guide.importantCode.map((point) => (
          <Box key={point} sx={{ pl: 2, borderLeft: '3px solid', borderColor: 'primary.main' }}>
            <Typography sx={{ lineHeight: 1.7 }}>{point}</Typography>
          </Box>
        ))}
      </Stack>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, mt: 5 }}>Props</Typography>
      <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
        These are the values the component accepts from the code that calls it.
      </Typography>
      <PropsTable props={props} />
      <Divider sx={{ my: 6 }} />
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Code</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>Copy each file into your project. Some components need more than one file to work.</Typography>
      <Stack spacing={3}>
        {item.files.map((file) => <CodeBlock key={file.name} file={file} />)}
      </Stack>
      {usageExample && (
        <>
          <Divider sx={{ my: 6 }} />
          <UsageExample file={usageExample} />
        </>
      )}
      <Button variant="contained" href="https://mui.com/material-ui/" target="_blank" sx={{ mt: 4 }}>Read the Material UI docs ↗</Button>
    </Container>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Header />
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
