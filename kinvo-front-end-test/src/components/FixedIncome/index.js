import React from 'react';
import { FaSearch } from 'react-icons/fa';

import client from '../../services/api'
import { 
    Container,
    Separator,
    Title,
    ContainerInformation,
    ContainerGraphic,
    Image,
    ContainerFixedIncome,
    ContainerFixedIncomeTitle,
    ContainerFixedIncomeBody,
    ContainerItems,
    FixedIncomeTitle,
    Order,
    Search
} from './style';
import ContainerInfo from './ContainerInfo'
import FixIncome from './ItensFixedIncome/FixIncome'
import PositionIncome from './ItensFixedIncome/PositionIncome'
import DueIncome from './ItensFixedIncome/DueIncome'
import teste from '../../assets/Grupo4343.svg'

class FixedIncome extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            dailyEquityByPortfolioChartData: [],
            snapshotByPortfolio: {
                equity: 0,
                equityProfit: 0,
                indexerValue: 0,
                percentageOverIndexer: 0,
                percentageProfit: 0,
                valueApplied:  0
            },
            snapshotByProduct: [],
            FixedIncome: false,
        }
    }

    async componentDidMount(){
        await this.getFixedIncomeClassData()
    }

    getFixedIncomeClassData = async () =>{
        const { data } = await client.get('getFixedIncomeClassData')

        await this.setState({
            dailyEquityByPortfolioChartData: data.data.dailyEquityByPortfolioChartData,
            snapshotByPortfolio: data.data.snapshotByPortfolio,
            snapshotByProduct: data.data.snapshotByProduct,
            FixedIncome: true,
        });
        console.log(data)
    }

    Search = (value) => {
        console.log(value)
    }

    render(){
        return(
            <Container>
                <Title>Renda Fixa</Title>
                    {this.state.snapshotByPortfolio != {} ? (
                        <ContainerInformation>
                            <ContainerInfo
                                title="SALDO BRUTO"
                                value={this.state.snapshotByPortfolio.equity}
                            />
                            <ContainerInfo
                                title="VALOR APLICADO"
                                value={this.state.snapshotByPortfolio.valueApplied}
                            />
                            <ContainerInfo
                                title="RESULTADO"
                                value={this.state.snapshotByPortfolio.equityProfit}
                            />
                            <ContainerInfo
                                title="RENTABILIDADE"
                                type='percentage'
                                value={this.state.snapshotByPortfolio.percentageProfit}
                            />
                            <ContainerInfo
                                title="CDI"
                                type='percentage'
                                value={this.state.snapshotByPortfolio.indexerValue}
                            />
                            <ContainerInfo
                                title="% SOBRE CDI"
                                type='scdi'
                                value={this.state.snapshotByPortfolio.percentageOverIndexer}
                            />
                        </ContainerInformation>
                    ) : (
                        <ContainerInformation>
                        </ContainerInformation>
                    )}
                    
                <ContainerGraphic>
                    <Image src={teste}/>
                </ContainerGraphic>
                <ContainerFixedIncome>
                    <ContainerFixedIncomeTitle>
                        <Separator>
                            <FixedIncomeTitle>Minhas Rendas Fixas</FixedIncomeTitle>
                        </Separator>
                        <Separator>
                            <Order>
                                <option defaultChecked >Ordenar por</option>                            
                            </Order>
                                <FaSearch color="#9DA5AC" style={{
                                    position:'relative',
                                    top: '4px',
                                    left: '42px',
                                }}/>
                            <Search onChange={(e) => this.Search(e.target.value)}/>
                        </Separator>
                    </ContainerFixedIncomeTitle>
                    <ContainerFixedIncomeBody>
                        {this.state.FixedIncome == true ? (
                            this.state.snapshotByProduct.map((item, index) => {
                                return(
                                    <ContainerItems key={index}>
                                        <FixIncome
                                            title={item.fixedIncome.name}
                                            class={item.fixedIncome.bondType}
                                        />
                                        <PositionIncome
                                            avalueApplied={item.position.valueApplied}
                                            profitability={item.position.profitability}
                                            portfolioPercentage={item.position.portfolioPercentage}
                                            percentageOverIndexer={item.position.percentageOverIndexer}
                                            indexerValue={item.position.indexerValue}
                                            equity={item.position.equity}
                                        />
                                        <DueIncome
                                            date={item.due.date}
                                            days={item.due.daysUntilExpiration}
                                        />
                                    </ContainerItems>
                                )
                            })                            
                        ) : null}
                    </ContainerFixedIncomeBody>
                </ContainerFixedIncome>
            </Container>
        );
    }    
}

export default FixedIncome;