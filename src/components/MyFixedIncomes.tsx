import styled from "styled-components";
import { ColorName, ColorShade, getTheme } from "../styles/theme";
import { Card } from "./Card";
import { Flex } from "./Flex";
import { Text } from "./Text";

import { useEffect, useState } from "react";
import { useFixedIncome } from "../hooks/FixedIncomeContext";
import type { FixedIncomeTitle } from "../data/fixed_income";
import { formatNumber } from "../utils/numberFormatter";

const OutlinedInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 1rem;
    border-radius: 0.75rem;
    border: solid 2px ${props => getTheme(props).background.main};
`;

const InternalGrid = styled.div.attrs(props => ({
    numColumns: (props as any).numColumns as number,
    templateColumns: (props as any).templateColumns as string,
}))`
    display: grid;
    gap: 0.5rem;
    width: 100%;
    grid-template-columns: ${props => props.templateColumns || `repeat(${props.numColumns}, 1fr)`};
    grid-template-rows: 1fr;
`

function OutlinedInfo(props: { title: string, info: { name?: string, value: string|number, color?: ColorName, shade?: ColorShade }[], gridTemplateColumns?: string}) {
    const {title, info} = props;
    return <OutlinedInfoWrapper>
        <Flex direction="column" width="100%">
            <Flex marginBottom={1}>
                <Text variant="card_subtitle">{title}</Text>
            </Flex>
            <InternalGrid numColumns={info.length} templateColumns={props.gridTemplateColumns}>
                {info.map(({name, value, color = "text", shade = "main"}, key) => <Flex grow direction="column" key={key}>
                    {name ? <Text variant="card_subtitle">{name}</Text> : null}
                    <Text variant="card_info_3" color={color} shade={shade}>{value}</Text>
                </Flex>)}
            </InternalGrid>
        </Flex>
    </OutlinedInfoWrapper>
}

const ExternalGrid = styled.div.attrs(props => ({
    dark: (props as any).dark ? true : false
}))`
    display: grid;
    gap: 1rem;
    width: 100%;
    height: 100%:
    padding: 1rem;
    grid-template-columns: 4fr 6fr 2fr;
    grid-template-rows: 1fr;
    background-color: ${props => props.dark ? getTheme(props).background.lighter : "transparent"};
`

function FixedIncomeBox(props: { titleInfo: FixedIncomeTitle, darkBg: boolean }) {
    const { fixedIncome, due, position } = props.titleInfo;
    return (props.titleInfo ? <>
            <ExternalGrid dark={props.darkBg}>
                <OutlinedInfo title="Título" info={[
                    {value: fixedIncome.name},
                    {name: "Classe", value: fixedIncome.bondType, color: "primary", shade: "light"}
                ]} gridTemplateColumns="2fr 1fr"/>
                <OutlinedInfo title="Minha posição" info={[
                    {name: "Valor inves.", value: formatNumber(position.valueApplied, "$"), color: "success"},
                    {name: "Saldo bruto", value: formatNumber(position.valueApplied, "$"), color: "success"},
                    {name: "Rent.", value: formatNumber(position.profitability, "%"), color: "success"},
                    {name: "% da cart.", value: formatNumber(position.portfolioPercentage, "%"), color: "success"},
                    {name: position.indexerLabel, value: formatNumber(position.indexerValue, "$"), color: "success"},
                    {name: `Sobre ${position.indexerLabel}`, value: formatNumber(position.percentageOverIndexer, "$"), color: "success"},
                ]} />
                <OutlinedInfo title="Vencimento" info={[
                    {name: "Data venc.", value: due.date.replace(/\//g, "."), color: "secondary"},
                    {name: "Dias até venc.", value: due.daysUntilExpiration, color: "secondary"},
                ]} />
            </ExternalGrid>
    </> : null)
}

export function MyFixedIncomes() {
    const fixedIncomeInfo = useFixedIncome();
    const [filtered, setFiltered] = useState(fixedIncomeInfo?.data?.snapshotByProduct);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setFiltered(fixedIncomeInfo?.data?.snapshotByProduct);
    }, [fixedIncomeInfo, search]);

    return (<>
        <Card>
            <Flex grow direction="column" justifySelf="stretch" justify="flex-start" height="100%">
                <Flex justify="space-between" marginBottom={2}>
                    <Text variant="card_title">
                        Minhas Rendas Fixas
                    </Text>
                    <Flex gap={1}>
                        <div>Ordenar por</div>
                        <div>Pesquisar</div>
                    </Flex>
                </Flex>
                <Flex grow direction="column" alignSelf="stretch" gap={1}>
                    {filtered?.map((titleInfo, index) => <FixedIncomeBox key={index} titleInfo={titleInfo} darkBg={index % 2 ? true: false} />)}
                </Flex>
            </Flex>
        </Card>
    </>)
}