import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Content } from './style'

const PieChart = () => {
  return (
      <Content>
          
            <div>
                <h2>Divisão de Carteiras por Tipos</h2>
            <Doughnut
                data={{
                labels: ['TESOURO DIRETO', 'RENDA FIXA PRÉ', 'RENDA FIXA PÓS'],
                datasets: [
                    {
                    label: '# of votes',
                    data: [1, 1, 3],
                    backgroundColor: [
                        'rgba(255,128,82)',
                        'rgba(13, 209, 227)',
                        'rgba(158, 81, 186)',
                    ],
                    borderColor: [
                        'rgba(255,128,82)',
                        'rgba(13, 209, 227)',
                        'rgba(158, 81, 186)',
                    ],
                    borderWidth: 1,
                    },
                ],
                }}
                height={8}
                width={2}
                
            />
            </div>
            <div>
            <h2>Divisão de Carteiras por Título</h2>
            <Doughnut
                data={{
                labels: ['TESOURO IPCA+ COM JUROS SEMESTRAIS 2024 (NTNB)', 'CDB PRÉ XP INVESTIMENTOS CCTVM (9,5% A.A.)', 'LC XP INVESTIMENTOS CCTVM (CDI + 104% A.A.)', 'CDB BANCO C6 (102% DO CDI)', 'CDB BANCO SANTANDER (99% DO CDI)'],
                datasets: [
                    {
                    label: '# of votes',
                    data: [1, 1, 1, 1, 1],
                    backgroundColor: [
                        'rgba(255,128,82)',
                        'rgba(13, 209, 227)',
                        'rgba(158, 81, 186)',
                        'rgba(235, 78, 16)',
                        'rgba(13, 128, 186)',
                    ],
                    borderColor: [
                        'rgba(255,128,82)',
                        'rgba(13, 209, 227)',
                        'rgba(158, 81, 186)',
                    ],
                    borderWidth: 1,
                    },
                ],
                }}
                height={8}
                width={2}
                
            />
            </div>
        </Content>

        
  )
}

export default PieChart