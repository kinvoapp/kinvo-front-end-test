import React from 'react';

import TituloIcon from '../../assets/header/titulo.svg';
import SaldoBrutoIcon from '../../assets/header/saldo-bruto.svg';
import ValorAplicadoIcon from '../../assets/header/valor-aplicado.svg';
import RentabilidadeIcon from '../../assets/header/rentabilidade.svg';
import CarteiraIcon from '../../assets/header/carteira.svg';
import MenuHeaderIcon from '../../assets/header/menu.svg';

import {
  HeaderContainer,
  HeaderSubContainer,
  TitleImg,
  CardHeader,
  IconCardHeader,
  TitleCardHeader,
  ValueCardHeader,
  DescriptionCardHeader,
  MenuIconHeader,
} from './styles';

// TODO: Transformar (CardHeader) em um componente isolado.
// TODO: Trocar a fonte do cardheader CARTEIRA.

function Header() {
  return (
    <HeaderContainer>
      <TitleImg src={TituloIcon} alt="Kinvo Premium" />
      <HeaderSubContainer>
        <CardHeader>
          <IconCardHeader src={SaldoBrutoIcon} alt="Saldo Bruto Icone" />
          <DescriptionCardHeader>
            <TitleCardHeader>SALDO BRUTO</TitleCardHeader>
            <ValueCardHeader>130.521.230,02</ValueCardHeader>
          </DescriptionCardHeader>
        </CardHeader>

        <CardHeader>
          <IconCardHeader src={ValorAplicadoIcon} alt="Valor Aplicado Icone" />
          <DescriptionCardHeader>
            <TitleCardHeader>VALOR APLICADO</TitleCardHeader>
            <ValueCardHeader>521.230,02</ValueCardHeader>
          </DescriptionCardHeader>
        </CardHeader>

        <CardHeader>
          <IconCardHeader src={RentabilidadeIcon} alt="Rentabilidade Icone" />
          <DescriptionCardHeader>
            <TitleCardHeader>RENTABILIDADE</TitleCardHeader>
            <ValueCardHeader>2.34%</ValueCardHeader>
          </DescriptionCardHeader>
        </CardHeader>

        <CardHeader>
          <IconCardHeader src={CarteiraIcon} alt="Carteira Icone" />
          <DescriptionCardHeader>
            <TitleCardHeader>CARTEIRA</TitleCardHeader>
            <ValueCardHeader>Minha Carteira</ValueCardHeader>
          </DescriptionCardHeader>
        </CardHeader>

        <MenuIconHeader src={MenuHeaderIcon} alt="Menu Header Icone" />
      </HeaderSubContainer>
    </HeaderContainer>
  );
}

export default Header;
