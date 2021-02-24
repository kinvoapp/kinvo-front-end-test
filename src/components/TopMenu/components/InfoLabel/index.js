import React from 'react'
import './InfoLabel.css';

function InfoLabel(props){
    //console.log(props);
    
    return(
        <li className="InfoLabel">
            <img src={props.Logo} className="iconLabel"></img>
            <p className="descriptioInfoLabel">{props.children}
                <h5>{props.Value}</h5>
            </p>
            
        </li>
    )
}

export default InfoLabel;