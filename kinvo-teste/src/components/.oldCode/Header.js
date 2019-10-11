import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './images/kinvo-logo-2.png';

// styled-components code
const DIV = styled.div`
  grid-area: header;
  display: flex;
  height: 90px;
  width: 100%;
  background-color: #ffffff;

  img {
    margin: auto 0;
    padding-left: 2%;
  }
`;

// ---------------------------------------------

class Header extends Component {
  render() {
    return (
      <DIV>
        <img src={logo} width={190} height={29} />
      </DIV>
    );
  }
}

export default Header;
