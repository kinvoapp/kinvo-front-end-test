import React from 'react'
import {  FaChartLine, FaArrowUp, FaChevronDown, FaBars } from 'react-icons/fa'

import kinvo from '../../assets/kinvo-premium.svg'
import { 
    Container,
    ContainerLogo,
    ContainerMenu,
    Image,
    ButtonMenu,
    ButtonMenuFixed
} from './styles';
import Itens from './Itens'

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <ContainerLogo>
                    <Image src={kinvo} />
                </ContainerLogo>
                <ContainerMenu>
                    <ButtonMenuFixed>
                    </ButtonMenuFixed>
                    <Itens
                        title={'SALDO BRUTO'}
                        value={'130.521.230,02'}
                    />
                    <ButtonMenuFixed>
                        <FaArrowUp size={16} color="#FFFFFF"/>
                    </ButtonMenuFixed>
                    <Itens
                        title={'VALOR APLICADO'}
                        value={'521.230,02'}
                    />
                    <ButtonMenuFixed>
                        <FaChartLine size={16} color="#FFFFFF"/>
                    </ButtonMenuFixed>
                    <Itens
                        title={'RENTABILIDADE'}
                        value={'2,34%'}
                    />
                    <ButtonMenu>
                        <FaChevronDown size={16} color="#FFFFFF"/>
                    </ButtonMenu>
                    <Itens
                        title={'CARTEIRA'}
                        value={'Minha Carteira'}
                    />
                    <ButtonMenu>
                        <FaBars size={16} color="#FFFFFF"/>
                    </ButtonMenu>
                </ContainerMenu>
            </Container>
        );
    }
}

export default Header;