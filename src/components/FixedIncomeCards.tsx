import styled from "styled-components";

import { getTheme } from "../styles/theme";
import { Card } from "./Card";
import { Flex } from './Flex';
import { Text } from './Text';

interface FixedIncomeInfo {
    title: string,
    value: string
}

const info: FixedIncomeInfo[] = [
    {
        title: "Saldo bruto",
        value: "R$ 207.653,10"
    },
    {
        title: "Valor aplicado",
        value: "R$ 170.025,64"
    },
    {
        title: "Resultado",
        value: "R$ 37.638,46"
    },
    {
        title: "Rentabilidade",
        value: "25,08%"
    },
    {
        title: "CDI",
        value: "23,68%"
    },
    {
        title: "% sobre CDI",
        value: "320%"
    },
]

interface FixedIncomeCardsProps {
    info: FixedIncomeInfo[]
}

const FixedIncomeCardContent = styled.div`
    padding-left: 0.75rem;
    border-left: solid 3px ${props => getTheme(props).background.main};
`;

export function FixedIncomeCards(/*{ info }: FixedIncomeCardsProps*/) {
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