import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Container } from './styles';

function AreaChart(props) {
  const { data, label, title } = props;
  const quotaInit = 100;

  function calculate(correctedQuota) {
    const percentage = (correctedQuota - quotaInit)*100/quotaInit;
    return Number(percentage.toFixed(2));
  }

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