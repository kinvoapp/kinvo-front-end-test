import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';

function Pagination({productsPerPage, totalProducts, paginate, currentPage}) {

  const pageNumbers = [];

  for(let index = 1; index <= Math.ceil(totalProducts / productsPerPage); index++){
    pageNumbers.push(index);
  }

  return (
    <Box p={'1.5rem'}>
      <Flex 
        as='ul' 
        justifyContent={'center'} 
        listStyleType={'none'} gap={'0.5rem'}
      >
        <IconButton
          bg={'white'} 
          color={'gray.400'}
          disabled={currentPage === 1}
          onClick={()=>paginate(currentPage - 1)}
          border='1px solid'
          borderColor='gray.300'
          aria-label='Previous Page | Página Anterior' 
          icon={<ChevronLeftIcon w={5} h={5}/>}
        />

        {pageNumbers.map(page=>(
          <Box as='li' key={page}>
            <Button 
              bg={page===currentPage ? 'gray.300' : 'white'} 
              color={page===currentPage? 'white' : 'gray.300'}
              onClick={()=>paginate(page)}
              border='1px solid'
              borderColor='gray.300'
            >
              {page}
            </Button>
          </Box>
        ))}

        <IconButton
          bg={'white'} 
          color={'gray.400'}
          disabled={currentPage === pageNumbers.length}
          onClick={()=>paginate(currentPage + 1)}
          border='1px solid'
          borderColor='gray.300'
          aria-label='Previous Page | Página Anterior' 
          icon={<ChevronRightIcon w={5} h={5}/>}
        />
      </Flex>
    </Box>
  )
}

export default Pagination