import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useApiDataContext } from '../../../context/apiDataContext';
import PortfolioItem from './PortfolioItem';

function Portfolio() {

  const {portfolioData} = useApiDataContext();

  // Formatting Api data to use in PortfolioItem Component
    const {
    equity,
    equityProfit,
    indexerValue,
    percentageOverIndexer,
    percentageProfit,
    valueApplied,
  } = portfolioData;

  const portfolio = [
    {
      title: "SALDO BRUTO",
      value: `R$ ${Number(equity).toLocaleString()}0`,
    },
    {
      title: "VALOR APLICADO",
      value: `R$ ${Number(valueApplied).toLocaleString()}`,
    },
    {
      title: "RESULTADO",
      value: `R$ ${Number(equityProfit).toLocaleString()}`,
    },
    {
      title: "RENTABILIDADE",
      value: `${percentageProfit}%`,
    },
    {
      title: "CDI",
      value: `${indexerValue}%`,
    },
    {
      title: "% SOBRE CDI",
      value: `${percentageOverIndexer}%`,
    },
  ];

  return (
    <Flex mt={'1.5rem'} as='section' gap={'1rem'}>
      {portfolio.map((item, index)=>(
          <PortfolioItem key={index} title={item.title} value={item.value}/>
        ))
      }
    </Flex>
  )
}

export default Portfolio