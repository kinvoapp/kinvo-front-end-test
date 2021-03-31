import FixedIncomeOrderDropdown from 'components/FixedIncome/FixedIncomeTable/FixedIncomeOrderDropdown/FixedIncomeOrderDropdown';
import FixedIncomeTableSearchBar from 'components/FixedIncome/FixedIncomeTable/FixedIncomeTableSearchBar/FixedIncomeTableSearchBar';
import * as S from 'components/styled/lib';

const FixedIncomeTableHeader = ({ setFilteredRows, allRows }) => {
  return (
    <S.FixedIncomeTableHeader>
      <S.Title as="h2" size="18" color="neutral" weight="500">
        Minhas Rendas Fixas
      </S.Title>
      <S.FixedIncomeTableHeaderFilterWrapper>
        <FixedIncomeOrderDropdown setFilteredRows={setFilteredRows} />
        <FixedIncomeTableSearchBar rows={allRows} setFilteredRows={setFilteredRows} />
      </S.FixedIncomeTableHeaderFilterWrapper>
    </S.FixedIncomeTableHeader>
  );
};

export default FixedIncomeTableHeader;
