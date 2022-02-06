import React from 'react'
import LogoHeader from '../../assets/LogoHeader.svg'
import { HeaderMain } from './styles';


function Header() {
    return (
        <>
            <HeaderMain>
                <img alt='logo' src={LogoHeader} />
            </HeaderMain>
        </>
    );
};

export default Header