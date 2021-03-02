import React from 'react';

import { Container, ContainerStyle, Title, Value } from './style'

class ContainerInfo extends React.Component{
    constructor(props){
        super(props)
    }

    mask = (type,value) => {
        if(type != 'percentage'){
            if(type == 'scdi'){
                return value + '%'
            }
            return value.toString().replace(/\D/,'').replace(/(\d{3})(\d{3})/, 'R$ $1.$2,')
        }
        return value.toString().replace(/\D/,'').replace(/(\d{2})(\d{2})/, '$1.$2%')
    }

    render(){
        return(
            <Container>
                <ContainerStyle>
                    <Title>{this.props.title}</Title>
                    <Value>{this.mask(this.props.type, this.props.value)}</Value>
                </ContainerStyle>
            </Container>
        );
    }    
}

export default ContainerInfo;