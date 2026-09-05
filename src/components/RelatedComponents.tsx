import { Card, CardActionArea, CardContent, Chip, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import type { ComponentItem } from '../types'
import { ComponentStatus } from './ComponentStatus'

function relevanceScore(source: ComponentItem, candidate: ComponentItem) {
  const sharedKeywords = candidate.keywords.filter((keyword) => source.keywords.includes(keyword)).length
  const sharedTechnologies = candidate.technologies.filter((technology) => source.technologies.includes(technology)).length
  const sameCategory = source.category === candidate.category ? 1 : 0
  return sharedKeywords + sharedTechnologies + sameCategory
}

export function RelatedComponents({ current, items }: { current: ComponentItem; items: ComponentItem[] }) {
  const related = items
    .filter((item) => item.slug !== current.slug)
    .sort((first, second) => relevanceScore(current, second) - relevanceScore(current, first))
    .slice(0, 3)

  return (
    <section aria-labelledby="related-components-heading">
      <Typography id="related-components-heading" variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
        Related components
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        {related.map((item) => (
          <Card key={item.slug} variant="outlined" sx={{ flex: 1 }}>
            <CardActionArea component={RouterLink} to={`/components/${item.slug}`} sx={{ height: '100%' }}>
              <CardContent>
                <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1, mb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>{item.title}</Typography>
                  <ComponentStatus status={item.status} />
                </Stack>
                <Typography color="text.secondary" variant="body2" sx={{ mb: 1.5 }}>{item.description}</Typography>
                <Stack direction="row" sx={{ gap: .75, flexWrap: 'wrap' }}>
                  {item.technologies.slice(0, 2).map((technology) => <Chip key={technology} label={technology} size="small" />)}
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </section>
  )
}
