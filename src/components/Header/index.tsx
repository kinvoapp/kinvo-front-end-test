//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//--------------------------------------------------------------------< utils >
import { formatNumber } from "../../utils/formatNumber";
//-------------------------------------------------------------------< assets >
import logo from "../../assets/logo.svg";
import grossBalanceIcon from "../../assets/gross-balance.svg";
import appliedValueIcon from "../../assets/applied-value.svg";
import profitabilityIcon from "../../assets/profitability.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import menuIcon from "../../assets/menu.svg";
//--------------------------------------------------------------------< mocks >
import snapshotByPortfolio from "../../mocks/snapshotByPortfolio.json";
//-------------------------------------------------------------------< styles >
import { Container, Info } from "./styles";
//--------------------------------------------------------------------< types >
import { Portfolio } from "../../types/Portfolio";
//===============================================================[ < Header > ]
export function Header() {
  //-------------------------------------------------------------< properties >
  const [portfolio] = useState<Portfolio>(snapshotByPortfolio);
  //-----------------------------------------------------------------< return >
  return (
    <Container>
      <img src={logo} alt="Kinvo Premium" />

      <div className="infos">
        <Info>
          <div>
            <img src={grossBalanceIcon} alt="Saldo Bruto" />
          </div>
          <p>SALDO BRUTO</p>
          <strong>{formatNumber(portfolio.equity)}</strong>
        </Info>

        <Info>
          <div>
            <img src={appliedValueIcon} alt="Valor Aplicado" />
          </div>
          <p>VALOR APLICADO</p>
          <strong>{formatNumber(portfolio.valueApplied)}</strong>
        </Info>

        <Info>
          <div>
            <img src={profitabilityIcon} alt="Rentabilidade" />
          </div>
          <p>RENTABILIDADE</p>
          <strong>{formatNumber(portfolio.percentageProfit)}%</strong>
        </Info>

        <Info focus>
          <div>
            <img src={arrowDownIcon} alt="Minha Carteira" />
          </div>
          <p>CARTEIRA</p>
          <strong>Minha Carteira</strong>
        </Info>

        <Info focus>
          <div>
            <img src={menuIcon} alt="Menu" />
          </div>
        </Info>
      </div>
    </Container>
  );
}
