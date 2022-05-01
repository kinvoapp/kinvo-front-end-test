import {
    Container,
    DataContainer,
    DataInformations,
    DataTopActions,
    DataTopInformations,
    DataTopOrder,
    DataTopSearch,
    DataTopTitle,
    ResumeContainer,
    Title,
} from "./styles";

import Select from 'react-select'

import { Resume } from "../Resume";
import { DashboardDataCard } from "../DashboardDataCard";


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
        return <DashboardDataCard data={data} key={index}/>
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
                </DataInformations>
            </DataContainer>
        </Container>

    )
}