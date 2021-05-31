import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../styles/assets/logo.svg'
import { ContainerLayout } from '../common/container'

/*
  Componentes style
*/
interface PropsStyles {
  size?: number
}

export const NavBar = styled.header`
  height: 120px;
  width: 100vw;
  max-width: 100%;
  color: #333;
  background-color: ${p => p.theme.colors.black};
  align-items: center;
`

const GroupMessage = styled.div`
  height: auto;
  color: ${p => p.theme.colors.white};
  margin: 30px 0;
  @media (max-width: 1000px) {
    display: none;
  }
`

const Logos = styled.img<PropsStyles>`
  align-item: center;
  margin: 8px 0;
  height: ${p => (p.size ? `${p.size}px` : '64px')};
`
/*
  MAIN
  @TEX
*/
const HomePage: React.FC = () => {
  useEffect(() => {
    console.log('First log')
  }, [])
  return (
    <NavBar>
      <ContainerLayout>
        <Link to="/home">
          <Logos src={Logo} />
        </Link>
        <GroupMessage>
          <b>Bem vindo</b> ao Super!
        </GroupMessage>
      </ContainerLayout>
    </NavBar>
  )
}
export default HomePage
