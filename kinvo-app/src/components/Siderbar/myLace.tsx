import { Box, Flex, Grid, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, Text } from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi';
import CardTab from "../CardTab/cardTab";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import CardInvest from "../CardTab/CardInvest";
import CardDate from "../CardTab/CardDate";
import { PaginationItem } from "../pagination/pagination";
import { Paginations } from "../pagination";

interface snapshotByProductProps {
    data: {
        data: {
            snapshotByProduct: {
                due: {
                    date: string
                    daysUntilExpiration: number
                },
                fixedIncome: {
                    bondType: string
                    name: string
                    portfolioProductId: number
                },
                position: {
                    equity: number
                    indexerLabel: string
                    indexerValue: number
                    percentageOverIndexer: number
                    portfolioPercentage: number
                    profitability: number
                    valueApplied: number
                }
            }
        }
    }


}

export default function MyLace() {
    const [value, setValue] = useState([])
    console.log("🚀 ~ value", value)
    const [filter, setFilter] = useState([])
    const [search, setSearch] = useState('')
    const [orderBy, setOrderBy] = useState('');

    const [page, setPage] = useState(1)

    async function loadRendaFixas() {
        axios.get('https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData')
            .then(response => setValue(response.data.data.snapshotByProduct));
    }

    const filteredProducts = useMemo(() => {

        if (!filter)
            return value.sort((a, b) => b.position[orderBy] - a.position[orderBy]);

        return value
            .sort((a, b) => b.position[orderBy] - a.position[orderBy])
            .filter((rendaFixa) =>
                rendaFixa.fixedIncome.name.toLowerCase().includes(filter)
            );
    }, [filter, value, orderBy]);

    useEffect(() => {
        loadRendaFixas()

    }, []);

    useEffect(() => {
        setFilter(value?.filter(value => value.fixedIncome.name.toLowerCase().includes(search.toLowerCase())))
    }, [search]);

    return (
        <>
            <Box bg='white' m={5} borderRadius='0.5rem'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex p={5}>
                        <Text fontWeight='lighter'>Rentabilidade de titulos</Text>
                    </Flex>

                    <Flex paddingRight={5} gap={4}>

                        <Select
                            value={orderBy}
                            onChange={(e) => setOrderBy(e.target.value)}
                        >
                            <option value="" disabled hidden>
                                Ordernar por
                            </option>
                            <option value="valueApplied">Valor Investido</option>
                            <option value="equity">Saldo Bruto</option>
                            <option value="profitability">Rentabilidade</option>
                            <option value="portfolioPercentage">% da Carteira</option>
                        </Select>

                        <Stack spacing={4}>
                            <Input
                                placeholder='Basic usage'
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </Stack>
                    </Flex>

                </Flex>
                <Box p={5} justifyContent='space-between' gap={2} display='flex' flexDirection='column'>
                    <table>
                        {search.length > 0 ? (
                            <thead>
                                {filter?.map(item => {
                                    return (
                                        <>
                                            <tr key={item}>
                                                <th>
                                                    <CardTab description={item.fixedIncome.name} name={item.fixedIncome.bondType} />
                                                </th>
                                                <th>
                                                    <CardInvest

                                                        equity={item.position.equity}
                                                        indexerValue={item.position.indexerValue}
                                                        percentageOverIndexer={item.position.percentageOverIndexer}
                                                        portfolioPercentage={item.position.portfolioPercentage}
                                                        profitability={item.position.profitability}
                                                        valueApplied={item.position.valueApplied}
                                                    />
                                                </th>
                                                <th>
                                                    <CardDate dateVenc={item.due.date} dateDay={item.due.daysUntilExpiration} />
                                                </th>
                                            </tr>
                                        </>
                                    )
                                })}

                            </thead>
                        ) : (
                            <thead>
                                {value?.map(item => {
                                    return (
                                        <>
                                            <tr key={item}>
                                                <th>
                                                    <CardTab description={item.fixedIncome.name} name={item.fixedIncome.bondType} />
                                                </th>
                                                <th>
                                                    <CardInvest

                                                        equity={item.position.equity}
                                                        indexerValue={item.position.indexerValue}
                                                        percentageOverIndexer={item.position.percentageOverIndexer}
                                                        portfolioPercentage={item.position.portfolioPercentage}
                                                        profitability={item.position.profitability}
                                                        valueApplied={item.position.valueApplied}
                                                    />
                                                </th>
                                                <th>
                                                    <CardDate dateVenc={item.due.date} dateDay={item.due.daysUntilExpiration} />
                                                </th>
                                            </tr>
                                        </>
                                    )
                                })}

                            </thead>
                        )}
                    </table>

                    <Paginations
                        totalCountOfRegisters={value}
                        currentPage={page}
                        onPageChange={setPage} />

                </Box>

            </Box>


        </>

    )
}


{/* <table>
<thead>
    <tr>
        <th>
            {value?.map((items: any) => items.fixedIncome).map((fixe: any) => {
                return (
                    <CardTab key={fixe} description={fixe.name
                    } name={fixe.bondType} />
                )
            })}
        </th>
        <th>
            {value?.map((items: any) => items.position).map((position: any) => {
                return (
                    <CardInvest
                        key={position}
                        equity={position.equity}
                        indexerValue={position.indexerValue}
                        percentageOverIndexer={position.percentageOverIndexer}
                        portfolioPercentage={position.portfolioPercentage}
                        profitability={position.profitability}
                        valueApplied={position.valueApplied}
                    />
                )
            })}
        </th>
        <th>
            {value?.map((items: any) => items.due).map((date: any) => {
                return (

                    <CardDate key={date} dateVenc={date.date} dateDay={date.daysUntilExpiration} />
                )
            })}
        </th>
    </tr>
</thead>
</table> */}
