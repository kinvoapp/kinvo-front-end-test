/* eslint-disable react/prop-types */
import React from 'react';
import { Wrapper, Header, Title } from './styles';

export const ContentSection = ({ title, children, filter }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        {filter && filter}
      </Header>
      {children}
    </Wrapper>
  );
};
