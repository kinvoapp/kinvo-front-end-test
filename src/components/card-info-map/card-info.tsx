import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

/*
  Componentes style
*/
interface PropTypes {
  isColor: boolean
  title?: string
  bondType?: string
  equity?: number | string | 0
  valDate?: string
  valDays?: string
  profitability?: string | number
  valueApplied?: string | number
  percentageOverIndexer?: string | number
  indexerValue?: string | number
  portfolioPercentage?: string | number
}

interface PLabel {
  color: 'blue' | 'purple' | 'green'
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
  height: 80px;
  width: 100%;
  padding: 20px 10px;
  border: 1px solid ${p => p.theme.colors.border.main};
  background-color: ${p => p.theme.colors.white};
  z-index: 1;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 13px;
    width: 50%;
  }
  label {
    font-size: 9px;
  }
`
export const Label = styled.label<PLabel>`
  margin: 0 1px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  text-transform: initial;
  letter-spacing: normal;
  line-height: 1.6;
  font-weight: 600;
  p {
    color: ${p => p.theme.colors.text[p.color]};
    font-size: 15px;
    @media (max-width: 1400px) {
      font-size: 13px;
    }
  }
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
  width: 110px;
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
const MicroCard: React.FC<PropTypes> = ({
  isColor,
  title,
  bondType,
  equity,
  valDate,
  valDays,
  profitability,
  valueApplied,
  percentageOverIndexer,
  indexerValue,
  portfolioPercentage
}: PropTypes) => {
  return (
    <Card isColor={isColor}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Contain>
            <TitleInfo>TITULO</TitleInfo>
            <Info>
              <p>{title}</p>
              <Label color="purple">
                CLASSE
                <p>{bondType}</p>
              </Label>
            </Info>
          </Contain>
        </Grid>
        <Grid item xs={5}>
          <Contain>
            <TitleInfo>RESULTADO</TitleInfo>
            <Info>
              <Label color="blue">
                VALOR INVESTIDO
                <p>{equity}</p>
              </Label>
              <Label color="blue">
                SALDO BRUTO
                <p>{valueApplied}</p>
              </Label>
              <Label color="blue">
                RENT.
                <p>{profitability}</p>
              </Label>
              <Label color="blue">
                % DA CART
                <p>{portfolioPercentage}</p>
              </Label>
              <Label color="blue">
                CDI
                <p>{indexerValue}</p>
              </Label>
              <Label color="blue">
                SOBRE CDI
                <p>{percentageOverIndexer}</p>
              </Label>
            </Info>
          </Contain>
        </Grid>

        <Grid item xs={3}>
          <Contain>
            <TitleInfo>VENCIMENTO</TitleInfo>
            <Info>
              <Label color="green">
                DATA VENC.
                <p>{valDate?.replaceAll('/', '.')}</p>
              </Label>
              <Label color="green">
                DIAS ATÉ VENC.
                <p>{valDays}</p>
              </Label>
            </Info>
          </Contain>
        </Grid>
      </Grid>
    </Card>
  )
}
export default MicroCard
