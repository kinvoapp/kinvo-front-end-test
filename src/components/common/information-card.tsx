import React, { useEffect } from 'react'
import styled from 'styled-components'

/*
  Componentes style
*/

export const Card = styled.header`
  border-radius: 10px;
  width: 172px;
  height: 60px;
  background-color: ${p => p.theme.colors.black};
  align-items: center;
`

/*
  MAIN
  @TEX
*/
const MicroCard: React.FC = () => {
  return (
    <Card>
      <h1>oi</h1>
    </Card>
  )
}
export default MicroCard
