import { Chip, Stack, Typography } from '@mui/material'

type FilterGroupProps = {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

export function FilterGroup({ label, options, value, onChange }: FilterGroupProps) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 1, alignItems: { sm: 'center' } }}>
      <Typography sx={{ minWidth: 150, fontWeight: 700 }}>{label}</Typography>
      <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
        {options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => onChange(option)}
            color={value === option ? 'primary' : 'default'}
            variant={value === option ? 'filled' : 'outlined'}
          />
        ))}
      </Stack>
    </Stack>
  )
}
