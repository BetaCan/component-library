import { InputAdornment, TextField } from '@mui/material'

type ComponentSearchProps = {
  value: string
  onChange: (value: string) => void
  resultCount: number
}

export function ComponentSearch({ value, onChange, resultCount }: ComponentSearchProps) {
  return (
    <TextField
      fullWidth
      label="Search the library"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Try card, form, navigation, loading..."
      helperText={`${resultCount} ${resultCount === 1 ? 'component' : 'components'} found`}
      slotProps={{ input: { startAdornment: <InputAdornment position="start">⌕</InputAdornment> } }}
      sx={{ '& .MuiFormHelperText-root': { ml: 0 } }}
    />
  )
}
