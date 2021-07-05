import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useData } from '../../contexts/DataContext';
import { Wrapper, Value } from './styles';

export const SnapshotByPortfolio = () => {
  const {
    data: {
      data: { snapshotByPortfolio },
    },
  } = useData();

  return (
    <Wrapper>
      <div>
        {snapshotByPortfolio ? (
          <>
            <span />
            <Value title="Saldo Bruto">
              R$ {snapshotByPortfolio.equity.toLocaleString('pt-br')}
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
      <div>
        {snapshotByPortfolio ? (
          <>
            <span />
            <Value title="Valor Aplicado">
              R$ {snapshotByPortfolio.valueApplied.toLocaleString('pt-br')}
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
      <div>
        {snapshotByPortfolio ? (
          <>
            <span />
            <Value title="Resultado">
              R$ {snapshotByPortfolio.equityProfit.toLocaleString('pt-br')}
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
      <div>
        {snapshotByPortfolio ? (
          <>
            <span />
            <Value title="Rentabilidade">
              {snapshotByPortfolio.percentageProfit.toLocaleString('pt-br')}%
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
      <div>
        {snapshotByPortfolio ? (
          <>
            <span />
            <Value title="CDI">
              {snapshotByPortfolio.indexerValue.toLocaleString('pt-br')}%
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
      <div>
        {snapshotByPortfolio ? (
          <>
            <span />
            <Value title="% Sobre CDI">
              {snapshotByPortfolio.percentageOverIndexer.toLocaleString(
                'pt-br',
              )}
              %
            </Value>
          </>
        ) : (
          <Skeleton
            width={100}
            height={12}
            count={2}
            style={{ marginLeft: '10px', marginTop: '2px' }}
          />
        )}
      </div>
    </Wrapper>
  );
};
