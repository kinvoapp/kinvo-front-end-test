//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { MenuContext } from "../../contexts/MenuContext";
//--------------------------------------------------------------------< utils >
import { formatNumber } from "../../utils/formatNumber";
//-------------------------------------------------------------------< assets >
import logo from "../../assets/logo.svg";
import equityIcon from "../../assets/equity.svg";
import valueAppliedIcon from "../../assets/value-applied.svg";
import percentageProfitIcon from "../../assets/percentage-profit.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import menuIcon from "../../assets/menu.svg";
//-------------------------------------------------------------------< styles >
import { Container, PortfolioContainer } from "./styles";
//--------------------------------------------------------------------< types >
import { PortfolioContext } from "../../contexts/PortfolioContext";
//===============================================================[ < Header > ]
export function Header() {
  //-------------------------------------------------------------< properties >
  const { visibility, toggleVisibility } = useContext(MenuContext);
  const { portfolio, error, loaded } = useContext(PortfolioContext);
  //-----------------------------------------------------------------< return >
  return (
    <Container>
      <img src={logo} alt="Kinvo Premium" />

      <div className="portfolio">
        {!error && loaded && portfolio && (
          <>
            <PortfolioContainer>
              <div>
                <img src={equityIcon} alt="Saldo Bruto" />
              </div>
              <p>SALDO BRUTO</p>
              <strong>{formatNumber(portfolio.equity)}</strong>
            </PortfolioContainer>

            <PortfolioContainer>
              <div>
                <img src={valueAppliedIcon} alt="Valor Aplicado" />
              </div>
              <p>VALOR APLICADO</p>
              <strong>{formatNumber(portfolio.valueApplied)}</strong>
            </PortfolioContainer>

            <PortfolioContainer>
              <div>
                <img src={percentageProfitIcon} alt="Rentabilidade" />
              </div>
              <p>RENTABILIDADE</p>
              <strong>{formatNumber(portfolio.percentageProfit)}%</strong>
            </PortfolioContainer>
          </>
        )}

        <PortfolioContainer focus>
          <div>
            <img src={arrowDownIcon} alt="Minha Carteira" />
          </div>
          <p>CARTEIRA</p>
          <strong>Minha Carteira</strong>
        </PortfolioContainer>

        <PortfolioContainer focus={visibility === "visible"}>
          <div onClick={toggleVisibility} style={{ cursor: "pointer" }}>
            <img src={menuIcon} alt="Menu" />
          </div>
        </PortfolioContainer>
      </div>
    </Container>
  );
}
