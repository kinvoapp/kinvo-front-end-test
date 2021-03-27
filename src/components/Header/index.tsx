//-------------------------------------------------------------------< assets >
import logo from "../../assets/logo.svg";
import grossBalanceIcon from "../../assets/gross-balance.svg";
import appliedValueIcon from "../../assets/applied-value.svg";
import profitabilityIcon from "../../assets/profitability.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import menuIcon from "../../assets/menu.svg";
//-------------------------------------------------------------------< styles >
import { Container, Info } from "./styles";
//===============================================================[ < Header > ]
export function Header() {
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
          <strong>130.521.230,02</strong>
        </Info>

        <Info>
          <div>
            <img src={appliedValueIcon} alt="Valor Aplicado" />
          </div>
          <p>VALOR APLICADO</p>
          <strong>521.230,02</strong>
        </Info>

        <Info>
          <div>
            <img src={profitabilityIcon} alt="Rentabilidade" />
          </div>
          <p>RENTABILIDADE</p>
          <strong>2,34%</strong>
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
