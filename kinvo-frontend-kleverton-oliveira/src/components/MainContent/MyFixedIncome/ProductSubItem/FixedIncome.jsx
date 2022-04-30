import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function FixedIncome({content}) {

  const {name, bondType} = content;

  return (
    <Box flex={3} border='2px solid' borderColor='gray.100' p={'0.25rem'} px={'0.5rem'} rounded='lg'>
      <Heading as='h5' fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
        TÍTULO <InfoOutlineIcon ml={'0.5rem'} h={4} w={3}/>
      </Heading>
      <Flex gap={'1rem'} mt={'0.5rem'}>
        <Box flex={1}>
          <Text  fontSize={'12px'} fontWeight={'medium'} color={'brand.darkGray'}>{name}</Text>
        </Box>
        <Box>
          <Heading as='h6' mb={'0.25rem'} fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
            CLASSE
          </Heading>
            <Text fontSize={'14px'} fontWeight={'medium'} color={'brand.lightPurple'}>{bondType}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default FixedIncome