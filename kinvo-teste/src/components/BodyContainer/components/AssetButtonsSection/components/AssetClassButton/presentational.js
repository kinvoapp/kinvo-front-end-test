import React from 'react';
import { Container } from './styles';

function AssetClassButton(props) {
  const { getState, className } = props;
  return (
    <Container active={getState}>
      <h1>{className}</h1>
    </Container>
  );
}

export default AssetClassButton;
