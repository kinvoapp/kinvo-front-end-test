import React from 'react';

import WalletInfoButtons from './components/WalletInfoButtons';
import ProductsSection from './components/ProductsSection';

import { Article, ProductsSectionContainer } from './styles';

function WalletContainerPresentational(props) {
  const { apiData } = props;
  return (
    <Article>
      <WalletInfoButtons apiData={apiData} />
      <ProductsSectionContainer>
        <ProductsSection apiData={apiData} />
      </ProductsSectionContainer>
    </Article>
  );
}

export default WalletContainerPresentational;
