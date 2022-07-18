import styled from "@emotion/styled";
import React from "react";

const ProductsTituloCard = ({ data }) => {
  
    return (
      <Container>
        <CardInfoWrapper>
          <Title>TÍTULO</Title>
          <Subtitle>{data.name}</Subtitle>
        </CardInfoWrapper>
        <CardDescripWrapper>
          <Class>CLASSE</Class>
          <Tipo>{data.bondType}</Tipo>
        </CardDescripWrapper>
      </Container>
    );
  
};

const Container = styled.div`
  border: 1px solid #dae0e3;
  border-radius: 8px;
  width: 364px;
  height: 77px;
  display: flex;
  padding: 5px;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Title = styled.div`
  font-size: 9px;
  color: #9b9b9b;
`;
const Subtitle = styled.div`
  font-size: 11px;
  color: #9b9b9b;
  width: 60%;
`;
const CardDescripWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Class = styled.div`
  font-size: 9px;
  color: #9b9b9b;
`;
const Tipo = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #4c309b;
  margin-bottom: 4px;
`;

export default ProductsTituloCard;
