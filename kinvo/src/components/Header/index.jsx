import React from 'react'
import { HeaderContainer } from './styles'

import logo from '../../assets/images/logo.svg'
import MenuIcon from '../../assets/icons/menu-icon.svg'
import DropdownIcon from '../../assets/icons/dropdown-icon.svg';


import HeaderItem from '../HeaderItem'


function Header() {
    return(
        <HeaderContainer>
            <img src={logo} alt="" />
            <div className='row'>
                <HeaderItem 
                    title="Saldo Bruto"
                    value="130.521.230,02"
                    iconName='ring'
                />
                <HeaderItem 
                    title="Valor Aplicado"
                    value="521.230,02"
                    iconName='upArrow'
                />
                <HeaderItem 
                    title="Rentabilidade"
                    value="2,34%"
                    iconName='graphArrow'
                />
                <div style={{display: 'flex', marginLeft: '25px'}}>
                    <img src={DropdownIcon} alt="" />
                    <div style={{marginLeft: '15px'}}>
                        <h6>Carteira</h6>
                        <p>Minha Carteira</p>
                    </div>
                </div>
                <img src={MenuIcon} alt="" style={{marginLeft: '25px'}}/>
            </div>
        </HeaderContainer>
    )
}

export default Header