import { Sidebar } from '../'
import { Header } from '../Header'
import { Home } from '../../views/Home' 
import { Grid, Stack } from '@mui/material'

export const ApplicationShell: React.FC = () => {

  return (
    <Stack
      sx={{
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Header />
      <Grid
        container
        direction='row'
        bgcolor='rgba(218, 224, 227, .3)'
      >
        <Grid
          item
          xs={2}
          bgcolor='common.white'
        >
          <Sidebar />
        </Grid>
        <Grid item xs={10} padding={2}>
          <Home />
        </Grid>
      </Grid>
    </Stack>
  )
}
