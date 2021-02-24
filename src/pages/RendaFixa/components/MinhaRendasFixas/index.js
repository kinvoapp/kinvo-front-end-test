import React from 'react';
import Styled from 'styled-components';
import Background from '../Background';
import './MinhasRendasFixas.css';
import LineList from './component/LineList';

const Inputs = Styled.div`
    font-family:'Montserrat';
    
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
        color:#707B81;
        width: 155px;
    }
`;



function MinhasRendasFixas(props){

    //console.log(props.lista);
    const snapshotByProduct = props.lista;

    const listItems = snapshotByProduct.map( (product) => 
    <LineList dados={product}></LineList> )
    //console.log(snapshotByProduct);
    
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
            
                {/*props&&props.lista.forEach(element=>{<LineList data={element}></LineList>})*/} 
                {listItems}
            </div>
            <div className="footer">
                PAGINAÇÃO
            </div>
        </Background>
    )
}

export default MinhasRendasFixas;