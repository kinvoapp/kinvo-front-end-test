import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function AreaChart(props) {
  const { data, label, title } = props;
  return (
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
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          data: data
        }],
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: '30%',
            dataLabels: {
              enabled: false,
            },
            showInLegend: true
          }
        },
      }}
    />
  )
}

export default AreaChart;