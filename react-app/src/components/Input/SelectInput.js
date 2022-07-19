import React from "react";
import styled from "styled-components";

const SelectInput = ({ handleSort }) => {
  return (
    <Container>
      <Border>
        <Input onChange={handleSort} type="select">
          <option disabled selected>Ordenar por</option>
          <option>Vencimento</option>
        </Input>
      </Border>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

const Border = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  border: 1px solid black;
  border-radius: 8px;
`;

const Input = styled.select`
  border-radius: 10px;
  height: 32px;
  border: none;
  font-size: 12px;
  color: #627179;
  font-weight: bold;
  background-color: white;
  padding: 5px 10px;
`;

export default SelectInput;
