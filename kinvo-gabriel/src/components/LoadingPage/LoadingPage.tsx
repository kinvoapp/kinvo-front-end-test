import React from 'react'
import { Stack, Typography, CircularProgress } from '@mui/material'

export const LoadingPage: React.FC = () => {

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h2' >Olá, avaliador :)</Typography>
      <Stack mt={5}>
        <CircularProgress color='success' sx={{ borderRadius: 2, height: '8px' }} />
      </Stack>
    </Stack>
  )
}
