import React from 'react';
//import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Container, Value } from './styles';

export function Cards() {
  return (
    <Container>
      <div>
        <>
          <span />
          <Value title="SALDO BRUTO">R$</Value>
        </>

        <Skeleton />
      </div>
    </Container>
  );
}
