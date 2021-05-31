import React, { useEffect } from 'react'
import styled from 'styled-components'

/*
  Componentes style
*/

export const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 60px;
  align-items: center;
  border-radius: 10px;
  background-color: ${p => p.theme.colors.white};
  align-items: center;
  box-shadow: 0px 2px 6px #0000000a;
  border-radius: 10px;
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
