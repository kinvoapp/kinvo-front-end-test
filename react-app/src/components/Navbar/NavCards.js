import React from "react";
import styled from "styled-components";

const NavCards = (props) => {
  return (
    <div>
      <Card>
        <CardIconWrapper
          style={{ backgroundColor: props.color, color: "white" }}
        >
          {props.icon}
        </CardIconWrapper>
        <CardInfo>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
        </CardInfo>
      </Card>
    </div>
  );
};

const Card = styled.div`
  background-color: #fff;
  width: 172px;
  height: 60px;
  margin-inline: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardIconWrapper = styled.div`
  background-color: #dae0e3;
  border-radius: 50%;
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const CardInfo = styled.div`
  width: 100%;
`;
const CardTitle = styled.div`
  font-size: 9px;
  color: #9b9b9b;
  text-transform: uppercase;
  letter-spacing: 0.45px;
`;
const CardSubtitle = styled.div`
  font-size: 14px;
  font-weight: normal;
`;

export default NavCards;
