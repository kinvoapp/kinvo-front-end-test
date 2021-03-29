import styled from 'styled-components';
import api from 'services/api';
import { useEffect, useState } from 'react';
import Header from 'components/organisms/Header/Header';
import FixedIncomeCard from 'components/molecules/FixedIncomeCard/FixedIncomeCard';

const FixedIncomePage = styled.main`
  display: flex;
  flex-direction: column;
`;

const FixedIncome = () => {
  const [fixedIncomeData, setFixedIncomeData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .getFixedIncome()
      .then(({ data }) => setFixedIncomeData(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <FixedIncomePage>
      <Header
        title="Renda Fixa"
        loading={loading}
        cardsData={fixedIncomeData?.snapshotByPortfolio}
      />
      <FixedIncomeCard title="Título" text="Tesouro IPCA + com juros semestrais 2020 (ntnb)" />
    </FixedIncomePage>
  );
};

export default FixedIncome;
