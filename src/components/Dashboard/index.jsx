import { SideBar } from "../SideBar";
import { Container, Content } from "./styles";
import { Summary } from "../Summary/index";
import { useEffect } from "react";
import { useState } from "react";

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
                    <button onClick={() => console.log(fixedIncomeData)}>
                        aaaa
                    </button>
                    <Summary portfolio={fixedIncomeData.data?.snapshotByPortfolio}/>
                    
                </Content>
            </Container>
        </>
    )
}