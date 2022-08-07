import { Box, Flex, Text} from "@chakra-ui/react"

interface Props{
    title: string
    money: string
}

export default function Card({title, money}: Props){
    return(
        <Flex marginLeft={3} w='11.8rem' bg='white' borderRadius='0.5rem' justifyContent='flex-start' alignItems='center' p={4}>
              <Box paddingLeft={4} borderLeft='solid 0.2rem #DAE0E3'>
                <Text textTransform='uppercase' fontWeight='lighter' fontSize={10}>{title}</Text>
                <Text textColor='#4C309B' fontSize={15}>R$ {money}</Text>
              </Box>
            </Flex>
    )
}