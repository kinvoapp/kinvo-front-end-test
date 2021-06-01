import React, { useEffect } from 'react'
import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'Rentabilidade dos titulos'
  },
  chart: {
    type: 'areaspline'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
  },
  plotOptions: {
    line: {
      lineWidth: 1,
      enableMouseTracking: false,
      crisp: false
    }
  },
  series: [
    {
      data: [
        29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4
      ],

      fillColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          [0, 'rgba(0, 10, 255, 1)'],
          [1, '#fff']
        ]
      }
    },
    {
      data: [
        120.9, 71.5, 106.4, 2.2, 2.0, 2.0, 135.6, 148.5, 216.4, 194.1, 900.6,
        54.4
      ],

      fillColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          [0, '#8b008b'],
          [1, '#fff']
        ]
      }
    }
  ]
}
/*
  Componentes style
*/
const HighChartWrapper = styled(HighchartsReact)`
  .highcharts-plot-border {
    fill: black !important;
  }
`

export const Card = styled.header`
  border-radius: 10px;
  height: 400px;
  background-color: ${p => p.theme.colors.white};
  align-items: center;
  box-shadow: 0px 2px 6px #0000000a;
  border-radius: 10px;
`

/*
  MAIN
  @TEX
*/
const MicroCard: React.FC = () => {
  useEffect(() => {
    console.log('First log')
  }, [])
  return (
    <Card>
      <HighChartWrapper highcharts={Highcharts} options={options} />
    </Card>
  )
}
export default MicroCard
