import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useMainContext } from '../../../context/mainContext';
import PortfolioItem from './PortfolioItem';

function Portfolio() {

  const {portfolioData} = useMainContext();

  return (
    <Flex mt={'1.5rem'} as='section' gap={'1rem'}>
      {portfolioData.map((item, index)=>(
          <PortfolioItem key={index} title={item.title} value={item.value}/>
        ))
      }
    </Flex>
  )
}

export default Portfolio