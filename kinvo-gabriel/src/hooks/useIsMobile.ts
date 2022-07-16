import { useMediaQuery } from '@mui/material'

export const useIsMobile = () => {
  return useMediaQuery('@media (max-width:1199.95px)')
}
