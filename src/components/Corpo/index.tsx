import { ReactNode } from "react";
import { Container } from "./style";


interface CorpoProps {
    children: ReactNode;
}
export function Corpo ({ children }:CorpoProps ){
    return(
        <Container>
            { children }
        </Container>
    )
}