import { Chip } from '@mui/material'
import type { ComponentItem } from '../types'

const statusColors = {
  Stable: 'success',
  Experimental: 'warning',
  'Needs testing': 'default',
} as const

export function ComponentStatus({ status }: { status: ComponentItem['status'] }) {
  return <Chip label={status} color={statusColors[status]} size="small" variant="outlined" />
}
