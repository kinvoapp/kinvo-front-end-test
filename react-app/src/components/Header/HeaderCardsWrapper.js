import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderCards from "./HeaderCards";

const HeaderCardsWrapper = () => {
  const [data, setData] = useState([]);

  const URL =
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";

  console.log(data);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data.data.snapshotByPortfolio);
    });
  }, [URL]);
  return (
    <Container>
      <H1>Renda Fixa</H1>
      <Wrapper>
        <HeaderCards title={"Saldo bruto"} subtitle={"R$" + data.equity} />
        <HeaderCards
          title={"Valor Aplicado"}
          subtitle={"R$" + data.valueApplied}
        />
        <HeaderCards title={"Resultado"} subtitle={"R$" + data.equityProfit} />
        <HeaderCards
          title={"Rentabilidade"}
          subtitle={data.percentageProfit + "%"}
        />
        <HeaderCards title={"Cdi"} subtitle={data.indexerValue + "%"} />
        <HeaderCards
          title={"% sobre cdi"}
          subtitle={data.percentageOverIndexer + "%"}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  margin-top: 22px;
`;

const H1 = styled.div`
  font-size: 24px;
  color: #4c309b;
  font-weight: bold;
`;

export default HeaderCardsWrapper;
