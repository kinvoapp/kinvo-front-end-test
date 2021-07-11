import React from "react";
import Box from "../Box";

import { Container, PageButton } from "./styles";

type Props<T> = {
  page: number;
  perPage: number;
  total: number;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  onPageChange?: (page: number) => any;
};

function PaginatedList<T = any>({
  data,
  renderItem,
  total,
  perPage,
  page: currentPage,
  onPageChange,
}: Props<T>) {
  const pagesAmount = Math.ceil(total / perPage);
  return (
    <Container>
      {data.map(renderItem)}
      <Box justifyContent="center" margin="12px 0 0">
        {Array.from({ length: pagesAmount }).map((page, idx) => (
          <PageButton
            key={idx}
            isActive={idx + 1 === currentPage}
            onClick={() => onPageChange && onPageChange(idx + 1)}
          >
            {idx + 1}
          </PageButton>
        ))}
      </Box>
    </Container>
  );
}

export default PaginatedList;
