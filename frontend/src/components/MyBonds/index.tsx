import React, { useState, useEffect } from 'react';

import BondsList from '../BondsList';
import Pagination from '../Pagination';

import {
  emptyProductsData,
  SnapshotByProduct
} from '../../interfaces/api.interface';

import { BondsContent } from './styles';

const MyBonds: React.FC<{ data: SnapshotByProduct[] }> = (props: {
  data: SnapshotByProduct[];
}) => {
  const [snapshotProductsData, setSnapshotProductsData] = useState<
    SnapshotByProduct[]
  >([emptyProductsData]);

  const [filterTerm, setFilterTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  let filteredProducts = snapshotProductsData.filter(product => {
    return product.fixedIncome.name
      .toLowerCase()
      .includes(filterTerm.toLowerCase());
  });

  const { data } = props;

  useEffect(() => {
    setSnapshotProductsData(data);
    setItemsPerPage(5);
  });

  useEffect(() => {
    filteredProducts = currentProducts;
  }, [currentPage]);

  // Get current products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const previousPage = (previous: number): void => {
    if (currentPage !== 1) {
      setCurrentPage(previous);
    }
  };

  const nextPage = (next: number): void => {
    if (currentPage !== indexOfLastProduct) {
      setCurrentPage(next);
    }
  };

  // Change current page
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <>
      <BondsContent>
        <header>
          <h3>Minhas Redas Fixas</h3>

          <form action="#">
            <div className="selectWrapper">
              <select name="select">
                <option>Ordenar por</option>
                <option>Ordem Alfabétca</option>
                <option>Valor Aplicado</option>
                <option>Rentabilidade</option>
                <option>Data de Vencimento</option>
              </select>
            </div>

            <div className="searchTerm">
              <input
                type="text"
                name="searchTerm"
                onChange={e => {
                  setFilterTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </form>
        </header>

        <BondsList data={currentProducts} />

        <Pagination
          currentPage={currentPage}
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          setOffset={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </BondsContent>
    </>
  );
};

export default MyBonds;
