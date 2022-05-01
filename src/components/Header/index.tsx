import React from "react";
import {
  Container,
  Image,
  Item,
  ItemDescription,
  ItemTitle,
  ItemValue,
  Itens,
  Title,
} from "./styles";
import drawer from "../../assets/images/drawer.svg";
import minhaCarteira from "../../assets/images/minhaCarteira.svg";
import rentabilidade from "../../assets/images/rentabilidade.svg";
import saldoBruto from "../../assets/images/saldoBruto.svg";
import valorAplicado from "../../assets/images/valorAplicado.svg";

function Header() {
  return (
    <Container>
      <Title>kinvopremium</Title>
      <Itens>
        <Item>
          <Image alt="saldoBruto" src={saldoBruto} />
          <ItemValue>
            <ItemTitle>Saldo bruto</ItemTitle>
            <ItemDescription>130.521.230,02</ItemDescription>
          </ItemValue>
        </Item>
        <Item>
          <Image alt="valorAplicado" src={valorAplicado} />
          <ItemValue>
            <ItemTitle>Valor aplicado</ItemTitle>
            <ItemDescription>521.230,02</ItemDescription>
          </ItemValue>
        </Item>
        <Item>
          <Image alt="rentabilidade" src={rentabilidade} />
          <ItemValue>
            <ItemTitle>Rentabilidade</ItemTitle>
            <ItemDescription>2,34%</ItemDescription>
          </ItemValue>
        </Item>
        <Item>
          <Image alt="minhaCarteira" src={minhaCarteira} />
          <ItemValue>
            <ItemTitle>Minha carteira</ItemTitle>
            <ItemDescription>R$ 10</ItemDescription>
          </ItemValue>
        </Item>
        <Image alt="drawer" src={drawer} />
      </Itens>
    </Container>
  );
}

export default Header;
