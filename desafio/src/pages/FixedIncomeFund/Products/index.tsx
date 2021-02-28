import React, { useState, useEffect, useCallback } from 'react';

import {
  Pagination as PaginationType,
  PaginationHandler
} from '../../../@types/Pagination';
import { SnapshotByProduct } from '../../../@types/SnapshotByProduct';
import { Input } from '../../../components';
import { Pagination } from '../../../components/Pagination';
import { debounce } from '../../../utils';
import { ProductItem } from './ProductItem';
import { Container, TitleContainer } from './styles';

interface ProductsProps {
  snapshotByProduct: SnapshotByProduct[];
}

export const Products: React.FC<ProductsProps> = ({ snapshotByProduct }) => {
  const [originalProducts, setOriginalProducts] = useState<SnapshotByProduct[]>(
    () => [...snapshotByProduct]
  );

  const [products, setProducts] = useState<SnapshotByProduct[]>([]);
  const [pagination, setPagination] = useState<PaginationType>();

  const resetPagination = useCallback(() => {
    setPagination({
      page: 1,
      size: 5,
      take: originalProducts.length >= 5 ? 5 : originalProducts.length,
      total: originalProducts.length,
      skip: 0
    });
  }, [originalProducts]);

  useEffect(() => {
    resetPagination();
  }, [resetPagination]);

  useEffect(() => {
    if (pagination) {
      let newProducts = [...originalProducts];
      newProducts = newProducts.splice(pagination.skip, pagination.take);

      setProducts(newProducts);
    }
  }, [pagination, originalProducts]);

  const handlePageChange = useCallback<PaginationHandler>(
    options => {
      const { page } = options;

      setPagination(state => {
        if (!state) return undefined;

        const newPagination = { ...state };

        newPagination.page = page;
        newPagination.skip = newPagination.size * (page - 1);
        newPagination.take = originalProducts.length - newPagination.skip;
        if (newPagination.take > newPagination.size)
          newPagination.take = newPagination.size;

        return newPagination;
      });
    },
    [originalProducts]
  );

  const handleInputTextChange = useCallback(
    (inputText: string) => {
      if (inputText === '') {
        setOriginalProducts([...snapshotByProduct]);
        return;
      }

      let newOriginalProducts = [...snapshotByProduct];

      newOriginalProducts = newOriginalProducts.filter(product => {
        const productName = product.fixedIncome.name.toLowerCase();

        return productName.includes(inputText.toLowerCase());
      });

      setOriginalProducts(newOriginalProducts);
    },
    [snapshotByProduct]
  );

  return (
    <Container>
      <TitleContainer>
        <h3>Minhas Rendas Fixas</h3>

        <div>
          <Input onTextChange={debounce(handleInputTextChange, 500)} />
        </div>
      </TitleContainer>

      {products.map((product, index) => (
        <ProductItem
          key={product.fixedIncome.name}
          product={product}
          invert={index % 2 !== 0}
        />
      ))}

      {pagination && (
        <Pagination pagination={pagination} onChange={handlePageChange} />
      )}
    </Container>
  );
};
