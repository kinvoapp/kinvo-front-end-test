import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Container } from './styles';

function AreaChart(props) {
  const { data, title } = props;

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
          series: data
        }}
      />
    </Container>
  )
}

export default AreaChart;