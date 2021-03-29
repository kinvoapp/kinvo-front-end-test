//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//--------------------------------------------------------------------< utils >
import { formatNumber } from "../../../../utils/formatNumber";
import { formatDate } from "../../../../utils/formatDate";
//-------------------------------------------------------------------< assets >
import searchIcon from "../../../../assets/search.svg";
import infoIcon from "../../../../assets/info.svg";
import arrowLeftIcon from "../../../../assets/nav-arrow-left.svg";
import arrowRightIcon from "../../../../assets/nav-arrow-right.svg";
//--------------------------------------------------------------------< mocks >
import snapshotByProduct from "../../../../mocks/snapshotByProduct.json";
//-------------------------------------------------------------------< styles >
import { Container, Header, Item, Navigator } from "./styles";
//--------------------------------------------------------------------< types >
import { Product } from "../../../../types/Product";
//==========================================================[ < FixedIncome > ]
export function FixedIncome() {
  //-------------------------------------------------------------< properties >
  const [products] = useState<Product[]>(snapshotByProduct);
  //-----------------------------------------------------------------< return >
  return (
    <Container>
      <Header>
        <h2>Minhas Rendas Fixas</h2>
        <div>Ordenar por</div>
        <label>
          <img src={searchIcon} alt="search" />
          <input type="text" />
        </label>
      </Header>

      <ul>
        {products.map(({ fixedIncome, position, due }, index) => (
          <Item key={index} isDark={!!(index % 2)}>
            <section className="fixed-income">
              <h3>
                TÍTULO <img src={infoIcon} alt="Sobre" />
              </h3>
              <main>
                <p>{fixedIncome.name}</p>
                <h4>
                  CLASSE <strong>{fixedIncome.bondType}</strong>
                </h4>
              </main>
            </section>

            <section className="position">
              <h3>
                MINHA POSIÇÃO <img src={infoIcon} alt="Sobre" />
              </h3>
              <main>
                <h4>
                  VALOR INVES.{" "}
                  <strong>{formatNumber(position.valueApplied)}</strong>
                </h4>
                <h4>
                  SALDO BRUTO <strong>{formatNumber(position.equity)}</strong>
                </h4>
                <h4>
                  RENT. <strong>{formatNumber(position.profitability)}%</strong>
                </h4>
                <h4>
                  % DA CART.{" "}
                  <strong>{formatNumber(position.portfolioPercentage)}%</strong>
                </h4>
                <h4>
                  CDI{" "}
                  <strong>
                    {formatNumber(position.percentageOverIndexer)}
                  </strong>
                </h4>
                <h4>
                  SOBRE CDI{" "}
                  <strong>{formatNumber(position.indexerValue)}</strong>
                </h4>
              </main>
            </section>

            <section className="due">
              <h3>
                VENCIMENTO <img src={infoIcon} alt="Sobre" />
              </h3>
              <main>
                <h4>
                  DATA VENC. <strong>{formatDate(due.date)}</strong>
                </h4>
                <h4>
                  DATA ATÉ VENC. <strong>{due.daysUntilExpiration}</strong>
                </h4>
              </main>
            </section>
          </Item>
        ))}
      </ul>

      <footer>
        <Navigator>
          <img src={arrowLeftIcon} alt="<" />
        </Navigator>
        <Navigator selected>1</Navigator>
        <Navigator>2</Navigator>
        <Navigator>
          <img src={arrowRightIcon} alt=">" />
        </Navigator>
      </footer>
    </Container>
  );
}
