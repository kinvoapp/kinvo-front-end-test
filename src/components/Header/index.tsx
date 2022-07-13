import { useContext } from "react";

import { IncomeContext } from "../../contexts/income";
import { Container } from "./styles";

import logoSVG from '../../assets/logo.svg';
import profitIcon from '../../assets/profitIcon.svg'
import equityIcon from '../../assets/equityIcon.svg';
import valueAppliedIcon from '../../assets/valueAppliedIcon.svg';
import { format } from "../../utils/format";

export function Header() {
  const { fullData } = useContext(IncomeContext);
  return (
    <Container>
      <header>
        <img src={logoSVG} alt="Kinvo Premium Logo" />

        <ul>
          <li>
            <div className="icon">
              <img src={equityIcon} alt="" />
            </div>
            <div className="content">
              <span className="content__title">
                Saldo bruto
              </span>
              <span className="content__description">
                {format(fullData.snapshotByPortfolio.equity)}
              </span>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={valueAppliedIcon} alt="" />
            </div>
            <div className="content">
              <span className="content__title">
                Valor Aplicado
              </span>
              <span className="content__description">
                {format(fullData.snapshotByPortfolio.valueApplied)}
              </span>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={profitIcon} alt="" />
            </div>
            <div className="content">
              <span className="content__title">
                Rentabilidade
              </span>
              <span className="content__description">
                {fullData.snapshotByPortfolio.percentageProfit}%
              </span>
            </div>
          </li>
        </ul>
      </header>
    </Container>
  )
}