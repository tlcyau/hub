import { Box, Grid , Card, CardContent} from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <h3>Choose your adventure!</h3>
      </Grid>
      <Grid size={3}>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid size={3}>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid size={3}>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid size={3}>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
