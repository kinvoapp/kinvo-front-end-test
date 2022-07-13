import { ReactNode } from "react";
import { Container } from "./styles";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}