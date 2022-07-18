import { formatToRealStr } from '../../../../../../utils/format'
import { Box, Card, Divider, Stack, Typography } from '@mui/material'

export interface InfoBoxProps {
  label: string
  value: number
  isPercentageValue?: boolean
}

export const InfoBox: React.FC<InfoBoxProps> = ({ label, value, isPercentageValue }) => {
  return (
    <Card
      elevation={2}
      sx={{
        padding: 2,
        borderRadius: 3,
        cursor: 'pointer',
        maxHeight: '100px',
        '&:hover': { boxShadow: 3 }
      }}
    >
      <Stack height='100%' direction='row' alignItems='center'>
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
          <Typography mb={1} variant='text3' color='grey.200'>{label}</Typography>
          {isPercentageValue ? (
            <Box sx={{ fontWeight: 700 }} component='span' color='primary.main'>{value}%</Box>
          ) : (
            <Box sx={{ fontWeight: 700 }} component='span' color='primary.main'>{formatToRealStr(value)}</Box>
          )}
        </Stack>
      </Stack>
    </Card>
  )
}
