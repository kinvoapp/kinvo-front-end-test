import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import SidebarSubItem from './SidebarSubItem';

function SidebarItem({item, activeItem, setActiveItem}) {

  const [activeSubItem, setActiveSubItem] = useState('');

  const {imgSrc, title} = item;
  
  return (
    <AccordionItem
      w='full'
      bg={activeItem === title ? 'brand.hoverBgColor' : 'white'}
      py={'0.5rem'}
      _hover={{backgroundColor: 'brand.hoverBgColor'}} 
      onClick={()=>{setActiveItem(title)}}
    >
      <h2>
        <AccordionButton _hover={{bg: 'transparent'}}>
          <Flex flex={1} gap={'1rem'} alignItems={'center'} textAlign={'left'}>
            <Box>
              <Image src={imgSrc} alt={title} boxSize={'2.5rem'}/>
            </Box>
            <Heading as='h3' fontSize={'1rem'} fontWeight={'medium'} color={'brand.darkGray'} w='55%'>
              {title}
            </Heading>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      
      {item.subItems &&
        <AccordionPanel pb={4}>
          <Accordion allowToggle>
            {item.subItems.map((subItem, index)=>(
              <SidebarSubItem key={index} item={subItem} activeSubItem={activeSubItem} setActiveSubItem={setActiveSubItem}/>
            ))}
          </Accordion>
        </AccordionPanel>
      }
    </AccordionItem>
  )
}

export default SidebarItem