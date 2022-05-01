import { useState, useRef, useEffect } from "react";

import { Container, OrderButton, SearchBar, HeaderTitle, MenuSection, HeaderSection, MainSection, OrderButtonModal, ModalOption } from "./styles";

import { ReactComponent as ArrowDown2} from "../../assets/arrowDown2.svg"
import { ReactComponent as Magnifier } from "../../assets/magnifier.svg"

import { Title } from "./Title/index"


export function FixedIncomes({products=[]}) {

    const incomesArray = products.map((product) => {
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
    
    useEffect(() => {
        setFixedIncomes(incomesArray)
    }, [products])

    const [fixedIncomes, setFixedIncomes] = useState(incomesArray)
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false)


    function searchIncomes(search) {
        setResults(fixedIncomes.filter((product) => {
            const name = product.name.toLowerCase()
            return name.includes(search.toLowerCase());
        }))
        setSearch(search);
    }

    function orderChange(order) {
        setShowModal(!showModal)
        switch (order) {
            case 'none':
                setFixedIncomes(incomesArray)
                break
            case 'alphabetical':
                setFixedIncomes(
                    incomesArray.sort((a, b) => a.name.localeCompare(b.name))
                    )
                break
            case'valueApplied':
                setFixedIncomes(
                    incomesArray.sort((a, b) => b.valueApplied - a.valueApplied)
                )
                break
            case 'date':
                setFixedIncomes(
                    incomesArray.sort((a, b) => a.daysUntilExpiration - b.daysUntilExpiration)
                )
                break
            default:
                return
        }
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
                        {
                            showModal
                            &&

                        <OrderButtonModal>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                        </OrderButtonModal>
                        }
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
                                return <Title key={product.portfolioProductId} {...product} evenPosition={"even"}/>
                            }
                            return <Title key={product.portfolioProductId} {...product} evenPosition={"odd"}/>
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
                    <OrderButton onClick={() => setShowModal(!showModal)}>
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
                            {
                                    showModal
                                    &&
        
                                <OrderButtonModal>
                                    <ModalOption onClick={() => orderChange('none')}>NENHUM</ModalOption>
                                    <ModalOption onClick={() => orderChange('alphabetical')}>ORDEM ALFABÉTICA(A-Z)</ModalOption>
                                    <ModalOption onClick={() => orderChange('valueApplied')}>VALOR INVESTIDO</ModalOption>
                                    <ModalOption onClick={() => orderChange('date')}>DATA DE VENCIMENTO</ModalOption>
                                </OrderButtonModal>
                            }
            </HeaderSection>
            <MainSection>
                    {
                        fixedIncomes.map((product, index) => {
                            if (index % 2 === 0) {

                                return <Title key={product.portfolioProductId} {...product} evenPosition={"even"}/>
                            }
                            return <Title key={product.portfolioProductId} {...product} evenPosition={"odd"}/>
                        })
                    }
            </MainSection>
        </Container>
    )
}