import FixedIncomeRow from 'components/FixedIncome/FixedIncomeTable/FixedIncomeRow/FixedIncomeRow';
import FixedIncomeTableFooter from 'components/FixedIncome/FixedIncomeTable/FixedIncomeTableFooter/FixedIncomeTableFooter';
import FixedIncomeTableHeader from 'components/FixedIncome/FixedIncomeTable/FixedIncomeTableHeader/FixedIncomeTableHeader';
import * as S from 'components/styled/lib';
import { useEffect, useState } from 'react';

const FixedIncomeTable = ({ rows }) => {
  const [filteredRows, setFilteredRows] = useState(rows);
  const [visibleRows, setVisibleRows] = useState(rows);

  useEffect(() => {
    setVisibleRows(filteredRows);
  }, [filteredRows]);

  return (
    <S.FixedIncomeTable>
      <FixedIncomeTableHeader allRows={rows} setFilteredRows={setFilteredRows} />
      {visibleRows?.length > 0 ? (
        visibleRows?.map((row) => (
          <FixedIncomeRow key={row?.fixedIncome.portfolioProductId} row={row} />
        ))
      ) : (
        <S.Text margin="2rem">Sem resultados para o termo pesquisado, desculpe :(</S.Text>
      )}
      <FixedIncomeTableFooter rows={filteredRows} setVisibleRows={setVisibleRows} />
    </S.FixedIncomeTable>
  );
};

export default FixedIncomeTable;
