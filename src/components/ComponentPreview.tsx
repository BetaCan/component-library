import { useState } from 'react'
import type { ReactElement } from 'react'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material'
import type { ComponentItem } from '../types'

type PreviewComponent = ({ title }: { title: string }) => ReactElement

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

function AlertPreview() {
  const [visible, setVisible] = useState(true)
  return visible
    ? <Alert severity="success" onClose={() => setVisible(false)}>Your changes were saved.</Alert>
    : <Button onClick={() => setVisible(true)}>Show message again</Button>
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

const previews: Record<string, PreviewComponent> = {
  'project-card': ProjectCardPreview,
  'filter-chips': FilterPreview,
  'alert-banner': AlertPreview,
  'confirmation-dialog': DialogPreview,
  'tab-navigation': TabsPreview,
  'search-field': SearchPreview,
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
