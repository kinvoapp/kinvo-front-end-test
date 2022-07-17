import styled from "@emotion/styled";
import React from "react";

const RendaFixaCards = (props) => {
  return (
    <Container>
      <Border />
      <InnerContainer>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 156px;
  height: 70px;
  background: white;
  border-radius: 8px;
  margin-right: 30px;
`;

const Border = styled.div`
  border-left: 4px solid #dae0e3;
  height: 40px;
  margin: 10px;
`;

const InnerContainer = styled.div``;

const CardTitle = styled.div`
  color: #4e5b61;
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 0.45px;
`;

const CardSubtitle = styled.div`
  color: #4C309B;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export default RendaFixaCards;
