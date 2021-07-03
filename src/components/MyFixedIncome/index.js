/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useData } from '../../contexts/DataContext';
import { ReactComponent as Info } from '../../assets/info.svg';
import { Wrapper, Item, Result } from './styles';

export const MyFixedIncome = () => {
  const {
    data: {
      data: { snapshotByProduct },
    },
  } = useData();
  console.log(snapshotByProduct);
  return (
    <Wrapper>
      {snapshotByProduct &&
        snapshotByProduct.map(
          ({
            due: { date, daysUntilExpiration },
            fixedIncome: { bondType, name },
            hasBalance,
            position: {
              equity,
              valueApplied,
              profitability,
              portfolioPercentage,
              indexerLabel,
              indexerValue,
              percentageOverIndexer,
            },
            productHasQuotation,
          }) => (
            <Item>
              <div>
                <h2>
                  Título <Info />
                </h2>
                <section>
                  <h2>{name}</h2>
                  <Result color="#8A51BA" text="Classe">
                    {bondType}
                  </Result>
                </section>
              </div>
              <div>
                <h2>
                  Minha Posição <Info />
                </h2>
                <section>
                  <Result color="#38BFA0" text="Valor Inves.">
                    {equity.toLocaleString('pt-br')}
                  </Result>
                  <Result color="#38BFA0" text="Saldo Bruto">
                    {valueApplied.toLocaleString('pt-br')}
                  </Result>
                  <Result color="#38BFA0" text="Rent.">
                    {profitability.toLocaleString('pt-br')}%
                  </Result>
                  <Result color="#38BFA0" text="% da Cart.">
                    {portfolioPercentage.toLocaleString('pt-br')}%
                  </Result>
                  <Result color="#38BFA0" text={indexerLabel}>
                    {indexerValue.toLocaleString('pt-br')}
                  </Result>
                  <Result color="#38BFA0" text={`Sobre ${indexerLabel}`}>
                    {percentageOverIndexer.toLocaleString('pt-br')}%
                  </Result>
                </section>
              </div>
              <div>
                <h2>
                  Vencimento <Info />
                </h2>
                <section>
                  <Result color="#008DCB" text="Data Venc.">
                    {date}
                  </Result>
                  <Result color="#008DCB" text="Dias até Venc.">
                    {daysUntilExpiration}
                  </Result>
                </section>
              </div>
            </Item>
          ),
        )}
    </Wrapper>
  );
};
