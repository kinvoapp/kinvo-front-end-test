import React from 'react'
import { Content } from './styles'
import Layout from '../../components/layout/layout'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/common/micro-card'
import GraphCard from '../../components/common/graph-card'
import GraphRoundedCard from '../../components/common/graph-rounded-card'
import BigCard from '../../components/common/big-card'
/*
  Componentes styles
*/
const Login: React.FC = () => (
  <Content>
    <Layout title="Minhas Rendas Fixas">
      <Grid container spacing={2}>
        {[0, 1, 2, 3, 4, 5].map(value => (
          <Grid key={value} item xs={2}>
            <Card />
          </Grid>
        ))}
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

export default Login
