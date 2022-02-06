import React, { useEffect, useState } from "react";
import { IndexesContainer, Index, IndexTitle, IndexValue } from "./style";

const Indexes = ({ data }) => {
  const [equity, setEquity] = useState();
  const [valueApplied, setValueApplied] = useState();
  const [result, setResult] = useState();
  const [profitability, setProfitability] = useState();

  useEffect(() => {
    let newData;
    if (data) {
      newData = data.data.snapshotByProduct;
      setData(newData);
    }
  }, [data]);

  const setData = (data) => {
    // console.log(data.position);

    let auxEquity = 0,
      auxValueApplied = 0,
      auxResult;

    data.forEach((index) => {
      auxEquity += index.position.equity;
      auxValueApplied += index.position.valueApplied;
    });

    setEquity(() => {
      auxEquity = auxEquity.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      });

      return auxEquity;
    });

    setValueApplied(() => {
      auxValueApplied = auxValueApplied.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      });

      return auxValueApplied;
    });

    auxResult = auxEquity - auxValueApplied;

    setResult(() => {
      auxResult = auxResult.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      });

      return auxResult;
    });

    setProfitability(() => {
      let aux = parseFloat(auxValueApplied) / parseFloat(auxResult);
      aux = (aux * 100).toFixed(2);
      return aux;
    });
  };

  return (
    <IndexesContainer>
      <Index>
        <IndexTitle>Saldo Bruto</IndexTitle>
        <IndexValue>R$ {equity}</IndexValue>
      </Index>

      <Index>
        <IndexTitle>Valor Aplicado</IndexTitle>
        <IndexValue>R$ {valueApplied}</IndexValue>
      </Index>

      <Index>
        <IndexTitle>Resultado</IndexTitle>
        <IndexValue>R$ {result}</IndexValue>
      </Index>

      <Index>
        <IndexTitle>Rentabilidade</IndexTitle>
        <IndexValue>{profitability}%</IndexValue>
      </Index>

      <Index>
        <IndexTitle>CDI</IndexTitle>
        <IndexValue>69,98%</IndexValue>
      </Index>

      <Index>
        <IndexTitle>0% Sobre CDI</IndexTitle>
        <IndexValue>69,98%</IndexValue>
      </Index>
    </IndexesContainer>
  );
};

export default Indexes;
