import React from "react";
import styled from "styled-components";

const TextInput = ({ searchValue, handleChange }) => {
  return (
    <Container>
      <Input
        onChange={handleChange}
        value={searchValue}
        type="search"
        placeholder="Pesquise pelo nome do Título"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

const Input = styled.input`
  border-radius: 10px;
  width: 240px;
  height: 32px;
  font-size: 10px;
  padding: 5px 10px;
`;

export default TextInput;
