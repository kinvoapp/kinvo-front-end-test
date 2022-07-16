import MenuIcon from '@mui/icons-material/Menu'
import { Box, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const MenuOptions: React.FC = () => {

  return (
    <Stack mr={4} direction='row'>
      <Stack sx={{
        mr: 1,
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'secondary.main',
      }}>
        <ExpandMoreIcon color='primary' />
      </Stack>
      <Stack>
        <Typography color='grey.100' variant='text8'>CARTEIRA</Typography>
        <Box sx={{ fontWeight: 700 }} component='span' color='grey.100'>Minha Carteira</Box>
      </Stack>
      <Stack ml={4} sx={{
        mr: 1,
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'secondary.main',
      }}>
        <MenuIcon color='primary' />
      </Stack>
    </Stack>
  )
}
