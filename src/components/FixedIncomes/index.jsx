import { useState } from "react";

import { Container, OrderButton, SearchBar, HeaderTitle, MenuSection, HeaderSection, MainSection } from "./styles";

import { ReactComponent as ArrowDown2} from "../../assets/arrowDown2.svg"
import { ReactComponent as Magnifier } from "../../assets/magnifier.svg"

import { Title } from "./Title/index"


export function FixedIncomes({products=[]}) {

        const incomes = products.map((product) => {
            return (
                {
                    name: product.fixedIncome.name,
                    bondType: product.fixedIncome.bondType,
                valueApplied: product.position.valueApplied,
                equity: product.position.equity,
                profitability: product.position.profitability,
                portfolioPercentage: product.position.portfolioPercentage,
                indexerValue: product.position.indexerValue,
                percentageOverIndexer: product.position.percentageOverIndexer,
                date: product.due.date,
                daysUntilExpiration: product.due.daysUntilExpiration,
                portfolioProductId: product.fixedIncome.portfolioProductId,
            }
        )});
    
    
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    
    function searchIncomes(search) {
        setResults(incomes.filter((product) => {
            const name = product.name.toLowerCase()
            console.log(name)
            console.log(name.includes(search.toLowerCase()))
            return name.includes(search.toLowerCase());
        }))
        setSearch(search);
    }

    if(search !== '') {
        return (
            <Container>
                <HeaderSection>
                    <HeaderTitle>Minhas Rendas Fixas</HeaderTitle>
                    <MenuSection>
                        <OrderButton>
                                <p>Ordenar por</p>
                                <ArrowDown2 />
                        </OrderButton>
                        <SearchBar>
                                <Magnifier 
                                    style={{
                                        position: 'relative',
                                        left: "1.3rem",
                                    }}
                                    />
                                <input
                                value={search}  
                                onChange={(event) => searchIncomes(event.target.value)}
                                />
                        </SearchBar>
                    </MenuSection>
                </HeaderSection>
                <MainSection>
                    {
                        results.map((product, index) => {
                            if (index % 2 === 0) {

                                return <Title key={product.portfolioProductId} {...product}/>
                            }
                        })
                    }
                </MainSection>
            </Container>
        )
    }

    return (
        <Container>
            <HeaderSection>
                <HeaderTitle>Minhas Rendas Fixas</HeaderTitle>
                <MenuSection>
                    <OrderButton>
                            <p>Ordenar por</p>
                            <ArrowDown2 />
                    </OrderButton>
                    <SearchBar>
                            <Magnifier 
                                style={{
                                    position: 'relative',
                                    left: "1.3rem",
                                }}
                                />
                            <input
                            value={search}  
                            onChange={(event) => setSearch(event.target.value)}
                            />
                    </SearchBar>
                </MenuSection>
            </HeaderSection>
            <MainSection>
                    {
                        incomes.map((product, index) => {
                            if (index % 2 === 0) {

                                return <Title key={product.portfolioProductId} {...product}/>
                            }
                        })
                    }
            </MainSection>
        </Container>
    )
}