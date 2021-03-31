import * as S from 'components/styled/lib';
import FixedIncomeCard from 'components/FixedIncome/FixedIncomeTable/FixedIncomeCard/FixedIncomeCard';

const FixedIncomeRow = ({ row }) => {
  return (
    <S.FixedIncomeRow>
      <FixedIncomeCard
        title="Título"
        text={row?.fixedIncome.name}
        cells={{ bondType: row?.fixedIncome.bondType }}
        cellColor="violet-light"
      />
      <FixedIncomeCard title="Minha Posição" cells={row?.position} cellColor="green" />
      <FixedIncomeCard title="Vencimento" cells={row?.due} cellColor="blue" />
    </S.FixedIncomeRow>
  );
};

export default FixedIncomeRow;
