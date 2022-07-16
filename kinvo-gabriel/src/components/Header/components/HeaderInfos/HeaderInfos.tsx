import { Box, Stack, Typography } from '@mui/material'
import MovingIcon from '@mui/icons-material/Moving'
import { useApiDataStore } from '../../../../store/apiData'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export const HeaderInfos: React.FC = () => {

  const { storeState: { currentData } } = useApiDataStore()

  const INFOS = [
    {
      label: 'SALDO BRUTO',
      icon: <AttachMoneyIcon color='primary' />,
      value: currentData?.snapshotByPortfolio.equity
    },
    {
      label: 'VALOR APLICADO',
      icon: <ArrowUpwardIcon color='primary' />,
      value: currentData?.snapshotByPortfolio.valueApplied
    },
    {
      label: 'RENTABILIDADE',
      icon: <MovingIcon color='primary' />,
      value: `${currentData?.snapshotByPortfolio.percentageProfit}%`
    },
  ]

  return (
    <Stack direction='row'>
      {INFOS.map((item, index) => (
        <Stack key={index} mr={4} direction='row'>
          <Stack sx={{
            mr: 1,
            width:'35px',
            height:'35px',
            bgcolor:'grey.50',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {item.icon}
          </Stack>
          <Stack>
            <Typography color='grey.100' variant='text8'>{item.label}</Typography>
            <Box sx={{ fontWeight: 700 }} component='span' color='grey.100'>{item.value}</Box>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}
