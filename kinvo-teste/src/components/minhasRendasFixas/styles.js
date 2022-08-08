import styled from "styled-components";

export const RendaFixasHeader = styled.div`
  font-weight: 18px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  color:#627179;
`;

export const RendaFixas = styled.div`
  margin-left: 10px;
  padding-left: 10px;
  background-color: white;
  border-radius: 10px;
  padding-right: 21px;

  div.button-container{
    display:flex;
    margin-top: 20px;


  }

  button.pagination{
    min-width: 32px;
    height: 32px;
    border-radius: 6px;
    border-style: solid;
    border-width: thin;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    margin-right: 20px;
  }
`;

export const RendaFixasBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  margin-top: 20px;
`;

export const CardRendaFixas = styled.div`
  background-color: white;
  border-radius: 10px;
  border-color: #627179;
  border-style: solid;
  border-width: thin;
  padding-left: 10px;
  padding-right: 10px;

  div.container-dados{
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    min-width: 200px;
  }

  div.container-fixedIncome-name{
    width: 174px;
  }

  p.fixedIncome-name{
    font-size: 12px;
    color: #4E5B61;
  }

  p.fixedIncome-bondType-label{
    font-size: 9px;
    color: #4E5B61;
  }

  p.fixedIncome-bondType{
    font-size: 14px;
    color: #8A51BA;
  }

  div.container-resultado{
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
    min-width: 500px;
  }

  div.div-values{
    padding-right: 10px;
  }

  p.position-label{
    font-size: 9px;
    color: #4E5B61;
  }

  p.position-value{
    font-size: 16px;
    color: #38BFA0;
  }

  p.due-label{
    font-size: 9px;
    color: #4E5B61;
  }

  p.due-value{
    font-size: 16px;
    color: #008DCB;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;

  input#search-input{
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