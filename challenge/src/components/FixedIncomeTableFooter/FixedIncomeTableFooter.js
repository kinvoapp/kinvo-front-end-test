import Pagination from 'components/Pagination/Pagination';
import * as S from 'components/styled/lib';
import { useState } from 'react';

const FixedIncomeTableFooter = ({ rows, setVisibleRows }) => {
  const limit = 5;
  const [limitPagination, setLimitPagination] = useState(limit);

  return (
    <S.FixedIncomeTableFooter>
      {rows && (
        <Pagination rows={rows} limit={limitPagination || limit} setVisibleRows={setVisibleRows} />
      )}
      <S.FixedIncomeTableFooterLimiter>
        <S.Text right size="12" margin="0 1rem" color="silver">
          Items por <br /> página:
        </S.Text>
        <input
          type="text"
          value={limitPagination}
          onChange={({ target }) => setLimitPagination(target.value)}
        />
      </S.FixedIncomeTableFooterLimiter>
    </S.FixedIncomeTableFooter>
  );
};

export default FixedIncomeTableFooter;
