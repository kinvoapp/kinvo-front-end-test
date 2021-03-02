import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import optionsGraphRentability from '../../assets/utils/optionsGraphRentability'

import styled from 'styled-components'

const Wrapper = styled.section`
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .04);
  margin-bottom: 15px;
  padding: 16px 0px;
  .highcharts-legend {
    display: none;
  }
`

const Title = styled.h3`
  color: #627179;
  font-size: 18px;
  padding: 0 20px 20px;
`
export default class GraphRentability extends Component {
  render() {
    return(
      <Wrapper>
        <Title>Rentabilidade dos Títulos</Title>
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsGraphRentability}
        />
      </Wrapper>
    )
  }
}