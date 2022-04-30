import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function MyFixedIncome() {
  return (
    <Box 
      minH='100vh'
      w='full' 
      mt={'2rem'} 
      p={'1.5rem'} 
      bg={'white'}
      rounded='md'
    >
      <Flex>
        <Heading 
          as='h2'
          fontSize={'1.125rem'}
          fontWeight={'medium'}
          color={'brand.mediumGray'}
        >
          Minhas Rendas Fixas
        </Heading>
      </Flex>
      
    </Box>
  )
}

export default MyFixedIncome