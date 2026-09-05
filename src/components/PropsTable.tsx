import { Chip, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import type { ComponentProp } from '../types'

export function PropsTable({ props }: { props: ComponentProp[] }) {
  if (props.length === 0) {
    return <Typography color="text.secondary">This example does not define custom props yet.</Typography>
  }

  return (
    <Paper variant="outlined" sx={{ overflowX: 'auto' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Required</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.map((item) => (
            <TableRow key={item.name}>
              <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700 }}>{item.name}</TableCell>
              <TableCell sx={{ fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{item.type}</TableCell>
              <TableCell><Chip label={item.required ? 'Yes' : 'No'} size="small" color={item.required ? 'primary' : 'default'} variant="outlined" /></TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
