import { ReactNode } from "react";
import { Container } from "./styles";

interface CardProps {
  children: ReactNode;
  title?: string;
  expanded?: boolean
}

export function Card({ children, title, expanded }: CardProps) {
  return (
    <Container expanded={expanded}>
      {title ?? <h3>{title}</h3>}
      {children}
    </Container>
  )
}