import { Accordion, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { sidebarItems } from '../../data/sidebarItems';
import SidebarItem from './Items/SidebarItem';

function Sidebar() {

  const [activeItem, setActiveItem] = useState('');

  return (
    <Box minH='100vh' w='24vw' bg='white'>
      {sidebarItems.map((item, index)=>(
        <Accordion allowToggle key={index}>
          <SidebarItem item={item} activeItem={activeItem} setActiveItem={setActiveItem}/>
        </Accordion>
      ))}
    </Box>
  )
}

export default Sidebar