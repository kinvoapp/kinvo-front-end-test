import React from 'react';
import './styles.css';
import logoKinvoPremium from './images/logo.svg';

const Header = () => {
    return(
        <header style={{zIndex: "100"}} id="main-header">
            <a href="#"><img src={logoKinvoPremium}></img></a>
        </header>
    )
}

export default Header;