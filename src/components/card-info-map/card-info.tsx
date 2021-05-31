import React, { useEffect } from 'react'
import styled from 'styled-components'

/*
  Componentes style
*/
interface PropTypes {
  isColor: boolean
}
export const Card = styled.header<PropTypes>`
  border-radius: 10px;
  height: 100px;
  background-color: ${p =>
    p.isColor ? p.theme.colors.black : p.theme.colors.white};
  align-items: center;
`

/*
  MAIN
  @TEX
*/
const MicroCard: React.FC<PropTypes> = ({ isColor }: PropTypes) => {
  useEffect(() => {
    console.log('First log')
  }, [])
  return (
    <Card isColor={isColor}>
      <h1>oi</h1>
    </Card>
  )
}
export default MicroCard
