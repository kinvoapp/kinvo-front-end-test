import { Box, Flex, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, Text } from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useFeatch } from "../../hooks/useFeatch";

interface snapshotByProductProps {
    snapshotByProduct:{
        due: {
            date: string
            daysUntilExpiration: number
        },
        fixedIncome: {
            bondType: string
            name: string
            portfolioProductId: number
        },
        position: {
            equity: number
            indexerLabel: string
            indexerValue: number
            percentageOverIndexer: number
            portfolioPercentage: number
            profitability: number
            valueApplied: number
        }
    }
    
}

export default function MyLace() {

  const { value } = useFeatch<snapshotByProductProps[]>('https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData')
  console.log("🚀 ~ value", value?.snapshotByProduct)
  


    return (
        <>
            <Box bg='white' m={5} borderRadius='0.5rem'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex p={5}>
                        <Text fontWeight='lighter'>Rentabilidade de titulos</Text>
                    </Flex>

                    <Flex paddingRight={5} gap={4}>

                        <Select placeholder='Ordenar por'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    // eslint-disable-next-line react/no-children-prop
                                    children={<FiSearch color='gray.300' />}
                                />
                                <Input type='search' />
                            </InputGroup>
                        </Stack>
                    </Flex>

                </Flex>
                <Flex p={5} justifyContent='space-between' gap={2}>
                    <Flex border='solid 1px #DAE0E3' borderRadius='1rem' p={4}>
                        <Box >
                            <Flex gap={2} alignItems='center' paddingBottom={5}>
                                <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Title</Text>
                                <AiOutlineInfoCircle />
                            </Flex>
                            <Flex justifyContent='space-between' gap={10} w='100%'>
                                <Box>
                                    <Text fontSize={12} w='12rem' fontWeight='lighter'>Tesouro IPCA+ com Juros Semestrais 2024 (NTNB)</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Classe</Text>
                                    <Text fontSize={12} w='6rem' fontWeight='lighter' textColor='#8A51BA'>Tesouro Direto</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>

                    <Flex border='solid 1px #DAE0E3' borderRadius='1rem' p={4} >
                        <Box>
                            <Flex gap={2} alignItems='center' paddingBottom={5}>
                                <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>MINHA POSIÇÃO</Text>
                                <AiOutlineInfoCircle />
                            </Flex>
                            <Flex justifyContent='space-between' gap={5} w='100%'>
                                <Box>
                                    <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Valor inves.</Text>
                                    <Text fontWeight='lighter' textColor='#38BFA0'>1.300,00</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Saldo bruto</Text>
                                    <Text fontWeight='lighter' textColor='#38BFA0'>1.300,00</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Rent.</Text>
                                    <Text fontWeight='lighter' textColor='#38BFA0'>1.300,00</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>% da cart.</Text>
                                    <Text fontWeight='lighter' textColor='#38BFA0'>1.300,00</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>CDI</Text>
                                    <Text fontWeight='lighter' textColor='#38BFA0'>1.300,00</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Sobre CDI</Text>
                                    <Text fontWeight='lighter' textColor='#38BFA0'>1.300,00</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>

                    <Flex border='solid 1px #DAE0E3' borderRadius='1rem' p={4}>
                        <Box >
                            <Flex gap={2} alignItems='center' paddingBottom={5}>
                                <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>MINHA POSIÇÃO</Text>
                                <AiOutlineInfoCircle />
                            </Flex>
                            <Flex justifyContent='space-between' gap={5}>
                                <Box>
                                    <Text fontSize={12} w='7rem' fontWeight='lighter' textTransform='uppercase'>Data venc.</Text>
                                    <Text fontWeight='lighter' textColor='#008DCB'>07/08/2022</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={12} w='8rem' fontWeight='lighter' textTransform='uppercase'>Dias até venc.</Text>
                                    <Text fontWeight='lighter' textColor='#008DCB'>6548</Text>
                                </Box>

                            </Flex>
                        </Box>
                    </Flex>

                </Flex>

            </Box>


        </>

    )
}