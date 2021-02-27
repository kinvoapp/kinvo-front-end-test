import React from 'react';

import {
  Pagination as PaginationType,
  PaginationHandler
} from '../../@types/Pagination';
import pageLeftIcon from '../../assets/page_left_icon.svg';
import pageRightIcon from '../../assets/page_right_icon.svg';
import { Page } from './Page';
import { Container } from './styles';

interface PaginationProps {
  pagination: PaginationType;
  onChange: PaginationHandler;
}

export const Pagination: React.FC<PaginationProps> = ({
  pagination,
  onChange
}) => {
  function getPages() {
    const pages = [];
    const { size, total } = pagination;

    for (let i = 0; i * size < total; i += 1) {
      pages.push(i + 1);
    }

    return pages;
  }

  const pages = getPages();

  return (
    <Container>
      <Page
        active={false}
        onClick={() => {
          if (pagination.page !== 1) onChange({ page: pagination.page - 1 });
        }}
      >
        <img src={pageLeftIcon} alt="Previous page" />
      </Page>

      {pages.map(page => (
        <Page
          active={page === pagination.page}
          key={String(page)}
          onClick={() => {
            if (pagination.page !== page) onChange({ page });
          }}
        >
          {page}
        </Page>
      ))}

      <Page
        active={false}
        onClick={() => {
          if (pagination.page * pagination.size < pagination.total)
            onChange({ page: pagination.page + 1 });
        }}
      >
        <img src={pageRightIcon} alt="Previous page" />
      </Page>
    </Container>
  );
};
