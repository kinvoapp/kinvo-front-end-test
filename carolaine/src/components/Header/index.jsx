import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  Navigation,
  NavigationItem,
  Text,
  Title,
  Value,
} from "./style";

const Header = ({ data }) => {
  const [equity, setEquity] = useState();
  const [valueApplied, setValueApplied] = useState(0);
  const [profitability, setProfitability] = useState(0);

  useEffect(() => {
    if (data) {
      let aux = 0;

      setValueApplied(() => {
        aux = data.data.snapshotByPortfolio.valueApplied.toLocaleString(
          "pt-BR",
          {
            minimumFractionDigits: 2,
          }
        );
        return aux;
      });

      setEquity(() => {
        aux = data.data.snapshotByPortfolio.equity.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        });
        return aux;
      });

      setProfitability(data.data.snapshotByPortfolio.percentageProfit);
    }
  }, [data]);

  return (
    <HeaderContainer>
      <figure>
        <img
          src={require("../../assets/logo_kinvo_premium.png")}
          alt="Logo Kinvo Premium"
        />
      </figure>

      <Navigation>
        <NavigationItem>
          <figure>
            <img
              src={require("../../assets/icone_saldo_bruto.png")}
              alt="Saldo Bruto"
            />
          </figure>
          <Text>
            <Title>Saldo Bruto</Title>
            <Value>{equity}</Value>
          </Text>
        </NavigationItem>

        <NavigationItem>
          <figure>
            <img
              src={require("../../assets/icone_valor_aplicado.png")}
              alt="Value Aplicado"
            />
          </figure>
          <Text>
            <Title>Valor Aplicado</Title>
            <Value>{valueApplied}</Value>
          </Text>
        </NavigationItem>

        <NavigationItem>
          <figure>
            <img
              src={require("../../assets/icone_rentabilidade.png")}
              alt="Rentabilidade"
            />
          </figure>
          <Text>
            <Title>Rentabilidade</Title>
            <Value>{profitability}%</Value>
          </Text>
        </NavigationItem>

        <NavigationItem>
          <figure>
            <img
              src={require("../../assets/icone_minha_carteira.png")}
              alt="Minha Carteira"
            />
          </figure>
          <Text>
            <Title>Carteira</Title>
            <Value>Minha Carteira</Value>
          </Text>
        </NavigationItem>

        <NavigationItem>
          <figure>
            <img src={require("../../assets/icone_menu.png")} alt="Menu" />
          </figure>
        </NavigationItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
