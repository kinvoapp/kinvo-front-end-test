import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { DataChartSpline } from '../../pages/fixed-income/fixed-income'

interface Props {
  data: DataChartSpline[]
}

const options = (data1?: any, data2?: any) => ({
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
      data: data1,

      fillColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          [0, 'rgba(0, 10, 255, 1)'],
          [1, '#fff']
        ]
      }
    },
    {
      data: data2,

      fillColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          [0, '#8b008b'],
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
    fill: white !important;
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
const MicroCard: React.FC<Props> = ({ data }: Props) => {
  const [whitRent, setWithRent] = useState<number[]>([])
  const [whitOutRent, setWithOutRent] = useState<number[]>([])
  useEffect(() => {
    setWithRent(data.map(v => v.value))
    setWithOutRent(data.map(v => v.valueWithOutRent))
  }, [data])
  return (
    <Card>
      <HighChartWrapper
        highcharts={Highcharts}
        options={options(whitRent, whitOutRent)}
      />
    </Card>
  )
}
export default MicroCard
