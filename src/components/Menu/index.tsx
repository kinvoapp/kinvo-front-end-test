//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { MenuContext } from "../../contexts/MenuContext";
//-------------------------------------------------------------------< assets >
import portfolioSummaryIcon from "../../assets/portfolio-summary.svg";
import arrowRight from "../../assets/arrow-right.svg";
import myProductsIcon from "../../assets/my-products.svg";
import myEarningsIcon from "../../assets/my-earnings.svg";
import assetClassIcon from "../../assets/asset-class.svg";
import realProfitabilityIcon from "../../assets/real-profitability.svg";
import portfolioProjectionIcon from "../../assets/portfolio-projection.svg";
import riskXReturnIcon from "../../assets/risk-x-return.svg";
import fgcCoverIcon from "../../assets/fgc-cover.svg";
//-------------------------------------------------------------------< styles >
import { Container, Tab, SubTab, Film } from "./styles";
//=================================================================[ < Menu > ]
export function Menu() {
  //-------------------------------------------------------------< properties >
  const { visibility } = useContext(MenuContext);
  //-----------------------------------------------------------------< return >
  return (
    <>
      <Container className={visibility}>
        <Tab>
          <div>
            <img src={portfolioSummaryIcon} alt="Resumo da Carteira" />
          </div>
          <p>
            Resumo
            <br />
            da Carteira
          </p>
          <img src={arrowRight} alt="Seta" />
        </Tab>

        <Tab>
          <div>
            <img src={myProductsIcon} alt="Meus Produtos" />
          </div>
          <p>
            Meus
            <br />
            Produtos
          </p>
          <img src={arrowRight} alt="Seta" />
        </Tab>

        <Tab>
          <div>
            <img src={myEarningsIcon} alt="Meus Proventos" />
          </div>
          <p>
            Meus
            <br />
            Proventos
          </p>
          <img src={arrowRight} alt="Seta" />
        </Tab>

        <Tab focus>
          <div>
            <img src={assetClassIcon} alt="Classe de Ativos" />
          </div>
          <p>
            Classe
            <br />
            de Ativos
          </p>
          <img src={arrowRight} alt="Seta" />

          <ul>
            <SubTab>
              Ação
              <img src={arrowRight} alt="Seta" />
            </SubTab>

            <SubTab>
              Fundo
              <img src={arrowRight} alt="Seta" />
            </SubTab>

            <SubTab>
              Fundo Imobiliário
              <img src={arrowRight} alt="Seta" />
            </SubTab>

            <SubTab focus>
              Fundo Renda Fixa
              <img src={arrowRight} alt="Seta" />
            </SubTab>
          </ul>
        </Tab>

        <Tab>
          <div>
            <img src={realProfitabilityIcon} alt="Rentabilidade Real" />
          </div>
          <p>
            Rentabilidade
            <br />
            Real
          </p>
          <img src={arrowRight} alt="Seta" />
        </Tab>

        <Tab>
          <div>
            <img src={portfolioProjectionIcon} alt="Projeção de Carteira" />
          </div>
          <p>
            Projeção
            <br />
            da Carteira
          </p>
          <img src={arrowRight} alt="Seta" />
        </Tab>

        <Tab>
          <div>
            <img src={riskXReturnIcon} alt="Risco x Retorno" />
          </div>
          <p>
            Risco x<br />
            Retorno
          </p>
          <img src={arrowRight} alt="Seta" />
        </Tab>

        <Tab>
          <div>
            <img src={fgcCoverIcon} alt="Cobertura do FGC" />
          </div>
          <p>
            Cobertura
            <br />
            do FGC
          </p>
          <img src={arrowRight} alt="Seta" />
        </Tab>
      </Container>
      {visibility === "visible" && <Film />}
    </>
  );
}
