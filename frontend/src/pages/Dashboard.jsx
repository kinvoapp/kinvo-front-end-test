import { DashboardData } from "../components/DashboardData";
import { Left } from "../components/Menu/Left";
import { Top } from "../components/Menu/Top";

import { Container, InfoLeft, InfoRight, Informations } from "./styles";


import api from '../services/api'
import { useEffect, useState } from "react";

export function Dashboard(){
    const [rendaFixa, setRendaFixa] = useState([])
    const [minhasRendasFixas, setMinhasRendasFixas] = useState([]);


    useEffect(() => {
        api
            .get("/mock/getFixedIncomeClassData")
            .then(({ data }) => {
                setRendaFixa(data.data.snapshotByPortfolio)

                setMinhasRendasFixas(data.data.snapshotByProduct)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <Container>
            <Top
                rendaFixa={rendaFixa}
            />

            <Informations>
                <InfoLeft>
                    <Left/>
                </InfoLeft>

                <InfoRight>
                    <DashboardData
                        rendaFixa={rendaFixa}
                        minhasRendasFixas={minhasRendasFixas}
                    />
                </InfoRight>
            </Informations>

        </Container>
    )
}
