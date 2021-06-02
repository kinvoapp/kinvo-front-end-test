import React, { ReactChild } from 'react'
import NavTop from '../nav/nav-top'
import styled from 'styled-components'
import NavLateral from '../nav/nav-lateral'
import { ApplicationState } from '../../store'
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

interface Props {
  children: ReactChild
  title: string
}
export const Container = styled.div`
  max-width: 100%;
`

export const WrapChildren = styled.div`
  margin-top: 120px;
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
const Layout: React.FC<Props> = ({ children, title }: Props) => {
  const { loading } = useSelector((state: ApplicationState) => state.notify)
  return (
    <Container>
      <NavTop />
      <WrapChildren>
        <NavLateral></NavLateral>
        <Content>
          <Title e-test="lay-title">{title}</Title>
          {loading ? <CircularProgress disableShrink /> : children}
        </Content>
      </WrapChildren>
    </Container>
  )
}
export default Layout
