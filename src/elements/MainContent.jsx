import React from 'react'

import chartimg from '../images/chartimg.png'


import { Attributes, Boxes } from '../styles'
import { ChartFormatter } from '../styles'

import Charts from '../components/Charts'
import Sort from '../components/Sort'

function MainContent() {
  return (
    
    <div>
      <h1 style={{'font-family':'sans-serif','margin-top': '120px', 'color':'#4C309B'}}>Renda Fixa</h1>

      <Boxes>
        <div>
          <h4>SALDO BRUTO</h4>
          <h3>R$ 207.653,10</h3>
        </div>
        <div>
          <h4>VALOR APLICADO</h4>
          <h3>R$ 170.025,64</h3>
        </div>
        <div>
          <h4>RESULTADO</h4>
          <h3>R$ 37.638,46</h3>
        </div>
        <div>
          <h4>RENTABILIDADE</h4>
          <h3>25,08%</h3>
        </div>
        <div>
          <h4>CDI</h4>
          <h3>23,68%</h3>
        </div>
        <div>
          <h4>% SOBRE CDI </h4>
          <h3>320%</h3>
        </div>
      </Boxes>

      <ChartFormatter >
      <Charts />
      </ChartFormatter>

      <Attributes>
        <Sort />
      </Attributes>

      <img src={chartimg} style={{'width':'1160px', 'margin-top': '5px'}} alt='chart' />
      
    </div>
  )
}

export default MainContent
