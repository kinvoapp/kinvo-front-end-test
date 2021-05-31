import React, { useEffect } from 'react'
import styled from 'styled-components'

/*
  Componentes style
*/

export const Card = styled.header`
  border-radius: 10px;
  height: 400px;
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
  return (
    <Card>
      <h1>oi</h1>
    </Card>
  )
}
export default MicroCard
