import { DashboardData } from "../components/DashboardData";
import { Left } from "../components/Menu/Left";
import { Top } from "../components/Menu/Top";

import { Container, InfoLeft, InfoRight, Informations } from "./styles";


import api from '../services/api'
import { useEffect, useState } from "react";

export function Dashboard(){
    const [rendaFixa, setRendaFixa] = useState([])
    const [minhasRendasFixas, setMinhasRendasFixas] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [orderType, setOrderType] = useState("");

    // Api call
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

    // Filter
    const filteredDashboardDataCards = !!searchText ? 
        minhasRendasFixas.filter((dashboardCard) => {
            return dashboardCard.fixedIncome.name
                .normalize("NFD")
                .toLowerCase()
                .includes(searchText.normalize("NFD").toLowerCase())
        })
        : minhasRendasFixas

    // Order
    const orderedDashboardDataCards = 
        filteredDashboardDataCards.sort((val1, val2) => {
            if(orderType === 'Valor investido'){
                const dataValue1 = val1.position.valueApplied
                const dataValue2 = val2.position.valueApplied

                // Conditional to order value
                if(dataValue1 > dataValue2){
                    return -1
                } else if( dataValue1 < dataValue2){
                    return 1
                } else {
                    return 0
                }
            }else if(orderType === 'Saldo bruto'){
                const dataValue1 = val1.position.equity
                const dataValue2 = val2.position.equity

                // Conditional to order value
                if(dataValue1 > dataValue2){
                    return -1
                } else if( dataValue1 < dataValue2){
                    return 1
                } else {
                    return 0
                }
            }
        })

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
                        minhasRendasFixas={orderedDashboardDataCards}
                        setSearchText={setSearchText}
                        setOrderType={setOrderType}
                    />
                </InfoRight>
            </Informations>

        </Container>
    )
}
