import React, {Component} from 'react';
import imagemLogo from '.././images/imagemLogo.png';

class Header extends Component{
    render(){
        return(
            <div>
                <a><img src={imagemLogo} alt="" className="logo"/></a>
            </div>
        );
    }
}

export default Header;