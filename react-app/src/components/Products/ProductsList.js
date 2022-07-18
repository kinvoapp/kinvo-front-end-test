import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import ProductsListCard from "./ProductsListCards";

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const URL =
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";

  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data.data.snapshotByProduct);
    });
  }, [URL]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const filteredData = searchValue
    ? data.filter((data) => {
        return data.fixedIncome.name
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      })
    : data;

  //.sort((a, b) => a.due.daysUntilExpiration - b.due.daysUntilExpiration)
  console.log("o valor de sort: ", sort);
  return (
    <Container>
      <H1>Minhas Rendas Fixas</H1>

      <InputWrapper>
        <SelectInput handleSort={handleSort} />
        <TextInput
          searchValue={searchValue}
          data={filteredData}
          handleChange={handleChange}
        />
      </InputWrapper>
      {sort
        ? filteredData.map((item) => {
            return <ProductsListCard data={item} />;
          })
        : filteredData
            .sort(
              (a, b) => a.due.daysUntilExpiration - b.due.daysUntilExpiration
            )
            .map((item) => {
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

const InputWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
`;

export default ProductsList;
