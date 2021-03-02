import React, { Component } from 'react'

import formatMoney from '../../assets/scripts/format-money'

import styled from 'styled-components'

import KinvoLogo from '../../assets/images/kinvo-premium-logo.png'
import BalanceIcon from '../../assets/images/balance-icon.png'
import ArrowUpIcon from '../../assets/images/arrow-up-icon.png'
import RentabilityIcon from '../../assets/images/rentability-icon.png'
import ArrowDownIcon from '../../assets/images/arrow-down-icon.png'
import MenuHamburguerIcon from '../../assets/images/menu-hamburguer-icon.png'

const Wrapper = styled.header`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #707B811A;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-area: header;
  height: 90px;
  padding: 0 50px 0 28px;
  @media(max-width: 990px) {
    padding: 0 20px;
    width: calc(100% - 40px);
  }
`

const Logo = styled.img`
  place-self: center;
`

const TopBarItens = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 30px;
  place-self: center flex-end;
`

const Item = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-areas:
  "icon title"
  "icon content";
  &::before {
    background-image: url(${props => props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    content: "";
    grid-area: icon;
    height: 30px;
    width: 30px;
  }
  @media(max-width: 990px) {
    display: none;
  }
`

const ItemLabel = styled.div`
  font-family: Montserrat Regular, sans-serif;
  font-size: 8px;
  grid-area: title;
  text-transform: uppercase;
`

const ItemValue = styled.div`
  font-family: Montserrat Bold, sans-serif;
  font-size: 16px;
  font-weight: bold;
  grid-area: content;
`

const MenuIcon = styled.div`
  background-image: url(${MenuHamburguerIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  height: 30px;
  width: 30px;
`

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      headerContent: []
    };
  }

  async componentDidMount() {
    const response = await fetch(`https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData`)
    const json = await response.json()
    this.setState({ headerContent: json.data.snapshotByPortfolio })
  }

  render() {
    const { headerContent } = this.state

    return (
      <Wrapper>
        <Logo src={KinvoLogo} />
        <TopBarItens>
          <Item icon={BalanceIcon}>
            <ItemLabel>Saldo Bruto</ItemLabel>
            <ItemValue>{formatMoney(headerContent.equity)}</ItemValue>
          </Item>
          <Item icon={ArrowUpIcon}>
            <ItemLabel>Valor Aplicado</ItemLabel>
            <ItemValue>{formatMoney(headerContent.valueApplied)}</ItemValue>
          </Item>
          <Item icon={RentabilityIcon}>
            <ItemLabel>Rentabilidade</ItemLabel>
            <ItemValue>{(headerContent.percentageProfit) ? formatMoney(headerContent.percentageProfit) : 0}%</ItemValue>
          </Item>
          <Item icon={ArrowDownIcon}>
            <ItemLabel>Carteira</ItemLabel>
            <ItemValue>Minha Carteira</ItemValue>
          </Item>
          <MenuIcon onClick={() => {console.log('Call menu')}} />
        </TopBarItens>
      </Wrapper>
    )
  }
}