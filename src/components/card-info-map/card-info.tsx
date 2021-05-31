import React, { useEffect } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

/*
  Componentes style
*/
interface PropTypes {
  isColor: boolean
}
export const Card = styled.div<PropTypes>`
  border-radius: 10px;
  height: auto;
  padding: 20px;
  background-color: ${p =>
    p.isColor ? p.theme.colors.grey[100] : p.theme.colors.white};
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const Info = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  height: auto;
  width: 100%;
  padding: 20px 10px;
  border: 1px solid ${p => p.theme.colors.border.main};
  background-color: ${p => p.theme.colors.white};
  z-index: 1;
`
export const TitleInfo = styled.p`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 10px;
  font-size: 10px;
  letter-spacing: 0.45px;
  color: #4e5b61;
  text-transform: uppercase;
  padding: 12px;
  width: 150px;
  border: 1px solid ${p => p.theme.colors.border.main};
  border-bottom: 3px solid ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.white};
  transform: translateY(6%);
  z-index: 2;
`

export const Contain = styled.div`
  width: 100%;
  margin: 2px 10px;
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
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Contain>
            <TitleInfo>Minhas rendas</TitleInfo>
            <Info>
              <p>Este elementos é assim assado</p>
            </Info>
          </Contain>
        </Grid>
        <Grid item xs={6}>
          <Contain>
            <TitleInfo>Minhas rendas</TitleInfo>
            <Info>
              <p>Este elementos é assim assado</p>
            </Info>
          </Contain>
        </Grid>
        <Grid item xs={2}>
          <Contain>
            <TitleInfo>Minhas rendas</TitleInfo>
            <Info>
              <p>Este elementos é assim assado</p>
            </Info>
          </Contain>
        </Grid>
      </Grid>
    </Card>
  )
}
export default MicroCard
