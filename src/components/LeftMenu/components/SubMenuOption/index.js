import React from 'react';
import Arrow from '../../../../assets/icons/right-arrow.svg';
import './SubMenuOption.css';
function SubMenuOption(props){

    return(
        <div className={props.expanded}>
            <ul>
                <li>Ação
                <img src={Arrow} className="arrow"></img>
                </li>
                <li>Fundo
                <img src={Arrow} className="arrow"></img>
                </li>
                <li>Fundo Imobiliário
                <img src={Arrow} className="arrow"></img>
                </li>
                <li>Fundo Renda Fixa
                <img src={Arrow} className="arrow"></img>
                </li>
            </ul>
        </div>
    )
}

export default SubMenuOption;