import React from 'react';

import { BondCardItem, ValueList, ValueItem } from './styles';

/* interface BondCard {
  type: string;
} */

const BondCard: React.FC = () => {
  // const { type } = props;

  return (
    <BondCardItem>
      <header>
        <h3>Minha Posição</h3>

        <div className="tooltip">
          <span className="info">Teste de informação</span>
        </div>
      </header>

      <ValueList>
        <ValueItem>
          <h4>Valor Inves.</h4>
          <p>1.003,00</p>
        </ValueItem>

        <ValueItem>
          <h4>Saldo Bruto</h4>
          <p>1.124,00</p>
        </ValueItem>

        <ValueItem>
          <h4>Rent.</h4>
          <p>48,55%</p>
        </ValueItem>

        <ValueItem>
          <h4>% da Cart.</h4>
          <p>5,33%</p>
        </ValueItem>

        <ValueItem>
          <h4>CDI</h4>
          <p>1,24</p>
        </ValueItem>

        <ValueItem>
          <h4>Sobre CDI</h4>
          <p>118</p>
        </ValueItem>
      </ValueList>
    </BondCardItem>
  );
};

export default BondCard;
