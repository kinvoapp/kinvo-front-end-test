import React from "react";
import styled from "styled-components";
import searchIcon from "../assets/iconSearch.svg";

const TextInput = ({ searchValue, handleChange }) => {
  return (
    <Container>
      <Border>
        <img alt="" style={{ marginLeft: "10px" }} src={searchIcon} />
        <Input
          onChange={handleChange}
          value={searchValue}
          type="search"
          placeholder="Pesquise pelo nome do Título"
        />
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
  width: 240px;
  height: 32px;
  border: 1px solid black;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 160px;
  height: 32px;
  font-size: 10px;
  padding: 5px 10px;
  border: none;
  outline: none;
`;

export default TextInput;
