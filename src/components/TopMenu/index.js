import React from 'react'
import Logo from '../../assets/images/logo-kinvo.png';
import './TopMenu.css';
import InfoLabel from './components/InfoLabel';
import IconRentabilidade from '../../assets/icons/icon-rentabilidade.svg';
import IconSaldoBruto from '../../assets/icons/icon-saldo-bruto.svg';
import IconValorAplicado from '../../assets/icons/icon-saldo-bruto.svg';
import IconMinhaCarteora from '../../assets/icons/icon-minha-carteira.svg';
import IconMenuExpand from '../../assets/icons/icon-menu-expand.svg';

require('typeface-montserrat')

function TopMenu (props){

    return(
        <nav className="TopMenu">
            <img src={Logo} className="logo"></img>

            <ul>
                <InfoLabel Logo={IconSaldoBruto} Value="130.521.230,02">
                    SALDO BRUTO
                </InfoLabel>

                <InfoLabel Logo={IconValorAplicado} Value="521.230,02">
                    VALOR APLICADO
                </InfoLabel>

                <InfoLabel Logo={IconRentabilidade} Value="2,34%">
                    RENTABILIDADE
                </InfoLabel>

                <InfoLabel Logo={IconMinhaCarteora} Value="MINHA CARTEIRA">
                    CARTEIRA
                </InfoLabel>

                <InfoLabel Logo={IconMenuExpand}>

                </InfoLabel>
            </ul>
        </nav>
    );

}

export default TopMenu;