import React from 'react';
import Styled from 'styled-components';
import GraphPizza from '../../../../assets/images/graphpizza.svg';

const Divisao= Styled.div`

    display: flex;
    justify-content: space-between;
    width:100%;
`;

const Background = Styled.div`
    
    background-color: white;
    border-radius: 10px;
    width: 44.9%;
    display: flex;
    flex-direction:column;
    align-items: left;
    padding: 15px 25px;
    color:#627179;
    font-size:15px;
    font-family: 'Montserrat';

    h2{
        color:#627179;
        font-weight:bold;
        font-family:'Montserrat';
        font-size:18px;
        font-weight:medium;
    }

`;

const Pizza = Styled.div`

    border-bottom: 1px solid #EEF2F4;
    border-top: 1px solid #EEF2F4;
    width: 100%;
    display:flex;
    justify-content:center;
    align-content: center;
    padding: 20px 0;
`;

const Description = Styled.div`
    display: flex;
    align-content: center;
    padding:30px;
    justify-content: center;
`;
const DescriptionList = Styled.ul`
    display:grid;
    grid-template-columns: 100px 100px 100px 100px;
`;

const Descriptions = Styled.li`
    width: 100%;
    padding: 2px 2px;
    font-size:12px;
`;


function DivisaoDaCarteira(){

    return(
        <Divisao>
            <Background>
                <h2>Divisão de Carteira por Tipos</h2>
                <Pizza>
                    <img src={GraphPizza}></img>
                </Pizza>
                <Description>
                    <DescriptionList>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                    </DescriptionList>
                </Description>
            </Background>
            <Background>
                <h2>Divisão de Carteira por Título</h2>
                <Pizza>
                    <img src={GraphPizza}></img>
                </Pizza>
                <Description>
                    <DescriptionList>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                        <Descriptions>Título</Descriptions>
                    </DescriptionList>
                </Description>
            </Background>
        </Divisao>
    )
}

export default DivisaoDaCarteira;