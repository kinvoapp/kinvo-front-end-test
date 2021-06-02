import { PaginationButton, PaginationContainer } from "./styles";

import ArrowRigthImg from "../../assets/icons/arrow.svg";
import ArrowLeftImg from "../../assets/icons/arrowLeft.svg";

export function Pagination({ handleChangePage, pages, actualPage }) {
  const size = pages.length;
  const hasNext = actualPage < size;
  const hasBefore = actualPage > 1;

  return (
    <PaginationContainer>
      <PaginationButton disabled={!hasBefore} onClick={() => handleChangePage(actualPage - 1)}>
        <img src={ArrowLeftImg} alt="voltar" />
      </PaginationButton>

      {pages.map((page) => {
        return (
          <PaginationButton
            onClick={() => handleChangePage(page)}
            key={page}
            selected={actualPage === page}
          >
            {page}
          </PaginationButton>
        );
      })}

      <PaginationButton disabled={!hasNext} onClick={() => handleChangePage(actualPage + 1)}>
        <img src={ArrowRigthImg} alt="proximo" />
      </PaginationButton>
    </PaginationContainer>
  );
}
