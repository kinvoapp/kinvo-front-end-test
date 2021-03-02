import React, { Component } from 'react'

import formatMoney from '../../assets/scripts/format-money'

import styled from 'styled-components'

const Wrapper = styled.section`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-bottom: 21.3px;
`

const Item = styled.div`
  background-color: #FFF;  
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .05);
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 3px;
  grid-template-areas:
  "border title"
  "border content";
  grid-template-columns: auto 1fr;
  min-width: 154.4px;
  padding: 11px 8px;
  &::before {
    background-color: #DAE0E3;
    border-radius: 100px;
    content: "";
    grid-area: border;
    height: 39px;
    place-self: center flex-end;
    width: 2px;
  }
`

const ItemLabel = styled.div`
  color: #4E5B61;
  font-family: Montserrat Medium, sans-serif;  
  font-size: 9px;
  grid-area: title;
  place-self: flex-end flex-start;
  text-transform: uppercase;
`

const ItemValue = styled.div`
  color: #4C309B;
  font-family: Montserrat Bold, sans-serif;
  font-size: 14px;
  font-weight: bold;
  grid-area: content;
  place-self: flex-start;
`

export default class Cards extends Component {
  constructor() {
    super()
    this.state = {
      cardsContent: []
    };
  }

  async componentDidMount() {
    const response = await fetch(`https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData`)
    const json = await response.json()
    this.setState({ cardsContent: json.data.snapshotByPortfolio })
  }

  render() {
    const { cardsContent } = this.state

    return(
      <Wrapper>
        <Item>
          <ItemLabel>Saldo bruto</ItemLabel>
          <ItemValue>R$ {formatMoney(cardsContent.equity)}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Valor aplicado</ItemLabel>
          <ItemValue>R$ {formatMoney(cardsContent.valueApplied)}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Resultado</ItemLabel>
          <ItemValue>R$ {formatMoney(cardsContent.equityProfit)}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Rentabilidade</ItemLabel>
          <ItemValue>{(cardsContent.percentageProfit) ? formatMoney(cardsContent.percentageProfit) : 0}%</ItemValue>
        </Item>
        <Item>
          <ItemLabel>CDI</ItemLabel>
          <ItemValue>{(cardsContent.indexerValue) ? formatMoney(cardsContent.indexerValue) : 0}%</ItemValue>
        </Item>
        <Item>
          <ItemLabel>% sobre cdi</ItemLabel>
          <ItemValue>{(cardsContent.percentageOverIndexer) ? formatMoney(cardsContent.percentageOverIndexer) : 0}%</ItemValue>
        </Item>
      </Wrapper>
    )
  }
}