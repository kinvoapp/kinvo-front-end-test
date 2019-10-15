import React from 'react';

import logo from './images/kinvo-logo.svg';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src={logo} alt="Kinvo Logo" width={190} height={29} />
    </Container>
  );
}

export default Header;
