import React, { useState, useEffect } from 'react';

import CardLinha from '../../../assets/renda-fixa/linha-lateral.svg';

import api from '../../../services/api';
import utils from '../../../utils/utils';

import { Container, CardFlexContainer, Card, CardIcon, CardFlexSubContainer, CardDescription, CardValue } from './styles';

function CardsRendaFixa() {
  const [cardData, setCardData] = useState([{}]);

  useEffect(() => {
    api.get('/getFixedIncomeClassData').then(response => {
      const { equity, valueApplied, equityProfit, percentageProfit, indexerValue, percentageOverIndexer } = response.data.data.snapshotByPortfolio;
      const cardDataArray = [
        { Description: 'SALDO BRUTO', Value: `R$ ${utils().convertReal(equity)}` },
        { Description: 'VALOR APLICADO', Value: `R$ ${utils().convertReal(valueApplied)}` },
        { Description: 'RESULTADO', Value: `R$ ${utils().convertReal(equityProfit)}` },
        { Description: 'RENTABILIDADE', Value: `${percentageProfit}%` },
        { Description: 'CDI', Value: `${indexerValue}%` },
        { Description: '% SOBRE O CDI', Value: `${percentageOverIndexer}%` },
      ];

      setCardData([...cardDataArray]);
    });
  }, []);

  return (
    <Container>
      <CardFlexContainer>
        {cardData.map((data, index) => (
          <Card key={index}>
            <CardIcon src={CardLinha} alt="Linha Lateral" />
            <CardFlexSubContainer>
              <CardDescription>{data.Description}</CardDescription>
              <CardValue>{data.Value}</CardValue>
            </CardFlexSubContainer>
          </Card>
        ))}
      </CardFlexContainer>
    </Container>
  );
}

export default CardsRendaFixa;
