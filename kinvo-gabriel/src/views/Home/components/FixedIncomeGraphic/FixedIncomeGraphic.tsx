import { Line } from 'react-chartjs-2'
import { ChartOptions } from 'chart.js'
import { Stack, Typography, Card } from '@mui/material'
import { useApiDataStore } from '../../../../store/apiData'

export const FixedIncomeGraphic: React.FC = () => {

  const { storeState: { currentData } } = useApiDataStore()

  let width: number, height: number, gradient: any

  const getGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
    const chartWidth = chartArea.right - chartArea.left
    const chartHeight = chartArea.bottom - chartArea.top
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
      gradient.addColorStop(1, 'rgb(14, 201, 81)')
      gradient.addColorStop(0.5, 'rgb(255, 205, 86)')
      gradient.addColorStop(0, 'rgb(255, 99, 132)')
    }
    return gradient
  }

  const DATA = currentData?.dailyEquityByPortfolioChartData.map(item => item.correctedQuota)

  const GRAPHIC_DATA_CONFIG = {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
    datasets: [{
      fill: true,
      label: 'Total',
      visible: false,
      showLine: true,
      borderWidth: 1.5,
      borderColor(context: any) {
        const chart = context.chart
        const { ctx, chartArea } = chart
        if (!chartArea) { return }
        return getGradient(ctx, chartArea)
      },
      backgroundColor: 'rgba(0, 141, 203, .3)',
      data: DATA,
      radius: 0,
      pointBackgroundColor: 'white',
      tension: .3
    }],
  }

  const GRAPHIC_CONFIG: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false },
    scales: {
      y: {
        beginAtZero: false,
      },
      x: {
        grid: {
          display: true,
          drawBorder: false,
          drawOnChartArea: false,
          drawTicks: true,
        },
        ticks: { padding: 20 },
        beginAtZero: false
      },
    },
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
          color: 'white',
          usePointStyle: true
        },
      }
    },
  }

  return (
    <Stack width='100%'>
      <Stack width='100%' alignItems='center'>
        <Card
          elevation={2}
          sx={{
            marginY: 4,
            paddingX: 4,
            width: '96%',
            height: '50vh',
            borderRadius: 3,
            justifyContent: 'center',
            paddingY: { xs: 2, lg: 4 },
          }}
        >
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h4' color='grey.200'>Rentabilidade dos títulos</Typography>
          </Stack>
          <Line data={GRAPHIC_DATA_CONFIG} options={GRAPHIC_CONFIG} height='80%' />
        </Card>
      </Stack>
    </Stack>
  )
}
