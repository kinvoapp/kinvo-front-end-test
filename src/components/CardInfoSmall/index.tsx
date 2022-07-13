import { ReactNode } from "react";
import { format } from "../../utils/format";
import { Card } from "../Card";
import { Container } from "./styles";

interface CardInfoSmallProps {
  title: string;
  description: string | number;
  type: "percentage" | "currency"
}

export function CardInfoSmall({ title, description, type }: CardInfoSmallProps) {
  return (
    <Card>
      <Container>
        <span className="divider" />

        <span className="title">{title}</span>
        <span className="description">
          {type === 'currency' ?
            format(description) :
            `${description}%`
          }
        </span>
      </Container>
    </Card>
  )
}