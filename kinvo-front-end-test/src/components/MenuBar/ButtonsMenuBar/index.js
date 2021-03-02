import React from 'react';
import { FaAngleRight } from 'react-icons/fa'

import { Container, ContainerIcon, ContainerTitle, ContainerStyle } from './styles';

class ButtonsMenuBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <ContainerStyle>
                {this.props.active ? (
                    <ContainerIcon
                        isActive
                    >
                        {this.props.icon}
                    </ContainerIcon>
                ) : (
                    <ContainerIcon>
                        {this.props.icon}
                    </ContainerIcon>
                )}
                <ContainerTitle>
                {this.props.title}
                </ContainerTitle>
                </ContainerStyle>
                <FaAngleRight size={16} color="#707B81" style={this.props.active ? {transform: 'rotate(90deg)'} : null }/>
            </Container>            
        );
    }
}

export default ButtonsMenuBar;