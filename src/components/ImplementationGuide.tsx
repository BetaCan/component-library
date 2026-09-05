import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import type { ComponentItem, ComponentProp } from '../types'

type ImplementationGuideProps = {
  item: ComponentItem
  props: ComponentProp[]
}

export function ImplementationGuide({ item, props }: ImplementationGuideProps) {
  const implementationFile = item.files[0]
  const usageFileName = item.files.find((file) => file.name === 'App.tsx')?.name ?? 'your page file'
  const hasCustomProps = props.length > 0
  const steps = [
    `Create ${implementationFile.name} inside src/components/.`,
    `Copy the ${implementationFile.name} implementation from the Code section into that file.`,
    `Import the component into ${usageFileName === 'your page file' ? 'the page where you want to use it' : usageFileName}.`,
    hasCustomProps
      ? `Pass the documented ${props.map((prop) => prop.name).join(', ')} prop${props.length === 1 ? '' : 's'} with values from your application.`
      : 'Replace the internal sample values with your own content when you are ready to make the example data-driven.',
    'Run the page and adjust the example content or styles to fit your application.',
  ]

  return (
    <Stack spacing={3}>
      <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Before you start</Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          These examples are written for a React and TypeScript project using Material UI.
        </Typography>
        <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {item.technologies.map((technology) => <Chip key={technology} label={technology} size="small" />)}
          {item.languages.map((language) => <Chip key={language} label={language} size="small" variant="outlined" />)}
        </Stack>
        <Typography component="pre" sx={{ m: 0, p: 2, overflowX: 'auto', bgcolor: '#211b2b', color: '#f8f5ff', borderRadius: 1, fontFamily: 'monospace', fontSize: '.85rem' }}>
          npm install @mui/material @emotion/react @emotion/styled
        </Typography>
      </Paper>

      <Box>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>How to add it</Typography>
        <Stack spacing={1.5}>
          {steps.map((step, index) => (
            <Stack key={step} direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
              <Box sx={{ minWidth: 30, height: 30, borderRadius: '50%', bgcolor: 'primary.main', color: 'white', display: 'grid', placeItems: 'center', fontWeight: 800 }}>
                {index + 1}
              </Box>
              <Typography sx={{ pt: .35, lineHeight: 1.6 }}>{step}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Box>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>File placement</Typography>
        <Typography color="text.secondary">
          Copy the implementation to <Box component="code" sx={{ fontFamily: 'monospace' }}>src/components/{implementationFile.name}</Box>.
          The usage example belongs in your page or feature file, such as <Box component="code" sx={{ fontFamily: 'monospace' }}>{usageFileName}</Box>.
        </Typography>
      </Box>
    </Stack>
  )
}
