import styled from 'styled-components';
import api from 'services/api';
import { useEffect, useState } from 'react';
import Header from 'components/Header/Header';
import FixedIncomeTable from 'components/FixedIncomeTable/FixedIncomeTable';
import Loading from 'components/Loading/Loading';

const FixedIncomePage = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: content;
  padding: 2.8rem;
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

  if (loading) return <Loading />;
  return (
    <FixedIncomePage>
      <Header
        title="Renda Fixa"
        loading={loading}
        cardsData={fixedIncomeData?.snapshotByPortfolio}
      />
      <FixedIncomeTable rows={fixedIncomeData?.snapshotByProduct} />
    </FixedIncomePage>
  );
};

export default FixedIncome;
