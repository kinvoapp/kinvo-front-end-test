import { Stack, Typography } from '@mui/material'
import { SidebarMenuItemProps } from '../..'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'

interface SidebarItemProps {
  menuItem: SidebarMenuItemProps
}

export const SidebarMenuItem: React.FC<SidebarItemProps> = ({ menuItem }) => {
  return (
    <Stack
      p={2}
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      borderBottom='1px solid rgba(218, 224, 227, .5)'
      bgcolor={menuItem.currentSelected ? 'rgba(218, 224, 227, .4)' : '#FFF'}
      sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'rgba(218, 224, 227, .4)' } }}
    >
      <Stack alignItems='center' direction='row'>
        <Stack
          width='50px'
          height='50px'
          borderRadius='50%'
          alignItems='center'
          justifyContent='center'
          bgcolor={menuItem.currentSelected ? 'primary.main' : 'grey.50'}
        >
          {menuItem.icon}
        </Stack>
        <Typography pl={2} width='40%' color='grey.300' variant='text5'>{menuItem.label}</Typography>
      </Stack>
      <ChevronRightOutlinedIcon sx={{ color: '#627179' }} />
    </Stack>
  )
}
