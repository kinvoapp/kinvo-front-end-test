import { Container, Title, Amount } from './style'

const Value = ( props ) => {

    return(

        <Container>
            <Title >{props.title}</Title>
            <Amount color={props.color}>{props.value}</Amount>
        </Container>
    )
}

export default Value