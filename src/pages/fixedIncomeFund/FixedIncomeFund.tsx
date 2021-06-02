import Cards from '@components/cards/Cards';
import React, { useEffect } from 'react';
import {
  SnapshotByPortfolio,
} from './FixedIncomeFund.styles';
import { useFetch } from '../../../services/useFetch/useFetch';
import { Snapshots } from './FixedIncomeFund.types';
import Content from '@components/content/Content';
import SnapshotByProduct from './components/snapshotByProduct/SnapshotByProduct';
import ChartRentability from './components/ChartRentability/ChartRentability';

const FixedIncomeFund = () => {
  const { data, doFetch: getFixed, isFetching: loadingData } = useFetch('getFixedIncomeClassData', 'get');

  useEffect(() => {
    getFixed();
  }, []);

  return (
    <Content title="Renda fixa">
      {data?.data && 
        <SnapshotByPortfolio>
          {Object.keys(data?.data?.snapshotByPortfolio).map((snap, index) => (
            <Cards title={Snapshots[index]?.title} value={data?.data?.snapshotByPortfolio[snap]} type={Snapshots[index]?.percentage ? 'percente' : 'currency'} />
          ))}
        </SnapshotByPortfolio>
      }
      <ChartRentability chartData={data?.data?.dailyEquityByPortfolioChartData}/>
      <SnapshotByProduct snapshotByProduct={data?.data?.snapshotByProduct}/>
    </Content>
  );
};

export default FixedIncomeFund;
