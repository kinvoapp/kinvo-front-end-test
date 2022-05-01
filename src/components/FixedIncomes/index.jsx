import { useState } from "react";

import { Container, OrderButton, SearchBar, HeaderTitle, MenuSection, HeaderSection, MainSection } from "./styles";

import { ReactComponent as ArrowDown2} from "../../assets/arrowDown2.svg"
import { ReactComponent as Magnifier } from "../../assets/magnifier.svg"

import { Title } from "./Title/index"


export function FixedIncomes({products}) {

    const [result, setResult] = useState([])

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
                            <input  />
                    </SearchBar>
                </MenuSection>
            </HeaderSection>
            <MainSection>
                {   
                    (products)
                    //TODO: Fazer o product
                    ?   (products.map((product) => {
                            const productData = {
                                name: product.fixedIncome.name,
                                bondType: product.fixedIncome.bondType,
                                valueApplied: product.position.valueApplied,
                                equity: product.position.equity,
                                profitability: product.position.profitability,
                                portfolioPercentage: product.position.portfolioPercentage,
                                indexerValue: product.position.indexerValue,
                                percentageOverIndexer: product.position.percentageOverIndexer,
                                date: product.due.date,
                                daysUntilExpiration: product.due.daysUntilExpiration
                            }
                            return (
                                <Title 
                                    {...productData}
                                />
                            )
                        }))

                    :   <p>TODO</p>

                }
            </MainSection>
        </Container>
    )
}