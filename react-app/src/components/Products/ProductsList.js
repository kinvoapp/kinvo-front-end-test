import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TextInput from "../Input/TextInput";
import SelectInput from "../Input/SelectInput";
import ProductsListCard from "./ProductsListCards";

const ProductsList = () => {
  //store api data
  const [data, setData] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(data.length / dataPerPage);
  const startIndex = currentPage * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = data.slice(startIndex, endIndex);

  //if false, render data using search input, false render data with sorting
  const [sort, setSort] = useState(false);

  //store the value typed from textinput
  const [searchValue, setSearchValue] = useState("");

  //api call
  const URL =
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get(URL)
        .then((response) => response.data.data.snapshotByProduct)
        .then((data) => data);
      setData(result);
    };
    fetchData();
  }, [URL]);

  //storing the input value
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  //change the sort
  const handleSort = () => {
    setSort(!sort);
  };

  //if user type on textinput filter data, else show data without filter
  const filteredData = searchValue
    ? data.filter((data) => {
        return data.fixedIncome.name
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      })
    : data;

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
      {/*ternary operator to check if user choose to sorted data or filtered with textinput */}
      {sort
        ? currentData
            // sort method for ordering ascending days until expiration
            .sort(
              (a, b) => a.due.daysUntilExpiration - b.due.daysUntilExpiration
            )
            .map((item, index) => {
              return <ProductsListCard key={index} data={item} />;
            })
        : currentData.map((item, index) => {
            return <ProductsListCard key={index} data={item} />;
          })}

      <PaginationButtonsWrapp>
        {Array.from(Array(pages), (item, index) => {
          return (
            <div>
              <Button
                value={index}
                onClick={(e) => setCurrentPage(Number(e.target.value))}
              >
                {index}
              </Button>
            </div>
          );
        })}
      </PaginationButtonsWrapp>
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

const PaginationButtonsWrapp = styled.div`
  padding-block: 30px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-inline: 5px;
  width: 34px;
  height: 35px;
  background: none;
  background-color: #ebeef0;
  border-radius: 8px;
  color: #627179;
`;

export default ProductsList;
