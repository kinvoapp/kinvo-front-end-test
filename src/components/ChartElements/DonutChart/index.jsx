import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Container } from './styles';

function DonutChart(props) {
  const { data, label, title } = props;
  return (
    <Container>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          title: {
            text: title
          },
          series: [{
            type: 'pie',
            name: {label},
            tooltip: {
              pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            data: data
          }],
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              innerSize: '30%',
            }
          },
        }}
      />
    </Container>
  )
}

export default DonutChart;