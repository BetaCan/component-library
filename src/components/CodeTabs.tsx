import { useState } from 'react'
import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material'
import { CodeBlock } from './CodeBlock'
import type { ComponentFile } from '../types'

type CodeTabsProps = {
  implementationFiles: ComponentFile[]
  usageFile?: ComponentFile
  optionalFiles?: ComponentFile[]
}

type CodeTab = {
  label: string
  files: ComponentFile[]
}

export function CodeTabs({ implementationFiles, usageFile, optionalFiles = [] }: CodeTabsProps) {
  const tabs: CodeTab[] = [
    { label: 'Implementation', files: implementationFiles },
    ...(usageFile ? [{ label: 'Example usage', files: [usageFile] }] : []),
    ...(optionalFiles.length > 0 ? [{ label: 'Helpers / styles', files: optionalFiles }] : []),
  ]
  const [selectedTab, setSelectedTab] = useState(0)
  const [allFilesCopied, setAllFilesCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const currentTab = tabs[selectedTab] ?? tabs[0]
  const copyAllFiles = async () => {
    const content = tabs.flatMap((tab) => tab.files)
      .map((file) => `// ${file.name}\n\n${file.code}`)
      .join('\n\n')
    try {
      await navigator.clipboard.writeText(content)
      setCopyError(false)
      setAllFilesCopied(true)
      window.setTimeout(() => setAllFilesCopied(false), 1800)
    } catch {
      setAllFilesCopied(false)
      setCopyError(true)
    }
  }

  return (
    <Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: 2, mb: 2 }}>
        <Tabs value={selectedTab} onChange={(_, value: number) => setSelectedTab(value)} variant="scrollable" allowScrollButtonsMobile>
          {tabs.map((tab) => <Tab key={tab.label} label={tab.label} />)}
        </Tabs>
        <Button variant="outlined" size="small" onClick={copyAllFiles}>
          {allFilesCopied ? 'Copied all files!' : 'Copy all files'}
        </Button>
      </Stack>
      {copyError && (
        <Typography role="alert" color="error" sx={{ mb: 2 }}>
          Copying was blocked. Copy the files individually or select the code manually.
        </Typography>
      )}
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        {currentTab.files.length === 1 ? 'Copy this file into your project.' : 'These files work together as part of the example.'}
      </Typography>
      <Stack spacing={3}>
        {currentTab.files.map((file) => <CodeBlock key={file.name} file={file} />)}
      </Stack>
    </Box>
  )
}
