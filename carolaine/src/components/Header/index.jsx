import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Cabecalho,
  Navegacao,
  NavegacaoItem,
  Texto,
  Titulo,
  Valor,
  Logo,
} from "./style";

const Header = () => {
  // const [dados, setDados] = useState();
  const [saldoBruto, setSaldoBruto] = useState();
  const [valorAplicado, setValorAplicado] = useState(0);
  // const [rendas, setRendas] = useState();
  let rendas,
    aux = 0;

  useEffect(() => {
    const fetchDados = async () => {
      await axios
        .get(
          "https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData"
        )
        .then(function (response) {
          setDados(response.data);
        });
    };

    fetchDados();
  }, []);

  const setDados = (dados) => {
    rendas = dados.data.snapshotByProduct;
    rendas.forEach((renda) => {
      setValorAplicado((state) => {
        console.log(renda.position.valueApplied);
        return state + renda.position.valueApplied;
      });
    });

    console.log(valorAplicado);
  };

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
            <Valor>130.521.230,02</Valor>
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
            <Valor>130.521.230,02</Valor>
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
