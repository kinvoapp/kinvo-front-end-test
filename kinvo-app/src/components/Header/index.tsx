import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from "@chakra-ui/icons";
import { Avatar, AvatarGroup, Box, Flex, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { stLogoKinvo } from "../icons/st-LogoKinvo";
import { FaBalanceScale } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export default function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            px="6"
            align="center"
            justifyContent='space-between'
        >
            <Flex align="center">
                <Icon
                    as={stLogoKinvo}
                    w={20} h={20}
                />
                <Text
                    fontSize={["2xl", "3xl"]}
                    fontWeight="lighter"
                    letterSpacing="tight"
                    w="64"
                >
                    premium
                </Text>

            </Flex>

            <Flex gap={8} >

                <AvatarGroup spacing='1rem'>
                    <Avatar bg='#DAE0E3' icon={<FaBalanceScale fontSize='1.5rem' color="white" />} />
                    <Box>
                        <Text fontSize={10} textTransform='uppercase'>Saldo Bruto</Text>
                        <Text fontSize={15} fontWeight='bold' textColor='#707B81'>130.654.645,00</Text>
                    </Box>
                </AvatarGroup>

                <AvatarGroup spacing='1rem'>
                    <Avatar bg='#DAE0E3' icon={<FaBalanceScale fontSize='1.5rem' color="white" />} />
                    <Box>
                        <Text fontSize={10} textTransform='uppercase'>Valor Aplicado</Text>
                        <Text fontSize={15} fontWeight='bold' textColor='#707B81'>130.654.645,00</Text>
                    </Box>
                </AvatarGroup>

                <AvatarGroup spacing='1rem'>
                    <Avatar bg='#DAE0E3' icon={<FaBalanceScale fontSize='1.5rem' color="white" />} />
                    <Box>
                        <Text fontSize={10} textTransform='uppercase'>Rentabilidade</Text>
                        <Text fontSize={15} fontWeight='bold' textColor='#707B81'>130.654.645,00</Text>
                    </Box>
                </AvatarGroup>

                <AvatarGroup spacing='1rem'>
                    <Avatar bg='#5D41AC' icon={<IoIosArrowDown fontSize='1.5rem' color="white" />} />
                    <Box>
                        <Text fontSize={10} textTransform='uppercase'>Carteira</Text>
                        <Text fontSize={15} fontWeight='bold' textColor='#707B81'>Minha Carteira</Text>
                    </Box>
                </AvatarGroup>

                <Menu>
                    <MenuButton
                        borderRadius='50%'
                        bg='#5D41AC'
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon color='white'/>}
                        variant='outline'
                        size='lg'
                    />
                    <MenuList>
                        <MenuItem icon={<AddIcon />} command='⌘T'>
                            New Tab
                        </MenuItem>
                        <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                            New Window
                        </MenuItem>
                        <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                            Open Closed Tab
                        </MenuItem>
                        <MenuItem icon={<EditIcon />} command='⌘O'>
                            Open File...
                        </MenuItem>
                    </MenuList>
                </Menu>

            </Flex>



        </Flex>
    )
}