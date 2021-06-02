import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useState } from 'react';
import { ChartContainer } from './ChartRentability.styles';

interface ChartRentabilityProps {
  chartData: Array<{}>;
};

const ChartRentability = (props: ChartRentabilityProps) => {
  const { chartData } = props;
  const [sortedArray, setSortedArray] = useState<Array<any>>([]);

  const handleSortCharArray = async (arr: Array<any>) => {
    const groupProductName = arr.reduce((acc, cur)=>{
      if(acc[cur.productName]){
        acc[cur.productName].data = [...acc[cur.productName].data, cur.correctedQuota]
        return acc;
      }
      acc[cur.productName] = {
        name: cur.productName,
        data: [cur.correctedQuota],
      }
      return acc;
    },{});

    const sorted = Object.values(groupProductName);
    setSortedArray(sorted);
  }

  const options = {
    title: {
      text: '',
    },
    chart: {
      type: 'areaspline'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      min:0.5,
      max:10.5,
      tickInterval:1,
      maxPadding:0,
      endOnTick:false,
      startOnTick:false
      
    },
    
    yAxis: {
      allowDecimals: false,
      gridLineWidth: 0,
      title: {
          text: ''
      },

    },
    plotOptions: {
      areaspline: {
        line: {
          enable: false,
        },
      }
    },
    series: sortedArray,
  }

  useEffect(() => {
    handleSortCharArray(chartData);
  }, [chartData])

  return (
    <ChartContainer>
      <p>Rentabilidade dos Títulos</p>
      <HighchartsReact highcharts={Highcharts} options={options}/>
    </ChartContainer>
  );
}

export default ChartRentability;