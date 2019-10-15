import React from 'react';

import SearchFilter from './components/SearchFilter';
import SearchList from './components/SearchList';

import { TextBoxLoading, Container } from './styles';

function Presentational(props) {
  const { productIsLoading, filteredProducts, searchProductInputHandleChange } = props;

  if (productIsLoading) {
    return (
      <TextBoxLoading>
        Carregando...
      </TextBoxLoading>
    );
  }

  return (
    <Container>
      <SearchFilter searchProductInputHandleChange={searchProductInputHandleChange} />
      <SearchList filteredProducts={filteredProducts} />
    </Container>
  );
}

export default Presentational;
