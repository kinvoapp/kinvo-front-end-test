import React from 'react';
import './MenuOption.css';
import Arrow from '../../../../assets/icons/right-arrow.svg'

function MenuOption(props){
    return(
        <div className="MenuOption">
            <a className="MenuOptionLink">
                <div className="iconLabel">
                    <img src={props.Logo} ></img>
                </div>
                
                {props.children}
                <img src={Arrow} className="arrow"></img>
            </a>
        </div>
    );
}

export default MenuOption;