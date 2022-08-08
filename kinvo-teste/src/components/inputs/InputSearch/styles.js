import styled from "styled-components";


export const Container = styled.div`

  input{
    min-width: 240px;
    height: 32px;
    border-radius: 6px;
    border-style: solid;
    border-width: thin;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    margin-left: 20px;
    padding-left: 5px;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;