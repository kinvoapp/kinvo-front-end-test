import {
    Classe1,
    Classification,
    Container,
    DataContainer,
    DataExpiration,
    DataExpirationInfo1,
    DataInformations,
    DataPosition,
    DataPositionInfo1,
    DataPositionInformations,
    DataTitle,
    DataTitleInfo,
    DataTitleInfo1,
    DataTitleInformations,
    DataTopActions,
    DataTopInformations,
    DataTopOrder,
    DataTopSearch,
    DataTopTitle,
    Resume1,
    Resume2,
    ResumeContainer,
    ResumeInformations,
    Resumes,
    Title,
    VerticalLine 
} from "./styles";

import React from "react";
import Select from 'react-select'

import information from '../../assets/icones/information.svg'

export function DashboardData(){
    // Objeto para select
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const selectCustomStyles = {
        option: (provided, state) =>({
            ...provided,
        }), 
        menu: (provided, state) => ({
            ...provided,
            color: state.selectProps.menuColor,
        })
    }

    return(
        <Container>
            <Title>Renda Fixa</Title>

            <ResumeContainer>
                <ResumeInformations>
                    <VerticalLine/>
                    <Resumes>
                        <Resume1>Saldo Bruto</Resume1>
                        <Resume2>R$ 207.635,10</Resume2>
                    </Resumes>
                </ResumeInformations>
            </ResumeContainer>

            <DataContainer>
                <DataTopInformations>
                    <DataTopTitle>Minhas Rendas Fixas</DataTopTitle>

                    <DataTopActions>
                        <DataTopActions>
                            <DataTopOrder>
                                <Select 
                                    options={options}
                                    styles={selectCustomStyles}
                                    menuColor = '#4c309b'
                                />
                            </DataTopOrder>

                            <DataTopSearch>Ola</DataTopSearch>
                        </DataTopActions>
                    </DataTopActions>
                </DataTopInformations>

                <DataInformations>
                    <DataTitle>
                        <Classification>
                            Título 
                            <img src={information} alt="" />
                        </Classification>

                        <DataTitleInformations>
                            <DataTitleInfo>
                                <p>Tesouro IPCA+ com juros</p>
                                <p>Semestrais 2024 (NTNB)</p>
                            </DataTitleInfo>
                            <DataTitleInfo1>
                                <p>classe</p>
                                <Classe1>
                                    <p>Tesouro Direto</p>
                                </Classe1>
                            </DataTitleInfo1>
                        </DataTitleInformations>
                    </DataTitle>

                    <DataPosition>
                        <Classification>
                            Minha posição 
                            <img src={information} alt="" />
                        </Classification>

                        <DataPositionInformations>
                            <DataTitleInfo1>
                                <p>Valor invest.</p>
                                <DataPositionInfo1>
                                    <p>1.003,00</p>
                                </DataPositionInfo1>
                            </DataTitleInfo1>
                            <DataTitleInfo1>
                                <p>Saldo bruto</p>
                                <DataPositionInfo1>
                                    <p>1.124,00</p>
                                </DataPositionInfo1>
                            </DataTitleInfo1>
                            <DataTitleInfo1>
                                <p>Rent.</p>
                                <DataPositionInfo1>
                                    <p>48,55%</p>
                                </DataPositionInfo1>
                            </DataTitleInfo1>
                            <DataTitleInfo1>
                                <p>% da cart.</p>
                                <DataPositionInfo1>
                                    <p>5,33%</p>
                                </DataPositionInfo1>
                            </DataTitleInfo1>
                            <DataTitleInfo1>
                                <p>cdi</p>
                                <DataPositionInfo1>
                                    <p>1,24</p>
                                </DataPositionInfo1>
                            </DataTitleInfo1>
                            <DataTitleInfo1>
                                <p>Sobr cdi</p>
                                <DataPositionInfo1>
                                    <p>118</p>
                                </DataPositionInfo1>
                            </DataTitleInfo1>
                            
                        </DataPositionInformations>
                    </DataPosition>

                    <DataExpiration>
                        <Classification>
                            Minha posição 
                            <img src={information} alt="" />
                        </Classification>

                        <DataPositionInformations>
                            <DataTitleInfo1>
                                <p>Data venc.</p>
                                <DataExpirationInfo1>
                                    <p>15.05.20248</p>
                                </DataExpirationInfo1>
                            </DataTitleInfo1>
                            <DataTitleInfo1>
                                <p>Dias ate venc.</p>
                                <DataExpirationInfo1>
                                    <p>5762</p>
                                </DataExpirationInfo1>
                            </DataTitleInfo1>
                        </DataPositionInformations>
                    </DataExpiration>
                </DataInformations>
            </DataContainer>
        </Container>

    )
}