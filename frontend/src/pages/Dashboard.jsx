import { Left } from "../components/Menu/Left";
import { Top } from "../components/Menu/Top";

import { Container, InfoLeft } from "./styles";


export function Dashboard(){
    return (
        <Container>
            <Top/>

            <InfoLeft>
                <Left/>
            </InfoLeft>

        </Container>
    )
}