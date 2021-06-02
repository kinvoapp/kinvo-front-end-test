import React from 'react';
import { Container } from './Content.styles';
import { ContentProps } from './Content.types';

const Content = (props: ContentProps) => {
  const { children } = props;

  return (
    <Container>
      <h2>Renda Fixa</h2>
      {children}
    </Container>
  );
}

export default Content;