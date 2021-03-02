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
                    <Title>MINHA POSIÇÃO</Title>
                    <RiInformationLine color="#4E5B61"/>
                </ContainerTitle>
                <ContainerBody>
                    <SeparatorClass>
                        <Title>VALOR INVES.</Title>
                        <ClassBody>{this.props.avalueApplied}</ClassBody>
                    </SeparatorClass>
                    <SeparatorClass>
                        <Title>SALDO BRUTO</Title>
                        <ClassBody>{this.props.equity}</ClassBody>
                    </SeparatorClass>
                    <SeparatorClass>
                        <Title>RENT.</Title>
                        <ClassBody>{this.props.profitability}</ClassBody>
                    </SeparatorClass>
                    <SeparatorClass>
                        <Title>% DA CART.</Title>
                        <ClassBody>{this.props.portfolioPercentage + '%'}</ClassBody>
                    </SeparatorClass>
                    <SeparatorClass>
                        <Title>CDI</Title>
                        <ClassBody>{this.props.indexerValue}</ClassBody>
                    </SeparatorClass>
                    <SeparatorClass>
                        <Title>SOBRE CDI</Title>
                        <ClassBody>{this.props.percentageOverIndexer}</ClassBody>
                    </SeparatorClass>
                </ContainerBody>
            </Container>
        )
    }
}

export default PositionIncome;