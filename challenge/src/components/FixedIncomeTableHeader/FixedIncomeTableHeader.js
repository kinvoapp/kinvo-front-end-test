import OrderDropdown from 'components/OrderDropdown/OrderDropdown';
import SearchBar from 'components/SearchBar/SearchBar';
import * as S from 'components/styled/lib';

const FixedIncomeTableHeader = ({ setFilteredRows, allRows }) => {
  return (
    <S.FixedIncomeTableHeader>
      <S.Title as="h2" size="18" color="neutral" weight="500">
        Minhas Rendas Fixas
      </S.Title>
      <S.FixedIncomeTableHeaderFilterWrapper>
        <OrderDropdown />
        <SearchBar rows={allRows} setFilteredRows={setFilteredRows} />
      </S.FixedIncomeTableHeaderFilterWrapper>
    </S.FixedIncomeTableHeader>
  );
};

export default FixedIncomeTableHeader;
