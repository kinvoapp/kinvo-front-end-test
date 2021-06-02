import React, { useEffect, useState } from 'react'
import { Content } from './styles'
import Layout from '../../components/layout/layout'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/common/micro-card'
import GraphCard from '../../components/card-graph/graph-card'
import GraphRoundedCard from '../../components/card-graph/graph-donut-card'
import BigCard from '../../components/card-info-map/big-card'
import { useDispatch, useSelector } from 'react-redux'
import { getMyFix } from '../../store/ducks/local/actions'
import { ApplicationState } from '../../store'
import { formatValuesChartExample } from '../../utils/formatCharts'

/*
  Componentes styles
*/
export interface DataChartSpline {
  daily: string
  value: number
  valueWithOutRent: number
}

const MyFix: React.FC = () => {
  const dispatch = useDispatch()
  const [chartSpline, setChartSpline] = useState<DataChartSpline[]>([
    {
      daily: '',
      value: 0,
      valueWithOutRent: 0
    }
  ])
  const { snapshotByPortfolio, dailyEquityByPortfolioChartData } = useSelector(
    (state: ApplicationState) => state.local.data.data
  )

  useEffect(() => {
    dispatch(getMyFix())
  }, [])
  useEffect(() => {
    setChartSpline(formatValuesChartExample(dailyEquityByPortfolioChartData))
  }, [dailyEquityByPortfolioChartData])
  return (
    <Content>
      <Layout title="Renda Fixa">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Card
              title="SALDO BRUTO"
              isPercent={false}
              percentOrNumber={snapshotByPortfolio.equity}
            />
          </Grid>
          <Grid item xs={2}>
            <Card
              title="VALOR APLICADO"
              isPercent={false}
              percentOrNumber={snapshotByPortfolio.valueApplied}
            />
          </Grid>
          <Grid item xs={2}>
            <Card
              title="RESULTADO"
              isPercent={false}
              percentOrNumber={snapshotByPortfolio.equityProfit}
            />
          </Grid>
          <Grid item xs={2}>
            <Card
              title="RENTABILIDADE"
              isPercent
              percentOrNumber={snapshotByPortfolio.percentageProfit}
            />
          </Grid>
          <Grid item xs={2}>
            <Card
              title="CDI"
              isPercent
              percentOrNumber={snapshotByPortfolio.indexerValue}
            />
          </Grid>
          <Grid item xs={2}>
            <Card
              title="% SOBRE CDI"
              isPercent
              percentOrNumber={snapshotByPortfolio.percentageOverIndexer}
            />
          </Grid>

          <Grid item xs={12}>
            <GraphCard data={chartSpline} />
          </Grid>
          <Grid item xs={12}>
            <BigCard />
          </Grid>
          <Grid item xs={6}>
            <GraphRoundedCard />
          </Grid>
          <Grid item xs={6}>
            <GraphRoundedCard />
          </Grid>
        </Grid>
      </Layout>
    </Content>
  )
}

export default MyFix
