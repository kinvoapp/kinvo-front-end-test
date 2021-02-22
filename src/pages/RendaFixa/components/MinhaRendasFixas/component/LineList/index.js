import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`

    display:flex;
    justify-content: space-around;
    width: 100%;
    padding: 20px 30px 20px 0px;
    box-sizing: border-box;
    border-bottom: 1px solid #EEF2F4;
`;

const Card = Styled.div`
    padding:10px;
    border: 1px solid #D6D9DD;
    border-radius: 10px;
    width:${props => props.width};
    
    .body{
        display:flex;
        justify-content:space-between;
    }

    .header{
        font-size: 9px;
        margin-bottom: 15px;
    }
    .description{
        font-size: 12px;
        width:50%;
    }
    p{
        margin:2px;
        text-align:left;
    }
`;

const Value = Styled.h5`
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 500; 
    color: ${props => props.color};
`;
function LineList(props){

    return(

        <Container>
            <Card width="33%">
                <div className="header">
                    TÍTULO
                </div>
                <div className="body">
                    <div className="description">
                        Tesouro IPCA+ com Juros Semestrais 2024 (NTNB)
                    </div>
                    <div>
                        <p>CLASSE</p>
                        <Value color="#8A51BA">Tesouro Direto</Value>
                    </div>
                </div>
            </Card>
            <Card width="42%">
                <div className="header">
                    MINHA POSIÇÃO
                </div>
                <div className="body">
                    <div>
                        <p>VALOR INVES.</p>
                        <Value color="#38BFA0">1.003,00</Value>
                    </div>
                    <div>
                        <p>SALDO BRUTO</p>
                        <Value color="#38BFA0">1.124,00</Value>
                    </div>
                    <div>
                        <p>RENT</p>
                        <Value color="#38BFA0">48,55%</Value>
                    </div>
                    <div>
                        <p>% DA CART.</p>
                        <Value color="#38BFA0">5,33%</Value>
                    </div>
                    <div>
                        <p>CDI</p>
                        <Value color="#38BFA0">1,24</Value>
                    </div>
                    <div>
                        <p>SOBRE CDI</p>
                        <Value color="#38BFA0">118</Value>
                    </div>
                </div>
            </Card>
            <Card width="17%">
                <div className="header">
                    VENCIMENTO
                </div>
                <div className="body">
                    <div>
                        <p>DATA VENC.</p>
                        <Value color="#008DCB">15.05.2024</Value>
                    </div>
                    <div>
                        <p>DIAS ATÉ VENC</p>
                        <Value color="#008DCB">5762</Value>
                    </div>
                </div>
            </Card>
        </Container>
    );
}

export default LineList;