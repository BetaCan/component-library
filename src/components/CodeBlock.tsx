import { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import type { ComponentFile } from '../types'

export function CodeBlock({ file }: { file: ComponentFile }) {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(file.code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <Box sx={{ overflow: 'hidden', borderRadius: 2, bgcolor: '#211d2b', color: '#f4efff' }}>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', px: 2, py: 1, bgcolor: '#302a3d' }}>
        <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#ddd2f4' }}>
          {file.name}
        </Typography>
        <Button size="small" onClick={copyCode} sx={{ color: 'white' }}>
          {copied ? 'Copied!' : 'Copy code'}
        </Button>
      </Stack>
      <Box component="pre" sx={{ m: 0, p: 2, overflowX: 'auto', fontSize: 13, lineHeight: 1.7, fontFamily: 'ui-monospace, Consolas, monospace' }}>
        <code>{file.code}</code>
      </Box>
    </Box>
  )
}
