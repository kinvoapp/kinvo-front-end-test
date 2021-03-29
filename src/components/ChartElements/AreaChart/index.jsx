import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Container } from './styles';

function AreaChart(props) {
  const { data, label, title } = props;
  return (
    <Container>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          title: {
            text: title
          },
          xAxis: {
            type: 'datetime'
          },
          series: [{
            name: 'LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)',
            data: [
              [1586524210000, 0.03],
              [1586610610000, 0.06],
              [1586697010000, 0.08],
              [1586869810000, 0.11],
              [1586956210000, 0.14],
              [1587129010000, 0.17],
              [1587215410000, 0.19],
              [1587301810000, 0.22],
              [1587388210000, 0.25],
              [1587561010000, 0.28],
            ],
            marker: {
              enabled: false
            }
          }]
        }}
      />
    </Container>
  )
}

export default AreaChart;