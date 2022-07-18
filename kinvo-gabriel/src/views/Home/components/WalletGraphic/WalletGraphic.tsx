import { Stack } from '@mui/material'
import { ChartOptions } from 'chart.js'
import { GraphicByTitle, GraphicByType } from './components'
import { useApiDataStore } from '../../../../store/apiData'

export const WalletGraphic: React.FC = () => {

  const { storeState: { currentData } } = useApiDataStore()

  if (!currentData) return <div>loading</div>

  const GRAPHIC_CONFIG: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        beginAtZero: false,
        ticks: { display: false },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: { display: false },
        beginAtZero: false
      },
    },
    plugins: {
      legend: {
        display: false
      }
    },    
  }

  return (
    <Stack my={2} direction='row' width='99%' justifyContent='space-between'>
      <Stack width='48%'>
        <GraphicByType GRAPHIC_CONFIG={GRAPHIC_CONFIG} />
      </Stack>
      <Stack width='48%'>
        <GraphicByTitle GRAPHIC_CONFIG={GRAPHIC_CONFIG} />
      </Stack>
    </Stack>
  )
}
