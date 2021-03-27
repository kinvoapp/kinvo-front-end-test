import React from 'react';
import LogoPremium from '../../assets/logo_premium.png';
import { GiDiamondRing } from "react-icons/gi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { Container, Logo, InfoList, Info, InfoIcon, InfoText, Title, Subtitle } from './styles';

function Header() {
  return (
    <Container>
      <Logo src={LogoPremium} />

      <InfoList>
        <Info>
          <InfoIcon>
            <GiDiamondRing />
          </InfoIcon>
          <InfoText>
            <Title>Saldo Bruto</Title>
            <Subtitle>130.521.230,02</Subtitle>
          </InfoText>
        </Info>

        <Info>
          <InfoIcon>
            <AiOutlineArrowUp />
          </InfoIcon>
          <InfoText>
            <Title>Valor Aplicado</Title>
            <Subtitle>521.230,02</Subtitle>
          </InfoText>
        </Info>

        <Info>
          <InfoIcon>
            <BsGraphUp style={{ fontSize: '15px' }} />
          </InfoIcon>
          <InfoText>
            <Title>Rentabilidade</Title>
            <Subtitle>2,34%</Subtitle>
          </InfoText>
        </Info>

        <Info>
          <InfoIcon active>
            <MdKeyboardArrowDown />
          </InfoIcon>
          <InfoText>
            <Title>Carteira</Title>
            <Subtitle>Minha Carteira</Subtitle>
          </InfoText>
        </Info>

        <Info>
          <InfoIcon active>
            <MdMenu />
          </InfoIcon>
        </Info>
      </InfoList>
    </Container>
  )
}

export default Header;