import { AsideTopics } from "../AsideTopics";
import { Button } from "../Button";
import BarChart from "../Grafic";
import PieChart from "../PieChart";
import { ScripList } from "../ScripList/index";
import { Container } from "./style";

export function Main(){
    return(
        <Container>
            <AsideTopics/>
            <div>
                <h1>Renda fixa</h1>
                <Button/>
                <BarChart/>
                <ScripList/>
                <PieChart/>
            </div>
        </Container>
    )
}