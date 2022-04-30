import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logoImg from '../../assets/ativos/logo.png';
import { navbarItems } from '../../data/navbarItems';

function Navbar() {

  return (
    <Box as='nav' bg='white' py={'1.5rem'} boxShadow={'sm'}>
      <Container maxW='container.xl' h='full' display='flex' justifyContent={'space-between'} alignItems={'center'}>
     
      {/* Logo Area */}
        <Box as='section' color='gray.800'>
          <Image src={logoImg} alt='kinvopremium'/>
        </Box>

        <Flex gap={'3rem'}>
          
          {/* Items Area */}
          <Flex as='ul' alignItems={'center'} gap={'2rem'}>
            {navbarItems.map((item, index)=>(
              <Flex as='li' key={index} gap={'0.625rem'} alignItems={'center'}>
                <Image src={item.imgSrc} alt={item.title} boxSize={'2rem'}/>
                <Box>
                  <Heading as='h6' fontWeight={'normal'} fontSize={'9px'} color={'brand.darkGray'}>{item.title.toUpperCase()}</Heading>
                  <Text fontSize={'1rem'} fontWeight={'bold'} color={'brand.darkGray'}>{item.value}</Text>
                </Box>
              </Flex>
            ))}
          </Flex>

          {/* Menu Button */}
          <Box>
            <IconButton 
              variant='outline'
              bg='brand.darkPurple'
              _hover={{backgroundColor: 'brand.lightPurple'}}
              color='white'
              rounded='full'
              border='none'
              aria-label='Menu Button'
              icon={<HamburgerIcon />}
            />
          </Box>
        </Flex>

      </Container>
    </Box>
  )
}

export default Navbar