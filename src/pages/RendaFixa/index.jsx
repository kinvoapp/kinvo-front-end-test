import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import CardInfo from '../../components/CardInfo';
import InfoTag from '../../components/InfoTag';
import IncomeCard from '../../components/IncomeCard';
import { Container, Title, IncomeName, IncomeInfo, IncomeTitle, IncomeValue, IncomeContent, CardRow } from './styles';

function RendaFixa() {
  const [ infomations, setInformations ] = useState();
  const [ fixedIncomes, setFixedIncomes ] = useState();

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

    if (!fixedIncomes) {
      setFixedIncomes([
        {
          "due":{
            "date":"14/08/2024",
            "daysUntilExpiration":1276
          },
          "fixedIncome":{
            "bondType":"Tesouro Direto",
            "name":"Tesouro IPCA+ com Juros Semestrais 2024 (NTNB)",
            "portfolioProductId":2068820
          },
          "hasBalance":1,
          "position":{
            "equity":63894.24,
            "indexerLabel":"CDI",
            "indexerValue":14.06,
            "percentageOverIndexer":141.05,
            "portfolioPercentage":12.05,
            "profitability":19.83,
            "valueApplied":69970.57
          },
          "productHasQuotation":1
        },
        {
          "due":{
            "date":"14/08/2024",
            "daysUntilExpiration":1276
          },
          "fixedIncome":{
            "bondType":"Tesouro Direto",
            "name":"Tesouro IPCA+ com Juros Semestrais 2024 (NTNB)",
            "portfolioProductId":2068820
          },
          "hasBalance":1,
          "position":{
            "equity":63894.24,
            "indexerLabel":"CDI",
            "indexerValue":14.06,
            "percentageOverIndexer":141.05,
            "portfolioPercentage":12.05,
            "profitability":19.83,
            "valueApplied":69970.57
          },
          "productHasQuotation":1
        },
      ])
    }
  }, [infomations, fixedIncomes])

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
          <CardInfo titleBorder title="Minhas Rendas Fixas">
            {
              fixedIncomes?.map((fixedIncome, index) => (
                <CardRow index={index}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <IncomeCard title="Título">
                        <IncomeContent>
                          <Grid item xs={6}>
                            <IncomeName>{fixedIncome.fixedIncome.name}</IncomeName>
                          </Grid>
                          <IncomeInfo>
                            <IncomeTitle>Classe</IncomeTitle>
                            <IncomeValue color="#8A51BA">{fixedIncome.fixedIncome.bondType}</IncomeValue>
                          </IncomeInfo>
                        </IncomeContent>
                      </IncomeCard>
                    </Grid>
                    
                    <Grid item xs={5}>
                      <IncomeCard title="Minha Posição">
                        <IncomeContent>
                          <IncomeInfo>
                            <IncomeTitle>Valor Inves.</IncomeTitle>
                            <IncomeValue color="#38BFA0">{fixedIncome.position.valueApplied}</IncomeValue>
                          </IncomeInfo>
                          <IncomeInfo>
                            <IncomeTitle>Saldo Bruto</IncomeTitle>
                            <IncomeValue color="#38BFA0">{fixedIncome.position.equity}</IncomeValue>
                          </IncomeInfo>
                          <IncomeInfo>
                            <IncomeTitle>Rent.</IncomeTitle>
                            <IncomeValue color="#38BFA0">{fixedIncome.position.profitability}</IncomeValue>
                          </IncomeInfo>
                          <IncomeInfo>
                            <IncomeTitle>% da cart.</IncomeTitle>
                            <IncomeValue color="#38BFA0">{fixedIncome.position.portfolioPercentage}</IncomeValue>
                          </IncomeInfo>
                          <IncomeInfo>
                            <IncomeTitle>{fixedIncome.position.indexerLabel}</IncomeTitle>
                            <IncomeValue color="#38BFA0">{fixedIncome.position.indexerValue}</IncomeValue>
                          </IncomeInfo>
                          <IncomeInfo>
                            <IncomeTitle>Sobre {fixedIncome.position.indexerLabel}</IncomeTitle>
                            <IncomeValue color="#38BFA0">{fixedIncome.position.percentageOverIndexer}</IncomeValue>
                          </IncomeInfo>
                        </IncomeContent>
                      </IncomeCard>
                    </Grid>
                    
                    <Grid item xs={3}>
                      <IncomeCard title="Vencimento">
                        <IncomeContent>
                          <IncomeInfo item style={{ flex: 1, justifyContent: 'center' }}>
                            <IncomeTitle>Data Venc.</IncomeTitle>
                            <IncomeValue color="#008DCB">{fixedIncome.due.date}</IncomeValue>
                          </IncomeInfo>
                          <IncomeInfo item style={{ flex: 1, justifyContent: 'center' }}>
                            <IncomeTitle>Dias até venc.</IncomeTitle>
                            <IncomeValue color="#008DCB">{fixedIncome.due.daysUntilExpiration}</IncomeValue>
                          </IncomeInfo>
                        </IncomeContent>
                      </IncomeCard>
                    </Grid>
                  </Grid>
                </CardRow>
              ))
            }
          </CardInfo>
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