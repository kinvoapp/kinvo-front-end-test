import { Box, Flex, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface Props {
    equity: number
    indexerValue: number
    percentageOverIndexer: number
    portfolioPercentage: number
    profitability: number
    valueApplied: number
}

export default function CardInvest({ equity,
    indexerValue,
    percentageOverIndexer,
    portfolioPercentage,
    profitability,
    valueApplied, }: Props) {
    return (
        <Flex border='solid 1px #DAE0E3' borderRadius='1rem' p={4} >
            <Box>
                <Flex gap={2} alignItems='center' paddingBottom={5}>
                    <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>MINHA POSIÇÃO</Text>
                    <AiOutlineInfoCircle />
                </Flex>
                <Flex justifyContent='space-between' gap={5} w='100%'>
                    <Box>
                        <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Valor inves.</Text>
                        <Text fontWeight='lighter' textColor='#38BFA0'>{equity}</Text>
                    </Box>
                    <Box>
                        <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Saldo bruto</Text>
                        <Text fontWeight='lighter' textColor='#38BFA0'>{valueApplied}</Text>
                    </Box>
                    <Box>
                        <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Rent.</Text>
                        <Text fontWeight='lighter' textColor='#38BFA0'>{indexerValue}</Text>
                    </Box>
                    <Box>
                        <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>% da cart.</Text>
                        <Text fontWeight='lighter' textColor='#38BFA0'>{percentageOverIndexer}</Text>
                    </Box>
                    <Box>
                        <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>CDI</Text>
                        <Text fontWeight='lighter' textColor='#38BFA0'>{portfolioPercentage}</Text>
                    </Box>
                    <Box>
                        <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Sobre CDI</Text>
                        <Text fontWeight='lighter' textColor='#38BFA0'>{profitability}</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}