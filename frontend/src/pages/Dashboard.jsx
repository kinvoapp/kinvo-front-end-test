import { DashboardData } from "../components/DashboardData";
import { Left } from "../components/Menu/Left";
import { Top } from "../components/Menu/Top";

import { Container, InfoLeft, InfoRight, Informations } from "./styles";


export function Dashboard(){
    return (
        <Container>
            <Top/>

            <Informations>
                <InfoLeft>
                    <Left/>
                </InfoLeft>

                <InfoRight>
                    <DashboardData/>
                </InfoRight>
            </Informations>

        </Container>
    )
}