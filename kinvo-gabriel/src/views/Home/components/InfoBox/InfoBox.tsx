import { Box, Card, Divider, Stack, Typography } from '@mui/material'

export interface InfoBoxProps {
  label: string
  value: string | number
}

export const InfoBox: React.FC<InfoBoxProps> = ({ label, value }) => {
  return (
    <Card elevation={1} sx={{ padding: 2, borderRadius: 3, width: '250px' }}>
      <Stack height='100%' direction='row'>
        <Divider
          orientation='vertical'
          sx={{
            mr: 1.5,
            height: 45,
            alignSelf: 'center',
            '&.MuiDivider-root': { borderWidth: '2px', borderRadius: 2 }
          }}
        />
        <Stack>
          <Typography>{label}</Typography>
          <Box sx={{ fontWeight: 700 }} component='span' color='secondary.main' >{value}</Box>
        </Stack>
      </Stack>
    </Card>
  )
}
