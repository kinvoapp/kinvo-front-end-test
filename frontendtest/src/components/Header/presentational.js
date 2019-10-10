import React from 'react';

import { Container } from './styles';
import logoKinvoPremium from './images/logo.svg';

function Header(){
  return(
    <Container>
      <a href="#"><img src={logoKinvoPremium}></img></a>
    </Container>
  )
}

export default Header;