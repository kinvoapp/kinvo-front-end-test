import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMainContext } from '../../../context/mainContext';
import Due from './ProductSubItem/Due';
import FixedIncome from './ProductSubItem/FixedIncome';
import Position from './ProductSubItem/Position';

function MyFixedIncome() {

  const {productListData} = useMainContext();
  const [searchContent, setSearchContent] = useState('');
  const [categoryToSortBy, setCategoryToSortBy] = useState('');
  
  function compareProductByCategory(product1, product2){
    if(!categoryToSortBy) return;

    switch(categoryToSortBy){
      case 'name': 
        return product1.fixedIncome.name.localeCompare(product2.fixedIncome.name);
        
      case 'bondType':
        return product1.fixedIncome.bondType.localeCompare(product2.fixedIncome.bondType);
      
      case 'valueApplied':
        return product2.position.valueApplied - product1.position.valueApplied;

      case 'equity':
        return product2.position.equity - product1.position.equity;
      
      case 'daysUntilExpiration':
        return product1.due.daysUntilExpiration - product2.due.daysUntilExpiration;
      
      default:
        return;
    }
  }

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
          <Select 
            id='sorter'
            name='sorter'
            onChange={(e)=>setCategoryToSortBy(e.target.value)}
            value={categoryToSortBy}
            placeholder='Ordenar por'
          >
            <option value="name">Nome</option>
            <option value="bondType">Classe</option>
            <option value="valueApplied">Valor Investido</option>
            <option value="equity">Saldo Bruto</option>
            <option value="profitability">Rentabilidade</option>
            <option value="daysUntilExpiration">Dias até Vencimento</option>
          </Select>

          <InputGroup>
            <InputLeftElement 
              pointerEvents={'none'}
              children={<SearchIcon color='brand.mediumGray'/>}
            />
            <Input 
              id='search'
              name='search'
              type='text'
              placeholder='Buscar por título'
              onChange={(e)=>setSearchContent(e.target.value)}
            />
          </InputGroup>
        </Flex>
      </Flex>

      {productListData
        .sort(compareProductByCategory)
        .filter((product)=> searchContent === '' || product.fixedIncome.name.toLowerCase().includes(searchContent.toLowerCase()))
        .map((product, index)=>(
        <Flex 
          // Applies 'blue background' only on elements with odd index.
          bg={index % 2 !== 1 ? 'white' : 'brand.hoverBgColor'}
          key={product.fixedIncome.portfolioProductId} 
          p={'1.5rem'}
          gap={'1rem'} 
          borderBottom={'2px solid'} 
          borderColor={'blackAlpha.50'}
          >
            <FixedIncome content={product.fixedIncome}/>
            <Position content={product.position}/>
            <Due content={product.due}/>
        </Flex>
        ))
      }
    </Box>
  )
}

export default MyFixedIncome