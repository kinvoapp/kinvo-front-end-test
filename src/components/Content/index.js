/* eslint-disable react/prop-types */
import React from 'react';
import { Wrapper, Title } from './styles';

export const Content = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};
