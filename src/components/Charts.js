import React from 'react'
import { Line } from 'react-chartjs-2'

function Charts() {

  const data ={
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    
    datasets:[
      {
        label: 'Rentabilidade dos títulos (2019)',
        data:[12000, 8000, 7000, 9800, 12000, 9800, 6300, 8000, 8500, 8500, 8300, 10000],
        borderColor:['#AE0090'],
        backgroundColor:['rgba(128, 0, 128, 0.2)'],
        pointBackgroundColor:'rgba(128, 0, 128, 0.2)',
        pointBorderColor:'rgba(128, 0, 128, 0.2)'


      },
      {
        label: 'Rentabilidade dos títulos(2020)',
        data:[8000, 6000, 5000, 7800, 10000, 7800, 4600, 6000, 7200, 7000, 6000, 7500],
        borderColor:['rgba(0, 25, 255,0.2)'],
        backgroundColor:['rgba(0, 25, 255,0.6)'],
        pointBackgroundColor:'rgba(0, 25, 255)',
        pointBorderColor:'rgbargba(0, 25, 255,0.2)'
      }
    ]
  }

  const option ={
    maintainAspectRatio:false,
    scales:{
      yAxes:[
        {
          ticks:{
            max: 12000,
            min:4000,
            stepSize:2000,
          }
        }
      ]
      
    }

  }
  return(
    <div>
      <Line data={data}
      height={348}
      width={"500px"} options={option} />
    </div>
  )
}
  
export default Charts;
