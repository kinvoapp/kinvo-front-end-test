import React, { useEffect, useState } from 'react';
import { CardContainer, ContainerTop, FixedIncomeDetails, InputxBox } from '../../GlobalStyles';
import { GeneralBody } from '../../components/GeneralBody';
import Header from '../../components/Header';
import SnapshotPortfolioStats from '../../components/PortifolioStatsCard';
import SnapshotProductStats from '../../components/ProductStatsCard';
import TitleMain from '../../components/TitleMain';
import { IResponseData, snapshotProductType } from '../../interfaces/apiResponse';
import api from '../../services/api';
import { formatToCurrency } from '../../utils/formatToCurrency';



function Homepage() {
    const [fixedIncomeData, setFixedIncomeData] = useState<IResponseData>({} as IResponseData);
    const [isLoading, setLoading] = useState(true);
    const [snapshotList, setSnapshotList] = useState<snapshotProductType[]>([]);


    useEffect(() => {
        setLoading(true)
        api.get('/getFixedIncomeClassData').then((response) => {
            const responseFixedIncome = response.data;
            setFixedIncomeData(responseFixedIncome.data);
            setSnapshotList(responseFixedIncome.data.snapshotByProduct)
            setLoading(false)
        })
    }, [])

    const filterByName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        const filterData = snapshotList.filter((item) => {
            return item.fixedIncome.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setSnapshotList(filterData)
        if (searchTerm === '') {
            setSnapshotList(fixedIncomeData.snapshotByProduct)
        }
    }

    const sortSnapshotData: any = {
        'Valor_Investido': () => {
            const ordered_list = [...snapshotList].sort((a, b) => {
                if (a.position.valueApplied > b.position.valueApplied) {
                    return -1;
                }
                if (a.position.valueApplied < b.position.valueApplied) {
                    return 1;
                }
                return 0;
            })
            setSnapshotList(ordered_list)
        },
        'Saldo_Bruto': () => {
            const ordered_list = [...snapshotList].sort((a, b) => {
                if (a.position.equity > b.position.equity) {
                    return -1;
                }
                if (a.position.equity < b.position.equity) {
                    return 1;
                }
                return 0;
            })
            setSnapshotList(ordered_list)
        },
        'Rentabilidade': () => {
            const ordered_list = [...snapshotList].sort((a, b) => {
                if (a.position.profitability > b.position.profitability) {
                    return -1;
                }
                if (a.position.profitability < b.position.profitability) {
                    return 1;
                }
                return 0;
            })
            setSnapshotList(ordered_list)
        },
        'da_Carteira': () => {
            const ordered_list = [...snapshotList].sort((a, b) => {
                if (a.position.portfolioPercentage > b.position.portfolioPercentage) {
                    return -1;
                }
                if (a.position.portfolioPercentage < b.position.portfolioPercentage) {
                    return 1;
                }
                return 0;
            })
            setSnapshotList(ordered_list)
        },
        'CDI': () => {
            const ordered_list = [...snapshotList].sort((a, b) => {
                if (a.position.indexerValue > b.position.indexerValue) {
                    return -1;
                }
                if (a.position.indexerValue < b.position.indexerValue) {
                    return 1;
                }
                return 0;
            })
            setSnapshotList(ordered_list)
        },
        'Sobre_CDI': () => {
            const ordered_list = [...snapshotList].sort((a, b) => {
                if (a.position.percentageOverIndexer > b.position.percentageOverIndexer) {
                    return -1;
                }
                if (a.position.percentageOverIndexer < b.position.percentageOverIndexer) {
                    return 1;
                }
                return 0;
            })
            setSnapshotList(ordered_list)
        }
    }

    return (
        <div className="App">
            <Header />
            <GeneralBody>
                <>
                    <TitleMain
                        text='Renda Fixa'
                        color='#4C309B'
                        fontWeight={800}
                    />

                    {isLoading ? <p>Carregando...</p> : (
                        <CardContainer>
                            <SnapshotPortfolioStats
                                title='saldo bruto'
                                content={
                                    `${formatToCurrency(fixedIncomeData.snapshotByPortfolio.equity)}`
                                }
                            />
                            <SnapshotPortfolioStats
                                title='valor aplicado'
                                content={
                                    `${formatToCurrency(fixedIncomeData.snapshotByPortfolio.valueApplied)}`
                                }
                            />
                            <SnapshotPortfolioStats
                                title='resultado'
                                content={
                                    `${formatToCurrency(fixedIncomeData.snapshotByPortfolio.equityProfit)}`
                                }
                            />
                            <SnapshotPortfolioStats
                                title='rentabilidade'
                                content={
                                    `${fixedIncomeData.snapshotByPortfolio.percentageProfit}%`
                                }
                            />
                            <SnapshotPortfolioStats
                                title='cdi'
                                content={
                                    `${fixedIncomeData.snapshotByPortfolio.indexerValue}%`
                                }
                            />
                            <SnapshotPortfolioStats
                                title='% sobre cdi'
                                content={
                                    `${fixedIncomeData.snapshotByPortfolio.percentageOverIndexer}%`
                                }
                            />
                        </CardContainer>
                    )}
                </>
                <FixedIncomeDetails>
                    <ContainerTop>
                        <TitleMain
                            text='Minhas Rendas Fixas'
                            color='#627179'
                        />
                        <InputxBox>
                            <select onChange={
                                (e: any) => {
                                    const sorting = sortSnapshotData[e.target.value]();
                                }
                            }>
                                <option value="" disabled selected>Ordenar por</option>
                                <option value="Valor_Investido">Valor Investido</option>
                                <option value="Saldo_Bruto">Saldo Bruto</option>
                                <option value="Rentabilidade">Rentabilidade</option>
                                <option value="da_Carteira">% da Carteira</option>
                                <option value="CDI">CDI</option>
                                <option value="Sobre_CDI">Sobre CDI</option>
                            </select>
                            <input type="text" placeholder='' onChange={filterByName} />
                        </InputxBox>
                    </ContainerTop>
                    <hr />
                    <div className='card_conatiner'>
                        {isLoading ? <p>Carregando...</p> : (
                            <>
                                {snapshotList.map((item) => {
                                    return (
                                        <>
                                            <SnapshotProductStats
                                                title='Título'
                                                dataFixed={item.fixedIncome}
                                            />
                                            <SnapshotProductStats
                                                title='Minha Posição'
                                                dataPosition={item.position}
                                            />
                                            <SnapshotProductStats
                                                title='Vencimento'
                                                dataDue={item.due}
                                            />
                                        </>
                                    )
                                })}
                            </>
                        )}

                    </div>
                </FixedIncomeDetails>
            </GeneralBody>
        </div >
    );
}

export default Homepage;