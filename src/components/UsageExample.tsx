import { Typography } from '@mui/material'
import { CodeBlock } from './CodeBlock'
import type { ComponentFile } from '../types'

export function UsageExample({ file }: { file: ComponentFile }) {
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Example usage</Typography>
      <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
        Import the component into another file and pass the values it needs as props.
      </Typography>
      <CodeBlock file={file} />
    </>
  )
}
