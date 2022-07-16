import { Stack, Typography } from '@mui/material'

export const Header: React.FC = () => {
  return (
    <Stack alignItems='center' padding={2} justifyContent='space-between' direction='row'>
      <Typography variant='h4' color='grey.200'>Minhas Rendas Fixas</Typography>
      <Stack direction='row' spacing={2}>
        <Stack>ordenar por</Stack>
        <Stack>pesquisar</Stack>
      </Stack>
    </Stack>
  )
}
