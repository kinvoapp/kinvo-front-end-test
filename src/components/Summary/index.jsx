import { PortfolioComponent } from "./PortfolioComponent";
import { Container, SummaryPortfolio, } from "./styles";


export function Summary({ portfolio }) {

    return (
        <Container>
            <h2>Renda Fixa</h2>
            {portfolio
            && 
            <SummaryPortfolio>
                <PortfolioComponent 
                    name="SALDO BRUTO" 
                    value={portfolio.equity} 
                    type={"currency"}/>
                <PortfolioComponent 
                    name="VALOR APLICADO" 
                    value={portfolio.valueApplied} 
                    type={"currency"}/>
                <PortfolioComponent 
                    name="RESULTADO" 
                    value={portfolio.equityProfit} 
                    type={"currency"}/>
                <PortfolioComponent 
                    name="RENTABILIDADE" 
                    value={portfolio.percentageProfit} 
                    type={"percentage"}/>
                <PortfolioComponent 
                    name="CDI"
                    value={portfolio.indexerValue} 
                    type={"percentage"}/>
                <PortfolioComponent 
                    name="% SOBRE CDI" 
                    value={portfolio.percentageOverIndexer} 
                    type={"percentage"}/>
            </SummaryPortfolio>
            }
            
        </Container>

    )
}