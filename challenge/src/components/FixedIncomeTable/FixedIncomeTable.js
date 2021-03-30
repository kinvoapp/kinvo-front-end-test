import FixedIncomeRow from 'components/FixedIncomeRow/FixedIncomeRow';
import FixedIncomeTableFooter from 'components/FixedIncomeTableFooter/FixedIncomeTableFooter';
import FixedIncomeTableHeader from 'components/FixedIncomeTableHeader/FixedIncomeTableHeader';
import * as S from 'components/styled/lib';
import { useEffect, useState } from 'react';

const FixedIncomeTable = ({ rows }) => {
  const [allRows, setAllRows] = useState(rows);
  const [paginatedRows, setPaginatedRows] = useState([]);
  const [visibleRows, setVisibleRows] = useState(rows);

  return (
    <S.FixedIncomeTable>
      <FixedIncomeTableHeader allRows={allRows} setVisibleRows={setVisibleRows} />
      {visibleRows?.map((row) => (
        <FixedIncomeRow row={row} />
      ))}
      <FixedIncomeTableFooter />
    </S.FixedIncomeTable>
  );
};

export default FixedIncomeTable;
