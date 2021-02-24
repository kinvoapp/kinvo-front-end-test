import React, {useState} from 'react';
import './style.css';
import PageDefault from '../../components/PageDefault';
import Styled from 'styled-components';
import InfoLabel from './InfoLabel';
import RentabilidadeDosTitulos from './components/RentabilidadeDosTitulos';
import MinhasRendasFixas from './components/MinhaRendasFixas';
import DivisaoDaCarteira from './components/DivisaoDaCarteira';
import Container from '../../components/PageContainer';

import api from '../../services/api';

function RendaFixa(){

    const [dados, setDados] = useState(0);

    //fazendo requisição dos dados na API
    api.get('/getFixedIncomeClassData')
    .then((response) => {
        setDados(response.data.data)
    })
    .catch((err) => console.log('Ops algo deu errado: '+ err));


    return(
        <>
            <PageDefault>
                <Container>
                    <h1>Renda Fixa</h1>
        
                    <ul>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value={dados && dados.snapshotByPortfolio.equity.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}>
                                SALDO BRUTO
                            </InfoLabel>
                        </div>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value={dados && dados.snapshotByPortfolio.valueApplied.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}>
                                VALOR APLICADO
                            </InfoLabel>
                        </div>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value={dados && dados.snapshotByPortfolio.equityProfit.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}>
                                RESULTADO
                            </InfoLabel>
                        </div>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value={dados && dados.snapshotByPortfolio.percentageProfit+'%'}>
                                RENTABILIDADE
                            </InfoLabel>
                        </div>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value={dados && dados.snapshotByPortfolio.indexerValue+'%'}>
                                CDI
                            </InfoLabel>
                        </div>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value={dados && dados.snapshotByPortfolio.percentageOverIndexer+'%'}>
                                % SOBRE CDI
                            </InfoLabel>
                        </div>
                    </ul>
                 
                    <RentabilidadeDosTitulos/>

                    <MinhasRendasFixas lista={dados && dados.snapshotByProduct}/>
                 
                    <DivisaoDaCarteira/>
                                   
                </Container>
                
            </PageDefault>
        </>
    )
}

export default RendaFixa;
