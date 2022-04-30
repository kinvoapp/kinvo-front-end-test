import { AccordionButton, AccordionIcon, AccordionItem, Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function SidebarSubItem({item, activeSubItem, setActiveSubItem}) {

  const {title} = item;

  return (
    <AccordionItem
      w='full'
      bg={activeSubItem === title ? 'brand.hoverBgColor' : 'white'}
      py={'0.5rem'}
      _hover={{backgroundColor: 'brand.hoverBgColor'}} 
      onClick={()=>{setActiveSubItem(title)}}
    >
      <h2>
        <AccordionButton _hover={{bg: 'transparent'}}>
          <Flex flex={1} gap={'1rem'} alignItems={'center'}>
            <Box w='0.5rem' h='0.5rem' rounded='full' bg='brand.darkPurple'/>
            <Heading as='h3' fontSize={'1rem'} fontWeight={'medium'} color={'brand.darkGray'}>
              {title}
            </Heading>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </h2>
    </AccordionItem>
  )
}

export default SidebarSubItem