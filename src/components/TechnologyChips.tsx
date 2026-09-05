import { Chip, Stack } from '@mui/material'

type TechnologyChipsProps = {
  languages: string[]
  technologies: string[]
}

export function TechnologyChips({ languages, technologies }: TechnologyChipsProps) {
  return (
    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: .75, mt: 1.5 }}>
      {languages.map((language) => <Chip key={language} label={language} size="small" color="primary" variant="outlined" />)}
      {technologies.map((technology) => <Chip key={technology} label={technology} size="small" variant="outlined" />)}
    </Stack>
  )
}
