import React, { useEffect, useState } from "react";
import {
  Cabecalho,
  Navegacao,
  NavegacaoItem,
  Texto,
  Titulo,
  Valor,
} from "./style";

const Header = (props) => {
  const [saldoBruto, setSaldoBruto] = useState();
  const [valorAplicado, setValorAplicado] = useState(0);
  const [rentabilidade, setRentabilidade] = useState(0);

  useEffect(() => {
    if (typeof props.data !== "undefined") {
      let aux = 0;

      setValorAplicado(() => {
        aux = props.data.data.snapshotByPortfolio.valueApplied;
        aux = aux.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
        return aux;
      });
      setSaldoBruto(() => {
        aux = props.data.data.snapshotByPortfolio.equity;
        aux = aux.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
        return aux;
      });
      setRentabilidade(props.data.data.snapshotByPortfolio.percentageProfit);
    }
  }, [props.data]);

  return (
    <Cabecalho>
      <figure>
        <img
          src={require("../../assets/logo_kinvo_premium.png")}
          alt="Logo Kinvo Premium"
        />
      </figure>

      <Navegacao>
        <NavegacaoItem>
          <figure>
            <img
              src={require("../../assets/icone_saldo_bruto.png")}
              alt="Saldo Bruto"
            />
          </figure>
          <Texto>
            <Titulo>Saldo Bruto</Titulo>
            <Valor>{saldoBruto}</Valor>
          </Texto>
        </NavegacaoItem>

        <NavegacaoItem>
          <figure>
            <img
              src={require("../../assets/icone_valor_aplicado.png")}
              alt="Valor Aplicado"
            />
          </figure>
          <Texto>
            <Titulo>Valor Aplicado</Titulo>
            <Valor>{valorAplicado}</Valor>
          </Texto>
        </NavegacaoItem>

        <NavegacaoItem>
          <figure>
            <img
              src={require("../../assets/icone_rentabilidade.png")}
              alt="Rentabilidade"
            />
          </figure>
          <Texto>
            <Titulo>Rentabilidade</Titulo>
            <Valor>{rentabilidade}%</Valor>
          </Texto>
        </NavegacaoItem>

        <NavegacaoItem>
          <figure>
            <img
              src={require("../../assets/icone_minha_carteira.png")}
              alt="Minha Carteira"
            />
          </figure>
          <Texto>
            <Titulo>Carteira</Titulo>
            <Valor>Minha Carteira</Valor>
          </Texto>
        </NavegacaoItem>

        <NavegacaoItem>
          <figure>
            <img src={require("../../assets/icone_menu.png")} alt="Menu" />
          </figure>
        </NavegacaoItem>
      </Navegacao>
    </Cabecalho>
  );
};

export default Header;
