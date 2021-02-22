import React from 'react';
import './style.css';
import PageDefault from '../../components/PageDefault';
import Styled from 'styled-components';
import InfoLabel from './InfoLabel';
import RentabilidadeDosTitulos from './components/RentabilidadeDosTitulos';
import MinhasRendasFixas from './components/MinhaRendasFixas';
import DivisaoDaCarteira from './components/DivisaoDaCarteira';
import Container from '../../components/PageContainer';


function RendaFixa(){
    return(
        <>
            <PageDefault>
                <Container>
                    <h1>Renda Fixa</h1>
        
                    <ul>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value="R$ 207.653,10">
                                SALDO BRUTO
                            </InfoLabel>
                        </div>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value="R$ 170.025,64">
                                VALOR APLICADO
                            </InfoLabel>
                        </div>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value="R$ 37.638,46">
                                RESULTADO
                            </InfoLabel>
                        </div>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value="25,08%">
                                RENTABILIDADE
                            </InfoLabel>
                        </div>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value="23,68%">
                                CDI
                            </InfoLabel>
                        </div>
                        <div className="card-container">
                            <div className="line"></div>
                            <InfoLabel Value="320%">
                                % SOBRE CDI
                            </InfoLabel>
                        </div>
                    </ul>
                 
                    <RentabilidadeDosTitulos/>

                    <MinhasRendasFixas/>
                 
                    <DivisaoDaCarteira/>
                                   
                </Container>
                
            </PageDefault>
        </>
    )
}

export default RendaFixa;
