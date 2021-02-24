import React,{useState}  from 'react';
import './MenuOption.css';
import Arrow from '../../../../assets/icons/right-arrow.svg'

function MenuOption(props){
    const [color, setColor] = useState(0);
    function handleClick(e) {
        e.preventDefault();
        console.log('O item foi clicado',e);
        setColor()
    }
    return(
        <div className="MenuOption">
            <a className="MenuOptionLink" onClick={handleClick}>
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