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

import { Resume } from "../Resume";
import { DashboardDataCard } from "../DashboardDataCard";

import { Select } from "../Select";
import { InputSearch } from "../InputSearch";

export function DashboardData({
    rendaFixa,
    minhasRendasFixas,
    setOrderType,
    setSearchText
}){
    
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
                                    name=''
                                    defaulTitle='Ordenar por'
                                    onChange={(e) => setOrderType(e.target.value)}
                                />
                            </DataTopOrder>

                            <DataTopSearch>
                                <InputSearch
                                    onChange={(e) => {
                                        setSearchText(e.target.value);
                                    }}
                                />
                            </DataTopSearch>
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