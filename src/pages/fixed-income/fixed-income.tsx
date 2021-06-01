import React, { useEffect } from 'react'
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

/*
  Componentes styles
*/
const MyFix: React.FC = () => {
  const dispatch = useDispatch()
  const { snapshotByPortfolio, dailyEquityByPortfolioCharData } = useSelector(
    (state: ApplicationState) => state.local.data.data
  )
  console.log(snapshotByPortfolio, dailyEquityByPortfolioCharData)
  useEffect(() => {
    // dispatch(getMyFix())
  }, [])
  return (
    <Content>
      <Layout title="Renda Fixa">
        <Grid container spacing={2}>
          <Grid key={1} item xs={2}>
            <Card
              title="SALDO BRUTO"
              isPercent={false}
              percentOrNumber={snapshotByPortfolio.equity}
            />
          </Grid>
          <Grid key={1} item xs={2}>
            <Card
              title="VALOR APLICADO"
              isPercent={false}
              percentOrNumber={snapshotByPortfolio.valueApplied}
            />
          </Grid>
          <Grid key={2} item xs={2}>
            <Card
              title="RESULTADO"
              isPercent={false}
              percentOrNumber={snapshotByPortfolio.equityProfit}
            />
          </Grid>
          <Grid key={1} item xs={2}>
            <Card
              title="RENTABILIDADE"
              isPercent
              percentOrNumber={snapshotByPortfolio.percentageProfit}
            />
          </Grid>
          <Grid key={1} item xs={2}>
            <Card
              title="CDI"
              isPercent
              percentOrNumber={snapshotByPortfolio.indexerValue}
            />
          </Grid>
          <Grid key={1} item xs={2}>
            <Card
              title="% SOBRE CDI"
              isPercent
              percentOrNumber={snapshotByPortfolio.percentageOverIndexer}
            />
          </Grid>

          <Grid key="{value}" item xs={12}>
            <GraphCard />
          </Grid>
          <Grid key="{value}" item xs={12}>
            <BigCard />
          </Grid>
          <Grid key="{value}" item xs={6}>
            <GraphRoundedCard />
          </Grid>
          <Grid key="{value}" item xs={6}>
            <GraphRoundedCard />
          </Grid>
        </Grid>
      </Layout>
    </Content>
  )
}

export default MyFix
