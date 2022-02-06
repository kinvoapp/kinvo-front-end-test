import styled from "styled-components";

import { getTheme } from "../styles/theme";
import { formatNumber } from "../utils/numberFormatter";
import { Card } from "./Card";
import { Flex } from './Flex';
import { Text } from './Text';
import { useFixedIncome } from '../hooks/FixedIncomeContext';

interface FixedIncomeInfo {
    title: string,
    value: string
}

const FixedIncomeCardContent = styled.div`
    padding-left: 0.75rem;
    border-left: solid 3px ${props => getTheme(props).background.main};
`;

export function FixedIncomeCards() {
    const navbarInfo = useFixedIncome()?.data?.snapshotByPortfolio;

    const info: FixedIncomeInfo[] = navbarInfo ? [
        {
            title: "Saldo bruto",
            value: formatNumber(navbarInfo.equity ?? 0, "R$")
        },
        {
            title: "Valor aplicado",
            value: formatNumber(navbarInfo.valueApplied ?? 0, "R$")
        },
        {
            title: "Resultado",
            value: formatNumber(navbarInfo.equityProfit ?? 0, "R$")
        },
        {
            title: "Rentabilidade",
            value: formatNumber(navbarInfo.percentageProfit ?? 0, "%")
        },
        {
            title: "CDI",
            value: formatNumber(navbarInfo.indexerValue ?? 0, "%")
        },
        {
            title: "% sobre CDI",
            value: formatNumber(navbarInfo.percentageOverIndexer ?? 0, "%")
        },
    ] : [];

    return (<>
        {info.map(({ title, value }, index) => <Card key={index}>
            <Flex grow align="center" height="100%">
                <FixedIncomeCardContent>
                    <Text variant="card_subtitle">{title}</Text><br />
                    <Text variant="card_info_2" color="primary" selectable>{value}</Text>
                </FixedIncomeCardContent>
            </Flex>
        </Card>)}
    </>)
}