import FixedIncomeTablePagination from 'components/FixedIncomeTablePagination/FixedIncomeTablePagination';
import * as S from 'components/styled/lib';
import { useState } from 'react';

const initialLimit = 5;
const FixedIncomeTableFooter = ({ rows, setVisibleRows }) => {
  const [limitPagination, setLimitPagination] = useState(initialLimit);

  return (
    <S.FixedIncomeTableFooter>
      {rows && (
        <FixedIncomeTablePagination
          rows={rows}
          limit={limitPagination || initialLimit}
          setVisibleRows={setVisibleRows}
        />
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
