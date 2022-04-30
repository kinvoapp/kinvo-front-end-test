import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function PortfolioItem({title, value}) {
  return (
    <Flex bg={'white'} boxShadow={'sm'} py={'1rem'} w='12rem' rounded='md'>
      <Box mx='0.75rem' borderRight={'2px solid'} borderColor={'gray.300'}/>
      <Box>
        <Heading 
          as='h3' 
          fontSize={'10px'}
          color='brand.lightGray' 
          fontWeight={'medium'}
          letterSpacing={'wider'}
          mb={'0.25rem'}
        >
          {title}
        </Heading>
        <Text fontStyle={'14px'} fontWeight={'bold'} color={'brand.darkPurple'}>{value}</Text>
      </Box>
    </Flex>
  )
}

export default PortfolioItem