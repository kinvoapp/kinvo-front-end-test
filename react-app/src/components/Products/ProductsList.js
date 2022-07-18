import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsListCard from "./ProductsListCards";

const ProductsList = () => {
  const [data, setData] = useState([]);

  const URL =
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";

  console.log(data);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data.data.snapshotByProduct);
    });
  }, [URL]);
  return (
    <Container>
      <H1>Minhas Rendas Fixas</H1>
      {data.map((item) => {
        console.log("item é", item);
        return <ProductsListCard data={item} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  background: #fff;
  margin-top: 20px;
  border-radius: 8px;
`;

const H1 = styled.div`
  font-size: 18px;
  color: #627179;
  padding: 14px;
`;

export default ProductsList;
