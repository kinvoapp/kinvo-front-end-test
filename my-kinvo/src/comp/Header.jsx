import React from 'react';
import logo from '../logo_kinvo.svg';

class Header extends React.Component {
  render() {
    return (
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo-kinvo" />
      </header>
    );
  }
}

export default Header; 