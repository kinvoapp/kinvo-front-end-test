import { Accordion, AccordionButton, Text, AccordionItem, AccordionPanel, Avatar, AvatarGroup, Box, Stack } from "@chakra-ui/react";
import { FaBalanceScale } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export function SidebarNav() {
    return (
        <Stack w='full' spacing="12" align="flex-start">
            <Accordion allowMultiple>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <AvatarGroup spacing='1rem'>
                                            <Avatar bg='#DAE0E3' icon={<FaBalanceScale fontSize='1.5rem' color="white" />} />
                                            <Box>
                                                <Text fontSize={15} fontWeight='bold' textColor='#707B81'>Resumo da Carteira</Text>
                                            </Box>
                                        </AvatarGroup>
                                    </Box>
                                    {isExpanded ? (
                                        <IoIosArrowDown fontSize='12px' />
                                    ) : (
                                        <IoIosArrowForward fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <AvatarGroup spacing='1rem'>
                                            <Avatar bg='#DAE0E3' icon={<FaBalanceScale fontSize='1.5rem' color="white" />} />
                                            <Box>
                                                <Text fontSize={15} fontWeight='bold' textColor='#707B81'>Resumo da Carteira</Text>
                                            </Box>
                                        </AvatarGroup>
                                    </Box>
                                    {isExpanded ? (
                                        <IoIosArrowDown fontSize='12px' />
                                    ) : (
                                        <IoIosArrowForward fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <AvatarGroup spacing='1rem'>
                                            <Avatar bg='#DAE0E3' icon={<FaBalanceScale fontSize='1.5rem' color="white" />} />
                                            <Box>
                                                <Text fontSize={15} fontWeight='bold' textColor='#707B81'>Resumo da Carteira</Text>
                                            </Box>
                                        </AvatarGroup>
                                    </Box>
                                    {isExpanded ? (
                                        <IoIosArrowDown fontSize='12px' />
                                    ) : (
                                        <IoIosArrowForward fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <AvatarGroup spacing='1rem'>
                                            <Avatar bg='#DAE0E3' icon={<FaBalanceScale fontSize='1.5rem' color="white" />} />
                                            <Box>
                                                <Text fontSize={15} fontWeight='bold' textColor='#707B81'>Resumo da Carteira</Text>
                                            </Box>
                                        </AvatarGroup>
                                    </Box>
                                    {isExpanded ? (
                                        <IoIosArrowDown fontSize='12px' />
                                    ) : (
                                        <IoIosArrowForward fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <AvatarGroup spacing='1rem'>
                                            <Avatar bg='#DAE0E3' icon={<FaBalanceScale fontSize='1.5rem' color="white" />} />
                                            <Box>
                                                <Text fontSize={15} fontWeight='bold' textColor='#707B81'>Resumo da Carteira</Text>
                                            </Box>
                                        </AvatarGroup>
                                    </Box>
                                    {isExpanded ? (
                                        <IoIosArrowDown fontSize='12px' />
                                    ) : (
                                        <IoIosArrowForward fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <AvatarGroup spacing='1rem'>
                                            <Avatar bg='#DAE0E3' icon={<FaBalanceScale fontSize='1.5rem' color="white" />} />
                                            <Box>
                                                <Text fontSize={15} fontWeight='bold' textColor='#707B81'>Resumo da Carteira</Text>
                                            </Box>
                                        </AvatarGroup>
                                    </Box>
                                    {isExpanded ? (
                                        <IoIosArrowDown fontSize='12px' />
                                    ) : (
                                        <IoIosArrowForward fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <AvatarGroup spacing='1rem'>
                                            <Avatar bg='#DAE0E3' icon={<FaBalanceScale fontSize='1.5rem' color="white" />} />
                                            <Box>
                                                <Text fontSize={15} fontWeight='bold' textColor='#707B81'>Resumo da Carteira</Text>
                                            </Box>
                                        </AvatarGroup>
                                    </Box>
                                    {isExpanded ? (
                                        <IoIosArrowDown fontSize='12px' />
                                    ) : (
                                        <IoIosArrowForward fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                

            </Accordion>

        </Stack>
    )
}  