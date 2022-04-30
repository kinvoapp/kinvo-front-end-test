import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import React from 'react';
import useDataFetch from '../../../hooks/useDataFetch';
import Due from './ProductSubItem/Due';
import FixedIncome from './ProductSubItem/FixedIncome';
import Position from './ProductSubItem/Position';

function MyFixedIncome() {

  const {productListData} = useDataFetch();

  return (
    <Box 
      minH='100vh'
      w='full' 
      mt={'2rem'}  
      bg={'white'}
      rounded='md'
    >
      <Flex alignItems={'center'} justifyContent={'space-between'} p={'1.5rem'} borderBottom='2px solid' borderColor='blackAlpha.50'>
        <Heading 
          as='h2'
          fontSize={'1.125rem'}
          fontWeight={'medium'}
          color={'brand.mediumGray'}
        >
          Minhas Rendas Fixas
        </Heading>
        <Flex gap={'1rem'}>
          <Select placeholder='Ordenar por'>
            <option value="opt">Option 1</option>
          </Select>

          <InputGroup>
            <InputLeftElement 
              pointerEvents={'none'}
              children={<SearchIcon color='brand.mediumGray'/>}
            />
            <Input type='text'/>
          </InputGroup>
        </Flex>
      </Flex>

      {productListData.map((product)=>(
        <Flex 
          key={product.fixedIncome.portfolioProductId} 
          px={'1.5rem'} 
          py={'2rem'} 
          gap={'1rem'} 
          borderBottom={'2px solid'} 
          borderColor={'blackAlpha.50'}
          >
            <FixedIncome content={product.fixedIncome}/>
            <Position content={product.position}/>
            <Due content={product.due}/>
        </Flex>
      ))}
    </Box>
  )
}

export default MyFixedIncome