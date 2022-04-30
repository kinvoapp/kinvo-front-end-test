import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import Portfolio from './Portfolio/Portfolio';

function MainContent() {
  return (
    <Box w='full' as='main'>
      <Container maxW={'79vw'}>
        <Heading mt={'2rem'} as='h2' color='brand.darkPurple' fontSize={'1.25rem'}>Renda Fixa</Heading>
        <Portfolio />
      </Container>
    </Box>
  )
}

export default MainContent