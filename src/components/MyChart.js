import Highcharts from 'highcharts';
import { useEffect } from 'react';
import {HighchartsProvider, HighchartsChart, AreaSeries,
   Chart, Tooltip, XAxis, YAxis, Legend} from 'react-jsx-highcharts';


function MyChart(props){
  const plotOptions ={
    area: {
      // pointStart: 1,
      stacking: 'normal'
    }
  };
  
  const pointFormat = '{series.name} <br> Valor: <b>{point.y:,.0f}</b>';
  
  let categories = [];
  let nameSerie = [];
  let datas = [];
  let dailyData = props.dailyData;
  
  const colors = [
    'rgba(201,200,253, 0.5)', 
    'rgba(172,222,254)', 
    'rgba(248,250,251, 0.5)'
  ];
  
    
  props.dailyData.forEach( data => {
    console.log('entrou no foreach');
    if(!nameSerie.includes(data.productName)){
      nameSerie.push(data.productName);
    }
      
    let date = new Date(data.dailyReferenceDate)
    // let categorie = date.getDate();
    if(!categories.includes(date)) {
      categories.push(date);
    } 
  });

  nameSerie.forEach( name => {
    let obj = { name: name, serie: [] }
    props.dailyData.map(data => {
      if(data.productName === name){
        obj.serie.push(data.value);
      } 
    })
    datas.push(obj);
  });

  console.log('DatasFiltered: ', datas);
    
    
  return(
  <HighchartsProvider Highcharts={Highcharts}>
    
    <HighchartsChart plotOptions={ plotOptions }>
      <Chart type="area" />
      <Tooltip padding={10} hideDelay={250} shape="square" split pointFormat={pointFormat} />
      
        
      <XAxis categories={categories}></XAxis>

      <YAxis>
        {datas.map((data, index) => {
          return(
            <AreaSeries  key={index} name={data.name} data={data.serie} color={colors[index]} />
          ); 
        })}
      </YAxis>
    </HighchartsChart>
  </HighchartsProvider>
  );
}

export default MyChart;