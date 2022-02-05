import React from "react";

import { Row, Title } from './styles'

import SmallBox from '../SmallBox'

function DashboardPortfolio ({ portfolio }) {
    return(
        <section>
            <Title>Renda Fixa</Title>
            <Row>
                <SmallBox title="Saldo Bruto" value={portfolio.equity} type="money" />
                <SmallBox title="Valor Aplicado" value={portfolio.valueApplied} type="money" />
                <SmallBox title="Resultado" value={portfolio.equityProfit} type="money" />
                <SmallBox title="Rentabilidade" value={portfolio.percentageProfit} type="percent" />
                <SmallBox title="CDI" value={portfolio.indexerValue} type="percent" />
                <SmallBox title="% sobre CDI" value={portfolio.percentageOverIndexer} type="percent" />
            </Row>
        </section>
    )
}

export default DashboardPortfolio;