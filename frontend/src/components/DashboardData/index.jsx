import rectangle from '../../assets/icones/rectangle.svg'

import { Container, DataContainer, DataTopActions, DataTopInformations, DataTopOrder, DataTopSearch, DataTopTitle, Resume1, Resume2, ResumeContainer, ResumeInformations, Resumes, Title, VerticalLine } from "./styles";

export function DashboardData(){
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
                            <DataTopOrder>oi</DataTopOrder>
                            <DataTopSearch>Ola</DataTopSearch>
                        </DataTopActions>
                    </DataTopActions>
                </DataTopInformations>
            </DataContainer>
        </Container>

    )
}