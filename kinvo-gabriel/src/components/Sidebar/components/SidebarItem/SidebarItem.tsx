import { Stack, Typography } from '@mui/material'
import { SidebarItemProps } from '../../'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'

export const SidebarItem: React.FC<{ item: SidebarItemProps }> = ({ item }) => {
  return (
    <Stack
      p={2}
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      borderBottom='1px solid rgba(218, 224, 227, .5)'
      bgcolor={item.currentSelected ? 'rgba(218, 224, 227, .4)' : '#FFF'}
      sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'rgba(218, 224, 227, .4)' } }}
    >
      <Stack alignItems='center' direction='row'>
        <Stack height='10px' width='10px' bgcolor='primary.main' borderRadius='50%' />
        <Typography color='grey.300' variant='text5' ml={1}>{item.label}</Typography>
      </Stack>
      <ChevronRightOutlinedIcon sx={{ color: '#627179' }} />
    </Stack>
  )
}
