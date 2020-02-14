import React, {Component} from 'react';
import { KinvoPremium } from '.././styles';
import Logo from '.././Images/Logo.png';

class LogoKinvo extends Component{
    render(){
        return (
            <KinvoPremium>
                <img src={Logo} alt = ""/>
            </KinvoPremium>
        )
    }
}

export default LogoKinvo;