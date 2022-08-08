import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: 10px;
`;

export const Card = styled.div`
  width: 172px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 20px;

  p.titulo-card{
    font-size: 9px;
    margin-bottom: 4px;
  }

  p.valor-card{
    color: #4C309B;
    font-weight: bold;
  }
`;

export const Title = styled.h2`
  font-weight: 20px;
  color: #4C309B;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 10px;

`;