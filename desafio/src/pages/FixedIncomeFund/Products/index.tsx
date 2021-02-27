import React from 'react';

import { SnapshotByProduct } from '../../../@types/SnapshotByProduct';
import { ProductItem } from './ProductItem';
import { Container, TitleContainer } from './styles';

interface ProductsProps {
  snapshotByProduct: SnapshotByProduct[];
}

export const Products: React.FC<ProductsProps> = ({ snapshotByProduct }) => {
  return (
    <Container>
      <TitleContainer>
        <h3>Minhas Rendas Fixas</h3>
      </TitleContainer>

      {snapshotByProduct.map((product, index) => (
        <ProductItem
          key={product.fixedIncome.name}
          product={product}
          invert={index % 2 !== 0}
        />
      ))}
    </Container>
  );
};
