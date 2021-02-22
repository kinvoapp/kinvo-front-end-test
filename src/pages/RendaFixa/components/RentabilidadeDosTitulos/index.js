import React from 'react';
import Styled from 'styled-components';
import Background from '../Background';
import Graph from '../../../../assets/images/graph.svg';

const Graphic = Styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content: center;
    padding: 20px 20px;
`;
function RentabilidadeDosTitulos(){

    return(
        <Background>
            <h2>Rentabilidade dos Títulos</h2>
            <Graphic>
                <img src={Graph}></img>
            </Graphic>
        </Background>
    )
}

export default RentabilidadeDosTitulos;