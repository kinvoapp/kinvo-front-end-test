/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useData } from '../../contexts/DataContext';
import { ReactComponent as Info } from '../../assets/info.svg';
import { Wrapper, Item } from './styles';

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
          ({ due, fixedIncome, hasBalance, position, productHasQuotation }) => (
            <Item>
              <div>
                <h2>
                  Título <Info />
                </h2>
              </div>
              <div></div>
              <div></div>
            </Item>
          ),
        )}
    </Wrapper>
  );
};
