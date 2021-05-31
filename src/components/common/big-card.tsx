import React, { useEffect } from 'react'
import styled from 'styled-components'

/*
  Componentes style
*/

export const Card = styled.header`
  border-radius: 10px;
  height: auto;
  background-color: ${p => p.theme.colors.black};
  align-items: center;
`

/*
  MAIN
  @TEX
*/
const MicroCard: React.FC = () => {
  useEffect(() => {
    console.log('First log')
  }, [])
  return <Card></Card>
}
export default MicroCard
