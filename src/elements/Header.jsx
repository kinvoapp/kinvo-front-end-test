import React from 'react'
import { Top } from '../styles'
import logo from '../images/logo.png'


function Header() {
  return (
    <div>
     <Top>
        <img src={logo} alt='logo'/>
        <div>
          <h4>SALDO BRUTO</h4>
          <h3>130.521.230,02</h3>
        </div>
        <div>
          <h4>VALOR APLICADO</h4>
          <h3>521.230,02</h3>
        </div>
        <div>
          <h4>RENTABILIDADE</h4>
          <h3>2,34%</h3>
        </div>
        <div>
          <h4>CARTEIRA</h4>
          <h3>Minha Carteira</h3>
        </div>
      </Top>
    </div>
  )
}

export default Header
