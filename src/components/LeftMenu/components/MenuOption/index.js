import React from 'react';
import './MenuOption.css';
import Arrow from '../../../../assets/icons/right-arrow.svg'

function MenuOption(props){
    return(
        <div className="MenuOption">
            <a className="MenuOptionLink" onClick={props.onClick}>
                <div className="iconOption">
                    <img src={props.Logo} height="20px" width="20px"></img>
                </div>
                <div className="textOption">
                    {props.children}
                </div>
                
                <img src={Arrow} className="arrow"></img>
            </a>
            
        </div>
    );
}

export default MenuOption;