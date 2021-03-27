import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import CardInfo from '../../components/CardInfo';
import InfoTag from '../../components/InfoTag';
import Card from '../../components/Card';
import { Container, Title } from './styles';

function RendaFixa() {
  const [ infomations, setInformations ] = useState();

  useEffect(() => {
    if (!infomations) {
      setInformations([
        { title: "Saldo Bruto", subtitle: "R$ 207.653,10" },
        { title: "Valor Aplicado", subtitle: "R$ 170.025,64" },
        { title: "Resultado", subtitle: "R$ 37.638,46" },
        { title: "Rentabilidade", subtitle: "25,08%" },
        { title: "CDI", subtitle: "23,68%" },
        { title: "% Sobre CDI", subtitle: "320%" },
      ])
    }
  }, [infomations])

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title>Renda Fixa</Title>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            { infomations?.map((information) => (
              <Grid item xs={2}>
                <InfoTag title={information.title} subtitle={information.subtitle} />
              </Grid>
            )) }
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <CardInfo title="Rentabilidade dos Títulos" />
        </Grid>

        <Grid item xs={12}>
          <CardInfo titleBorder title="Minhas Rendas Fixas" />
        </Grid>

        <Grid item xs={6}>
          <CardInfo titleBorder title="Divisão de Carteira por Tipos" />
        </Grid>

        <Grid item xs={6}>
          <CardInfo titleBorder title="Divisão de Carteira por Título" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default RendaFixa;