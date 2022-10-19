import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../../services/axios';
import CardsWrapper from './headerCardsWrapper';

export default function HeaderCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get()
      .then((res) => {
        setData(res.data.data.snapshotByPortfolio);
      })
      .catch((e) => {
        return e;
      });
  });

  return (
    <Container>
      <CardsWrapper
        title="Saldo Bruto"
        subTitle={`R$ ${data.equity?.toLocaleString('pt-BR')}`}
      />
      <CardsWrapper
        title="Valor Aplicado"
        subTitle={`R$ ${data.valueApplied?.toLocaleString('pt-BR')}`}
      />
      <CardsWrapper
        title="Resultado"
        subTitle={`R$ ${data.equityProfit?.toLocaleString('pt-BR')}`}
      />
      <CardsWrapper
        title="Rentabilidade"
        subTitle={`${data.percentageProfit?.toLocaleString('pt-BR')}%`}
      />
      <CardsWrapper
        title="CDI"
        subTitle={`${data.indexerValue?.toLocaleString('pt-BR')}%`}
      />
      <CardsWrapper
        title="% Sobre CDI"
        subTitle={`${data.percentageOverIndexer?.toLocaleString('pt-BR')}%`}
      />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
