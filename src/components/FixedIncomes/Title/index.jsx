import { Container, DueDate, NameSection, Result, BondType, Name, ResultComponent, DueDateComponent, LowerSection, UpperSection } from "./styles";
import { ReactComponent as FixedIncomeInfo } from "../../../assets/fixedIncomeInfo.svg"

export function Title({
    name, 
    bondType, 
    valueApplied,
    equity,
    profitability,
    portfolioPercentage,
    indexerValue,
    percentageOverIndexer,
    date,
    daysUntilExpiration,
    evenPosition
} ) {
    const percentageFormatter = new Intl.NumberFormat("pt-BR", {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    return (
        <Container className={evenPosition}>
            <NameSection>
                <UpperSection>
                    <p>TÍTULO</p>
                    <FixedIncomeInfo />
                </UpperSection>
                <LowerSection>
                    <Name>{name}</Name>
                    <div>
                        <p>CLASSE</p>
                        <BondType>{bondType}</BondType>
                    </div>
                </LowerSection>
            </NameSection>
            <Result>
                <UpperSection>
                    <p>RESULTADO</p>
                    <FixedIncomeInfo />
                </UpperSection>
                <LowerSection>
                <ResultComponent>
                   <p>VALOR INVES.</p>
                   <p>{valueApplied.toLocaleString('pt-BR')}</p>
               </ResultComponent>
               <ResultComponent>
                   <p>SALDO BRUTO</p>
                   <p>{equity.toLocaleString('pt-BR')}</p>
               </ResultComponent>
               <ResultComponent>
                   <p>RENT.</p>
                   <p>{percentageFormatter.format(profitability/100)}</p>
               </ResultComponent>
               <ResultComponent>
                   <p>% DA CART.</p>
                   <p>{percentageFormatter.format(portfolioPercentage/100)}</p>
               </ResultComponent>
               <ResultComponent>
                   <p>CDI</p>
                   <p>{indexerValue.toLocaleString('pt-BR')}</p>
               </ResultComponent>
               <ResultComponent>
                   <p>SOBRE CDI</p>
                   <p>{percentageOverIndexer.toLocaleString('pt-BR')}</p>
               </ResultComponent>
                </LowerSection>
               
            </Result>
            <DueDate>
                <UpperSection>
                    <p>VENCIMENTO</p>
                    <FixedIncomeInfo />
                </UpperSection>
                <LowerSection>

                <DueDateComponent>
                    <p>DATA VENC.</p>
                    <p>{date}</p>
                </DueDateComponent>
                <DueDateComponent>
                    <p>DIAS ATÉ VENC.</p>
                    <p>{daysUntilExpiration}</p>
                </DueDateComponent>
                </LowerSection>
            </DueDate>
        </Container>
    )
}