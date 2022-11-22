/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi/';

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  const nextPage = () => {
    setCurrentPage(Number(currentPage + 1));
  };

  const previusPage = () => {
    setCurrentPage(Number(currentPage - 1));
  };
  return (
    <PaginationButtons>
      <Button disabled={currentPage === 0} onClick={previusPage}>
        <HiOutlineChevronLeft />
      </Button>
      {Array.from(Array(pages), (item, index) => {
        return (
          <Button
            key={index}
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
            className={`${index === currentPage ? 'buttonSelected' : null}`}
          >
            {index + 1}
          </Button>
        );
      })}
      <Button disabled={currentPage === pages - 1} onClick={nextPage}>
        <HiOutlineChevronRight />
      </Button>
    </PaginationButtons>
  );
}

const PaginationButtons = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  margin: 0 5px;
  border: 1px solid #0000000d;
  border-radius: 5px;
  color: #707b81;
  background-color: #ffffff;

  &.buttonSelected {
    color: #fff;
    background-color: #dae0e3;
  }
`;
