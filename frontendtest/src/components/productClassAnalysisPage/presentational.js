import React from 'react';

import {
  Container,
  ProductAcess,
  ProductSearch,
  Products,
} from './styles';

import ChooseInputs from './components/ChooseInputs';
import ClassAnalysis from './components/ClassAnalysis';
import ProductList from './components/ProductList';

function ProductClassAnalysisPage() {
  return (
    <Container>
      <ProductAcess>
        <h4>
          Análise por Classe de Ativos
        </h4>
        <ProductSearch>
          <ChooseInputs />
          <Products>
            <ClassAnalysis />
            <ProductList />
          </Products>
        </ProductSearch>
      </ProductAcess>
    </Container>
  );
}

export default ProductClassAnalysisPage;
