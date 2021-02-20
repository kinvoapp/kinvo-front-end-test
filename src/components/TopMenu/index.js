import React from 'react'
import Logo from '../../assets/images/logo.svg';
import './TopMenu.css';

function TopMenu (props){

    return(
        <nav className="TopMenu">
            <img src={Logo} className="logo"></img>
        </nav>
    );

}

export default TopMenu;