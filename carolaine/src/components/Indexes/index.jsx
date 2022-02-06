import React, { useEffect, useState } from "react";
import { IndexesContainer, Index, IndexTitle, IndexValue } from "./style";

const Indexes = ({ data }) => {
  const [equity, setEquity] = useState();
  const [valueApplied, setValueApplied] = useState();
  const [result, setResult] = useState();
  const [profitability, setProfitability] = useState();
  const [indexerValue, setIndexerValue] = useState();
  const [percentageOverIndexer, setPercentageOverIndexer] = useState();

  useEffect(() => {
    let newData;
    if (data) {
      newData = data.data.snapshotByProduct;
      setData(newData);
    }
  }, [data]);

  const setData = (data) => {
    console.log(data);

    let auxEquity = 0,
      auxValueApplied = 0,
      auxResult = 0,
      auxIndexerValue = 0,
      auxPercentageOverIndexer = 0;

    data.forEach((index) => {
      auxEquity += index.position.equity;
      auxValueApplied += index.position.valueApplied;
      auxIndexerValue += index.position.indexerValue;
      auxPercentageOverIndexer += index.position.percentageOverIndexer;
    });

    setEquity(() => {
      const value = auxEquity.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      });

      return value;
    });

    setValueApplied(() => {
      const value = auxValueApplied.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      });

      return value;
    });

    auxResult = auxEquity - auxValueApplied;

    setResult(() => {
      const value = auxResult.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      });

      return value;
    });

    setProfitability(() => {
      let aux = parseFloat(auxValueApplied) / parseFloat(auxResult);
      aux = (aux * 100).toFixed(2);
      return aux;
    });

    setIndexerValue(() => {
      // console.log(data.length);
      // console.log(auxIndexerValue);
      let aux = (auxIndexerValue / data.length).toFixed(2);
      return aux;
    });

    setPercentageOverIndexer(() => {
      let aux = (auxPercentageOverIndexer / data.length).toFixed(2);
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
        <IndexValue>{indexerValue}%</IndexValue>
      </Index>

      <Index>
        <IndexTitle>% Sobre CDI</IndexTitle>
        <IndexValue>{percentageOverIndexer}%</IndexValue>
      </Index>
    </IndexesContainer>
  );
};

export default Indexes;
