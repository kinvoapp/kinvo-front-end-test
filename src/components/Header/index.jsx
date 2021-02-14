import React from 'react';

import HeaderImg from '../../assets/header.svg';

import { HeaderContainer, HeaderImagem } from './styles';

function Header() {
  return (
    <HeaderContainer>
      <HeaderImagem src={HeaderImg} alt="Header" />
    </HeaderContainer>
  );
}

export default Header;
