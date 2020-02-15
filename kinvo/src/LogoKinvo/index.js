import React, {Component} from 'react';
import { KinvoPremium } from '.././styles';
import Logo from '.././Images/Logo.png';

class LogoKinvo extends Component{
    render(){
        return (
        // IMAGEM DO LOGO + ESTILIZAÇÃO DA ÁREA OCUPADA
            <KinvoPremium>
                <img src={Logo} alt = ""/>
            </KinvoPremium>
        )
    }
}

export default LogoKinvo;