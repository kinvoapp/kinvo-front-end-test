import React from 'react'
import { RiInformationLine } from 'react-icons/ri'

import { 
    Container,
    ContainerTitle,
    ContainerBody,
    Separator,
    SeparatorClass,
    Title,
    TitleBody,
    ClassBody,
} from './style'

class PositionIncome extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <ContainerTitle>
                    <Title>VENCIMENTO</Title>
                    <RiInformationLine color="#4E5B61"/>
                </ContainerTitle>
                <ContainerBody>
                    <SeparatorClass>
                        <Title>DATA VENC.</Title>
                        <ClassBody>{this.props.date}</ClassBody>
                    </SeparatorClass>
                    <SeparatorClass>
                        <Title>DIAS ATÉ VENC.</Title>
                        <ClassBody>{this.props.days}</ClassBody>
                    </SeparatorClass>
                </ContainerBody>
            </Container>
        )
    }
}

export default PositionIncome;