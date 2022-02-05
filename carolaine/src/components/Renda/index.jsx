import React from "react";
import { RendaContainer, Item, Title, Columns, Texto, Classe } from "./style";
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";

const Renda = ({ income }) => {
  const className = income.fixedIncome.bondType;
  const title = income.fixedIncome.name;

  // console.log(income.fixedIncome);

  return (
    <RendaContainer>
      <Item $mode="title">
        <Title>
          <span>Título</span>
          <InfoIcon />
        </Title>
        <Columns>
          <Texto>{title}</Texto>
          <Classe></Classe>
        </Columns>
      </Item>

      <Item $mode="position">
        <Title>
          <span>Minha Posição</span>
          <InfoIcon />
        </Title>
        <Columns>
          <Texto></Texto>
          <Classe></Classe>
        </Columns>
      </Item>

      <Item $mode="due">
        <Title>
          <span>Vencimento</span>
          <InfoIcon />
        </Title>
        <Columns>
          <Texto></Texto>
          <Classe></Classe>
        </Columns>
      </Item>
    </RendaContainer>
  );
};

export default Renda;
