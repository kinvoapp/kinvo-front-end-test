import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Position({content}) {

  const {
    valueApplied, 
    equity, 
    profitability, 
    portfolioPercentage, 
    percentageOverIndexer, 
    indexerValue
  } = content;

  return (
    <Box flex={5} border='2px solid' borderColor='gray.100' p={'0.25rem'} px={'0.25rem'} rounded='lg' w='fit-content'>
      
      <Heading as='h5' fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
        RESULTADO <InfoOutlineIcon ml={'0.5rem'} h={4} w={3}/>
      </Heading>

      <Flex justifyContent={'space-between'} mt={'0.5rem'} gap={'0.5rem'}>
        
        <Box>
          <Heading as='h6' mb={'0.25rem'} fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
            VALOR INVES.
          </Heading>
          <Text fontSize={'15px'} fontWeight={'medium'} color={'brand.green'}>
            {Number(valueApplied).toLocaleString()}
          </Text>
        </Box>

        <Box>
          <Heading as='h6' mb={'0.25rem'} fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
            SALDO BRUTO
          </Heading>
          <Text fontSize={'15px'} fontWeight={'medium'} color={'brand.green'}>
            {Number(equity).toLocaleString()}
          </Text>
        </Box>

        <Box>
          <Heading as='h6' mb={'0.25rem'} fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
            RENT.
          </Heading>
          <Text fontSize={'15px'} fontWeight={'medium'} color={'brand.green'}>
          {Number(profitability).toLocaleString()}%
          </Text>
        </Box>

        <Box>
          <Heading as='h6' mb={'0.25rem'} fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
            % DA CART.
          </Heading>
          <Text fontSize={'15px'} fontWeight={'medium'} color={'brand.green'}>
          {Number(portfolioPercentage).toLocaleString()}%
          </Text>
        </Box>

        <Box>
          <Heading as='h6' mb={'0.25rem'} fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
            CDI
          </Heading>
          <Text fontSize={'15px'} fontWeight={'medium'} color={'brand.green'}>
          {Number(indexerValue).toLocaleString()}
          </Text>
        </Box>

        <Box>
          <Heading as='h6' mb={'0.25rem'} fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
            SOBRE CDI
          </Heading>
          <Text fontSize={'15px'} fontWeight={'medium'} color={'brand.green'}>
          {Number(percentageOverIndexer).toLocaleString()}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Position