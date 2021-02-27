import React, { useState, useEffect, useCallback } from 'react';

import {
  Pagination as PaginationType,
  PaginationHandler
} from '../../../@types/Pagination';
import { SnapshotByProduct } from '../../../@types/SnapshotByProduct';
import { Pagination } from '../../../components/Pagination';
import { ProductItem } from './ProductItem';
import { Container, TitleContainer } from './styles';

interface ProductsProps {
  snapshotByProduct: SnapshotByProduct[];
}

export const Products: React.FC<ProductsProps> = ({ snapshotByProduct }) => {
  const [products, setProducts] = useState<SnapshotByProduct[]>([]);
  const [pagination, setPagination] = useState<PaginationType>(() => ({
    page: 1,
    size: 5,
    take: snapshotByProduct.length >= 5 ? 5 : snapshotByProduct.length,
    total: snapshotByProduct.length,
    skip: 0
  }));

  useEffect(() => {
    setProducts(() => {
      const newSnapshotByProduct = [...snapshotByProduct];
      const newProducts = newSnapshotByProduct.splice(
        pagination.skip,
        pagination.take
      );

      return newProducts;
    });
  }, [pagination, snapshotByProduct]);

  const handlePageChange = useCallback<PaginationHandler>(
    options => {
      const { page } = options;

      setPagination(state => {
        const newPagination = { ...state };

        newPagination.page = page;
        newPagination.skip = newPagination.size * (page - 1);
        newPagination.take = snapshotByProduct.length - newPagination.skip;
        if (newPagination.take > newPagination.size)
          newPagination.take = newPagination.size;

        return newPagination;
      });
    },
    [snapshotByProduct]
  );

  return (
    <Container>
      <TitleContainer>
        <h3>Minhas Rendas Fixas</h3>
      </TitleContainer>

      {products.map((product, index) => (
        <ProductItem
          key={product.fixedIncome.name}
          product={product}
          invert={index % 2 !== 0}
        />
      ))}

      <Pagination pagination={pagination} onChange={handlePageChange} />
    </Container>
  );
};
