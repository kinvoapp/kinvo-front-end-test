import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Due({content}) {

  const {date, daysUntilExpiration} = content;

  return (
    <Box flex={2} border='2px solid' p={'0.25rem'} px={'0.5rem'} borderColor='gray.100' rounded='lg' w='fit-content'>
      
      <Heading as='h5' fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
        VENCIMENTO <InfoOutlineIcon ml={'0.5rem'} h={4} w={3}/>
      </Heading>

      <Flex justifyContent={'space-between'} mt={'0.5rem'} gap={'0.5rem'}>
        
        <Box>
          <Heading as='h6' mb={'0.25rem'} fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
            DATA VENC.
          </Heading>
          <Text fontSize={'14px'} fontWeight={'medium'} color={'brand.blue'}>
            {date}
          </Text>
        </Box>

        <Box>
          <Heading as='h6' mb={'0.25rem'} fontSize={'11px'} fontWeight={'medium'} color={'brand.mediumGray'}>
            DIAS ATÉ VENC.
          </Heading>
          <Text fontSize={'14px'} fontWeight={'medium'} color={'brand.blue'}>
            {daysUntilExpiration}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Due