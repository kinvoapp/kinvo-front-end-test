import React from 'react'
import { Line } from 'react-chartjs-2'
import { Content } from './style'

const BarChart = () => {
  return (
    <Content>
      <h2>Rentabilidade dos Títulos</h2>
      <div>
      <Line
        data={{
          labels: [
            'Janeiro',
            'Fevereiro',
            'Março', 
            'Abril', 
            'Maio', 
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
          ],
          datasets: [
            {
              label: 'Volatilidade dos títulos',
              data: [0, 2000, 6000, 8000, 10000, 12000, 7000, 9000, 8785, 5678, 11452, 8597],
              backgroundColor: [
                'rgba (76,48,155)',
              ],
              borderColor: [
                'rgba (76,48,155)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      /></div>
    </Content>
  )
}

export default BarChart