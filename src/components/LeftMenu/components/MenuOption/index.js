import React,{useState}  from 'react';
import './MenuOption.css';
import Styled from 'styled-components';
import Arrow from '../../../../assets/icons/right-arrow.svg'

const Img = Styled.img`
    height:"20px"; 
    width:"20px";

`
const IconOption = Styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${props => props.color};
    align-items: center;
    display: flex;
    justify-content: center;
`;

const Menu = Styled.div`
    display: flex; 
    border-bottom: 1px solid rgba(204, 207, 209, 0.35);
    height: 67px;
    background-color: ${props => props.color};
`;

function MenuOption(props){

    const [isActive, setActive] = useState("true");
    
    function expand(){
        setActive(!isActive);
    }
    

    return(
        <Menu onClick={expand} color={isActive ? "#FFFFFF" : "#F8FAFB"}>
            <a className="MenuOptionLink" >
                <IconOption className="iconOption" color={isActive ? "#DAE0E3" : "#4C309B"}>
                    <Img src={props.Logo} ></Img>
                </IconOption>
                <div className="textOption">
                    {props.children}
                </div>
                
                <img src={Arrow} className="arrow"></img>
            </a>
            
        </Menu>
    );
}

export default MenuOption;