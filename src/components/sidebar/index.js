import React from 'react';

import One from '../../assets/1';
import Two from '../../assets/2';
import Three from '../../assets/3';
import Four from '../../assets/4';
import Five from '../../assets/5';
import Six from '../../assets/6';
import Seven from '../../assets/7';
import Eight from '../../assets/8';
import Arrow from '../../assets/arrow';

import { Bar, Label } from './styles';

export default function Sidebar() {
  return (
    <>
      <Bar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <One />
          <Label>
            Resumo <br />
            Da Carteira
          </Label>
        </div>
        <Arrow />
      </Bar>

      <Bar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Two />
          <Label>
            Meus
            <br />
            Produtos
          </Label>
        </div>
        <Arrow />
      </Bar>
      <Bar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Three />
          <Label>
            Meus <br />
            Proventos
          </Label>
        </div>
        <Arrow />
      </Bar>
      <Bar style={{ backgroundColor: '#EEF2F4' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Four />
          <Label>
            Análise por <br />
            Classe de Produto
          </Label>
        </div>
        <Arrow />
      </Bar>
      <Bar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Five />
          <Label>
            Rentabilidade <br />
            Real
          </Label>
        </div>
        <Arrow />
      </Bar>
      <Bar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Six />
          <Label>
            Projeção <br />
            da Carteira
          </Label>
        </div>
        <Arrow />
      </Bar>
      <Bar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Seven />
          <Label>
            Risco <br />x Retorno
          </Label>
        </div>
        <Arrow />
      </Bar>
      <Bar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Eight />
          <Label>
            Cobertura <br />
            do FGC
          </Label>
        </div>
        <Arrow />
      </Bar>
    </>
  );
}
