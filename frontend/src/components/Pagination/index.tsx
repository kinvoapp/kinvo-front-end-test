import React from 'react';

import { PaginationInterface } from '../../interfaces/Pagination.interface';
import { PageList } from './styles';

const Pagination: React.FC<PaginationInterface> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  setOffset,
  previousPage,
  nextPage
}: PaginationInterface) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <PageList>
      <button
        disabled={currentPage === 1}
        type="button"
        className="previous"
        onClick={() => {
          previousPage(currentPage - 1);
        }}
      >
        &nbsp;
      </button>

      {pageNumbers.map(number => (
        <li key={number} className={currentPage === number ? 'active' : ''}>
          <button type="button" onClick={() => setOffset(number)}>
            {number}
          </button>
        </li>
      ))}

      <button
        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        type="button"
        className="next"
        onClick={() => {
          nextPage(currentPage + 1);
        }}
      >
        &nbsp;
      </button>
    </PageList>
  );
};

export default Pagination;
