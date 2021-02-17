import React from 'react';

import ArrowLeftIcon from '../../assets/pagination/arrow-left.svg';
import ArrowRightIcon from '../../assets/pagination/arrow-right.svg';

import { Container, PaginationContainer, PaginationItem, PaginationButton, MovePagination, PaginationIcon } from './styles';

const Pagination = ({ productPerPage, totalProducts, paginate, goToNextPage, goToPreviusPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }

  const setColorPaginationButton = number => {
    return number % 2 === 0;
  };

  return (
    <Container>
      <PaginationContainer>
        <MovePagination onClick={() => goToPreviusPage(pageNumbers.length)}>
          <PaginationIcon src={ArrowLeftIcon} alt="Seta Para Esquerda" />
        </MovePagination>
        {pageNumbers.map(number => (
          <PaginationItem key={number}>
            <PaginationButton primary={setColorPaginationButton(number)} onClick={() => paginate(number)}>
              {number}
            </PaginationButton>
          </PaginationItem>
        ))}
        <MovePagination onClick={() => goToNextPage(pageNumbers.length)}>
          <PaginationIcon src={ArrowRightIcon} alt="Seta Para Direita" />
        </MovePagination>
      </PaginationContainer>
    </Container>
  );
};

export default Pagination;
