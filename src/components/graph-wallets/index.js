import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import optionsGraphWalletsByTypes from '../../assets/utils/optionsGraphWalletsByTypes'
import optionsGraphWalletsByTitles from '../../assets/utils/optionsGraphWalletsByTitles'

import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-column-gap: 13px;
  grid-template-columns: repeat(2, 1fr);
  @media(max-width: 990px) {
    grid-template-columns: 1fr;
    grid-row-gap: 13px;
  }
`

const Wallet = styled.div`
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .05);
  padding: 16px 0px;
`

const Title = styled.h3`
  border-bottom: 1px solid #EEF2F4;
  color: #627179;
  font-size: 18px;
  padding: 0 20px 20px;
`

const Graph = styled.div`
  padding: 16.5px 20px 26.5px;
`

export default class GraphWallets extends Component {
  render() {
    return(
      <Wrapper>
        <Wallet>
          <Title>Divisão de Carteira por Tipos</Title>
          <Graph>
            <HighchartsReact
              highcharts={Highcharts}
              options={optionsGraphWalletsByTypes}
            />
          </Graph>
        </Wallet>
        <Wallet>
          <Title>Divisão de Carteira por Título</Title>
          <Graph>
            <HighchartsReact
              highcharts={Highcharts}
              options={optionsGraphWalletsByTitles}
            />
          </Graph>
        </Wallet>
      </Wrapper>
    )
  }
}