import React from 'react';
import Styled from 'styled-components';
import Background from '../Background';
import './MinhasRendasFixas.css';
import LineList from './component/LineList';

const Inputs = Styled.div`
    display:flex;
    padding:15px 15px 0px;
    justify-content: space-around;
    width:40%;
    input, select{
        border-radius: 10px;
        border: 1px solid #D6D9DD;
    }
    input{
        width:240px;
    }
    select{
        width: 155px;
    }
`;

function MinhasRendasFixas({props,data}){

    return(
        <Background>
            <div className="header">
                <h2>Minhas Rendas Fixas</h2>
                <Inputs>
                    <select>
                        <option selected>Ordenar Por</option>
                        <option>Rentabilidade</option>
                    </select>
                    <input type="text" ></input>
                </Inputs>
            </div>
            <div className="Body">
                <LineList></LineList>
                <LineList></LineList>
                <LineList></LineList>
                <LineList></LineList>
                <LineList></LineList>
            </div>
        </Background>
    )
}

export default MinhasRendasFixas;