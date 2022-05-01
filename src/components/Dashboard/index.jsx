import { useEffect } from "react";
import { useState } from "react";

import { Container, Content } from "./styles";

import { SideBar } from "../SideBar";
import { Summary } from "../Summary/index";
import { ProfitabilityGraph } from "../ProfitabilityGraph/index"
import { FixedIncomes } from "../FixedIncomes";

export function Dashboard() {
    const [fixedIncomeData, setFixedIncomeData] = useState({})
    useEffect(() => {
        fetch("https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData",{
            method: "GET",
        })
        .then((response) => response.json())
        .then(data => setFixedIncomeData(data))
    }, [])

    return(
        <>
            <SideBar />
            <Container>
                <Content>
                    <Summary portfolio={fixedIncomeData.data?.snapshotByPortfolio}/>
                    <ProfitabilityGraph />
                    <FixedIncomes products={fixedIncomeData.data?.snapshotByProduct} />
                </Content>
            </Container>
        </>
    )
}