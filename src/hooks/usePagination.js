import { useState } from "react";

export function usePagination(data) {
  const [page, setPage] = useState(1);
  const [initialPosition, setInitialPosition] = useState(0);

  const limitPerPage = 5;

  const pagesQtd = Math.ceil(data.length / limitPerPage);
  const dataLength = page * limitPerPage;

  const pagesNumbersForRender = new Array(pagesQtd).fill(0).map((item, index) => index + 1);

  function handleChangePagination(pageNumber) {
    setPage(pageNumber);

    if (pageNumber > page) {
      setInitialPosition((state) => state + 6);
    } else {
      setInitialPosition((state) => state - 6);
    }
  }

  return {
    page,
    initialPosition,
    dataLength,
    pagesNumbersForRender,
    handleChangePagination,
  };
}
