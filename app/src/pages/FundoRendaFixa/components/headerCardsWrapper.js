/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

export default function CardsWrapper(props) {
  return (
    <Container>
      <div>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 175px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 31px -19px rgba(0, 0, 0, 1);

  div {
    border-left: 1px solid #d6d9dd;
    padding-left: 7px;
  }
`;

const Title = styled.h4`
  font-size: 09px;
  color: #707b81;
  text-transform: uppercase;
`;

const SubTitle = styled.p`
  font-size: 13px;
  color: #4c309b;
  font-weight: bold;
`;
