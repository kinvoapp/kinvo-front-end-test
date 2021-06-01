import React, { useEffect, ReactChild } from 'react'
import NavTop from '../nav/nav-top'
import styled from 'styled-components'
import NavLateral from '../nav/nav-lateral'

interface Props {
  children: ReactChild
  title: string
}
export const Container = styled.div`
  max-width: 100%;
`

export const WrapChildren = styled.div`
  display flex;
`
export const Content = styled.div`
  display flex;
  flex-direction: column;
  margin: 20px 25px;
  width: 100vw;
`

export const Title = styled.h1`
  margin: 20px 0 40px 0;
  color: ${p => p.theme.colors.text.purpleStrong};
  font-weight: bold;
`
/*
  MAIN
  @TEX
*/
const HomePage: React.FC<Props> = ({ children, title }: Props) => {
  useEffect(() => {
    console.log('First log')
  }, [])
  return (
    <Container>
      <NavTop />
      <WrapChildren>
        <NavLateral></NavLateral>
        <Content>
          <Title>{title}</Title>
          {children}
        </Content>
      </WrapChildren>
    </Container>
  )
}
export default HomePage
