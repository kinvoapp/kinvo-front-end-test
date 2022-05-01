import { Box, Title, Amount } from './style'

const BoxValue = ( props ) => {

    return(

        <Box>
            <Title>{props.title}</Title>
            <Amount>{`R$${props.amount}`}</Amount>
        </Box>
    )
}

export default BoxValue