import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ContainerLayoutLateral } from '../common/container'

/*
  Componentes style
*/

export const NavBar = styled.header`
  height: auto;
  width: 15vw;
  color: #333;
  background-color: ${p => p.theme.colors.black};
  align-items: center;
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
      <ContainerLayoutLateral></ContainerLayoutLateral>
    </NavBar>
  )
}
export default HomePage
