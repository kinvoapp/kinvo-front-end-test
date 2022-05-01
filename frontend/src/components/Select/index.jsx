import { Container } from "./styles";

export function Select(
    {
        name,
        defaulTitle,
        onChange 
    }
){
    return(
        <Container
            name={name}
            onChange={onChange}
        >
            <option defaultValue='Default' value='Default' hidden>
                {defaulTitle}
            </option>
            <option value='Valor investido'>Valor investido</option>
            <option value='Saldo bruto'>Saldo bruto</option>
        </Container>
    )
}