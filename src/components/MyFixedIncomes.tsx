import styled from "styled-components";
import { useEffect, useState } from "react";

import { ColorName, ColorShade, getTheme } from "../styles/theme";
import { Card } from "./Card";
import { Flex } from "./Flex";
import { Text } from "./Text";
import { Input } from "./Input";
import { Icon } from "./Icon";

import { useFixedIncome } from "../hooks/FixedIncomeContext";
import type { FixedIncomeTitle } from "../data/fixed_income";
import { formatNumber } from "../utils/numberFormatter";
import { searchIcon } from "../styles/icons";
import { Select } from "./Select";
import { Divider } from "./Divider";

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

function OutlinedInfo(props: { title: string, info: { name?: string, value: string | number, color?: ColorName, shade?: ColorShade }[], gridTemplateColumns?: string }) {
    const { title, info } = props;
    return <OutlinedInfoWrapper>
        <Flex direction="column" width="100%">
            <Flex marginBottom={1}>
                <Text variant="card_subtitle">{title}</Text>
            </Flex>
            <InternalGrid numColumns={info.length} templateColumns={props.gridTemplateColumns}>
                {info.map(({ name, value, color = "text", shade = "main" }, key) => <Flex grow direction="column" key={key}>
                    {name ? <Text variant="card_subtitle">{name}</Text> : null}
                    <Text selectable variant="card_info_3" color={color} shade={shade}>{value}</Text>
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
    padding: 1.5rem 1rem;
    grid-template-columns: 4fr 6fr 2fr;
    grid-template-rows: 1fr;
    background-color: ${props => props.dark ? getTheme(props).background.lighter : "transparent"};
`

function FixedIncomeBox(props: { titleInfo: FixedIncomeTitle, darkBg: boolean }) {
    const { fixedIncome, due, position } = props.titleInfo;
    return (props.titleInfo ? <>
        <ExternalGrid dark={props.darkBg}>
            <OutlinedInfo title="Título" info={[
                { value: fixedIncome.name },
                { name: "Classe", value: fixedIncome.bondType, color: "primary", shade: "light" }
            ]} gridTemplateColumns="2fr 1fr" />
            <OutlinedInfo title="Minha posição" info={[
                { name: "Valor inves.", value: formatNumber(position.valueApplied, "$"), color: "success" },
                { name: "Saldo bruto", value: formatNumber(position.equity, "$"), color: "success" },
                { name: "Rent.", value: formatNumber(position.profitability, "%"), color: "success" },
                { name: "% da cart.", value: formatNumber(position.portfolioPercentage, "%"), color: "success" },
                { name: position.indexerLabel, value: formatNumber(position.indexerValue, "$"), color: "success" },
                { name: `Sobre ${position.indexerLabel}`, value: formatNumber(position.percentageOverIndexer, "$"), color: "success" },
            ]} />
            <OutlinedInfo title="Vencimento" info={[
                { name: "Data venc.", value: due.date.replace(/\//g, "."), color: "secondary" },
                { name: "Dias até venc.", value: due.daysUntilExpiration, color: "secondary" },
            ]} />
        </ExternalGrid>
    </> : null)
}

type SortingCriteria = 'title' | 'bond_type' | 'equity' | 'value_applied' | 'profitability' | 'due_date';

interface Sorting {
    criteria: SortingCriteria,
    order: 'ascending' | 'descending'
}

const sortingOptions: { [key: string]: Sorting } = {
    "Nome do título": {
        criteria: "title",
        order: "ascending",
    },
    "Classe": {
        criteria: "bond_type",
        order: "ascending",
    },
    "Saldo bruto": {
        criteria: "equity",
        order: "descending",
    },
    "Valor investido": {
        criteria: "value_applied",
        order: "descending",
    },
    "Rentabilidade": {
        criteria: "profitability",
        order: "descending",
    },
    "Data de vencimento": {
        criteria: "due_date",
        order: "ascending",
    }
};

export function MyFixedIncomes() {
    const fixedIncomeInfo = useFixedIncome();
    const [filtered, setFiltered] = useState(fixedIncomeInfo?.data?.snapshotByProduct);
    const [query, setQuery] = useState("");
    const [sorting, setSorting] = useState<Sorting>({
        criteria: "title",
        order: "ascending"
    });

    useEffect(() => {
        let newFiltered = [...(fixedIncomeInfo?.data?.snapshotByProduct ?? [])];

        if (query) {
            const regex = new RegExp(query, "ig");

            newFiltered = fixedIncomeInfo?.data?.snapshotByProduct.filter(info => regex.test(info.fixedIncome.name)) ?? [];
        }

        const coefficient = sorting.order === "ascending" ? 1 : -1;

        switch (sorting.criteria) {
            case "title":
                newFiltered.sort((a, b) => a.fixedIncome.name.localeCompare(b.fixedIncome.name, "pt") * coefficient);
                break;
            case "bond_type":
                newFiltered.sort((a, b) => a.fixedIncome.bondType.localeCompare(b.fixedIncome.bondType, "pt") * coefficient);
                break;
            case "equity":
                newFiltered.sort((a, b) => (a.position.equity - b.position.equity) * coefficient);
                break;
            case "value_applied":
                newFiltered.sort((a, b) => (a.position.valueApplied - b.position.valueApplied) * coefficient);
                break;
            case "profitability":
                newFiltered.sort((a, b) => (a.position.profitability - b.position.profitability) * coefficient);
                break;
            case "due_date":
                newFiltered.sort((a, b) => (a.due.daysUntilExpiration - b.due.daysUntilExpiration) * coefficient);
                break;
        }

        console.log(sorting);

        setFiltered(newFiltered);
    }, [fixedIncomeInfo, query, sorting]);

    return (<>
        <Card noPadding>
            <Flex grow direction="column" justifySelf="stretch" justify="flex-start" height="100%">
                <Flex justify="space-between" align="center" padding={1}>
                    <Text variant="card_title">
                        Minhas Rendas Fixas
                    </Text>
                    <Flex gap={1}>
                        <Select onChange={({ target }) => setSorting(JSON.parse((target as any).value))}>
                            <option value="title" disabled>Ordenar por</option>
                            {Object.keys(sortingOptions).map((label, key) => {
                                const value = sortingOptions[label];
                                return <option key={key} value={JSON.stringify(value)} selected={sorting.criteria === value.criteria}>{label}</option>
                            })}
                        </Select>
                        <Input style={{ width: "100vw", maxWidth: "24rem" }} value={query} onChange={({ target }) => setQuery((target as any).value)} startAdornment={
                            <Icon src={searchIcon} />
                        } />
                    </Flex>
                </Flex>
                <Divider />
                <Flex grow width="100%" direction="column">
                    {filtered?.map((titleInfo, index) => <FixedIncomeBox key={index} titleInfo={titleInfo} darkBg={index % 2 ? true : false} />)}
                </Flex>
            </Flex>
        </Card>
    </>)
}