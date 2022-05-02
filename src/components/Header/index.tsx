//import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';

//import Skeleton from 'react-loading-skeleton';

import logoImg from '../../assets/logo-xd.svg';
import ImgGrossBalance from '../../assets/gross-balance.svg';
import ImgValueApplied from '../../assets/value-applied.svg';
import ImgRentability from '../../assets/rentability-2.svg';
import ImgArrow from '../../assets/arrow-2.svg';
import ImgMenu from '../../assets/menu.svg';

import { Container, Content, StyleValue } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <img src={logoImg} alt="LOGO" />
      </div>
      <Content>
        <StyleValue title="SALDO BRUTO">
          <div>
            <img src={ImgGrossBalance} alt="GrossBalance" />
          </div>
          <h2>TESTE</h2>
        </StyleValue>
        <StyleValue title="VALOR APLICADO">
          <div>
            <img src={ImgValueApplied} alt="ValueApplied" />
          </div>
          <h2>TESTE</h2>
        </StyleValue>
        <StyleValue title="RENTABILIDADE">
          <div>
            <img src={ImgRentability} alt="Rentability" />
          </div>

          <h2>TESTE</h2>
        </StyleValue>
        <StyleValue title="CARTEIRA" color="#5D41AC">
          <div className="img2">
            <img src={ImgArrow} alt="Arrow" />
          </div>
          <h2>Minha Carteira</h2>
        </StyleValue>
        <StyleValue title="Menu" color="#5D41AC">
          <div>
            <img src={ImgMenu} alt="Menu" className="img2" />
          </div>
        </StyleValue>
      </Content>
    </Container>
  );
}
