import { HeaderInfos } from './components'
import KinvoLogo from '../../assets/logo.svg'
import { AppBar, Stack, Toolbar } from '@mui/material'
import { MenuOptions } from './components/MenuOptions'

export const Header: React.FC = () => {

  return (
    <AppBar
      position='sticky'
      sx={{
        zIndex: 200,
        width: '100vw',
        boxShadow: '0px 0px 10px rgba(0,0,0,.2)'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: { xs: 65, lg: 85 },
          justifyContent: 'space-between',
          // backgroundColor: 'primary.main',
        }}
      >
        <Stack height='40%'>
          <img
            src={KinvoLogo}
            alt='imagem de perfil'
            style={{ height: '100%' }}
          />
        </Stack>
        <Stack direction='row'>
          <HeaderInfos />
          <MenuOptions />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
