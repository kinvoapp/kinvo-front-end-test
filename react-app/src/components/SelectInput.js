import React from "react";
import styled from "styled-components";

const SelectInput = ({ searchValue, handleChange, data }) => {
  return (
    <Container>
      <Input
        onChange={handleChange}
        value={searchValue}
        type="select"
        placeholder="Classe"
      >
        {data.map((item) => {
          return (
            <option value={item.fixedIncome.bondType}>
              {item.fixedIncome.bondType}
            </option>
          );
        })}
      </Input>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

const Input = styled.select`
  border-radius: 10px;
  width: 240px;
  height: 32px;
  font-size: 10px;
  padding: 5px 10px;
`;

export default SelectInput;
