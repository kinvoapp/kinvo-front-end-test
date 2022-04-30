import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import BondYield from './BondYield';
import MyFixedIncome from './MyFixedIncome';
import Portfolio from './Portfolio';

function MainContent() {
  return (
    <Box w='full' as='main'>
      <Container maxW={'79vw'}>
        <Heading mt={'2rem'} as='h2' color='brand.darkPurple' fontSize={'1.25rem'}>Renda Fixa</Heading>
        
        <Portfolio />

        {/* Bond Yield -> Rentabilidade dos Títulos */}
        <BondYield />
        {/* <Image 
          src={BondYieldImg} 
          alt={'Rentabilidade dos Títulos'}
          mt={'2rem'}
          w='full'
        /> */}

        {/* My Fixed Income -> Minhas Rendas Fixas */}
        <MyFixedIncome />
        
      </Container>
    </Box>
  )
}

export default MainContent