import React, { Component } from 'react';
import './Header.css';

import logo from '../../images/logo.svg';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="branding">
          <img src={logo}/>
        </div>
      </header>
    )
  }
}

export default Header
