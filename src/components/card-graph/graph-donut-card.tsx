import React, { useEffect } from 'react'
import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = (data1?: any, data2?: any) => ({
  title: {
    text: 'Rentabilidade dos titulos'
  },
  chart: {
    type: 'pie'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar']
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
      data: [29.9, 71.5, 106.4],
      innerSize: '50%',
      fillColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          [0, 'rgba(0, 10, 255, 1)'],
          [1, '#fff']
        ]
      }
    }
  ]
})
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
const ChartDonut: React.FC = () => {
  useEffect(() => {
    console.log('First log')
  }, [])
  return (
    <Card>
      <HighChartWrapper highcharts={Highcharts} options={options()} />
    </Card>
  )
}
export default ChartDonut
