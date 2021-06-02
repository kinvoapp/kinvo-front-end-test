import { FixedIncomeTitle } from "./styles";
import InfoIcon from "../../assets/icons/info.svg";
import { formatMoney } from "../../utils/formatMoney";

export function FixedIncomePostionCard({ data }) {
  return (
    <FixedIncomeTitle plus>
      <div className="title">
        <span>POSIÇÃO</span>
        <img src={InfoIcon} alt="informação" />
      </div>
      <div className="title-body">
        <div className="class-green">
          <span>VALOR INVES.</span>
          <strong>{formatMoney(data.valueApplied)}</strong>
        </div>
        <div className="class-green">
          <span>SALDO BRUTO</span>
          <strong>{formatMoney(data.equity)}</strong>
        </div>
        <div className="class-green">
          <span>RENT.</span>
          <strong>{data.profitability}%</strong>
        </div>
        <div className="class-green">
          <span>% DA CART.</span>
          <strong>{data.portfolioPercentage}%</strong>
        </div>
        <div className="class-green">
          <span>CDI</span>
          <strong>{data.indexerValue}</strong>
        </div>
        <div className="class-green">
          <span>SOBRE CDI</span>
          <strong>{data.percentageOverIndexer}</strong>
        </div>
      </div>
    </FixedIncomeTitle>
  );
}
