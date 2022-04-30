import { Column, Container, Name, Value } from "./styles";


export function PortfolioComponent({name, value, type}) {

    if(type === "currency") {
            return(
                <Container>
                <Column />
                <div>
                    <Name>{name}</Name>
                    <Value>{value
                    .toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL"
                    })}</Value>
                </div>
            </Container>
        )
    }

    if (type === "percentage") {
        const percentageFormatter = new Intl.NumberFormat("pt-BR", {
            style: "percent",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
        return(
            <Container>
            <Column />
            <div>
                <Name>{name}</Name>
                <Value>{percentageFormatter.format(value/100)}</Value>
            </div>
        </Container>
    )
    }
}