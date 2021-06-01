import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

/*
  Componentes style
*/
interface Props {
  title: string
  percentOrNumber: number
  isPercent: boolean
}
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
  align-items: center;
  padding: 15px 20px;
`
export const Title = styled.div`
  margin: 0 0 0 15px;
  font-size: 9px;
`
export const SubTitle = styled.div`
  margin: 0 0 0 15px;
  font-weight: 900;
  color: ${p => p.theme.colors.text.purpleStrong};
`

export const Border = styled.div`
  border-left: 2px solid ${p => p.theme.colors.text.disabled}; ;
`
/*
  MAIN
  @TEX
*/
const MicroCard: React.FC<Props> = ({ title, percentOrNumber, isPercent }) => {
  const [subTitle, setSubTitle] = useState('')

  useEffect(() => {
    isPercent
      ? setSubTitle(`${percentOrNumber} %`)
      : setSubTitle(`R$ ${percentOrNumber}`)
  }, [])
  return (
    <Card>
      <Border>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Border>
    </Card>
  )
}
export default MicroCard
