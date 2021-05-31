import React, { useEffect } from 'react'
import styled from 'styled-components'

/*
  Componentes style
*/

export const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 60px;
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
