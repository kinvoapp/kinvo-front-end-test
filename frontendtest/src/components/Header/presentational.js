import React from 'react';

import { Container } from './styles';
import logoKinvoPremium from './images/logo.svg';

function Header() {
  return (
    <Container>
      <a href="https://www.kinvo.com.br"><img alt="Logo Premium do Kinvo" src={logoKinvoPremium} /></a>
    </Container>
  );
}

export default Header;
