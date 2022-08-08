import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useQuery } from "react-query";

interface Props {
    description?: string
    name?: string
}

export default function CardTab({ name, description }: Props) {
    const { data } = useQuery('Mylace', async () => {
        const response = await axios.get('https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData')

        return response
    })
    const value = data?.data.data.snapshotByProduct
    
    return (
        <Flex border='solid 1px #DAE0E3' borderRadius='1rem' p={4}>
            <Box >
                <Flex gap={2} alignItems='center' paddingBottom={5}>
                    <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Title</Text>
                    <AiOutlineInfoCircle />
                </Flex>
                <Flex justifyContent='space-between' gap={10} w='100%'>
                    <Box>
                        <Text fontSize={12} w='12rem' fontWeight='lighter'>{description}</Text>
                    </Box>
                    <Box>
                        <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>Classe</Text>
                        <Text fontSize={12} w='6rem' fontWeight='lighter' textColor='#8A51BA'>{name}</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}