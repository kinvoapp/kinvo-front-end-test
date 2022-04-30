import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import BondYieldImg from '../../../assets/ativos/bondyield.png';

function BondYield() {
  return (
    <Box 
      w='full' 
      mt={'2rem'} 
      p={'1.5rem'} 
      bg={'white'}
      rounded='md'
    >
      <Heading
        as='h2'
        fontSize={'1.125rem'}
        fontWeight={'medium'}
        color={'brand.mediumGray'}
      >
        Rentabilidade dos Títulos
      </Heading>

      <Image 
        src={BondYieldImg} 
        alt={'Rentabilidade dos Títulos'}
        w='full'
        mt={'1rem'}
      />
    
    </Box>
  )
}

export default BondYield