import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`

    display:flex;
    justify-content: space-around;
    width: 100%;
    padding: 20px 0px 20px 0px;
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
        font-weight: bold;
    }
`;

const Value = Styled.h5`
    font-family: 'Montserrat';
    font-size: 15px;
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
                        {props.dados.fixedIncome.name}
                    </div>
                    <div>
                        <p>CLASSE</p>
                        <Value color="#8A51BA">{props.dados.fixedIncome.bondType}</Value>
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
                        <Value color="#38BFA0">{props.dados.position.valueApplied.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Value>
                    </div>
                    <div>
                        <p>SALDO BRUTO</p>
                        <Value color="#38BFA0">{props.dados.position.equity.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Value>
                    </div>
                    <div>
                        <p>RENT</p>
                        <Value color="#38BFA0">{props.dados.position.profitability.toString().replace('.',',')+'%'}</Value>
                    </div>
                    <div>
                        <p>% DA CART.</p>
                        <Value color="#38BFA0">{props.dados.position.portfolioPercentage.toString().replace('.',',')+'%'}</Value>
                    </div>
                    <div>
                        <p>CDI</p>
                        <Value color="#38BFA0">{props.dados.position.indexerValue.toString().replace('.',',')}</Value>
                    </div>
                    <div>
                        <p>SOBRE CDI</p>
                        <Value color="#38BFA0">{props.dados.position.percentageOverIndexer}</Value>
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
                        <Value color="#008DCB">{props.dados.due.date}</Value>
                    </div>
                    <div>
                        <p>DIAS ATÉ VENC</p>
                        <Value color="#008DCB">{props.dados.due.daysUntilExpiration}</Value>
                    </div>
                </div>
            </Card>
        </Container>
    );
}

export default LineList;