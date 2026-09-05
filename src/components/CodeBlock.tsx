import { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import type { ComponentFile } from '../types'

export function CodeBlock({ file }: { file: ComponentFile }) {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(file.code)
      setCopyError(false)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
      setCopyError(true)
    }
  }

  return (
    <Box sx={{ overflow: 'hidden', borderRadius: 2, bgcolor: '#211d2b', color: '#f4efff' }}>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', px: 2, py: 1, bgcolor: '#302a3d' }}>
        <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#ddd2f4' }}>
          {file.name}
        </Typography>
        <Button size="small" onClick={copyCode} sx={{ color: 'white' }} aria-label={`Copy ${file.name}`}>
          {copied ? 'Copied!' : 'Copy code'}
        </Button>
      </Stack>
      {copyError && (
        <Typography role="alert" variant="caption" sx={{ display: 'block', px: 2, py: 1, bgcolor: '#5b2630', color: '#ffd9de' }}>
          Copying was blocked. Select the code and copy it manually.
        </Typography>
      )}
      <Box component="pre" sx={{ m: 0, p: 2, overflowX: 'auto', fontSize: 13, lineHeight: 1.7, fontFamily: 'ui-monospace, Consolas, monospace' }}>
        <code>{file.code}</code>
      </Box>
    </Box>
  )
}
