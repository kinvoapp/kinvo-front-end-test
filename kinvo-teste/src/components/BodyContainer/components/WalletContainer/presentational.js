import React from 'react';

import WalletInfoButtons from './components/WalletInfoButtons';
import ProductsSection from './components/ProductsSection';

import { Container } from './styles';

function WalletContainerPresentational(props) {
  const { apiData } = props;

  return (
    <Container>
      <WalletInfoButtons apiData={apiData} />
      <ProductsSection apiData={apiData} />
    </Container>
  );
}

export default WalletContainerPresentational;
