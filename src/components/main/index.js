import Cards from '../cards'
import GraphRentability from '../graph-rentability'
import Products from '../products'
import GraphWallets from '../graph-wallets'

import styled from 'styled-components'

const Wrapper = styled.main`
  background-color: #EEF2F4;
  grid-area: main;
  padding: 27px 28px 32px 20px;
`

const Title = styled.h2`
  color: #4C309B;
  font-family: Montserrat Bold, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 23.6px;
`

export default function Main () {
  return (
    <Wrapper>
      <Title>Renda Fixa</Title>
      <Cards />
      <GraphRentability />
      <Products />
      <GraphWallets />
    </Wrapper>
  )
}