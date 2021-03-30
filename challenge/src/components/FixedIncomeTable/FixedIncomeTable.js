import FixedIncomeRow from 'components/FixedIncomeRow/FixedIncomeRow';
import FixedIncomeTableFooter from 'components/FixedIncomeTableFooter/FixedIncomeTableFooter';
import FixedIncomeTableHeader from 'components/FixedIncomeTableHeader/FixedIncomeTableHeader';
import * as S from 'components/styled/lib';

const FixedIncomeTable = ({ rows }) => {
  return (
    <S.FixedIncomeTable>
      <FixedIncomeTableHeader />
      {rows?.map((row) => (
        <FixedIncomeRow row={row} />
      ))}
      <FixedIncomeTableFooter />
    </S.FixedIncomeTable>
  );
};

export default FixedIncomeTable;
