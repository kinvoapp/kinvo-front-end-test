import { Box, Flex, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface Props {
    dateVenc: string
    dateDay: string
}

export default function CardDate({dateVenc,dateDay}: Props) {
    return (
        <Flex border='solid 1px #DAE0E3' borderRadius='1rem' p={4}>
            <Box >
                <Flex gap={2} alignItems='center' paddingBottom={5}>
                    <Text fontSize={12} fontWeight='lighter' textTransform='uppercase'>MINHA POSIÇÃO</Text>
                    <AiOutlineInfoCircle />
                </Flex>
                <Flex justifyContent='space-between' gap={5}>
                    <Box>
                        <Text fontSize={12} w='7rem' fontWeight='lighter' textTransform='uppercase'>DATA VENC.</Text>
                        <Text fontWeight='lighter' textColor='#008DCB'>{dateVenc}</Text>
                    </Box>
                    <Box>
                        <Text fontSize={12} w='8rem' fontWeight='lighter' textTransform='uppercase'>DIAS ATÉ VENC.</Text>
                        <Text fontWeight='lighter' textColor='#008DCB'>{dateDay}</Text>
                    </Box>

                </Flex>
            </Box>
        </Flex>
    )
}