import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import useDataFetch from '../../../hooks/useDataFetch';
import Due from './ProductSubItem/Due';
import FixedIncome from './ProductSubItem/FixedIncome';
import Position from './ProductSubItem/Position';

function MyFixedIncome() {

  const {productListData} = useDataFetch();

  /* Product Filtering Area */
  const productList = [...productListData];
  const [isSearching, setIsSearching] = useState(false);
  const [filteredProductListData, setFilteredProductListData] = useState([]);

  function searchByProductName(event) {

    const searchContent = event.target.value;

    if (searchContent.length > 0) {
      setIsSearching(true);

      const searchResult = productList.filter(product => {
        const rule = new RegExp(searchContent, "gi");
        return rule.test(product.fixedIncome.name);
      });

      setFilteredProductListData(searchResult);

    } else {
      setIsSearching(false);
    }
  }

  /* Product Sorting Area */
  const [categoryToSortBy, setCategoryToSortBy] = useState('');
  
  function compareProductByCategory(product1, product2){
    if(!categoryToSortBy) return;

    switch(categoryToSortBy){
      case 'name': 
        return product1.fixedIncome.name.localeCompare(product2.fixedIncome.name);
        
      case 'bondType':
        return product1.fixedIncome.bondType.localeCompare(product2.fixedIncome.bondType);
        
      case 'profitability':
        return product2.position.profitability - product1.position.profitability;
      
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
              onChange={searchByProductName}
            />
          </InputGroup>
        </Flex>
      </Flex>

      {
        isSearching ?

        (filteredProductListData.sort(compareProductByCategory).map((product, index)=>(
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
          )))

        :

        (productListData.sort(compareProductByCategory).map((product, index)=>(
          <Flex 
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
          )))  
        }

    </Box>
  )
}

export default MyFixedIncome