import React from 'react';

import { Container, Title, Value } from './styles';

class Items extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Title>
                    {this.props.title}
                </Title>
                <Value>
                    {this.props.value}
                </Value>
            </Container>
        )
    }    
}

export default Items;