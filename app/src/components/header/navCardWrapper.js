/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

export default function NavCard(props) {
  return (
    <>
      <CardIcon>{props.icon}</CardIcon>
      <CardLink>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </CardLink>
    </>
  );
}

const CardLink = styled.div`
  margin-left: 10px;
`;

const Title = styled.p`
  font-size: 8px;
  text-transform: uppercase;
`;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const CardIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 4px;
  border: 1px solid #dae0e3;
  border-radius: 50%;
  color: #fff;
  background-color: #dae0e3;
`;
