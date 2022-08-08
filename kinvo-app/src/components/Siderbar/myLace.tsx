import { Box, Flex, Grid, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, Text } from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi';
import CardTab from "../CardTab/cardTab";
import axios from "axios";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import CardInvest from "../CardTab/CardInvest";
import CardDate from "../CardTab/CardDate";

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
    const [repos,setRepos] = useState([])
    const [searchFilter,setSeachFilter] = useState([])
    const [search,setSeach] = useState('')


    useEffect(() => {
        fetch('https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData')
        .then(response => response.json())
        .then(data => setRepos(data))
        
    }, []);

    const { data } = useQuery('Mylace', async () => {
        const response = await axios.get('https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData')

        return response
    })
    const value = data?.data.data.snapshotByProduct
   

    const index = [0,1,2,3,4,5,6]


    return (
        <>
            <Box bg='white' m={5} borderRadius='0.5rem'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex p={5}>
                        <Text fontWeight='lighter'>Rentabilidade de titulos</Text>
                    </Flex>

                    <Flex paddingRight={5} gap={4}>

                        <Select placeholder='Ordenar por'>
                            <option value='option1'>Descrecente</option>
                            <option value='option2'>Crecente</option>
                        </Select>

                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    // eslint-disable-next-line react/no-children-prop
                                    children={<FiSearch color='gray.300' />}
                                />
                                <Input type='search' value={repos} onChange={(e:any) => setRepos(e.target.value)}/>
                            </InputGroup>
                        </Stack>
                    </Flex>

                </Flex>
                <Box p={5} justifyContent='space-between' gap={2} display='flex' flexDirection='column'>
                    
                            {search.length > 0 ? (
                                <Grid templateColumns='repeat(3, 1fr)' gap={2}>
                                {value?.map((items: any) => items.fixedIncome).map((fixe: any) => {
                                    return (
                                        <CardTab key={fixe} description={fixe.name
                                        } name={fixe.bondType} />
                                    )
                                })}

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
                                <CardInvest
                                    equity={0}
                                    indexerValue={0}
                                    percentageOverIndexer={0}
                                    portfolioPercentage={0}
                                    profitability={0}
                                    valueApplied={0}
                                />

                                {value?.map((items: any) => items.due).map((date: any) => {
                                    return (

                                        <CardDate key={date} dateVenc={date.date} dateDay={date.daysUntilExpiration} />
                                    )
                                })}

                            </Grid>
                            ): (
                                <Grid templateColumns='repeat(3, 1fr)' gap={2}>
                                {value?.map((items: any) => items.fixedIncome).map((fixe: any) => {
                                    return (
                                        <CardTab key={fixe} description={fixe.name
                                        } name={fixe.bondType} />
                                    )
                                })}

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
                                <CardInvest
                                    equity={0}
                                    indexerValue={0}
                                    percentageOverIndexer={0}
                                    portfolioPercentage={0}
                                    profitability={0}
                                    valueApplied={0}
                                />

                                {value?.map((items: any) => items.due).map((date: any) => {
                                    return (

                                        <CardDate key={date} dateVenc={date.date} dateDay={date.daysUntilExpiration} />
                                    )
                                })}

                            </Grid>
                            )}
                </Box>

            </Box>


        </>

    )
}