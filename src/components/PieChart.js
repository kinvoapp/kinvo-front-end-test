import React from 'react';
import Highcharts from 'highcharts';
import {HighchartsProvider, HighchartsChart,PieSeries,
   Chart, Tooltip} from 'react-jsx-highcharts'; 

function PieChart(props){
  const plotOptions ={
    area: {
      stacking: 'normal'
    },
    series: {
      dataLabels: {
          enabled: false
      }
    }
  };

  return(
    <HighchartsProvider Highcharts={Highcharts}>  
      <HighchartsChart plotOptions={ plotOptions }>
        <Chart type="variablepie" />
        <Tooltip padding={10} hideDelay={250} shape="square" />
        

        {/* <YAxis> */}
          <PieSeries 
            name='Tipos Rendimentos' 
            data={[{y: 2, z: 10, color: 'rgb(158,81,186)'}, 
                    {y: 3, z: 10, color: 'rgb(255,128,82)'},
                    {y: 2, z: 10, color:'rgb(13,209,227)'}
                  ]} 
            minPointSize={25}
            innerSize={'70%'}
            zMin={0}
          />
        {/* </YAxis> */}
      </HighchartsChart>
    </HighchartsProvider>
  );
}

export default PieChart;