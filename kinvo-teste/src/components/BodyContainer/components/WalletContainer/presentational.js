import React from 'react';

import WalletInfoButtons from './components/WalletInfoButtons';
import ProductsSection from './components/ProductsSection';

import { Article, ProductsSectionContainer } from './styles';

function WalletContainer() {
  return (
    <Article>
      <WalletInfoButtons />
      <ProductsSectionContainer>
        <ProductsSection />
      </ProductsSectionContainer>
    </Article>
  );
}

export default WalletContainer;
