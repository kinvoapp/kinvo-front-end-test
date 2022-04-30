import {
    Classification,
    Container,
    DataContainer,
    DataExpiration,
    DataExpirationInfo1,
    DataInformations,
    DataPosition,
    DataPositionInfo1,
    DataPositionInformations,
    DataTitleInfo1,
    DataTopActions,
    DataTopInformations,
    DataTopOrder,
    DataTopSearch,
    DataTopTitle,
    ResumeContainer,
    Title,
} from "./styles";

import Select from 'react-select'
import information from '../../assets/icones/information.svg'

import { Resume } from "../Resume";
import { DashboardDataTitle } from "../DashboardDataTitle";
import { DashboardDataPosition } from "../DashboardDataPosition";


export function DashboardData({
    rendaFixa,
    minhasRendasFixas
}){
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

    const resultsMinhasRendasFixas = minhasRendasFixas.map((data, index) => {
        return [
            <DashboardDataTitle data={data} key={index}/>,
            <DashboardDataPosition data={data} key={index}/>
        ]
    })

    return(
        <Container>
            <Title>Renda Fixa</Title>

            <ResumeContainer>
                <Resume
                    rendaFixa={rendaFixa}
                />
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
                    {resultsMinhasRendasFixas}
                    {/* <DashboardDataTitle
                        fixedIncomeName={minhasRendasFixas.name}
                        fixedIncomebondType={minhasRendasFixas.bondType}
                    /> */}

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