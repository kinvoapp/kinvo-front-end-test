import * as S from 'components/styled/lib';
import { ReactComponent as ArrowSvg } from 'assets/images/arrow.svg';
import { useCallback, useEffect, useState } from 'react';

function getPaginatedRows(rows, limit, pagesAmount, setPage) {
  if (rows.length <= limit) {
    setPage(0);
    return [rows];
  }
  const totalRows = [...rows];
  const paginatedRows = [];

  for (let page = 0; page < pagesAmount; page++) {
    paginatedRows.push(totalRows.splice(0, limit));
  }

  return paginatedRows;
}

function getMotion(buttonIndex, visibleButtons, buttonsAmount, motionFactor) {
  const maxMotion = (buttonsAmount - visibleButtons) * motionFactor;
  const skipFirstMotion = buttonIndex - 1;
  const motion = (skipFirstMotion > 0 ? skipFirstMotion : 0) * motionFactor;

  console.log(motion);

  return motion > maxMotion ? maxMotion : motion;
}

const Pagination = ({ rows, limit, setVisibleRows }) => {
  const [paginatedRows, setPaginatedRows] = useState([]);
  const pagesAmount = Math.ceil(rows.length / limit);
  const [motion, setMotion] = useState(0);
  const [page, setPage] = useState(0);

  const handleMotion = useCallback(
    (index) => {
      const visibleButtons = 3;
      const buttonsAmount = pagesAmount;
      const motionFactor = 2.25; //Based on button width + margin

      setPage(index);
      setMotion(getMotion(index, visibleButtons, buttonsAmount, motionFactor));
    },
    [pagesAmount],
  );

  const handleArrowClick = useCallback(
    (arrow) => () => {
      if (arrow === 'back') {
        setPage((prevPage) => (prevPage > 0 ? --prevPage : prevPage));
      } else {
        setPage((prevPage) => (prevPage < pagesAmount - 1 ? ++prevPage : prevPage));
      }
    },
    [pagesAmount],
  );

  useEffect(() => {
    const newRows = getPaginatedRows(rows, limit, pagesAmount, setPage);
    setPaginatedRows(newRows);
    setVisibleRows(newRows[0]);
  }, [rows, limit, pagesAmount, setVisibleRows]);

  useEffect(() => {
    setVisibleRows(paginatedRows[page]);
    handleMotion(page);
  }, [page, setVisibleRows, paginatedRows, handleMotion]);

  return (
    <S.Pagination>
      <S.PaginationArrow rotate="-180" onClick={handleArrowClick('back')}>
        <ArrowSvg />
      </S.PaginationArrow>
      <S.PaginationNumbersWrapper motion={motion}>
        <div>
          {paginatedRows.map((_, index) => {
            return (
              <S.PaginationButton key={index}>
                <input
                  type="radio"
                  name="pagination"
                  id={`btnPag${index}`}
                  checked={index === page}
                />
                <S.PaginationLabel onClick={() => setPage(index)} htmlFor={`btnPag${index}`}>
                  {index + 1}
                </S.PaginationLabel>
              </S.PaginationButton>
            );
          })}
        </div>
      </S.PaginationNumbersWrapper>
      <S.PaginationArrow onClick={handleArrowClick()}>
        <ArrowSvg />
      </S.PaginationArrow>
    </S.Pagination>
  );
};

export default Pagination;
