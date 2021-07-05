import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useData } from '../../contexts/DataContext';
import { ReactComponent as Logo } from '../../assets/logo-xd.svg';
import { ReactComponent as GrossBalance } from '../../assets/gross-balance.svg';
import { ReactComponent as ValueApplied } from '../../assets/value-applied.svg';
import { ReactComponent as Rentability } from '../../assets/rentability-2.svg';
import { ReactComponent as Arrow } from '../../assets/arrow-2.svg';
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { Wrapper, Info, Value } from './styles';

export const Header = () => {
  const {
    data: {
      data: { snapshotByPortfolio },
    },
  } = useData();

  return (
    <Wrapper>
      <div>
        <Logo />
      </div>
      <Info>
        <Value title="Saldo Bruto">
          <div>
            <GrossBalance />
          </div>
          <h2>
            {snapshotByPortfolio ? (
              snapshotByPortfolio.equity.toLocaleString('pt-br')
            ) : (
              <Skeleton width={90} />
            )}
          </h2>
        </Value>
        <Value title="Valor Aplicado">
          <div>
            <ValueApplied />
          </div>
          <h2>
            {snapshotByPortfolio ? (
              snapshotByPortfolio.valueApplied.toLocaleString('pt-br')
            ) : (
              <Skeleton width={90} />
            )}
          </h2>
        </Value>
        <Value title="Rentabilidade">
          <div>
            <Rentability />
          </div>
          <h2>
            {snapshotByPortfolio ? (
              `${snapshotByPortfolio.percentageProfit.toLocaleString('pt-br')}%`
            ) : (
              <Skeleton width={100} />
            )}
          </h2>
        </Value>
        <Value title="Carteira" color="#5D41AC" bold cursorPointer>
          <div>
            <Arrow />
          </div>
          <h2>Minha Carteira</h2>
        </Value>
        <Value color="#5D41AC" cursorPointer>
          <div>
            <Menu />
          </div>
        </Value>
      </Info>
    </Wrapper>
  );
};
