import { Doughnut } from 'react-chartjs-2'
import { ChartOptions } from 'chart.js'
import { Stack, Typography, Card } from '@mui/material'
import { useApiDataStore } from '../../../../../../store/apiData'

interface GraphicByTitleProps {
  GRAPHIC_CONFIG: ChartOptions<'doughnut'>
}

export const GraphicByTitle: React.FC<GraphicByTitleProps> = ({ GRAPHIC_CONFIG }) => {

  const { storeState: { currentData } } = useApiDataStore()

  if (!currentData) return <div>loading</div>

  const WALLET_BY_TITLE_DATA = currentData?.snapshotByProduct.map(item => item.position.portfolioPercentage)
  const WALLET_BY_TITLE_DATA_LABELS = currentData?.snapshotByProduct.map(item => item.fixedIncome.name)
  const WALLET_BY_TITLE_GRAPHIC_DATA_CONFIG = {
    labels: WALLET_BY_TITLE_DATA_LABELS,
    datasets: [{
      label: '',
      data: WALLET_BY_TITLE_DATA,
      backgroundColor: [
        '#0DD1E3',
        '#FF8052',
        '#9E51BA',
      ],
      hoverOffset: 10
    }]
  }

  return (
    <Stack width='100%'>
      <Card
        elevation={2}
        sx={{
          paddingX: 2,
          width: '96%',
          height: '50vh',
          borderRadius: 3,
          justifyContent: 'center',
          paddingY: { xs: 2, lg: 4 },
        }}
      >
        <Stack
          mb={.5}
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          borderBottom='1px solid rgba(218, 224, 227, .5)'
        >
          <Typography variant='h4' color='grey.200'>Divisão de Carteira por Título</Typography>
        </Stack>
        <Doughnut data={WALLET_BY_TITLE_GRAPHIC_DATA_CONFIG} options={GRAPHIC_CONFIG} height='80%' />
      </Card>
    </Stack>
  )
}
