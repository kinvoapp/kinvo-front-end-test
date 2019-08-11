import React from "react";

import { Container } from "./styles";

const ListBox = ({ dado }) => (
  <article>
    {dado.map(repository => (
      <Container key={repository.productName}>
        <ul>
          <div>
            <h4>{repository.productName}</h4>
          </div>
          <li>
            <span>saldo atual</span>
            <p>R$ {repository.equity}</p>
          </li>
          <li>
            <span>quant.</span>
            <p>{repository.amount}</p>
          </li>
          <li>
            <span>preço médio</span>
            <p>R$ {repository.averagePrice}</p>
          </li>
          <li>
            <span>última cotação</span>
            <p>R$ {repository.lastQuotation}</p>
          </li>
          <li>
            <span>yield(1m)</span>
            <p>{repository.currentMonthYield}%</p>
          </li>
          <li>
            <span>yield(12m)</span>
            <p>{repository.lastTwelveMonthsYeld}%</p>
          </li>
          <li>
            <span>% carteira</span>
            <p>{repository.lastTwelveMonthsYeld}%</p>
          </li>
        </ul>
      </Container>
    ))}
  </article>
);

export default ListBox;
